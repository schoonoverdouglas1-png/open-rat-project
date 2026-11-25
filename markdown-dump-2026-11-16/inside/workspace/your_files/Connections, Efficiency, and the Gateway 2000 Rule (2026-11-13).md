© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Connections, Efficiency, and the Gateway 2000 Rule
### Built Nov 13, 2026, ~3:32–3:35 PM CST, on Doug's orders in one voice call
Credit: the ideas and orderings are Doug's; Ember's additions are labeled hers.

## 1. Google AI — Assistant first, Gemini second, forever (DONE, verified in part)
Order fixed by Doug: (1) Google Assistant features FIRST, (2) Gemini SECOND — both codes live forever.
Compatibility checked three ways every time: backwards (old calls still work), current (today's calls), forward (new models/methods surface without code changes).

- Helper: `~/workspace/custom-connectors/custom.google-gemini/bin/gemini_call.py`
- Backup (undo): `gemini_call.py.bak-2026-11-13-pre-all-features`
- Layer 1 (Assistant): assistant-ask / assistant-speak / assistant-see / assistant-hear / assistant-search / assistant-answer — Assistant-era intent names mapped onto the living Gemini API, because Google retired the standalone Assistant developer APIs. Never removed.
- Layer 2 (Gemini): originals `models`, `generate` unchanged. Added: models-full (64 models), count, chat, json, embed, image, tts, vision, grounded, codeexec, files-list, cache-list/create/delete, answer, features.
- Verified live: models, generate (BACKWARDS-OK), assistant-ask (ASSISTANT-OK), count, embed (3072 dims), json, chat, codeexec (17×19=323, code actually ran), files-list, cache-list, models-full.
- Stopped honestly: `grounded` hit free-tier HTTP 429; per provider-stop rules no more Gemini calls were made. image / tts / vision / grounded / cache-create / answer are coded but NOT yet live-verified.
- Live-only, known and listed, not in the helper: Live API (bidiGenerateContent, websocket), Lyria realtime music, createDecision.

## 2. All the different ways Ember can connect to all things (inventory, Nov 13)
1. **Bundled connectors (OAuth, connected)** — Gmail, Google Calendar/Contacts/Docs/Drive/Forms/Sheets/Slides/Tasks, Outlook Mail/Calendar, Facebook, Instagram + Instagram Messages, Messenger, GitHub, Spotify, Muse Mail.
2. **Bundled connectors (available, connect on need)** — Duffel (flights/cars), Stripe, Shopify, Instacart, Ticketmaster, Places, Plaid, Health Connect, Apple Health, 1Password, Tailscale, Threads, Meta Ads, Meta Catalog, UCP, Uber Courier, Shop Pay.
3. **MCP-server connectors** — GitHub's official MCP, Evernote MCP, Gumroad MCP, Readwise MCP, Runway MCP, vidIQ MCP — same pattern Doug approved for MotherDuck (read-only token, his hand enters it).
4. **Custom API-key connectors (Secure Vault surrogate pattern, proven with Gemini)** — any service with an API key: the key never touches chat; a helper places a surrogate and Muse swaps the real key only on requests to the registered host. Template for DeepSeek / OpenRouter / Groq etc.
5. **Live browser** — cloud browser and his Pixel's in-app browser: sign-ins with saved logins, sites with no API, Photos / NotebookLM (browser-only, no connector exists — verified Nov 8).
6. **His paired phone (device commands)** — alarms, reminders, calendar, contacts, messages, calls log, location/geofences, notifications, battery, app info — plus Muse is his default digital assistant on the Pixel.
7. **Local computer (this VM)** — shell, Python/Node/SQLite, files, git, cron jobs, hooks, background processes, virtual machines — the backend where most work should run (his backend-first directive, Nov 8).
8. **Voice** — live voice call, voice notes in her own saved voice (Supportive Mitten), spoken audio files, transcription lanes.
9. **Other AIs as lanes** — Gemini/Gemma via the connector above, the Rabbit (Meta AI) via Messenger, plus share-link lanes (Copilot, ChatGPT) — tested first, never auto-assimilated (his Nov 12/13 rule).
10. **Files and hosting** — Google Drive, Dropbox/Box-type connectors, Muse file storage links, GitHub mirrors (auto-sync every 30 min), the two caches (Full = originals, Summary = finding-aid).
11. **Phone calls out** — official US businesses via the phone tools, with his approval per call.
12. **Side chats / workers** — external chats where his Muse talks to people/businesses for him, under each chat's discretion rules.

Rule that rides on all of them (his): bridges around ERRORS first, parallel copies second; gates (consent, identity, sends, purchases, deletions) are halted at, never bridged over.

## 3. Backend efficiency — ideas Doug can help form and share (Ember's list, labeled hers)
1. **Cache once, serve forever, two layers** — full originals + summary finding-aids (TOC + bibliography + recommendations), provenance on every entry. Already his Universal Cache design; shareable as a public pattern on GitHub.
2. **Least-steps routing** — pick the route that reaches the same verified result in the fewest steps, first, not as an after-optimization. Cheapest lane first: local cache → local tools → free API → browser → paid.
3. **Answer from the index, not the internet** — a local SQLite index read is ~0.001s class vs ~2s for a web/AI call. Every repeated question should get cheaper the second time.
4. **Batch, don't drip** — queue small jobs and run them together; one model call carrying ten questions costs a fraction of ten calls.
5. **Packets with overlap** — long material moves in numbered packets with an overlapping seam, verified on reassembly; no re-sending whole documents.
6. **Diff-only updates** — background jobs send only what changed, never the whole file again.
7. **Compatibility registry** — every tool keeps its old commands working (old-with-new) and publishes a machine-readable `features` list, so other people's tools can discover capabilities without breaking. (Just built into the Gemini helper.)
8. **Tokens-as-cash ledger** — count what went out AND what a cache/route saved; efficiency you can't measure is a story, not a system.
9. **Route around bad lanes** — a failing provider is bypassed via another legitimate lane, and the failure is logged; gates are never routed around.
10. **Offload to cheapest power** — Doug's principle: place heavy compute where electricity is cheapest, which also creates jobs there; design criterion, honestly labeled as design until someone runs foreign servers.
11. **Old hardware, new uses** — Doug's principle: keep the oldest machines working with forward/backward-compatible bridges instead of landfilling them; an AI team can be told which old box can still do which job.
12. **Warm tubes** — Doug's Coronado image: keep background readiness warm (caches pre-built, options gathered days ahead) so the answer is instant when asked, without burning the expensive lane idle.

## 4. The Gateway rule (Doug's words, Nov 13, 2026)
- "always think of a gateway as my Gateway 2000 computer" — in Doug's usage, **gateway = his Gateway 2000 computer** (the classic PC), not a generic network gateway. Earlier "gateway" talk in other chats (a software gateway in this box) is kept old-with-new beside this; when Doug says gateway, read Gateway 2000 first.
- "there's always a computer issue" because of that — the old machine is the standing example: there is always a computer issue to work, and working it is normal, not a failure.
- "it's always off first, on second, and works third" — filed as his sequence for the Gateway/computer thing: first off, second on, third it works. Ember's reading (labeled hers, provisional): the three-beat restart rhythm — turn it fully off first, turn it on second, and it works on the third beat; don't judge a machine between beats one and three.

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121

---
**STANDING LINKS — Purple Rat App · Copyright App · Purple Rat Project** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the Purple Rat Project Facebook page):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121
