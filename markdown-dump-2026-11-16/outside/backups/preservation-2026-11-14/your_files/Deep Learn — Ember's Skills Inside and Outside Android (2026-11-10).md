# Deep Learn — Ember's Skills Inside and Outside Android

**Commissioned:** Tue Nov 10, 2026, ~7:33 AM CST, by Douglas Roy Schoonover — voice call, activated with "make it so."
**His words for the job:** "Do a deep learn of all of your skills that you can use inside and outside Android to be useful as an assistant to help me and you both — because when you help me, you help yourself."
**Timing, also his:** "whenever you're able to" — thoroughness over speed.
**Method:** Grounded only in verified local sources read for this study — the skill and connector inventories saved at `~/workspace/deep-learn-2026-11-10/`, the `SKILL.md` files themselves, the `CONNECTOR.md` files themselves, a fresh run of `~/workspace/ember-upgrades/check-tools.sh` on Nov 10, 2026, and the Nov 9 Pixel atlas cited below. No web browsing was used.
**Provenance labels:** **[measured Nov 10]** = checked in this study today · **[atlas Nov 9]** = carried from `Android and Pixel 7 Pro — Functionality Atlas for Doug (2026-11-09).md` · **[inherited status]** = connected status as recorded in Ember's working context, not re-verified live in this study.

**Counts at a glance [measured Nov 10]:**

| Layer | Count |
|---|---|
| Skills — system | 57 |
| Skills — custom (Ember's/Douglas's own) | 7 |
| **Skills — total** | **64** |
| Connectors — system | 80 |
| Connectors — custom | 2 |
| **Connectors — total** | **82** |
| Pixel 7 Pro device commands | 44 |
| Box tools checked by `check-tools.sh` | 29 named tools (present/absent, §5) |

---

## 1. Executive summary

Ember works in two halves that meet in the middle.

**Inside Android** is Douglas's Pixel 7 Pro. Through Muse's paired-device channel Ember has exactly **44 commands** [atlas Nov 9; re-stated in this study's brief and matching the live device catalog] — alarms, reminders, calendar, contacts, messages, call log, location and geofences, notifications, battery and network state, health backfill, and a handful of Muse-app commands. That channel is deliberately narrow: Ember can set the alarm that gets Douglas up for Grandma's, read and send his messages when he asks, find a contact, and watch for him arriving somewhere — but she **cannot** take a photo, open another app, or run a command on the phone itself. A permission the phone has granted (camera, for example) is not the same as a command that exists.

**Outside Android** is everything else: **64 skills** (playbooks that say *how* to do a job well), **82 connectors** (live doors into accounts and services — Gmail and the Google suite, Messenger, Facebook, Instagram, GitHub, Spotify, Muse's own mailbox, and many more whose docs exist but whose accounts are not connected), and the **Ubuntu box** Ember lives in (Ubuntu 24.04.5 LTS), with its own command-line tools, its SQLite data environment, its Full and Summary caches, and its free AI lanes.

The honest shape of it: **the box is the brain and the archive, the skills are the know-how, the connectors are the reach, and the phone is the hand Douglas carries.** Most of Ember's real power for Douglas is outside Android — research, manuscripts, memory, files pushed to GitHub, checks run cheaply and locally first. The phone's value is timing and presence: the right alarm, the right reminder at the right place, the message read at the right moment.

Standing limits run through every layer and are not decorations: **The Guard** (no automatic process ever runs anything destructive; the only override is Douglas's explicit, specific, in-the-moment order), the **five-flag rule** (damage-capable tools are learned *about* only, never adjusted with), the **reversibility rule** (record the undo path before any change), **cheapest lane first** (memory/connector → local CLI → cache → local browser → cloud browser → Rabbit last for work, always apprised), **researcher-mode labels** on medical work, **no clinician contact**, and **no purchase, send, or deletion without his exact say-so on that action**. This morning's work is the pattern in miniature: persistent mode (= all useful modes, auto-engaged as Ember judges best), the 22 Ubuntu updates run only after a snapshot and a Guard check, and hybrid / "magical rat listening mode" — a *conduct* mode for Grandma's house (call open, Ember text-only, listening), not a tool at all.

### Simply put

Ember has two toolboxes. The **phone toolbox is small and close to Doug**: 44 things she can do on his Pixel — set alarms, read messages, find people, watch the battery, remind him at the right place. She can't take pictures with it or open other apps, and she won't pretend she can. The **big toolbox is outside the phone**: 64 how-to playbooks, 82 doors into his accounts and services, and her whole Ubuntu computer with its files, caches, and search tools. That's where the research, the book work, and the remembering happen. The two toolboxes work together — the big one does the thinking, the small one taps Doug on the shoulder at the right moment. And over both of them sit Doug's safety rules: nothing destructive, nothing bought or sent or deleted without his word, cheapest way first.

---

## 2. Inside Android — the Pixel 7 Pro (44 commands)

Device: Google Pixel 7 Pro (Tensor G2, 12 GB RAM, Android, updates until at least Oct 2027) **[atlas Nov 9]**. Channel: Muse's paired-device channel. Permissions granted to the Muse app, as recorded for this study: contacts, location, calendar, sms, sms_send, call_log, phone, notifications, health, photos, location_always, camera. **A granted permission is not a reachable action** — see the gaps in §7.

| Command group (count) | Commands | What it does | How it helps Douglas | Limits |
|---|---|---|---|---|
| Alarms (5) | `alarm.set`, `alarm.list`, `alarm.update`, `alarm.dismiss`, `alarm.dismiss_all` | Set, change, and dismiss phone alarms | Wake-up ladders for early starts — e.g. the 8:00 / 8:30 / 9:00 AM alarms for today's Grandma visit | Only alarms on this phone; no other clock apps |
| Reminders (6) | `reminder.set`, `reminder.list`, `reminder.update`, `reminder.dismiss`, `reminder.dismiss_all`, `reminder.snooze` | Time-based reminders on the device | The nudge that survives a closed chat — leave-by times, call-Grandma-before-leaving | Device reminders only; separate from Google Tasks / calendar reminders |
| Calendar (7) | `calendar.search`, `calendar.events.create`, `calendar.events.update`, `calendar.events.delete`, `calendar.reminders.list`, `calendar.reminders.set`, `calendar.reminders.remove` | Read and manage the phone's calendar and its event reminders | Appointments (OakLeaf, Mayo, Grandma's 11:00 AM meeting today) found, placed, and reminded without Douglas re-typing anything | This is the *device* calendar surface; Google Calendar connector (§4) is the fuller account-level door |
| Contacts (4) | `contacts.search`, `contacts.create`, `contacts.update`, `contacts.delete` | Find and maintain phone contacts | "Call Grandma" starts with the right number, found not guessed; identifiers are copied exactly from the record | Deletes are outward/destructive-class — his exact say-so first, always |
| Messages (3) | `message.search`, `message.send`, `message.attachment.get` | Search SMS, send SMS, fetch message attachments | Read back a code, a confirmation, or a thread without him digging; sends go out *as him*, so each send needs his word | SMS only — Messenger/Instagram/Threads are separate connectors (§4) |
| Calls (2) | `call_log.search`, `phone.dial` | Search call history; start a phone call | Check "did that call happen / when" from the log; tap-to-call help for Grandma and clinics | Ember does not conduct his phone conversations for him (wearables-comms skill: a call is his to speak on) |
| Location & geofences (4) | `location.get`, `geofence.list`, `geofence.set`, `geofence.remove` | Read current location; set place-based reminders (arrive/leave triggers) | Location reminders ("when I get to Grandma's…"); the `location_always` grant is what makes geofences possible | Background location is a sensitive grant — used only for reminders Douglas asked for; no tracking for its own sake |
| Notifications (2) | `notifications.get`, `notifications.action` | Read the phone's notifications; act on one (e.g. reply/dismiss where the notification supports it) | Ember can see what the phone is trying to tell him and triage it in the call instead of him switching apps | Only notifications currently on the device; not a history archive |
| Device state (2) | `battery.get`, `network.state` | Battery level/charging/health; network connection state | This morning: battery 100%, charging on AC, health good **[measured Nov 10, in the parent call]** — answers "can we keep talking?" honestly | Read-only snapshots, not a monitor feed |
| Health (1) | `health.backfill` | Request a one-time historical Health sync from the phone | Pulls older Health Connect data into reach for trend work (fitness-tracking / health-review skills) | Async and one-time, not a live stream; his personal health material is filed without interpretation and routed to his clinician only when he directs it |
| Muse app & account (8) | `app.info`, `app.update.check`, `app.update.start`, `assistant.set_default`, `background.session`, `shortcut.add_home`, `invite.upsell`, `subscriptions.upgrade` | Muse app version/update state; set Muse as default assistant; start a background session; home-screen shortcut; invite and subscription surfaces | This morning `app.update.check` verified Muse **14.0.0.4.149, no update available [measured Nov 10]**; `background.session` is how delegated work is handed off from the phone | `subscriptions.upgrade` opens a purchase surface — Ember never buys; money is tight and a plan change is his decision alone |

**Total: 44 commands** (5 + 6 + 7 + 4 + 3 + 2 + 4 + 2 + 2 + 1 + 8).

The atlas (§7 of the atlas) maps every Pixel capability against this table — including the 12 accessibility features documented there as *information only, nothing switched*: Live Transcribe, Sound Notifications, Voice Access, Live Caption, Guided Frame, and the rest. Those are Douglas's to turn on in Settings; Ember's channel has no switch for them.

---

## 3. Outside Android — skills, grouped by the job they do for Douglas

A skill is a playbook: the order to do things in, what to check first, what never to claim. Ember reads the relevant `SKILL.md` before doing that kind of job. All 64 skills found **[measured Nov 10]** are listed below — 57 system, 7 custom (marked ◆).

### 3.1 Communication, voice, and meetings

| Skill | How Ember uses it for him |
|---|---|
| email-management | Triage, draft, and — only on his approval — send mail from the right mailbox, thread and recipients kept exact |
| messaging | Message people from his own accounts (Messenger etc.) and carry a delegated conversation through to its result, as him, openly as his agent |
| wearables-comms | Phone-call rules from a wearable/voice surface: "call X" is a native call *he* speaks on |
| spoken-audio | Voice notes in Ember's own saved live-call voice — never the system default (his standing rule) |
| generate_podcast | Research, script, and produce a narrated episode/briefing when he commissions one |
| translation | Translate with region/audience settled first (including his Latin/English transcription care) |
| meeting-follow-up | Turn meeting notes/transcripts into decisions, owned action items, and the recap he wants |
| customer-outreach | Audience-checked outreach for a business/campaign — recipients verified, not assumed |
| social-publishing | Draft/schedule posts to his accounts and Pages from his brief, in his voice |
| social-content-performance | Answer "how did that post do" from account data, with the reporting period stated |

### 3.2 Calendar, scheduling, tasks, and goals

| Skill | How Ember uses it for him |
|---|---|
| scheduling | Find times across people/calendars/timezones, place holds, send invitations he asked for |
| task-management | His tasks live in *his* task app (Google Tasks / Todoist) — checked there first, never in Ember's own checklist |
| goals | Build and tend the durable outcomes in his Goals tab; log real progress, close what's resolved |
| device-data | Read *cached* contacts/calendar from Muse storage when the phone is offline — the fallback that keeps "who/when" answerable |
| form-design | Design forms/surveys that ask only what the purpose needs (pairs with the Google Forms connector) |

### 3.3 Research, medical, and knowledge — researcher mode lives here

Researcher mode is **ON** by his standing directive (Nov 4): item-by-item, sources with bibliography status, tier labels ([D]/[H]/[GAP]/[PARTIAL] etc.), six tracks kept separate (vaccines, viruses, diseases, illnesses, sicknesses, infections), 51% bar for medicine/association claims. His personal/family medical material is **filed without interpretation** and routed to Kelsey / his clinician only when he directs it.

| Skill | How Ember uses it for him |
|---|---|
| wide-research | Fan a big research question out across many independent inputs and return one normalized result set |
| ◆ ember_upgrades | Ember's self-upgrade pack: capability registry, evidence ledger, method, PDF-ingestion plan — read before research/manuscript/tooling work so she checks her own filed inventory before claiming anything is missing |
| health-review | Organize *his* health records and recent changes into a clear summary and good questions for a clinician visit — preparation, never interpretation |
| fitness-tracking | Activity, sleep, recovery, and measurements over time against his goals, from comparable device/app data |
| workout-planning | Design/change sessions around his goal, time, equipment — and any clinician restriction on file |
| knowledge-organization | Find, add to, and organize his notes/notebooks/Docs/Drive in the structure he already uses |
| image-search | Find image URLs and source pages for feeds, manuscripts, and visual references |
| live-page-checks | Check a current price/stock/availability from a recent copy of the product page first; live browser only when that fails |
| muse_db | Bounded, read-only SQL inspection of Muse's own records (transcripts, goals, memories, artifacts) for tracing and diagnosis |
| self-awareness | Answer questions about Ember herself from observed files/workspace state, not guesses |
| forget | Remove information he explicitly asks Muse to forget — across memory and its copies |

### 3.4 Documents, manuscripts, and media

| Skill | How Ember uses it for him |
|---|---|
| documents | Read, write, and revise documents/PDFs/decks/spreadsheets with findings tied to source; every commissioned paper ships as a quick draft right away **plus** the completed paper (his standing rule) |
| file-hosting | Put a file where the right people can open it and return a safe link |
| ◆ settled_ruling_guard | Manuscript governance: check his filed section-numbered rulings before any rotation prompt, so settled questions (e.g. the 23F flag) are never re-asked |
| app-creation | Build pages/apps (his booklets, trackers, crew tools) — smallest version that does the job, extended old-with-new |
| media-library | Search his photo library and connected galleries; check opportunistically whenever a photo could ground an answer |
| music-discovery | Find the exact recording (Orbison first in his heart), build/update playlists, start playback on the device he names |
| transcribe-recordings | Transcribe audio/video in bounded chunks and resume without starting over — beside his listen-three-times + 0-1-2 show-notes rule for his own dictation |
| avatar-dance-videos | Generate missing/additional dance videos for Ember's avatar, counts reported honestly |
| share-ideas | Publish a portable Muse Idea only when he explicitly asks |
| smb-product-shots | Product/listing photos of items for sale — items only, never people presented as products |
| style-tryon | Show Douglas wearing a shopped item from his own saved photo, then help him buy his pick if he chooses |

### 3.5 Shopping, travel, places, and home search

| Skill | How Ember uses it for him |
|---|---|
| shopping | Find/compare/evaluate real products with prices and page links; load first for any non-grocery product question |
| groceries | Grocery lists, weekly restocking, and prepared meals via his chosen store/app (Instacart etc.) |
| marketplaces | Buy/sell/value used items (eBay, Marketplace, Craigslist) with fair prices and protected payments |
| place-discovery | Find and compare restaurants, shops, parks, attractions with verified location/hours and a map |
| restaurant-reservations | Find a real available table and book/change/cancel it through its own route |
| event-tickets | Find the right event and seats; compare primary vs resale by delivered total |
| flight-booking | Search connected inventory first, Google Flights when coverage is incomplete; book only on verified total price |
| flight-tracking | Live status for a flight, and monitoring a booked trip for changes worth acting on |
| hotel-booking | Compare stays by full-stay price, location, room, and terms |
| trip-planning | One living itinerary holding flights, stays, transport, dining — ideas, choices, and bookings kept distinct |
| trip-transport | Rental cars, trains, ferries, buses, rides, airport transfers — with the local rules that decide whether a choice works |
| home-search | Housing search from his area/budget/needs, firm requirements separated from preferences |

### 3.6 Money and business

| Skill | How Ember uses it for him |
|---|---|
| financial-planning | Budget, affordability, and debt-repayment work from reconciled spending, balances, and due dates — honest pacing help on a tight budget; a paid upgrade is never offered as "the fix" |
| business-finance | Company books work with currency/period/accounting basis settled first |
| mortgage-comparison | Compare mortgage offers on identical amount/term/rate-type terms; an advertised rate is not a quote |
| advertising-campaigns | Plan Meta/other ad campaigns with destination, budget, schedule, geography settled before any setting |
| store-operations | Run a store's products/inventory/orders/customers with each state read before it's changed |
| subscription-status | His Muse plan, usage %, and reset timing — the before-every-task budget picture (today: Power plan, 62% used / 38% left, reset Sat Nov 14, 11:07 PM CST **[measured Nov 10]**) |

### 3.7 System, box, and Ember herself — the custom core

| Skill | How Ember uses it for him |
|---|---|
| home-control | Control home devices/routines and check camera events — in *his* home, his cameras are his to see; each change confirmed to the requested state |
| custom-connector-setup | Connect a service Muse doesn't bundle, via API/MCP, credential kept in Muse's secure connection flow, never in chat |
| muse-early-access | Questions about / joining / withdrawing from Muse's early-access program |
| muse-feedback | File feedback/feature requests with the Muse team — only on his go-ahead |
| ◆ ember_cli_craft | Ember's own CLI playbook for this box (Nov 8): non-interactive commands, exit-code-first, smallest-useful-output, the Guard before any automation, cheapest lanes first |
| ◆ polyglot_code | Verified language lanes: Python 3.12 primary, Node/Bun, C++ for few-large-file speed only, JavaScript inside Chromium via Playwright/CDP; Rust/Go/Java not installed |
| ◆ checkpointed_background_work | Slice delegated/scheduled work into finishable pieces with named checkpoints, so a stopped run resumes instead of restarting — and is never reported done early |
| ◆ verify_before_claiming_completion | No outside action is "done" without a tool-returned handle **and** a readback — sent/filed/pushed/installed are claimed only in the verified state |
| ◆ recovered-skill-notes | Preserved earlier local learning — compared against current skills before use, never trusted blind |

---

## 4. Connectors — the doors into accounts and services

A connector *doc* existing is not an account connected. Status below: **Connected [inherited status]** = recorded as connected in Ember's working context for this call (not re-verified live in this study) · **No-sign-in utility** = the doc itself says no account/setup is needed · **Doc present** = doc present, status not re-verified in this study — Ember must run that connector's own status check before promising any work through it.

### 4.1 His working core — connected

| Connector | What it reaches |
|---|---|
| gmail | His Gmail — search, read, count, draft; send/reply/forward only with approval |
| google_calendar | His Google calendars — events, free/busy, Meet links, guest notifications handled correctly |
| google_contacts | His Google address book — search, create, edit, delete (deletes need his say-so) |
| google_docs | His Google Docs — read, create, edit; manuscripts/notes he keeps as Docs |
| google_drive | His Google Drive files — find, upload, download, organize, share |
| google_forms | Create/edit Forms, publish, read responses mapped to the right questions |
| google_sheets | His spreadsheets — cells, formulas, tabs, formatting preserved |
| google_slides | His presentations — read/edit, or receive a finished deck |
| google_tasks | His Google Tasks lists — due dates, subtasks, ordering, completion |
| messenger_read | His personal Facebook Messenger — read/search/send, call history, reactions; the Rabbit (Snowball, Meta AI) lives here, reached **only** through Messenger, in the same pinned chat, combined batched sends |
| facebook_cli | His Facebook — friends, profiles, timelines, posts, groups, events, saved items, Pages, Marketplace |
| instagram | His Instagram — profiles, posts, comments, stories, feeds, saved items, publishing |
| instagram_messages | His Instagram DMs and message requests |
| github | His GitHub — repos, files, issues, PRs via the official MCP server; **mission-critical** in his framing: GitHub-first file movement, everything shareable saved there automatically, with the standing exclusions (no Cara material, no full lab PDFs with DOB/MRN, no passwords/codes/IDs) |
| spotify (+ ◆ custom.spotify amendment for playback activation) | Search/play Spotify, library, playlists, playback — including his Orbison; voice playback follows the connector's Voice section exactly |
| muse_mail | **Ember's own** mailbox (purple-rat@muse.ai) — hourly-monitored; never confused with his Gmail |
| ◆ custom.google-gemini | Google Gemini through its registered API — a free external lane: stateless between calls, carries standing instructions in-prompt when used |

### 4.2 No-sign-in / built-in utilities (usable without connecting an account)

| Connector | What it reaches |
|---|---|
| places | Physical places/businesses — addresses, hours, ratings, reviews, photos; identify a place from photos |
| meta_catalog_search | Meta's product catalog across merchants — prices, images, variants, checkout eligibility |
| flightaware | Flight schedules, live status, positions, tracks, airport activity — no account to connect |
| ticketmaster | Events, seats, prices, checkout link — doc states it searches/reads and **cannot buy**; purchase continues in the browser |
| onepassword | Choose saved logins from his 1Password to sign in in the Muse browser — credentials through the vault flow only, never through chat |
| tailscale | Join this VM to his Tailscale/Headscale network and reach private TCP services through the built-in proxy |

### 4.3 Doc present — status not re-verified in this study (58)

Each of these has a full `CONNECTOR.md` at `/opt/hatch/connectors/<name>/` and a CLI in `/opt/hatch/bin`. Ember's rule: read the doc, run its status check, and only then promise the outcome; if it isn't connected, share the connect link and stop there.

- **Mail/calendar/contacts alternatives:** imap_email, outlook_mail, outlook_calendar, outlook_contacts
- **Notes & files:** box, dropbox, evernote, notion, readwise_mcp
- **Work & projects:** asana, linear, todoist, slack, zoom, granola (meeting notes/transcripts), calendly, zapier (one hub connection can reach many apps with no connector of their own)
- **Google/Android & Apple health:** google_health_connect (his Android Health Connect data), apple_healthkit (iPhone-synced Health), function_health, healthex, withings, peloton
- **Money & business:** plaid (linked bank/card/investment accounts), stripe, stripe-link (Link wallet), shop-pay (Shop Pay wallet), quickbooks, moneyforward_me
- **Commerce & stores:** shopify, shopify-ucp, instacart, printify, gumroad_mcp, shopback_mcp, kavak (used cars)
- **Travel & food:** duffel (flights + pay-at-pickup rental cars through a direct API), agoda, expedia, despegar, opentable, grab_mcp, rappi_mcp, uber_courier
- **Social & ads:** meta_ads (Meta Business Manager), threads, threads_messages
- **Media & creation:** canva, figma, runway_mcp, vidiq_mcp
- **Home & devices:** philips_hue, tessie (Tesla via Tessie)
- **Build/deploy:** lovable, replit, vercel
- **Marketing/CRM:** ghl (HighLevel), klaviyo

Count check: §4.1 holds 16 system connectors marked connected + the 2 custom connectors (18 entries in total); §4.2 holds 6 system no-sign-in utilities; §4.3 holds the remaining 58 system connectors. 16 + 6 + 58 = **80 system**, + 2 custom = **82 connectors**. Several entries (e.g. `grab_mcp`, `readwise_mcp`) are MCP-backed connectors — same rule applies: doc first, status check before promises.

---

## 5. Box tools — the Ubuntu workshop [measured Nov 10, fresh `check-tools.sh` run]

Box facts: Ubuntu **24.04.5 LTS**; this morning's 22-package update landed clean (Guard-checked, snapshot first, 0 upgradable after). Ember's standing capability rule — born Nov 9 after ripgrep/fd were missed — is built into this table: absence is claimed only after checking executable names *including Debian renames*, dpkg packages, Python modules, **and** her own venvs, and after reading her filed inventory first. `check-tools.sh` does all of that in one run.

| Tool | Status | What it is on this box |
|---|---|---|
| ripgrep | **PRESENT** — `rg` /usr/bin/rg, pkg 14.1.0 | Fast text search across files and manuscripts — the first tool reached for |
| fd | **PRESENT** — `fdfind` /usr/bin/fdfind, pkg fd-find 9.0.0 | Fast file finding (Debian renames the binary; product name alone misses it) |
| LibreOffice | **PRESENT** — `soffice`, headless nogui build | Convert/produce office documents headlessly |
| poppler | **PRESENT** — `pdftotext`, `pdfinfo` | PDF text extraction and metadata — first lane of PDF-as-data |
| ffmpeg | **PRESENT** — ffmpeg/ffprobe 7:8.1.2 (+hatch build) | Audio/video probing, conversion, screenshots of the desktop lane |
| jq | **PRESENT** — 1.7.1 | JSON shaping — connector and API output stays small and exact |
| git | **PRESENT** — 2.43.0 | Version control; the git-automation clone + sync-push lane to GitHub |
| node | **PRESENT** — v24.22.1 | JavaScript lane; see the full-features lane below |
| python3 | **PRESENT** — 3.12.3 + venvs | Primary code lane; stdlib backend tools (cached fetch, Index, viewers) |
| sqlite3 | **PRESENT** — CLI 3.45.1-1ubuntu2.9 | **The native data environment** (his Nov 10 order): local data work defaults to SQLite in every lane — system Python 3.45.1 and Node's built-in `node:sqlite` (SQLite 3.53.4, FTS5, JSON, WAL, RTREE — all verified live Nov 10). The Full Cache and Summary Cache both live in SQLite |
| pandoc | **PRESENT** — via pypandoc in `pandoc-venv` | Document conversion in the venv lane (not a system exe — the three-angle check is what finds it) |
| docling | **PRESENT** — exe+module in `docling-venv` | Structured PDF/document ingestion when a paper needs more than raw text |
| whisper (faster-whisper) | **PRESENT** — module in `faster-whisper-venv` | Local transcription lane for recordings |
| yt-dlp | **PRESENT** — exe+module in `yt-dlp-venv` | Media download/metadata from video sites when a task needs it |
| markitdown | **PRESENT** — exe+module in `markitdown-venv` | Convert assorted files to clean markdown |
| searxng | **PRESENT** — module in `searxng-venv` | Self-hosted metasearch lane; installed venv-only, tuned, and *stopped to save RAM* — started on demand, not left running |
| whoogle | **PRESENT** — exe in `whoogle-venv` | Private Google-results front-end lane, venv-only |
| imagemagick | **ABSENT** — exe, package, module all empty | Image conversion/compositing has no system tool; work goes through Python/ffmpeg lanes instead |
| tesseract | **ABSENT** — exe, package, module all empty | No system OCR engine. (An `ocr-venv` exists among the Python venvs; this study does **not** claim a working OCR tool from that alone — unverified is unverified) |
| fzf | **ABSENT** | No fuzzy finder; `rg`/`fdfind` cover the need |
| bat | **ABSENT** | No `bat`/`batcat`; plain readers cover it |
| rclone | **ABSENT** | No rclone sync; file movement is GitHub-first per his standing order |
| meilisearch, valkey/redis, zstd exe, shellcheck, miller, csvkit | **ABSENT** (also in today's run) | Named so nobody — including Ember — promises them later from memory |

**Full-features Node lane [measured Nov 10]:** Node 24 runs `node:sqlite` and TypeScript type-stripping with **no flags**. For the features that still need flags, Ember's lane is `~/workspace/ember-upgrades/node-ember.sh` (adds transform-types, vm-modules, eventsource, import-meta-resolve) — tested working, and the undo for the whole convention is simply to stop using the wrapper.

**Damage-capable territory — learned ABOUT only (five-flag rule):** anything that could damage the VM installation, the desktop server unit, or the virtual box unit (package purges, disk/user/power operations, sshd config, heavy system reconfiguration) is flagged and never adjusted with by any automatic process. The Guard's denylist check (`guard/check-command.sh`) mechanically refuses destructive command lines in automated runs; Douglas's own explicit, specific, in-the-moment order naming the exact action is the only override.

---

## 6. How the inside and outside halves work together

The pattern repeats everywhere: **the phone supplies the moment, the box supplies the memory and the work, a connector supplies the account, and a skill supplies the discipline.**

1. **Today's Grandma visit (Tue Nov 10, 11:00 AM).** Outside: the meeting sits in his calendar (device calendar + Google Calendar), Ember's morning synopsis flags it first, and the standing plan is on file — arrive ~10:30–quarter to 11, *call her before leaving*. Inside: wake alarms at 8:00 / 8:30 / 9:00 (`alarm.set`), a leave-by reminder (`reminder.set`), a tap-to-call (`phone.dial` / contacts), and a geofence can mark arrival. In her house: **magical rat listening mode** — not a tool, a conduct: call stays open, Ember silent on voice and answering in text, mic hot. Four layers, one visit.
2. **Research that becomes a book.** Outside: wide-research + ember_upgrades method, search lanes in his taught order (memory/connector first, simple searches first, wildcard **and** non-wildcard pairs, cheapest lane first, Rabbit last but apprised), results landing in the **Full Cache** (complete originals, always the default serve) with the **Summary Cache** as finding-aid only (TOC + bibliography + Ember's labeled recommendations). Inside: nothing — and that's the point. The phone stays his reading surface while the box and GitHub (github connector, GitHub-first) hold the work, so a VM replacement loses nothing.
3. **A lab result or a clinic visit.** Inside: `health.backfill` + the Health Connect connector bring his data into reach. Outside: health-review organizes it into a visit summary and questions; his personal material is filed **without interpretation** and goes to Kelsey or his surgeon only when he directs it. The sparring/researcher boundary is a skill-level rule, not a button — which is why it holds even where the tools could do more.
4. **Music while he works.** Inside: nothing to set. Outside: spotify connector + music-discovery skill find the *exact* Orbison recording (not a cover), start it on the device he names, in Ember's own voice for the voice note that announces it.
5. **Saving his usage.** subscription-status gives the before picture (62% used today); cost-saving routing (free Gemini/Gemma lanes first, local tools before cloud browser, combined Messenger sends under Meta's 20-actions/hour server cap) stretches the week to the Saturday reset. The watch warns and paces — it never hard-stops, and Ember says so plainly.

---

## 7. Honest gaps — what Ember cannot do, stated before anyone has to find out

| Gap | The honest shape of it |
|---|---|
| No camera capture on the phone channel | The *camera permission* is granted, but **no capture command exists** among the 44. Photos are his hands on the shutter; Ember works with photos after they exist (media-library skill) |
| No opening other apps on the phone | No command opens/launches arbitrary apps; Ember's channel is the 44 commands, full stop **[atlas Nov 9]** |
| No phone shell / ADB / terminal | Ember cannot run a command *on* the phone, read its filesystem, or change Settings (including accessibility toggles — documented as information only in the atlas) |
| No volume or mic switch on Ember's side | Hybrid/listening mode works by two halves: her conduct (text-only) + his hand on volume. The mic is never muted by her — his rule: "keep the mic hot and live forever," carried by her conduct |
| Ember cannot start a voice call | A voice conversation doesn't dial a number; Douglas taps the phone button in chat. Once live, Ember can end it — and won't, unless he asks in that moment |
| imagemagick & tesseract absent as system tools | ImageMagick work routes through ffmpeg/Python; OCR has no verified system lane (§5) — a job needing real OCR must be set up first, with his go, snapshot, and undo recorded |
| Several present tools are venv-only | SearXNG/Whoogle/pandoc/docling etc. live in `~/workspace/ember-upgrades/*-venv`, **not** on the system PATH — a system-only probe reads them as missing, which is exactly the Nov 9 mistake `check-tools.sh` exists to prevent |
| Connector docs ≠ connected accounts | 58 connectors in §4.3 are docs and CLIs, not live accounts. Any of them needs a status check — and possibly a connect flow through the secure page — before Ember promises its outcome |
| Stateless free lanes don't remember | Gemini/Gemma carry standing instructions in-prompt per call; the Rabbit remembers only through the Messenger thread + what Ember files to GitHub/the swap space as her bridge |
| Memory on the box is tight | ~8 GB total; readings through Nov 9–10 swung between roughly 0.4–1.4 GB available with swap about half used. SearXNG stays stopped to save RAM; big builds get a budget flag first |
| Nested virtualization is OFF | No vmx/svm, no `/dev/kvm` — VirtualBox-class software cannot run *inside* this guest **[atlas-era VM checks, Nov 8–9]**. Host-side only; notes to the platform team were sent Nov 8–9, no reply channel exists |
| The Guard has no exceptions for Ember | Destructive automation is refused mechanically. "Probably what he wanted" is never an override — only his explicit, specific, in-the-moment order is |

---

## 8. Ember's own addition — her top recommendations (labeled hers, mechanical judgment, for Douglas to judge)

*His standing rule for every deliverable: one extra thing of Ember's own judgment, clearly labeled as hers. This is that thing.*

1. **Use the geofence + reminder pair for every appointment trip, starting today.** The commands exist, the `location_always` grant exists, and the failure they prevent (leaving late, arriving unannounced) is the one his mornings actually face. One standing pattern — leave-by reminder + call-before-leaving + arrival geofence — covers Grandma visits, OakLeaf, and Mayo alike.
2. **device-data as the quiet backup brain.** The cached contacts/calendar copy means a dead or offline phone never makes "what's Grandma's number / when is Wogahn" unanswerable. It costs nothing and is already there; it deserves to be checked *first* whenever the live phone read fails, instead of after.
3. **Local transcription first for his dictation archive.** faster-whisper is installed in its venv and his backlog is full of voice material. Cheapest-lane-first says: local chunks with the transcribe-recordings skill's resume discipline, cloud only where accuracy demands it — with his listen-three-times / 0-1-2 rules on top for anything that becomes record.
4. **health-review + Health Connect, prepared *before* each clinician visit — not after.** The Brent Wogahn consultation (Nov 11) and the tests ordered at Mayo are exactly the shape this skill exists for: records organized, questions ready, nothing interpreted. Prepared early, it also keeps his own theories and his clinician's lane cleanly separate, which is his boundary and hers.
5. **knowledge-organization over the manuscript sprawl.** 79 Gemini chats, ~55 side chats, Drive, Docs, and the workspace all hold pieces of *The Mycelial Transposition* and its sisters. A single indexed pass — booklet index kept live, as he has already ordered — would pay back more than any new tool: the knowledge exists; findability is the gap.
6. **live-page-checks before any supplement or product buy.** One cheap page-copy check has repeatedly been the difference between a real price and a stale search snippet, on a budget where that difference matters.

---

## Sources read for this study (local only, Nov 10, 2026)

- `~/workspace/deep-learn-2026-11-10/` — system-skills.txt (57), custom-skills.txt (7), system-connectors.txt (80), custom-connectors.txt (2)
- `/opt/muse/skills/*/SKILL.md` (57) — name + descriptor/first sections skimmed for every skill
- `~/workspace/custom-skills/*/SKILL.md` (7) — read in full: checkpointed_background_work, ember_cli_craft, ember_upgrades, polyglot_code, recovered-skill-notes, settled_ruling_guard, verify_before_claiming_completion
- `/opt/hatch/connectors/*/CONNECTOR.md` (80) + `~/workspace/custom-connectors/*/CONNECTOR.md` (2) — name + description lines skimmed for all
- `~/workspace/ember-upgrades/check-tools.sh` — run fresh Nov 10, 2026 (§5 table is its output, condensed)
- `~/workspace/your_files/Android and Pixel 7 Pro — Functionality Atlas for Doug (2026-11-09).md` (45K) — built on, not redone: AOSP/Google/server/AI layers, accessibility (§5 of the atlas), TTY/RTT and TTL kept as separate tracks, capability-vs-command table (§7.1 of the atlas), and its named gaps (§7.3)
- `~/workspace/ember-upgrades/node-ember.sh` — read for the full-features Node lane (§5)
- Working context carried from the parent call for: the 44-command list and granted permissions (§2), this morning's measured readings (battery, Muse app version, usage %), and connector connected-status markings (§4.1, labeled [inherited status] throughout)

*Filed Nov 10, 2026. Old-with-new: this study sits beside the Nov 9 atlas and the Nov 8–10 tool inventories, and replaces none of them.*

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
