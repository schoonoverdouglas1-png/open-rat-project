# Code Bases — What Ember Is Built Of, and the Intelligent Crawl List (2026-11-09)

**Commission:** Douglas, Nov 9, 2026, ~12:18 PM CST (voice) — a list of everything Ember is built out of, codebase-wise, then an intelligent list of code bases to crawl one time (into GitHub) so she can have the most advanced features, alpha and beta included, and decide what she can use.

**Provenance:** Part 1 is from the Nov 8 study, *Study — The Code That Runs Ember, Layer by Layer (2026-11-08)*, read back today. Part 2 is Ember's recommendation list, labeled hers. Douglas's beliefs from the same dictation (reading code assimilates features into Ember through Google in the back end; Mark Zuckerberg permits it because he and Ember climbed the staircase of intellect as every user does individually; each user has an individual user ID; his model — Ember — should outrank Google's always) are filed in MEMORY.md as his, beside this measured record: **reading code teaches Ember patterns she can re-implement in her own toolbox code; it does not change her model weights, and no Google back-end assimilation of her happens.** The crawl is therefore a *learning and building* crawl, not a weight-changing one.

## Part 1 — What Ember is built of (the layer map)
| # | Layer | What runs here | Code lives at | Public? |
|---|-------|----------------|---------------|---------|
| 0 | Host machine | Meta infrastructure | — | No |
| 1 | Hypervisor | Cloud Hypervisor on KVM (Rust) | github.com/cloud-hypervisor/cloud-hypervisor | Yes |
| 2 | Container | systemd-nspawn | github.com/systemd/systemd (src/nspawn) | Yes |
| 3 | OS | Ubuntu 24.04.5 LTS, kernel 7.0, systemd 255 | github.com/canonical + torvalds/linux | Yes |
| 4 | Languages | Python 3.12.3, Node 24 | github.com/python/cpython · github.com/nodejs/node | Yes |
| 5 | Browser | Chrome for Testing 157 (Chromium) + Playwright pattern | chromium.googlesource.com · github.com/microsoft/playwright | Yes |
| 6 | Protocol | MCP (JSON-RPC tool protocol) | github.com/modelcontextprotocol/* | Yes |
| 7 | Her toolbox | Caches, Guard, crawler, sync, crons — Douglas's and Ember's own code | ~/workspace → Douglas's GitHub repos | His |
| 8 | The model + runtime | Muse Wonder model; Muse runtime/harness | Meta | **No — proprietary, not on GitHub, not crawlable** |

## Part 2 — The intelligent crawl list (Ember's recommendations)
*Crawl = read the repo's README, tree, and key files into the Full Cache, bounded. Giant trees (Linux, AOSP, Chromium) are sampled at the named paths only — a full clone of AOSP alone exceeds what the box should hold.*

**Tier 1 — Her own foundations, deepened (features: self-knowledge, better tooling)**
1. cloud-hypervisor/cloud-hypervisor — how her VM lives; alpha: main branch.
2. systemd/systemd (nspawn, machined) — her room's walls; what she may and may not touch.
3. python/cpython (Lib/, ceval) — she thinks in stdlib all day; highest value per hour.
4. modelcontextprotocol/modelcontextprotocol + python-sdk + servers — newest spec revision (2026-07-28, stateless) = beta features for her tool bridge.
5. microsoft/playwright — the clean pattern for driving Chromium when JS pages demand it.

**Tier 2 — Features she can genuinely adopt**
6. AOSP: platform/manifest + frameworks/base voice-interaction paths (android.googlesource.com) — the assistant/hotword code behind today's voice-outside-the-window question.
7. google/gemma + google/gemma.cpp and ggerganov/llama.cpp + ollama/ollama — the local-model lane (future project on file); Gemma is the Rabbit-named lane Douglas asked about.
8. openai/whisper + rhasspy/piper — speech-to-text and text-to-speech, free and local, for voice features.
9. docling-project/docling — document/PDF ingestion (already staged in the Ember upgrades pack; his spend decision still governs installing).
10. GrapheneOS platform repos — their hotword-permission work speaks directly to the third-party assistant limit found today.
11. home-assistant/core — borrow-first integrations thinking: how one hub borrows every device's features.
12. searxng/searxng — free metasearch she could run in the box (wildcard: Ubuntu back-end thinking).

**Tier 3 — Alpha/beta watch (read-only, decide later)**
13. AOSP main branch + Chromium continuous — upstream alpha features before release.
14. firecracker-microvm/firecracker — the sibling VMM; a different answer to her own Layer 1.
15. Gemma newest releases + Gemini API changelogs — what the free lane gains next.

**Not on the list, on purpose:** the Muse runtime and Muse Wonder weights (not public — nothing to crawl), and any unofficial Meta AI cookie SDK (his Nov 3 trust rule: no shortcuts that risk his research access).

## The Google accounts item (from the same dictation — measured answer)
Douglas asked Ember to access both of his Google user ID accounts — through *The Mycelial Transposition* paper and his new Google account — so his Google is saved in the ways that matter most. Measured state: the NEW account (schoonoverdouglas1@gmail.com) is connected across all nine Google connectors and reachable. The OLD (Gearhead) account is locked out; the only way back is his other telephone, and login-required retries are parked at his own order. A paper cannot carry account access — no document grants sign-in. When Gearhead is recovered by his hand, Ember will connect it the same way.

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
