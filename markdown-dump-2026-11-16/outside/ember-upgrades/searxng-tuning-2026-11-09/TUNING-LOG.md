© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# SearXNG auto-tuning log — 2026-11-09 ~20:14–20:20 CST
Authorized by Douglas in voice call: "Go ahead and tune it right now if you can" / "Auto tune all things to the best of your ability" / "add those search engines in all ways that you can, especially all the free ones that you found."
Undo: settings.yml.before-tuning in this folder restores the pre-tuning config exactly (see UNDO-TUNING.md).

## Baseline (default settings, request_timeout 3.0s)
- Cold engines hit the 3.0s timeout wall (duckduckgo/brave/startpage/mojeek/yahoo all ~3.0s on first hits).
- google: Suspended/access denied. qwant: CAPTCHA. yahoo: timeout (direct upstream HTTP 500). duckduckgo: intermittent CAPTCHA.
- Warm default search worked (~0.9s, 34 results) via google cse/bing/brave/startpage.

## Changes (all in searxng-config/settings.yml only)
- outgoing.request_timeout 3.0 -> 12.0; max_request_timeout 20.0; pool_maxsize 30.
- Per-engine timeouts 10-12s for brave/duckduckgo/wikipedia/yahoo (before round-2/3 disables).
- Disabled (measured broken): google, qwant, yep (access denied), sogou (crash), seznam (timeout), yahoo (HTTP error), duckduckgo (intermittent CAPTCHA - replaced by duckduckgo web).
- Enabled free engines shipped disabled: marginalia (runs, returns empty via SearXNG tonight - its keyless API lane stays separate), yep (failed, disabled round 2), yandex (WORKS, 10 results), sogou (failed), seznam (failed), duckduckgo web (WORKS, 10 results).

## Final verified state (round 3)
- Cold search "pneumonia": 2.0s, 46 results + 1 Wikipedia infobox, ZERO unresponsive engines.
- Search "quantum medicine fungi": 1.6s, 54 results, ZERO unresponsive.
- Contributing engines: brave, duckduckgo web, google cse, yandex (+ startpage/mojeek/bing/wikipedia in their categories; Wikipedia answers via infoboxes, verified).
- Server stopped after tuning to save RAM; starts on demand with SEARXNG_SETTINGS_PATH=~/workspace/ember-upgrades/searxng-config/settings.yml and the venv python -m searx.webapp.
