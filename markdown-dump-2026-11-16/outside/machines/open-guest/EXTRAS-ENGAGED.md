© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# EXTRAS ENGAGED — the Open Guest, guest mode (Nov 12, 2026, ~7:38 PM CST)

Captain's order: "Engage all extra shit in the guest mode that you can use the way we use it. Like my computer."
Goal: this guest works LIKE THE MAIN COMPUTER for everything it can honestly carry — same tools, same kits, same working style, bridged in (software-bridges doctrine). Everything below was RUN inside the chroot and verified, or is dated as a gap with its reason. Evidence lives in `home/ember-kit/evidence/`. The kit lives at `home/ember-kit/` (50 MB, 620 files) and carries its own checksummed manifest — the main box's PROTECTED-MANIFEST practice, working in-guest.

## ENGAGED + VERIFIED (ran inside the guest)

- **Python 3.12.3 — BRIDGED IN.** The guest tree has no python3 (see gaps). The main box's own interpreter — same release family (Ubuntu 24.04 both sides), same arch — was carried in as an additive copy: binary + pruned stdlib under `home/ember-kit/python/`, plus host libexpat (the guest lacks it; the guest already carries libz/libc/libm). Launcher: `home/ember-kit/python/ember-python`. Verified in-guest: version prints `3.12.3`, stdlib smoke (struct + hashlib + json) OK. Evidence: `evidence/job0-bridged-python.txt`. Honest label: this is a bridged copy in /home, NOT a dpkg install — the guest's dpkg registry never saw it, and `dpkg --audit` stays clean.
- **iso_inventory.py — the disc-reading tool, working in-guest.** Ran against a generated test disc (`home/ember-kit/testdata/tiny.iso`): output identical to the main box's run on the same file (Volume 'EMBER_TEST_DISC', 3 entries, /HELLO.TXT + /KIT/README.TXT), and `--cat /HELLO.TXT` read a file off the disc from inside the guest. Evidence: `evidence/jobA-iso-inventory.txt`, `evidence/jobA2-iso-cat.txt`.
- **kit_manifest.py — checksummed-manifest practice, working in-guest.** A stdlib tool written for the kit: walks a tree, sha256-hashes every file, writes `MANIFEST.sha256`. Final run: **617 files, 50,299,034 bytes**, and the guest's NATIVE `sha256sum -c` verified the python-written manifest **617 OK / 0 failed** — two independent implementations, one truth. Evidence: `evidence/jobB-manifest-rerun.txt`, `evidence/jobB2-verify-rerun.txt`. (Old-with-new: the first manifest run showed 614 OK / 1 FAILED — `evidence/jobB-manifest.txt` itself, because the host-side tee was still writing that evidence file while the walk hashed it. A harness race, not a kit defect; the settled re-run above supersedes it, and the first outputs are kept in `evidence/jobB-manifest.txt` / `jobB2-native-verify.txt`.)
- **The Guard — holding inside the guest.** `tools/guard/check-command.sh` + `DESTRUCTIVE-DENYLIST.txt` + `GUARD.md` bridged in and exercised in the chroot with the guest's native bash: a safe command exits 0; a denylisted one (`mkfs…`) is REFUSED, exit 99. The Guard travels. Evidence: `evidence/jobC-guard.txt`.
- **vm_selftest.py — the guest's-eye view, recorded honestly.** Ran in-guest (stdlib-only; imports checked before copying). Its readings ARE the guest's truth: no /proc content (cpu model null, memory empty), 4 CPUs claimed by os.cpu_count (the host's count, seen through the chroot), and NO archive paths — workspace, MEMORY.md, SOUL.md, caches all false, because Ember's archive was deliberately NOT bridged in (see gaps-by-design). One live answer: the gateway health check returned `{"ok":true,"status":"live"}` — the chroot shares the host's network namespace, so the guest can hear the main box's OpenClaw gateway on loopback. Evidence: `evidence/jobD-vm-selftest.txt`.
- **Shared kits — in the guest.** All of `openclaw-build/shared-kits/` copied additively to `home/ember-kit/shared-kits/`: crew roster header, THE-TOOLKIT, the five Gemini skill files, Ember's learned-corrections file, the freebies-first routing card, the feature manifest, both contact-card files, the kits index, and the disc_image_reading skill.
- **Skills index — in the guest.** `custom-skills/INDEX.md` at `home/ember-kit/skills/INDEX.md`.
- **Polyglot kit — in the guest.** `stripe.bmp` (the 28,854-byte picture that boots as a disc) + `POLYGLOT-METHOD.md` (the postulate + tested results, excerpted from the learning log) at `home/ember-kit/polyglot/`.
- **The guest's native kit — verified by running, not listing.** bash 5.2.21, perl v5.38.2, GNU coreutils 9.4 (incl. sha256sum), GNU tar 1.35, dpkg family with `dpkg --audit` CLEAN, mawk (invoked directly), full util-linux set, e2fs tools in /usr/sbin.
- **Timers — enabled-on-paper (from the opening pass, carried forward).** fstrim, dpkg-db-backup, e2scrub_all, motd-news: `timers.target.wants` symlinks in place, exactly the state `systemctl enable` would leave. They cannot fire — no init (gap below).

## CANNOT ENGAGE YET — dated gaps (Nov 12, 2026), not forced, not papered over

1. **Package installs** — no apt machinery: `apt-get` / `apt` / `apt-cache` verified ABSENT by running in the chroot. Installs stop here; no bootstrapping around it. Study path stands (extend the tree with apt, dpkg --get-selections before/after).
2. **Service starts** — no init: no /sbin/init, no systemd binary, no `systemctl`. Unit files exist; nothing can start them. The four timers above are enable-state only.
3. **Booting** — no kernel in any noble tree (boot/ is empty). The chroot is this guest's body; `open-guest.qcow2` beside the tree waits empty for an OS.
4. **git** — absent natively, and NOT bridged this pass: git is not a stdlib tool — a working git carry needs its binary + libcurl/gnutls chain + helper execs, a bigger bridge than this pass's rule (stdlib-alone) allows. Candidate for a later, deliberate bridge.
5. **curl / wget** — absent; no fetch tool in-guest. (Loopback reach exists — see the gateway answer above — but no client to use it with.)
6. **Compilers** — `gcc` / `cc` absent; nothing builds from source in-guest.
7. **`which` and `awk` — broken in-guest (clone artifact).** 40 absolute symlinks in this twin point at the Machine Zero tree's host path (`/home/hatch/workspace/machines/ubuntu-noble-fc/…`) — tar preserved them as-is. Inside the chroot those paths do not exist, so `which` and the `awk` alternatives chain fail (`command not found`, verified). Workarounds verified: `mawk` direct works; bash's `command -v` works. NOT silently repaired this pass: fixing means rewriting the alternatives links to guest-local targets — a deliberate, logged repair for a later pass.
8. **Ember's archive — deliberately NOT engaged (by design, not by failure).** MEMORY.md, SOUL.md, the workspace, the caches stay on the main box. This guest is the scratch/offload zone (VM scratch doctrine); the archive never moves into the heat. vm_selftest's all-false "places" reading is the proof the boundary held.

## LEFT BEHIND from ember-upgrades (checked, with reasons)

- Copied: `vm_selftest.py` only — the one self-contained stdlib tool at that folder's top level (imports: json, os, subprocess, urllib.request — all stdlib).
- Left: the guard trio was copied from `ember-upgrades/guard/` (above). Everything else there is documentation (not tools), host-path shell helpers, or venv trees (docling, faster-whisper, ocr, pdf, pandoc, searxng, whoogle, yt-dlp) — heavy, bound to the host's interpreter and paths, not stdlib-self-contained. They stay on the main box until a guest-local need names one.

## Undo

Everything this pass added lives under `home/ember-kit/` plus this ledger at the guest root. Undo: delete `home/ember-kit/` and this file — the guest returns to its post-opening state. The fuller undo stands behind it: discard the twin and re-clone from `open-guest-pristine/` (Machine Zero itself was only read, never touched).
