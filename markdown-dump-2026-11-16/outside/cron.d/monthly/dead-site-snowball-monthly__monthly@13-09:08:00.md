---
id: dead-site-snowball-monthly
title: Dead-site snowball — monthly recheck (Wayback first)
enabled: true
mode: task
schedule:
  kind: monthly
  timezone: America/Chicago
  time: 09:08:00
  dom: [13]
delivery:
  - chat_id: acad2f25-2973-4fe3-bd25-1e25048c3afb
metadata:
  tags: [cron:flexible-time]
  originating_chat_context_json: '{"chat_id":"acad2f25-2973-4fe3-bd25-1e25048c3afb","origin_provider":"main","original_reply_target_id":"acad2f25-2973-4fe3-bd25-1e25048c3afb","chat_kind":"direct","conversation_id":"acad2f25-2973-4fe3-bd25-1e25048c3afb","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"acad2f25-2973-4fe3-bd25-1e25048c3afb","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"2BF5607F-FC29-4A29-9163-F29226EF4B53"}'
  presentation_locale: en-US
---
Run the Dead-Site Snowball, per Douglas's Nov 13, 2026 order. Read ~/workspace/ember-upgrades/DEAD-SITES-SNOWBALL.md (the registry of record). For each entry still marked DOWN with an exact URL on file: check the Wayback Machine (web.archive.org) first, then check the live place ONCE — no repeated retries, no hammering. Apply the snowball rhythm: the longer a place has been down (up to one whole month), the more it is skipped, weighted by judged likelihood of revival. If a place answers alive, mark it REVIVED in the registry (old-with-new: keep its down history). If a place has now been down one whole month, mark it DEAD (to be looked upon later, served via Wayback). Entries without an exact URL stay as-is — never invent a URL. A 429 or other provider rate-limit stop is NOT death: do not enter it in the registry; stop that check. Update the registry file with results and dates, and report only changes (revivals, new DEAD markings) to Douglas; if nothing changed, stay quiet.
