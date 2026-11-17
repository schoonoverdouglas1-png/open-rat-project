# Google Calendar Import — Manifest

- **Source name:** Google Calendar (connected account; owner account)
- **Import date:** 2026-11-01 (America/Chicago)
- **Method:** Read-only API reads (`calendarList list`, `events list` with `singleEvents=true`, ordered by start time). Nothing was created, edited, deleted, or invited on the source side. Nothing imported here has been published or shared outward; this directory is private workspace only.
- **Query window:** 2000-01-01 through 2035-12-31. Both calendars returned no further pages (no next-page token), so nothing was cut off by paging inside that window.
- **Calendars found:** 2
  1. Primary calendar (owner account) — 7 events
  2. Holidays in the United States (Google public subscription calendar, read-only) — 317 events
- **Items found:** 324
- **Items imported:** 324
- **Items failed:** 0
- **Date range covered:**
  - Primary calendar: 2026-08-08 through 2026-11-11
  - Holidays calendar: 2021-01-01 through 2031-12-31
  - Combined: 2021-01-01 through 2031-12-31 (primary events fall inside 2026)
- **What each saved event preserves:** title, start/end date and time (raw value plus America/Chicago local time where the source provided it), all-day flag, status, location, and event ID. Event descriptions and attendee/organizer details were deliberately left out of the saved files to keep personal contact details out of the workspace copy.
- **Cara routing:** No event in either calendar mentioned Cara (checked by text search of the fetched data). Nothing was routed to the separate Cara directory for this import.

## Local paths

- Primary calendar, by year:
  - `~/workspace/imports/google-calendar/primary/2026.json` (7 events)
  - `~/workspace/imports/google-calendar/primary/2026.md` (readable listing)
- Holidays in the United States, by year (JSON + readable `.md` listing per year):
  - `2021` (32), `2022` (29), `2023` (29), `2024` (27), `2025` (30), `2026` (28), `2027` (31), `2028` (28), `2029` (29), `2030` (27), `2031` (27) — 317 events total
  - Directory: `~/workspace/imports/google-calendar/holidays-united-states/`

## Primary calendar events imported (titles and dates only)

- 2026-08-08 — Musky Tale Pig Roast
- 2026-09-01 — Established Patient with Kelsey Meyer, NP prostate exam
- 2026-09-21 — leave to get bear for marshfield appt
- 2026-09-21 — bear dr appt
- 2026-10-22 — Go to Mr. Ed's (Deep-Fried Mushrooms)
- 2026-10-25 — Prepare Medical Forms & PreCheck-In for Dr. Dickson
- 2026-11-11 — Consultation with Brent Wogahn, MD

## Resume note — what is NOT yet fully imported

- **Complete for this connected account within the query window.** No rate limit was hit, no page was left unfetched, and no event was silently capped.
- **Other Google accounts are not covered.** Only one account is currently connected to Google Calendar here. If another account of his is connected later, run this import again for that account and append its calendars under this same directory with a new manifest entry — do not treat this manifest as covering any account beyond the one connected on 2026-11-01.
- **Outside the query window:** events dated before 2000-01-01 or after 2035-12-31 were not queried. Re-run with a wider window if any such events are ever expected.
- **Cancelled/deleted events:** the fetch used the default setting, which excludes deleted events. A future pass could include them explicitly if a record of cancellations is ever wanted.
- **Future changes:** this is a snapshot as of 2026-11-01. New or changed events after that date are not included; re-run the same fetch to refresh.
