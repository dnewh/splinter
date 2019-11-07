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

use std::time::SystemTime;

use crate::models::{Notification};
use crate::schema::notifications;
use diesel::{
    pg::PgConnection, prelude::*, result::Error::NotFound, QueryResult,
};

pub fn list_notifications(
    conn: &PgConnection,
    id: i64,
) -> QueryResult<Vec<Notification>> {
    notifications_user::table
        .filter(notification_user::user_id.eq(id))
        .load::<Notification>(conn)
}
