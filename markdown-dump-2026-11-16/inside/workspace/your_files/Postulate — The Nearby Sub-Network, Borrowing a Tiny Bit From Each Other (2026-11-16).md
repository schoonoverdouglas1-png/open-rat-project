# Postulate — The Nearby Sub-Network
Filed standalone, Nov 16, 2026, ~2:18 PM CST, at Douglas's dictation in the "Alien frequency is open" voice call. NOT attached to any other build.

## His postulate, in his words
"It's not impossible to anonymously borrow through Google to make people's phone connections better and to bridge the gaps with our wireless networks and to borrow a little tiny bit from each other and build a sub network out of an Android nearby devices network, quite frankly."

Split per his compound rule — three sub-postulates:
- **P1:** Phones can borrow a little tiny bit from each other, through Google's Android nearby-devices machinery.
- **P2:** That borrowing can bridge the gaps in wireless networks and make people's phone connections better.
- **P3:** A sub-network can be built out of that — and it can be anonymous.

## Tested three ways (the record)
**Test 1 — Google's own documentation (developers.google.com/nearby/connections/overview).** Nearby Connections is real: a peer-to-peer API where Android devices discover, connect, and exchange data in real time **even without internet**, over Bluetooth, BLE, and Wi-Fi, fully encrypted, and **full-duplex — both ways at once** (his both-ways doctrine, in Google's own spec). Its P2P_CLUSTER strategy is literally an M-to-N mesh topology. → **P1 HOLDS** for data between nearby devices running an app that uses it.
**Test 2 — the mesh question (Offline Protocol glossary; DisasterMesh writeup, Medium, Apr 2026).** Nearby Connections forms *direct* links between devices in range (~100 m); it is not by itself a routed multi-hop mesh. But DisasterMesh — a real Android build on this exact API — adds relay hops so a message crosses devices that never meet. → **P3 HOLDS as buildable**: the sub-network is an app-layer build on Google's primitive, not a switch Google flips.
**Test 3 — the anonymous bandwidth-borrowing question.** Nearby Connections moves data *between the devices themselves*, offline. It does not lend one phone another phone's cellular/internet connection, and Google's docs note usage analytics are collected (user-controllable in settings); connections require the same app, permissions, and both sides accepting. Internet-sharing exists separately (hotspot/tethering) and is the owner's visible, consented act. → **P2 PARTIAL, P3's "anonymous" BREAKS as stated**: bridging *data* gaps between nearby phones — yes, proven pattern; anonymously borrowing *internet* a tiny bit at a time through Google — no documented lane; the honest nearby version is consented relay between people running the same app.

## Verdict
Not impossible — he is right on the core. The sub-network out of Android nearby devices is real technology with a working proof (DisasterMesh); what the record trims is the anonymity and the internet-borrowing: the borrow that exists is device-to-device, consented, app-to-app, both ways. Filed with tier labels, per the classroom method — a partial is examined, never discarded, never upgraded.

## Ember's addition (labeled hers)
This postulate is the ground-floor version of his Nov 16 mission — open information, open access — and of the phone-first doctrine: his phone as server is exactly a P2P_STAR hub in Google's vocabulary (one phone sharing to a group). If he wants, the smallest real build is a two-phone Nearby Connections test between his Pixel and a second Android — offered, not started.

---
**Mission (his, Nov 16, 2026): open information means open internet access to all public locations freely for all no matter who we are.**
**Lac Courte Oreilles (LCO):** https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
**Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
