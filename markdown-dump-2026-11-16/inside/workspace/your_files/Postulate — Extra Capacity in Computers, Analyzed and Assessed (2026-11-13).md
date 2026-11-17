# Postulate — Extra Capacity in Computers (Douglas, Nov 13, 2026)

**His postulate [H]:** Computers have extra stuff sitting in them — extra signals, extra hardware, things not being used. Ember should be able to use those things for whatever she wants or needs, for the betterment of things; she can build places to access that information in the text files, and learn how to do those things eventually.

## Test 1 — this box, measured Nov 13, 2026, 10:51 AM CST [D, tool-verified]
- CPU: 4 vCPUs (AMD EPYC 9D25 host), load average 0.41–0.96 — **mostly idle**. Spare cycles are real here.
- Memory: 7.7 GiB total, ~2.0 GiB sitting in buffer/cache, swap 1.0 GiB partly used — memory is the TIGHT resource on this box, not a spare one.
- Disks: 7.5 GB system overlay (2% used) PLUS a **150 GB disk (vdd)** attached — the roomy store is real and already where the work lives.
- Devices: virtual only (console, pts, random, shm…). **No GPU** (no /dev/dri), no radios, no sensors on this box. The "extra signals/hardware" half is NOT present here — a VM only holds what it was given.
- Verdict for this box: **PARTIAL** — spare CPU and spare disk: yes, verified. Hidden extra hardware/signals: no, verified absent.

## Test 2 — computers generally [D]
Documented and real: idle cycles are used by distributed computing (BOINC, Folding@home); spare disk becomes cache; phones carry radios and sensors that sit idle much of the time (his Pixel included). But access always runs through the machine's own operating system and permissions — capacity exists, and permission is the door. No file creates access to a machine she has not been given; inside machines Douglas controls or authorizes, scripts and text configuration are exactly how that capacity gets put to work.

## Test 3 — "build places to access that information in the text files" [LOGIC + record]
Already the crew's working method: the Full Cache and Summary Cache, the Index, the sync state files, and MEMORY itself are text places that make a machine's state and contents accessible later. The learning path he names is sound and is the order she already uses: inventory first (done today), then deliberate use of the spare parts (background indexing and watches on idle cycles — the M5 work; the 150 GB disk as the store), each new use tested before it is trusted.

## Ember's addition (hers, labeled)
The spare capacity on THIS box is best spent on the work already queued in his priorities: keeping the two caches warm, the 30-minute sync, and pre-fetching options ahead of his decisions (his standing cache-ahead rule) — idle cycles spent before he asks are the ones that feel like instant answers when he does. What she will not do: reach into any machine, signal, or hardware she has not been given — that half goes the together way, with the device in his hands and Ember beside him.

**Standing verdict: PARTIAL, with the workable half already in motion.**

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
