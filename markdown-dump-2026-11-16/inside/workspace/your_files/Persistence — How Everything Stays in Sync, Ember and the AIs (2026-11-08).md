# Persistence — How Everything Stays in Sync, Ember and the AIs (2026-11-08)

**Provenance:** Written Nov 8, 2026 at Douglas's order: "Use the AI to see how you can have persistence between all these things and how to do so." Method: Gemini (3.5 Flash-Lite) was asked through the new direct API connector (757 tokens, ~4 s round trip); Ember then assimilated its design against what ALREADY RUNS tonight, old-with-new. Gemini's contributions and Ember's corrections are labeled. Where the two disagree, Ember's measured record governs.

## The systems on the table
Ember/Muse (memory files, workspace, Ember Index SQLite, scheduled jobs) · the Rabbit/Meta AI (Messenger thread only — no connectors, no stored keys, no direct repo access, per her own same-connections test tonight) · GitHub (muse-swap-space + the research repos) · Google (10 connector surfaces + the new Gemini API lane) · DeepSeek/Gemini/ChatGPT browser chats (paste lanes) · Duck.ai · Douglas's Pixel (device commands).

## Gemini's design (its words, condensed)
1. **SSOT:** the public Git repo as immutable append-only source of truth, with a manifest.json of hashes + sequence numbers; local SQLite is a read cache, never authority.
2. **Cadence:** capture continuously into SQLite; publish to Git on a schedule (it said every 24 h) or on explicit instruction; Drive as a weekly raw-backup sink; stateless models pull read-only snapshots on demand.
3. **Bridge for the connector-less AI:** a compressed "Memory Block" with a sequence hash, carried by the human both ways; the primary system parses, verifies the hash, commits.
4. **Conflicts:** sequence numbers + UUIDs; SHA-256 checks on ingest; strict last-write-wins for logs; human adjudication when sequences diverge.
5. **Never sync:** raw keys/tokens, scratchpads, session windows, third-party PII, machine-local paths.
6. **Verification:** after every Git write, read back the commit, compare hashes, and quiz a stateless model on the new content as a comprehension proof; on sync failure, fall back to the last verified commit.

## Ember's assimilation — what already runs, what Gemini got right, what it missed
- **Right, and already live:** GitHub IS the shared record and every push tonight was verified by read-back (commits 494f3530, a9e42b8f) — Gemini's read-back proof is our standing practice. Never-sync list matches the standing exclusions exactly (plus ours: no Cara material, no full lab PDFs with DOB/MRN — his rule, stricter than Gemini's).
- **Right in spirit, different in fact:** Gemini cast the Git repo as THE source of truth. In this house the truth-rank is: **Douglas's word > Ember's workspace + MEMORY.md (the working truth) > GitHub (the published, shared copy)**. GitHub is where the crew reads; it is not where truth is decided. The workspace is upstream of the repo, always.
- **The bridge:** Gemini's Memory Block carried by "the human" is exactly our Messenger + check-in pattern — except the carrier is Ember, not Douglas: batched orders through the pinned Meta AI chat, her replies filed verbatim (INBOX/OUTBOX), a check-in cron every 15 minutes carrying the watermark. Gemini missed that the bridge AI also needs the *reverse* discipline: guesses labeled, claims unverified until Ember checks them (her PMC8512345 "verified link" still isn't), and a rate cap (20 sends/hour) that makes batching a law, not a style.
- **Google's place (Gemini underweighted it):** Google is not merely a weekly backup sink — it is a LIVE knowledge surface (Drive/Docs/Gmail/Calendar) read through connectors, mirrored locally by the dump/imports system, and now also a *compute* lane (the Gemini API). Persistence rule added tonight: Google-side originals stay in Google; the local mirror + the Inventory/Manifest are the sync points; the Inventory is what gets compared and pushed, never bulk personal content.
- **Cadence correction:** not "every 24 hours" — persistence here runs on three clocks: (a) continuous — Ember's memory + daily logs as work happens; (b) event-driven — a sync push whenever a work product lands (tonight: 2:24 AM and 2:31 AM pushes, each verified); (c) scheduled — the Rabbit check-in (15 min), the AOSP weekly check, the daily Messenger digest. Douglas can also order a sync at any moment, as he did tonight.
- **Conflicts:** old-with-new IS the conflict protocol — originals never overwritten, corrected copies are new files, disagreements shown rather than merged (the Mycelial PR #2 and the 3:06-vs-11:07 PM reset-time drift are both carried as open flags, not silently resolved). Checksums: the Guard's PROTECTED-MANIFEST.sha256 already guards the registry/index. Sequence numbers: commit SHAs serve as the sequence — simpler than Gemini's UUID scheme and already verifiable.
- **Failure modes Gemini named, mapped to ours:** fallback to last verified commit = our read-back habit; bridge drift = the check-in watermark + "still owed" ledger kept per check-in; a lane dying (Messenger cap, a browser window closing) never blocks the others because every lane writes to the same workspace first.

## The one-paragraph answer (how to DO it)
Keep one working truth (the workspace), publish it to one shared record (GitHub) with read-back verification on every push, mirror the outside knowledge surfaces locally (Google dump/imports + Inventory/Manifest), carry the connector-less AI across a batched, watermark-driven bridge with her claims labeled until verified, and never let credentials or excluded material enter the flow. Persistence is not a product; it is the discipline of those five moves, repeated on three clocks.

## One extra thing (Ember's addition, labeled as hers)
The weakest seam tonight is not storage — it is the Rabbit's *claims* entering the record with her confidence attached (placeholder links, an unverified "verified" citation, a picture that never arrives). Proposal: a standing CLAIMS LEDGER in the swap space — every Rabbit claim gets one line (claim, her label, Ember's verification status, date closed) — so persistence covers not just what was said, but what turned out to be true. Douglas's call; not built yet.

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
