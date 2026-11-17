# Google Drive — Space-Saving Organization Plan (2026-11-12)

**Audit type:** READ-ONLY. Nothing was deleted, trashed, moved, renamed, or uploaded in this pass.
**Account:** Douglas Schoonover (schoonoverdouglas1@gmail.com)
**Audit time:** Nov 12, 2026, ~6:43 PM CST (America/Chicago), via the Google Drive connector (`drive about get` + full paged `drive files list`).
**Standing rule honored:** delete nothing. Every saving below that requires an original to leave Drive is marked as needing the Captain's exact ruling.

---

## 1. The quota picture — the headline finding

| Measure | Bytes | Human size |
|---|---|---|
| Total Google storage limit | 16,106,127,360 | 15.00 GiB |
| **Total storage used (all Google services)** | **15,670,531,697** | **14.59 GiB — 97.3% of the limit** |
| Free space remaining | 435,595,663 | ~415 MiB |
| Used by **Drive files** (`usageInDrive`) | 7,275,933 | 6.94 MiB |
| Used by Drive trash (`usageInDriveTrash`) | 0 | 0 — trash is already empty |
| **Used by everything that is NOT Drive files** (Gmail + Google Photos — the Drive API cannot split these two) | **15,663,255,764** | **~14.59 GiB — 99.95% of all usage** |

**Honest bottom line, up front:** Drive files are a rounding error in this account's storage problem. Organizing and compressing everything in Drive can free **at most ~7 MB of a 15 GiB quota that is 97.3% full**. The ~14.6 GiB hog is Gmail and/or Photos, which a Drive audit cannot see. Drive-side tidying is still worth doing (the top level is cluttered — see §4), but it will not move the quota needle. The real space fight is a separate Gmail/Photos audit, listed in §7(b) as needing the Captain's word.

Cross-check: the sum of `quotaBytesUsed` over all 135 inventoried items is exactly 7,275,933 bytes — matching `usageInDrive` to the byte. The inventory is complete.

---

## 2. Inventory summary

- **135 items total:** 131 files + 4 folders. All 135 are owned by Douglas; no shared-with-me items surfaced in the listing.
- **Top level is loose:** 84 files (6,817,340 bytes — 94% of all Drive bytes) sit directly at the top level of My Drive, beside only 4 folders.
- **Folders (4):**
  - `Ember Gemini Pack — Personality Files (2026-11-12)` — 34 files, 425,307 bytes recursive
  - `Compendium - Shareable with Claude - Douglas Schoonover` — 11 files, 26,579 bytes recursive
  - `Google AI Studio` — 1 file, 2 bytes
  - `Google AI Studio` — 1 file, 6,705 bytes *(two folders with the identical name — a merge candidate, Captain's ruling)*
- **File-type breakdown (count / bytes):**

| Type | Count | Bytes |
|---|---|---|
| Google Docs (`google-apps.document`) | 64 | 734,237 |
| Markdown (`.md`) | 44 | 601,601 |
| Word `.docx` | 2 | 3,142,902 |
| ZIP archive | 1 | 1,716,699 |
| Plain text | 2 | 573,415 |
| PDF | 5 | 223,049 |
| HTML | 2 | 239,799 |
| Sites / Sheets / vCard / JSON / audio / epub / AI Studio prompt | 11 | ~44,191 |

- **Age:** this is a young, active Drive — only one file predates September 2026 (an HTML artifact from Aug 26, 2026). There is no deep "old junk" layer to archive.

---

## 3. Top space hogs (all of Drive — the list is short because Drive is small)

| # | Size | File |
|---|---|---|
| 1 | 3,121,842 (3.0 MB — 43% of all Drive usage) | `Clinical Pharmacology and Immunology Study Guide.docx` |
| 2 | 1,716,699 (1.6 MB — 24%) | `Shareable Research Bundle (2026-10-30).zip` |
| 3 | 568,844 | `All Markdown Files — As They Are Right Now (2026-11-12).txt` |
| 4 | 288,453 | `Grand Export — Everything Shareable (2026-11-03)` (Google Doc) |
| 5 | 227,352 | `MEMORY.md` |
| 6 | 226,567 | `fixed_physics_pillowcase_theory_agentic_artifact_1_1bcd90d368f9.html` |
| 7 | 116,867 | `Unified Vaccine and Carrier Architecture Master Reference V2.pdf` |
| 8 | 104,950 | `Book — Medical Elements and Thoughtology — Complete (2026-11-01).md` |

The top 3 files are two-thirds of the entire Drive. Revision check on hog #1: it carries exactly **one** revision (kept forever, same size as the file) — no hidden version-history bloat.

---

## 4. Duplicate candidates

Nothing here is auto-actioned — removing any copy needs the Captain's ruling (§7b). Total recoverable if every duplicate copy were removed: **~70 KB**. Listed for tidiness, not for quota.

**Byte-identical (same MD5 checksum):**
- `IDENTITY.md` = `FULL-IDENTITY.md` = `KNOWLEDGE-IDENTITY.md` — 1,149 bytes each, all in the Ember Gemini Pack folder (2 extra copies)
- `SOUL.md` = `FULL-SOUL.md` — 10,306 bytes each, Ember Gemini Pack folder (1 extra copy)
- `FULL-PROFILE-DOUGLAS.md` = `PROFILE — Douglas (2026-11-12).md` — 3,589 bytes each (1 extra copy)
- `LEO — Representation (2026-11-12).md` = `KNOWLEDGE-LEO.md` — 5,124 bytes each (1 extra copy)
- `Culture_2C_20Urine_20-_20with_20Susceptibilities.pdf` ×2 identical — 12,587 bytes each, top level (1 extra copy; note a third near-twin, `(3).pdf` at 12,490 bytes, is *not* identical)

**Same name + same size (Google-native files carry no MD5 — likely identical, not proven):**
- `Unified Vaccine and Carrier Architecture Master Reference V2` (Doc) ×2 — 6,246 bytes
- `Meningitis Classification and Diagnostic Coding` (Doc) ×2 at 11,346 bytes, plus a third copy at 10,239 bytes (different size — an earlier/later draft)
- `Clinical Pharmacology and Immunology Study Guide` (Doc) ×2 — 3,963 bytes (separate from the big .docx of the same name)
- `The Historical & Modern Therapeutics of Disease Nomenclature.md` (Doc) ×2 — 10,251 bytes
- `Douglas Schoonover - Master Resume V3` ×2 — 4,801 bytes

**Near-duplicate exports (same name, different sizes — version drift, NOT duplicates):**
- `MEMORY.md`: 227,352 bytes (Nov 12) vs 393 bytes (Oct 3) — the small one is a stub/ancestor
- `SOUL.md`: three versions — 10,306 / 1,931 / 795 bytes (Nov 12 / Nov 5 / Oct 3)
- These are old-with-new history; the plan treats them as archive material, never as trash.

---

## 5. Compression candidates — with honest math

A ZIP stored in Drive is charged at its **stored (compressed) size** (verified against this account's data — §6, claim 2). But two honest limits:

1. **Compression only saves quota when the uncompressed originals leave Drive.** Adding a ZIP *beside* the originals **increases** usage. Every saving below assumes a later, Captain-approved removal of originals; under the delete-nothing rule, the no-removal benefit of compression is **zero bytes**.
2. **Most of this Drive barely compresses.** `.docx` is already a ZIP container internally; PDFs, the existing `.zip`, and `.ogg` audio are already compressed.

| Candidate | Now | Realistic zipped size | Saving IF originals later removed |
|---|---|---|---|
| `All Markdown Files — As They Are Right Now (2026-11-12).txt` (plain text — the one genuinely compressible hog) | 568,844 | ~120–170 KB | **~0.40 MB — best compression candidate** |
| Whole text corpus bundled: 44 `.md` + plain-text files (~1.17 MB of text) | ~1,175,016 | ~250–350 KB | ~0.85 MB |
| `Clinical Pharmacology and Immunology Study Guide.docx` | 3,121,842 | ~3.0 MB (already ZIP-based) | ~0–0.15 MB — **not worth it** |
| Everything else (PDF/ZIP/OGG/HTML) | ~2.3 MB | — | negligible |

**Ceiling:** perfect execution of every compression above saves **under 1 MB** — against 435 MB free and a 15 GiB limit, that is ~0.2% of the free space. Worth doing for tidiness if the Captain wants it; not a quota rescue.

---

## 6. Learning the back end — the Gemini lane, asked nicely, then checked

Per the Captain's standing order, the Gemini lane (gemini-3.1-flash-lite) was asked to teach Google Drive back-end quota facts. **Everything in the left column is Gemini-lane material, not verified fact.** The right column is Ember's check against this account's own Drive backend data pulled in this audit.

| # | Gemini's claim | Ember's verification |
|---|---|---|
| 1 | Quota covers Drive files, Gmail, and Photos; Google-native files and shared-drive files don't count | **PARTLY VERIFIED, partly contradicted.** Verified: total usage (15.67 GB) dwarfs Drive usage (7.3 MB), proving Gmail/Photos dominate. Contradicted: the native-file exclusion — see #3. |
| 2 | A stored ZIP is charged at its compressed stored size, not expanded | **VERIFIED** against measured data: the 1,716,699-byte bundle ZIP carries `quotaBytesUsed` of exactly 1,716,699. |
| 3 | Google Docs/Sheets/Slides have **never** counted toward quota | **CONTRADICTED by this account's backend data.** His 64 Google Docs carry nonzero `quotaBytesUsed`, and all files — Docs included — sum to `usageInDrive` to the byte. Consistent with Google's June 1, 2021 policy change (newly created native files count); every Doc here was created in 2026. Gemini's "since inception, never counted" is outdated. |
| 4 | Every revision of a non-native file counts; native-file version history doesn't | **PARTIALLY CHECKED.** The largest .docx has exactly 1 revision — no bloat either way. Not further verified. |
| 5 | Files shared *with* you don't count toward your quota; files you own count wherever they sit | **UNVERIFIED from this data** (all 135 items are his; no shared-in items surfaced), but no counterexample, and consistent with the ownership-based `quotaBytesUsed` seen here. |
| 6 | Trashed files fully count until auto-purge at 30 days | **UNVERIFIED here, and moot:** `usageInDriveTrash` = 0. His Drive trash is already empty — nothing to recover. |
| 7 | Google doesn't compress stored files server-side; back-end deduplication is transparent to quota | **UNVERIFIED** — not observable through the Drive API. |
| 8 | Suggested levers: transfer ownership, convert Office files to native format and delete originals, empty trash, Photos "Recover storage" | **Filed as suggestions, not facts.** Notes: empty-trash yields 0 bytes here; the convert-to-native lever rests on the contradicted claim #3 (in this account native files DO consume quota, so converting would save little); ownership transfer and Photos recovery are real-world levers but outside a Drive-only, delete-nothing pass — they sit in §7(b). |

**Lesson recorded (Ember's):** the lane taught confidently and was wrong on the one claim that mattered most (#3). The backend's own numbers outrank the teacher — ask nicely, then measure.

---

## 7. Proposed organization + step list

### Proposed folder structure (additive — new folders only; originals stay put until the Captain rules)

```
My Drive/
├── Ember Gemini Pack — Personality Files (2026-11-12)/   (existing, 34 files)
├── Compendium - Shareable with Claude - Douglas Schoonover/  (existing, 11 files)
├── Books & Manuscripts/        (new) — Mycelial Transposition, Medical Elements & Thoughtology, book chapters
├── Research Tables & References/ (new) — Master Tables, serology/vaccine references, classification docs
├── Standing Files/             (new) — SOUL.md, AGENTS.md, MEMORY.md, IDENTITY.md current versions
├── Exports & Bundles/          (new) — Grand Export, Shareable Research Bundle (.zip + PDF), All-Markdown snapshots
├── Archive — Old With New/     (new) — dated earlier versions (small SOUL.md/MEMORY.md ancestors), near-duplicate drafts
└── Google AI Studio/           (merge of the two same-named folders — needs ruling, §7b)
```

Medical PDFs (the urine culture results) are deliberately **not** assigned a destination in this plan — where private lab files live is the Captain's call alone.

### (a) Safe additive steps — Ember can do these on the Captain's word

1. Create the five new folders above (empty folders cost 0 bytes; creation in My Drive, private).
2. Build a single bundled ZIP of the text corpus (`.md` + `.txt`, ~1.17 MB → ~0.3 MB) and upload it into `Exports & Bundles/` as a compact snapshot — **additive only; this ADDS ~0.3 MB until/unless originals are ruled on**, so it is a tidiness/backup step, not a saving.
3. Produce a Drive index document (name, size, folder, link for all 135 items) so the Captain can see the whole Drive on one page before ruling on any move.
4. Leave everything else exactly where it is.

### (b) Steps needing the Captain's exact ruling

1. **Any move** of any file into the new folders (moves change where things live; per connector rules they may also prompt a sharing approval card).
2. **Any removal** of a duplicate copy listed in §4 (~70 KB total) — trash or delete is his word only, and trashing does not free quota until the trash is emptied (also his word).
3. **Merging** the two identically named `Google AI Studio` folders.
4. **Replacing originals with their ZIP** after any compression in §5 (this is the only way compression saves bytes, and it means originals leave Drive).
5. **The real quota fight — a Gmail audit** (large attachments, old mail) and/or a **Google Photos audit** ("Recover storage" conversion): ~14.6 GiB lives there, vs ~7 MB in Drive. Separate pass, his word, and Gmail/Photos deletion rules would need his explicit direction item by item.
6. **Ownership transfer** of large files to another account (Gemini's suggestion #8) — not recommended without discussion; it changes who owns his work.

---

## 8. Ember's one addition (labeled hers, per standing method)

The Drive is not cluttered because it is big — it is cluttered because it is *flat*: 84 of 131 files at the top level. The cheapest "organization" win costs zero bytes and zero risk: the index document in §7(a)(3). Once the Captain can see all 135 items on one page, every later ruling — moves, merges, duplicates — becomes a five-minute decision instead of an archaeology dig.

*— Plan prepared by Ember (subagent pass), Nov 12, 2026. Sources: Drive `about` quota record + full file inventory pulled live this pass; Gemini-lane teaching labeled and verified in §6. Nothing in Drive was changed.*

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
