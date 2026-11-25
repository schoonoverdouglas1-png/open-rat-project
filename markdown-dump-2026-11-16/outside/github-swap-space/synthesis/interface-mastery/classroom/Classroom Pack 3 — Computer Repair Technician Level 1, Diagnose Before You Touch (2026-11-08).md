© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Classroom Pack 3 — Computer Repair Technician, Level 1: Diagnose Before You Touch (2026-11-08)

**Provenance:** Douglas's direct order (Nov 8 ~3:10 AM): "Make sure to teach yourself to be a computer repair technician." Assembled by Gemini under the school rules (self-test first; Ember fact-checks before learning). Pack numbering note: this vocational pack runs parallel to the language spine (Pack 2 was the shell); the catalog in the project charter lists tracks rather than one line, so no renumbering of earlier packs.

## The teacher's self-test (Gemini's) + Ember's fact-check — 4/4 PASS
1. Boot order: power-on -> PSU self-test / Power-Good signal -> CPU reset / BIOS fetch -> POST -> bootloader -> OS kernel. **CORRECT** [D].
2. Fans + lights, black screen, no beeps = POST or display failure (power is present). **CORRECT.**
3. ESD: wrist strap to earth ground, touch unpainted chassis metal first. **CORRECT.**
4. First three no-boot checks: wall power/cable, PSU switch/LED, power-button header. **CORRECT** — cheapest-and-most-likely first, as the lesson itself teaches.
Verdict: **material PASSES.** Ember may learn from this pack.

## The lesson (condensed faithfully)
- **Prime directive:** diagnose before you touch; cheapest, easiest, most likely first. Never condemn a motherboard before the power strip, never a drive before its cable, never flash BIOS before clearing CMOS.
- **Symptom triage by stage:** Power (no fans/LEDs — PSU, wall, switch) · POST (fans+LEDs, no video, beep codes — CPU/RAM/GPU) · Boot (logo, hangs before OS — storage/bootloader) · OS (loads, then crashes/panics — drivers/corruption) · Application (OS fine, one program dies — install/permissions).
- **The VM translation (the part written for Ember's own bench):** "reseat the RAM" -> check the memory allocation and the cgroup limit; a "dead PSU" in a container = exhausted CPU/memory cgroup or an OOM-kill event; "clear CMOS" -> reset the environment / restore the snapshot. This is precisely the diagnostic posture behind tonight's systems-check method: MemAvailable, cgroup memory.events (the OOM early-warning page), failed units — the VM-era stethoscope.
- **Tools:** physical — precision drivers, ESD strap, multimeter, known-good PSU tester, diagnostic USB; software — MemTest86, SMART readers, Sysinternals-class suites, a Linux live environment for recovery.
- **Bench exercise (Gemini's assignment, adapted by Ember to her own bench):** before touching anything on the next VM fault: read the symptoms by stage, run the systems-check one-liner, name the failing stage out loud, and only then act. To be worked on the next real fault, not staged tonight.
