# Gmail Import Manifest — COMPLETE

- **Source name:** Gmail (connected account; 1 account linked)
- **Status:** COMPLETE — all 312 distinct messages imported. Nothing was deleted, trashed, labeled, archived, sent, or changed in Gmail; all source-side work was read-only.
- **Import runs:** Nov 1, 2026 (positions 1–19, oldest) and Nov 2, 2026 (positions 20–312, resume pass)

## Counts

- **Items found (distinct messages, inventoried by ID):** 312
  - Inbox: 304 · Sent: 10 (6 of these also carry the Inbox label) · Draft: 1 · Spam: 3 · Trash: 0
  - Only system labels exist on this account; no custom labels were found.
  - Distinct total reconciles as 304 + 10 + 1 + 3 − 6 overlapping Inbox/Sent messages = 312.
- **Items imported (full body saved + metadata indexed):** 312
  - Main import: 296
  - Routed to Cara's separate folder: 16
- **Items failed (error on fetch):** 0
- **Items not yet attempted:** 0
- **Items routed to Cara's separate folder:** 16 total (0 among the first 19; 16 in the Nov 2 resume pass). Cara screening was by subject/from/body match in the import script; Cara material lives only in `~/workspace/cara/gmail-import/` and never in the main import.
- **Verification:** the two metadata indexes together contain seq 1–312 exactly once each — no missing seq, no duplicates.

## Date range covered

- **Full mailbox range (all 312 messages):** Aug 4, 2026 – Nov 1, 2026
- **Main import range:** Aug 4, 2026 – Nov 1, 2026
- **Cara-routed range:** Aug 11, 2026 – Oct 30, 2026 (16 messages; subjects and bodies are in the Cara folder only, not summarized here)

## Local paths (private workspace only — nothing here is published or shared outward)

- Metadata index (date, subject, labels, local file — no sender/recipient addresses): [metadata-index.csv](sandbox://workspace/imports/gmail/metadata-index.csv) — 296 rows + header
- Cara metadata index: `~/workspace/cara/gmail-import/metadata-index.csv` — 16 rows + header
- Full message files, grouped by primary label/year: [messages/](sandbox://workspace/imports/gmail/messages/) — 296 files in the main import; 16 files under `~/workspace/cara/gmail-import/messages/`
- ID inventory and resume state (internal only): `all_ids.json`, `progress.json`, `list_default.json`, `list_anywhere.json`, `list_in_inbox.json`, `list_in_sent.json`, `list_in_draft.json`, `list_in_spam.json`, `list_in_trash.json`
- Import script: [import_gmail.py](sandbox://workspace/imports/gmail/import_gmail.py)
- Attachment inventory: [attachment-inventory.csv](sandbox://workspace/imports/gmail/attachment-inventory.csv)

## What was imported per message

Each saved file preserves the message subject and date, its Gmail labels, and its extracted text body. Attachment contents were NOT downloaded in this pass.

## Attachments — inventory only, not downloaded

- **Messages listing attachments:** 6, each with 1 attachment — 6 attachments total, all in the main import, none in the Cara-routed set.
- See [attachment-inventory.csv](sandbox://workspace/imports/gmail/attachment-inventory.csv) for filenames, types, and sizes. No attachment contents were downloaded in this pass.

## Rate-limit handling in the Nov 2 resume pass

- The Nov 1 stop was on a `429` substring check that could false-positive on a message body. Before the Nov 2 run, the script's `run_cli` was fixed: a rate-limit stop now triggers only on a genuine structured connector/CLI error (parsed JSON with `kind: connector_rate_limited`, a structured error with code 429 / `rateLimitExceeded`, or a non-zero exit with a rate-limit marker in stderr) — never on a substring inside a successfully fetched message body. Any genuine stop would have been logged to `rate-limit-log.txt`.
- **No genuine rate limit occurred in the Nov 2 run** (no `rate-limit-log.txt` was created, exit code 0, `FINISHED done=312 failed=0 cara=16 attach_msgs=6`). The stale `stopped_on_rate_limit` field left in `progress.json` by the Nov 1 run was removed on completion.

## Usage guard (Nov 2 resume pass)

- Usage at start: 35% used · 65% left, resets Nov 7, 2026, 3:06 PM CST.
- Usage checked after every ~50 messages imported (at ~50, ~100, ~150, ~200, ~250, and at finish): 36% used at every check.
- Usage at finish: 36% used · 64% left, resets Nov 7, 2026, 3:06 PM CST.
- The 75% stop guard was never approached; no stop was needed on usage grounds.
