© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Threads Import Manifest — Douglas Roy Schoonover

## Status: NOT CONNECTED — import not started

- **Source name:** Threads (via Meta Accounts Center / `threads-cli`)
- **Status check performed:** 2026-11-01 (America/Chicago)
- **Status check command:** `/opt/hatch/bin/threads-cli accounts`
- **Status check result:** `{"accounts":[]}` — a successful empty list, which per the connector documentation establishes that no Threads account is connected.
- **Connect route (official, from connector):** `/opt/hatch/bin/threads-cli connect-url` returned the Meta Accounts Center link for linking a Threads account. No sign-in was attempted, no password was requested, and no live browser task was used.

## Inventory

- **Items found:** 0 (no account available to inventory)
- **Content types available once connected (per connector docs):** profile, posts (profile-threads), replies (profile-replies), media posts (profile-media), saved posts, liked media, activity feed, followers/following, insights, trends, search, feeds. No counts or date ranges could be obtained without a connected account.
- **Items imported:** 0
- **Items failed:** 0 — nothing was attempted, because there is no connected account to read from.

## Local paths

- This manifest: `~/workspace/imports/threads/IMPORT-MANIFEST.md`
- Imported content files: none created. Intended layout once connected: `~/workspace/imports/threads/<content-type>/<year>/` (posts, replies, profile, saved, etc., grouped by content type/year as supported by the connector).

## Date range covered

- None — no data imported.

## Privacy notes

- No phone numbers, passwords, verification codes, card numbers, government IDs, or personal email addresses are recorded in this manifest.
- No content belonging to Cara was encountered (no account was accessible), so nothing was routed to `~/workspace/cara/`.
- Nothing imported is published or shared outward; `imports/` is private workspace only. No publish, reply, like, or change was made on the source side (read-only intent; no account to act on).

## Resume note — what is left for a resume pass

1. Douglas (or the parent agent, with his go-ahead) links his Threads account through Meta Accounts Center using the official connect URL returned by `connect-url`.
2. Re-run the status check (`threads-cli accounts`) and confirm a non-empty account list; reuse that account's numeric ID for all subsequent calls.
3. Inventory first, without publishing: profile, profile-threads, profile-replies, profile-media, saved-posts, liked-media, and activity-feed — record counts and date ranges, respecting page sizes (1–50) and cursors.
4. Import his own posts, replies, and profile content into `~/workspace/imports/threads/<content-type>/<year>/`, then update this manifest with items found, items imported, items failed with reasons, local paths, and the date range covered.
5. If any materials belonging to Cara are encountered, route them separately to `~/workspace/cara/` and flag them — never mix them into his main import.
6. Stop on any rate limit (429 / `connector_rate_limited` / provider block) and report the stop; do not retry or work around it.

**This import is NOT complete and must not be described as complete.** It was stopped at the connection check, before any inventory or import, exactly as instructed for a not-connected account.
