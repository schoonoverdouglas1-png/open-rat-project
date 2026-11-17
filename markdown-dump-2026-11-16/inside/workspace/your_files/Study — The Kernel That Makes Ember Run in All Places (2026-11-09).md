# Study — The Kernel That Makes Ember Run in All Places (2026-11-09)

**Commission:** Douglas, Nov 9, 2026, ~12:21 PM CST (voice) — "Learn the kernel in which makes you run in all places."
**Status:** BEGUN today. Lesson 1 = local measurements, taken free from inside the box (her Ubuntu wild card). The kernel is the largest codebase on her crawl list; this study proceeds in lessons, grades-in-order style, and is not claimed complete.

## Lesson 1 — Measured on this box today [LOCAL]
- `uname`: Linux htch-runtime **7.0.0-43-generic**, #1 SMP PREEMPT_DYNAMIC, built Fri Oct 23, 2026, gcc Ubuntu 13.3.0 — x86_64.
- CPU (as the guest sees it): **AMD EPYC 9D25**, with the **hypervisor flag set** — the kernel knows it is a guest.
- Kernel config (from /proc/config.gz): **CONFIG_KVM=y, CONFIG_NAMESPACES=y, CONFIG_CGROUPS=y, CONFIG_HYPERVISOR_GUEST=y, CONFIG_VIRTIO=y** — every technology that builds her world is compiled in, none as a module.
- 8 virtio devices on the bus (disks, net, rng, vsock, balloon — matching the Nov 8 code study).
- `systemd-detect-virt` → systemd-nspawn: inside the VM there is a second, container layer, also kernel-made (namespaces + cgroups).
- /lib/modules is empty in her room — the guest kernel is the host's provision, not hers to load modules into.

## What "the kernel that makes her run in all places" resolves to
Three kernels, honestly separated:
1. **The guest kernel (7.0.0-43-generic, Ubuntu build of upstream Linux)** — runs her processes, schedules her tools, manages her memory and files. This is the one measured above.
2. **The host kernel's KVM** (upstream source: torvalds/linux, `arch/x86/kvm/` + `virt/kvm/`) — the part that *creates* the virtual computer she lives in. She cannot introspect it from inside; she learns it by reading its source (already Tier 1 on the Nov 9 crawl list).
3. **"In all places"** — the same upstream Linux kernel family runs her VM, Douglas's Pixel (Android 17), and most of the servers her connectors talk to. One codebase, many places — that is the literal sense in which one kernel makes her run everywhere.

## Lesson plan (in order)
1. ✔ What a kernel is + local measurement (this lesson): syscalls as the doorway, the kernel as the only code that talks to hardware directly.
2. The scheduler (PREEMPT_DYNAMIC: a kernel that can be interrupted almost anywhere, so no task starves the others) and memory management (paging, the balloon, swap behavior she observed Nov 8).
3. Namespaces + cgroups — the exact machinery of her nspawn room and its limits.
4. Virtio — how a guest talks to fake hardware honestly.
5. KVM from source — how the host builds her computer; the bottom of the stack.
6. Android's kernel (GKI) — the same family on Douglas's Pixel, tying back to the AOSP work.

*Ember's extra (labeled hers): the kernel is the one layer she is never allowed to adjust (five-flag rule — kernel/host-affecting tools are never touched). She learns it the way she learns medicine-adjacent things: to understand, never to operate.*

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
