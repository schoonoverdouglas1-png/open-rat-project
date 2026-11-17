# Track 9 — Slow Sandbox: Design + Local Proof
**Big Builds, Sun Nov 15, 2026 · Status: DESIGN DONE, IMAGE PROOF PASS, BOOT BLOCKED on one named step (below)**

## 1. The doctrine (Douglas's, Nov 14, 2026 ~11:43–11:44 AM, `~/memory/2026-11-14.md`)
> Fiddle with the clock/clock speed like the old days; run 16-bit in a VM; run several things in the same VM instance and let them talk to each other; load many virtual images in a back-end VM that never shuts off; sandbox everything there **SLOW ON PURPOSE**; the less mission-critical work is backburnered slightly because some things have to work always.

Filed beside it in the record: DOS-era clock throttling is documented; FreeDOS is the 16-bit guest (the LiveCD downloaded Nov 14 is its disc); TCG software emulation is already slow — here that is a feature. Post-reset build line, **beside the dirty runtime**, in the priority tiers.

## 2. Design

**One back-end instance, never shut off (once Douglas approves the start), holding many images:**
- **Host side:** this Ubuntu VM, TCG pure emulation only — verified standing fact: no `/dev/kvm`, no `/dev/loop*`, no `/dev/nbd*` on this box (disc-image skill, Nov 12). Emulation slowness is load-bearing, not a bug.
- **Guest:** FreeDOS 1.4 LiveCD — 16-bit real-mode DOS. One instance, several DOS programs inside it talking to each other the DOS way: a shared scratch disk (drive C:), TSR/batch pipelines, and files as the message bus — exactly how multi-program DOS setups actually communicated.
- **Slow on purpose, three stacked brakes:** (1) TCG single-threaded (`-accel tcg,thread=single`); (2) virtual-clock throttling (`-icount 1,align=off,sleep=on` — instruction-counted time, host sleeps between); (3) era hardware (`-cpu 486 -machine isapc -m 16` — 16 MB, ISA-era). Launcher additionally runs `nice -n 19` (backburner priority: kit stack and mission-critical work always win the CPU).
- **Many images, one instance:** the LiveCD is the boot image; `FD14BOOT.img` (1.44 MB floppy) attaches as a second image; further images from `~/workspace/machines/images/` attach as CD/floppy/disk drives per the Captain's run-img.sh model ("an .img/.iso IS a drive"). Originals are **read-only**; the sandbox boots an extracted *copy* in its own work dir.
- **Isolation:** `-nic none` — no network at all. The sandbox talks to itself (shared scratch disk, serial log file, local unix monitor socket in its own directory). Nothing routes out; nothing routes in.
- **Placement:** beside the dirty runtime, never in it. **The kit stack was not changed, restarted, or disrupted in this run — read-only probe only** (see §4).

**Files built this run** (all under `~/workspace/big-builds-2026-11-15/slow-sandbox/`):
- `slow-sandbox.conf` — the full minimal config, commented, data-only
- `run-slow-sandbox.sh` — launcher; dry-run by default, real boot needs qemu present **and** an explicit `--go`
- `smoke-test.py` — read-only proof harness (stdlib only), writes only inside the sandbox dir
- `smoke-result.txt` — the proof output (verbatim below)
- `work/FD14LIVE.iso` — extracted copy (316,557,312 B) of the LiveCD; `work/iso-inventory.txt` — full inventory (359 lines)

## 3. Proof — SMOKE TEST PASS (run 2026-11-15, Guard-checked, exit 0)
```
zip testzip badfile: None
zip entries: {'FD14BOOT.img': 1474560, 'FD14LIVE.iso': 316557312, 'readme.txt': 5661}
extracted copy: .../slow-sandbox/work/FD14LIVE.iso 316557312 bytes (original zip untouched)
iso_inventory exit=0 output_chars=12766
  inventory contains KERNEL.SYS: True
  inventory contains COMMAND.COM: True
  inventory contains isolinux: True
  inventory contains FDCONFIG.SYS: True
  inventory contains FDAUTO.BAT: True
floppy boot signature 0x55AA: True; bytes/sector=512; sectors/cluster=1; size=1474560
MZ headers in first 8MiB of ISO: 247
KERNEL.SYS string in ISO: True
```
Plus, from the full inventory (`work/iso-inventory.txt`): volume `FD14-LiveCD`, **3,535 entries / 3,395 files**, `/COMMAND.COM` 87,772 B, `/FDOS_X86/KERNEL.SYS` 46,485 B, `/FREEDOS/BIN/` toolset present (7ZA.EXE, FDNPKG.EXE, GZIP386.EXE, UNZIP.EXE…). Source zip: `~/workspace/machines/freedos/FD14-LiveCD.zip`, sha256 begins `2020ff6bb681967fd6…`. FreeCOM + kernel sources sit beside it in `~/workspace/machines/freedos/{freecom-src,kernel-src}/`.
**Verdict: the FreeDOS image is intact, its boot media are valid, and its DOS binaries are inspectable with the existing tooling** (crew `iso_inventory.py`, per the disc-image-reading skill — no mounting, which this box cannot do anyway).

## 4. Kit stack — read-only check only
TCP probe of 127.0.0.1 at ~07:05 CST, Nov 15: **7317, 4000, 3100, 3200, 4400 all connection-refused in this VM** — no listener found, and no process matching genkit/gateway/firebase/qemu. Nothing was started, restarted, or altered (per this track's hard limit). Honest reading: the kit stack is either not running at this hour or runs on a different host/VM than this subagent's box; **which of those is true needs the parent/Douglas to confirm — this track does not touch it either way.**

## 5. The one blocked step + whose hand
**Actual boot is not yet proven, and is not claimed.** `qemu-system-x86_64` / `qemu-img` are **ABSENT on this VM iteration** (checked: PATH, `/usr/bin`, dpkg — all empty), although the record shows qemu was installed Nov 13, 2026 (`~/workspace/machines/qemu-install-2026-11-13.log`; undo manifest `dpkg-selections-before-qemu.txt` beside it). The launcher detects this and exits 2 with the would-be command printed.
- **Remaining:** (a) reinstall qemu-system-x86 + qemu-utils — a package install: needs **Douglas's explicit go** (Reversibility Rule: snapshot `dpkg --get-selections` first, as was done Nov 12); (b) then `./run-slow-sandbox.sh --go`, screendump via the monitor socket to prove the DOS prompt; (c) only after that, the "never shuts off" standing instance + multi-image load — a persistent-process decision, also Douglas's.
- **Ember's addition (labeled hers):** when qemu returns, prove boot from the *floppy* image first (1.44 MB, signature already verified) before the 316 MB LiveCD — smallest bootable thing first, same least-steps logic as the proof above.

*Simply put: the slow DOS playground is designed and its disc checks out completely — every file a DOS machine needs to start is verifiably inside it. The emulator program itself isn't on this box right now, so the machine hasn't been switched on yet; that install is one approved step away.*
