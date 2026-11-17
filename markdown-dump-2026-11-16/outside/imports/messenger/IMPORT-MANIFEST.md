# Messenger Import Manifest

- **Source name:** Facebook Messenger (personal account)
- **Authorization:** Import explicitly authorized by Douglas Roy Schoonover (confirmed Nov 1, 2026: permission granted to Meta, Ember, Muse, and all Facebook companies to import all of his information and to save and archive his knowledge and data).
- **Import date:** Nov 1, 2026 (America/Chicago)
- **Source-side behavior:** Read-only. No message was sent, reacted to, edited, or deleted.
- **Sharing:** Nothing imported here is published or shared outward. This is a private workspace archive only.

## Totals

- **Conversations found:** 15
- **Messages found (retained):** 252
- **Messages imported:** 252
- **Main import:** 14 conversations, 248 messages
- **Routed separately (Cara):** 1 conversation, 4 messages — see below
- **Items failed:** 0
- **Unreadable messages:** 0 (no decrypt failures encountered)
- **Rate limits / blocks encountered:** None

## Date range covered

- **Overall imported messages:** Oct 2, 2026 – Nov 1, 2026 (America/Chicago)
- Per-conversation date ranges are in `conversation-index.json` (no message bodies in the index).

## Local paths

- **Metadata index (no message bodies):** `~/workspace/imports/messenger/conversation-index.json`
- **Main conversation histories (one file per conversation, grouped by conversation):** `~/workspace/imports/messenger/conversations/`
- **This manifest:** `~/workspace/imports/messenger/IMPORT-MANIFEST.md`
- **Cara conversation (separate, not in the main import):** `~/workspace/cara/messenger/03-cara-johnson.json`

## Conversations imported (main)

| # | Conversation | Folder | Messages | Date range (Chicago) |
|---|---|---|---|---|
| 0 | Douglas Schoonover | INBOX | 57 | Oct 2 – Nov 1, 2026 |
| 1 | Large pending group (Alicia Lopes and others; participant list in the index file) | PENDING | 40 | Oct 31 – Nov 1, 2026 |
| 2 | Stelzer Douglas | INBOX | 2 | Oct 21 – Oct 31, 2026 |
| 4 | Old House Life | INBOX | 55 | Oct 2 – Oct 31, 2026 |
| 5 | Patrick Borton | INBOX | 15 | Oct 6 – Oct 30, 2026 |
| 6 | Jane Smith | INBOX | 2 | Oct 28, 2026 |
| 7 | Large pending group (Jake Brewster and others; participant list in the index file) | PENDING | 11 | Oct 8 – Oct 27, 2026 |
| 8 | Gina Schick | INBOX | 3 | Oct 15 – Oct 23, 2026 |
| 9 | David Cook | INBOX | 1 | Oct 21, 2026 |
| 10 | Passion Room 813 | PENDING | 1 | Oct 15, 2026 |
| 11 | Private Chat Gotesa-797 | PENDING | 14 | Oct 8 – Oct 15, 2026 |
| 12 | Large pending group (Ashley Geoco and others; participant list in the index file) | PENDING | 45 | Oct 7 – Oct 14, 2026 |
| 13 | Private Chat Johan-275 | PENDING | 1 | Oct 7, 2026 |
| 14 | Jennifer Luethi Calkins | INBOX | 1 | Oct 6, 2026 |

Full conversation names and participant counts are in `conversation-index.json`. Saved history files have raw message/conversation identifiers stripped; they keep sender names, timestamps (including Chicago time), message text, attachments, reactions, and poll data.

## Routed separately — Cara

- **Cara Johnson:** 4 messages, Oct 30 – Oct 31, 2026, saved only at `~/workspace/cara/messenger/03-cara-johnson.json`.
- This conversation is flagged here for accounting only. Its message content is NOT in the main import, and it is not mixed into Douglas's main files, per his rule to keep Cara's information separate and off to the side.

## Coverage caveat — read this before calling this complete

- This import covers **what the connector retained at import time**: 15 conversations, 252 messages.
- The connector's refresh window is capped at 30 days (`--since-days` cannot exceed 30), and repeated refreshes including an older-threads refresh returned no additional conversations.
- **This manifest therefore does NOT claim to cover Douglas's lifetime Messenger history.** Older conversations or messages outside the retained set, if any exist, are not in this import.
- No cap was silently applied inside the retained set: every retained message in every retained conversation was imported (252 of 252).

## Resume note

- **Resume pass needed for:** any Messenger conversations or messages older than / outside the retained set described above, if Douglas wants lifetime coverage.
- **How to resume:** re-run the connector refresh and re-check the conversation count; if additional conversations appear, import them as new per-conversation files in `conversations/` (or in `~/workspace/cara/` for any further Cara material), update `conversation-index.json`, and update the totals and date range in this manifest. Do not overwrite existing files — add new ones and note the new pass date.
- **No resume pass is needed for the retained set:** all 15 retained conversations are fully imported, with 0 failures.
