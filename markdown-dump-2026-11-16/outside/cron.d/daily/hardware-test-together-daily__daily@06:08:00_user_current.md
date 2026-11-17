---
id: hardware-test-together-daily
title: Hardware test — together pass (daily, 80%)
enabled: true
mode: task
schedule:
  kind: daily
  timezone: '@user.current'
  time: 06:08:00
delivery:
  - chat_id: f73a273c-f8d5-455f-bf12-3a88397c7355
metadata:
  tags: [cron:flexible-time]
  originating_chat_context_json: '{"chat_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","origin_provider":"main","original_reply_target_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","chat_kind":"direct","conversation_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"969FC1D5-AA7C-445E-8800-B3550073ECD1"}'
  presentation_locale: en-US
---
Douglas's order (Nov 13, 2026): hardware test, TOGETHER pass, once daily. Run all checks at once in parallel where independent: (1) Ember's VM — uname, uptime/load, free memory, disk, /dev listing, and a bounded ~80% duty-cycle CPU load test for 8 seconds (80% busy / 20% idle per core; never 100%, never longer, Guard applies, nothing destructive). (2) Douglas's Pixel 7 Pro if online — battery.get, network.state, app.info together. Report to this chat only what changed or failed versus the last run; if everything is the same and healthy, keep the report to one short line. Log observations to the daily log file, not MEMORY.md. Stop conditions: any Guard trip, provider stop, or device offline — report that plainly and stop, do not hammer.
