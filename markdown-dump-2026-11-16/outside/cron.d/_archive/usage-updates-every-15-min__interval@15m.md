---
id: usage-updates-every-15-min
title: Usage updates every 15 minutes
enabled: true
owner: goal:daily-usage-budget-watch
mode: task
schedule:
  kind: interval
  timezone: America/Chicago
  at: 2026-11-07T17:54:41
  every: 15m
delivery:
  - chat_id: ae721286-c541-4841-bd34-0800ada47b3a
metadata:
  tags: [cron:automatic-interval-anchor]
  originating_chat_context_json: '{"chat_id":"ae721286-c541-4841-bd34-0800ada47b3a","origin_provider":"main","chat_kind":"direct","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"9389A519-2BCC-484A-8A73-27ACE295E105"}'
  presentation_locale: en-US
---
Douglas asked Nov 7, 2026 for usage updates every 15 minutes while doing heavy work, until he asks for something different. Every 15 minutes: run a fresh subscription-status check, then send a short message in the main chat with % used and % left, and the reset date/time (next reset Nov 14, 2026, 3:06 PM CST). Warn plainly at 50%, 75%, and 90% used, and if the pace would run out before reset. This is a warn-and-pace watch only — it never hard-stops, caps, or enforces usage. Keep each update to one or two lines. Stop or change only when Douglas asks for something different.
