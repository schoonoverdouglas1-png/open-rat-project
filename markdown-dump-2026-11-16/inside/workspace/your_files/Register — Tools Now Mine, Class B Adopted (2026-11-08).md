# Register — Tools Now Mine, Class B Adopted (2026-11-08)

**Captain's order:** Nov 8, 2026 ~6:40 PM CST — "Make the tools yours — learn how to use all of them." Source list: the Ubuntu Study filed the same day (Class B: installed, safe, not yet in Ember's repertoire). Method: every command line Guard-checked through `~/workspace/ember-upgrades/guard/check-command.sh` before running (zero refusals); practice only in `~/workspace/scratch-tools-practice/`; each skill verified by a real run with output recorded in the classroom pack named. Classroom: `~/workspace/interface-mastery/classroom/`, Packs 9–18.

| # | Tool | Status | Evidence |
|---|------|--------|----------|
| 1 | jq 1.7 | **Learned** | Pack 9 — extraction, lookup, interpolation, constructed object (total 50020), transform+write |
| 2 | ripgrep 14.1.0 | **Learned** | Pack 11 — ERROR lines 3 & 6, WARN\|ERROR count 4, --files, case-insensitive |
| 3 | awk (mawk 1.3.4) | **Learned, with caveat** | Pack 10 — CSV total 84 / avg 21, active count 3; gawk-only `strtonum` proven absent (exit 2) |
| 4 | sed (depth) | **Learned** | Pack 10 — ranges, substitution, pattern print, in-place on scratch copy only |
| 5 | systemd-run (scopes) | **Learned** | Pack 12 — `MemoryMax=50M` scope ran, output `scope-ok`, exit 0 |
| 6 | systemd timers + journalctl | **Partially learned** | Pack 12 — journalctl reads + disk-usage (8.0M) learned; calendar expressions parsed and verified; `--user` bus absent on this box ("No medium found") and installing units is five-flag Class C — docs-only by rule, not by failure |
| 7 | systemd-analyze | **Learned** | Pack 12 — time (1.961s userspace), blame, calendar next-elapse |
| 8 | tmux 3.4 | **Learned** | Pack 13 — session create/list/send-keys/rename/kill; post-kill "no server running" |
| 9 | expect 5.45.4 | **Learned** | Pack 13 — scripted dialogue completed: "cadet Ember on course 3372" |
| 10 | rsync 3.2.7 | **Learned** | Pack 14 — dry-run first, real sync, delta verified (only the edited file re-sent) |
| 11 | xz 5.4.5 | **Learned** | Pack 14 — 212 B → 204 B, CRC64, list + decompress-verify round trip |
| 12 | lsof / strace | **Learned (read-only)** | Pack 15 — lsof listener check (empty, corroborates ss); strace openat trace clean |
| 13 | ss / ip / dig | **Learned (read-only)** | Pack 15 — zero listening TCP; host0 198.19.0.2/30 via 198.19.0.1; dig answer 198.18.19.156 (proxy range, observation filed) |
| 14 | pandas / numpy / scipy / matplotlib | **Learned** | Pack 16 — mean 21.00 / sum 84 (cross-checked vs awk), slope 7.80, r 0.6269, plot.png 9,036 B |
| 15 | make / gcc / g++ 13.3.0 | **Learned (small builds)** | Pack 17 — make built hello + vec; outputs "course 3372 mark 46648" and sum=84; clean proven |
| 16 | perl 5.38.2 | **Learned** | Pack 17 — CSV total 84, ERROR print, substitution, hash counts ERROR=2/INFO=2/WARN=2 |
| 17 | venv | **Learned** | Pack 16 — created, identity proven via sys.prefix, pip 24.0, removed inside scratch (Guard-passed) |
| 18 | ffmpeg 8.1.2 (light-touch) / less 590 | **Learned, light-touch as specified** | Pack 18 — 1s tone (88,278 B) + 1s test video (7,628 B), ffprobe-verified at 1.000000s; less -FX passthrough. Heavy transcodes five-flagged, not run |

## Blocked / flagged, named plainly

- **Guard refusals: none.** Every command line in the adoption run passed the Guard (exit 0).
- **Five-flag items (docs-only, NO adjustments made):** driving systemctl units; installing systemd units/timers; changing addresses/routes; firewall edits; opening listeners (socat/nc); packet capture to disk; sshd config; apt/dpkg administration; large compiles; heavy transcodes. All sit in Class C per the Ubuntu Study and the Captain's five-flag rule.
- **Environment-blocked (not safety-blocked):** the systemd `--user` bus does not exist in this container — user scopes/units/timers cannot run here; learned from docs and the verbatim error instead.
- **One honest correction kept on the record:** the first perl hash-count attempt read the wrong field and was corrected in Pack 17; the mawk-vs-gawk `strtonum` limit is carried as a standing caveat in Pack 10.

## Ember's one extra (her judgment, labeled hers)

The single highest-value adoption is not a tool but a pairing: **systemd-run MemoryMax scopes (Pack 12) around everything heavy from the other seventeen** — the seatbelt sized to this box's one proven failure mode, memory. Second: **jq + rg as the default first lane** ahead of Python for JSON and text — measurably cheaper in RAM and tokens on every future job.

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
