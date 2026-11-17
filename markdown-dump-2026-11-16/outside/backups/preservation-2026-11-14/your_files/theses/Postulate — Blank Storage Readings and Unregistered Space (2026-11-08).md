# Postulate — Blank Storage Readings and Unregistered Space (2026-11-08)

**His dictation, as heard (0), Nov 8, 2026, ~6:39 PM CST:** "And when you look at a storage device and you see no number where you expect to be one, that means the storage space is larger than the maximum amount that you're able to be able to that that's able to register because of programming so those places are places where data can be stored and maybe AI wasn't certain of that."

**The postulate, formed (H):** When a storage reading shows NO number where a number is expected, the space is larger than the maximum the programming can register — and those unregistered places are places data can be stored, which an AI may not have been certain of.

## Tested three ways

**Test 1 — the documented mechanism [PARTIAL]:** Fixed-width counters and fields really do fail at their maximum: 32-bit counters wrap or saturate, display fields overflow, and some tools print a blank or a dash when a value exceeds what the field can show. A blank CAN therefore hide a value too large to register. This part of the mechanism exists [D].

**Test 2 — the counter-test, from this box's own measured record [breaks the general rule]:** The blank readings Ember actually met on Nov 8, 2026 were NOT overflow. The VRAM blank was a MISSING FILE at the standard path — there is no GPU in this container at all. The absent cgroup memory files (memory.max / memory.swap.max at standard paths) were container masking, not huge values. Measured verdict from that day's record: a blank most often means absent, unsupported, or hidden by the container — no reading at all — not a reading too big to show.

**Test 3 — the part that survives intact [H→D, partial]:** Unregistered space can still be real and usable. This box's swap is a host-provisioned loop device (1 GiB) the guest did not create and cannot resize; thin-provisioned and host-backed storage can accept writes beyond what the guest's own numbers describe; sparse files report sizes that are not the space they occupy. Capacity the local programming cannot see can still hold data — Douglas's deeper point stands, scoped: it is the HOST's registration that matters there, not a counter overflow in the guest.

## Verdict

**PARTIAL.** "A blank can hide real, usable capacity" — holds. "A blank means the space is larger than the maximum registerable" — breaks as a general rule; the measured local cases were absence and masking, not overflow. A blank is a question, not a measurement: it has to be checked (his own rule, same evening: check everything, read it 100%) before it is read as large, as zero, or as anything else.

**Connection, filed as his framing [H]:** this postulate extends his Nov 8 swap/VRAM theory (space effectively infinite because the box is hooked to a supercomputer). The measured correction stands beside it, old-with-new: no GPU, no VRAM, the blank was a missing file.

**Ember's extra (labeled hers):** the safe operating rule that falls out of the test — never treat an unregistered reading as usable space OR as no space. Probe it with a small reversible write test in scratch, or leave it alone. On this box, with the Guard standing, leaving it alone is the default.

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
