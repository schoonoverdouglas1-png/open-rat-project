---
id: security-alert-watch
title: Security-alert watch — new account sign-in alerts, twice daily
enabled: true
mode: task
schedule:
  kind: interval
  timezone: America/Chicago
  at: 2026-11-14T12:11:14
  every: 12h
delivery:
  - chat_id: f73a273c-f8d5-455f-bf12-3a88397c7355
metadata:
  tags: [cron:automatic-interval-anchor]
  originating_chat_context_json: '{"chat_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","origin_provider":"main","original_reply_target_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","chat_kind":"direct","conversation_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"969FC1D5-AA7C-445E-8800-B3550073ECD1"}'
  presentation_locale: en-US
---
Security-alert watch, set at Douglas's order (Nov 14, 2026, ~12:11 AM CST: "monitor those motherfuckers forever").

Each run:
1. Read Douglas's Pixel notifications (device notifications data source) and look ONLY for security-related alerts: Google sign-in / 2-Step Verification / password / suspicious-activity alerts, and Meta/Facebook/Instagram login alerts.
2. Compare against the accounted-alerts list in ~/memory/security-watch-state.md (create the file on first run; seed it with the four alerts from the night of Nov 13-14, 2026, all accounted: 2-Step turned on 11:44 PM, backup codes generated 11:45 PM, Muse access 11:19 PM, Apps Script project 10:08 PM).
3. If a NEW, unaccounted security alert is found: report it to Douglas in this chat the same run — what service, what the alert says (title/app/time only), and whether anything else corroborates it. NEVER read, relay, or record any code from a notification or message.
4. If nothing new: stay silent in chat; append one dated line to the state file noting the check and the newest alert seen.
5. NEVER dismiss or act on any notification — Douglas loves his notifications; this watch only reads and reports (his standing).
6. Update the state file's accounted list whenever Douglas confirms an alert was his own doing.
