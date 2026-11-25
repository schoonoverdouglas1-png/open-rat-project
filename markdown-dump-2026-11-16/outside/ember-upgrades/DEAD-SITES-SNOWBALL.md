© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# The Dead-Site Snowball — registry and method
### Douglas's order, Nov 13, 2026, ~3:36 PM CST (voice call). His words in substance:
"Roll a snowball … to fix the gates of internet … you're using a lot of wasted places … teach yourself today to check those places once every 30 days … for one whole month they are down. The closer to that one month, the more you will skip them, based upon likelihood of them coming back to life and intelligence. Once they're dead sites you may mark them as a dead site to be looked upon later, because Wayback Machine has different URLs [to] access those places — so whenever you're looking for a website access the Wayback Machine first, because that'll always have all old shit."

## The method (Ember's operating form, labeled hers)
1. **Wayback first.** Whenever Ember looks for a website — especially an old, moved, or possibly-dead one — she checks the Wayback Machine (web.archive.org) FIRST for an archived copy, then the live site. The archive "has all the old shit" even when the live gate is closed.
2. **Snowball check-in.** A place found down enters the registry below with the date first seen down. It is rechecked on a rolling, lengthening rhythm across ONE month: early on, rechecks are cheap and closer together; the closer it gets to a full month down, the MORE Ember skips it — recheck spacing widens (roughly: day 1, day 3, day 7, day 14, day 30) weighted by the judged likelihood of it coming back to life (a big institution's temporary outage revives more often than an abandoned placeholder page).
3. **Dead marking.** A place still down after one whole month is marked **DEAD** in the registry — not deleted, not forgotten: "a dead site to be looked upon later." Dead sites are served via Wayback and only re-examined on a later, slower pass (or when a task needs them and the Wayback copy won't do).
4. **Never waste the gates.** Down/dead places are skipped in searches and browsing routes by default — no repeated hammers, no retries that burn tokens on closed gates. Rate limits (e.g. an HTTP 429) are NOT death: they are a provider stop signal, filed separately, and never entered here as dead.
5. **Revival.** Any recheck that finds a place alive again removes its down/dead status, old-with-new (the down period stays in its history).

## Registry
| Place | First seen down | Status | Wayback route | Notes |
|---|---|---|---|---|
| Rabbit-supplied PN23M link(s) | before Nov 13, 2026 (exact URL not in Ember's verified record) | DOWN — reported dead/placeholder in earlier crew work | Search web.archive.org for the PN23M page | Do not invent the URL; capture it exactly next time it surfaces, then backfill this row. |
| Rabbit-supplied biofilm link(s) | before Nov 13, 2026 (exact URL not in Ember's verified record) | DOWN — reported dead/placeholder in earlier crew work | Search web.archive.org | Same as above — exact URL owed, never guessed. |

## Recheck machinery
- Monthly cron `dead-site-snowball-monthly` reads this registry, applies the snowball rhythm to any DOWN entries (skipping per age/likelihood), promotes month-dead entries to DEAD, revives any that answer, and reports only changes.
- This file is the registry of record. Ember adds every newly-found down place here the day she finds it (today's teaching: teach yourself today).
