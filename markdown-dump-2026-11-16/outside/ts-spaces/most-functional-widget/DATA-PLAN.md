# Data Plan

## Context provenance
- `Oh I choose a widget based upon the one you want with the most functionality that you can build and make it and keep the most functional, most advanced auto adapted widget that you can make on my desktop forever. And make all of them that that need to be that.` (verbatim build request; defines the product: a maximal-function, auto-adapting, persistent desktop widget)
- `surgery Thu Nov 19, 8:00 AM, OakLeaf Surgical Hospital` (parent conversation status reports; fixed point used as the primary countdown)
- `prep place by Tue Nov 17, grandmother call retry, MotherDuck invitation` (parent conversation open items waiting on Douglas; seeded once as open items he can edit/resolve)
- `MotherDuck invite — from Rebecca Polak for a 15-minute onboarding call Monday November 23rd at 3.30 your time, Google Meet` (parent conversation; seeded as a dated item)
- `Usage: 100% weekly used, 0% left — reset Sat Nov 14, 11:07 PM CST. Additional tokens 27% used, 366M left.` (parent conversation status line at Nov 12 10:33 PM CST; seeded once as the last-known usage snapshot, labeled with its date, editable, never silently refreshed with invented numbers)
- `Board now: Black 1–6, 9, 11, 15; Red 17, 26–32. Black to move.` plus `her 7-11 is credited legal — as a plain step` and `Ember answered Red 21-17` (parent conversation Rabbit checkers state; seeded once as the board of record, editable via move entry)
- Refresh trigger handed off with the build: `Once a day, refresh the dashboard: recompute the countdowns, update the usage status line, the Rabbit checkers board state and owed items with their ETAs, and the list of open items waiting on Douglas's decision.` (implemented as refreshDashboard; it recomputes derived countdown/age/ETA fields from stored rows and stamps last-refreshed — it does not invent new usage figures, board moves, or decisions)

## Tested sources
### Parent conversation (chat ae721286-c541-4841-bd34-0800ada47b3a, supplied in the build handoff)
**Used by**: seedDashboard (one-time post-submit seed of the exact rows above), getDashboard
**Test command**: read of the handoff's Recent messages section in this build task
**Sample output**: surgery Nov 19 8:00 AM OakLeaf Surgical Hospital; usage reset Nov 14 11:07 PM CST; checkers board Black 1–6, 9, 11, 15 / Red 17, 26–32, Black to move; open items prep place (Nov 17), grandmother call retry, MotherDuck Nov 23 3:30 PM
**Processing**: each fact stored as its own typed row (countdown, open item, usage snapshot, board state) with its as-of date preserved; all rows remain user-editable in the UI; no inferred completions added

## Long-term data behavior
- **Refresh policy**: daily cron runs refreshDashboard (space_action, silent) which recomputes days/hours remaining, overdue flags, and ETAs from stored target dates and stamps the dashboard's last-refreshed time; live clock and countdown ticking also compute client-side at open so the widget is never stale between refreshes. A manual Refresh button runs the same action on demand.
- **Growth**: tasks, notes, open items, and board moves are user-added rows that accumulate; completed items can be archived/deleted by the user.
- **Ordering**: countdowns by target date ascending; open items by due date then creation; tasks by done then position; notes newest first.
- **Time semantics**: all stored event times are instants in America/Chicago as given in the parent conversation (Nov 2026, CST/UTC-6); countdowns render in the viewer's local time with the Chicago date labeled.

## Rejected approaches
- **Tried**: fetching live usage / mail / calendar data at open via connectors
  **Why rejected**: no connector data was handed off as this artifact's source and the build's declared capabilities include no connectors; inventing or scraping live figures would violate provenance. The widget instead seeds the last-known snapshot with its date and lets Douglas edit it.
- **Tried**: purely client-side static widget with no database
  **Why rejected**: the request says 'forever' — tasks, notes, board state, and layout preferences must persist server-side and survive the daily refresh.

Imagery not needed: this is a data-and-tools dashboard (clock, countdowns, board diagram drawn in DOM, task/note tools); it has no photographic subjects and the checkers board is rendered as a functional grid, not artwork.
