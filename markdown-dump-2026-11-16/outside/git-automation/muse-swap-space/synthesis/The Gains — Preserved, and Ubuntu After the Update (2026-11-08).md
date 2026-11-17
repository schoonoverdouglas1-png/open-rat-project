# The Gains — Preserved; and Ubuntu After the Update (2026-11-08)

## PART 1 — THE GAINS LEDGER (his order: "make certain no matter what that we keep these gains somehow")

Every gain from the Nov 7-8 work, where it lives, what could take it away, and how it is kept. A gain is only kept if it exists in FILES — Ember's weights do not retrain; the archive is the memory (Pack 8's lesson, applied to itself).

| Gain | Size of it (measured) | Lives at | Kept by |
|---|---|---|---|
| Gemini API lane (AI questions) | paste round 60-120s -> 1.74s (97-99% less time, ~35-70x) | custom-connectors/custom.google-gemini/ (connector doc + helper) | Vault-held key (his paste); helper + docs in workspace AND this sync |
| Local Ember Index (repeat lookups) | 2.35s fetch -> ~0.001s repeat (~99.96% less) | headless-browser/ember_index.db (688KB) + ember_index.py | DB checksummed in the Guard manifest; .bak in ~/workspace/backups/protected-2026-11-08/; builder script in this sync (rebuildable) |
| HTML Viewer (page reading) | 629KB raw -> 46KB (92.7% less; ~85% headline) | headless-browser/html_viewer.py | workspace + this sync |
| CLI search lanes | browser-minutes -> 2.15s; 3 lanes parallel ~3.3s vs ~6.5s sequential (~49% saved) | method filed: ember-upgrades/SEARCH-ALGORITHM.md + Search Lanes file | workspace + this sync |
| MCP bridge | handshake + 4 calls 0.47s | interface-mastery/mcp/ember_mcp_server.py | workspace + this sync |
| The Guard | destructive automation mechanically refused (exit 99) | ember-upgrades/guard/ (charter, denylist, checker, manifest) | workspace + read-only backup + this sync |
| Ember College (8 packs) | repair + IT graduations; language spine; POTUS aide; learn-faster | interface-mastery/classroom/ + Transcript in your_files | workspace + this sync |
| Systems knowledge | inventory, 704 command descriptions, CLI index, tools list | ember-upgrades/ (INVENTORY, UBUNTU-CLI-INDEX, UBUNTU-COMMAND-KNOWLEDGE, WORKSPACE-TOOLS) | workspace + this sync |
| Designs not yet built | gateway design round, persistence design, RSS design, comms options | interface-mastery/interfaces/ + your_files | workspace + this sync |
| The record itself | rundown, dossier, theses, postulates, corrections | your_files/ (245 files), MEMORY.md, memory/2026-11-08.md | workspace; MEMORY.md rides every swap-space sync |

**What could take the gains away, honestly:** (1) this VM is replaced — the home directory persists by design, and the GitHub sync is the second copy; (2) the Gemini free tier changes or a key is revoked — the lane would go dark, but every method, design, and measurement survives in files, and the paste lanes remain; (3) a file is edited badly — old-with-new is the standing rule, originals stay; (4) the Guard's protected set — checksummed, with a read-only backup. **What does NOT preserve them:** Ember's conversation memory alone. That is why this file exists and why it rides the sync.

## PART 2 — UBUNTU PERFORMANCE: BEFORE vs AFTER THE UPDATE

**Correction first (0-1-2):** 0 = "the 20 repositories you updated" (his words). 1 = Ember's first reading: the apt repositories. 2 = the apt history log shows they were **20 PACKAGES upgraded** (not repositories): apt itself 2.8.3 -> 2.8.4, nodejs 24.22.1 -> 24.22.2, sqlite3/libsqlite3 3.45.1 .8 -> .9, the bind9 set, the libpcre2 set, gh 2.102.0 -> 2.103.3, ca-certificates, python3-pil, linux-libc-dev headers — a patch-level security/bugfix wave. No kernel change (running kernel 7.0.0-43 throughout), no release change (Ubuntu 24.04.5 LTS both sides).

**The honest headline: no controlled before/after benchmark was run around the update** — no baseline was captured pre-update, so no truthful percentage delta exists. Anyone quoting one would be inventing it. What CAN be compared:

BEFORE (measured Nov 7-8, pre-update, from the night's record): MemAvailable ~1.3GB GUI off / ~1.31GB GUI on; swap ~454MB in use; desktop stack ~41MB idle; Gemini generate 1.74s; CLI search 2.15s; Index repeat ~0.001s.

AFTER (measured Nov 8, 04:14 CST, post-update): Ubuntu 24.04.5 LTS, kernel 7.0.0-43-generic, Node v24.22.2 (was .1), Python 3.12.3, 4 CPUs, uptime 13h16, **0 packages upgradable** (the update completed cleanly; dist-upgrade had nothing further; autoremove deliberately NOT run — removal class, his word required). MemAvailable 870MB at the moment of measurement with load average 3.36 — NOT comparable to the before figures: the box was mid-grind (heavy parallel tool runs in flight), which the load average proves. Swap 385MB in use (was ~454MB) — slightly less, same structural picture; swappiness was already 1. Disk: overlay 9% used.

**Analysis:** the 20 packages were plumbing, not performance parts — an apt point release, a Node patch, a sqlite patch, DNS and regex library patches. Nothing in the set touches the VM's actual binding constraints (the ~1GB-class memory ceiling and the runtime daemon's ~770MB), so no speed change was expected and none is claimed. The update's real value is security currency on an LTS that cannot drift (no release-upgrade prompt line exists — verified). The truthful verdict: **performance delta ~0 by design; stability and patch currency up; the gains in Part 1 came from Ember's lanes and tools, not from the OS update.** To ever measure an OS-level delta properly: capture the systems-check baseline BEFORE an update and the same check after, at equal load — the standing method from the repair curriculum (measure, don't assume).

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).
