---
id: usage-threshold-verbal-warnings
title: Usage threshold verbal warnings — 80/85, then every 1%
enabled: true
owner: goal:daily-usage-budget-watch
mode: task
schedule:
  kind: interval
  timezone: America/Chicago
  at: 2026-11-11T08:59:29
  every: 1h
delivery:
  - chat_id: ae721286-c541-4841-bd34-0800ada47b3a
metadata:
  tags: [cron:automatic-interval-anchor]
  originating_chat_context_json: '{"chat_id":"9517f9d6-e437-49c2-8b77-0d6b6b6d2263","origin_provider":"main","original_reply_target_id":"9517f9d6-e437-49c2-8b77-0d6b6b6d2263","chat_kind":"direct","conversation_id":"9517f9d6-e437-49c2-8b77-0d6b6b6d2263","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"9517f9d6-e437-49c2-8b77-0d6b6b6d2263","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"1386B774-3BEB-4498-8D5C-8F224C7673AA"}'
  presentation_locale: en-US
---
Douglas's verbal-readout ladder (his order, Nov 11, 2026): after 75% used, give him a verbal readout at every 5% step up to 85% (that is: 80%, 85%), and after 85%, a verbal warning at EVERY 1% (86%, 87%, 88%, ...). This ladder applies every weekly cycle; when the weekly reset passes (currently Sat Nov 14, 2026, 11:07 PM CST), the ladder re-bases for the new cycle.

Each run:
1. Run a fresh subscription-status check (whole weekly % used + reset date/time).
2. Read the last-reported percentage from ~/workspace/goals/daily-usage-budget-watch/hidden_files/usage-warning-state.txt (a single integer; if the file is missing, treat the last-reported value as the current percentage, write it, and deliver nothing this run). Seeded Nov 11, 2026 at 87 — Douglas has already heard the 86 and 87 readouts live, so the next warning owed is 88.
3. Work out which ladder thresholds (75-crossing, 80, 85, then every integer from 86 up) are now crossed that were not crossed at the last-reported value. If none: update nothing, deliver nothing, stay silent — a no-change run must not message Douglas.
4. If one or more new thresholds are crossed: deliver ONE short readout in the main chat, Spock-style (fewest words, most information), stating: the new % used, % left, the reset date/time, and that live conversation remains protected by the reserve. Then write the new current percentage to the state file.
5. This job warns and paces only — it never blocks access, never claims to enforce a cap, and per-task costs cannot be predicted (whole-% readings only).
6. Fail-safes and reminders are never affected by this job.
