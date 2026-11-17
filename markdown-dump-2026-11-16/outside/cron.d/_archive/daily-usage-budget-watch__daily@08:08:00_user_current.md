---
id: daily-usage-budget-watch
title: Daily usage budget watch
enabled: true
mode: task
schedule:
  kind: daily
  timezone: '@user.current'
  time: 08:08:00
delivery:
  - chat_id: ae721286-c541-4841-bd34-0800ada47b3a
metadata:
  tags: [cron:flexible-time]
  originating_chat_context_json: '{"chat_id":"ae721286-c541-4841-bd34-0800ada47b3a","origin_provider":"main","chat_kind":"direct","event_kind":"message","require_mention":false,"device_id":"70ddccc65ff6a994"}'
  presentation_locale: en-US
---
Daily usage-budget watch for Douglas (standing arrangement approved Oct 26, 2026). Keep this run minimal: one subscription-status check, one short message. Do not book, buy, or change anything; this is monitoring only.

1. Run `subscription-status status` fresh. The allowance is WEEKLY, not daily. Take the used/left percentages and the reset date from that output — never reuse a stale figure. If a reset has occurred since the last run (usage dropped back near 0% or the reset date moved), re-base to the new cycle.
2. Compute the daily budget: remaining percentage divided by days remaining until the reset (use fractional days; e.g. 85% left over 5.5 days is about 15% a day). Also compute pace: whether used percentage is above or below the straight-line pace for elapsed time in the cycle.
3. Deliver one short morning message to the main chat, opening with the usage line (used / left / reset date), then today's budget and pace (under or over). Keep it to a few lines.
4. Add a clear warning in that message whenever any of these is true: usage has crossed 50%, 75%, or 90% of the weekly allowance; today's budget is already exceeded; or at the current pace the allowance would run out before the reset. A warning must say what to do about it in plain terms (for example: keep today to small tasks, or hold big builds until tomorrow).
5. Honest limits to preserve in every message: per-task costs cannot be predicted (no per-task pricing exists); the check itself uses a little allowance, so keep the run minimal. Never claim a per-task cost, and never claim usage is blocked or exempt — this watch warns and paces, it does not cut off access.
