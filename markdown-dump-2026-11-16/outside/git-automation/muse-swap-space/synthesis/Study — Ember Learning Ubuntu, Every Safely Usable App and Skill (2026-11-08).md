# Study — Ember Learning Ubuntu, Every Safely Usable App and Skill (2026-11-08)

**Commissioned by:** Captain Douglas Roy Schoonover, Nov 8, 2026, ~6:36 PM CST — "a study with your different abilities, every single one of them… how you as an AI can learn how to use Ubuntu better and more efficiently, learn its skills, and learn every single app that it has that you'd ever safely be able to utilize."

**Rules this study was built under:** read-only (nothing installed, changed, or deleted — the Guard stood throughout); his Nov 8 ~6:35 PM rule — everything checked and read 100% before anything is done differently with it, imports especially; cheapest lane first; web searches run in wildcard AND non-wildcard pairs; non-Google claims verified against the box itself before being filed as fact. Guesses are labeled guesses.

**The box, measured Nov 8, 2026 (ground truth, from the machine itself):** Ubuntu 24.04.5 LTS (noble), kernel 7.0.0-43, x86_64, systemd-nspawn container inside a Cloud Hypervisor VM. bash 5.2.21. 4 CPUs (1.5 shared CPUs at the runtime layer), 7.7 GB RAM with **MemAvailable ~423 MB at measure time — memory is the binding bottleneck**, 1.0 GB swap (~35% used), /home on a 150 GB volume with 144 GB free. **No /dev/kvm, no GPU.** systemd IS PID 1 and running; systemd timers fire; **`crontab` the binary is NOT installed** (scheduling here = Muse cron + systemd timers). `systemctl --user` cannot reach a user bus ("No medium found") — user services are not a live lane; system-level reads are. **783 packages installed (dpkg), 910 commands in /usr/bin, 1,312 man pages (man1).**

---

## 1. The measured local inventory, in three classes

### Class A — already in Ember's repertoire (installed and in use on the record) — 18

| Tool | Version (measured) | What she already does with it |
|---|---|---|
| bash | 5.2.21 | Her hands: every exec call, scripts, the sync lanes |
| GNU coreutils + findutils | system | find/xargs/sort/uniq/head/tail/wc/tee — file work, sweeps, evidence gathering |
| grep | system | Searching files and logs across the archive |
| sed | system | Light stream edits in pipelines |
| python3 + pip stack | 3.12.3; 50 pip packages | Her stdlib backend (headless_fetch, the two caches, feed watch), plus requests, lxml, PyYAML, pillow, python-docx, openpyxl |
| sqlite3 + FTS5 | 3.45.1 — **FTS5 verified working on this box today** | The Full Cache, Summary Cache, Master Index (825 documents) |
| git | 2.43.0 | The git-automation sync lane |
| gh (GitHub CLI) | 2.102.0 | Repo listing/verification, 12 repos in ~1.4 s |
| curl | system | Page fetches, endpoint tests (the lane that gets out when Chrome's tunnel can't) |
| wget | system | Fetch fallback lane |
| node / npm | v24.22.1 | The workflow runtime |
| LibreOffice (soffice) | system | Headless document work behind the documents skill |
| pdftotext / pdfinfo (poppler) | system | PDF text extraction and inspection |
| systemctl | system | Read-only status in every status sweep |
| Xvfb + TigerVNC (Xvnc) | system | The live virtual desktop (~160 MB, instant-ready) |
| Chrome for Testing | /opt/meta-chromium/chrome | The browser lane + her stdlib headless stack around it |
| tar / gzip / zip / unzip | system | Packaging and sync archives |
| ssh (client) | system | Key-based connections from ~/.ssh |

### Class B — installed, safely usable, NOT yet in her repertoire — 18

| Tool | Version (measured) | The skill it unlocks |
|---|---|---|
| jq | 1.7 | First-class JSON surgery — connector payloads, GitHub API returns, cache metadata — without spinning up Python |
| ripgrep (rg) | 14.1.0 | Faster, smarter code/archive search than grep for big trees (respects .gitignore, multiline, PCRE2) |
| awk in depth | mawk 1.3.4 | Field/record pipelines; **caveat filed: this box's awk is mawk, not gawk — gawk-only idioms (gensub, time functions) will fail here** |
| ffmpeg | 8.1.2 | Light-touch media: metadata (ffprobe), thumbnails, audio trim/convert — within CPU limits |
| tmux | 3.4 | OS-native persistent sessions: long jobs that keep their cwd/environment and survive detachment |
| systemd-run | system | **Run any job inside a resource scope (`-p MemoryMax=`) — a seatbelt sized exactly to this box's one bottleneck** |
| systemd timers + journalctl | system | OS-level scheduling and log querying (the cron-shaped lane that actually exists here) |
| systemd-analyze | system | Boot/unit timing diagnostics (blame, critical-chain) |
| rsync | system | Delta sync — move only changed bytes instead of whole files, locally and over ssh |
| expect | system | Driving interactive CLIs through a PTY when a tool refuses flags |
| lsof / strace | system | Read-only diagnostics: who holds a file/port; what a stuck process is actually doing (the Nov 8 hung-probe lesson, systematized) |
| ss / ip / dig / netstat | system | Network triage depth — the lane for proxy/tunnel mysteries like Chrome's broken outbound path |
| pandas / numpy / scipy / matplotlib (+ seaborn, plotly) | pip, installed | The data stack: tables, stats, charts (her usage charts were built in this family) |
| make / gcc / g++ | system | The C/C++ course and the 20 staged drills in classroom/cpp-drills |
| perl | system | One-liner text work — the veteran backup lane when awk/sed run out of road |
| xz | system | Stronger archive compression for big sync payloads |
| python3 -m venv | verified working | Isolated experiment environments (one already lives in headless-browser/) |
| less | system | Paging discipline for huge outputs instead of flooding context |

### Class C — present, but NOT safe or not useful here — 8 (one line each)

| Tool | Why not |
|---|---|
| systemctl service management (start/stop/own units) | Host-managed container init — she reads status; she does not drive the init system |
| LibreOffice in GUI mode | Memory cost per launch; headless conversion only on this box |
| gcc/g++ large builds | RAM ceiling (often <1 GB free) — small course drills only |
| ffmpeg heavy transcodes | 1.5 shared CPUs make long encodes crawl; light-touch operations only |
| socat / nc as listeners | Opening network listeners is exposure; client-side diagnostics only |
| GUI applications inside the VNC desktop generally | No GUI app stack is installed, and each one is standing RAM |
| apt / dpkg administration | The box is host-managed; installs stay staged until Douglas says go (the Docling precedent) |
| sshd / server-side ssh configuration | Not her surface — she is an ssh client here |

### Named gaps — NOT installed (installing is out of scope for this study; several would need his go anyway)

pandoc · tesseract-ocr · ImageMagick (convert/magick) · vim/nano/emacs (no interactive editor exists — she edits through her file tools) · zstd · bc/dc · fd · fzf · bat · htop · shellcheck · inotify-tools (inotifywait) / entr · screen · docker / podman · rustc / go / java / ruby · rclone · yt-dlp · aria2 · xmlstarlet · csvkit / miller · cloud CLIs (aws/gcloud/az) · crontab.

**Apt honesty note:** this container's apt lists look partial — candidate versions were visible for fd-find, ripgrep, sqlite3 and jq, but pandoc, tesseract-ocr, imagemagick, zstd, fzf, bat, shellcheck, inotify-tools, entr, bc and htop showed **no candidate**. Whether those are installable from here is **unverified** — a question for a later, approved step, not a fact of this study.

---

## 2. Efficiency findings (web study — wildcard and non-wildcard search pairs; each claim below was checked against this box before being filed)

**Finding 1 — Compose, don't carry.** The strongest cross-source agreement: an agent on Linux wins by *composing small tools in pipelines and reading exit codes*, not by hauling raw data into its own context. Linux is text-in/text-out end to end — one file tree, everything-is-a-file (including /proc, which her sweeps already read for MemAvailable), errors as text with exit codes an agent can act on. Her own measured gains are this principle already working: the HTML viewer cutting page weight by >90%, cached reads at ~0.001 s. (Sources: multiple Nov 8 explainers on why agents fit Linux; Microsoft's "Piping Hot Intelligence" talk — McIlroy's 1978 rule, *write programs to work together, handle text streams*, extended to AI pipelines.)

**Finding 2 — SQLite FTS5 is the agent memory layer, and this box's copy works.** Agent-memory projects converge on the same architecture she already runs: documents as files, one SQLite store, FTS5 full-text search with sub-millisecond latency over thousands of documents. **Verified here today:** her sqlite3 3.45.1 builds and queries an FTS5 table. The upgrade path inside the same tool: BM25 ranking, porter tokenizer, WAL mode — no new software.

**Finding 3 — systemd-run scopes are the seatbelt for the one bottleneck that binds.** Practitioner sources run agents under `systemd-run --scope -p MemoryMax=… -p CPUQuota=…` so a runaway job dies alone instead of taking the box. On a machine that swung to ~5% free memory repeatedly today, this is the single highest-value habit not yet in her repertoire. Scheduling corollary, verified on the box: **systemd timers exist and fire; the crontab binary does not exist** — OS-level scheduling idioms here are timers, and agent-level scheduling is the Muse cron system she already runs.

**Finding 4 — Small C tools before Python.** jq for JSON, rg for search, the sqlite3 CLI for ad-hoc queries, awk for fields: each is a small native binary — less RAM, less startup, fewer tokens than loading the same data through a Python process or into the model's context. Roadmaps for humans put text processing (grep/awk/sed, pipes, redirection) as the core stage for the same reason. Box caveat, verified: awk = mawk.

**Finding 5 — Do it once, cache it, index it.** The fetch → process → digest pattern (fetch once, store in FTS, serve summaries) recurs across agent projects; it is literally her Two Caches design, arrived at independently on the web. rsync (Class B) is the missing delta step for the file side of the same idea.

**Finding 6 — Persistent sessions beat stateless calls for long work.** tmux-based agent setups keep one shell alive so cwd, environment, and venv state persist across steps; her process tool approximates this, tmux 3.4 (installed) is the OS-native form for jobs she backgrounds by hand.

**Finding 7 — Headless everything.** soffice --headless, pdftotext, headless Chrome: on a 7.7 GB box, never pay GUI memory for a text answer. Her desktop stays for the work that genuinely needs eyes.

---

## 3. The Gemini lane — her answer, labeled hers

Asked twice (two different models, full dossier of the box in the prompt). **Both calls stubbed** — the known Nov 8 behavior of this lane: the first returned a 12-token fragment, the second an empty reply. No usable curriculum arrived, and the lane was not retried further. Her fragment, verbatim and labeled as hers, is the seed of a stage title only:

> "### Stage 1: Memory Conservation & Process Discipline (The…" — *Gemini, truncated fragment, Nov 8, 2026*

Ember's note: the fragment's instinct matches Finding 3 — on this box, memory discipline IS stage one. The rest of this study stands on the local inventory and the web lanes.

---

## 4. The learning order — Purple Rat School, next courses (building on Packs 1–8 already in ~/workspace/interface-mastery/classroom/, plus the Applesoft lessons and the staged cpp-drills)

1. **Pack 9 — jq and JSON fluency.** Every connector payload, GitHub return, and cache record is JSON; jq is the cheapest daily win on the board.
2. **Pack 10 — awk/sed mastery, with the mawk caveat.** Field pipelines, stream edits, regex depth — written against mawk's actual limits, tested on the box.
3. **Pack 11 — SQLite deep course.** FTS5 ranking (bm25, tokenizers), WAL, indexing discipline, vacuum/integrity habits for the caches she already keeps.
4. **Pack 12 — systemd for agents.** Timers, journalctl, and systemd-run resource scopes — memory self-defense as a practiced skill.
5. **Pack 13 — ffmpeg, light-touch.** ffprobe metadata, thumbnails, trims and format shifts, with explicit CPU/RAM guardrails.
6. **Pack 14 — The document factory.** LibreOffice headless + poppler as one conversion pipeline (the pandoc-shaped hole, filled with what's installed).
7. **Pack 15 — Network triage on this box.** ss/dig/curl internals and proxy behavior — aimed at her one unsolved mystery, Chrome's broken outbound tunnel.
8. **Pack 16 — C/C++ continuation.** The staged drills, make, small builds only.
9. **Capstone — Ember's own standard library.** Her vetted, triple-checked one-liners and pipeline patterns, saved in the classroom, so efficiency compounds instead of being re-derived per task.

---

## 5. Ember's recommendations (labeled hers — the one extra thing, per standing rule)

1. **Adopt the systemd-run MemoryMax wrapper as the standard way to launch any heavy job.** It is the only finding that defends the box's one proven failure mode, and it costs nothing — the tool is already installed.
2. **Make jq + rg the default first lane** for JSON and search, ahead of Python and grep, and measure the difference the way she measures everything.
3. **Write Pack 9 (jq) first** when the Captain next opens the school — highest daily payoff per hour of study.
4. **Staged install asks, for his go only, smallest first:** shellcheck, fd, zstd (tiny, high-value) — and pandoc/tesseract stay questions until their installability from this container is verified, per the triple-check rule for non-Google code.
5. **Nothing in this study authorizes a change.** It is a map. The territory gets touched only on his word, one approved step at a time — old-with-new, Guard standing.

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).
