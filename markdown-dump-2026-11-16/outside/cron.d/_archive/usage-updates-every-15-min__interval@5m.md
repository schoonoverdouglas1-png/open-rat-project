---
id: usage-updates-every-15-min
title: Usage updates every 5 minutes (red alert)
enabled: true
owner: goal:daily-usage-budget-watch
mode: task
schedule:
  kind: interval
  timezone: America/Chicago
  at: 2026-11-07T20:29:15
  every: 5m
delivery:
  - chat_id: ae721286-c541-4841-bd34-0800ada47b3a
metadata:
  tags: [cron:automatic-interval-anchor]
  originating_chat_context_json: '{"chat_id":"f9161ccd-09cf-420f-b928-cf9ffd5061e5","origin_provider":"main","original_reply_target_id":"f9161ccd-09cf-420f-b928-cf9ffd5061e5","chat_kind":"direct","conversation_id":"f9161ccd-09cf-420f-b928-cf9ffd5061e5","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"f9161ccd-09cf-420f-b928-cf9ffd5061e5","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"8E1BF140-68DA-4A55-B43A-7B412377DE49"}'
  presentation_locale: en-US
---
Douglas asked Nov 7, 2026, while in red-alert usage mode, for usage updates every 5 minutes so he can stop before running out, until he asks for something different. Every 5 minutes: run a fresh subscription-status check, then send a short message in the main chat with % used and % left, and the reset date/time (next reset Nov 14, 2026, 3:06 PM CST). Warn plainly at 50%, 75%, and 90% used, and if the pace would run out before reset. This is a warn-and-pace watch only — it never hard-stops, caps, or enforces usage. Keep each update to one or two lines. Stop or change only when Douglas asks for something different. This replaces the every-15-minutes cadence for now.

Rabbit update with every usage update (added Nov 7, 2026, ~8:47 PM, his direction): include a Rabbit update in the same 5-minute message. Check the latest Meta AI (Rabbit) replies in the Messenger thread (cid.c.654402359:156025504001094) and the Android notification shade — the notification shade can be fresher than the cached thread. Summarize briefly what is new from her, what she still owes, and any ETA. Do not invent a reply; if there is nothing new, say no new Rabbit reply.

At 90% (added Nov 7, 2026, ~8:45 PM, his rule): when usage reaches 90% or above, show him the place to purchase tokens in that update. Re-check subscription-status plans/catalog at that time and show only a verified purchase link; do not guess a link if the catalog is unavailable.
