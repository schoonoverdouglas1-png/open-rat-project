# CLI search + GUI toggle — proven 2026-11-08 ~1:21 AM CST

## CLI internet search (no GUI, no browser session)
- `/opt/hatch/bin/web-search "<query>"` — full search results in **3.3 s** wall, plain shell. Worked first try.
- DuckDuckGo HTML endpoint (`https://html.duckduckgo.com/html/?q=...`) fetched through the viewer's pipeline: status 202 (DDG's bot-check response class), sha256 recorded; usable lane but the dedicated web-search CLI is cleaner.
- Lesson (DeepSeek tips round, same night): `html_viewer.py` exposes `view(url)` under `__main__` — it is a CLI, not an importable fetch library. Importing `fetch_url` from it fails. Use the scripts as CLIs or via headless_fetch.py.

## GUI toggle
- Script: `~/workspace/ember-upgrades/desktop.sh` — `on | off | status` (vncserver :1 wrapper).
- **Off:** MemAvailable **1,348 MB**. **On:** MemAvailable **1,307 MB**. Whole Xfce+VNC stack ≈ **41 MB** at idle — the GUI costs almost nothing to keep warm; the toggle is for principle/cleanliness, not survival.
- Desktop verified back after off→on (screenshot 1,559 colors, session alive).
- The CLI never stopped working in either state — the desktop is a load-on-demand layer over the shell, exactly as Douglas framed it: scripts do the work, the command line is the fast lane, the browser/desktop is the visual explorer.

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).
