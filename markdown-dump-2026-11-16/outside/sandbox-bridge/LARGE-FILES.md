© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Large files — catalogued, not pushed

GitHub refuses files over **100 MB** in a normal push, and this sandbox's
working images are far past that. So the big discs and ISOs are **catalogued**
in [INVENTORY.md](INVENTORY.md) — name, size, SHA256, and the exact workspace
path where the original still lives — instead of being pushed. Nothing is
lost by this: the originals stay in `~/workspace/machines/` on Douglas's box,
and the checksums here prove any future copy is the same bytes we played with.

## The two ways back (per the Two Ways To Keep rule)

1. **Re-download the source by name + checksum.** Every stock ISO here came
   from a public archive (old-releases.ubuntu.com, releases.ubuntu.com,
   android-x86.org / SourceForge, freedos.org). INVENTORY.md records each
   file's exact name and SHA256, so a fresh download can be verified byte-for-
   byte against what we ran. Guest disks we *built* (the Warty install, the
   phone disk) cannot be re-downloaded — for those, way 2 or the workspace
   original is the road.
2. **Git LFS, if Douglas later wants the binaries in git.** Git Large File
   Storage is GitHub's own answer for files like these. It is not enabled on
   this repo today (it changes billing/storage terms, so it waits for his
   word). With LFS on, the catalogued images could be added as LFS objects
   with the same SHA256s recorded here as the verification target.

## What is catalogued-only, and why

| File | Size | Why not pushed |
|---|---|---|
| images/warty-disk.qcow2 | 3.68 GB | Over GitHub's 100 MB limit. The installed Warty guest — exists only here and in the workspace. |
| virtual-phone/phone-disk.qcow2 | 2.72 GB | Over the limit. |
| island/images/ubuntu-26.04.1-live-server-amd64.iso | 2.79 GB | Over the limit; re-downloadable, SHA256 matches Canonical's published sums. |
| island/images/ubuntu-25.10-live-server-amd64.iso | 2.18 GB | Over the limit; re-downloadable. |
| android-build/ SDK system images (system.img ×2, etc.) | 1.55 GB ea. | Over the limit; stock Android SDK pieces, re-downloadable from Google. |
| images/android-x86_64-9.0-r2.iso | 921 MB | Over the limit; re-downloadable (SHA256 published by the project). |
| images/dapper-desktop-amd64.iso | 694 MB | Over the limit; re-downloadable from old-releases.ubuntu.com. |
| island/images/xubuntu-6.06-desktop-amd64.iso | 658 MB | Over the limit; re-downloadable; MD5+SHA256 both match published sums. |
| island/images/kubuntu-5.04-install-amd64.iso | 587 MB | Over the limit; re-downloadable; MD5 matches published sums. |
| images/warty-release-install-amd64.iso | 540 MB | Over the limit; re-downloadable; byte-size + MD5 verified against the record. |
| scratch-polyglot/t2_pic_at_beginning.iso, t3_pic_at_end.iso | 540 MB ea. | Over the limit. These are *our* experiments (the Same-Name Flip-Flop discs) — they exist only in the workspace; the method and verdicts are fully documented in the learning log, and the discs can be rebuilt from the stock Warty ISO + the recipe in that log. |
| island/images/ubuntu-6.06-server-amd64.iso | 429 MB | Over the limit; re-downloadable. |
| freedos/FD14-LiveCD.zip | 280 MB | Over the limit; re-downloadable from freedos.org; contents already proven and inventoried in the Slow Sandbox brief (`docs/track9-slow-sandbox.md`). |
| android-build/ stock archives (sysimg.zip 687 MB, emulator.zip 334 MB, jdk17.tar.gz 185 MB, cmdline-tools.zip 147 MB, SDK .so libraries) | varies | Stock tooling, re-downloadable; the whole android-build tree is catalogued in INVENTORY.md, not pushed. |
| virtual-phone/space-holder-proof.img | 1 TB apparent / 8 KB on disk | A sparse proof file (Douglas's storage postulate test): it *presents* 1 TB and occupies almost nothing. Checksumming it would mean reading a terabyte of zeros; it is catalogued by size and nature instead. |
| android-build/ vendor.img ×2 | 94 MB ea. | Under the per-file limit but stock SDK content, re-downloadable — catalogued to keep the repo sane. |

Everything else — every log, config, script, note, and the small guest disks
we made (all under 100 MB) — **is** in this repo. See INVENTORY.md.
