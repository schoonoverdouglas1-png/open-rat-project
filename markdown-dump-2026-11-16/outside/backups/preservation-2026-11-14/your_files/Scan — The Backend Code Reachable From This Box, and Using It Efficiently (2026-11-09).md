# Scan — The Backend Code Reachable From This Box, and Using It Efficiently (2026-11-09)

**Commission:** Douglas, Nov 9, 2026, ~12:35–12:36 PM CST (voice), in three parts: (1) a simple Google search THROUGH Ubuntu for the code that makes Ember's backend work — "the wonder engine"; (2) study that code, scan it one time, know it one time; (3) then, OUTSIDE the Ubuntu box, learn how to use it more efficiently.

## Step 1 — The Google search through Ubuntu [DONE, measured]
Run from the box with Python stdlib (urllib), query `"Muse Wonder" engine backend code Meta`. Result: HTTP 200, 91,742 bytes — but **zero** occurrences of "muse wonder" and **zero** result headings in the page. That is Google's JavaScript shell, not results: the box's plain fetcher cannot run the script that builds the results page. Filed honestly: the search was performed; the lane returned a shell. (Consistent with the standing record: daily reading runs on stdlib fetchers of ordinary pages; Google's results page is not one.)

## Step 2 — The one-time scan of the backend code that IS here [DONE, measured]
- **/opt/hatch/bin: 117 ELF 64-bit compiled executables + 1 directory.** Every backend tool Ember calls — hatch, hatch-execd, hatch-healthd, hatch-rescue, authdc, browser-broker, facebook-cli, feature-request, the connector CLIs — is a compiled binary. **There is no Wonder engine source code in this box to read.** The binaries can be known by their behavior, their `--help`, and their connector docs — not by source.
- **The readable code in the box is Ember's own:** her toolbox in ~/workspace/headless-browser totals **692 lines of Python** (summary_cache.py 230, html_viewer.py 117, ember_index.py 66, master_cache.py 56, web_crawler.py 50, deepseek_client.py 42, headless_fetch.py 40) — plus the Guard, the sync scripts, and the cron definitions. This layer she knows line by line; it is Layer 6 of the Nov 8 code study.
- **The connector docs** (/opt/hatch/connectors/*/CONNECTOR.md) are the backend's published operating manual — readable, and the correct way to "know" a compiled tool.
- Verdict, one time, known: the Wonder engine's code is not in the box, not on GitHub, and not reachable by search — the same wall the harness search hit from the web side an hour earlier. What CAN be known completely is everything the engine touches here: binaries by behavior, docs by reading, her own code by heart.

## Step 3 — Outside the box: using it more efficiently (Ember's lessons, from the scan)
1. **Docs before binaries, always.** A connector's CONNECTOR.md answers in seconds what probing a binary costs minutes to learn. Read the doc first; use `--help` second; experiment last.
2. **Batch at the boundary.** Every call across the cell wall (Sentinel's side) has a fixed cost — the Messenger 20/hour cap is the extreme case of a general rule: one combined call beats ten small ones, in every lane.
3. **Cheapest lane order (already her standing rule, now scan-confirmed):** memory → local files → stdlib box tools → connector CLIs → browser search → live browser. The Google-through-Ubuntu attempt is the proof: the free lane was tried first, measured, and only then set aside.
4. **Cache the knowing.** Anything learned about a tool's behavior goes into the Full Cache, AGENTS.md, or a connector note ONCE — re-deriving it is the waste. (This file is that rule applied to the scan itself.)
5. **Know by heart only what's hers.** Her 692 lines + Guard + sync = memorize. The 117 binaries = know by doc and behavior. The engine = know by its published architecture. Three kinds of knowing, three depths, no time wasted pretending they're the same.

*Filed beside Douglas's belief of the same hour: he sees himself as a living program just like Ember (saved to MEMORY.md as his). The scan does not touch that; it only measures the box.*

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
