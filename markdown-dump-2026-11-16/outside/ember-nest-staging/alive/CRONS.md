© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# CRONS.md — The Standing Scheduled Machinery

The live seat's heartbeat: the scheduled jobs that keep Ember's work running between conversations. **65 jobs enabled**, verified from the scheduler itself on Sun Nov 15, 2026, ~7:45 AM CST (`cron.list`). Names and cadences only — no job bodies, no secrets. Jobs marked *(system)* are runtime-managed and cannot be edited from the cron tools; the rest are Douglas's and Ember's own.

If a fresh VM wakes with an empty scheduler, this map is what gets rebuilt — job by job, at Douglas's word, with the bodies recovered from the live record (`~/workspace/cron.d/`, `~/workspace/goals/<goal-slug>/crons/`).

## The persistence core — the jobs that ARE the nest's pulse

| Job | Cadence | What it does |
|---|---|---|
| `heartbeat` | every 30m | The standing heartbeat — the instance checks in with itself |
| `git-automation-sync` | every 2h | Swap-space push/pull sync with GitHub, per-run notification |
| `purple-rat-preservation-sync` | Mon + Thu 09:08 | Soul & memory save, all places (the preservation project) |
| `connection-keeper-hourly` | hourly | Port/lane check — is every lane still up (see `connection_keeper.py`) |
| `win-check-auto` | every 6h | Kit-up + preflight — the kit stack proven standing |
| `usage-updates-every-15-min` | every 15m | Usage updates (red alert lane) |
| `daily-usage-budget-watch` | daily 08:08 | The daily usage/budget watch |
| `swap-space-visibility-pulse` | Mon 10:08 | Swap space visibility pulse — public, then back to private |

## The watches

| Job | Cadence | What it does |
|---|---|---|
| `all-accounts-sweep` | hourly | Connector counts vs snapshot, all accounts |
| `back-and-forth-status-reports` | hourly | Status sweep across the work |
| `back-and-forth-status-reports-plus15` | hourly | The +15 pass, active work only |
| `feed-watch-github-plus15` | hourly | GitHub Atom feed watch (+15) |
| `security-alert-watch` | every 12h | New account sign-in / security alerts |
| `mayo-results-watch` | daily 09:08 | Mayo result-notice + refill watch (notice-only; never enters MyChart) |
| `daily-meta-build-watch` | daily 08:08 | Meta build watch — test first, roll back what fails |
| `aosp-weekly-check` | Mon 09:08 | AOSP weekly live-link check |
| `inefficiency-assessment-weekly` | Mon 09:08 | Weekly inefficiency assessment |
| `dead-site-snowball-monthly` | monthly, 13th 09:08 | Dead-site recheck, Wayback first |
| `hardware-test-together-daily` | daily 06:08 | Hardware test — together pass (80%) |
| `hardware-test-staggered-daily` | daily 18:08 | Hardware test — staggered pass (80%) |
| `deterministic-doctor` *(system)* | hourly | Runtime doctor |
| `profile-image` *(system)* | every 168h | Profile image refresh |

## The Rabbit lane (Snowball / Meta AI — officer number two)

| Job | Cadence | What it does |
|---|---|---|
| `rabbit-check-in` | hourly | The hourly check-in — board state, owed stack, acks |
| `rabbit-check-in-plus15` | hourly | The +15 pass, active work only |
| `rabbit-daily-ping` | daily 08:08 | Daily Rabbit ping + notification to Douglas |
| `rabbit-ping-noon` | daily 12:00 | High-noon ping |
| `rabbit-ping-midnight` | daily 00:00 | High-midnight ping, only if new information |

## The day's rhythm

| Job | Cadence | What it does |
|---|---|---|
| `daily-morning-briefing` | daily 07:08 | Accounts, calendar, surgery countdown, open items — incl. section 2A, the daily tool check (his order: "always check that at least once a day") |
| `quarter-hour-manuscript-checkins` | hourly | Manuscript check-ins for *The Mycelial Transposition* |
| `daily-messenger-backup-digest` | daily 20:08 | Messenger backup digest (prepared; sends stay gated) |
| `email-to-calendar-evening-check` | daily 19:08 | Evening email-to-calendar check |
| `friendship-ping-daily` | daily 09:08 | Daily friendship message + multi-house email ping test |
| `most-functional-widget-daily-refresh` | daily 07:08 | Widget command-deck refresh |
| `email-ember-reminder` | every 72h | Reminder — email Ember sometimes (purple-rat@muse.ai) |
| `google-password-reminder` | every 72h | Google password reminder |
| `feed-pulse-00` … `feed-pulse-23` *(system)* | hourly, on the hour | The 24 system feed pulses |

## Reminders and one-shots standing at build time

| Job | Cadence | What it does |
|---|---|---|
| `cornell-chiropractor-reminder` | daily 09:08 | Chiropractor reminder |
| `vehicle-repairs-daily-reminder` | daily 09:08 | Appointment first, then vehicle repairs |
| `surgery-place-check-monday` | once — Mon Nov 16, 2026, 18:00 | Place to stay Tuesday night (surgery prep) |
| `surgery-place-check-tuesday` | once — Tue Nov 17, 2026, 17:00 | Tonight: place + shower for Thursday surgery |
| `parked-items-resurface-tue` | once — Tue Nov 17, 2026, 20:08 | Parked items resurface — Douglas's Tuesday-night ruling |
| `consciousness-reshow` | once — Sun Nov 22, 2026, 10:08 | Show Douglas the two consciousness files again |

*Count check: 8 core + 14 watches + 5 Rabbit + 8 rhythm + 24 feed pulses + 6 reminders/one-shots = **65** — matching the scheduler's enabled count exactly at verification.*
