© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Inventory — every machine, every image

The complete contents of `~/workspace/machines/` as of Sun Nov 15, 2026:
**27,367 files, 24 GB on disk** (apparent size 1,047 GiB, inflated by one
sparse proof file — see the phone section). Full per-file listing:
`inventory-full.tsv`. SHA256 for every disk image and ISO: `checksums.sha256`
and the table at the bottom of this file.

Status of the whole collection, one line: **all files survive; no emulator
exists on the current VM generation to run them** (see README.md). Guest
projects are postponed by Douglas's Nov 15, 2026 ruling; this inventory is
the preservation record.

---

## The guests

### Warty — Ubuntu 4.10 "Warty Warthog" (2004) — `images/`
- **Install disc:** `images/warty-release-install-amd64.iso` — 566,507,520
  bytes exactly (official size); MD5 `7159290f68dff2a93f1a07d2c2b6ce35` on
  file. Read file-by-file without mounting by our own `iso_inventory.py`
  (1,750 entries; kernel identified as 2.6.8.1-3-amd64-generic).
- **Guest disk:** `images/warty-disk.qcow2` — 2 GiB virtual, 3.68 GB on disk
  with snapshots. *Catalogued only (>100 MB).*
- **What we did:** the disc booted to ISOLINUX at once, then the 2.6.8 kernel
  stalled at hand-off for every graphics/RAM/CPU-count variation. A probe
  series isolated it: with `-cpu core2duo` and `noapic acpi=off nolapic` the
  installer language screen appeared. Full install followed (hostname
  `warty`, user `douglas` — a lab password was set; its value is withheld
  from this repo per standing rule; root disabled by design). The 2 GiB disc
  filled during the desktop stage (417 MB staged archives + 1,293 MB
  unpacked); Douglas ordered a rescue in place: archives cleaned (400 MB
  freed), `dpkg --configure -a` completed the whole backlog, audit clean,
  and the machine finished at a **graphical GDM login**. Snapshots on the
  disk: `warty-firstboot`, `warty-round2-pre`, `warty-installer-reached`,
  `warty-baseconfig-diskfull`, `warty-rescue-start`, `warty-installed`.
- **Sizing doctrine earned here:** floor 3 GiB / era-standard 4 GiB /
  era-generous 8 GiB — set a number from the era and the footprint, never a
  default.

### Dapper — Ubuntu 6.06 LTS "Dapper Drake" (2006) — `images/` + `island/`
- **Desktop live disc:** `images/dapper-desktop-amd64.iso` (694 MB,
  catalogued only). **What we did:** two instances — one parked at
  "Configuring X" as the control, one booted with safe graphics to the
  **full GNOME desktop**, played in via the monitor (pointer moved). A live
  disc swap was proven on a third guest: `change ide1-cd0` + `system_reset`
  rebooted a picture-CD guest into the real Dapper disc. `savevm` on a
  CD-only guest failed — no block device to hold the state — the lesson that
  promoted qemu-img to the front of the study queue.
- **Server disc:** `island/images/ubuntu-6.06-server-amd64.iso` (429 MB,
  catalogued only) — the first LTS server, found under `/releases/6.06.0/`.
  The published sums carry no entry for this exact build, so it was verified
  against the disc itself (volume ID, `.disk/info`, full inventory, and two
  spot files MD5-matching the disc's own `md5sum.txt`). **Booted to the
  installer language screen** at 1024 MB and again at the era's documented
  256 MB floor; snapshot `dappersrv-at-language` rides on its disk,
  `island/dapper-server.qcow2` (58 MB — **in this repo**:
  `disks/island-dapper-server.qcow2`, snapshot included).

### The flavors island — `island/`
Douglas's program: collect the era's Ubuntu flavors, verify each against
published sums, and boot each on the scratch guest. Program map:
`docs/FLAVORS-PROGRAM.md`; per-image manifest: `docs/ISLAND-MANIFEST.md`.
- **Xubuntu 6.06 desktop** — 689,985,536 bytes; MD5 and SHA256 both match
  published sums. Panics early on the default CPU model; **boots under
  `-cpu core2duo`** through gfxboot and usplash into the live-boot sequence.
- **Kubuntu 5.04 install** — 615,432,192 bytes; MD5 matches published sums.
  **Boots into a working debian-installer** under core2duo (text `boot:`
  prompt era — no live session on this disc).
- **Standing rule earned here (verified twice):** era amd64 kernels fault on
  QEMU 8.2's default `qemu64`; pass `-cpu core2duo`.
- Island disks in this repo: `disks/island-flavor-scratch.qcow2`,
  `disks/island-resolute-server.qcow2`. Island run logs in `logs/`.

### Resolute — Ubuntu 26.04.1 LTS "Resolute Raccoon" — `island/images/`
- `ubuntu-26.04.1-live-server-amd64.iso` — 2,927,861,760 bytes;
  SHA256 `cc8a95cde20f6ced61a322420de00f10cc3c90ced545daa46cb9c1a117f1d927`
  **matches Canonical's published SHA256SUMS exactly**.
- **What we did:** four boot runs, each carried through kernel, initramfs,
  systemd, and the full snap stack with Subiquity mounted — and each was
  stopped by this host (two reaped when their launching sessions ended, one
  OOM-killed at exit 137 beside the resident Warty guest, one cut by a host
  restart). Verdict: PARTIAL, the image never at fault. The finishing move —
  a quiet-window, foreground-held run at 1024–1536 MB until the Subiquity
  welcome screen, then `savevm resolute-at-installer` — is written in the
  learning log. Its 40 GiB target disk stands as `island/resolute-server.qcow2`
  (in this repo: `disks/island-resolute-server.qcow2`, still near-empty).
- Beside it: `ubuntu-25.10-live-server-amd64.iso` (2.18 GB, catalogued) —
  the "Questing Quokka" server image a sibling run played with, and
  `next-server.qcow2` / `next-seed.img` (in this repo under `disks/`).

### The virtual phone — `virtual-phone/`
- **Disc:** `images/android-x86_64-9.0-r2.iso` — Android-x86 9.0-r2
  (Pie-x86, kernel 4.19.110), 921 MiB on disk; project-published SHA256
  `f7eb8fc56f29ad5432335dc054183acf086c539f3990f0b6e9ff58bd6df4604e`.
- **Phone disk:** `virtual-phone/phone-disk.qcow2` — 8 GiB virtual, 2.72 GB
  on disk (catalogued only). Staged blank on Nov 12 (the launcher was proven
  to refuse to start without the ISO); the install run followed on Nov 13 —
  see `docs/install-run-2026-11-13.md` and the run logs in `logs/`.
  Launchers: `run-virtual-phone.sh` family (catalogued in
  `inventory-full.tsv`; the pattern is Warty's: monitor socket, USB tablet,
  boot order=d).
- **The proof file:** `virtual-phone/space-holder-proof.img` — 1 TB apparent,
  **8 KB on disk** (sparse). Built for Douglas's storage postulate test
  (Nov 10, 2026): the guest view is a constructed picture at the hypervisor
  boundary. Not checksummed — reading it would mean reading a terabyte of
  zeros; catalogued by size and nature.
- **The SDK tree:** `android-build/` (~27k of this folder's files are mostly
  here and in the Open Guest tree) — Android SDK + emulator + a portable JDK
  17, all stock and re-downloadable. Catalogued, not pushed.

### FreeDOS and the Slow Sandbox — `freedos/`
- `freedos/FD14-LiveCD.zip` — FreeDOS 1.4 LiveCD, 280 MB (catalogued only;
  re-downloadable from freedos.org). FreeCOM and kernel sources beside it in
  `freedos/freecom-src/` and `freedos/kernel-src/`.
- **What we did:** read the disc **without mounting** (this box has no loop
  devices): 3,535 entries, 191 package ZIPs, boot chain and configs verified
  in-image; the 1.44 MB floppy image's boot signature checks out (0x55AA).
  The **Slow Sandbox** — Douglas's design: one never-off DOS instance, slow
  on purpose (TCG single-thread, instruction-counted clock, 486/ISA-era
  hardware, `nice -n 19`), several DOS programs talking through a shared
  scratch disk, no network — is designed and proof-tested in
  `docs/track9-slow-sandbox.md`; its config and launcher are in `scripts/`.
  Booting it waits on an emulator (postponed, per the ruling).

### Machine Zero and the Open Guest — `ubuntu-noble-fc/`, `open-guest/`, trees
- mmdebstrap-built Ubuntu trees: noble (Machine Zero — "this one NEVER goes
  away," a preserved machine), jammy, focal (partial), plus dapper/warty
  stubs. Machine Zero finding: dpkg family present, **no apt-get** (minbase)
  — the Module 3 gap, never forced.
- **The Open Guest** — a scratch *twin* of Machine Zero (the original only
  ever read). Opened as a chroot: Ubuntu 24.04 answers, `dpkg --audit`
  clean, four timers enabled on paper, Python 3.12 bridged in from the host
  and verified in-guest, the crew's Guard run inside it (a destructive
  command refused, exit 99 — the Guard travels), a checksummed kit manifest
  verified 617 OK / 0 FAILED. Its empty 8 GiB boot disk is
  `open-guest.qcow2` — **in this repo** (`disks/open-guest.qcow2`).
- Snapshot tarballs of the trees live in `machines/snapshots/` (catalogued
  in `inventory-full.tsv`; all three sha256-verified in the log).

### The portable thumb drive — `portable-thumbdrive-1tb.qcow2`
Douglas's order (Nov 13, 2026): a 1 TB virtual thumb drive, portable storage
across all the machines. `qemu-img create -f qcow2 … 1T` — presents
**1 TiB** to guests, occupies **208 KiB** (sparse; grows only as written;
the host's free space is the honest ceiling). **In this repo:**
`disks/portable-thumbdrive-1tb.qcow2`.

### The Same-Name Flip-Flop discs — `scratch-polyglot/`
Douglas's postulate (Nov 12, 2026): one file, one name, that is both a
viewable picture and a bootable disc — picture at the beginning, picture at
the end. Tested on copies of the Warty ISO with a 120×80 purple-and-white
stripe bitmap (28,854 bytes — Ember's colors):
- **T1** (BMP + ISO head appended): renders as a picture, payload intact.
- **T2** (BMP inside the ISO's unused 32 KiB System Area): renders as the
  picture, inventories identically as an ISO, **boots to ISOLINUX**.
- **T3** (BMP appended after the ISO's end): inventories identically,
  **boots**, tail picture recoverable byte-identical.
- **Verdict: HOLDS, both halves**, at the ISO9660/BMP scale tested. The two
  540 MB combined discs (`t2_pic_at_beginning.iso`, `t3_pic_at_end.iso`)
  are catalogued only; they can be rebuilt from the stock Warty ISO by the
  recipe in the learning log. The scratch disk is in this repo
  (`disks/scratch-disk.qcow2`).

### Boot discs and the thumbdrive bridge — `boot-discs/`, `thumbdrive-bridge/`
- `docs/REPERTOIRE.md` — the boot-disc repertoire notes.
- The thumbdrive bridge — manifest, bridge notes, and sync script
  (`docs/thumbdrive-bridge-README.md`, `docs/BRIDGE.md`,
  `docs/drive-manifest.json`, `scripts/sync-thumbdrive.sh`).

### Host-side records — root of `machines/`
- `docs/LEARNING-LOG-2026-11-12.md` — the master session record (lab
  password value withheld in this copy; original untouched).
- `logs/` — QEMU install logs (Nov 12–13), guest run logs, monitor help,
  Warty probe results, and the **dpkg selection snapshots** taken before
  installs — the undo manifests, per the Reversibility Rule.
- `scripts/` — `iso_inventory.py` (the no-mount ISO reader, stdlib-only),
  launchers and build scripts (`run-img.sh`, `vm-watch-loop.sh`, the
  `build*.sh` tree builders), the Slow Sandbox pair.
- QEMU monitor socket/pid leftovers (`qemu-mon-*.sock`, `qemu-next.pid`) —
  stale files from the last generation's runs; catalogued in
  `inventory-full.tsv`, not pushed (they are runtime debris, kept on disk
  where they fell).

---

## Image table — sizes and SHA256

| File (relative to `~/workspace/machines/`) | Size | SHA256 |
|---|---|---|
| `images/warty-disk.qcow2` | 3.60 GiB | `da763b53524ad893d75820b95a03fc55d1daa6685531289db7bcf60e85a1f0f0` |
| `island/images/ubuntu-26.04.1-live-server-amd64.iso` | 2.73 GiB | `cc8a95cde20f6ced61a322420de00f10cc3c90ced545daa46cb9c1a117f1d927` |
| `virtual-phone/phone-disk.qcow2` | 2.65 GiB | `b06c53e59cf519e8cc64b481c9a79a9b6b2f78a065476c2da2b1c4986e2ae64c` |
| `island/images/ubuntu-25.10-live-server-amd64.iso` | 2.13 GiB | `dc54870e5261c0abad19f74b8146659d10e625971792bd42d7ecde820b60a1d0` |
| `android-build/sdk/system-images/android-34/default/x86_64/system.img` | 1.51 GiB | `cebcc7a69782898f6bc28372eb17ada582d5f31cf851180e39a5561917b6b998` |
| `android-build/emu/sysimg-x/x86_64/system.img` | 1.51 GiB | `cebcc7a69782898f6bc28372eb17ada582d5f31cf851180e39a5561917b6b998` |
| `images/android-x86_64-9.0-r2.iso` | 921.0 MiB | `f7eb8fc56f29ad5432335dc054183acf086c539f3990f0b6e9ff58bd6df4604e` |
| `images/dapper-desktop-amd64.iso` | 693.8 MiB | `d7dcf6816aa10fd72d508137a928f15fdde49fc9fbfc80c17a5330e1632dc072` |
| `island/images/xubuntu-6.06-desktop-amd64.iso` | 658.0 MiB | `2f3e814cc7882733ff1ad6f0948fe4931fc623ca84dd0410d6dfd05b8eea9e4f` |
| `island/images/kubuntu-5.04-install-amd64.iso` | 586.9 MiB | `c103d2e751840a6fd29dc978ddf6f7624928efd55c63b5babdaf81a4e3aede0b` |
| `scratch-polyglot/t3_pic_at_end.iso` | 540.3 MiB | `ab2de4bbb25a6f9180eaf089bd3fc2a1304cf878769bc0ad651dfd3f4948d21b` |
| `scratch-polyglot/t2_pic_at_beginning.iso` | 540.3 MiB | `9d607214eadf8ab11a478437da03aa1c1293a0930c8eb3af44c7955c832f0a62` |
| `images/warty-release-install-amd64.iso` | 540.3 MiB | `f185da1e4743e346a636a2d32ccb52f49ff5f8c184abd25db29aa1e855d1f5ef` |
| `island/images/ubuntu-6.06-server-amd64.iso` | 428.5 MiB | `40eeb4a4c0d98e81339bdad40e98af70051bdc691da468ab3dc7e4258884c2d2` |
| `android-build/sdk/system-images/android-34/default/x86_64/vendor.img` | 94.0 MiB | `8247f58165ffe421951db001bbf93d3a202a41f1daba856717a8c80d8e9a1961` |
| `android-build/emu/sysimg-x/x86_64/vendor.img` | 94.0 MiB | `8247f58165ffe421951db001bbf93d3a202a41f1daba856717a8c80d8e9a1961` |
| `island/dapper-server.qcow2` | 58.0 MiB | `cb1ebe33b507334c4cfa3d14b9fd650ed76083a159977882e3b2046ea4cd9ab3` |
| `android-build/sdk/system-images/android-34/default/x86_64/encryptionkey.img` | 18.0 MiB | `522bd0b6a2c92e37de465059bb9487bb9597a9aae032b469a8ebe0b38146d8c3` |
| `android-build/emu/sysimg-x/x86_64/encryptionkey.img` | 18.0 MiB | `522bd0b6a2c92e37de465059bb9487bb9597a9aae032b469a8ebe0b38146d8c3` |
| `next-seed.img` | 8.0 MiB | `b3876de227e7824cdb2a016b173302e9655718c890ddef43b06c815400ec610f` |
| `images/test-disk.qcow2` | 3.0 MiB | `2216899218206ba34fab1a63d5cbea0217e6bae0f63770bbf2b69e74ef5ee305` |
| `android-build/sdk/system-images/android-34/default/x86_64/ramdisk.img` | 1.7 MiB | `92ed611f439085a204170439c4be2c460dc296270d4d0764ac05ff1d66b9c9a3` |
| `android-build/emu/sysimg-x/x86_64/ramdisk.img` | 1.7 MiB | `92ed611f439085a204170439c4be2c460dc296270d4d0764ac05ff1d66b9c9a3` |
| `android-build/sdk/system-images/android-34/default/x86_64/userdata.img` | 1.0 MiB | `30e14955ebf1352266dc2ff8067e68104607e750abb9d3b36582b8af909fcb58` |
| `android-build/emu/sysimg-x/x86_64/userdata.img` | 1.0 MiB | `30e14955ebf1352266dc2ff8067e68104607e750abb9d3b36582b8af909fcb58` |
| `island/resolute-server.qcow2` | 320 KiB | `b0c41deec49b4bb2345d8f5b73dc6f253ccb8f667ceb247127f8afc0ff5d31cd` |
| `portable-thumbdrive-1tb.qcow2` | 208 KiB | `aff06a546faabbf67123b750dfd8d49e0406d576730050a229c094a45ed40ec3` |
| `next-server.qcow2` | 192 KiB | `6f0c8e36e73631bbd9a67a5cfd821b0758abac60425004fb514fae5126edef31` |
| `open-guest.qcow2` | 192 KiB | `036c4aabd93a72a0c98d64c5f796ce0bd9f06a2e55c99a5699d928872de28298` |
| `island/flavor-scratch.qcow2` | 192 KiB | `08587a3503226a49b8739afba6a79783190995c042d6f0c330a988bd44ec0d49` |
| `scratch-polyglot/scratch-disk.qcow2` | 192 KiB | `c199c9b64a0a6b5d90dac10b340b1f1e835f6478dc0df18efd0d1b89ed67875a` |
| `open-guest/home/ember-kit/testdata/tiny.iso` | 48 KiB | `6938824dd0a9b808eaed037c4fb5d1670b7c8c5860f685d2b13e102d70bf3d67` |
| `virtual-phone/space-holder-proof.img` | 1 TiB apparent / 8 KiB on disk (sparse) | — not checksummed (see phone section) |

## Totals

- **33 disk images / ISOs** catalogued (32 checksummed + the sparse proof
  file catalogued by nature).
- **9 small disks pushed** in `disks/` (~73 MB total): the thumb drive, the
  Open Guest disk, next-server, next-seed, the island's Dapper server disk
  (with its at-language snapshot), both island scratch disks, the Module 1
  test disk, the polyglot scratch disk.
- **Everything ≥100 MB or stock-and-redownloadable: catalogued only** —
  see LARGE-FILES.md for the itemized list and the two ways back.
- Originals: `~/workspace/machines/` on Douglas's box — **never moved, never
  deleted**; this repo holds copies and the catalogue.
