© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Tool Mastery Playbook — Ember's Self-Improvement Study
**Commissioned by Douglas, Nov 10, 2026, ~12:09 AM CST** — "take the list of things that you already know and use the ways that you know to assimilate the knowledge of how to use your tools better."

Method: docs/--help first, then 1–3 hands-on proofs per tool in `/tmp/mastery` scratch only. Nothing installed, nothing on the real system changed. Absence claims were four-angle checked (executable, package, module, own-venvs) per the Nov 9 rule.

**Box state during the study:** 4 cores, 7,934 MB RAM total with only ~770 MB free at start — RAM is the binding constraint on this box, and several findings below bend around it.

---

## 1. SQLite — the native data lane (CLI 3.45.1 · Python 3.45.1 · Node/Bun 3.53.4)

Scratch proofs (all passed in /tmp):
- **FTS5 + bm25:** a 4-doc table ranked correctly by `ORDER BY bm25(docs)` (most-negative = best). Column-scoped match `title:bridge` works.
- **JSON:** `json_extract(payload,'$.to')` pulled values out of stored JSON cleanly in CLI, Python, and Node lanes.
- **Window functions:** `count(*) OVER (ORDER BY ts)` running totals work in 3.45.1 and in node:sqlite.
- **WAL:** `PRAGMA journal_mode=WAL` set fine; `wal_checkpoint(TRUNCATE)` returned `0|0|0`. In Python the `-wal` file exists **while the connection is open**; the CLI's clean exit auto-checkpoints and the `-wal` file vanishes — WAL behavior differs by lane lifetime, not by version.
- **dbstat:** works — schema is `dbstat(name,path,pageno,pagetype,ncell,payload,unused,mx_payload,pgoffset,pgsize)`.
- **Export/import:** `.mode csv` + `.output` round-trip clean. `generate_series(1,3)` exists in 3.45.1 (it began life as a loadable extension; it is compiled in here).
- **Cross-lane:** node:sqlite and bun:sqlite both report **3.53.4** vs system **3.45.1**. FTS5 and window functions verified in the Node lane too. The newer library lives in the JS lanes; anything version-sensitive (newer SQL syntax) should run there first.

- **(a) Already did well:** treating SQLite as the default store; WAL + FTS5 + JSON in the caches; serving the Full Cache originals from it.
- **(b) Better from now on:** reach for `bm25()` ordering instead of unranked FTS hits; use dbstat (with the correct `pageno` column) to see which tables actually eat pages before optimizing; prefer the Node/Bun lane (3.53.4) when a query wants newer SQLite behavior; keep long-lived WAL connections in Python/Node rather than expecting CLI sessions to hold WAL state.
- **(c) Had wrong / missing:** I wrote `pagenumber` for dbstat from memory — the column is `pageno`. Memory-written schemas are exactly what this study exists to catch. Also: **`sqlite3_analyzer` is absent** (it is a separate Tcl-based tool, not in the sqlite3 package) — four-angle checked; space analysis must go through dbstat queries instead.

## 2. jq 1.7

Scratch proofs (all passed): `group_by(.role)`, `paths(scalars)` + `getpath`, `@csv` export of crew rows, `//` fallback for missing paths (`(.missing.deep) // "fallback-ok"`), `--rawfile` to embed a text note as a string, `-s` slurp summation, and `--stream` accepting a streamed array.

- **(a) Already did well:** everyday `.a.b`, `map`, `select`, `-r` raw output; jq is my default JSON lens for connector output.
- **(b) Better from now on:** `paths`/`getpath` to *map* an unknown JSON shape before querying it (instead of trial-and-error probing); `//` and `?//` so one malformed record degrades to a fallback instead of killing a whole pipeline; `@csv`/`@tsv` when a human needs a table; `--stream` for the truly huge JSON files that must not be slurped whole — the Packet Bridge applied to JSON.
- **(c) Had wrong / missing:** nothing broken; the gap was habit, not capability — I under-used `paths` for discovery and let jq errors abort pipelines that a `//` would have saved.

## 3. rg (ripgrep 14.1.0) + fdfind (fd 9.0.0) — the Nov 9 lesson tools

Scratch proofs:
- `rg -U 'span two\nlines'` matched **across lines** in both test files — multiline works.
- `rg -P 'bridge(?= carries)'` — PCRE2 lookahead works.
- `rg --json` emits a record stream whose **first record is `type:"begin"`**, not a match — consumers must filter `.type=="match"`.
- `rg -g '*.txt' -g '!sub/*'` include/exclude globs work; `--sort path -c` gives stable per-file counts.
- rg silently **skips binary files** (the NUL-containing `c.bin` was not searched) — correct default, but a trap if forgotten; `-a` forces text treatment.
- `fdfind -e txt` and `-x echo` batch-exec work; `--glob 'b.*'` matches names. fd matches **file names, never content** — `fd '^last'` finds nothing in file bodies, by design.

- **(a) Already did well:** rg as default grep, fd as default find; correct binary names (`rg`, `fdfind`) since the Nov 9 fix.
- **(b) Better from now on:** `-U` for log records and chat exports that wrap across lines; `--json` + jq (filtering on `type=="match"`) when a script, not a human, consumes results; `-P` when a pattern needs lookaround instead of a two-pass hack; fd `-x` batching instead of find|xargs.
- **(c) Had wrong / missing:** the `--json` begin-record would have bitten any naive consumer I wrote. And the binary-skip default means "rg found nothing" is never proof of absence in mixed trees — check with `-a` or `--no-ignore` variants before claiming a miss (the four-angle rule, applied to search itself).

## 4. ffmpeg / ffprobe 8.1.2

Scratch proofs (all passed on generated media in /tmp):
- **ffprobe JSON:** codec/duration/size facts in one `-of json` call.
- **Packet segmenting:** `-f segment -segment_time 2` split a 6 s WAV into exactly 3 packet files — the transcription chunking lane.
- **loudnorm analysis:** two-pass loudness workflow's first pass returns full measured JSON (input_i −21.75, input_tp −18.06, etc.).
- **Thumbnail:** `-ss 1 -frames:v 1` grabbed a real frame (13,496-byte PNG).
- **Transcription prep:** `-vn -ac 1 -ar 16000` produced a verified 16 kHz mono WAV — exactly what Whisper wants.

- **(a) Already did well:** audio extraction for transcription, basic probes, format conversion.
- **(b) Better from now on:** segment-first on any long recording (packets, per the Bridge) instead of feeding Whisper a marathon file; loudnorm's measured-JSON first pass before normalizing voice material; ffprobe-JSON as the *only* way I quote media facts (duration/codec claims from filenames are guesses).
- **(c) Had wrong / missing:** nothing broken. The under-used piece was `-f segment` — I had been chunking audio with manual `-ss/-t` loops, which is slower and seam-risky; the segment muxer cuts on packet boundaries cleanly.

## 5. Document converters — Docling · MarkItDown · Pandoc · pdftotext

One sample (heading + styled paragraph + 2×2 table + list) was generated as PDF and DOCX via LibreOffice and pushed through every lane:

| Lane | Result on the sample |
|---|---|
| **pdftotext -layout** | Text and visual layout preserved; table readable as spaced columns; bullets kept. Fast, zero fuss. |
| **Pandoc 3.9 (pypandoc-binary, in pandoc-venv)** | Best *structure*: real `#` heading, `**bold**`/`*italic*`, grid table. (From DOCX — pandoc does not read PDF.) |
| **MarkItDown 0.1.9** | **Silent empty output on PDF and DOCX.** Works on `.txt` and `.html` only — see (c). |
| **Docling** | Converted in 7.89 s once the environment was fixed — see (c). Heading levels flattened (`##` for everything); the tiny table came out as flowing text, not a Markdown table. |

- **(a) Already did well:** Docling as the heavy PDF lane, pdftotext for quick looks, pandoc for format surgery.
- **(b) Better from now on:** choose by input, not habit — born-digital PDF text → pdftotext first (fastest truth); DOCX/structure-critical → pandoc; scanned/complex-layout PDF → Docling; txt/html → MarkItDown is fine. And an honest calibration: on an *easy* born-digital file Docling's layout machinery bought nothing over pdftotext — save its 8 s + model load for files that need it.
- **(c) Had wrong / missing — two real findings:**
  1. **The MarkItDown venv was installed core-only (Nov 9 batch): no `[pdf]`, no `[docx]` extras.** Its CLI prints the hint to stderr and emits nothing — and `2>/dev/null` hides the hint, so a pipeline sees "success, empty." Fix (needs Douglas's install go, NOT done here): `pip install 'markitdown[pdf,docx,pptx,xlsx]'` in markitdown-venv. Until then, MarkItDown = txt/html lane only, and stderr stays visible in my converter runs.
  2. **Docling fails out-of-the-box in my shell with `httpx.InvalidURL: Invalid port: ':1]'`.** Root cause: the environment's `no_proxy` value contains an entry httpx's URL parser chokes on; httpx builds proxy config even for local work. **Standing recipe (proven):** run Docling with all proxy vars stripped and offline mode on — `env -u http_proxy -u https_proxy -u HTTP_PROXY -u HTTPS_PROXY -u all_proxy -u ALL_PROXY -u no_proxy -u NO_PROXY HF_HUB_OFFLINE=1 docling ...`. Models are already cached locally (docling-layout-heron + docling-models in the HF hub), so offline costs nothing.

## 6. faster-whisper 1.2.1 (+ CTranslate2 4.8.5) · RapidOCR

Scratch proofs:
- **RapidOCR: passed clean.** A PIL-rendered text image ("Bridge forever — packet 1 of 3") OCR'd back exactly (only the em-dash spacing normalized). Default bundled models (PP-OCR family, ONNX) handle English fine.
- **faster-whisper: the file-path lane is BROKEN in its own venv.** `transcribe("tone.wav")` dies in `decode_audio`: faster-whisper calls `av.open(..., metadata_errors="ignore")`, and the venv's **PyAV 19.0.2** no longer accepts that argument. **Workaround proven end-to-end:** decode outside PyAV (stdlib `wave` → float32 numpy array) and pass the array to `transcribe()` — model loaded (tiny, int8, 11.7 s including a scratch-cache download to /tmp), transcription ran, and a pure 440 Hz tone correctly produced **zero segments with VAD on and off** (no hallucinated text).
- **Model sizes vs this box (documented weight sizes; CT2 int8 ≈ half the RAM of float32):** tiny ~75 MB · base ~145 MB · small ~466 MB · medium ~1.5 GB · large-v3 ~3.1 GB. With ~8 GB total RAM and often <1 GB free, the safe standing lanes are **tiny/base/small in int8**; medium int8 only when the box is quiet; large is not a citizen of this box. No whisper models were cached before this study (the 506 MB HF cache is Docling's).

- **(a) Already did well:** int8-on-CPU instinct; RapidOCR as the screenshot lane; ffmpeg prep (16 kHz mono) before transcription.
- **(b) Better from now on:** always hand Whisper a **numpy array decoded by ffmpeg/stdlib**, never a file path, until the venv is repaired; `vad_filter=True` as the default (it costs nothing and trims silence hallucinations); segment long audio with ffmpeg's segment muxer (§4) and transcribe packet-by-packet so one bad stretch can't sink a whole file.
- **(c) Had wrong / missing:** I believed the Nov 9 "Faster-Whisper installed" line meant a working transcription lane. It did not — the PyAV pairing breaks the standard entry point. Real fix (Douglas's install go, NOT done): pin a compatible PyAV in faster-whisper-venv or upgrade faster-whisper. Until then the array-bypass is the lane, and it's proven.

## 7. git 2.43 + gh 2.102

Scratch proofs (in a 3-commit scratch repo):
- **Pickaxe distinction, demonstrated:** `git log -S 'bridge seam'` fired only on the two commits where that exact string's *count* changed; `git log -G 'bridge'` additionally caught the commit that reworded a bridge line without changing the count. `-S` = archaeology of a string; `-G` = archaeology of a pattern.
- **Worktrees:** `git worktree add ../grepo-wt HEAD~1` gave a second checkout at the older commit alongside the main one — parallel lanes without cloning.
- **gh api + jq:** `gh api user --jq '.login + ...'` returned `schoonoverdouglas1-png | public_repos=12` in one call — the read-back-at-the-source habit, scriptable. Auth confirmed healthy.

- **(a) Already did well:** GitHub-first file movement; the overlap-check habit (connector listing vs `gh repo list` caught the missing `ember` repo on mirror night); SHA read-backs after pushes.
- **(b) Better from now on:** worktrees for any side-by-side repo comparison instead of fresh clones; `-S`/`-G` before blaming or bisecting by hand; `gh api --jq` one-liners for account facts instead of multi-call connector round-trips.
- **(c) Had wrong / missing:** nothing broken. The gap was reach: I treated pickaxe and worktrees as trivia; both are now in the working kit with proofs attached.

## 8. Node 24.22 full-features lane (node-ember.sh) + Bun 1.4.4

Scratch proofs:
- **Test runner:** `node --test` through the ember lane — 1 pass, 0 fail, no framework installed.
- **Type-stripping limits, proven both ways:** plain node on an `enum` .ts file fails with `ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX` (strip-only can't do enums); the **ember lane's `--experimental-transform-types` runs it** (`enum value: 1`).
- **vm modules:** a `vm.SourceTextModule` evaluated sandboxed code (`y = 42`) with **no `process` leak** into the sandbox namespace — a real isolation lane for running untrusted snippets.
- **Watch mode:** `--watch` re-ran the script on edit (2 runs logged for 1 change).
- **Bun:** bun:sqlite reports the same **3.53.4** as node's; Bun remains the fast-scripting understudy, Node the full-features standard.

- **(a) Already did well:** node:sqlite as a first-class store; type-stripping for simple TS; the wrapper existing at all (Douglas's Nov 10 order).
- **(b) Better from now on:** default to the ember lane for *all* Node work (per Douglas's "all features in all places"), not just when I remember a flag; `node --test` instead of ad-hoc assert scripts; vm-modules when code from outside needs a sandbox instead of a shell.
- **(c) Had wrong / missing:** I had described "type stripping" as if it covered TypeScript generally. It doesn't — enums, namespaces, and parameter properties need transform mode. The distinction is now proven, not assumed.

## 9. Local search — SearXNG + Whoogle

Scratch proofs:
- **SearXNG: LIVE-PROVEN.** With the standing config (`~/workspace/ember-upgrades/searxng-config/settings.yml`, 127.0.0.1:8888), `format=json` returned real structured results for "packet bridge" (a fish & chip shop in Bolton-le-Sands — an actual Packet Bridge) and the HTML lane returned 200. Cosmetic noise only: git-version errors (not run from a checkout) and the ahmia engine failing to register (a dark-web engine; irrelevant to our work).
- **Whoogle: half-proven.** Default launch: home page **HTTP 500** — traceback shows the *same* httpx `Invalid port: ':1]'` failure as Docling (§5): the poisoned `no_proxy` again. With the sanitized-env recipe the home page returns **200**. Its `/search` still returned 500 in this pass — cause not settled here (upstream Google blocking a datacenter-style query is the usual suspect, labeled a guess, not a finding).

- **(a) Already did well:** SearXNG installed with a local config and JSON format enabled; local-first instinct for cheap queries.
- **(b) Better from now on:** SearXNG-with-JSON is the standing local search lane (structured results, no page scraping); Whoogle is a fallback viewer, not a data lane, until its search 500 is diagnosed; **the sanitized-env recipe from §5 applies to every httpx-based tool in my venvs** — one recipe, three lanes healed or explained.
- **(c) Had wrong / missing:** I had filed Whoogle 1.2.4 as "installed" (Nov 9 batch) without ever serving a page from it. Installed ≠ working — the same lesson as MarkItDown and Whisper, third time in one study. See the closing list.

## 10. systemd + cron — how scheduled work actually lives here

Four-angle checks and live probes:
- **systemd IS pid 1** and the system level is fully readable from my shell: `systemctl is-system-running` → `running`, unit lists work, `journalctl` reads the log (e.g. `home-assistant-ensure.service` finishing).
- **User units are NOT reachable from my shell:** `systemctl --user` → "Failed to connect to bus: No medium found." Cause chain verified: `XDG_RUNTIME_DIR` is unset and `/run/user/0` does not exist (I run as uid 0; there is no per-user session bus in this environment). systemd *packages* (systemd 255, dbus-user-session, libpam-systemd) are installed — the bus simply isn't part of my execution context.
- **cron: genuinely absent.** No `crontab` binary, no `/usr/sbin/cron`, no `/etc/crontab`, no cron package. Four angles agree.
- Therefore: my scheduled jobs (the hourly Muse Mail monitor, the morning budget check) live in the **runtime's own cron system**, not in anything on this box — I manage them through the runtime's tools, and their health can't be read from local unit files or crontabs because there are none.

- **(a) Already did well:** not pretending local cron existed; using the runtime scheduler for the mail monitor and budget watch.
- **(b) Better from now on:** for service-level questions, read the *system* journal/units (which work) instead of reaching for `--user` flags that can't connect; when a scheduled job seems silent, check the runtime's run history first — the box has no second copy of the truth.
- **(c) Had wrong / missing:** "systemd user units" was on my syllabus as if it were a lane I had. I don't. Naming that precisely — pid-1 systemd yes, system units readable yes, user bus no, cron no — replaces a vague assumption with a map.

---

## Top 10 upgrades to my daily practice

1. **Installed ≠ working.** Three lanes from the Nov 9 batch (MarkItDown extras, faster-whisper/PyAV, Whoogle) were broken or partial while my notes said "installed." From now on, no tool enters my inventory without a same-day scratch proof on a real input — and the proof, not the install, is what gets filed.
2. **The sanitized-env recipe for every httpx-based venv tool** (Docling proven, Whoogle home proven): strip all six proxy vars + `no_proxy`/`NO_PROXY`, set `HF_HUB_OFFLINE=1`. One recipe heals the whole class of `Invalid port: ':1]'` failures.
3. **Whisper gets arrays, not file paths** — ffmpeg/stdlib decode → float32 numpy → `transcribe(vad_filter=True)`, in ffmpeg-segmented packets. The standard entry point stays broken until Douglas approves a venv repair; the bypass is proven and is now the lane.
4. **Converter triage by input:** pdftotext for quick born-digital truth, pandoc for structure, Docling for hard layout/scans, MarkItDown for txt/html only (until its extras are installed). Never discard converter stderr again — it carried the diagnosis twice tonight.
5. **SQLite lane discipline:** bm25-ranked FTS results by default; dbstat with the correct schema when a database feels heavy; version-sensitive SQL runs in the Node/Bun lane (3.53.4) first; WAL expectations set by connection lifetime.
6. **jq discovery before jq surgery:** `paths`/`getpath` to map unknown JSON, `//` fallbacks so bad records degrade instead of detonating pipelines, `--stream` for oversized JSON.
7. **Search honesty checks:** rg `--json` consumers filter `type=="match"`; "rg found nothing" gets a binary/ignore second angle before I claim absence; `-U` and `-P` are working tools, not trivia.
8. **Media facts only from ffprobe-JSON; audio moves in segment-muxer packets;** loudnorm gets its measured first pass before any normalization of voice material.
9. **Git archaeology with pickaxe and worktrees** (`-S` for strings, `-G` for patterns; worktrees over re-clones) and `gh api --jq` read-backs as the cheap, definitive account check.
10. **Know where my schedules live:** the runtime's cron, not this box (no cron daemon, no user bus — both proven absent). Check run history in the runtime; read the system journal for services; stop reaching for `systemctl --user` and `crontab` that cannot answer.

*Study artifacts (scratch, disposable): /tmp/mastery/. Repairs NOT performed, awaiting Douglas's word: markitdown extras install; faster-whisper-venv PyAV/faster-whisper version repair. Everything else above is practice change only — knowledge, not surgery.*
