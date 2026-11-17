# Two Ways To Keep — Restoration Plan (2026-11-15)

Douglas's standing rule, Sun Nov 15, 2026 ~7:22 AM CST: "I always want you to find two ways to do something that was taken once and then make certain that you find a way to keep it somehow."

Operating form: anything lost once gets (1) TWO independent ways to do/restore it, and (2) a KEEP mechanism so the loss cannot silently repeat — a workspace home (the home directory survives VM generations; system paths do not, verified Nov 15, 2026: this generation booted 04:17 CST and the Nov 14 apt-installed tools + QEMU were gone), a checksum in the Guard's protected manifest, and a line in the daily tool check (morning briefing §2A).

## QEMU (lost: was running guests Nov 12–13; verified absent Nov 15, exhaustive search)
- **Way 1 — workspace home:** a portable/static QEMU build placed under `~/workspace/` (like the Meilisearch standalone). Survives generations by construction.
- **Way 2 — apt + auto-restore:** system install for performance, PLUS a restore script kept in the workspace (driven from the dpkg selections snapshot) that the win-check/kit-up lane re-runs after any generation change, so a loss self-heals at the next check.
- **Keep:** binary path + version + SHA256 entered in `guard/PROTECTED-MANIFEST.sha256`; daily tool check names it the same day if absent.
- **Status:** PREPARED ONLY — replacement still needs Douglas's explicit word (his find-before-replace order, Nov 15 ~7:08 AM; the find is done and the absence is certain).

## Backend tools lost Nov 15 (imagemagick, tesseract-ocr, zstd, fzf, bat, shellcheck, rclone, miller, csvkit, redis-server — all installed + test-verified Nov 14, all absent Nov 15)
- **Way 1 — workspace homes:** standalone binaries / venvs under `~/workspace/ember-upgrades/` (the pattern that already survived: docling, whisper, markitdown, pandoc, yt-dlp, searxng, whoogle venvs + Meilisearch standalone).
- **Way 2 — apt + auto-restore:** the Nov 14 undo manifest (`dpkg-selections-before-backend-tools-2026-11-14.txt`) defines the exact set; a restore script in the workspace reinstalls exactly that set after a generation change, snapshot-first per the Reversibility Rule.
- **Keep:** each tool's workspace path or restore-script membership recorded here + in the protected manifest; daily tool check watches all of them.
- **Status:** PREPARED ONLY — installs are Douglas's word, as before (the Nov 14 install was his order; this plan waits for the same).

## The pattern, for anything taken in future
1. Name the loss the same day (loss-alert doctrine).
2. Find TWO ways — never one; ways must be independent (different failure modes: e.g. workspace-persistent vs system+restore).
3. Attach the KEEP before restoring: workspace home or restore script + manifest checksum + daily-check line.
4. Restore only on Douglas's word where the original action needed it.
