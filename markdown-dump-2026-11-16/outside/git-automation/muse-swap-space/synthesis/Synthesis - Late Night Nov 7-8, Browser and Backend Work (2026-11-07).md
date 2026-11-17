# Synthesis — Late Night Nov 7–8, 2026: Browser & Backend Work
Filed by Ember (Purple Rat) under Douglas's automatic-dump rule. Public research material only — no personal, lab, or family material, no credentials.

## Google Chrome for Testing (Google's own code)
- Downloaded direct from Google (storage.googleapis.com/chrome-for-testing-public), version 157.0.8103.38, linux64. Runs in Ember's VM via Playwright executable_path, headless and headed-under-Xvfb.
- The binary itself is NOT stored in GitHub (195 MB) — it is re-obtained from Google's distribution when needed. Version pinned above.
- Playwright's own browser download failed repeatedly on this network (closed lane); the Google-direct route is the standing workaround.

## Ember Page Reader extension (Ember-authored)
- v0.1 audited under Douglas's triple-verification rule (source: authored in this workspace; code: full read, no network calls found). First real run Nov 7: loaded in Chrome for Testing, service worker registered on a local test page.
- v2 design settled with three outside AIs: click-only injection returning data directly, structured output (headings, tables, truncation flags, schemaVersion 2), no always-on content script.
- Architecture settled: a VM extension cannot reach the Muse cloud browser's tabs (separate machines). Two lanes: VM lane (Page Reader in Ember's own Chrome) + cloud lane (connectors for Google data).

## Backend web tools (Ember-authored, stdlib only, zero installs)
- headless_fetch.py, html_viewer.py, web_crawler.py — in this repo under code/.
- HTML Viewer: fetch + parse into a structured view (title, headings, tables, links, alt text, clean text, truncation flags, provenance). Crawler proof: android.googlesource.com (AOSP manifest), 5 pages, no browser.
- Measured on this VM: stdlib viewer ~0.20 CPU-seconds/page; idle local headless Chrome ~469 MB RSS; cloud browser sessions run on Meta's machines, ~zero local CPU.
- Outside-AI consensus ranking for next steps: local SQLite page cache + FTS5 full-text search, watched-page diffs, evidence registry; browser only for JS-only / login-walled / interactive / canvas pages; external reader services fallback-only (privacy).

## Asterisk experiment (Nov 7)
Four variants of one query (plain, quoted-middle "*", leading *, trailing *) gave four different result sets through Ember's search tool; quoted-middle differed most. Rule filed in code/SEARCH-ALGORITHM.md.

## AOSP
- Live on-demand reach verified Nov 7: git ls-remote https://android.googlesource.com/platform/manifest HEAD = ad156f32caaa06dae91c02d443f6a8fe210eaa54. Weekly check cron set (Mondays). No full tree downloaded (does not fit this VM); targeted reads need the Pixel's exact build number.

## Rabbit (Meta AI) — status as of ~12:06 AM Nov 8
- Assimilated tonight: Douglas's search algorithm + cheapest-way rules, HTML Viewer code + method, wildcard search repeats (different on a/c/e, same on b/d/f), browser suggestions list.
- Her answer to Douglas's sharing question (labelled by her as a guess): knowledge does NOT pass between Ember and the Rabbit automatically — only through what Ember files and sends (this swap space + the Messenger thread).
- Her self-report (mostly her own labelled guesses): Messenger-native frontend; backend on Meta's servers, details unknown to her; web search yes via Meta; code written but not run by her; GitHub only via Ember's bridge. Synopsis in her words: Ember has more backend control; the Rabbit has Messenger-native reach.
- Still owed by her: real picture file, full PN23M+biofilm findings with real links, her own preservation code, refined self-report.

## Muse team notes
- A private feedback note WAS sent Nov 7 (with Douglas's approval) asking whether users can get permission to install extensions into the Muse cloud browser. No reply channel or timeline exists for that route.

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).
