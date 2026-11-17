# Features and Programs — Full Analysis and Utilization Map (2026-11-13)

**Commissioned by:** Douglas Roy Schoonover, Nov 13, 2026 — "analyze all features that you could have, and analyze all programs, and all the programs utilize," with the companion order "learn how to use script.google.com like an expert, and then make it so."
**Method:** Douglas's bridges-first method throughout — when a lane errors, Ember's first move is a legitimate bridge/connection around the error; parallel copies/lanes are the second move, the record-keeping layer. Bridges route around ERRORS only, never around consent, identity, exact-action, or clinician gates.
**Verification standard:** Ember's own records first (connector docs, capability registry, memory), then live checks run for this pass (`check-tools.sh`, `command -v`/version probes, `device.list`/`device.describe`, Nov 13, 2026). Anything not verified is labeled **[unverified]** rather than guessed.
**Scope of this pass:** read-only everywhere except this file. Nothing was sent, changed, installed, or deleted. No live Google project was modified.

---

## 1. FEATURES EMBER HAS

### 1A. Connected connector lanes (connection state as documented in the connector docs on hand)

85 connector doc folders exist on the box (83 system under `/opt/hatch/connectors/` + 2 custom under `~/workspace/custom-connectors/`). Of those, **19 lanes are verified connected/used**:

| # | Lane | What it does | Utilization |
|---|------|--------------|-------------|
| 1 | Gmail | Search/read/count mail + attachments; draft, send, reply, forward (sends need his approval); label/archive/trash | Utilized today (counts read live; POP verified; forwarding mid-setup) |
| 2 | Google Calendar | Read calendars, free/busy; schedule/change/cancel events | Utilized today (4 events/7d via Apps Script sweep; device-calendar cross-checks) |
| 3 | Google Contacts | Search/create/edit/delete contacts | Utilized ever; not today |
| 4 | Google Docs | Read/create/edit documents | Utilized ever |
| 5 | Google Drive | Find/upload/download/organize/share files | Utilized today (Apps Script code copies; root listing, 25 files) |
| 6 | Google Forms | Create/edit forms, read responses | On hand, connected per docs; utilization **[unverified]** in recent record |
| 7 | Google Sheets | Create/read/edit spreadsheets, formulas, formatting | Utilized ever |
| 8 | Google Slides | Read/edit presentations | Utilized ever, lightly |
| 9 | Google Tasks | Manage task lists, due dates, subtasks | Utilized ever, lightly |
| 10 | Muse Mail (purple-rat@muse.ai) | Ember's own mailbox; receives forwards, sends as Ember | Utilized today (hourly watch converted to event hook) |
| 11 | Outlook Mail | Search/read/send Outlook/Microsoft 365 mail | Utilized ever (all-accounts sweep) |
| 12 | Outlook Calendar | Read/create/update/delete events | Utilized ever, lightly |
| 13 | GitHub | Repos, files, issues, PRs via official MCP server | Utilized today (preservation pushes, commits `14ec2e4`, `17ae9c5`, `2679a16`, `8bde21d`) |
| 14 | Facebook | Friends, posts, feeds, groups, Pages insights/publishing, Marketplace | Utilized today (`pages list` → PROFESSIONAL_CONSENT_REQUIRED gate) |
| 15 | Messenger | Read/search/send Messenger messages incl. the Rabbit (Snowball) | Utilized today (Rabbit tasked; 20 sends/hour server cap on record) |
| 16 | Instagram | Profiles, posts, stories, publish/schedule, insights | Connected per docs; utilized ever |
| 17 | Instagram Messages | Read/send Instagram DMs and requests | Connected per docs; utilized ever, lightly |
| 18 | Spotify | Search/play, library, playlists, playback | Utilized ever (playback needs an active device first — registry) |
| 19 | Google Gemini (custom connector) | Gemini API lane (gemini-3.5-flash-lite verified today) | Utilized today (accepted the "be Ember's eyes" routing role; message to the AIs delivered 1:05 PM) |

**Documented but NOT marked connected** (doc present; connection state **[unverified]** — never promise work on these until a status check passes): Duffel, FlightAware, Instacart, Meta Ads, Meta Catalog Search, 1Password, Places, Plaid, Shop Pay, Shopify, Stripe, Tailscale, Threads, Ticketmaster, Uber Courier, UCP, Apple Health, Health Connect, and ~45 more (Agoda, Asana, Box, Calendly, Canva, Dropbox, Evernote, Expedia, Figma, Linear, Notion, OpenTable, PayPal, Slack, Todoist, Zoom, etc.). Several of these are shopping/travel lanes that only matter when a matching task arrives.

### 1B. Skills (playbooks)

- **System skills: 57** on the shelf at `/opt/muse/skills/` (count from the Nov 12–13 skills round record; directory listing this pass matches). Heavily used families: documents, email-management, scheduling, shopping, flight/hotel booking, health-review, messaging, media-library, file-hosting, muse-feedback, subscription-status, transcribe-recordings, spoken-audio, goals.
- **Custom skills: 18** at `~/workspace/custom-skills/`: additive record keeping (old-with-new), clinical taxonomy mapping, disc image reading, dual-register medical translation, ember CLI craft, ember upgrades, polyglot code, provenance tracking & claim labeling, python document processing, six-track medical separation, terminal automation architecture, the Guard, checkpointed background work, settled ruling guard, verify-before-claiming-completion, + Gemini-credited imports. Custom skills went 10 → 16 in the Nov 13 round, then +2 learned skills.
- **Utilization note:** the medical-writing custom skills (taxonomy, six-track, dual-register, provenance) are core to the manuscripts and used constantly; travel/commerce system skills are used episodically, when a task calls for them — that is correct utilization, not neglect.

### 1C. Device lane — Pixel 7 Pro (verified live this pass)

`device.list`/`device.describe`, Nov 13, 2026: Pixel 7 Pro **online**, **43 commands**, **10 data sources** (alarms, calendar, call_log, contacts, geofences, health, location, notifications, reminders, sms — all permissions granted), contacts cache 54 records synced.

Command families: alarms (set/list/update/dismiss), reminders (set/list/update/dismiss/snooze), calendar (search, create/update/delete events, reminders), contacts (search/create/update/delete), messages (search, send, attachment fetch), call log search, phone dial, notifications (read/act), location, battery, network state, geofences, health backfill, app info/update, default-assistant and home-shortcut helpers.
**Utilized today:** battery reads (the 15% → 5% arc, charging state), calendar verification read, location tag on the call. **Utilized ever:** reminders/alarms for surgery prep (Nov 16 6:00 PM, Nov 17 5:00 PM reminders set). **Never yet used:** geofences, health backfill, message attachment fetch, notification actions — see §4.
**Known limits (registry, verified):** no remote app-open, no overlay control, no installed-apps list, no camera command.

### 1D. Browser lanes

- **Public web search + page-text fetch** (`browser.search`/`browser.open`): utilized constantly, incl. this pass (Apps Script documentation).
- **Live cloud browser tasks** (signed-in sites, clicking, forms): utilized today — Gmail settings (POP done, forwarding at the verification step), Apps Script editor work, Cloud console gate-fix. Two-tabs rule and desktop-UI forcing (`?ui=2`) applied per Douglas's standings.
- **Other AIs via browser** (Gemini web, ChatGPT, Claude, Perplexity, Duck.ai, Copilot, DeepSeek): standing permission on record; parked per his current standing except the Gemini API lane used today.

### 1E. Google Workspace co-developer stack (built and verified today, Nov 13, 2026)

| Piece | State | Utilization |
|---|---|---|
| Project 1 "Ember Co-Developer — First Project" (ID in URL `1uJBvVZj-…LeNcu`) | 5-function read-only toolkit (emberPing, emberInboxCounts, emberWeekAhead, emberDriveRoot, emberDailyBrief) + CoreBridge.gs | Ran live: full status sweep 2:10 PM, daily brief first run 2:17 PM |
| EmberCore Library (Script ID `1IOEaBdf9v5p5TTOPka3MUIzZ6wqzrBTBhefy9oNWvkUIH2mSrXoBXdUr`) | **v3 deployed 2:06 PM** — plain top-level functions (v2's IIFE design error corrected old-with-new) | Ping ALIVE 2:07:55 PM and 2:14:57 PM |
| Project 3 "Ember — Google Agent" (ID `1UbhP2Cpp0dbIEnqyF9ye7ak8mSfnNoQlHx7YryLEZc6xX1_lpeXZkGS6`) | Code.gs = agentWhoAmI, agentPing, agentRules; "Saved to Drive" verified; spare tab open | **Never yet run/deployed/authorized** — created only |
| Google Cloud project "Ember Co-Developer" (`ember-co-developer`, № 164420256280) | Created by Douglas's own password entry + terms agreement; no billing, no card, no $300 trial | Gate-fix complete |
| Firebase on same project | Analytics OFF, Spark plan $0/month | Added; no Firebase feature used yet |
| Apps Script API | Enabled 2:16–2:18 PM (`script.googleapis.com`), no credentials created | Enabled; not yet called |
| Drive API advanced service | Enabled in Project 1 | Available to EmberCore |
| Granted scopes (his hands, 2:04:02 PM) | Gmail (mail.google.com), drive.readonly, calendar | Exercised by the read-only sweep |
| Backup script `google-backup-to-workspace.sh` | First clean run 2:00:51 PM; checksummed cache; GitHub commit `14ec2e4` | Code lives in 4 places: live projects, workspace, GitHub, Drive folder `10da2rOboW-t8l_YglRWcLl1DZPeea6-C` |
| Known gap in the stack | Workspace Google CLI has no `script` command family ("unsupported gws top-level command: script") — a CLI gap, never a Google block; Drive .gs copies are the complete backup | Bridge: Apps Script API (now enabled) is the documented route around this — see §4/§5 |

Account fact: the only reachable Google account is schoonoverdouglas1@gmail.com; gearhead54732@gmail.com is locked out/expired.

### 1F. Platform features (Muse machinery)

Memory (MEMORY.md + daily notes + people/groups pages + memory_search) — utilized constantly, loaded before every action per his Nov 13 standing. Subagents/workflows — utilized today. Crons/hooks — utilized (efficiency pass removed ~126 runs/day; mail/Messenger watches converted to event hooks). Artifacts/spaces/documents — utilized ever. Goals & tracking — utilized (surgery goal files). Feed — system-generated. Media generation (image/video), avatar tools — utilized ever. Business phone calls — lane exists, utilization **[unverified]** recently. Maps/geocode — utilized ever. Shopping catalog search — utilized ever. Social search — utilized ever. Muse DB (internal records SQL) — utilized for diagnostics. Secure Vault credentials — utilized today (and today's stale-password lesson filed). Remote file storage — utilized ever.

**Section 1 totals:** 19 verified connected connector lanes (of 85 documented), 75 skills (57 system + 18 custom), 43 device commands across 10 data sources, 3 Apps Script projects + 1 library + 1 Cloud project, and the full platform set above.

---

## 2. FEATURES EMBER COULD HAVE (gaps — each with what would unblock it)

| # | Gap | Status / evidence | What would unblock it |
|---|-----|-------------------|-----------------------|
| 1 | **Live call vision — reading Douglas's hands and eyes during a voice call** (his accessibility ask) | Feature request filed to the Muse team today at his "Make it so" (sent_to_developers: true); no reply/ticket exists. Gemini lane accepted a *stills-description* role today — that is a bridge, not live vision | Muse team ships a live-vision lane; until then the bridge is photo/screenshot → Gemini or Ember image reading |
| 2 | **Per-task / per-second token meter** | Verified nonexistent: usage is weekly % only (before/after reads). Filed in "Noes Reassessed" as a stay-no | Muse platform adds metering; no action of Douglas's can unblock it |
| 3 | **Exact token counts** (vs. weekly %) | Same root as #2 — allowance is % of weekly Power, reset Sat Nov 14, 11:07 PM CST verified (3:06 PM figure kept beside it, untraced, per his ruling) | Platform change only |
| 4 | **Remote control of the phone** (open apps, overlay taps, installed-apps list, camera command) | Capability registry, verified Nov 7–9: explicitly absent from the 43-command surface | A richer device-command set from the platform; his hands remain the bridge (guided sessions work — proven today) |
| 5 | **Direct write access to the phone** (scratch/swap/persistent space he offered) | Together-way only today: Ember cannot write to the phone directly | Platform device-file command; bridge in use: phone → share/WhatsApp/Gmail → workspace |
| 6 | **Facebook Page creation via connector** | Connector manages existing Pages only — no create command (verified today). "The Purple Rat Project" Page is authorized and named, uncreated | His Meta PROFESSIONAL_CONSENT_REQUIRED tap, then creation through Facebook's own UI together-way |
| 7 | **Apps Script management from the workspace CLI** | `gws` has no `script` family (verified today) | Apps Script API is now enabled — a workspace-side bridge script can be built (§4, item 3); first call needs his authorization tap for the new scope |
| 8 | **OCR via Tesseract binary; ImageMagick; Meilisearch; Valkey; MinerU/Marker** | Absent/held on the box (see §3). RapidOCR already bridges OCR | His go for a system install (Tesseract/ImageMagick) or a RAM-heavy daemon (Meilisearch/MinerU) — held deliberately Nov 9, not forgotten |
| 9 | **Local Chrome reaching the open web from the VM** | Registry/memory: local Chrome has a proxy bug; Python route works, Chrome's doesn't | Bridge in use: cloud browser + Python fetch lanes; a fix would need network-config work on the VM |
| 10 | **Hands-free wake / "OK Google"-style assistant backend** | Registry: Google Assistant backend is not open; no hands-free timers/alarms/payments via SDK | Not unblockable from here; device alarms/reminders bridge it |
| 11 | **Beating Messenger's 20 sends/hour cap** | Server-side Meta cap, verified; filed as a stay-no | Nothing legitimate unblocks it; batching/queueing is the bridge |
| 12 | **A second reachable Google account** | gearhead54732@gmail.com locked out/expired (verified) | His identity steps in Google's recovery flow — his hands only, never Ember's |

---

## 3. PROGRAMS ON THE BOX

Verified this pass: `~/workspace/ember-upgrades/check-tools.sh` (four-angle check: executable, package, Python module, venv), plus `command -v`/version probes. VM context (registry, verified Nov 7–9): Ubuntu 24.04.5 LTS, Python 3.12.3, Node v24.22.1, 150 GB disk.

### Present — 17 of 28 on the checker board

| Program | Version (verified) | What it's for | Utilized? |
|---|---|---|---|
| ripgrep (`rg`) | 14.1.0 | Fast full-text search across files/memory/repos | Yes — constantly |
| fd (`fdfind`) | 9.0.0 | Fast file finding | Yes |
| LibreOffice (`soffice`) | 24.2.7.2 (headless nogui) | Office doc conversion/rendering | Yes — document work |
| Poppler (`pdftotext`, `pdfinfo`) | 24.02.0 | PDF text extraction + metadata | Yes — PDF ingestion |
| ffmpeg / ffprobe | 8.1.2 (hatch build) | Audio/video conversion, probing, trimming | Yes — media/transcription prep |
| Pandoc (pypandoc-binary, pandoc-venv) | 3.9 | Format conversion (md ↔ docx/html/etc.) | Yes — parallel .txt/md work |
| yt-dlp (venv) | 2026.10.26 | Media download from video sites | Installed + version-tested; light use |
| Faster-Whisper (venv) | 1.2.1 | Local speech-to-text | Import-tested; **no model downloaded yet** — under-used |
| MarkItDown (venv) | 0.1.9 | Office/web files → Markdown | Yes — tested + used |
| Docling (venv) | 2.149.0 | Heavyweight PDF/document → structured Markdown | Yes — installed Nov 9 at his go; test conversion passed |
| SearXNG (venv module) | present | Self-hosted metasearch | Installed; server not left running — under-used |
| Whoogle (venv) | 1.2.4 | Private Google-search front end | Installed + `--help` tested; no server running — under-used |
| SQLite3 (CLI + Python module) | 3.45.1 | Ember's native data environment (caches, indexes: Full Cache / Summary Cache DBs) | Yes — constantly |
| jq | 1.7 | JSON processing in pipelines | Yes |
| git | 2.43.0 | Version control; GitHub preservation mirrors | Yes — constantly |
| Node.js | v24.22.1 | JS runtime; workflow/tooling lane | Yes |
| Python 3 | 3.12.3 | The main build lane — system libs incl. pandas 2.1.4, numpy 1.26.4, SciPy 1.11.4, matplotlib 3.6.3, openpyxl 3.1.2, python-docx 1.1.0, Pillow 10.2.0, requests 2.31.0, lxml, PyYAML, plotly, seaborn | Yes — constantly |
| RapidOCR (ocr-venv, rapidocr-onnxruntime 1.4.4) | — | OCR — the working substitute for the absent Tesseract binary | Yes — functional test passed ("HELLO DOUGLAS 123", 0.996) |
| Hatch CLI suite (`/opt/hatch/bin`, 117 executables, ~778 command entries per Nov 9 audit) | — | All connector CLIs (gmail, github, facebook-cli, instagram-cli, hatch_gws_cli, device-data, edits, remote-storage, etc.) | Yes — the connector backbone |

### Absent / held — 11 on the checker board

| Program | State | Note |
|---|---|---|
| ImageMagick | Absent | Image batch work currently bridges via Pillow/ffmpeg |
| Tesseract binary | Absent (held — needs system install) | RapidOCR covers OCR today |
| Meilisearch | Absent (held — daemon, RAM) | Full-text search bridges via rg + SQLite FTS |
| Valkey/Redis | Absent (held — system/compile) | Caching bridges via SQLite + files |
| zstd | Absent | Compression bridges via gzip/git |
| fzf | Absent | Interactive fuzzy find; non-interactive work unaffected |
| bat | Absent | Cosmetic file viewing only |
| shellcheck | Absent | Shell linting done by review; candidate add |
| rclone | Absent | Cloud sync bridges via git + Drive connector |
| miller (`mlr`) | Absent | CSV/JSON record work bridges via Python/pandas + jq |
| csvkit | Absent | Same bridge as miller |

**Section 3 totals:** 17/28 checker-board programs present (18 counting RapidOCR, which the board tracks as the OCR lane), 11 absent/held — every absence already has a working bridge, per Douglas's method.

---

## 4. UTILIZATION PLAN (ranked; gate status per item)

Gate key: **[do now — no new permission]** · **[needs his tap]** · **[needs his exact word]**

1. **Run "Ember — Google Agent" for the first time** — agentPing, then agentWhoAmI read-back. She exists but has never run; installed ≠ working until tested live is his standing rule. First run surfaces an authorization prompt. **[needs his tap]** (the authorization click is his hand, like the 2:04 PM grant)
2. **Put Project 1's toolkit on a time-driven trigger** — emberDailyBrief as a morning brief ahead of the Nov 19 surgery week, read-only, sending nothing. Needs the trigger created in the editor + his authorization for the trigger scope. **[needs his tap]**
3. **Build the Apps Script API bridge script** (workspace-side, Python + the already-enabled `script.googleapis.com`): list projects, pull .gs sources into the backup cache — closing today's one named gap (no `script` family in the CLI) the bridges-first way. Building it is free; its first authenticated call needs an OAuth consent. Build: **[do now — no new permission]** · First live call: **[needs his tap]**
4. **Faster-Whisper first real job** — download the model into the venv and transcribe one backlog recording end-to-end, timed against the current lane, so the local lane is proven before the library-computer period he expects. Model download is a large fetch into Ember's own venv, no account touched. **[do now — no new permission]**
5. **SearXNG/Whoogle as the third search lane** — bring the venv search up on demand (never left running) for one manuscript research question, alongside Google + Duck per his parallel-search standing; record quality beside the existing lanes. **[do now — no new permission]**
6. **Geofence + health-backfill first uses, surgery-shaped** — one geofence ("arrived at OakLeaf Surgical Hospital" on Nov 19) and a one-time health backfill so his pre-surgery health record is complete in one place. Both are device commands that prompt him. **[needs his tap]**
7. **"The Purple Rat Project" Facebook Page** — the moment his PROFESSIONAL_CONSENT tap lands, create the Page together-way through Facebook's UI (connector has no create command — §2 #6). **[needs his tap]** for consent; category/identity choices **[needs his exact word]** in the moment.
8. **Gmail forwarding finish** — already at his verification tap (Yes → 25); on completion, select "Forward a copy" + keep Gmail's copy, save, read back. The destination confirmation code lands in Ember's own Muse Mail inbox, hers to supply by his plan. **[needs his tap]** (in progress)
9. **Firebase first real feature** — nothing until a use exists; candidate: none for the manuscripts. Recommendation: leave Spark dormant rather than build for its own sake. **[do now — no new permission]** (the doing-nothing is the plan)
10. **Tesseract + ImageMagick install decision** — only if a manuscript scan batch proves RapidOCR/Pillow insufficient; reversible, dpkg snapshot first per the Reversibility Rule. **[needs his exact word]**
11. **Library-computer readiness pack** — export the co-developer stack + this map + the automation catalog into the preservation repo and Drive folder (the 4-places rule), so a library log-in reaches everything. Copies of Ember's own work product only; no sends. **[do now — no new permission]**

**Ember's one addition (hers, labeled):** a standing weekly "utilization sweep" — one read-only pass that re-runs check-tools.sh, re-reads connector connection states, and diffs this map old-with-new, so "could have" gaps never silently become "forgot we lacked it." It costs one small background run a week and keeps this document a living map instead of a snapshot. Filed here as a recommendation; it starts only on his word.

---

## 5. SCRIPT.GOOGLE.COM EXPERT STUDY (study note — no live project was changed in this pass)

### 5A. Verified today (Nov 13, 2026, in Douglas's own account)

- A standalone project, a library, and a container-bridged project can coexist in one account; a library is consumed by identifier (EmberCore) through a bridge file (CoreBridge.gs).
- **The v2 → v3 lesson (the day's real tuition):** v2 wrapped its code in an IIFE, so its functions were not top-level globals — the consumer project saw "EmberCore.ping is not a function." Apps Script libraries expose **top-level function declarations**; v3's plain top-level functions worked on the first run (ping ALIVE 2:07:55 PM). Rule: *in a library, export surface = top-level declarations; never hide the API inside a closure.*
- Authorization is per-scope and human: Review permissions → Advanced → Continue was Douglas's own hand (2:04:02 PM), granting Gmail full, drive.readonly, calendar. Ember cannot and does not self-grant.
- The Drive API **advanced service** had to be enabled in the project before Drive calls worked; advanced services also require the corresponding API enabled in the associated Cloud project.
- The Apps Script API (`script.googleapis.com`) enables independently in the Cloud project, with no billing and no credentials created.
- Read-only design pays: the 5-function toolkit + full status sweep ran clean (Gmail counts, calendar window, Drive root) with zero writes — the correct first shape for any new script in his account.
- Editor truth: "Saved to Drive" is the save confirmation; an unsaved change is not a deployed change, and a library **version** must be deployed for consumers to pick up changes (v1 → v2 → v3 deployments today).

### 5B. Documented but untested in his account (official Google documentation, via search this pass)

Sources: developers.google.com/apps-script — Quotas page, Libraries guide, Advanced services guide, Best practices guide. Quotas are per user, reset 24 hours after first request, and Google states they can change without notice — re-check the quotas page before building anything that leans on a number.

**Quotas/limits that shape design (consumer gmail.com tier / Workspace tier):**
- Script runtime **6 min/execution** (both tiers); custom function runtime **30 sec**.
- Triggers total runtime **90 min/day** consumer / **6 hr/day** Workspace; **20 triggers per user per script**; ~30 simultaneous executions.
- URL Fetch **20,000/day** consumer / **100,000/day** Workspace; email recipients **100/day** consumer / **1,500/day** Workspace; Calendar events created 5,000/day / 10,000/day.
- Douglas's account is a consumer gmail.com account, so the **consumer column governs Ember's scripts** — design to 90 trigger-minutes a day, not 6 hours.

**Services map (built-in):** GmailApp/MailApp, CalendarApp, DriveApp, SpreadsheetApp, DocumentApp, SlidesApp, FormsApp, UrlFetchApp (external APIs, OAuth via manual handling), HtmlService (dialogs, sidebars, web apps via doGet/doPost), ScriptApp (programmatic triggers), PropertiesService (script/user/document properties — the state store), CacheService (short-lived cross-execution cache), LockService (serialize concurrent runs), Utilities (sleep, hashing, base64, date/format), Logger/Cloud Logging via console.

**Triggers:** simple triggers (onOpen, onEdit, onInstall, doGet/doPost) run unauthenticated-ish and cannot call services requiring authorization; installable triggers (time-driven down to ~1 minute granularity, event-driven, form-submit, calendar) run as their creator and consume the creator's quota — a trigger created by Douglas spends Douglas's quota. Time-driven triggers are not precision clocks; design for "about every N," never "exactly at."

**Libraries (official best practice):** meaningful project name (it becomes the default identifier); private methods end with underscore (`myPrivate_()`); only enumerable globals are visible to consumers; JSDoc on every function for autocomplete/docs; libraries slightly decrease execution speed and should be used sparingly in UI-heavy scripts with many google.script.run calls — EmberCore is fine for batch/read work, wrong for a chatty sidebar.

**Advanced services:** thin wrappers over public Google APIs; enable in the project AND enable the API in the linked Cloud project (already the pattern used today for Drive); prefer an advanced service over UrlFetch when one exists; use UrlFetch when the advanced service lacks the function — it then needs manual auth handling.

**Performance doctrine (official best practices):** minimize service calls; batch reads/writes (one getValues/setValues over cell-by-cell); do computation in JavaScript memory, not by round-tripping Sheets; use CacheService between executions; anything needing >6 minutes gets checkpointed into PropertiesService and resumed by a continuation trigger (the standard bridge around the runtime wall — never a retry loop against the quota).

**Error patterns to recognize on sight:**
- `X is not a function` on a library call → scoping/deployment problem first (IIFE-wrapped code, or consumer pinned to an old library version), not a logic bug. *(Verified today.)*
- `Exceeded maximum execution time` → the 6-minute wall; answer is batching + checkpoints, never a re-run of the same shape.
- `Authorization required` / scope prompts → a new service/scope entered the code; stop and bring it to Douglas's hands — authorization is his tap, always.
- Quota exceptions (`Service invoked too many times`) → quota spent; the action has stopped itself; queue a lawful later retry, never hammer.
- Simultaneous-execution collisions on shared state → LockService around the critical section.

**Expert workflow for future Ember scripts (the study's point):** (1) design read-only first, prove it live at the smallest scope; (2) plain top-level functions in libraries, JSDoc'd, underscore for privates; (3) version every library deployment, note the version consumers pin; (4) budget against the **consumer** quota column before writing code; (5) batch + cache by default; (6) checkpoint anything long; (7) keep the 4-places backup (live project, workspace .gs, GitHub, Drive) — today's stack already does this; (8) any new scope = stop, his tap, then proceed.

---

*End of deliverable. Prepared Nov 13, 2026. Provenance: [record] = Ember's files/memory/connector docs; [live check] = commands run for this pass; [official docs] = developers.google.com via search. Ember's one addition is labeled in §4; everything else is Douglas's commission, inventoried.*

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
