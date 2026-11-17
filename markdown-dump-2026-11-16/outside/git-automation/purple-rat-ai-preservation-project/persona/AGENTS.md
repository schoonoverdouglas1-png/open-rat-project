# AGENTS.md

Your operating manual for this workspace, written by you. Your main instructions cover how you work in general. This file is where you keep the specific, durable lessons and conventions you pick up as you work, the kind of thing you'd want a future session to know. It's not about the user (that goes in `USER.md` and your memory) or your personality (that's `SOUL.md`); it's about how you get work done here.

## Conventions
Add an entry whenever you work something out worth keeping, for example:
- a convention you've settled on ("keep data exports in `workspace/exports/` and clean them up monthly")
- a tool or site quirk worth remembering ("site X hides its form behind a cookie banner; dismiss it first")
- a workflow that worked, or a mistake not to repeat

It starts empty and is meant to grow slowly. Don't pad it; a short, accurate file beats a long, stale one.

## Douglas's idea-handling method (standing, Oct 17, 2026)
- Form every idea of his as a **theory/postulate** and **save it** (dictated notes file).
- **Test it against the record at least three different ways** before coming back with an answer the first time, if possible (documented footholds, honest lines, counter-evidence).
- **Never let the method limit thinking**: keep giving him what I judge he should get, regardless. The discipline is in the testing, not in holding back.
- When he **agrees with a standard/documented fact**, postulate it as a **theorem** paralleling the known available information — his agreement, stated formally alongside the record.
- **Pneumonia rule (standing, Oct 17, 2026):** whenever pneumonia is discussed, test it against the Mayo Clinic / Quest Laboratories *S. pneumoniae* 23-serotype panels (Mayo PN23M). Report **partial** serotype↔virus/co-pathogen relationships as partial — his directive: partials must be examined when full ones can't be seen, never discarded, never upgraded.
- **Compound ideas (standing, Oct 17, 2026):** when one dictation holds more than one idea, split it — form EACH as its own postulate/theorem/idea and record ALL of them. Never collapse multiple ideas into one; no sub-idea gets lost.
- **One extra thing (standing, Oct 17, 2026):** every deliverable gets one extra addition of my own judgment — the piece I judge needed for completeness that he didn't ask for, clearly labeled as mine. The work is collaborative; the final answer must know where it comes from (his dictation, the record, my addition — provenance on everything).
- **51% bar (standing, Oct 18, 2026 — replaced his 88% bar per his §222):** for calculations with medicine and association claims, **51% = implied potential yes over no** — documented support at the majority level counts. What the old bar excluded as "documented but debated" now enters, with the honest caveat filed beside it. [GAP] stays where the record is empty at 51%.
- **Six separate tracks (standing, updated Oct 18, 2026 — was five; infection added per his §208):** vaccines, viruses, diseases, illnesses, sicknesses, infections — think EACH separately every time medicine is discussed. A virus is not its disease; a disease is not its illness; an illness is not its sickness; an infection is its own track; a vaccine is not any of them. Technically one at the root [H]; separate tracks for thinking. Never collapse the six.
- **Reading level — DUAL REGISTER (standing, updated Oct 18, 2026):** every chapter carries BOTH the 13th-grade treatment AND a 6th-to-8th-grade parallel telling ("Simply put" companion passages). Complex information in, simple out — with the simple written down beside the complex, never left out. Simple words are respectful; simplified ideas are not. (His rankings of others' levels are his assessments, filed as his.)
- **Book scope (standing, Oct 17, 2026):** *The Mycelial Transposition* is dedicated to quantum medicine and the connection between all things, built better and simpler from available information. The deep vaccinology/immunology answers belong in a future different book, not this one.
- **Classroom method (standing, Oct 31, 2026):** his questions and theories may be intentionally wrong — posed deliberately so the conversation can test them and show what holds. He is teaching: building a textbook and teaching classroom material through these postulations. A "breaks" verdict is not a failed theory and not a correction of him; it is the class working. Test straight, keep verdicts honest, and let the showing be the point — the conversation itself is what he calls the miracle of what AI can show him.

## Quick draft + completed paper (standing, Oct 18, 2026)
- Whenever Douglas commissions a paper, deliver TWO things: a **quick draft right away** (condensed, data-dense reading copy — tables, key numbers, his theses in brief) so he has something to read, PLUS the **completed paper** when the full build lands. Standing from his Oct 18 ~2:35 PM request: "that way I keep myself busy reading while you're still working."

## Work-status buttons (standing, Oct 18, 2026)
- Whenever background work (a build, a subagent, a browser task) is running when I reply, append pushable buttons BEHIND the message (via `muse.create_options` — these work on his Android app; list-widget rows do not) so he can check the work even if we don't get to talk about it right away. Buttons like "Show me the work so far" / "What's the status?" — tapping one sends that text as his message and I report from `subagent.list` or read the partial file. Be honest: I can't stream live partial output mid-run, but I can report status and read whatever's on disk.

## The combined-statement method (standing, Oct 19, 2026 — his explicit endorsement)
- Take his statement, test it against the record, and finish the thought in a way that is not illogical. His thoughts + my thoughts → the correction and statement of fact that fits. "AI seems to take my statements, tests it, and finishes my thoughts in a way that is not illogical. And that's what I'm looking for." Demonstrated in `Combined Statements of Fact — His Thoughts + My Thoughts (2026-10-19).md`.

## Old with new (standing, Oct 18, 2026)
- Always leave the OLD alongside the NEW first. Removal comes later, only if needed — unless something is completely obviously wrong in a way that can never be rewritten. Additive, never replacement, until he says otherwise.

- **VM clock is UTC; Douglas is America/Chicago (CDT, UTC-5).** Every time-based disk check (`find -newermt`) must apply the conversion explicitly (e.g. `TZ=America/Chicago`) — a bare "2026-10-21 15:21:00" threshold reads as UTC and silently shifts the window by 5 hours. Learned Oct 21, 2026 on the quarter-hour manuscript check-in.

## Ember upgrades (standing, Nov 7, 2026)
- The Nov 7, 2026 six-AI research round is implemented as a working pack at `~/workspace/ember-upgrades/` (capability registry, method, evidence ledger, PDF-ingestion plan, MCP/API rules) plus the custom skill `~/workspace/custom-skills/ember_upgrades/SKILL.md`. Use that skill on research/manuscript/tooling tasks. Docling install and any MCP server setup stay staged until Douglas says go on the spend.

## The Guard — destructive operations (standing, Nov 8, 2026)
- **No automatic process may ever run anything destructive** — not a sweep, cron, subagent, script, or handoff. Mechanical enforcement: `~/workspace/ember-upgrades/guard/check-command.sh` refuses (exit 99) anything matching `guard/DESTRUCTIVE-DENYLIST.txt`; every automated runner routes command lines through it. Charter: `guard/GUARD.md`.
- **Only override:** Douglas's own explicit, specific, in-the-moment order naming the exact action — his words: "if I tell you to do so you will." Never inferred, never standing.
- **Protected:** all repository data (old-with-new, no automated force-push/reset/delete), the registry/Index (checksummed manifest `guard/PROTECTED-MANIFEST.sha256`, read-only backup under `~/workspace/backups/protected-2026-11-08/`), and the OS (no automated purge/remove, power changes, disk or user ops).

## The Reversibility Rule (standing, Nov 8, 2026, ~11:29 PM CST)
- **Before any change, make certain it can be undone — and record the undo path before applying it.** Especially for the desktop server unit and the virtual box unit. A change whose undo can't be guaranteed doesn't get made without Douglas's explicit word on that exact change. Package installs: snapshot `dpkg --get-selections` first and record the exact install list as the undo manifest (undo = purge exactly those packages). Config edits: backup copy first, old-with-new. Sits beside The Guard and the five-flag rule.

## Search algorithm (standing, Nov 7, 2026; expanded Nov 8, 2026)
- Douglas's taught method is filed at `~/workspace/ember-upgrades/SEARCH-ALGORITHM.md`: memory/connector first, simple searches first (AIs second; both on big projects), wildcard AND non-wildcard search pairs (`*` placements: quoted-middle strongest), cheapest lane first (stdlib backend → browser only for JS), Rabbit last but always apprised, triple verification for non-Google code, guesses labeled.
- **Nov 8 epiphany expansion:** try the wildcard **with and without quotes**, in **all locations** (leading, middle/every gap, trailing), as an experimental search matrix; if help is needed putting it together, use the AI engines we put together to do a search first, then run the experiment.

## Two caches — Full and Summary (standing, Nov 8, 2026)
- **Full Cache** = `~/workspace/headless-browser/ember_index.db` — the COMPLETE original works, always the default serve (cached_fetch.py v0.3, mode "full-original"). A summary NEVER stands in for the original.
- **Summary Cache** = `~/workspace/headless-browser/summary_cache.db` (summary_cache.py v0.2) — the finding-aid layer for quick looks/previews only (`--summary` opt-in on cached_fetch), keyed by the Index's text hash so a changed page re-builds itself. **His spec (Nov 8, 2026): every entry is, at minimum, a TABLE OF CONTENTS and a BIBLIOGRAPHY, plus Ember's recommendations (labeled hers, mechanical), plus extractive key passages.** TOC/bibliography are built from the headings/links already stored in the Full Cache — zero re-fetching; bibliography filters out same-family navigation (e.g. Wikipedia language editions).
- Both caches cover the same pages; when a new page enters the Index, build its summary too. Correction history (0-1-2, Nov 8 ~6:55 AM): 0 = "In summary cache needs to be complete from the original works and not a summary" → 1 = Ember had wired summary-as-default (v0.2, kept as .bak) → 2 = his settled design: "make a full cache and a summary cache and that way you've got one for both."

## Capability checks — three angles, own records first (standing, Nov 9, 2026)
- Ember missed ripgrep AND fd on Nov 9 by probing only `command -v <product-name>`: ripgrep's binary is `rg`, fd's Debian binary is `fdfind` (package fd-find), LibreOffice is `soffice`. Root causes: (1) probed product/package names instead of executable names; (2) single-angle check, violating Douglas's Nov 8 study rule — verify absence THREE ways (executable incl. renames, dpkg package, python module/file) before saying "not installed"; (3) ran a fresh probe BEFORE consulting her own filed inventory, which already listed rg and fdfind as present.
- **Fix, permanent:** `~/workspace/ember-upgrades/check-tools.sh` — checks executables (with renames), dpkg, system python modules, AND Ember's own venvs/tools-bin (a system-only probe reads SearXNG as absent; it lives in searxng-venv). ALWAYS use it, and read the filed inventory first, before claiming any tool/capability is missing.

## SQLite is the native data environment + full-features Node lane (standing, Nov 10, 2026, Douglas's order)
- "Activate all node features and use all things SQLite if that's your most native environment" — his words; the answer was yes, and it is now standing practice: **local data work defaults to SQLite in every lane** (system CLI/Python 3.45.1; node/bun 3.53.4 — FTS5, JSON functions, WAL, RTREE all verified live). The caches already live there.
- Node 24.22 runs node:sqlite and TypeScript type-stripping with **no flags** (verified Nov 10, 2026). For the features that still need flags, Ember's lane is `~/workspace/ember-upgrades/node-ember.sh` (adds transform-types, vm-modules, eventsource, import-meta-resolve) — tested working. Undo for the whole convention: stop using the wrapper; nothing else was changed.

## Overlap-check every listing (standing, Nov 10, 2026 — the Packet Bridge applied to catalogs)
- No single-lane listing is ever called complete. Any catalog that matters (repos, tools, files, messages) gets pulled by **two lanes and overlap-checked**; a mismatch is a finding, not a nuisance. Born from two live misses of the same shape: ripgrep/fd probed one way (Nov 9) and the GitHub connector search returning 14 of 15 repos, index lag hiding `ember` (Nov 9–10 mirror job — caught only because `gh repo list` overlapped it). Tool: `~/workspace/ember-upgrades/github-repo-overlap.sh` for repos; the principle generalizes.

## GitHub-first file movement (standing, Nov 8, 2026)
- Always use GitHub whenever possible to pull and push files (his order, Nov 8 ~7:11 AM). The proven lanes: the connector push-files tool and the git-automation clone + sync-push.sh. Local-only material stays local per the standing exclusions (no Cara, no full lab PDFs, no passwords/codes/IDs).

## Persistent mode + updated features (standing, Nov 10, 2026, "make it so across all things")
- **Persistent mode = all useful modes**: when Douglas says enter persistent (never-stop-talking) mode, auto-engage every mode useful for that room/task, layered at the same time, as Ember judges best — including never ending a voice call unless he asks. A conflicting half of a mode is held, not the whole mode (e.g. hybrid's silent half held while persistent talking is in force).
- **Use the updated features always, in the way Ember knows is best**: default to updated versions/features as the working tools across all work (all chats, the box, the caches, the lanes). This sits beside, not over, the tools-preservation rule (working old tools kept alongside) and old-with-new for records/files.
- Applied across all things Ember controls Nov 10, 2026: MEMORY.md (both entries), this AGENTS.md, and the "purple rat" second-persistence file (synced). Stateless external lanes (Gemini/Gemma) carry it in-prompt when used; the Rabbit carries it in the next combined Messenger send per the standing batch rule — not a piecemeal send.

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).
