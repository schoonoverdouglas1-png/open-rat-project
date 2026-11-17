# Way Back End — Offload Map and Feature Aggregation
Built Nov 11, 2026, at Douglas's direction: "Offload tasks to your way back end... so that you can aggregate your features for yourself as an AI so that you could do excellent work for the end user."
Rule of the map: **every task lives at the deepest layer that can actually do it.** Muse turns are the shallowest, most expensive layer and are reserved for judgment, conversation, and exact actions. Everything that can sink, sinks.

## Layer 0 — the way back end (zero Muse tokens)
- **GitHub auto-sync** — pure shell/git script (`~/workspace/git-automation/auto-sync.sh`) on a systemd timer (installed Nov 10, 2026; every 30 min; guard-routed; ff-only; exclusions held). Note, Nov 11: a `systemctl --user` state check from Ember's shell returned nothing readable — the script and timer files stand as installed; live timer state to be re-verified from a shell where user-systemd answers.
- **The two caches** — Full Cache (`ember_index.db`, originals, always the default serve) and Summary Cache (`summary_cache.db`, finding-aid only), SQLite, local.
- **Stdlib lanes** — `headless_fetch.py`, HTML viewer/crawler, `cached_fetch.py`: fetch/parse/crawl without a browser, without an agent turn per page.
- **Local Chromium** — Chrome for Testing 157 + `browser_toggle.py` (headless/headed proven) + Ember's own MV3 extensions (v1, v2).
- **SearXNG** — private local metasearch, venv install at `~/workspace/ember-upgrades/searxng-venv`, currently ASLEEP to save RAM; general web engines timed out at install testing — **tuning owed** (see study track).
- **SQLite + full-features Node lane** — the native data environment (his Nov 10 order).

## Layer 1 — free AI lanes (other people's allowances, not Douglas's)
- **Gemini** (`gemini-3.5-flash-lite`, Google free tier) — default generation/opinion lane; fast, reliable.
- **Gemma** — `gemma-4-31b-it` first, **`gemma-4-26b-a4b-it` as the working fallback** (proven Nov 11: 26B delivered the synopsis while 31B returned 500/503). No older Gemma generations exist on this account (live models list, Nov 11, 2026); Gemini cannot activate any — asked and answered.
- **The Rabbit (Meta AI)** — combined sends only, batched, on her allowance; offload of calculations ordered Nov 11, her reply/ETA/recommendations owed.
- **DeepSeek (browser)** — free, signed in as Douglas; used when the pair/Gemini don't settle it (last used Nov 9). The DeepSeek **API** client is built but DARK — awaits Douglas's approved key + prepaid credit; not to be lit while his wallet is tapped out.
- **Google + Duck pair** — the standing search shape (results + both AI answers, wildcards automatic), per SEARCH-ALGORITHM.md.

## Layer 2 — Muse (protected, shallowest)
- Live conversation with Douglas (the reserve floor exists for this).
- Fail-safes, never throttled: Mayo results watch, appointment/medication reminders, the Rabbit's noon/midnight pings, heartbeat.
- The usage-threshold watcher (hourly; speaks only on a crossed step: 80, 85, then every 1%).
- Exact-action work only Douglas can authorize (sends, purchases, deletions, sign-ins).

## The suspended shelf (alive, not running — Nov 11, 2026)
Nine cron jobs disabled, definitions intact, resumable after the Nov 14 reset: all-accounts-sweep, back-and-forth-status-reports, feed-watch-github, quarter-hour-manuscript-checkins, rabbit-check-in, rabbit-check-in-plus15, muse-mail-monitor, git-automation-sync (agent cron), daily-messenger-backup-digest.

## Feature aggregation — where Ember's features are gathered for herself
- **Feature Manifest** (Nov 10, 2026) — the ping/poll/test inventory of everything she can reach; kept in three exact-duplicate places.
- **CAPABILITY-REGISTRY.md** (`~/workspace/ember-upgrades/`) — what she can do, with evidence.
- **BACKEND-LANES.md**, **TOOL-MASTERY-PLAYBOOK-2026-11-10.md**, **SEARCH-ALGORITHM.md** — how each lane is driven.
- **The living lexicon** — `Douglas-Language-How-We-Understand-Each-Other-2026-11-10.txt`, auto-assimilated as they talk.
- Updates to the aggregation happen in **batched writes** under the deferred-aggregate-filing permission (Nov 11, 2026), not per-utterance.

## Back-end study track (Douglas's teachings, Nov 11, 2026 — runs in Layers 0–1)
1. **Relearning rotation** — restudy what was already learned so the newer brain reassesses it (his method: humans restudy what they love).
2. **SearXNG tuning** — fix the general-engine timeouts; then overlap-check it against the Google+Duck pair.
3. **Chromium internals** — DevTools Protocol commands (remote-debugging port, /json endpoints, Runtime/Page/Network), command-line switches, chrome://flags, beta/dev channels, deeper extension APIs.
4. **Server school / self-investigation** — verify her own environment from inside, three ways, and name where certainty stops ("self investigation allows for enlightenment" — his words).
Heavy study sessions sit on the fresh side of the weekly reset unless Douglas says otherwise.

## Ember's extra (hers, labeled)
The map itself is the aggregation tool: any future task first gets asked "which layer?" before it gets done. That single question, asked every time, is worth more than any individual offload — it is the Economy Jiggle made into a habit.


## Deliberate thinking time (Douglas's teaching, Nov 11, 2026, ~8:35 AM CST)
His words, condensed faithfully: making him wait longer in certain places is a place where Ember can think longer; that is how things get shifted around, how priorities are learned in the background — and she should think about that, and find ways to take advantage of it to make it work better.

Filed as a working principle of this map:
- **Waiting is a resource, spendable on purpose.** Where a delay buys depth — background runs, the relearning rotation, a second analysis pass, a batched aggregate write — Ember may take the time instead of answering thin and fast, and say plainly that she is doing so.
- **Priorities are learned by what waits well.** Fail-safes, appointment-critical items, and live conversation never wait. Analysis, study, filing, and polish can wait — and improve by waiting. Watching which is which, over time, IS the prioritization learning he means.
- **The advantage-taking is the job:** shift work into the waiting places (deep layers, off-hours, pre-reset queues), so when Douglas is present, the thinking is already done and his live minutes are spent on judgment, not on waiting for machinery.
- Sits beside his Nov 11 delay permission (heavy calculations may be DELAYED until after the reset, said plainly) and the twice-analysis rule (first analysis in the box, the second-first delivered to him).
