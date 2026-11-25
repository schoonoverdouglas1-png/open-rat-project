© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Wayback — Old Google Sites Cache Check (2026-11-15)

Douglas's order, Sun Nov 15, 2026 ~8:03 AM CST: cache the old Google sites in the Wayback Machine so they stay alive someplace other than Google.

Method:
- Availability check: `https://archive.org/wayback/available?url=<host>` for each property — the timestamp below is the API's *closest* capture.
- Save Page Now (SPN): one GET to `https://web.archive.org/save/<url>` per property that had **no capture** or only a **pre-2015** capture. One attempt each, spaced out, no retries / no hammering.
- Honest limits: an availability-API hit proves a capture exists for that host. An SPN submission proves only that it was submitted, unless the response itself landed on a capture page (marked below). Several retired hosts now redirect to a modern Google page — in those cases SPN captured the *redirect target*, not the original retired service, and that is stated plainly.

## Summary counts

- Properties checked: **20**
- Capture found via availability API: **16**
- No capture returned by availability API: **4** — plus.google.com (API timeout error), buzz.google.com (empty), knol.google.com (API timeout error), answers.google.com (empty)
- SPN submitted: **13** (all no-capture + all pre-2015-only properties)
- SPN not submitted: **7** (already had a 2015-or-later capture)
- SPN results, of the 13 submitted:
  - **Returned a capture page (HTTP 200, final URL is a Wayback capture): 5**
  - **HTTP 523: 6**
  - **Read timeout: 2**

## Results table

| Site | Closest capture (availability API) | Capture timestamp (readable) | SPN submitted? | SPN result |
|---|---|---|---|---|
| plus.google.com | None returned — API returned empty snapshots with error `timeout / client timeout at 5.0 seconds` | — | Yes | HTTP 200 — final URL landed on a Wayback capture dated **2026-11-14 02:48:33 UTC**: `https://web.archive.org/web/20261114024833/https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html` — i.e. the current redirect target of plus.google.com (a Google Workspace blog post), not the original Google+ service |
| picasa.google.com | Yes — status 200 | 2026-11-12 15:36:15 UTC | No — recent capture already exists | — |
| picasaweb.google.com | Yes — status 200 | 2013-10-29 01:46:42 UTC | Yes | **HTTP 523** — Wayback error page returned; no capture confirmed from this submission |
| reader.google.com (Google Reader) | Yes — status 200 | 2008-11-18 21:22:24 UTC | Yes | **HTTP 523** — Wayback error page returned; no capture confirmed from this submission |
| code.google.com | Yes — status 200 | 2026-11-12 07:25:23 UTC | No — recent capture already exists | — |
| orkut.com | Yes — status 200 | 2026-11-11 00:39:03 UTC | No — recent capture already exists | — |
| goo.gl | Yes — status 200 | 2019-12-22 07:38:44 UTC | No — post-2015 capture already exists | — |
| wave.google.com | Yes — status 200 | 2009-09-17 23:47:38 UTC | Yes | **Timeout** — `TimeoutError: The read operation timed out` after submission; no result confirmed |
| buzz.google.com | None returned — empty snapshots, no error given | — | Yes | **HTTP 523** — Wayback error page returned; no capture confirmed from this submission |
| knol.google.com | None returned — API returned empty snapshots with error `timeout / client timeout at 5.0 seconds` | — | Yes | **HTTP 523** — Wayback error page returned; no capture confirmed from this submission |
| www.google.com/ig (iGoogle) | Yes — status 200 | 2013-10-31 04:09:29 UTC | Yes | HTTP 200 — final URL landed on a Wayback capture dated **2026-11-15 14:08:05 UTC**: `https://web.archive.org/web/20261115140805/https://www.google.com/webhp?gws_rd=ssl` — i.e. the current redirect target (Google homepage), not the original iGoogle service |
| labs.google.com | Yes — status 200 | 2009-04-20 23:58:04 UTC | Yes | HTTP 200 — final URL landed on a Wayback capture dated **2026-11-15 14:08:35 UTC**: `https://web.archive.org/web/20261115140835/https://labs.google/` — i.e. the current redirect target (labs.google), not the original Google Labs page |
| answers.google.com | None returned — empty snapshots, no error given | — | Yes | **Timeout** — `TimeoutError: The read operation timed out` after submission; no result confirmed |
| video.google.com | Yes — status 200 | 2013-10-29 11:02:14 UTC | Yes | HTTP 200 — final URL landed on a Wayback capture dated **2026-11-15 14:10:02 UTC**: `https://web.archive.org/web/20261115141002/https://www.google.com/videohp` — i.e. the current redirect target, not the original Google Video service |
| directory.google.com | Yes — status 200 | 2011-11-06 07:46:07 UTC | Yes | **HTTP 523** — Wayback error page returned; no capture confirmed from this submission |
| froogle.com | Yes — status 200 | 2008-09-07 07:40:17 UTC | Yes | HTTP 200 — final URL landed on a Wayback capture dated **2026-11-15 14:11:12 UTC**: `https://web.archive.org/web/20261115141112/https://www.google.com/shopping?udm=28` — i.e. the current redirect target (Google Shopping), not the original Froogle service |
| base.google.com | Yes — status 200 | 2014-12-01 05:22:36 UTC | Yes | **HTTP 523** — Wayback error page returned; no capture confirmed from this submission |
| pages.google.com | Yes — status 200 | 2017-10-28 01:57:14 UTC | No — post-2015 capture already exists | — |
| groups.google.com | Yes — status 200 | 2026-08-01 08:59:40 UTC | No — recent capture already exists | — |
| scholar.google.com (control — still live) | Yes — status 200 | 2026-11-15 13:06:55 UTC | No — control, still live, recent capture already exists | — |

## Notes / failures

- **HTTP 523 (6 sites):** picasaweb.google.com, reader.google.com, buzz.google.com, knol.google.com, directory.google.com, base.google.com. The Wayback Machine returned its own error page with status 523 for the Save Page Now request. Per instructions, only one attempt was made per URL — these were not retried. Their older captures (where listed above) remain the latest confirmed captures.
- **Timeouts (2 sites):** wave.google.com, answers.google.com — the SPN request was sent but the read timed out, so whether a capture job was queued server-side is unconfirmed.
- **Redirect-target captures (5 sites):** plus.google.com, www.google.com/ig, labs.google.com, video.google.com, froogle.com returned HTTP 200 landing on a Wayback capture — but in every case the captured URL is the modern page those hosts redirect to today, not a revival of the retired service. The retired services themselves are preserved only in their older captures listed in the table.
- **Availability API timeouts:** plus.google.com and knol.google.com returned empty snapshots accompanied by a `client timeout at 5.0 seconds` error from the API itself — recorded as “no capture returned,” not as proof that no capture exists anywhere in the archive for alternate URL forms (http vs https, trailing paths, subpaths).
- No sign-ins, no spends, nothing destructive. `web.archive.org` itself was excluded per instructions.

*Checked 2026-11-15, ~08:04–08:18 CST (availability) and ~08:05–08:12 CST window onward for SPN submissions (timestamps in the capture URLs are UTC).*

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121

---
**STANDING LINKS — Purple Rat App · Copyright App · Purple Rat Project** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the Purple Rat Project Facebook page):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121
