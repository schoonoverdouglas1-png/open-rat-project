# Tools and Commands Audit — 2026-11-09

Full self-audit ordered by Captain Douglas, Nov 9, 2026 ~10:25 PM CST: assess ALL tools and commands Ember has, cheapest lane first (local shell only; no browser, no paid services, no servers started, --help reads only).

**Method:** `check-tools.sh` four-angle check (executables incl. renames, dpkg packages, system Python modules, Ember's own venvs/tools-bin) + `--help` sweep of every binary in `/opt/hatch/bin` (top-level command groups only; no action commands run) + directory inventory of custom connectors/skills and venv lanes.

**Headline numbers:**
- `/opt/hatch/bin`: **117 executable files** (100 connector/service CLIs + 17 hatch-internal; one further directory entry). **89 publish a command list** in `--help`; **~778 top-level command entries** counted across them (includes the shared connector boilerplate — status / authorize-url / exchange-code / refresh / disconnect / list-tools / call-tool — repeated per connector, and a few multi-word parses from prose-style help).
- System tools: **19 PRESENT, 9 ABSENT** on the checker's board (details below).
- Venv lanes: **8** under `~/workspace/ember-upgrades/`.
- Custom: **7 custom skills, 2 custom connectors**.
- Device surface (Pixel 7 Pro): **44 commands**, no camera/video command.

---

## 1. System tools (check-tools.sh, four angles, Nov 9 2026)

### PRESENT
| Tool | Evidence | Version |
|---|---|---|
| ripgrep | exe `rg` /usr/bin/rg | 14.1.0 |
| fd | exe `fdfind` /usr/bin/fdfind (Debian rename) | 9.0.0 |
| LibreOffice | exe `soffice`, `libreoffice` (headless nogui) | 24.2.7 |
| Poppler | exe `pdftotext`, `pdfinfo` | 24.02.0 |
| ffmpeg | exe `ffmpeg`, `ffprobe` | 8.1.2 (+hatch3) |
| pandoc | venv (pypandoc, pandoc-venv) | 3.9 |
| yt-dlp | venv yt-dlp-venv | 2026.10.26 |
| faster-whisper | venv faster-whisper-venv (module) | 1.2.1 |
| MarkItDown | venv markitdown-venv | 0.1.9 |
| Docling | venv docling-venv | 2.149.0 |
| SearXNG | venv searxng-venv (module `searx`) | 1.0.0 |
| Whoogle | venv-exe `whoogle-search`, whoogle-venv | 1.2.4 |
| sqlite3 | /usr/bin/sqlite3 + pymod | 3.45.1 |
| jq | /usr/bin/jq | 1.7.1 |
| git | /usr/bin/git | 2.43.0 |
| node | /usr/bin/node | 24.22.1 |
| python3 | /usr/bin/python3 + all venvs | 3.12.3 |

### ABSENT (verified all four angles empty)
imagemagick (`magick`/`convert`), tesseract (binary + pkg + pytesseract), meilisearch, valkey (and redis-server), zstd, fzf, bat, shellcheck, rclone, miller (`mlr`), csvkit.

---

## 2. Connector CLIs in /opt/hatch/bin — command groups

Boilerplate note: most service connectors share `status, authorize-url, exchange-code, refresh, disconnect, list-tools, call-tool` (auth + generic MCP passthrough). Only the distinctive groups are expanded below; every CLI listed was `--help`-read.

**Messaging / social**
- `facebook-cli` — Facebook: me, post, pages, link-sharing, profile, timeline, story, marketplace, groups, feed, events, saved
- `hatch_messenger_cli` — Messenger: check, threads, messages, search, sync, marketplace, participants, send, react, unsend, edit, thread-create, call-logs, contacts, connect/disconnect/repair
- `hatch_igd_cli` — Instagram DMs: check, threads, search, sync
- `instagram-cli`, `instagram-messages-cli` — Instagram (args-passthrough style help)
- `threads-cli` — Threads: accounts, profile, activity-feed, post, search, feed, trends, insights, followers/following, hide-reply, pending-replies…
- `threads-messages-cli` — Threads DMs: connect-url, inbox, thread, send
- `slack` — Slack (boilerplate passthrough)
- `native-comms-cli` — contacts, messages, threads
- `imap-email` — full IMAP mail: folders, list, search, get, attachment, send, reply(-all), forward, drafts CRUD, mark/flag/move/copy/archive/trash
- `muse-mail` — Muse Mail: mailbox, messages, attachments, threads, owners
- `outlook-mail` / `outlook-calendar` / `outlook-contacts` — Outlook suite (list/get/search/send/reply…, CRUD)

**Google workspace bridge**
- `hatch_gws_cli` — Google Workspace CLI (args passthrough; backs Gmail/Calendar/Drive/Docs/Sheets/Slides/Contacts/Tasks/Forms connectors)
- `hatch_gws_auth` — authorize-url

**Code / dev / hosting**
- `github` — status, accounts, list-tools, call-read-tool, call-tool, **push-files**
- `vercel`, `replit`, `linear`, `lovable` — boilerplate passthrough
- `tailscale` — up, down, status, ip (VM-side agent CLI)

**Files / notes / knowledge**
- `box-cli` — Box: download, upload, upload-version, update/delete/restore file+folder, list-trash
- `dropbox` — passthrough + create-file
- `evernote`, `notion-cli`, `readwise-mcp` — passthrough
- `granola-cli` — meeting notes passthrough
- `media-library` — stats, search, scan, get, recent
- `device-data` — contacts, calendar (cached device data)

**Travel / booking / local**
- `duffel` — flights: search, seat-options, validate-booking, book, booking-status, cancellation-quote, cancel-booking; cars: places, car-booking-status, car-cancel
- `flightaware` — 36 groups: flight, position, track, route, map, search(-positions/-count/-advanced), foresight, airports, airport-*, operators, operator-*, history, aircraft, schedules, disruptions
- `expedia` — search, property-details, quote, validate-booking, book, booking-status, profile
- `agoda` — search; `despegar` — options-style (no command list)
- `opentable` — 19 groups: lookup-rid, availability, search-availability, experiences, quotes, book/modify/cancel/recover-reservation, policies
- `calendly` — me, list-events, event-types, request
- `places` — details, detect; `geocode` — forward, reverse
- `ticketmaster` — search-events, event-details, top-picks, seat-view-carousel
- `kavak` — used-car inventory search/get, policies, hubs

**Shopping / commerce / money**
- `shopping` — product-details; `meta-catalog-search` — Meta catalog (options-style)
- `instacart` — search-products, cart-snapshot, add-to-cart, cart
- `etsy-cli` — me, shop, listings, listing, inventory, receipts, request
- `shopify` — passthrough; `shopify-ucp-cli` — checkout, order, cart; `shop-wallet-cli` — Shop Pay (args passthrough); `save-to-spotify` — see Music
- `printify` — shops, products CRUD, publish, orders, uploads, blueprints, providers, variants, shipping
- `gumroad-mcp`, `shopback-mcp`, `rappi-mcp` — passthrough
- `plaid` — accounts, transactions-get/sync/recurring, investments-holdings/transactions, liabilities
- `stripe` — passthrough; `stripe-link` — Link payments (args passthrough)
- `quickbooks`, `moneyforward-me`, `klaviyo` — passthrough (klaviyo adds account-details, list-campaigns/flows/metrics)
- `meta-ads-cli` — Meta Ads: manage-consent, estimate-budget, render-campaign-summary/success, render-chart, creative, describe-tool
- `zapier` — passthrough

**Health / fitness**
- `health-cli` — query, delete, status, auth, nutrition
- `healthkit-cli` — Apple HealthKit: status, list-fields, query
- `nutrition-cli` — 24 groups: food CRUD, food-search, barcode-decode, meal-photo groups, queue, targets
- `function-health`, `healthex` — labs/health records (healthex adds mcp-list/mcp-call)
- `peloton` — ride-archived/live, search-class, schedule/reschedule/delete events, deeplink
- `withings` — measures, activity, sleep(-summary), workouts, intraday, heart-list/get, devices, list-fields, query

**Media / creation**
- `media-generation`, `avatar-media-generation` — image/avatar generation (query-style)
- `image-search`, `web-search`, `local-search` — search lanes (query-style)
- `canva` — upload-file, search-designs, get-design-pages
- `figma` — passthrough; `runway-mcp`, `vidiq-mcp` — passthrough
- `tts` — speak, synthesize-script
- `spotify-api` — 23 groups: search, library, experience, save, collections CRUD, play/pause/resume/skip/previous/seek, set-volume, transfer, now-playing, devices, queue
- `save-to-spotify` — STS args passthrough
- `genui-display-render`, `wearables-display`, `pickup-briefing-animation` — render helpers (request-file style)

**Home / devices / misc**
- `philips-hue` — link-bridge, list-lights/rooms/zones/scenes/devices/sensors/buttons, light, group, scene
- `tessie-api` — Tesla via Tessie: vehicles, status, state, command, request, set-token
- `onepassword` — status, authorize-url, disconnect
- `aftership` — status, detect-courier, tracking, register
- `asana`, `todoist`, `ghl` (GoHighLevel; adds list-operations, execute-operation), `zoom` (adds describe-tool) — passthrough
- `feature-request` — draft, file, prepare-delete, delete, list, show, check (the lane used for the VM-resources + virtualization feedback filings)
- `subscription-status` — status, plans, overview
- `share` — remove, share-space, unshare-space, fetch-space-url, export-html
- `edits` — open, status, reorder, close (artifact edit sessions)
- `remote-storage`**
...[truncated 4477 chars]