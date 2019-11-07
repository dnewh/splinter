// Copyright 2019 Cargill Incorporated
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

use super::{get_response_paging_info, Paging, DEFAULT_LIMIT, DEFAULT_OFFSET, QUERY_ENCODE_SET};
use percent_encoding::utf8_percent_encode;
use splinter::actix_web::{error::BlockingError, web, Error, HttpRequest, HttpResponse};
use splinter::futures::{future::IntoFuture, Future};
use splinter::{
    rest_api::{Method, Resource, RestResourceProvider},
    notifications::{Notification},
};
use std::collections::HashMap;

#[derive(Debug, Serialize, Deserialize, Clone, PartialEq)]
pub struct ListNotificationsResponse {
    data: Vec<Notification>,
    paging: Paging,
}

fn make_list_notifications_resource(source: Box<dyn NotificationsSource>) -> Resource {
    Resource::new(Method::Get, "/biome/users/{user}/notifications", move |r, _| {
        list_notifications(r, web::Data::new(registry.clone()))
    })
}

pub fn list_notifications(
    req: HttpRequest,
    source: web::Data<Box<dyn NotificationsSource>,
) -> Box<dyn Future<Item = HttpResponse, Error = Error>> {
    let query: web::Query<HashMap<String, String>> =
        if let Ok(q) = web::Query::from_query(req.query_string()) {
            q
        } else {
            return Box::new(
                HttpResponse::BadRequest()
                    .json(json!({
                        "message": "Invalid query"
                    }))
                    .into_future(),
            );
        };

    let offset = match query.get("offset") {
        Some(value) => match value.parse::<usize>() {
            Ok(val) => val,
            Err(err) => {
                return Box::new(
                    HttpResponse::BadRequest()
                        .json(format!(
                            "Invalid offset value passed: {}. Error: {}",
                            value, err
                        ))
                        .into_future(),
                )
            }
        },
        None => DEFAULT_OFFSET,
    };

    let limit = match query.get("limit") {
        Some(value) => match value.parse::<usize>() {
            Ok(val) => val,
            Err(err) => {
                return Box::new(
                    HttpResponse::BadRequest()
                        .json(format!(
                            "Invalid limit value passed: {}. Error: {}",
                            value, err
                        ))
                        .into_future(),
                )
            }
        },
        None => DEFAULT_LIMIT,
    };

    Box::new(query_list_nodes(
        source,
        Some(offset),
        Some(limit),
    ))
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::collections::HashMap;
    use std::env;
    use std::fs::{remove_file, File};
    use std::panic;
    use std::thread;

    use splinter::actix_web::{
        http::{header, StatusCode},
        test, web, App,
    };

    #[test]
    /// Tests a GET /nodes request returns the expected notifications.
    fn test_list_notifications_ok() {
        run_test(|test_yaml_file_path| {
            write_to_file(&test_yaml_file_path);

            let source: Box<dyn NotificationSource> = Box::new(
                YamlNotificationSource::new(test_yaml_file_path)
                    .expect("Error creating YamlNotificationSource"),
            );

            let mut app = test::init_service(
                App::new()
                    .data(source.clone())
                    .service(web::resource("/biome/users/{user}/notifications").route(web::get().to_async(list_notifications))),
            );

            let req = test::TestRequest::get().uri("/biome/users/{user}/notifications").to_request();

            let resp = test::call_service(&mut app, req);

            assert_eq!(resp.status(), StatusCode::OK);
            let nodes: ListNotificationsResponse = serde_yaml::from_slice(&test::read_body(resp)).unwrap();
            assert_eq!(nodes.data, vec![get_notification_1(), get_notification_2()]);
            assert_eq!(
                nodes.paging,
                create_test_paging_response(0, 100, 0, 0, 0, 2, "/biome/users/{user}/notifications?")
            )
        })
    }

    fn create_test_paging_response(
        offset: usize,
        limit: usize,
        next_offset: usize,
        previous_offset: usize,
        last_offset: usize,
        total: usize,
        link: &str,
    ) -> Paging {
        let base_link = format!("{}limit={}&", link, limit);
        let current_link = format!("{}offset={}", base_link, offset);
        let first_link = format!("{}offset=0", base_link);
        let next_link = format!("{}offset={}", base_link, next_offset);
        let previous_link = format!("{}offset={}", base_link, previous_offset);
        let last_link = format!("{}offset={}", base_link, last_offset);

        Paging {
            current: current_link,
            offset,
            limit,
            total,
            first: first_link,
            prev: previous_link,
            next: next_link,
            last: last_link,
        }
    }

    fn get_notification_1() -> Notification {
        let mut metadata = HashMap::new();
        metadata.insert("url".to_string(), "12.0.0.123:8431".to_string());
        metadata.insert("company".to_string(), "Bitwise IO".to_string());
        Notification {
            identity: "No-123".to_string(),
            metadata,
        }
    }

    fn get_notification_2() -> Notification {
        let mut metadata = HashMap::new();
        metadata.insert("url".to_string(), "13.0.0.123:8434".to_string());
        metadata.insert("company".to_string(), "Cargill".to_string());
        Notification {
            identity: "Node-456".to_string(),
            metadata,
        }
    }
}
