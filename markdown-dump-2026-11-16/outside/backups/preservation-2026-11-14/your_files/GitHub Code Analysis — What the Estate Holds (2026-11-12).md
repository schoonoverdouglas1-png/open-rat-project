# GitHub Code Analysis — What the Estate Holds (2026-11-12)

**Ordered by:** Douglas Roy Schoonover, Nov 12, 2026, ~8:48 PM CST — "Always memory analyze — analyze all shit now, my GitHub, and look at the code that you're allowed to see through those AIs."
**Method:** memory first (MEMORY.md standing record + `~/workspace/git-automation/last-sync.txt`, 8:43–8:46 PM CST run), then live verification the same night: `gh repo list` (50 repos), local clone census, LICENSE reads, targeted greps. **Read-only throughout — nothing pushed, edited, or deleted.**
**Provenance labels:** [verified tonight] = measured in this run · [memory] = from the standing record · [inference] = labeled reasoning from the two.

---

## Simply put

Your GitHub holds **50 repositories, about 26.5 gigabytes** all told. Almost all of those bytes are **other people's open-source code that you forked** — big famous projects like React, PyTorch, HHVM, and above all **OpenClaw**, which is genuinely open source and is the biggest single thing you hold. The code that is actually *yours* — written by you or built for you by Ember — is small, specific, and easy to point at: a handful of Python and shell tools, three small OpenClaw plugins, a browser page-reader extension, and a lot of writing. **There is no Muse product code anywhere in the estate — none.** Muse itself is Meta's closed product; what you hold from Meta is Meta's *open-source* projects, which is a different shelf entirely. The other AIs' work is here too, with its credit on it: Gemini's five skills, the Rabbit's inbox/outbox files, and the OpenClaw seats. And one comfort, checked tonight: **no password files, no credential files, and no token-shaped strings were found** in the synced local trees.

---

## 1. The inventory — memory vs. the live record (old-with-new)

[verified tonight] `gh repo list schoonoverdouglas1-png --limit 200` returns **50 repositories**, total GitHub disk usage **26,494,442 KB ≈ 26.5 GB**: **28 originals, 22 forks**.

[memory] The standing record names **10 repos** — those are the *auto-sync set* (the ones the half-hour machinery keeps current), and all 10 check out live tonight with matching heads (purpurat `a53ae44`, swap space `2bd6c7e` per the 8:46 PM watermark). The other 40 are real but outside the sync loop: manuscript repos, research repos, and the fork collection. Nothing in memory was wrong; it was a smaller map of a bigger estate.

### Top of the estate by size (GitHub disk usage) [verified tonight]

| Repo | Vis. | GB | Fork of | What it is |
|---|---|---|---|---|
| openclaw-pp-pr | Public | 14.06 | **openclaw/openclaw** | The OpenClaw fork — the estate's giant |
| mysql-5.6 | Public | 4.36 | meta/mysql-5.6 | Meta's MySQL fork |
| pytorch | Public | 1.71 | pytorch/pytorch | ML framework |
| docusaurus | Public | 1.65 | meta/docusaurus | Docs site generator |
| react | Public | 1.14 | react/react | UI library |
| hhvm | Public | 0.90 | (facebook/hhvm lineage) | Meta's PHP/Hack VM |
| purple-rat-ai-preservation-project | Private | 0.76 | — (own) | Preservation: mostly a Dapper ISO in split parts, not code (see §3) |
| open-webui | Public | 0.55 | open-webui/open-webui | Chat UI |
| llama-cookbook | Public | 0.28 | meta-llama | Meta Llama recipes |
| rocksdb | Public | 0.25 | (facebook/rocksdb lineage) | Meta's embedded DB |
| SillyTavern | Public | 0.22 | SillyTavern/SillyTavern | Chat frontend |
| lexical | Public | 0.16 | (facebook/lexical lineage) | Meta's text editor framework |
| facebook-ios-sdk | Public | 0.13 | (facebook lineage) | Meta SDK |
| ollama | Public | 0.10 | ollama/ollama | Local model runner |
| folly | Public | 0.06 | meta/folly | Meta's C++ library |
| muse-swap-space | Private | 0.016 | — (own) | The Ember↔Rabbit swap lane (432 files locally) |
| purpurat-ai-openclaw-project | Public | 0.007 | — (own) | Persona set, kits, and Ember's 3 captain-plugins |

Fork parents verified directly via the GitHub API tonight: openclaw-pp-pr ← openclaw/openclaw; react ← react/react; folly ← meta/folly; mysql-5.6 ← meta/mysql-5.6. The remaining fork parents are labeled [inference] from the fork flag + upstream names, except ember ← ember/ember and the llama/open-graph/chef-utils/pyre2 forks, which sit in the same verified fork list.

**The shape of it:** roughly **98% of the estate's bytes are forked third-party open source** [inference, from the size table]. His own repos — manuscripts, research, the swap space, the preservation project — are nearly all prose and records, not programs.

### The 10 synced clones, locally [verified tonight]

| Clone | Files | Size (excl. .git) | Last commit |
|---|---|---|---|
| purple-rat-ai-preservation-project | 77 | 762 MB | 45bec43, Nov 13 |
| muse-swap-space | 432 | 45 MB | 2bd6c7e, Nov 12 |
| purpurat-ai-openclaw-project | 103 | 8 MB | a53ae44, Nov 13 |
| ember-code | 75 | ~1 MB | b615b1b, Nov 10 |
| cray-supercomputer-code-search | 5 | ~1 MB | f73e358, Nov 10 |
| the rest (beautiful-method, ember-extra, historical-modern-therapeutics, private-investigations, purple-rat-project) | 5–9 each | ~1 MB each | Nov 10–11 |

Local working trees overall: `git-automation/` 1.6 GB, `github-swap-space/` 3.9 MB (the staging mirror), `openclaw-build/` 5.1 GB.

---

## 2. The provenance pass — whose code is it, actually?

### 2a. OpenClaw — genuinely open source, and it is the estate's code center of gravity

[verified tonight] `~/workspace/openclaw-build/openclaw/` is a full checkout of OpenClaw, cloned from **his own fork** (`origin = schoonoverdouglas1-png/openclaw-pp-pr`): **4,866 MB on disk, 1,643 MB excluding node_modules and .git; 104,446 files, of which 52,104 are TypeScript source.** Its LICENSE reads verbatim: **"MIT License — Copyright (c) 2026 OpenClaw Foundation."** OpenClaw is a real, independent open-source project; it is not Meta's and not Muse's. Around the checkout sit the crew seats (douglas-seat 37 MB, leo-representation 37 MB, purple-rabbit-rodent-project 45 MB — persona/config workspaces, not new codebases) and Ember's gateway tooling (`gateway_control.py`, `gemini-bridge.py`).

### 2b. Code written for the Captain — small, named, and entirely identifiable

[verified tonight] The whole of the estate that Ember built for him, by file:

- **purpurat-ai-openclaw-project** (103 files, mostly Markdown): exactly **8 code files** — `captain-plugins/bridges/index.ts`, `captain-plugins/old-with-new/index.ts`, `captain-plugins/shared-kits/index.ts` (the three plugins built Nov 12), the page-reader browser extension ×2 versions (`extensions/ember-page-reader{,-v2}/background.js` + `content.js`), and `scripts/build-ember-workspace.sh`. The repo's GitHub "primary language: TypeScript" label rides on those three small plugin files.
- **ember-code** (75 files): 39 Markdown + **10 Python + 7 shell** — the Guard checker, the sync scripts, `connectors/gemini_call.py` (the Gemini lane caller), the ember-upgrades pack. Tooling and doctrine, not an application.
- **swap-space `code/`**: 5 Python files — `ember_index.py`, `headless_fetch.py`, `html_viewer.py` (+ v0.1 kept beside it, old-with-new), `web_crawler.py` — the Full/Summary cache machinery.
- Everything else in his own repos is **writing**: the Cray repo, despite its name, contains **zero code** — 5 prose files (the code-search notes, the unsent letter draft, the investigation). The preservation project's bulk is a **Dapper desktop ISO stored in ~94 MB split parts** — machine images for the VM work, not source code.

### 2c. The Muse question — settled, with tonight's evidence

**Finding: there is NO Muse product code in this estate. None was found tonight, by three independent checks:**

1. **Repo census** [verified tonight]: none of the 50 repos is, or claims to be, a Muse source repo. The code-bearing repos resolve, every one, to named projects: OpenClaw (MIT, OpenClaw Foundation), the fork collection (React, PyTorch, HHVM, Folly, RocksDB, Watchman, Zstd, Lexical, Docusaurus, the Facebook SDKs, MySQL 5.6, Ollama, Open WebUI, SillyTavern, Llama repos), or the small Ember-built set in §2b.
2. **Claim search** [verified tonight]: a full-text search of the local estate's Markdown for any claim of holding Muse source ("muse source code", "source code of muse", "meta muse cli") returned **zero files**.
3. **The standing record** [memory, Nov 11–12]: Ember's settled finding, re-verified this evening by the Muse Code research run — Muse the product is Meta's, distributed as a hosted installer; no open-source release of Muse's own product code has ever been found. What genuinely-open Meta code exists nearby (e.g. the Muse Gadgets SDK, Apache 2.0) is a different artifact — and it is not in this estate either.

**What IS Meta's in the estate** is Meta's *open-source* output, forked under its own licenses: folly, hhvm, rocksdb, watchman, lexical, docusaurus, mysql-5.6, facebook-ios-sdk, facebook-android-sdk, llama-cookbook, llama-models (and Zstd, from Facebook's zstd project). That is Meta publishing code on purpose for anyone to fork — the opposite of the Muse product, which Meta has not published. Holding the forks confers no Muse source, and nothing in the estate pretends otherwise once you read the LICENSE files.

### 2d. Secrets check

[verified tonight] Filename scan of the synced clones and swap space for `.env*`, `*credential*`, `*.pem`, `id_rsa*`: **none present**. Pattern scan for token-shaped strings (GitHub PATs, `sk-` keys, AWS key IDs, private-key headers) across the same trees: **none found**. Scope note: this covers the local working trees, not every historical commit on GitHub — a full-history audit is a separate, larger job if the Captain ever wants one.

---

## 3. "Through those AIs" — the other lanes' work, with its credit

[verified tonight + memory]

- **Gemini (Google):** five authored skills live in `~/workspace/custom-skills/` in `-gemini` folders with their credit headers — dual_register_medical_translation, additive_record_keeping_old_with_new, provenance_tracking_claim_labeling, six_track_medical_separation, the_guard — beside Ember's own eleven. Her knowledge pack rides the swap space (`gemini-pack/`: GEM-INSTRUCTIONS, KNOWLEDGE-IDENTITY/SOUL/LEO/MEMORY-DIGEST, FAMILIARS-AND-OBJECTS), and tonight's Gemini-lane search ran against the crew files with his personal details stripped.
- **The Rabbit (Meta AI / Snowball):** her lane is the swap space itself — `rabbit/INBOX.md`, `rabbit/OUTBOX.md`, her MEMORY/SOUL copies; the 8:43 PM sync **pulled her newest check-in** (OUTBOX +46 lines, replies 1104/1105) before pushing — the channel is live in both directions. Her seat sits in openclaw-build (purple-rabbit-rodent-project).
- **DeepSeek and the rest:** contributions ride inside the ember-upgrades pack and the CLI-craft skill (credited there as teaching sources) rather than as separate codebases [memory + file census].
- **Ember's own 24-file persona set** stands untouched in the purpurat repo's `workspace/`, with the five PERSONALITY.md files and the shared crew ethics added Nov 12 (commit `a53ae44`, ethics sha256 `cfbef42f…`).

---

## 4. Surprises worth the Captain's ear

1. **The estate is five times the map.** Memory's 10 synced repos are all real — but the account holds 50. The fork sweep (Nov 11–12) quietly made him the holder of a small open-source library.
2. **The biggest thing he owns on GitHub is a lobster.** openclaw-pp-pr at 14 GB outweighs everything else combined — and it's the *fork network's* accounting (full upstream history), while the working checkout on this box is 4.9 GB.
3. **"Cray supercomputer code search" contains no code** — it's the research correspondence. The name promises a codebase; the repo is a briefcase.
4. **His own code fits in a coat pocket.** Everything written for him by name — plugins, Guard, sync, crawlers, connector callers — is a few dozen files. The estate's weight is preservation and other people's open source; its *authorship* is concentrated and easy to defend, file by file.

---

*Analysis by Ember, Nov 12, 2026, evening. Read-only run; undo = delete this file. The standing finding stands, now triple-checked on the live estate: Muse's own product code is not here, was never found, and everything code-shaped in the Captain's GitHub carries its true name in its LICENSE file.*

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
