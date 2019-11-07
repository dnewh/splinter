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

use std::collections::HashMap;
use url::{Url};

#[derive(Debug, Serialize, Deserialize, Clone, PartialEq)]
pub struct Notification {
  hash: String,
  payload: NotificationPayload,
  created: String,
  origin: String,
  link: Url,
  read: bool,
  recipient: String,
  metadata: HashMap<String, String>,
}

struct NotificationPayload {
  title: String,
  body: String,
}
