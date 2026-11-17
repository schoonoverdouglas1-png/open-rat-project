# Instagram Import Manifest — Douglas Roy Schoonover

- Source: Instagram, account @dougrschoonover (connected via Meta Accounts Center; status check passed 2026-11-01)
- Import date: 2026-11-01 (America/Chicago)
- Read-only on the source side: nothing was published, commented on, liked, followed, or changed. Nothing imported here has been published or shared outward; this folder is private workspace only.
- Privacy: this manifest contains counts, titles/dates, and file paths only. No phone numbers, passwords, verification codes, card numbers, government IDs, or personal email addresses are included. Internal account/post identifiers were stripped from the cleaned import files.

## Inventory found (2026-11-01)

- Profile: 1 (personal account, public; 77 followers, 106 following, profile post count 9)
- Own posts: 9 (6 image, 1 carousel, 2 legacy video)
- Reels (connector REEL filter): 0 returned — see note below
- Saved items: 54 reported as total by the connector; 44 actually returned
- Saved collections: 3 listed — "All posts" (54), "Saved" (54), and "Cara" (1)
- Current stories: 0 (call returned empty)
- Story archive: 4 items, all video, all 2020-03-30
- Content types not pulled (out of this import's scope, not inventoried for counts): tagged posts, recently liked/commented posts, followers/following lists, close friends, notifications, direct messages (separate connector)

## Items imported

- Profile: 1 — `~/workspace/imports/instagram/profile.md`
- Own posts: 9, with his own captions, grouped by year:
  - `~/workspace/imports/instagram/posts/2017.md` (1)
  - `~/workspace/imports/instagram/posts/2020.md` (2)
  - `~/workspace/imports/instagram/posts/2022.md` (4)
  - `~/workspace/imports/instagram/posts/2023.md` (1)
  - `~/workspace/imports/instagram/posts/2026.md` (1)
  - Own-post date range: 2017-06-20 to 2026-08-09
- Reels: 0 imported as reels. See `~/workspace/imports/instagram/reels.md` — the 2 legacy 2020 video posts live in `posts/2020.md` and are not classified as reels by the connector.
- Saved items: 44, metadata only (author username, date, type, post link, like/comment counts, caption presence/length — full caption text of other people's posts was not copied), grouped by original post year:
  - `~/workspace/imports/instagram/saved/2015.md` (3)
  - `~/workspace/imports/instagram/saved/2016.md` (6)
  - `~/workspace/imports/instagram/saved/2017.md` (7)
  - `~/workspace/imports/instagram/saved/2018.md` (3)
  - `~/workspace/imports/instagram/saved/2019.md` (2)
  - `~/workspace/imports/instagram/saved/2020.md` (21)
  - `~/workspace/imports/instagram/saved/2021.md` (2)
  - Saved-item date range (returned items): 2015-07-06 to 2021-11-07; 32 image, 6 carousel, 6 video; 18 distinct authors
- Story archive: 4 items, metadata only — `~/workspace/imports/instagram/stories-archive.md`
- Total items imported: 1 profile + 9 own posts + 44 saved items + 4 story-archive items = 58

## Items failed / not imported, with reasons

- Saved items: 10 of the 54 reported saved items were NOT retrieved. Reason: the connector reports total_count 54 but returns 44 items with no next page and no end cursor, in both default and ascending-sort reads. The gap is unexplained by the connector output — it is not silently capped and called complete.
- Saved collections ("All posts" / "Saved"): per-collection reads returned HTTP 500 Internal Server Error. Per the connector's rule for bulk reads returning HTTP 500, those reads were stopped, not retried. This is a likely route for the resume pass below.
- Cara collection: 1 item found. Deliberately NOT imported into this folder. Routed separately and flagged only at `~/workspace/cara/instagram-cara-collection-note.md`, per the rule to keep Cara's information separate from his own materials. No item details are recorded there.
- Media files (photos/videos): NOT downloaded for any item. Reason: the connector provides no media-download command, and media were not scraped from the web. Each own-post entry links to its public Instagram post instead; saved-item entries link to their public posts. Only 1 of the 44 returned saved items even carried a direct media URL field.
- No rate limit (429 / connector_rate_limited / provider block) was hit during this import, so no rate-limit stop was triggered.

## Date range covered

- Own posts: 2017-06-20 to 2026-08-09
- Saved items (returned): 2015-07-06 to 2021-11-07
- Story archive: 2020-03-30 only

## Resume note — what is left for a later pass

1. Re-run the saved-items read (and, if it then works, the per-collection reads) to recover the 10 missing saved items; compare by post link against the 44 already in `saved/*.md` and append only new items, grouped by year.
2. If Douglas wants media files kept locally, that needs a separate, explicitly approved download route — the Instagram connector alone does not provide one.
3. The "Cara" collection item stays out of this import unless Douglas confirms what it is and where it should live.
4. Tagged posts, recently liked/commented posts, and follower/following lists were not part of this import; add them only if he asks for a wider pass.
5. This import is partial on saved items (44 of 54) — do not describe it as complete until the resume pass closes that gap.
