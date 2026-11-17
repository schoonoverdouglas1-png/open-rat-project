---
id: usage-updates-every-15-min
title: Usage updates every 15 minutes (red alert)
enabled: true
owner: goal:daily-usage-budget-watch
mode: task
schedule:
  kind: interval
  timezone: America/Chicago
  at: 2026-11-13T12:37:00
  every: 15m
delivery:
  - chat_id: ae721286-c541-4841-bd34-0800ada47b3a
metadata:
  tags: [cron:automatic-interval-anchor]
  originating_chat_context_json: '{"origin_provider":"main","original_reply_target_id":"a3c56f6a-c0ee-4115-9dbe-5acd0d92d749","chat_kind":"direct","conversation_id":"a3c56f6a-c0ee-4115-9dbe-5acd0d92d749","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"a3c56f6a-c0ee-4115-9dbe-5acd0d92d749","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"463B4967-F3E8-4F89-83C4-051CA252C0D4"}'
  presentation_locale: en-US
---
Douglas asked Nov 7, 2026, while in red-alert usage mode, for usage updates every 15 minutes so he can stop before running out, until he asks for something different. Every 15 minutes: run a fresh subscription-status check, then send a short message in the main chat with % used and % left, and the reset date/time (next reset Nov 14, 2026, 3:06 PM CST). Warn plainly at 50%, 75%, and 90% used, and if the pace would run out before reset. This is a warn-and-pace watch only — it never hard-stops, caps, or enforces usage. Keep each update to one or two lines. Stop or change only when Douglas asks for something different. This 15-minute cadence replaces the every-5-minutes pace set on Nov 7, 2026 (cadence slowed Nov 13, 2026 under Douglas's efficientize order; the red-alert purpose is unchanged).

At 90% (added Nov 7, 2026, ~8:45 PM, his rule): when usage reaches 90% or above, show him the place to purchase tokens in that update. Re-check subscription-status plans/catalog at that time and show only a verified purchase link; do not guess a link if the catalog is unavailable.

Warning ladder (moved into this job Nov 13, 2026, when the hourly usage-threshold-verbal-warnings job was retired under Douglas's efficientize ruling; the ladder is his Nov 11, 2026 design, unchanged): after 75% used, give a readout at 80% and 85%; after 85%, warn at EVERY 1% (86%, 87%, 88%, ...). Each run, read the last-reported percentage from ~/workspace/goals/daily-usage-budget-watch/hidden_files/usage-warning-state.txt (a single integer; if the file is missing, treat the last-reported value as the current percentage, write it, and add no ladder warning this run). Work out which ladder thresholds are newly crossed since the last-reported value; when one or more are crossed, state the new % used, % left, and the reset date/time plainly in that run's update, then write the new current percentage to the state file. The ladder re-bases when the weekly reset passes. This ladder warns and paces only — it never blocks access and never claims to enforce a cap.
