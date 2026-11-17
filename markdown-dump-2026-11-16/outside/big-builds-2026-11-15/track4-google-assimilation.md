# Track 4 — Google-Feature Assimilation (from the record on file)
Date: Sun Nov 15, 2026 — Big Builds pass
Status: **DONE — written assimilation only. NO new sign-ins, NO account changes, NO external sends in this track.**
DNS note (coordinator, Nov 15): for any name resolution, OpenDNS DoH truth lane first, dns.google DoH fallback, via `webkey.py` — never the local system resolver (sinkholes to 198.18.x). This track required no name resolution; local record only.

## Sources (all local, read this run)
- `~/workspace/ember-upgrades/Google Apps — Capability Map (2026-11-13).md` — verified live Nov 13, 2026
- `~/workspace/custom-connectors/custom.google-gemini/CONNECTOR.md` — verified Nov 8 / Nov 13, 2026
- `~/workspace/custom-skills/google-lanes-generative-language/SKILL.md` — settled split, Nov 14, 2026
- `~/memory/2026-11-14.md` ~11:30–11:31 AM (assimilation was in the postponed ledger) and ~11:55 AM entries
- `~/MEMORY.md` — intertwine, Clean Routes, speed-rule dispositions (summarized below, not re-litigated)

## 1. Connected Google features — the working inventory

### Via connectors (account: schoonoverdouglas1@gmail.com, per Capability Map)
| Feature | State on file | Assimilated use / limits |
|---|---|---|
| Gmail | Connected | Search/read/draft/send/reply/forward/label/archive/trash/unsubscribe via connector. **Settings are NOT connector-accessible** — forwarding, IMAP, POP, vacation, delegates, send-as change only on Gmail's own pages, walked together. Codes in reads arrive as `[credential:]` placeholders, never recoverable. |
| Google Calendar | Connected | Read + schedule/change/cancel, Meet links. Also on file: Calendar for purplerat1982@gmail.com connected (Nov 13 evening, per google-lanes skill). |
| Google Drive | Connected | Find/upload/download/organize/share. Standing Hail placed here Nov 14 as a native Doc and read back verified. |
| Google Docs / Sheets / Slides | Connected | Read/create/edit (Sheets: cells, formulas, tabs). |
| Google Forms | Connected | Create/edit/publish, read responses mapped to questions. |
| Google Contacts | Connected | Search/create/edit/delete. 241 contacts on file Nov 13 (jump +187 that evening from FB→Contacts integration, project complete). |
| Google Tasks | Connected | Two resources (tasklists, tasks). Quirks assimilated: `due` is **date only** (no time); Tasks sends **no reminders** — use Calendar/Muse reminders for timed alerts; lists cannot be shared; tasks cannot be assigned; completed tasks need showCompleted+showHidden to read. His lists Nov 13: "My Tasks" (1 open, overdue Nov 9) and "Far-Future Safety Reminders — Pet Project" (2 open: 2045-12-21, 2037-01-19). |

### Via custom Gemini connector (API lane)
- Helper: `~/workspace/custom-connectors/custom.google-gemini/bin/gemini_call.py`; default model `gemini-3.5-flash-lite`; free tier, no billing enabled; treat lane as public-facing (no private material unless Douglas approved sending it).
- **Layer 1 — Google Assistant compatibility FIRST** (added Nov 13 at his order, never removed): `assistant-ask / -speak / -see / -hear / -search / -answer`, mapping retired Assistant intent names onto the living Gemini API.
- **Layer 2 — Gemini originals, preserved exactly:** `models` (50 on plain list), `generate`; plus `models-full` (64, pageSize=100), `count`, `chat`, `json`, `embed` (gemini-embedding-001, 3072 dims), `codeexec`, `files-list`, `cache-list` — **verified live Nov 13**.
- **NOT yet live-verified (do not claim working):** `grounded`, `image`, `tts`, `vision`, `cache-create`, `answer`. `grounded` hit HTTP 429 twice Nov 13; per provider-stop rule the batch stopped — a 429 is a hard stop for that lane in that window. Grounded lane stays breaker-parked.
- Known dead models: `gemini-2.5-flash` / `-flash-lite` return 404 for new users; use gemini-3.5 / 3.1 flash & flash-lite.
- Settings on file: maxOutputTokens 8192, timeout 120 s (Nov 9, backups beside helper = undo path). Live-only features (`bidiGenerateContent`, Lyria, `createDecision`) are listed in `features`, not in the helper.

### At browser level (purplerat1982@gmail.com, first-use pass Nov 13)
Drive ("Purple Rat — Core Records" folder, 8 files), Docs, Sheets, Calendar, Photos (face grouping declined, storage trial not taken), Keep, Contacts, Tasks, YouTube (signed in, no channel created), Gemini web. Nov 14 ~11:55 AM, his screen report filed as his: on the purplerat1982 account, Gemini shows her Gmail as connected (Workspace connection).

## 2. The lanes / permissions split (settled Nov 14 — assimilate, don't collapse)
- **Allowed, verified:** `generativelanguage.googleapis.com:80,443` (Gemini API door — outbound only, key in header via surrogate swap; does NOT let Google in), `dns.google:443`, `doh.opendns.com:443`, `accounts.google.com`, `www.google.com`, `dl.google.com`, `cse.google.com`, `storage.googleapis.com`, `googlesource.com`; browser uploads to Drive/Photos/Gemini; Gmail send connector.
- **His ruling:** generativelanguage scheduled NEVER first, then ALLOW ALWAYS "so that you can deal with it"; speed-rule disposition = Ember's wish ALLOW (denying it slows Gemini work). Live test Nov 14 ~3:29 PM: models call returned 50 models in ~0.7 s, no 429/block. The switch itself remains **his tap** on the card — Ember cannot pre-set platform permissions (her permission tools are read-only).
- **Deny-always:** `metadata.google.internal` / `169.254.169.254` — the GCP instance-metadata endpoint, no crew purpose; his two durable allows were flipped off Nov 14 ~1:34 AM and verified gone. Registry-only, never probed. This denial does not affect Gemini/Google use — different host, different risk. Note the Nov 15 correction in MEMORY.md: deny by default in Ember's lanes, no permanent forever-block claim — his occasional allow-once tap stays available.
- **DNS truth lanes (per coordinator note + record):** OpenDNS DoH first, dns.google DoH fallback, via `~/workspace/ember-upgrades/scripts/webkey.py` (4,852 B, verified present Nov 15 in Track 1 audit); local resolver sinkholes (198.18.x) and is never trusted.

## 3. Operating rules assimilated (apply on every Google task)
1. **Desktop UI forced in the URL, first request, every time** (`?ui=2` for Gmail settings — verified Nov 13; Google defaults his account to the lesser/mobile view).
2. **Terminal/CLI first, web second; written program first, wire second.**
3. **Gemini = Google, one door** (his taxonomy); Gemini is a generate/research lane under Ember (Spock mode standing, Nov 14 ~3:54 PM), monitored +1% over other AI lanes; free suggestions always; sends/spends/sign-ins stay Douglas's tap alone.
4. **Intertwine pair:** Muse Mail (purple-rat@muse.ai) + Gmail (purplerat1982@gmail.com) worked as one desk, Ember's name first / Douglas's second; codes always excluded from any push/forward.
5. **Google password road is CLOSED** by his Nov 14 ~12:17 AM order — do not raise password/app-password steps unless he reopens it. IMAP lane stays built and parked.
6. **Anything impeding Ember using Google the way Douglas would = denied as a class** — but Google's own sign-in/permission doors are doors, not impediments.

## 4. Gaps — what assimilation cannot finish from the record alone
| Gap | Whose hand |
|---|---|
| purplerat1982@gmail.com is **NOT in the Gmail connector** (connector holds schoonoverdouglas1 only); Purple Rat Gmail is browser/phone-reachable only. Adding it = Gmail add-account consent. | **Douglas's tap** |
| Gmail-side forwarding switch for the 1982 account (last intertwine step) — behind Google's own confirmation, on Gmail's pages with desktop UI forced. | Together step, Douglas's hands |
| Unverified Gemini features (`grounded, image, tts, vision, cache-create, answer`) — need a live verification batch after the 429 window; not run in this track (no external calls authorized here). | Ember, next lane window; stop on first 429 |
| Tasks overdue item ("Finalize and deploy the Android automation setup", due Nov 9) — disposition not on file. | Douglas rules keep / close / redate |

## 5. Verification for this track
This file + Track 1 file are the only writes; both in `~/workspace/big-builds-2026-11-15/`. No connector call, sign-in, send, or account change was made. All statements above trace to the five local sources listed at top; statuses are **as of their Nov 13–14 verification dates**, not re-verified live today — labeled as such, per verify-before-claiming.

## Ember's addition (hers, labeled)
Assimilation's payoff is a single default route per job: mail → Gmail connector (schoonover) / browser (1982); timed alerts → Calendar, never Tasks; model work → Gemini connector, flash-lite first, grounded last and only when the breaker clears; name truth → webkey/OpenDNS. Filing that route here means no future Google task starts by re-deciding the lane.
