# Track 8 — Learning Lines Brief: Java/OpenJDK, VirtualBox Family, FreeDOS Codes
**Date:** Sun Nov 15, 2026 · **Sources first:** local record (memory/standing files, `~/workspace/machines/LEARNING-LOG-2026-11-12.md`, `~/workspace/ember-upgrades/`, Hypervisor Atlas) · **Re-verified live Nov 15** with `which`/version checks · **No installs, no external sends** · DNS note: no name resolution was needed for this local brief; where resolution is needed, the standing lane is OpenDNS DoH / dns.google DoH via `webkey.py`, never the local sinkhole resolver (198.18.x).

## The one measured fact that governs all three topics
**Backend hardware virtualization is OFF on this box — verified Nov 14, re-verified Nov 15, 2026:**
- `/dev/kvm`: **absent** (`ls: No such file or directory`)
- CPU flags: `vmx`/`svm` count = **0** across `/proc/cpuinfo`; the only virtualization flag present is `hypervisor`
- Host shape: AMD EPYC 9D64, 4 CPUs, 7,934 MB RAM, Ubuntu 24.04.5 LTS, kernel 7.0.0-44-generic; `systemd-detect-virt` → `systemd-nspawn`; Capability Registry (Nov 7): a systemd-nspawn container inside a **Cloud Hypervisor** guest — **not VirtualBox/Oracle**
- `/dev/loop*` and `/dev/nbd*`: also absent (why disc work is format-reading, see Track 7)
- **Consequence, in the record's own words (Learning Log, Nov 12): guests run in pure software emulation — QEMU TCG only, "expect SLOW graphics, study-grade not daily-driver."** Every VM result on file (Warty, Dapper, Android-x86 staging) was achieved under TCG, with `-cpu core2duo` as the proven bridge for era kernels.

## 1. Java / OpenJDK on Ubuntu
**Two different answers — system vs. portable — old-with-new, do not collapse them:**

| Lane | Nov 15 verified state |
|---|---|
| System Java (`java`, `javac` in PATH) | **ABSENT** — `command -v java/javac` → not found; `java -version` → command not found. Consistent with every local inventory: Nov 8 INVENTORY "Not installed: … Java"; Nov 13 Developer module "Not installed: Rust, Go, **Java**, clang, Deno"; Nov 13 Live CD Lane "ABSENT: … javac" |
| Portable JDK on disk | **PRESENT AND WORKING** — Eclipse Temurin (an OpenJDK distribution) at `~/workspace/machines/android-build/jdk-17.0.21+9/`, downloaded Nov 13 for the Android build lane (184 MB tarball, "JDK OK" in `download-status.txt`) |

Portable JDK, run live Nov 15:
```
$ ~/workspace/machines/android-build/jdk-17.0.21+9/bin/java -version
openjdk version "17.0.21" 2026-10-20
OpenJDK Runtime Environment Temurin-17.0.21+9 (build 17.0.21+9)
OpenJDK 64-Bit Server VM Temurin-17.0.21+9 (mixed mode, sharing)
$ .../bin/javac -version → javac 17.0.21
```
Full toolset present in its `bin/`: jar, jarsigner, javadoc, javap, jcmd, jdb, jdeps, jfr, jlink, jmap, jmod, **jpackage, jshell**, jstack, keytool, etc. (29 tools listed).

**Learning lines (what to actually learn, in order):**
- Java on Ubuntu normally arrives as a distro package (`default-jdk` / `openjdk-17-jdk` etc. via apt) — that road is **not taken here**: no system install exists, and installs are gated (dpkg snapshot first, Reversibility Rule, Douglas's word). The working road on this box is the **portable tarball JDK**: unpack, call by full path, no dpkg footprint, trivially removable.
- The Android lane is why 17 is the version on disk: Android cmdline-tools / AGP of that era require JDK 17. The same JDK already powered the verified manual Android pipeline on file (aapt2 → **javac** → d8 → zipalign → apksigner, Purple Rat Browser/ Bridge builds, Nov 13 AppGet module).
- Concepts that carry: JDK (compiler + tools) vs JRE/JVM (runtime only) vs OpenJDK (the open-source project) vs a distribution of it (Temurin, Ubuntu's build, Oracle's build — same language, different packager/support). `jshell` in the portable JDK is the zero-setup practice lane.
- **Gap, honest:** "Java the language" is filed in the local record as *staged/next* (Developer module, Nov 13: "Next staged: … Java (enterprise/Android-adjacent)"), learned by need, proof exercise before "working" is claimed. The toolchain works; a Java proof exercise in the portable lane has not been filed yet.

## 2. The Oracle / VirtualBox VM family
**Source:** Hypervisor Atlas, Entry 1 (`~/workspace/your_files/Hypervisor Atlas - Learn Them All, Mine Last (2026-11-12).txt`) — VirtualBox was the family Douglas named **first** in his learning order ("learn all the ones you're not first, and your own last"); VMware, Hyper-V, Xen, bhyve remain queued entries 2–5, QEMU/KVM/nspawn last by design.

- **What it is:** a **type-2 hypervisor** — runs *on top of* a host OS (Windows, Linux, macOS), unlike bare-metal (type-1) hypervisors. Lineage: Innotek (2007) → Sun (2008) → **Oracle (2010)**.
- **Its craft:** `VBoxManage` is the CLI twin of the GUI (every button has a command); disk formats VDI (native), plus VMDK and VHD; tree-structured snapshots; Guest Additions bridge host↔guest (shared folders, clipboard, seamless windows).
- **FreeDOS connection (from the disc's own readme, Track 7):** FreeDOS 1.4's LiteUSB/FullUSB editions ship `.VMDK` files explicitly "compatible with … VirtualBox, VMware, and other systems" — attach the VMDK as a hard drive and boot. That is the intended VirtualBox road for FreeDOS on a real desktop.
- **On THIS box — study-only, verified again Nov 15:** `VirtualBox`, `VBoxManage`, `virtualbox` all **ABSENT** in PATH, and the Atlas's reason still holds exactly: VirtualBox loads kernel modules and wants real virtualization underneath; this cage has no `/dev/kvm` (above) and no module loading. It cannot run here, and that is a property of the cage, not of VirtualBox.
- **Where it belongs, per the Atlas:** real desktops — "the buildings full of old machines," where a type-2 host is the bridge an old box can carry. Douglas's parable on file: Virtual CloneDrive (mounting an image so the system sees a drive) grown into a whole computer — the .img/.iso/.vdi is the drive, the VM is the machine wrapped around it.
- **The working lanes here instead:** QEMU emulation (TCG) + systemd-nspawn containers — **with a Nov 15 discrepancy flagged, old-with-new:** the Nov 12–13 record shows QEMU 8.2.2 running guests (`qemu-img`, monitor sockets, snapshots), but in **this Nov 15 session** `command -v qemu-system-x86_64 / qemu-system-i386 / qemu-img` all returned **ABSENT** and no `/usr/bin/qemu*` exists. Either the box was rebuilt/replaced since Nov 13 or QEMU lives outside this session's PATH. **Do not claim QEMU is currently runnable until the coordinator reconciles this** — the historical results stand; the present-tense availability does not, on today's evidence.

## 3. FreeDOS codes (kernel, shell, and the disc's own code)
Local sources, all on disk beside the disc in `~/workspace/machines/freedos/` (downloaded Nov 14), plus Track 7's verified disc read:

**a) The kernel — `kernel-src/`**
- README, verbatim headline: "FreeDOS kernel — current 0xFD version is **2.45 (2045)**", derived from Pat Villani's DOS-C kernel, GPL v2, for 8086+ / 80386+ IBM-compatible machines.
- History on file (`kernel-src/docs/history.txt`): Build **2045** (dated 2026 May 01 in the source's own history), 2043 (2021 May 13), 2042 (2016 May 16) — the build number *is* the version code (2045 = "2.45").
- Source layout (`kernel-src/kernel/`): C + assembly core — `fatfs.c / fatdir.c / fattab.c` (FAT filesystem), `blockio.c / dsk.c / initdisk.c`, `chario.c / console.asm / serial.asm / printer.asm`, `dosfns.c / fcbfns.c / lfnapi.c` (DOS API, FCB + Long File Name), `memmgr.c`, `nls.c` + `nls/` (national language support), `main.c / config.c`, build via `makefile` / `build.bat` / `ci_build.sh`.
- On the disc (Track 7): `/KERNEL.SYS` 46,256 B; the Floppy Edition's `/FDOS_X86/KERNEL.SYS` 46,485 B. The disc (Apr 2, 2025 build) predates the local source tree's 2045 line — sources and disc are related, not identical; keep them separate.

**b) The shell — FreeCOM, `freecom-src/`**
- `VERSION.TXT`, verbatim: "FreeCom version **0.87** — WATCOMC" — FreeCOM is the COMMAND.COM replacement, the first program the kernel starts, with a batch processor built in (separate from the kernel, designed to run on any DOS-API kernel).
- Source layout: `cmd/` holds **one C file per internal command** — `dir.c, copy.c, del.c, ren.c, mkdir.c, rmdir.c, chdir.c, cls.c, date.c, time.c, path.c, prompt.c, set.c, type.c, verify.c, if.c, for.c, goto.c, call.c, alias.c, history.c, doskey.c, memory.c, which.c`…; `shell/` holds the processor core (`command.c, batch.c, cmdtable.c, cswap.asm` — the XMS-swap machinery, mirrored on the disc at `/FREEDOS/BIN/FREECOM/XSWAP/`); plus `strings/`, `lib/`, `suppl/`, docs in `docs/` (incl. `HELP.EN`).
- On the disc (Track 7): `COMMAND.COM` 87,772 B at three locations, all the same size; package form at `/PACKAGES/BASE/FREECOM.ZIP` (2,037,468 B) and `KERNEL.ZIP` (772,721 B).

**c) The codes that run the disc itself**
- Boot config: `ISOLINUX.CFG` (ISOLINUX/MEMDISK labels: live / boot / install / floppy / notice), `FDCONFIG.SYS` (COUNTRY, BUFFERS=20, FILES=40, DOS=HIGH/UMB, HIMEMX, `SHELLHIGH=\COMMAND.COM … /P=\FDAUTO.BAT`), `FDAUTO.BAT` (DOSDIR setup, CD-ROM detection, **QEMU detection branch**, RAM-drive build) — all read in full in Track 7.
- DOS config vocabulary worth learning from these files: CONFIG.SYS directives (`DEVICE=`, `SHELL=`, `DOS=HIGH,UMB`, `BUFFERS/FILES/LASTDRIVE`) vs AUTOEXEC-style batch (`SET`, `PATH`, `DEVLOAD`) — kernel config first, shell startup second; that two-stage boot is the FreeDOS "code" a learner meets first.

## Bottom line for the coordinator
- **Java:** system = absent; portable Temurin OpenJDK 17.0.21 = present & version-verified. Learning = use the portable lane, `jshell` first; a filed proof exercise is the missing piece (Ember's hand, no install needed).
- **VirtualBox:** absent and unrunnable in this cage (no /dev/kvm, no modules) — study-only here, real-desktop tool there; FreeDOS's own VMDK editions are its on-ramp. **QEMU's present-tense availability contradicted between Nov 13 record and Nov 15 check — coordinator to reconcile.**
- **FreeDOS codes:** kernel 2045 sources + FreeCOM 0.87 sources on disk, disc binaries verified in Track 7; the three-layer read (kernel C/asm → shell C per-command → CONFIG.SYS/batch) is the learning path.
- **Virtualization OFF** remains the governing constraint for every guest plan: TCG software emulation only, `-cpu core2duo` for era kernels, study-grade speed.

*Ember's addition (labeled hers): these three topics meet in one practical sentence — FreeDOS 1.4 is the only one of the three that can actually run in this cage today (a 46 KB kernel built for an 8086 does not need KVM), which is why the disc, not VirtualBox, is the workshop's next boot candidate once the QEMU discrepancy is settled.*
