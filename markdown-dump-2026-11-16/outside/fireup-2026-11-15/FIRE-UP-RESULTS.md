# FIRE-UP BUILD — Results (Sun Nov 15, 2026, ~7:59–8:25 AM CST)

Douglas's order: "Restore all things and then test new tools. And if you have new tools
along the old tools and if you got more and more virtual machine, fire them all up and
I want you to have an image of my phone." + Part 5: "I want my phone backed up by image
and GitHub."

## 1. KIT STACK — components UP (verified by read-only probes); the kit-up run itself was permission-declined

- The background kit-up.sh exec was flagged **userConfirmationRequired → DECLINED** by
  the user mid-run. Per the denial, it was **not retried and not worked around**. The
  session remains open in that state for the parent/Captain to see.
- The components the script had already started were verified UP by direct read-only
  probes (not by re-running anything):
  - **Crew Gateway 7317 — UP.** `gateway.hello` → `ok:true`, server `crew-gateway`
    v0.2.0, protocol 4, 10 methods incl. approvals.list, crew.status, emulator.state.
  - **Clean GenKit UI 4000 — UP** (HTTP 200). **Reflection API 3100 — answering**
    (HTTP 404 on bare `/`, its normal root response).
  - **Dirty GenKit UI 3200 — UP** (HTTP 200). Exactly **2** node `genkit start`
    processes — preflight's runtime criterion.
  - **Firebase emulator hub 4400 — UP** (HTTP 200; `/emulators` returns the hub
    registry JSON, hub on 4400, UI on 4100).
  - Known limit (unchanged): captainBrief real model generation needs a Gemini API key
    in the runtime env — no key invented.

## 2. NEW TOOLS ALONGSIDE THE OLD — PASS

- **Meilisearch 1.56.2** (workspace standalone): `/health` → `{"status":"available"}`;
  2 docs indexed to `ember-test` (taskUid 0); search `q=Purple` → 1 hit, 8 ms; stats
  showed 2 documents. Instance **stopped after proof** (port 7701 silent, no process).
- **Restored portable set** (from `tools-restored-2026-11-15/`): fzf PASS (filter),
  bat PASS, miller PASS (CSV round-trip), shellcheck PASS (diagnostic emitted),
  rclone PASS (v1.68.2), csvkit PASS (csvlook 2.2.0, table rendered).

## 3. VIRTUAL MACHINES — ALL THREE BOOTED, originals never written

- **(a) FreeDOS Slow Sandbox — PROVEN, DOS prompt reached.** Floppy first per Ember's
  addition: FD14BOOT.img (extracted from the project's own FD14-LiveCD.zip; booted a
  run copy), launcher design (isapc, 486, 16 MB, icount, scratch disk). SeaBIOS →
  "Booting from Floppy..." → FreeDOS kernel 2043 → F5 skip → FreeCom 0.86 →
  **`A:\>` prompt**. OCR-verified (`fd-shot3.png`). The "illegal partition table"
  lines are InitDisk reading the blank scratch disk — expected. VM quit clean.
  (LiveCD not separately booted — the floppy proof was the flagship ask.)
- **(b) Island Dapper — PROVEN to the island's own target screen.** Original island
  arrangement reconstructed from ISLAND-MANIFEST.md: ubuntu-6.06-server-amd64.iso CD +
  dapper-server.qcow2 (snapshot=on), `-cpu core2duo`, 1024 MB. gfxboot menu
  (`dapper-shot1.png`) → debian-installer **[!] Choose language**, English highlighted
  (`dapper-shot3.png`, OCR-verified) — the exact screen where the island took its
  `dappersrv-at-language` snapshot on Nov 13. Disk alone was never bootable; with its
  CD it boots. VM quit clean.
- **(c) Warty — PROVEN, full boot to login.** warty-disk.qcow2 (snapshot=on),
  core2duo, 512 MB, boot from disk. Full service sequence [ok] →
  "Starting GNOME Display Manager... [ok]" → **`Ubuntu 4.10 "Warty Warthog" warty
  tty1 — warty login:`** (`warty-shot1.png`, OCR-verified). VM quit clean.

## 4. IMAGE OF HIS PHONE — honest result

- **(a) No screenshot exists or can be taken through the paired-device lane.** The full
  43-command list for the Pixel 7 Pro was read: there is **no screen-capture /
  screenshot command** in it. No `phone-screen-2026-11-15.png` was produced, and none
  was faked.
- **(b) Gemini asked** via gemini_ask.sh; her answer is filed at
  `gemini-pixel-answer.md` beside this file. Her honest line: she has **no live view**
  into the physical phone (no battery, no notifications, no filesystem); she reports
  the model facts (Tensor G2, Titan M2), the F-Droid flexibility, and that the "image"
  Ember holds is the shared local context.
- **(c) The phone's virtual image is catalogued**: `virtual-phone/phone-disk.qcow2`,
  2.65 GiB on disk, qemu-img clean, SHA256
  `b06c53e59cf519e8cc64b481c9a79a9b6b2f78a065476c2da2b1c4986e2ae64c` in the vm-sandbox
  `checksums.sha256` + `INVENTORY.md`. (qemu-img reports 100 TiB virtual; INVENTORY's
  "8 GiB virtual" wording is stale beside it — both readings kept, not merged.)

## 5. PHONE BACKUP BY IMAGE + GITHUB — DONE

- Repo: **schoonoverdouglas1-png/vm-sandbox**, new folder `phone-backup/`
  (PHONE-BACKUP.md, BACKUP-MANIFEST.md, device-state-2026-11-15.json).
- **Commit `506b660f676fa614a1a020c4683724f73a54db65`** on main, pushed and verified —
  `git ls-remote` head matches the local commit. Git commands passed the Guard checker.
- Fresh device state at backup time (~8:19 AM CST): **battery 13%, LOW, not charging**
  (was 30% at ~7:25 AM — flagged for the Captain), network connected via VPN (metered),
  Muse app 16.0.0.2.159, default assistant true, home shortcut pinned,
  run-in-background true, location Fairchild, WI.
- PHONE-BACKUP.md states plainly what the backup is and is not: virtual phone image +
  state record + catalogue; **a bit-for-bit image of the physical Pixel is not
  obtainable through the paired-device lane** — a physical image would need the phone
  in hand with USB/fastboot, a together-step in Douglas's hands.

## 6. PHONE IMAGE, MOUNTED + SEARCHABLE (Part 6, ordered ~8:20 AM CST)

Douglas: "You may make a virtual ISO of my phone so you can mount it in the virtual
machine and you may do searches through that."

- **(a) Mountable copy produced**: `~/workspace/machines/virtual-phone/phone-disk-2026-11-15.img`
  — raw image via `qemu-img convert -O raw` from phone-disk.qcow2. Apparent size
  109,951,162,777,600 bytes (the disk's 100 TiB sparse geometry), **1.3 GiB on disk**.
  Verified: `qemu-img compare` → **"Images are identical."** (A whole-file SHA256 of a
  100 TiB sparse raw was started, then deliberately stopped as impractical — compare is
  the verification; the qcow2's catalogued SHA256 stands as the hash anchor.)
  The bootable ISO of the phone line, `android-x86_64-9.0-r2.iso`, stays catalogued in
  `~/workspace/machines/images/` + the vm-sandbox INVENTORY as before.
- **(b) Searchable inventory — route log, honest per route**:
  - `qemu-nbd`: **FAILED** — "Failed to open /dev/nbd0: No such file or directory" (no
    NBD devices on this box).
  - `guestfish` / `virt-ls`: **ABSENT**. `fuse2fs`, `7z`, `fls`: **ABSENT**.
  - **debugfs route WORKED (read-only, no mount)**: GPT parsed in Python — part1 2 MiB
    (no filesystem signature, raw/empty), **part2 64 GiB ext, volume label
    "Android-x86"**, part3 ~100 TiB (the space-holder proof partition, empty). Part2
    extracted sparsely to scratch, walked recursively with debugfs (ls -p + ls -l,
    sizes matched by inode), scratch deleted after. (`/tmp` proved size-capped at
    ~50 MB mid-extraction; the walk ran from workspace scratch instead.)
  - **Inventory**: `~/workspace/machines/virtual-phone/phone-disk-inventory-2026-11-15.txt`
    (160,963 bytes) — **1,916 entries across 1,040 directories**, paths + sizes,
    file bytes sum 1,018,682,830. Top level: `/android-9.0-r2/` with `kernel`
    (7,511,040), `initrd.img` (1,358,743), `ramdisk.img` (1,914,143), `system.sfs`
    (942,682,112), `data/` and the nested `android-9.0-r2/data/` Android data tree.
  - **Search proof (grep against the inventory)**: `system.sfs` → 1 hit with size;
    `/kernel` → 1 hit with size; `android-9.0-r2/data/app` → 10 hits. All three pass.
  - Honest limit: `system.sfs` is a SquashFS image (the Android /system tree lives
    inside it); listing inside it needs `unsquashfs` (squashfs-tools) — **absent** on
    this box. It is inventoried as a file; the phone disk's own filesystem listing is
    complete.

## Guard / limits

Nothing destructive ran; every guest boot used copies or snapshot=on; originals
untouched; no external sends beyond the ordered GitHub push; no sign-ins; no spends.
One unrelated QEMU (qemu-system-m68k, the parent's Mac work) was observed running and
left alone.
