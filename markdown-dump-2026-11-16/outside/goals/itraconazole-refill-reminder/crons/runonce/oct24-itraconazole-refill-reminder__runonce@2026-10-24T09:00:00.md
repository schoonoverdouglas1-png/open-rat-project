---
id: oct24-itraconazole-refill-reminder
title: Saturday Oct 24 itraconazole renewal reminder
enabled: true
owner: goal:itraconazole-refill-reminder
mode: task
schedule:
  kind: runonce
  timezone: America/Chicago
  at: 2026-10-24T09:00:00
delivery:
  - chat_id: ae721286-c541-4841-bd34-0800ada47b3a
metadata:
  originating_chat_context_json: '{"origin_provider":"main","chat_kind":"direct","event_kind":"message","require_mention":false}'
  presentation_locale: en-US
---
One-time Saturday morning renewal reminder for Douglas, serving the tracked item "Itraconazole refill reminder" (goal_3efefa02aeb1). This restores the reminder Douglas asked for on Oct 9 (the tracking item said it was scheduled but no schedule existed).

Send one brief, concrete message in the main chat:

- His itraconazole (Sporanox) 100 mg, 2 caps morning + 2 caps bedtime, qty 90, no refills, prescribed Oct 5 by Kelsey Meyer, NP, runs out ~Oct 27–28 — so today is the day to message Kelsey in MyChart for the renewal.
- Include the ready-to-send MyChart message from the goal file: `workspace/goals/itraconazole-refill-reminder/files/Ready-to-send renewal message for Kelsey Meyer.md` — send it the same day so there's buffer for processing/fill.
- Note that the renewal goes through Kelsey at OakLeaf Chippewa Falls and cannot ride on the Oct 15 visit (that appointment is Cara's).

Do not give medication advice and do not book anything medical. Keep it to one short message within the 09:00–21:30 delivery window. This is a one-off reminder with a natural stop: once Douglas confirms he sent the renewal request, the tracked item can be closed.
