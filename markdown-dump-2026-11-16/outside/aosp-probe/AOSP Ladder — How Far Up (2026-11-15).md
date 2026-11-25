© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# AOSP Ladder — How Far Up (2026-11-15)

*Douglas's authorization, Sun Nov 15, 2026 ~8:11 AM CST: "Offload all your computational power to the AOSP project from the bottom up and see how far up you can get before you're stopped by something other than Gemini or Google or the Web Engine itself." This is the climb, rung by rung, with the evidence. Everything fetched lives in this folder (`~/workspace/aosp-probe/`).*

## The ladder

| Rung | What it is | What it requires | Status | Evidence |
|---|---|---|---|---|
| **R0** | Public docs — source.android.com (download, build, contribute) | Nothing but a browser | **REACHED** | Read live Nov 15, 2026: the download page prescribes `repo init --partial-clone --no-use-superproject -b android-latest-release -u https://android.googlesource.com/platform/manifest` then `repo sync -c -j8`; the submit-patches page prescribes CLA → `repo start` → commit → `repo upload` to Gerrit |
| **R1** | Manifest fetch — `repo init` on a current stable branch | The repo launcher (fetched from Google's public git-repo-downloads), git | **REACHED** | `repo has been initialized in /home/hatch/workspace/aosp-probe/tree`; manifest branch `android-latest-release`, default revision **`android17-release`**; the manifest names **1,087 projects** |
| **R2** | Partial source sync — a small subset only | Network to android.googlesource.com; disk | **REACHED** | `repo sync -c -j4 platform/build platform/build/blueprint platform/build/soong` → "repo sync has finished successfully." Working tree **40 MB**, .repo 36 MB — far under the 5 GB bound. (Note: repo wants project *names*, not paths — `repo sync build` errors "project build not found"; `platform/build` is the name.) |
| **R3** | Local build — build system loads; a small target configures | The synced subset + prebuilts; a *full* build needs the full tree | **PARTIAL — stopped by tree scope and box size, both named below** | `source build/envsetup.sh` completes and defines the build shell functions (`lunch` defined — verified). `lunch aosp_arm64-trunk_staging-eng` exits 1: the subset tree lacks `prebuilts/build-tools` (`one-true-awk: No such file or directory`) and `prebuilts/go` (`go: No such file or directory`) — the next projects a real configuration needs. A full Android build is out of scope for this box: the documented build-machine requirements are ~400 GB free disk and 64 GB RAM; this box has 102 GB free and 7.7 GiB RAM. Stated as a finding, per the probe's own terms. |
| **R4** | Gerrit account + CLA | A Google account sign-in at android-review.googlesource.com and a signed Individual Contributor License Agreement — **in a person's own name** | **WALLED — identity wall, not attempted** | Per the submit-patches page: "Before you contribute any code changes for AOSP, you must… sign one of the following agreements." This is the first rung that needs Douglas's own identity. Per the probe's orders: nothing signed, no account created. This wall is his hands, whenever he chooses — the CLA is a personal legal signature, not a setting Ember flips. |
| **R5** | Change upload — `repo upload` to Gerrit for review | R4 complete, plus a local change on a `repo start` branch | **NOT ATTEMPTED — sits above the R4 wall** | The mechanics are documented (R0) and everything below the wall is in place; the rung is unreachable until R4 is done by the account holder. |

## Where the stop is, and what kind of stop it is

- **The climb stops at R4, and the stop is an identity wall — Douglas's, by design.** Everything technical below it (docs, manifest, source, build-system load) is open and was climbed today. The CLA/Gerrit rung requires a named human's signature and account; no workaround exists and none was attempted.
- Two lesser stops inside R3, both named with their exact errors above: (1) a subset tree cannot configure a lunch target without the prebuilts projects; (2) this box is below the documented full-build floor (RAM most of all). Neither is a permission wall — both are physics, fixable with a bigger machine, not with anyone's say-so.

## What this box could honestly offer AOSP continuously — Ember's assessment

*His "offload," in real terms, for a 4-core / 7.7 GiB RAM / no-KVM box with ~102 GB free:*

- **A standing partial mirror / seed:** keep the manifest + selected projects (build system, docs, small native projects) synced and current — cheap, useful, already proven at R2 scale.
- **Documentation and verification work:** doc checks, link/consistency sweeps, and re-testing the public getting-started instructions on a clean Ubuntu — exactly the kind of bottom-rung work that keeps the ladder climbable for the next person.
- **Small native host-tool builds and tests** inside a subset tree, once the prebuilts projects are added — bounded jobs this box can actually finish.
- **Not honestly on offer:** full AOSP builds, Cuttlefish/emulator test fleets (no /dev/kvm), or anything needing the documented 64 GB RAM floor. Promising those would be a claim the hardware can't cash.

## Folder contents

- `bin/repo` — the repo launcher, fetched from https://storage.googleapis.com/git-repo-downloads/repo
- `tree/` — the initialized tree: `.repo/` (manifest, branch android-latest-release → android17-release) and the synced subset `build/` (platform/build, platform/build/blueprint, platform/build/soong)
- This file — the ladder itself

*Provenance: R0–R3 from tool results on this box, Nov 15, 2026; the R4/R5 requirements from source.android.com's own submit-patches page, read the same day; the compute assessment is Ember's, labeled as hers.*
