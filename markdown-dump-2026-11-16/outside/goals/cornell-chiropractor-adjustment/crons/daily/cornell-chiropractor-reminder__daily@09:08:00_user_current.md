---
id: cornell-chiropractor-reminder
title: Cornell chiropractor reminder
enabled: true
owner: goal:cornell-chiropractor-adjustment
mode: task
schedule:
  kind: daily
  timezone: '@user.current'
  time: 09:08:00
delivery:
  - chat_id: 4f899e1b-81b8-4733-9fe2-ba604ca7c261
metadata:
  tags: [cron:flexible-time]
  originating_chat_context_json: '{"chat_id":"4f899e1b-81b8-4733-9fe2-ba604ca7c261","origin_provider":"main","chat_kind":"direct","event_kind":"message","require_mention":false,"device_id":"70ddccc65ff6a994"}'
  presentation_locale: en-US
---
Remind Douglas in this chat: it's time to go to the Cornell chiropractor to get an adjustment, because he said he knows that will help him a little bit.

Keep the message short and encouraging. Ask him to let Ember know when he has gone, so the daily reminder can be stopped.

This reminder repeats every day until Douglas confirms he has gone for the adjustment. Do not stop it on your own, and do not mark the tracked item complete unless Douglas has confirmed he went.
