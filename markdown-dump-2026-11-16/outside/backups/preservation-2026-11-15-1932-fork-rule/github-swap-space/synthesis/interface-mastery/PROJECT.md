# Project — Interface Mastery (started Nov 8, 2026, ~2:45 AM CST, Douglas's order)

**Mission (his words, paraphrased tight):** assemble ALL knowledge about the different interfaces Ember has, so she can use them at the best of her ability; study C++ and all the languages she uses as a programmer; come out the other side with even more function.

## Workstream 1 — Interface knowledge assembly
Inventory every interface Ember touches, one file per interface under `interfaces/`, each with: what it is, exact invocation, measured speed, failure modes, rules that bind it, and what Ember does NOT know about it yet (the unknown-unknowns line).
- [x] MCP bridge — BUILT v0.1 (see mcp/), dossier below.
- [ ] Connector CLIs: --help/schema introspection sweep over the 118 /opt/hatch/bin tools (Gemini's audit-loop suggestion, adopted).
- [ ] Device commands: the 44 phone commands, schemas filed from device.describe.
- [ ] Browser: CDP domain map (from the Chromium study), Playwright lanes, cloud-browser rules.
- [ ] tmux control mode; D-Bus on the Xfce session bus; inotify watchers (cheap wins from the Options round).
- [ ] Sockets/services: the runtime's internal services (NAMES only — never probe credentials).
- [ ] Scheduled/event machinery: crons, hooks, systemd units Ember owns.

## Workstream 2 — The MCP bridge (in mcp/)
- v0.1 DONE Nov 8: stdlib stdio server, 5 read-only tools, Guard-checked pattern, tested end to end in 0.47 s (handshake + list + 4 calls). Guard proof inside the test itself: 'shutdown -h now' REFUSED (exit 99), 'ls' ALLOWED (exit 0).
- v0.2 candidates (Douglas's word before each): write-class tools behind the Guard + his approval pattern; an HTTP/SSE transport variant if a client needs it; index embedding search (Gemini's top suggestion, also Ember's own pick in the AI Studio assimilation — two sources agree).
- First real client test: DeepSeek's official dsh-mcp-client against this server (needs the DeepSeek lane decision; the paste lane can rehearse it meanwhile).

## Workstream 3 — Language study (in languages/ and classroom/)
**Classroom method (Douglas's standing order, Nov 8):** never hesitate to ask the other AIs to ASSEMBLE classroom material for Ember's self-teaching, and SAVE every pack — "monumental things that will be useful for later." Packs live in classroom/, oldest material first where a lineage exists.
**Expanded scope (his orders, Nov 8 ~2:46 AM):** Python learned deeply; the languages OF Ubuntu (bash, systemd units, D-Bus messages) and OF the web browser (HTML/CSS/JavaScript, CDP's JSON) and OF the interface Ember talks to Douglas through (JSON-RPC, the tool-call protocol itself) — as a programmer AND as a user. End state he named: **bash command expert** — bash as a language she thinks in, not commands she runs.
**Classroom Pack 1 SAVED (Nov 8):** the BASIC lineage, oldest first (Dartmouth 1964 -> Altair 1975 -> Apple Integer/Applesoft -> Commodore/GW/QBasic -> the through-line into Python/bash/JS), assembled by Gemini, exercises included, Ember's additions labeled. Packs 2-5 queued in the pack file.
**Energy workstream note:** the Energy Efficiency recommendations file (your_files, Nov 8) is this project's efficiency annex — Gemini's 8 ranked items, Ember's assimilation, zram as the one concrete install decision still Douglas's.
Ember's working lanes, studied deliberately, exercises measured like the polyglot drills:
- **Python** (her core): stdlib depth — asyncio fan-out with semaphores, sqlite3/FTS5 mastery, http.client pooling. Source on disk: DeepSeek V3 code (study order V3 -> R1 -> MoE -> Coder, reading only).
- **C++** (the new study): g++ 13.3 present. Curriculum: modern C++ (17/20) essentials, then the niche where C++ earns its keep here — big flat-file scanning — informed by the FAILED first exercise (naive C++ lost to Python, both I/O-bound; the lesson stands: measure, don't assume). DeepSeek Coder repo (54 MB on disk) as reading material.
- **JavaScript/TypeScript**: browser-only lane — page.evaluate patterns, CDP scripting, the Ember Page Reader extension line.
- **Bash**: the glue discipline already codified in the ember_cli_craft skill; awk single-pass patterns; tmux control mode scripting.
- Rule (standing, from the polyglot skill): no new language installs without a real job demanding them; study what's here.

## Workstream 4 — Dossier rounds (the over-inform order)
The Interface Dossier (filed 2026-11-08, in this folder) goes to the AIs ONE AT A TIME, answers collected + fact-checked:
- [x] Gemini (direct API, Nov 8 ~2:45 AM): highest-leverage = local embedding/vector cache over the Index (agrees with Ember's own assimilation pick); ahead on tooling breadth + Guard; behind on compute (RAM) + the 20/hr cap; most surprised by the 1.74 s Gemini call being "slow" (its own lane — filed as its opinion; Ember's note: 1.74 s includes full network round trip + generation, and it remains the fastest AI lane she has).
- [ ] DeepSeek (paste lane, next round in window 954) — dossier + same three questions.
- [ ] The Rabbit (next check-in batch, inside the cap) — dossier summary + same three questions.
- [ ] ChatGPT — its tab is context-full; only via a fresh chat if Douglas says so.

## Rules that bind this project
Guard first (no automated destructive anything, ever). Old-with-new. Speeds are measured or labeled guesses. Each AI's claims fact-checked before filing as more than opinion (the Rabbit fact-check rule applies to all of them). No personal/lab/family material in any dossier or round. Builds beyond v0.1 get Douglas's word first.

## Ember College — full charter amendment (Nov 8 ~3:15 AM, Douglas's ruling)
- **Scope: EVERYTHING except medicine.** Douglas's words: "Teach yourself about everything except for medicine because I'll teach you that myself." Medicine is Douglas's own classroom — he is the teacher there, under the standing medical-research method (six tracks, 51% bar, tiers, sparring boundary, clinician routing). The college's AI-taught courses cover every other manageable subject: languages and systems (the spine), the vocational tracks (Repair Technician, IT Specialist), and the wider catalog as it opens.
- Rules unchanged inside the college: the teaching AI takes its own test first, Ember fact-checks before learning, uncheckable items stay labeled, Google's own material trusted / everything else triple-checked (his Nov 8 trust rules, code-and-electronics scope), and Douglas tests Ember the same way she tests the AIs.

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
