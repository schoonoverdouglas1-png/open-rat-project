© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Facebook Import — Manifest

- **Source:** Facebook (via `/opt/hatch/bin/facebook-cli`), account: Douglas Schoonover
- **Import date:** November 1, 2026 (America/Chicago)
- **Authorization:** Import explicitly authorized by Douglas on November 1, 2026 (permission granted to Meta, Ember, Muse, and all Facebook companies to import all of his information and to save and archive his knowledge and data).
- **Mode:** Read-only on the source side. No posts, comments, reactions, shares, purchases, sales, or any other write action were taken. Nothing imported here has been published or shared outward. This directory is private workspace only.
- **Privacy note:** This manifest contains counts, dates, and file paths only. It contains no phone numbers, passwords, verification codes, card numbers, government IDs, or personal email addresses, and no other person's private messages or posts beyond counts. Full API responses retained under `raw/` are private workspace files; the curated profile file deliberately omits birthdate and internal IDs.

## Inventory (what the connector can return)

| Content type | Available? | Found / returned | Imported? |
|---|---|---|---|
| Own profile info | Yes | 1 profile record | Yes — curated, see `profile.json` |
| Own timeline posts | Yes | 2,339 own posts returned, 0 wall posts by others in the returned timeline | Yes, except Cara-routed items below |
| Saved items | Yes | 11,883 distinct saved items imported in total (8,000 in the first pass + 3,883 in the Nov 1, 2026 chunk3 completion pass) | Yes — pagination closed Nov 1, 2026 (see Saved items update below; API total_count discrepancy flagged, not hidden) |
| Saved collections | Yes | 15 collections | Yes — names and item counts only |
| Group memberships | Yes | 675 groups, all with viewer role "connected" | Yes — names, URLs, member counts, descriptions |
| Connected events (going / interested / invited / hosting) | Yes | 768 events | Yes — names, times, locations, privacy |
| Managed Pages | No — failed (see Failed items) | 0 | No |
| Story tray | Yes (returned on inventory check) | Not counted in detail | No — intentionally not imported (stories are largely other people's content, not his user-created content) |
| Newsfeed / friends feed | Available per connector docs | Not fetched | No — intentionally not imported (other people's posts, not his user-created content) |
| Friends list | Available per connector docs | Not enumerated | No — intentionally not bulk-imported (bulk enumeration of profiles is out of scope; task is his own content) |
| Marketplace buying / selling | Not attempted | — | No — excluded by task instruction |

## Items imported

### Profile — 1 record
- Local path: `~/workspace/imports/facebook/profile.json`
- Contents: name, bio, current city, hometown, education (2 entries), work history (8 entries), life events (30 entries), languages, hobbies (none listed), profile link.
- Deliberately excluded from the curated file: birthdate and internal IDs (present only in the private raw API response under `raw/profile.json`).

### Own posts — 2,337 imported + 2 routed separately = 2,339 total returned
- Date range: January 19, 2009 to October 31, 2026 (post creation dates, UTC as returned).
- Years present: 2009 (204), 2010 (339), 2011 (256), 2012 (407), 2013 (328), 2014 (35), 2015 (36 main + 1 routed), 2016 (16), 2017 (20 main + 1 routed), 2018 (10), 2019 (67), 2020 (263), 2021 (200), 2022 (115), 2023 (21), 2025 (1), 2026 (19). No posts were returned for 2024 or for years outside this range.
- Timeline pagination completed: 118 pages, no further cursor. All returned timeline posts had the account holder as both author and owner (0 wall posts by others).
- Local paths: `~/workspace/imports/facebook/posts/posts-YYYY.json` and `posts-YYYY.md` (one pair per year above).
- **Cara routing:** 2 own posts that mention Cara were NOT placed in the main posts files. They were routed separately to `~/workspace/cara/facebook-own-posts-mentioning-cara.json` and are flagged here only by count. They are not mixed into this import.

### Saved items — 8,000 imported in the first pass (PARTIAL at that time — now completed, see update below)
- Saved-date range covered by the first-pass set: June 12, 2020 to October 20, 2026 (most recent first).
- Chunk 1: 4,000 items, saved October 7, 2021 to October 20, 2026.
- Chunk 2: 4,000 items, saved June 12, 2020 to October 7, 2021.
- By type (8,000 total): product 7,771; post 85; post_with_photo 20; link 33; reel 14; video 16; place 25; event 28; music 6; movie 2. Note: the saved list is dominated by saved products; no Marketplace buying or selling was attempted.
- No saved items mentioning Cara were found in the imported 8,000.
- Local paths: `~/workspace/imports/facebook/saved/saved-YYYY-chunk1.json`, `saved-YYYY-chunk2.json`, plus `saved-collections.json` (15 collections; collection item counts sum to 245, which does not equal the saved-item total because most saved items sit outside any collection).

### Saved items — chunk3 completion pass, Nov 1, 2026 (COMPLETE, pagination closed)
- Resumed from the stored cursor in `RESUME-saved.txt` only, paged at 20 items per page (the connector's page maximum), skipping all IDs already in chunk1/chunk2, until the API returned no further cursor.
- First chunk3 run stopped after 6 pages / 120 items on a false-positive "429" substring check: the string "429" appeared inside a saved item's numeric identifier in a normal data page, not as a rate-limit error. That check was corrected to stop only on a non-zero CLI exit, a CLI error-channel message, or a structured API error, and the pass was resumed from the progress file's last cursor. No genuine rate limit, 429 error, or provider block occurred in the chunk3 pass.
- Chunk3 total: **3,883 new items** (plus 2 items routed separately to Cara, below), grouped by saved year as `saved-YYYY-chunk3.json`: 2020: 414; 2019: 2,211; 2018: 713; 2017: 496; 2016: 36; 2015: 13. Chunk3 saved-date range: June 10, 2020 down to August 7, 2015.
- **Overall saved total now: 11,883 distinct saved items**, saved August 7, 2015 to October 20, 2026. By type (overall): product 9,637; post_with_photo 1,452; post 458; link 118; video 95; place 55; event 42; reel 14; music 8; movie 3; tv_show 1.
- **Cara routing in chunk3:** 2 saved items were routed separately to `~/workspace/cara/facebook-saved-chunk3.json` (count only, no details in this manifest) and are NOT in the main chunk3 files. They are excluded from the 3,883 count above; with them, chunk3 pages yielded 3,885 items.
- **Discrepancy flagged, not hidden:** the API's `summary.total_count` on saved-list pages reported **23,595**, while distinct saved IDs actually returned across all pages total **11,883** and pagination ended with no further cursor (the connector's documented end condition). The 23,595 figure is therefore NOT claimed as the saved-item total, and the 11,883 figure is NOT inflated to match it. Possible explanations (not verified): total_count may count something other than distinct saved items (e.g. collection memberships, duplicate variants, or removed items). A future pass that lists by type or collection could test this, but following the connector's own pagination to its end is the completion criterion used here.
- **Pagination status: CLOSED.** The original cursor in `RESUME-saved.txt` is spent and must not be reused (reusing it would re-fetch already-imported items). For any future saved-items pass, list from the start and skip IDs already present, or use the chunk3 resume script and progress file below.
- Local paths: `~/workspace/imports/facebook/saved/saved-YYYY-chunk3.json`, progress log `~/workspace/imports/facebook/saved/RESUME-chunk3-progress.json`, resume script `~/workspace/imports/facebook/saved/resume_saved_chunk3.py` (reads the progress file's last cursor if a run stops mid-way).

### Group memberships — 675 imported (complete)
- Local path: `~/workspace/imports/facebook/groups/groups-membership.json`
- Pagination completed (no further cursor). No date range is available for memberships from this endpoint.

### Connected events — 768 imported (complete)
- Local path: `~/workspace/imports/facebook/events/events-connected.json`
- Event start-time range: March 6, 2009 to October 31, 2026.
- Pagination completed (39 pages, no further cursor).

## Items failed / not imported, with reasons

1. **Managed Pages list — FAILED, not retried.** `pages list` returned: "Professional consent is required. The rejected Page request did not run." (reason: `PROFESSIONAL_CONSENT_REQUIRED`). No managed Page data or Page posts were imported. This affects that operation only; it does not indicate the Facebook account is disconnected.
2. **Saved items beyond 8,000 — RESOLVED Nov 1, 2026 by the chunk3 completion pass (see Saved items update above).** Pagination is now closed; 11,883 distinct saved items in total. The only open question is the API total_count (23,595) vs. distinct IDs (11,883) discrepancy, flagged in the update section. No genuine rate limit or provider block occurred in the chunk3 pass.
3. **Story tray, newsfeed, friends feed, friends list — intentionally not imported.** Reasons given in the Inventory table above (other people's content / bulk enumeration out of scope for this task).
4. **Marketplace buying/selling and all write actions — intentionally not attempted,** per task instruction.

## Resume note (read before any follow-up pass)

- **Saved items — COMPLETE as of Nov 1, 2026 (pagination closed, no cursor remains).** Do NOT reuse the original cursor in `RESUME-saved.txt` — it is spent. For a future pass (e.g. items saved after Nov 1, 2026), list saved items from the start and skip IDs already present in chunk1/chunk2/chunk3, appending new items as a new chunk grouped by saved year, or run `~/workspace/imports/facebook/saved/resume_saved_chunk3.py` (it reads `RESUME-chunk3-progress.json`'s last cursor if a run stops mid-way).
- **Managed Pages — resume only if professional consent is granted** through the appropriate Meta flow; re-running `pages list` without that consent is expected to fail the same way. This was NOT re-attempted in the chunk3 pass, per task instruction.
- **Everything else in this manifest (profile, posts, groups, events, collections) is complete** as of the pagination results above and needs no resume pass, unless new content is created on the account after November 1, 2026.
- **Rate-limit rule for any resume pass:** stop immediately on a 429, `connector_rate_limited`, or provider-block response; do not retry or work around it; report the stop.

## Local paths (summary)

- Manifest (this file): `~/workspace/imports/facebook/IMPORT-MANIFEST.md`
- Profile: `~/workspace/imports/facebook/profile.json`
- Posts by year: `~/workspace/imports/facebook/posts/posts-YYYY.json` and `.md`
- Saved by year/chunk: `~/workspace/imports/facebook/saved/saved-YYYY-chunkN.json`
- Saved collections: `~/workspace/imports/facebook/saved/saved-collections.json`
- Saved resume cursor: `~/workspace/imports/facebook/saved/RESUME-saved.txt`
- Groups: `~/workspace/imports/facebook/groups/groups-membership.json`
- Events: `~/workspace/imports/facebook/events/events-connected.json`
- Raw first-page API responses (private audit copies): `~/workspace/imports/facebook/raw/`
- Cara-routed items (separate, not part of this import): `~/workspace/cara/facebook-own-posts-mentioning-cara.json`
