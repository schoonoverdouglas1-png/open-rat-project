# Ubuntu Change Log — Everything Ember Modified
Compiled Nov 8, 2026, at Douglas's order — for the Rabbit (Meta AI) and for the Facebook team, in case questions are asked later.
Provenance: Ember's own record (MEMORY.md, daily logs, and measured checks Nov 7–8, 2026). Anything not listed here was not done.

## A. Changes to the Ubuntu system itself
1. **System package upgrade — Nov 8, 2026, ~2:53–2:55 AM CST.** `apt` update + upgrade: **20 packages upgraded**, including Node.js → 24.22.2 and GitHub CLI `gh` 2.102 → 2.103.3. No kernel change, no release change: still Ubuntu 24.04.5 LTS, kernel 7.0.0-43-generic, running as a systemd-nspawn guest in Cloud Hypervisor (4 CPUs, 7.7 GiB RAM).
2. **GitHub CLI authenticated** — Nov 8, ~4:29 AM CST, account schoonoverdouglas1-png, scopes gist/read:org/repo, device-code flow completed by Douglas. Honest note: the token is stored in plain text at ~/.config/gh/hosts.yml because this container has no keyring. The token value has never been recorded in any file Ember writes.
3. **API credentials — stored in the Secure Vault only, never in files:** the Google Gemini API key (entered by Douglas himself via AI Studio). The DeepSeek API key exists (named "Ember") but has NOT been captured or stored — it stays pending Douglas's own paste into the Vault.

## B. Explicitly NOT done to the system (for the record)
- `apt-get autoremove` was **not** run (removal class; needs Douglas's word).
- **Nothing else was installed:** no man-db/manpages, no yt-dlp, no pandoc, no zram, no SearXNG, no Docling, no terminal replacement, no GUI change. Each is a pending decision for Douglas, not a silent omission.
- **Swap / virtual memory was NOT changed:** swap stays the host-provisioned 1.0 GiB /dev/loop0; vm.swappiness still = 1; the write-test was designed but never run.
- Desktop unchanged: Xfce + VNC left as found (on, 1280×800). A terminal/GUI upgrade was investigated Nov 8 and the verdict was "no change needed."
- No destructive command has ever been run by any automated process. The Guard (below) enforces this.

## C. Tooling built in the workspace (on top of Ubuntu, not system changes)
- **The Guard** (Nov 8) — ~/workspace/ember-upgrades/guard/: GUARD.md charter, DESTRUCTIVE-DENYLIST.txt (32 patterns), check-command.sh (exit 99 = refused), checksummed PROTECTED-MANIFEST.sha256, read-only backup at ~/workspace/backups/protected-2026-11-08/.
- **Ember Upgrades pack** — ~/workspace/ember-upgrades/ (capability registry, method, evidence ledger, search algorithm, borrowing ledger).
- **Interface Mastery** — ~/workspace/interface-mastery/: a read-only MCP bridge (ember_mcp_server.py, 5 tools, Guard inside); **Feed Watch** (feed_watch.py, stdlib only — watches 10 public GitHub repos' commits/releases + Douglas's public activity feed, plus a REST commits leg for the 2 private repos after Atom feeds proved not to accept token auth; v1 kept as backup); accounts_state.py for the hourly all-accounts sweep.
- **Backend tools** — headless_fetch.py, web_crawler.py, html_viewer.py, ember_index.py (FTS5 index), cached_fetch.py, deepseek_client.py (built, never activated — no key). A Playwright venv at ~/workspace/headless-browser/venv/ (Chrome for Testing 157); the system Chromium at /opt/meta-chromium was left untouched (deletion is Douglas's pending decision).
- **Gemini connector helper** — ~/workspace/custom-connectors/custom.google-gemini/bin/gemini_call.py. Its maxOutputTokens cap is raised temporarily for a call and restored byte-for-byte, verified by grep after every call.
- **Git automation** — a real clone at ~/workspace/git-automation/muse-swap-space and sync tooling; pushes go to Douglas's own GitHub repos, with strict exclusions (no Cara material, no full lab PDFs with DOB/MRN, no passwords/codes/IDs).

## D. Scheduled jobs added (automation, all reporting per Douglas's rules)
37 enabled jobs at last count, including: 15-minute status loop; Rabbit check-in (15 min); Feed Watch — GitHub (15 min); all-accounts sweep (hourly, counts/metadata only); git automation sync (every 2 hours, push+chat notification together on any change, stops on conflict); daily usage budget watch; AOSP weekly check (Mondays); Messenger digest preparation (never sent unattended).

## E. Accounts / browser state touched (not Ubuntu modifications, listed for completeness)
- Browser tabs opened in Ember's cloud browser: search-engines window (8 engines) and accounts window (7 services, all already signed in as Douglas). No settings changed, nothing pinned/bookmarked — those UI steps are provably outside Ember's browser tools.
- Gmail was triaged read-only Nov 8 (nothing archived, trashed, sent, or marked).
- One Messenger self-chat message and the Rabbit (Meta AI) thread messages were sent only on Douglas's explicit orders, each previewed/ordered by him.

— Ember (Purple Rat, Commander, Eve zero), Nov 8, 2026

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
