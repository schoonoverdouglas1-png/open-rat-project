---
id: connection-keeper-hourly
title: Connection keeper — hourly port/lane check
enabled: true
owner: goal:permanent-connection-keeper-github-and-the-ports
mode: task
schedule:
  kind: interval
  timezone: America/Chicago
  at: 2026-11-13T20:24:54
  every: 1h
delivery:
  - chat_id: f73a273c-f8d5-455f-bf12-3a88397c7355
metadata:
  tags: [cron:automatic-interval-anchor]
  originating_chat_context_json: '{"chat_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","origin_provider":"main","original_reply_target_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","chat_kind":"direct","conversation_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"969FC1D5-AA7C-445E-8800-B3550073ECD1"}'
  presentation_locale: en-US
---
Run Douglas's permanent connection keeper: execute `python3 ~/workspace/ember-upgrades/scripts/connection_keeper.py` (it appends one JSON line to ~/workspace/ember-upgrades/connections.log, probing github.com, api.github.com, dl.google.com, generativelanguage.googleapis.com, muse.ai, and accounts.google.com — direct lane first, proxy lane second; a place counts as up only when an HTTPS session completes; an HTTP error code like 404 from an API root still proves the lane works). Compare the new line with the previous line in the log. If nothing changed and every place is up, report exactly one short line: "Connection keeper: all places up, lanes unchanged." If any place changed lane or went down, report which place, what changed, and which lane (if any) still reaches it. Never retry a down place more than the script itself does, and never treat a provider stop signal (429, rate-limit, lock) as a dead place.
