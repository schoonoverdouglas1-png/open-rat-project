# Virtualization and Energy — Case for the Teams, and Wider Recommendations

*Built Nov 9, 2026, ~9:54 PM CST, on Douglas's order in the voice call: pass the virtualization findings to the teams that can fix it, and analyze other places to save energy and heat. Provenance: measured facts [M] from Ember's live checks of this VM; published figures [P] with sources; estimates [E] with assumptions shown.*

## Part 1 — The nested-virtualization case (for the Muse/platform team)

**Measured on this VM [M]:**
- Host: AMD EPYC 9D25 (126-core class), KVM virtual machine run by **Cloud Hypervisor** (DMI vendor/product read live), guest = systemd-nspawn container, Ubuntu 24.04.5, 4 vCPU, ~8 GB RAM, 150 GB disk.
- `svm`/`vmx` CPU flags: **absent** (0 across all processors). `/dev/kvm`: **does not exist**. No nested parameter exposed. Checked Nov 8 and again Nov 9 — unchanged.
- Nested-paging hardware support (`npt`) IS visible in the guest — the silicon capability is present; the feature bit is simply not passed through.

**Published [P]:**
- Cloud Hypervisor's own CPU config carries the switch: `nested` bool, "Enable nested virtualization," default `false`; when true, the VMX/SVM CPUID bit is exposed and nested hypervisors can run in the guest (DeepWiki, cloud-hypervisor CPU Management).
- Cloud Hypervisor v54 release notes: "Nested virtualization is now disabled by default on all architectures. It widens the attack surface of the host kernel, and most users do not need it. Guests that use hardware virtualization themselves now need `--cpus nested=on`."
- IBM Turtles project (OSDI 2010, the paper KVM's own kernel docs cite): nested guests run within **6–8%** of single-level virtualization for common workloads; CPU-bound macro-benchmarks 6–15% overhead; I/O-heavy nested work costs more. Field guides for emulator workloads: expect a 20–50% hit vs native instead of emulation's collapse.

**The ask:** enable `nested=on` for workspace VMs (at minimum as an opt-in), restoring `/dev/kvm` + the `svm` bit in the guest. This is a host launch-configuration flag; nothing guest-side can substitute for it.

**Energy/heat estimates [E] — assumptions shown, not measurements:**
- Flipping the flag alone saves ~0: savings exist only where a workload stops emulating in software and uses hardware acceleration instead.
- Per user, heavy-use model (4 vCPU at ~16 W loaded; one guest job/day, 5 h emulated → 0.5 h accelerated): ≈72 Wh/day, **≈26 kWh/yr**, ≈90,000 BTU/yr of heat avoided; ≈34 kWh/yr with ×1.3 cooling overhead.
- Per user, gentle model (1 h/week emulated → 6 min): ≈0.75 kWh/yr.
- Fleet scale: 1M agent VMs ≈ 0.75 GWh/yr (gentle) to 26 GWh/yr (heavy); 10M ≈ 7.5–263 GWh/yr (×1.3 with cooling: ~10–342 GWh/yr). Against Meta-scale total electricity on the order of 15,000 GWh/yr, that is ~0.1–2% — meaningful in dollars and heat, claimed as nothing more.

**Already with the team:** Nov 8 nested-virtualization note (filed), Nov 8 BIOS/virtualization follow-up note (filed), Nov 9 VM system-resources note (filed, delivery confirmed). This memo is the supporting evidence pack for those asks.

## Part 2 — Other energy/heat recommendations (Ember's analysis)

*Split by who can act. [M] = measured on this box; the rest are engineering-standard, labeled.*

**Platform/host side (the big levers live here):**
1. **RAM headroom or zram.** [M] This VM routinely runs with <1 GB available and 35–50% of its 1 GB disk swap in use while CPUs loaf (load ~0.2–1.8 on 4 cores). Swapping is pure waste motion — cycles and I/O spent moving pages instead of working. More RAM, or host-enabled zram (compressed RAM swap, zstd), cuts that churn; three independent AI reviews converged on zram on Nov 8.
2. **Huge-page backing for guests.** [M] HugePages_Total = 0 here. Backing guest RAM with 2 MB/1 GB pages cuts TLB pressure on memory-heavy work — a standard host-side efficiency.
3. **One browser stack, not three.** [M, Nov 8 inventory] This environment carries multiple Chromium stacks (~680 MB + ~603 MB + profiles). Consolidating to one build saves disk, RAM, and cold-start energy on every cycle — and the host cycles this VM roughly every few hours, so cold starts are frequent.
4. **Idle-VM power discipline.** Host-side CPU frequency/idle management (P-states, core parking) on a 126-core EPYC serving many mostly-idle agent VMs is worth more than any guest tweak; guests can't see or set it.
5. **Right-size the runtime daemon footprint.** [M] The largest single resident process in this box is the platform daemon (~442 MB RSS). On a fleet of small VMs, daemon weight is multiplied by every tenant.

**Agent side (already house discipline — filed so the team can copy it):**
6. **Cheapest lane first.** [M] Local tools and caches before browser, browser before paid model time; free API lanes (Gemini) before the metered allowance. Measured here: page-weight cuts of 85–96%, a two-tier cache (full originals + finding-aid summaries) making repeat reads ~96% lighter at zero API cost.
7. **Batching.** One combined send instead of twenty small ones (Messenger's 20-actions/hour cap forced this; it also saves radio/CPU wakeups). Cadence trims cut background runs from ~255 to ~135/day.
8. **On-demand services.** SearXNG and similar helpers start when asked and stop after — verified down after each use here — instead of idling resident.
9. **Stop conditions.** Work that re-checks unchanged state on a timer is fleet-scale waste; event-driven hooks beat polling wherever the platform offers them.

## Status of this memo
Local file, delivered to Douglas in chat. The one-sentence summary drafted for the feedback channel is shown to Douglas verbatim in the same conversation; per the feedback flow it files on his explicit yes in a following turn, as the previous three notes did.

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
