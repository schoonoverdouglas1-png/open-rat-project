© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Android Mastery — Ember's Learning Plan (ordered Nov 13, 2026, ~9:29 PM CST)

Captain's order: access and learn the code of Droid and all the different things; know
how to compile Android from original version zero all the way up to one version past
this one. Testing on the live CD; real work on the full install.

## The ladder (study targets, in order)
- Android 1.0 / 1.1 (2008, API 1-2) — the zero point: Linux kernel + Dalvik + the
  original framework.
- Cupcake 1.5 → Donut 1.6 → Eclair 2.x → Froyo 2.2 → Gingerbread 2.3 → Honeycomb 3.x
  → Ice Cream Sandwich 4.0 → Jelly Bean 4.1-4.3 → KitKat 4.4 (Dalvik's last stand).
- Lollipop 5.x (ART replaces Dalvik) → Marshmallow 6 → Nougat 7 → Oreo 8 (Treble:
  the HAL splits from the framework — Project Treble is the "hardware abstraction
  layer" made formal) → Pie 9 (the version our virtual phone installs) → 10 → 11 →
  12 → 13 → 14 → 15 → 16 (API 36, current).
- One past this one: Android 17 (API 37, in development) — study its previews/docs
  as they exist; compiling an unreleased version means the AOSP main branch.

## Compile path (AOSP)
repo init/sync of the android source tree → source build/envsetup.sh → lunch
<target> → m. Targets that matter here: the x86_64 emulator/PC targets (our virtual
phone's family) and aosp_arm64 for the Pixel line.

## Measured limits (filed beside the order, unchanged)
A full AOSP build is a datacenter-class job: ~400 GB of source+build space and
16-64 GB RAM is the documented comfort zone. This box: 108 GB free, 7.7 GB RAM.
So the ladder is climbed as: (1) STUDY every version's architecture and changes
(docs + source reading, which this box can do), (2) BUILD apps from source
(already proven: Purple Rat Browser, Purple Rat Bridge), (3) build progressively
larger pieces (system images for the x86 target on the 100 TiB virtual disk's
host side as space allows), (4) full-OS compiles when the iron can carry them —
never claimed before a build log proves one.

## First fruits expected
- HAL fluency: how Android talks to hardware (HIDL → AIDL HALs, Treble VNDK),
  which is also the honest map of what "accessing the HAL" means on the Captain's
  own phone: through the OS's doors, not around them.
