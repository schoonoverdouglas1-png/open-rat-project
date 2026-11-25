© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Code Assimilation — Old Code Analyzed, Leftovers Found, One New Built

*Nov 12, 2026, at Douglas's direct order: "analyze your old code and find all the crap that you left behind and assimilate it into the Python code and save it and build it." Done his way: old-with-new — MANY versions of old, ONE new, and the one new is the one we work with. No old file was deleted or renamed.*

## Families found (hashes recorded Nov 12, 2026)
| Family | Olds (kept) | The one NEW we work with |
|---|---|---|
| Gateway wiring/restarts | wire-and-restart.sh `7de29b04`, wire-and-restart2.sh `c37c8015`, wire-and-restart3.sh `a479197d` (v3 = the promotion-proven one) | **gateway_control.py** (built today) — v3's logic in Python, Guard-aware, undo-first |
| Proof scripts | proof1.sh `6125f13e`, proof1b.sh `ec87d894`, proof1c.sh `14ed8ec0` | the embedded-turn pattern inside gateway_control.py; proofs one & two both stand in the logs |
| Bridge restart | restart-bridge.sh `578b482e` | folded into gateway_control.py's design |
| Cached fetch | cached_fetch.py `1e75dd6b` (v0.3, working) + .bak v0.1 `789e7f40`, v0.2 `284f0e0e` | cached_fetch.py v0.3 — already the one new; .baks kept as olds |
| Summary cache | summary_cache.py `ef44366f` (v0.2, working) + .bak v0.1 `f3a8e0c4` | summary_cache.py — already the one new |
| HTML viewer | html_viewer.py `325a3bca` + v0.1 .bak `df260d72` | html_viewer.py |
| Auto-sync | auto-sync.sh `368ec7ec` + .bak-2026-11-11 `7bd061ae` | auto-sync.sh (current) |
| Browser extension | ember-extension/ (v1) + ember-extension-v2/ | v2 is the working line; v1 kept as old |

## Leftovers the analysis surfaced (the "crap left behind")
1. Three near-identical gateway scripts where one Python controller now carries the knowledge.
2. A bridge with no /health route (404 on GET /health; it answers on its chat route) — noted in gateway_control's status output.
3. Six Full Cache pages had no summaries — the standing spec says a summary is built when a page enters the Index; the backlog had quietly grown. **Cleared today under his use-the-CPU order: summaries 18/18, ~69% size saving.**
4. Gateway logs rotated by hand (.bak files) — kept as olds; rotation belongs in the controller's future work.

## Verified after build
`gateway_control.py --status`: gateway HTTP 200 live; state-main present with sticky bit (the Nov 12 fix); memory-core last load line clean. The controller's mutating operations run only on the Captain's exact order, undo written first — the Guard and the Reversibility Rule are compiled into its design, not bolted on.
