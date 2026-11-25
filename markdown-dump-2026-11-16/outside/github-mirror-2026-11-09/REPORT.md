© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Background Retrieval Job #2 — Report (2026-11-09 night, America/Chicago)

Authorized by Doug on the Nov 9, 2026 voice call. Method: Packet Bridge (halves + overlapping third, seams verified). Read-only toward all sources; nothing deleted, nothing overwritten (old-with-new). New material lives in `~/workspace/github-mirror-2026-11-09/` and `~/workspace/drive-pull-2026-11-09/`.

## 1. GitHub — full local mirror (owner: schoonoverdouglas1-png)

**15 repositories** (12 public, 3 private). Two independent listings were cross-checked (overlap verification): the connector's `search_repositories` returned **14** and the `gh repo list` API returned **15** — the connector search missed `ember` (index lag; see Failures). All 15 remote HEADs were taken by `git ls-remote` and verified against local copies.

| Repo | Visibility | Branch | Remote HEAD (latest commit) | Files | Total size (bytes, incl .git) | Mirror location | Verification |
|---|---|---|---|---|---|---|---|
| schoonoverdouglas1-png | PUBLIC | main | 6233d4706fcd748a2570f74391ac305b1cc6c48e | 1 | 34,577 | github-mirror-2026-11-09/schoonoverdouglas1-png | fresh clone in mirror, HEAD == remote HEAD ✓ |
| schoonoverdouglas1-png.github.io | PUBLIC | main | cd8c76a116169ad143322eb09db66730c16d6933 | 18 | 62,483 | github-mirror-2026-11-09/schoonoverdouglas1-png.github.io | fresh clone in mirror, HEAD == remote HEAD ✓ |
| ember | PUBLIC | main | 9fcf5cf8934ce65e83a81e32786e6bdf88287bb6 | 4 | 50,995 | github-clones/ember | already mirrored, local HEAD == remote HEAD ✓ (not duplicated) |
| research | PRIVATE | main | 2cbf80b5bd229ab9ef7cd346a84cddf731480d6a | 7 | 40,491 | github-mirror-2026-11-09/research | fresh clone in mirror, HEAD == remote HEAD ✓ |
| chat-archive | PRIVATE | main | f76d7970635db8fa879b22c493db6431ddf84b81 | 22 | 5,776,839 | github-mirror-2026-11-09/chat-archive | fresh clone in mirror, HEAD == remote HEAD ✓ |
| muse-swap-space | PRIVATE | main | b821ec016a4f2c2b17d0f33ab51fa4561f212741 | 406 | 49,615,359 | github-mirror-2026-11-09/muse-swap-space | fresh clone in mirror (pre-existing copy at git-automation/muse-swap-space is STALE at 77444f36…, left untouched) |
| ai-supercomputer-history | PUBLIC | main | 6c906b92e1842f20199064682a74fd1430179705 | 7 | 40,254 | github-clones/ai-supercomputer-history | already mirrored, local HEAD == remote HEAD ✓ (not duplicated) |
| change-of-address | PUBLIC | main | 7d27d6fc482cb7fe40939b28dbcab943cabac0fd | 24 | 169,453 | github-mirror-2026-11-09/change-of-address | fresh clone in mirror (pre-existing copy at github-clones/change-of-address is STALE at a430ab5d…, left untouched) |
| historical-modern-therapeutics-of-disease-nomenclature | PUBLIC | main | 8ddf9fdcbeed9f45786686db26181a6aa021c348 | 5 | 75,254 | github-mirror-2026-11-09/historical-modern-therapeutics-of-disease-nomenclature | fresh clone in mirror (pre-existing copy at github-clones/historical-modern-therapeutics-of-disease-nomenclature is STALE at f1f86b37…, left untouched) |
| medical-elements-and-thoughtology | PUBLIC | main | 9a298bafb21606d5b0ae009e05538c6aa507ab4e | 7 | 301,245 | github-mirror-2026-11-09/medical-elements-and-thoughtology | fresh clone in mirror (pre-existing copy at github-clones/medical-elements-and-thoughtology is STALE at 7d143ac5…, left untouched) |
| medical-research-and-continuous-updates | PUBLIC | main | 41d5c9b272830b20d9f5484626361ffa62da99d8 | 446 | 5,644,218 | github-clones/medical-research-and-continuous-updates | already mirrored, local HEAD == remote HEAD ✓ (not duplicated) |
| quantum-medicine | PUBLIC | main | f3576f756b75846d578abde63fc1461f2d8ca4c2 | 5 | 89,852 | github-mirror-2026-11-09/quantum-medicine | fresh clone in mirror (pre-existing copy at github-clones/quantum-medicine is STALE at e10e443c…, left untouched) |
| serotype-disease-groupings | PUBLIC | main | a586c14cbfc42c69d17ed3aa1650663ddb6283a2 | 28 | 417,546 | github-mirror-2026-11-09/serotype-disease-groupings | fresh clone in mirror (pre-existing copy at github-clones/serotype-disease-groupings is STALE at 20539c74…, left untouched) |
| the-mycelial-transposition | PUBLIC | main | d6e393f892652abbcb92067cc359dd5c014ec5a0 | 247 | 6,437,887 | github-mirror-2026-11-09/the-mycelial-transposition | fresh clone in mirror (pre-existing copy at github-clones/the-mycelial-transposition is STALE at b46f86c1…, left untouched) |
| vaccine-toxoid-research | PUBLIC | main | bc35b0a20618907c45b7cad7347dbca553cb8a95 | 17 | 573,965 | github-mirror-2026-11-09/vaccine-toxoid-research | fresh clone in mirror (pre-existing copy at github-clones/vaccine-toxoid-research is STALE at 107c9439…, left untouched) |

- **Already current (3):** `ai-supercomputer-history`, `ember`, `medical-research-and-continuous-updates` — existing clones under `github-clones/` matched remote HEAD exactly; not duplicated.
- **Stale pre-existing copies (8):** left exactly as they were (old-with-new); fresh clones at current HEAD were made in the mirror folder instead. This includes `muse-swap-space`, whose working clone in `git-automation/` lags the fast-moving remote.
- **Fresh clones (12):** every clone's `HEAD` was read back and matches the `ls-remote` SHA in the table — 12/12 seam checks passed.

## 2. Google Drive — inventory + document pull

Inventory pulled in one page-packet of 100 (86 entries returned, no second page): **85 files + 1 folder** ("Compendium - Shareable with Claude - Douglas Schoonover"). Composition: 64 Google Docs, 9 Markdown, 2 DOCX, 2 PDF, 1 Sheet, 1 Site, 1 TXT, 1 JSON, 1 HTML, 1 EPUB, 1 ZIP, 1 OGG. All 85 files are Doug's own work; no ambiguous third-party/family material was found, so nothing was held back on that ground.

Pulled into `~/workspace/drive-pull-2026-11-09/` (66 files, 1,137,522 bytes):

- **Stored binaries (6):** `Encapsulated_Organisms_Research_Bridge_v0.1.docx`, `Cryptococcus as an Immunological Bridge - Research Summary.txt`, `1Shared Research Bundle.pdf`, `Unified Vaccine and Carrier Architecture Master Reference V2.pdf`, `Clinical Pharmacology and Immunology Study Guide.epub`, `system_preferences.json` — each byte-size verified against Drive's listing (the JSON's size differs for a connector reason; see Failures).
- **Google Docs (59 of 64):** pulled through the Docs connector (the Drive connector's own rules route native files to their app connectors, and forbid `drive files export`) and saved as extracted plain text in `drive-pull-2026-11-09/google-docs-text/` — 59/59 succeeded, 919,268 bytes of text. The other 5 entries were Drive-internal duplicates (identical name + size) and were skipped, listed in the working manifest.
- **Spreadsheet (1):** `MANIFEST_Parallel_Exactness_Verification` → saved as CSV (11 rows).

Skipped, with reasons:
- **10 files** already present in the workspace with identical name + size (incl. `SOUL.md` ×2 sizes, `MEMORY.md`, the 3.1 MB Clinical Pharmacology DOCX, the Medical Elements book Markdown, the fixed-physics HTML).
- **Out of the task's document scope (3):** `Shareable Research Bundle (2026-10-30).zip` (1,716,699 bytes, archive), `Ember Bell — Android Notification Sound (2026-11-09).ogg` (21,415 bytes, audio), and the Google Site named `schoonoverdouglas1@gmail.com` (native Site — no download lane; readable only in Google Sites).

**Packet-Bridge overlap check:** the pulled MANIFEST spreadsheet lists 10 Google Doc IDs as "VERIFIED - Docs = Drive" (dated 2026-11-03); only **5 of those 10 IDs** appear in tonight's Drive inventory. The other 5 documents exist tonight under the same titles but were not matched by ID — cause not established (the manifest predates tonight by six days; re-uploads would explain it, but that is not verified). Flagged here rather than silently passed over.

## 3. Totals

| Lane | Bytes pulled tonight |
|---|---|
| GitHub fresh clones (12 repos, incl .git) | 63,594,951 |
| Google Drive pull (66 files) | 1,137,522 |
| **Total** | **64,732,473 bytes (~61.7 MiB)** |

## 4. Failures and discrepancies — stated plainly

1. **Connector repo search incomplete:** `search_repositories` returned 14 of 15 repos (missed `ember`). Cause: search-index lag (the repo exists and was verified three other ways: `gh repo list`, `ls-remote`, and its pre-existing local clone matched remote HEAD). No content was lost — the gh listing was used as authoritative after the overlap check exposed the gap.
2. **`system_preferences.json` first download wrote 0 bytes:** the Drive connector streamed this small file's content to stdout instead of the `--output` path. Recovered by capturing stdout. The saved copy is 721 bytes vs Drive's listed 625 because the connector pretty-prints JSON; the content parses as valid JSON with the expected top-level keys (communication_preferences, operational_rules, profile_name, retrieved_at, schema_version).
3. **8 pre-existing clones are stale** (SHAs in the table notes): they were NOT updated in place, per old-with-new; the mirror folder holds the current copies.
4. **MANIFEST ID overlap 5/10** — see §2. Unresolved; no action taken.

## 5. Out of scope — confirmed unchanged from the previous assessment

- **Meta AI standalone app chats:** no connector lane exists; Ember's only window remains phone notifications. Not attempted.
- **Gemini chat history (~103 chats):** no export lane; the API lane answers new questions only. Not attempted.
- **NotebookLM:** no bulk-pull lane (read-only in place, inventory only). Not attempted.
- **Google Photos:** no pull attempted; remains as previously assessed.
