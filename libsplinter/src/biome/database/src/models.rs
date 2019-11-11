/*
 * Copyright 2019 Cargill Incorporated
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * -----------------------------------------------------------------------------
 */

use super::schema::*;
use std::time::SystemTime;

#[derive(Insertable, Queryable)]
#[table_name = "notifications"]
pub struct Notification {
    pub id: i64,
    pub payload: NotificationPayload,
    pub created: SystemTime,
    pub origin: String,
    pub link: String,
    pub metadata: serde_json::Value,
    pub recipients: Vec<String>,
}

#[derive(Debug, Insertable)]
#[table_name = "notifications"]
pub struct NewNotification {
    pub payload: NotificationPayload,
    pub created: SystemTime,
    pub origin: String,
    pub link: String,
    pub metadata: serde_json::Value,
    pub recipients: Vec<String>,
}

struct NotificationPayload {
    title: String,
    body: String,
}

#[derive(Insertable, Queryable)]
#[table_name = "user_notifications"]
pub struct UserNotification {
    pub notification_id: i64,
    pub user_id: i8,
    pub unread: bool,
}
