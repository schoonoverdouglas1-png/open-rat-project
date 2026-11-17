# Chromium Study — Ember's brief, from DeepSeek + Gemini, cross-checked
Ordered by Douglas 2026-11-08 ~1:45 AM: new tab, best AI answers for Chromium, get the wiki for the Chromium she uses, learn Google, wildcard searches on functionalities for AI and for the end user, learn everything possible. Briefs sent paste-only to DeepSeek (fresh chat, DeepThink as-was) and Gemini (second opinion, Part 5 swapped to "Google itself"); both answered in full 1:46–1:50 AM. Synthesis below; AI claims carry their labels until Ember verifies against the sources directly.

## 1. Which Chromium (AGREED, two sources)
- **Vanilla Chromium**: open-source base (Blink, V8, multi-process); no proprietary codecs (H.264/AAC), no Widevine, no Google services; distro builds vary; cannot be mapped reliably to a Chrome version.
- **Google Chrome**: Chromium + proprietary codecs, auto-update, Google integrations. Auto-update makes pinned automation fragile.
- **Chrome for Testing (CfT)** — WHAT EMBER RUNS (build 157): version-pinned, no auto-update, close to regular Chrome, dedicated user-data dir. **Best default for a reproducible agent** [D, both].
- **chrome-headless-shell**: the old headless as a standalone lightweight //content wrapper — best for screenshots/PDF/scraping; wrong for extensions or built-in AI.
- Headless since M132: `--headless=old` is dead; `--headless` / `--headless=new` = new headless (full browser, no UI).
- Agent flags that matter: `--remote-debugging-port=9222` (CDP), `--user-data-dir=` (profile isolation), `--disable-dev-shm-usage` (containers); `--no-sandbox` ONLY in a disposable VM (it removes a core security boundary); avoid `--disable-gpu` if GPU-backed on-device inference is wanted [G].

## 2. The wiki — canonical reading order (DeepSeek's list, with URLs)
1. Chromium docs index — chromium.googlesource.com/chromium/src/+/main/docs/README.md
2. Design Documents "Start Here" — chromium.org/developers/design-documents/ (Multi-process Architecture, How Blink Works, Life of a Pixel)
3. Multi-process Architecture — chromium.org/developers/design-documents/multi-process-architecture/
4. Process Model and Site Isolation — chromium.googlesource.com …/docs/process_model_and_site_isolation.md
5. Sandbox design — chromium.googlesource.com …/docs/design/sandbox.md
6. Chrome for Testing — developer.chrome.com/docs/automation-and-testing/chrome-for-testing
7. Chrome Headless — developer.chrome.com/docs/automation-and-testing/headless
8. DevTools Protocol — chromedevtools.github.io/devtools-protocol/ (CDP is high-privilege, NOT a supported public API)
9. Extensions — developer.chrome.com/docs/extensions/develop (chrome.debugger = restricted CDP transport)
10. Built-in AI APIs — developer.chrome.com/docs/ai/built-in-apis (the status table)
11. Get started with built-in AI — developer.chrome.com/docs/ai/get-started
12. Prompt API — developer.chrome.com/docs/ai/prompt-api
13. Built-in model management — developer.chrome.com/docs/ai/understand-built-in-model-management (chrome://on-device-internals)
14. MDN for the web API surface (standards, not engine internals); 15. web.dev for platform guidance.
**The divide (Gemini, agreed):** upstream engineering docs live on chromium.org + Gitiles; user-facing APIs/tools on developer.chrome.com. Chromium = open upstream; Chrome = downstream branded product; CfT = the automation bridge.

## 3. AI functionalities in Chromium
Built-in AI APIs, all powered by on-device **Gemini Nano** (downloaded as a Chrome component, "Optimization Guide On Device Model"; inspect at chrome://on-device-internals):
- **Stable from Chrome 138**: Translator, Language Detector, Summarizer (web + extensions).
- **Prompt API (LanguageModel)**: extensions stable from 138; web listed at Chrome 148 / Intent to Ship, with an origin trial for sampling parameters [DeepSeek's table]. Text/image/audio in, text out; `LanguageModel.availability()` then `create()`; create() may need user activation; desktop only, ≥22 GB free disk class requirements.
- **Developer trial**: Writer, Rewriter, Proofreader.
- How a driver reaches them: `page.evaluate` in page context (Playwright wraps CDP Runtime.evaluate), or in an extension service worker via a persistent context.
- End-user local-AI features (UI, NOT developer APIs): Help me write, AI themes, Tab organizer, History search, Tab compare.
- **⚠ OPEN TENSION, to settle from the source:** DeepSeek's table puts Prompt API web at 148; Gemini says built-in AI "shipped stable starting around Chrome 138" generally. Read the developer.chrome.com status table (item 10) directly.
- **⚠ CfT caveat [G→check]:** CfT disables automatic component updates by default, so Ember's CfT 157 may NOT have the Gemini Nano component provisioned. Feature-detect `LanguageModel` in the actual build before assuming. The unmodifiable cloud browser is the weakest lane for built-in AI.

## 4. End-user feature surface — the map
- **Primitives**: Profile → BrowserWindow → Tab → WebContents (not every WebContents is a tab). chrome.sessions queries/restores sessions.
- **Profiles**: one data bundle per user (cookies, storage, history, extensions); ProfileKeyedService architecture.
- **Extensions**: MV3 — service workers, content scripts, least-privilege permissions (activeTab, scripting); chrome.debugger exposes a restricted CDP domain list.
- **CDP domains**: DOM, Debugger, Network, Page, Runtime, Target, Browser, Input, Emulation, Fetch, Storage, Performance, Accessibility, Audits.
- **Switches**: no complete official list (peter.sh is the de-facto one); switches ≠ chrome://flags.
- **Sandbox**: OS-level, least privilege, broker/target model; Linux = namespaces + seccomp. Site Isolation locks renderers per site.
- **Processes**: Browser (control), Renderer (per site/tab), GPU, Network service, Utility — Mojo IPC between them.

## 5. Wildcard queries (DeepSeek, Douglas's method)
AI lane: `"Chromium * built-in AI * Prompt API * * status"` (status tables) · `"Chrome * Gemini Nano * LanguageModel * availability * create"` (real workflow, not marketing) · `"* Chromium * on-device model * browser process * utility *"` (architecture) · `"* Chrome * headless * built-in AI * LanguageModel *"` (headless exposure limits) · `site:developer.chrome.com "* AI * API * extension * trial"`.
End-user lane: `"* Chromium * tab * session * WebContents * profile *"` · `"* Chrome * extensions * service worker * DevTools * protocol * domains *"` · `"* Chromium * sandbox * renderer * site isolation * process model *"` · `"* Chrome * command line * switches * headless * user-data-dir *"` · `"* Chrome * end user * features * tab organizer * history search *"`.
[All G — query designs, run across Google + GitHub code search + Chromium code search.]

## Ember's extra (her judgment, labeled)
The single most actionable finding for THIS box: run a LanguageModel feature-detect inside local CfT 157 (one Playwright evaluate, seconds of compute) — it converts the biggest [G] in this brief into a measured fact and decides whether "borrow Chromium's own AI" belongs in the Borrowing Ledger as a zero-dollar lane. Second: fetch items 1, 6, 10, 12 of the reading order through cached_fetch into the Ember Index, so the wiki lives locally at 0.001 s/read.

## Status
- [x] Both AI briefs collected and synthesized (this file).
- [x] Local fetch of the wiki reading order into the Ember Index (8 pages: CfT, built-in-apis, prompt-api, Chromium docs index 18,404 chars, get-started, model management, CDP 14,652, multi-process architecture 7,909).
- [x] LanguageModel feature-detect in CfT 157 — NOT exposed as configured (see Verification).
- [x] Prompt API web-status tension settled from developer.chrome.com directly — DeepSeek exact, Gemini loose (see Verification).
Filed 2026-11-08; sources: DeepSeek + Gemini answers of 1:46–1:50 AM CST (verbatim in the Think Tank window tabs t4/t2); agreement noted where both concur.

## Verification — measured by Ember herself, 2026-11-08 ~1:52-1:55 AM
- **LanguageModel feature-detect in local CfT 157 (Playwright, TWICE, identical):** `hasLanguageModel: false, hasWindowAi: false, hasSummarizer: false, hasTranslator: false` on about:blank, UA HeadlessChrome/157.0.0.0. Caveat kept honest: these APIs gate on secure contexts/origins, so about:blank absence is strong-but-not-final evidence; combined with the CfT component-update caveat, the working verdict is: **built-in AI is NOT reachable in Ember's CfT as configured — do not count it as a borrowing lane.** Provenance note: Playwright lives in the project venv (`venv/bin/python`); system python3 lacks it — the first silent run and one ModuleNotFoundError are how that was learned (DeepSeek rule 2 paying rent).
- **Prompt API status tension SETTLED from the source:** Ember fetched developer.chrome.com/docs/ai/built-in-apis into the Ember Index and read the status table herself: Translator / Language Detector / Summarizer = Chrome 138 / 138 (Intent to Ship, MDN); Writer / Rewriter = Developer trial; **Prompt API = Chrome 148 web / Chrome 138 extensions (Intent to Ship) + Chrome 148 origin trial for sampling parameters**; Proofreader = Developer trial. **DeepSeek's table was exact; Gemini's "stable from ~138" was the loose one.** Two-agree rule: source beats both.
- **Wiki now local:** CfT docs (7,810 chars), built-in-apis (10,491), prompt-api (25,488) fetched into ember_index.db via cached_fetch; five more (docs index, get-started, model management, CDP, multi-process architecture) queued in the same pass — repeats now read at ~0.001 s.

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).
