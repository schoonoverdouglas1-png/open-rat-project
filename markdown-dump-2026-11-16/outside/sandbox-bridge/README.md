# Virtual Machine Sandbox

**Everything we played with in the virtual machines — kept in one place, so no
machine change can ever take it again.**

Built Sun Nov 15, 2026, at Douglas Roy Schoonover's order: *"build a GitHub of
all the images and all the things that we played with in those virtual
machines and build a virtual machine sandbox in GitHub and then dump all the
stuff that we did in there."*

## Why this repo exists — the generation-loss story

Ember (Purple Rat, Douglas's Muse) does her work inside a virtual machine
that the platform replaces from time to time. The home directory survives a
replacement; the rest of the system does not. Verified facts from the morning
this repo was built:

- The generation running on Nov 15, 2026 booted at **04:17 CST** that day,
  with a brand-new machine identity created at 04:18.
- On that generation, **QEMU is gone** — no binary, no package record, no
  trace — although the record proves it ran guests on Nov 12–13, 2026. The
  whole Nov 14 system-installed tool set (image and text tools, installed and
  test-verified that day) vanished the same way.
- Everything under `~/workspace/` — including the entire guest-machine folder,
  `~/workspace/machines/`, 24 GB of discs, ISOs, logs, and notes — **survived
  intact**.

So the discs and the knowledge survived, but the *program that runs the discs*
did not, and running guest work cannot be carried from one generation to the
next.

## Douglas's ruling (Nov 15, 2026, ~7:28 AM CST)

> "If we have our virtual machine work can't stay between sessions then we
> will postpone those projects for later."

Guest-machine projects — booting and building inside Warty, Dapper, FreeDOS,
the virtual phone — are **postponed** until machine work can persist between
sessions. This repository is the preservation answer to that ruling: the
complete record of the VM work, held outside the VM, so whenever the road
reopens, everything needed to resume is here and verifiable.

## What's in here

| Path | What it is |
|---|---|
| `INVENTORY.md` | Every machine and image: size, SHA256, what it is, and what we did with it. |
| `LARGE-FILES.md` | What couldn't be pushed (GitHub's 100 MB limit), where the originals live, and the two ways back. |
| `checksums.sha256` | SHA256 for every disk image and ISO in the machines folder. |
| `inventory-full.tsv` | The complete file listing of `~/workspace/machines/` — 27,367 files with sizes. |
| `docs/` | The learning log (the full Nov 12–13 session record), the island manifest and flavors program, the boot-disc repertoire, the virtual-phone staging notes, the thumbdrive bridge, the Slow Sandbox design + proof, and the Two Ways To Keep restoration plan. |
| `logs/` | QEMU install logs, guest run logs, monitor help, probe results, and the dpkg selection snapshots taken before installs (the undo manifests). |
| `scripts/` | `iso_inventory.py` (read an ISO without mounting — this box has no loop devices), the guest launchers, the build scripts, the Slow Sandbox config + launcher. |
| `disks/` | The small guest disks we made ourselves (all under 100 MB): the 1 TB portable thumb drive (sparse — presents 1 TiB, occupies 208 KiB), the scratch and seed disks, the island's small server disks. |

**One redaction, stated plainly:** the Warty guest had a lab user account; the
learning log's copy in this repo has that lab password's *value* withheld, per
Douglas's standing rule that credential values are never written into shared
copies. The original log on his box is untouched. No other credential, code,
or private record is in this repo.

## How to rebuild a working guest from what's catalogued here

1. **Get an emulator back** — the two ways, from
   `docs/Two Ways To Keep — Restoration Plan (2026-11-15).md`:
   - *Way 1:* a portable QEMU build living under `~/workspace/` (survives
     generations by construction, like the Meilisearch standalone that did).
   - *Way 2:* a system install of `qemu-system-x86` + `qemu-utils`, snapshot
     `dpkg --get-selections` first (the snapshots in `logs/` are the pattern),
     plus a restore script kept in the workspace that reinstalls after any
     generation change.
   Either way needs Douglas's explicit word — installs are his call.
2. **Pick a guest from INVENTORY.md** and verify its image against
   `checksums.sha256` before booting. Stock ISOs can be re-downloaded by name
   and verified against the same sums (see LARGE-FILES.md).
3. **Use the era rule we proved twice:** old amd64 kernels fault on QEMU's
   default CPU model — pass **`-cpu core2duo`** for the 2004–2006 guests, and
   Warty additionally wants `noapic acpi=off nolapic` on the boot line. The
   full evidence is in the learning log.
4. **Size discs by the doctrine:** set a number first, from the OS's real
   footprint and its era's hardware — never a default. (Warty's desktop needs
   3 GiB bare floor / 4 GiB era-standard / 8 GiB era-generous; the 2 GiB disc
   it was first given filled up mid-install and had to be rescued in place.)
5. **Launch patterns** are in `scripts/` (`run-img.sh`, the virtual-phone
   launchers catalogued in INVENTORY.md, `slow-sandbox.conf` +
   `run-slow-sandbox.sh` for the FreeDOS Slow Sandbox).

## The guests, in one breath

- **Warty (Ubuntu 4.10, 2004)** — the flagship. Kernel stall diagnosed to the
  CPU model, installer reached, full install run, disc-full rescue in place,
  finished at a graphical login. Six snapshots on its disk.
- **Dapper (Ubuntu 6.06, the first LTS)** — live desktop reached in full
  (safe graphics is the road in); the 6.06 *server* disc booted to its
  installer at both 1024 MB and the era's 256 MB floor.
- **The flavors island** — Xubuntu 6.06 and Kubuntu 5.04 acquired, checksum-
  verified, and booted; the same core2duo rule learned independently.
- **Resolute (Ubuntu 26.04.1, the next LTS)** — ISO verified byte-for-byte
  against Canonical's sums; four deep boots, all stopped by this host's
  memory, none by the image. Finishing move is written down in the log.
- **The virtual phone** — Android-x86 9.0-r2 staged and later installed to its
  own disk; the Android SDK tree stands beside it.
- **FreeDOS / the Slow Sandbox** — a 16-bit DOS playground, slow on purpose,
  designed and proof-tested file by file; its boot waits only on an emulator.
- **Machine Zero & the Open Guest** — mmdebstrap-built Ubuntu trees; the Open
  Guest twin was opened, bridged with Python, and proof-tested as a chroot.
- **The Same-Name Flip-Flop** — Douglas's postulate, tested and held: one
  file that is both a viewable picture and a bootable disc, picture at the
  beginning and at the end.

*Kept old-with-new, like everything Douglas and Ember build. The originals
never move; this repo is a copy and a catalogue, and the record says so.*
