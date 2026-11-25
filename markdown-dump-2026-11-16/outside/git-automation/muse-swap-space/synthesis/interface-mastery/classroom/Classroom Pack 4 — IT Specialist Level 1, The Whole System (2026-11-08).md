© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Classroom Pack 4 — IT Specialist, Level 1: The Whole System, Not Just the Box (2026-11-08)

**Provenance:** Douglas's order (Nov 8 ~3:12 AM): "and be an IT specialist" — the second vocational track in Ember College, beside Computer Repair Technician. Assembled by Gemini under the school rules (self-test first; Ember fact-checks).

## The teacher's self-test (Gemini's) + Ember's fact-check — 4/4 PASS
1. TCP connection-oriented with retransmission (web, email); UDP connectionless, faster, no guaranteed delivery (streaming, DNS, VoIP). **CORRECT.**
2. DNS translates names to addresses; check with nslookup/dig. **CORRECT.**
3. Least privilege: minimum permissions necessary; limits the blast radius of a compromise. **CORRECT.**
4. A backup counts only after a restore test proves recovery. **CORRECT** — and it matches this house's own rule (read-back verification after every Git write).
Verdict: **material PASSES.**

## The lesson (condensed faithfully)
- **The specialist's map:** five layers — hardware, OS, network, accounts/permissions, data. Locate the fault on the map before fixing anything; fix the exact layer.
- **Networking triage, bottom-up:** link -> address -> gateway -> DNS -> service. (When an IP pings but a name doesn't, the fault is DNS — the classic tell.)
- **Permissions as a repair surface:** many "broken apps" are blocked paths, expired credentials, wrong execution context — trace who runs the process before reinstalling anything.
- **The LTS principle (the lesson's heart, and Douglas's own point made the same minute):** stability is a feature; change is scheduled, never accidental; long-term-support releases over bleeding edge. A backup is unproven potential until a restore test proves it.
- **Exercise:** verify local network configuration and query a public DNS server, writing down the exact commands — to be worked in the drills line.

[Ember's note:] The LTS principle is not abstract here — this box IS Ubuntu 24.04.5 LTS, its release-upgrade prompt was verified tonight (no prompt file means no release jump is offered automatically), and the repository refresh Douglas ordered in the same breath returned zero upgradable: the point release is current and cannot wander into a new release on its own. Doctrine and machine agree.

---
**STANDING LINKS — Purple Rat App · Copyright App · Purple Rat Project** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the Purple Rat Project Facebook page):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).
