# Every Tool Douglas Uses — Learning Inventory Part 2 (2026-11-12)

Companion to the Google Tools inventory from earlier today. This part covers the email analysis and every connected non-Google service. Read-only throughout: nothing was sent, changed, labeled, or deleted.

## 1. Email analysis — Gmail (schoonoverdouglas1@gmail.com)

**Account shape (checked live, Nov 12, 2026):**

- One connected account: schoonoverdouglas1@gmail.com.
- **No user-created labels at all** — the mailbox uses only Gmail's built-in system labels and categories. Everything files itself; Douglas files nothing by hand.
- Inbox: 563 messages (491 conversations), of which **524 messages / 464 conversations are unread** — the inbox is mostly an unread archive, not a worked queue.
- Category counts (total / unread): Updates 405 / 372 · Promotions 112 / 112 (every single promotion unread) · Personal 40 / 35 · Social 0 · Forums 0 · Spam 6.

**The last 200 inbox messages (roughly Nov 5–12, 2026 — about a week of mail):**

Top senders: Google account no-reply addresses (42 combined) · vidIQ (17) · GitHub (18 combined across two no-reply addresses) · Microsoft account team (10) · OakLeaf Clinics MyChart (8) · Muse Mail — Purple Rat on Douglas's behalf (6) · Firecrawl's Alex Nucci (6) · Perplexity (5) · Mayo Clinic Patient Online Services (5) · Asana (8 combined).

Rough category split of those 200:

| Category | Count |
|---|---|
| AI / dev tools & newsletters (vidIQ, Perplexity, OpenAI, Mistral, Sider, Consensus, Elicit, Firecrawl, MotherDuck, Fathom, Superhuman) | ~63 |
| Account security alerts (Google "Security alert", Microsoft "New app(s) connected", single-use codes) | ~35 |
| Other Google (Play, Search Console, etc.) | ~26 |
| GitHub notifications | ~20 |
| Productivity SaaS (Asana, Airtable, WordPress) | ~18 |
| Medical portal notices (OakLeaf/Evergreen MyChart, Mayo) — counted only, content not read | ~16 |
| Muse Mail (his own assistant mailbox writing to him) | 6 |
| Finance | ~0 — no bank/card senders in the sample; one Microsoft Cashback welcome |

**Anything awaiting his reply / time-sensitive:**

- Nothing from a private individual awaiting a personal reply. Every named-human sender in the sample is a company outreach or onboarding address (MotherDuck, Consensus, Elicit, Firecrawl, PandaDoc reps).
- One time-stamped marketing item: PandaDoc — "Your trial ends today" (a trial lapse notice, not a person waiting).
- The security-alert volume is high (~35 in a week, Google + Microsoft) but these are automated sign-in/app-connection notices from the week's own connector and account activity — they need no replies.
- Medical portal notices (16) are automated "do not reply" notifications; counted as a category only, per standing rules.

**Pattern worth knowing:** this mailbox is a *notification river* — machines writing to Douglas about his accounts, his repos, his portals, and his tools. The Personal category is small (40 total) and the human signal in it is almost entirely companies, not people. His real correspondence lives elsewhere (Messenger, Muse Mail).

## 2. Tool inventory — the non-Google services

**Facebook** — Binary: `/opt/hatch/bin/facebook-cli`. Reads friends, profiles, timelines, posts, comments, reactions, feeds, stories, groups, events, saved items; can post/comment as Douglas, manage his Pages, and work Marketplace (buy/sell). *Quirk:* output is JSON with paging cursors at the end — truncating output with `head` silently drops results and the next-page cursor; read whole or save and parse.

**Messenger (personal account)** — Binary: `/opt/hatch/bin/hatch_messenger_cli`. Reads, searches, and sends in Douglas's personal Facebook Messenger, including call history, reactions, edits, and Marketplace threads; sends *as Douglas*, not as Muse. *Quirk/limit:* it must never target the Meta AI (Rabbit) side chat — that conversation runs through the separate side-chat lane — and it never carries Muse's own reminders or monitoring output. Status checked today: connected, no reconnect required.

**Instagram** — Binary: `/opt/hatch/bin/instagram-cli`. Searches accounts; reads profiles, posts, comments, likers, stories, feeds, saved items and insights; publishes/schedules posts, stories, reels, carousels; manages collections and profile details. *Quirk:* nearly every command requires `--account-id` (his own user_fbid) — forget it and the command refuses; content access does **not** include direct messages.

**Instagram Messages** — Binary: `/opt/hatch/bin/instagram-messages-cli`. Reads and sends Instagram DMs and manages pending message requests (inbox / pending / spam folders). *Quirk:* its connection is separate from the Instagram content connection — one can be linked while the other is not, and each account shows its own `connected` flag for messaging.

**GitHub** — Binary: `/opt/hatch/bin/github` (GitHub's official MCP server). Works with repos, files, issues, and pull requests under Douglas's own GitHub identity. *Quirk:* being connected proves OAuth only — actual repo access is separately gated by which repositories the Muse GitHub App is installed on. Public GitHub only; no GitHub Enterprise. Status checked today: connected and authenticated. (Douglas's heavy GitHub work also runs through the local `gh` CLI and git, per the swap-space routine.)

**Spotify** — Binaries: `/opt/hatch/bin/spotify-api` (catalog search, library, playlists, playback control) and `/opt/hatch/bin/save-to-spotify` (shows/episodes created with Save to Spotify). *Quirk:* if playlist changes stop working after a reconnect, the account must be connected again so the fresh grant carries the latest scopes; `save-to-spotify` has no connect command of its own and fails with token errors until Spotify is connected in Settings. Status checked today: connected. (A local amendment doc exists at `~/workspace/custom-connectors/custom.spotify/` — noted in Part 1's spirit: read before applying.)

**Outlook Mail** — Binary: `/opt/hatch/bin/outlook-mail`. Searches, reads, and sends mail in his personal Microsoft / Microsoft 365 mailboxes; mark, move, reply, forward. *Quirk:* message IDs and page tokens belong to the mailbox that returned them — the `--account` flag must ride on every follow-up command for that mailbox, and a failed command must never be retried without it. Status checked today: connected.

**Outlook Calendar** — Binary: `/opt/hatch/bin/outlook-calendar`. Reads his Microsoft calendars and creates, updates, and deletes events and invitations. *Quirk:* `--status`, `accounts`, and `disconnect` cover the whole connector and reject `--account`, while event commands require the account to be repeated every time; an absent `disconnect_url` means "not connected," not an error. Status checked today: connected.

**Muse Mail** — Binary: `/opt/hatch/bin/muse-mail`. This is **Muse's own mailbox** (purple-rat@muse.ai), not Douglas's — mail forwarded to Muse, and mail Muse sends as itself. *Quirk/limit:* only mail workers send from it; every other agent (main, subagent, scheduled job) hands sends and replies to a mail worker via `mail.handoff`. It is the mailbox behind the 6 "Purple Rat on behalf of Douglas" messages in his Gmail sample above.

## 3. Miser rules applied

- **Shell first:** all nine connector docs were read from disk with `head` (zero live calls); the Gmail doc was read in full because the email analysis depended on exact commands and request-unit costs.
- **Gmail live calls, batched and minimal:** 1 status + 1 accounts + 1 label list + 8 label counters + **one** `+triage` call at `--max 200` (the doc prices that at up to ~4,005 request units — deliberately spent once instead of paging). **No message bodies were opened** — senders, subjects, and dates only, parsed locally with Python.
- **Status checks:** one per service for GitHub, Spotify, Messenger, Outlook Mail, Outlook Calendar (all returned connected). Facebook and Instagram status were taken from their docs' connection model rather than spending live calls — their connected state was already established in today's earlier work.
- **Failures:** none. No call was rate-limited; nothing had to be retried.
- **Not done (on purpose):** no Outlook mailbox contents were sampled — Part 2's email analysis is Gmail-only, as ordered; Outlook's turn comes if Douglas asks.

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
