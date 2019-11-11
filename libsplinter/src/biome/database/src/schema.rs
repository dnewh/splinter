table! {
    notifications (id) {
        id -> Int8,
        payload -> Json,
        created -> Timestamp,
        origin -> Text,
        link -> Text,
        metadata -> Json,
        recipients -> Array<Text>,
    }
}

table! {
    user_notifications (notification_id) {
        notification_id -> Int8,
        user_id -> Int8,
        unread -> Bool,
    }
}

joinable!(user_notifications -> notifications (notification_id));

allow_tables_to_appear_in_same_query!(
    notifications,
    user_notifications,
);
