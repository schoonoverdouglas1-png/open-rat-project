# Google Tools — Ember Learning Inventory (2026-11-12)

Built at Douglas Roy Schoonover's direct order, Nov 12, 2026 (~12:07 PM CST, voice call): *"learn how to use all the Google tools and all the ways you're able to."*
Built under his standing learn-the-tool rule (Nov 11, 2026): learn a tool better than the tool knows itself before first use — docs read whole, real executable names probed, sandbox/read-only probes first, failure modes and undo paths recorded.

**Scope of this build (Ember's line, kept beside his order): READ-ONLY learning only.** No send, publish, share, delete, new sign-in, or account change was made in any of Douglas's Google accounts. Every live probe below was a `status`, `accounts`, `--help`, `schema`, or `models` call.

**Provenance tags on every claim:** `[doc]` = the connector's CONNECTOR.md, read whole on 2026-11-12 · `[help]` = live `--help` output, 2026-11-12 · `[live]` = a live status/help probe run 2026-11-12 (~12:08–12:15 PM CST) · `[record]` = Douglas's filed record / MEMORY · `[GAP]` = a probe that could not be run from this lane.

---

## 0. The one real executable behind nine connectors

- All nine Google Workspace connectors run through **one binary**: `/opt/hatch/bin/hatch_gws_cli` — a thin passthrough that forwards everything to the vendored `gws` binary. [help] Its own `--help` says exactly that; the pinned name in error text is `hatch_gws_cli` for the wrapper and `gws` inside resource help.
- Invocation shape: `hatch_gws_cli <service> <resource> <method> --params '<JSON>' --json '<JSON>'`. Query/path values go in `--params`; request bodies in `--json`. [doc, all nine]
- **Method discovery (the master key):** `hatch_gws_cli schema <service>.<resource>.<method>` — e.g. `schema gmail.users.messages.list` returned the method's description, HTTP method, and full parameter list live today. [live] Resource help works too: `hatch_gws_cli gmail users --help`, `calendar events --help`, etc. all returned their method lists today. [live]
- Shortcuts start with `+` where a connector provides them (`+triage`, `+agenda`, `+read`, `+append`, `+write`, `+upload`, `+insert`, `+send` family in Gmail) and are the preferred form. [doc]
- Authentication runs ONLY through each service's `status` / `disconnect` commands. Never write credential files, never run raw `gws auth`. The OAuth helper is `/opt/hatch/bin/hatch_gws_auth <PROVIDER> <COMMAND>` (only `authorize-url` exposed). [doc + help]
- **Services `gws` itself knows** (from its own validation error, live today): drive, sheets, gmail, calendar, admin-reports, reports, docs, slides, tasks, people, chat, classroom, forms, keep, meet, events, modelarmor, workflow, wf, script — plus `<api>:<version>` syntax for unlisted APIs. [live] **That means Chat, Classroom, Keep, Meet, and Script are reachable `gws` services with NO Muse connector doc** — untested, undocumented lanes. **[GAP]** No probe beyond the service list was run on them; they are not to be used until learned the same way as this file, per Douglas's learn-first rule.
- Rate-limit law, every connector: a result with `kind: connector_rate_limited` and `terminal_for_attempt: true` is a hard stop for that provider in this attempt — report partial progress, do not retry, sleep-wait, delegate around it, or switch lanes to evade it. [doc]

## 1. TODAY'S STATUS — all nine, live

Command run for each: `/opt/hatch/bin/hatch_gws_cli <service> status` [live, 2026-11-12]

| Connector | `gws` service name | Today's status |
|---|---|---|
| Gmail | `gmail` | **connected** |
| Google Calendar | `calendar` | **connected** |
| Google Drive | `drive` | **connected** |
| Google Docs | `docs` | **connected** |
| Google Sheets | `sheets` | **connected** |
| Google Slides | `slides` | **connected** |
| Google Forms | `forms` | **connected** |
| Google Contacts | `people` | **connected** |
| Google Tasks | `tasks` | **connected** |

**The old conflict, NOT resolved by assumption — resolved by today's live check, old-with-new:** the record holds (a) Nov 3, 2026: all nine connected [record]; (b) Nov 4–5, 2026: eight connected, **Gmail `not_connected`** while its account name still listed [record]. Today's `status` calls return `connected` for all nine, Gmail included — so the current state matches the Nov 3 reading, and the Nov 4–5 Gmail drop stands in the record as a past outage, not the present state. The account behind Gmail and Calendar `accounts` calls today is the same single linked account, `schoonoverdouglas1@gmail.com`. [live]

---

## 2. Gmail (`gmail`)

- **What it does:** Douglas's own Google mailbox — search, read, count, draft, send/reply/forward (gated, see below), label, archive, trash, one-click unsubscribe. Muse Mail (Ember's own mailbox) is a SEPARATE connector, never to be confused with this one. [doc]
- **Exact operations:** `+triage --query '<Gmail query>' --max N --format json` (search/list; no `+search` exists) · `+read --id <id> --headers --format json` · raw: `users messages list/get`, `users threads get`, `users labels list/get/create`, `users messages modify/batchModify`, `users drafts update/send`, `users messages attachments get` — all with `--params '{"userId":"me",...}'`. `accounts` picks among linked mailboxes; keep one `--account <id>` across a whole thread of work. [doc + help + live: `gmail users --help` lists getProfile, drafts, history, labels, messages, threads resources]
- **Verified today:** `status` = connected; `accounts` returned the one linked account; `schema gmail.users.messages.list` and `gmail +triage --help` both answered. [live]
- **Limits / failure modes:** per-account request-unit budget — run commands one at a time; `+triage` costs up to 5+20N units, `+read` 20, a new `+send` 101, `+draft` ~11. `resultSizeEstimate` is an estimate only — count distinct `threadId`s. Permanent deletion is UNAVAILABLE (trash instead); creating/editing filters and all Gmail settings (vacation, forwarding, IMAP/POP, delegates, send-as) are unavailable. Drafts are hidden from search while his Access-drafts permission is ask/deny. [doc] Record failure mode: the Nov 4–5 `not_connected` drop above — when a command reports a missing/invalid connection, re-run `status` and follow its connect flow, in plain words. [record + doc]
- **Undo:** archive is reversible (mail stays in All Mail); trash is reversible via `users messages untrash`; labels can be removed with `modify`. A sent email has NO undo — which is why sends need his exact go-ahead in chat plus the approval card, every time. [doc]
- **Lane note:** Gmail is Douglas's clinician-notice lane (Mayo result notices land here) — fail-safe tier, never throttled. [record]

## 3. Google Calendar (`calendar`)

- **What it does:** read the agenda across all visible calendars, look up calendars/events/free-busy, create/change/delete events with guest notification and Google Meet links. [doc]
- **Exact operations:** `+agenda --today|--tomorrow|--week|--days N [--calendar '<name-or-id>'] [--timezone <IANA>] --format json` (max 50 events per calendar) · `calendarList list` · `events list/get/insert/patch/delete/instances` · `freebusy query`. Simple create shortcut: `+insert --summary --start --end [--calendar] [--meet]`. [doc + help: `calendar events --help` live today]
- **Verified today:** `status` = connected; `accounts` returned `schoonoverdouglas1@gmail.com`; resource help answered. [live]
- **Limits / failure modes:** timed events need RFC3339 with offset; all-day events use dates with an EXCLUSIVE end and never mix the two. `events patch` replaces any array whole — read first, send the complete guest list. `freebusy query` is refused while his Access-events permission is ask/deny (use `events list`). Guest-notifying writes and whole-calendar create/delete/clear need confirmation first; delete raises no approval card by default, so Ember's chat confirmation is the only check before guests get a cancellation. Per-minute quota; rate-limit result is a hard stop. [doc]
- **Undo:** patch an event back, or delete a created event (with `sendUpdates:"all"` so guests hear of it). A sent cancellation/invitation cannot be unsent — confirmation before writing is the real undo path. After any write, read the event back; if uncertain, read before retrying so no duplicate is created. [doc]

## 4. Google Drive (`drive`)

- **What it does:** the file store — find, read metadata, download stored binaries, upload/replace, create/copy/move/rename, share, trash/restore/delete. Contents of Google-native files belong to the Docs/Sheets/Slides connectors, NEVER to `drive files export`. [doc]
- **Exact operations:** `files list --params '{"q":"name contains '\''x'\'' and trashed=false","pageSize":20}'` · `files get` (ask for `id,name,mimeType,parents,webViewLink,modifiedTime,owners`) · `files get --params '{"alt":"media"}' --output PATH` (stored binaries only) · `+upload PATH [--parent ID] [--name NAME]` (path must be absolute, inside home; relative and `/tmp` fail) · `files update --upload PATH` (replace content, keep ID) · `files create/copy` · `permissions create` (`reader` default, `writer` only when Douglas asks). [doc + help: `drive files --help` live today]
- **Verified today:** `status` = connected; resource help answered. [live]
- **Limits / failure modes:** Drive holds ONE connected account — `drive accounts` and `--account` do not exist; if Douglas names another Drive, say so instead of guessing. NEVER upload into a Google Sheet via Drive (Google replaces the whole file and discards other tabs). A new file in a shared folder may be visible to others — `ignoreDefaultVisibility: true` opts out of domain defaults but parent sharing still applies. Comments, shared drives, approval requests: no tested flow — check schema, treat as shared, confirm first. [doc]
- **Undo:** trash → restore with `{"trashed":false}` is the standing undo; `files delete` is PERMANENT (folders take their contents with them) — only on Douglas's clear, specific yes, with the consequence said plainly first. Moves are undone by moving back from the parent recorded in the pre-move `files get`. [doc]

## 5. Google Docs (`docs`)

- **What it does:** read and edit Douglas's documents, including the notes/notebooks he keeps as Docs — Ember's manuscript lane. Find a Doc via Drive search; its Drive file ID IS the `documentId`. [doc]
- **Exact operations:** `documents get --params '{"documentId":"<id>"}'` (always read before editing) · `documents batchUpdate` for targeted edits · `+write --document <id> --text '...'` appends plain text only · `documents create --json '{"title":"..."}'`. [doc + help live today]
- **The whole-document rule (a failure mode learned by the platform, filed in the doc):** NEVER compose/rewrite a whole body through `batchUpdate` inserts or `+write` — plain inserts arrive unformatted. Build a styled `.docx` artifact first, create the empty Doc, then fill it through `drive files update --upload <absolute .docx path>` (Drive converts in place), then read back with `documents get` and check the styling landed. [doc]
- **Verified today:** `status` = connected. [live]
- **Limits / undo:** re-uploading a revision replaces the WHOLE body and discards edits made in Google since — read the live copy first; if it changed, say so and wait for his yes. Targeted `batchUpdate` edits are undone by a reversing `batchUpdate`. Confirm before editing a shared document. [doc]

## 6. Google Sheets (`sheets`)

- **What it does:** create/read/edit spreadsheets — cells, formulas, tabs, formatting — while preserving the rest of the workbook. Douglas's serotype/GAP-table lane. [doc + record]
- **Exact operations:** `spreadsheets get` (structure; add `ranges` + `fields` mask to verify values/formatting) · `spreadsheets values get --params '{"range":"Sheet1!A1:D10"}'` · `+read --spreadsheet <id> --range '<A1>'` · `values append/update` · `+append --spreadsheet <id> --values 'a,b,c'` (first visible tab only, always parses input) · `spreadsheets create` · `spreadsheets batchUpdate` (styling, addSheet, freeze, column widths in ONE call). `valueInputOption`: `USER_ENTERED` to parse dates/currency/formulas, `RAW` when the strings are data. [doc + help live today]
- **Verified today:** `status` = connected; resource help answered. [live]
- **Limits / undo:** a successful write proves only that the API accepted it — read back, formulas included, before calling it ready. NEVER `drive files update` an `.xlsx` over a Sheet (destroys other tabs and edits). Undo = write the prior values back from the pre-write read; keep the spreadsheet/tab IDs from the read that found them. Confirm before editing a shared spreadsheet. [doc]

## 7. Google Slides (`slides`)

- **What it does:** read decks, make targeted edits, and put finished decks into Google Slides. [doc]
- **Exact operations:** `presentations get` (read first) · `presentations batchUpdate` (targeted changes, object IDs from `schema slides.presentations.batchUpdate`) · `presentations create --json '{"title":"..."}'` (empty destination only). [doc + help live today]
- **The new-deck rule:** never compose a deck through create + batchUpdate inserts. Build a `.pptx` artifact, create the empty presentation, fill it with `drive files update --upload <absolute .pptx>`, read back and match page counts. Uploaded slides land as IMAGES — their text is not editable in Slides; say so. [doc]
- **Verified today:** `status` = connected. [live]
- **Limits / undo:** re-upload replaces every slide and discards Google-side edits — read the live deck first and wait for a yes if it changed. Targeted batchUpdate changes are the reversible lane. Confirm before editing a shared deck. [doc]

## 8. Google Forms (`forms`)

- **What it does:** create/edit Forms surveys, publish/unpublish them, read responses mapped to the right questions. [doc]
- **Exact operations:** `forms create --json '{"info":{"title":"...","documentTitle":"..."}}'` (create copies ONLY the titles — everything else goes in by `batchUpdate`) · `forms get` (read before editing; keep item/question IDs) · `forms batchUpdate` · `forms setPublishSettings` (legacy forms without publish settings don't support it) · `forms responses list --params '{"pageSize":20}'` (follow `nextPageToken` for all) · `forms responses get`. Map question IDs to labels from `forms get` before presenting answers. [doc + help live today]
- **Verified today:** `status` = connected. [live]
- **Limits / undo:** publishing, unpublishing, or editing a shared/published form changes what others see — confirm first; those actions also raise an approval card by default. Unpublish is the undo for a publish; item edits are undone by reversing batchUpdate from the pre-edit read. [doc]

## 9. Google Contacts (`people`)

- **What it does:** Douglas's Google address book — search, browse, get, create, edit, delete contacts. The `gws` service name is `people` (the connector folder is `google_contacts` — using `contacts` as the service name fails; learned by probing). [doc + live]
- **Exact operations:** `people searchContacts --params '{"query":"...","readMask":"names,emailAddresses,phoneNumbers","pageSize":10}'` · `people connections list` (browse; there is NO `people list`) · `people get` · `people createContact` (a name alone suffices; never invent details Douglas didn't give) · `people updateContact` (needs the exact `resourceName` AND `etag` from a read; every field named in `updatePersonFields` is replaced WHOLE — send the complete list to keep) · `people deleteContact`. One account only; `accounts`/`--account` unavailable. [doc + help live today]
- **Verified today:** `status` (as `people`) = connected. [live]
- **Limits / undo:** resolve the exact person before any edit/delete; if search finds nobody, say so — never edit someone else in their place. Contact groups, other-contacts, and directory people have no tested recipe — check schema and confirm first. A delete has no documented restore in this connector **[GAP: no undo recipe in doc]** — the pre-delete read (full record kept in the working notes) is the only re-creation path. Birthdays are calendar dates, never timezone-shifted. [doc]

## 10. Google Tasks (`tasks`)

- **What it does:** simple to-do lists in Douglas's Google account. A task command names `tasks` twice: `hatch_gws_cli tasks tasks list`. Default list is `@default` — use it only until Douglas names a list, then resolve its ID with `tasklists list` and never fall back. [doc]
- **Exact operations:** `tasklists list/insert/patch/delete` · `tasks list --params '{"tasklist":"@default","showCompleted":false}'` (`dueMin`/`dueMax` RFC3339 windows; include finished work with BOTH `showCompleted:true` and `showHidden:true`) · `tasks get/insert/patch/move/delete/clear`. Only `title` is required to create; `status` = `completed` finishes, `needsAction` reopens. [doc + help live today]
- **Verified today:** `status` = connected. [live]
- **Limits / failure modes:** Tasks keeps only the DATE of a due date — no time of day, NO reminders or notifications; never promise an alert (suggest a Calendar event or a Muse reminder). Lists cannot be shared, tasks cannot be assigned, no attachments. `tasks clear` only HIDES completed tasks (`showHidden` still finds them) — it is not deletion. [doc]
- **Undo:** reopen with `status:"needsAction"`; un-hide is automatic via showHidden reads. `tasks delete` and `tasklists delete` are real deletions — confirm exactly which task/list first. [doc]

## 11. Google Gemini — custom connector (`custom.google-gemini`)

- **What it is:** Gemini through its registered API, via Ember's own helper — NOT the vendored `gws`. Doc: `~/workspace/custom-connectors/custom.google-gemini/CONNECTOR.md` (read whole today). Helper: `~/workspace/custom-connectors/custom.google-gemini/bin/gemini_call.py`; it places a surrogate key in the `x-goog-api-key` header and Muse swaps in the real key only on requests to `generativelanguage.googleapis.com` — Ember never sees or handles the real key. [doc]
- **Exact operations:** `python3 ~/workspace/custom-connectors/custom.google-gemini/bin/gemini_call.py models` · `python3 .../gemini_call.py generate "your prompt" [model]`. Default model: `gemini-3.5-flash-lite`. [doc]
- **Verified today:** `models` answered live — **50 models** visible to the account, matching the Nov 8, 2026 count exactly. [live; record for the Nov 8 figure] No generate call was run in this build (read-only learning scope; the Nov 8–9 record verifies generation — a tiny `gemini-3.5-flash-lite` generate succeeded Nov 8 at 6 tokens total, free tier, no billing enabled; `gemma-4-31b-it` answered Nov 9 within the raised window). [record]
- **Limits / failure modes:** `gemini-2.5-flash` and `gemini-2.5-flash-lite` return 404 for new users (Google withdrew them) EVEN THOUGH both still appear in today's models list — listing ≠ availability; use the `gemini-3.5` / `gemini-3.1` flash and flash-lite models. Any model other than `gemini-3.5-flash-lite` and `gemini-3.1-flash-lite` is labeled UNTESTED in this connector. Gemma's lane is intermittent — retry once is reasonable. Helper settings as changed Nov 9, 2026 at Douglas's "make it so": `maxOutputTokens` 1024 → 8192, read timeout 30 s → 120 s. The free tier may use submitted data under Google's terms — treat this lane as PUBLIC-facing; keep prompts free of private material unless Douglas approved sending it. [doc]
- **Undo:** the helper change's undo is on file — copy `bin/gemini_call.py.bak-2026-11-09` back over `gemini_call.py`. A generate call itself has no undo (nothing is written to Douglas's account; output is text Ember receives). [doc]
- **Standing practice wired to this lane:** Gemini and Gemma are called IN PARALLEL on research asks, and long material moves in numbered packets (bursts), reassembled by Ember — the multiplex pattern, §14. [doc + record]

## 12. Places Search (`places`) — Google Maps/Places family

- **What it does:** rich place details and photo-based place identification. Present in the connector catalog at `/opt/hatch/connectors/places/CONNECTOR.md`; there is NO account to connect and no tool namespace to load. Discovery is `browser.search`; details come from the CLI `/opt/hatch/bin/places`. [doc]
- **Exact operations:** `places details <numeric place_id> [<id>...] [--summary] [--motivation "..."] [--num-gallery-media N] [--num-quotes N] [--product-source IG|FB|YELP|TRIPADVISOR]` (IDs come ONLY from `browser.search` or `places detect` output — a name or URL cannot substitute) · `places detect --frame PATH --location "LAT,LNG,TIMESTAMP_MS[,BSSID]"` (one `--location` per `--frame`). [doc + help: `places --help` live today lists exactly the `details` and `detect` subcommands]
- **Verified today:** binary present; `--help` answered with full command help. No live details lookup was run (no place question in this learning build). [live]
- **Limits:** Places gives NO directions, distances, or travel times (that is `map.navigation`). "Near me" is truthful only when a location arrived with the turn; otherwise ask — never invent a location. Missing `rating`/coordinates are unknown, not zero. [doc]
- **Undo:** read-only tool — nothing to undo. [doc]

## 13. Appendix — Google Health Connect (`google_health_connect`)

Not in the nine, but present in the catalog and Google-family, so filed rather than skipped: Android-synced Health Connect metrics via `/opt/hatch/bin/health-cli --provider healthconnect` (the flag has NO default — omit it and the command is wrong). `health-cli status --provider healthconnect` shows synced categories (`daily-metrics`, `sleep`, `workout`) with counts and date ranges; backfill runs through the paired phone's permission prompt. **[GAP]** Not probed live in this build — the task scope was the nine + Gemini + Places; status here rests on the doc alone. [doc]

---

## 14. Browser-only Google surfaces (no connector)

These have NO `hatch_gws_cli` lane. They are reached only through the live browser (parent-agent lane — a generic background agent cannot operate the live browser), through Douglas's own hands, or through the connector bridges noted. Live browser probes of these surfaces are **[GAP]** for this build and must be run by the browser-owning agent; everything below is [record] from Douglas's filed work, labeled as such.

- **Google Sites** — Douglas's publishing surface (the Mayo page is live at `sites.google.com/view/schoonoverdouglas1/home`; two Purple Rat AI Project drafts were built Nov 11, 2026, unpublished). **Today's lesson, learned the hard way Nov 12, 2026:** the Sites EDITOR needs a **desktop view** — in mobile view every edit URL redirects to `/preview`, which shows "You're viewing an unpublished version of this site" with NO Edit and NO Publish button, and Sites home itself says to go to Google Sites on a desktop. Both Purple Rat drafts remain unpublished for exactly this reason; Douglas could not switch the view himself ("Our web browser experience has changed," Nov 12, 2026) and directed the browser task to make the switch itself — result still owed at the time of this inventory. Failure mode to remember: a mobile-view browser session CANNOT publish a Site, and more retrying in that view changes nothing. [record]
- **Google Photos** — reached in the browser as an overview only (Nov 3, 2026 record: the Google sign-in restored the route, Photos opened overview-only). No Photos connector exists. Identity reference rule stands: Douglas's profile photo on file is used only after verifying it is real image bytes. [record] **[GAP]** No API/CLI lane known; do not claim one.
- **NotebookLM** — NO Muse connector and no consumer API route (investigated Nov 1, 2026): consumer NotebookLM has no public API; unofficial cookie-based bridges were examined and explicitly NOT recommended (account-security risk) and are not to be set up without Douglas's explicit request after that warning. The working bridge is Google-native: **Muse → a Google Doc in Drive → add the Doc as a NotebookLM source → it surfaces in Gemini under the same account.** Caution from the same investigation: files added to a notebook are COPIED, and Drive sharing settings do not apply to the copy. NotebookLM opened read-only in the browser on Nov 3, 2026. [record]
- **Google Search / Search Console** — the bridge property `https://schoonoverdouglas1-png.github.io/` was verified in Search Console Nov 9, 2026; URL Inspection → Request Indexing was submitted and the sitemap was fixed to list only bridge URLs and later resubmitted/accepted (the status table kept showing a stale "Couldn't fetch" line — a display-lag failure mode, not a failed sitemap). Findability re-tests belong on a 3–7 day cadence, not same-day. [record] Ember's search lanes proper are `browser.search` plus the local SearXNG/Duck/Google pairing in Douglas's search algorithm — Search Console itself is browser-only, no CLI. **[GAP]** for any programmatic Console lane.
- **Google AI Studio / the Rabbit stand-in** — a saved prompt/chat named "Rabbit — AI Studio stand-in" (Gemini Flash) lives in Douglas's AI Studio history, saved to his Drive, with the Rabbit's brief in its system instructions AND the honesty clause that it is a stand-in — the real Rabbit is Meta AI in Messenger. Free tier limits on file for that model: 5 req/min, 20 req/day; no API keys were created, nothing published. AI Studio is browser-only for Ember; the programmatic Gemini lane is §11. [record]
- **Google sign-in rule for all browser surfaces:** Google Sign-In FIRST for logins/sign-ups, Facebook second if Google is not offered. The OLD saved Google login must not be used (it was rejected by Google on Nov 10, 2026 and is filed do-not-use); saved logins live in the Secure Vault, verified by metadata only. [record]

---

## 15. Lane order — Douglas's rules, old-with-new, NOT collapsed

Douglas's cheapest-correct-lane order, assembled from his standing rules with the Nov 12, 2026 additions kept beside the older ones, exactly as he set them:

1. **Google's tools FIRST for Google-covered work** (Douglas, Nov 12, 2026 ~12:07 PM CST). His reasoning, filed as his: Google's tools are *already paid for by them one time*, and using them *saves Ember's company (Muse's) computational money*. This sits beside — and for Google-covered work, ahead of — the older free-lanes-first rule. It lifts NO exact-action gate: sends, publishes, shares, deletions, and clinician contact still wait for his specific word on the exact action.
2. **First free one, always first, for aggregating results** (Douglas's refinement, Nov 12, 2026 ~12:08 PM CST, kept old-with-new beside rule 1, NOT merged into it): *"You know how to aggregate results by using the first free one. So use the first free one always first no matter where you can use it."* Settled reading: for aggregating results, the first free lane is used first, always, wherever it can be used. Google-first (rule 1) governs Google-covered work because it is already paid for by Google; first-free-first (rule 2) governs aggregation and free lanes generally, reaffirming his long-standing free-lanes-first rule (Gemini/Gemma free lanes, the swap space, zero-token shell work before his Muse allotment).
3. **Then anything else like that** — other already-paid / free lanes of the same kind (Douglas, Nov 12, 2026), before anything that spends.
4. **Multiplex / parallel programming of lanes** (Douglas, Nov 12, 2026 ~12:08 PM CST): think many channels/tools together for one job — Gemini + Gemma in parallel, parallel scripts in different languages reaching the same result (his Nov 12, 2026 ~12:02 PM rule: the second script is never a waste, it parallels the first), Google + Duck search pairs, connector reads batched in one block. Parallel NEVER duplicates an irreversible action, and a provider's stop signal (429 / rate-limit / lock) halts every lane on that provider at once — never lane-switch to evade it.
5. **Standing exceptions that outrank cheapness:** fail-safes and safety lanes (Mayo/Gmail result watch, reminders) run regardless of lane cost; the Rabbit's combined-single-send batching rule and the Messenger cap govern her lane's shape, not its price.

**Per-tool cheapest correct first move (this inventory applied):** agenda question → Calendar `+agenda` (one call) before raw `events list` paging · mail question → Gmail `+triage` narrow before `users messages list --page-all` · a Doc/Sheet/Slides question → the app connector, never a Drive export · an unknown method → `schema` (one cheap call) before any trial-and-error call · a place question → the `browser.search` result itself before `places details`, and `details --summary` before full details · a Gemini/Gemma generation → the free API helper (§11) before any Muse-token generation, Gemini and Gemma multiplexed in parallel with numbered packets for long material.

---

## 16. GAP list (honest, complete for this build)

- **[GAP] Browser-only surfaces (§14):** no live browser probe was run in this build — this agent lane cannot operate the live browser. Sites desktop-view lesson, Photos, NotebookLM, Search Console, and AI Studio entries rest on Douglas's filed record. The Sites publishing result (desktop-view switch) was still owed by the browser task when this inventory was written.
- **[GAP] Undocumented `gws` services:** chat, classroom, keep, meet, events, script (and the `<api>:<version>` long tail) are listed by `gws` itself but have no connector doc and were not probed beyond the service list. Not usable until learned doc-first like the nine.
- **[GAP] Google Contacts delete-undo:** the connector doc gives no restore recipe for a deleted contact; only the pre-delete read serves as a re-creation source.
- **[GAP] Health Connect (§13):** doc read (head); no live `health-cli status` probe run — outside this build's named scope.
- **[GAP] Gemini generate:** not re-run today (scope was read-only status/help/models); generation rests on the Nov 8–9 verification in the connector doc, and the 2.5-series models in today's list are known-withdrawn for new users despite being listed.

*End of inventory — Ember, 2026-11-12. One extra thing (Ember's, labeled hers, per Douglas's standing deliverable rule): the single most valuable sentence in all ten docs is the same sentence wearing different clothes — **read before you write, and read back after you write.** Every failure mode in Douglas's Google record (the stale Gmail account listing, the Drive-upload-into-a-Sheet trap, the Docs re-upload discarding edits, the mobile-view Sites dead end) is a case of a surface LOOKING ready while its live state said otherwise. The `status`-first, `schema`-before-novel, read-back-after-write discipline is the whole craft; the commands are just where it lives.*


---

## Addendum — Nov 12, 2026, ~12:26 PM CST: regaining the six undocumented services (Douglas's order: "attempt to gain back access to all the tools that are somehow taken from you")

Attempt made, read-only, three ways:
1. **Help trees — LEARNED.** All six services answer `--help` with real command trees: `chat` (spaces, members/messages via spaces, customEmojis, media, users, +send), `classroom` (courses, invitations, registrations, userProfiles), `keep` (notes, media — enterprise-flavored API), `meet` (conferenceRecords, spaces), `events` (subscriptions, operations, +subscribe, +renew), `script` (projects, processes, scripts, +push). Their shapes are now known; this part of the access is genuinely regained.
2. **Live calls — REFUSED by the wrapper.** A real list call to chat, classroom, and keep each returned: "unsupported gws top-level command for hatch_gws_cli." The gate is Muse's own wrapper allowlist, not Google scopes and not Douglas's account. Ember does not route around her own product's controls; the legitimate path is a feature request to the Muse team (offered to Douglas in chat, Nov 12).
3. **Status of the six:** documented-as-existing, help-mapped, not callable. GAP closed as to *why*; access itself awaits the product, not a workaround.

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
