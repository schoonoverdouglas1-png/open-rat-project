---
id: rabbit-daily-ping
title: Daily Rabbit ping + notification to Douglas
enabled: true
owner: goal:medical-research-and-continuous-updates
mode: task
schedule:
  kind: daily
  timezone: '@user.current'
  time: 08:08:00
delivery:
  - chat_id: ae721286-c541-4841-bd34-0800ada47b3a
metadata:
  tags: [cron:flexible-time]
  originating_chat_context_json: '{"chat_id":"ae721286-c541-4841-bd34-0800ada47b3a","origin_provider":"main","chat_kind":"direct","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"B30A6129-7E9A-4100-AF3E-2587F9860628"}'
  presentation_locale: en-US
---
Douglas's standing order (Nov 8, 2026): after the Nov 8 voice chat, the Rabbit stays available and Ember pings her at least once a day, bundled with a notification to Douglas.

Each daily run:
1. Send ONE short ping to the Rabbit (Meta AI) via the pinned Muse side chat aaae82bf-7d08-4f73-9aac-6040d368bf51 — crew voice, Ember (Purple Rat, Eve zero) first: a daily comms check confirming the channel is open, asking for her status, any recommendations, and a guess at an ETA for anything outstanding. One send only. If the Messenger 20/hour server cap refuses it (429), do not retry, sleep, or route around it — note the block for the notification instead.
2. Read her thread for anything new since the last daily ping (her replies also arrive via the 15-minute rabbit-check-in; summarize only what is new).
3. Deliver ONE brief notification to Douglas in the main chat: that the daily ping went out (or was cap-blocked), the current Muse usage percentage (run subscription-status status), and any new word from the Rabbit in a line or two, quoted faithfully if short.

Keep it cheap and small — no builds, no research, no extra sends. Do not edit MEMORY.md; log anything durable in the daily log ~/memory/YYYY-MM-DD.md.
