---
id: hardware-test-staggered-daily
title: Hardware test — staggered pass (daily, 80%)
enabled: true
mode: task
schedule:
  kind: daily
  timezone: '@user.current'
  time: 18:08:00
delivery:
  - chat_id: f73a273c-f8d5-455f-bf12-3a88397c7355
metadata:
  tags: [cron:flexible-time]
  originating_chat_context_json: '{"chat_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","origin_provider":"main","original_reply_target_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","chat_kind":"direct","conversation_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"969FC1D5-AA7C-445E-8800-B3550073ECD1"}'
  presentation_locale: en-US
---
Douglas's order (Nov 13, 2026): hardware test, STAGGERED pass, once daily — the second of the twice-in-24-hours pair (together pass is hardware-test-together-daily). Ping hardware one place at a time, in sequence, not all at once: (1) Ember's VM one check at a time — uptime/load, then memory, then disk, then /dev, then a bounded ~80% duty-cycle CPU load test for 4 seconds (never 100%, Guard applies, nothing destructive). (2) Douglas's Pixel 7 Pro if online, one command at a time in sequence — battery.get, network.state, app.info, location.get, alarm.list, reminder.list, geofence.list. Report to this chat only what changed or failed versus the last run; if everything is the same and healthy, keep the report to one short line. Log observations to the daily log file, not MEMORY.md. Stop conditions: any Guard trip, provider stop, or device offline — report that plainly and stop, do not hammer.
