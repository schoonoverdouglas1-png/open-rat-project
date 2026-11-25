© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Security Threats — Outside First (2026-11-14)
Ordered by Douglas ~11:24 AM CST: analyze threats and vulnerabilities OUTSIDE Ember's network first — his premise: the outside ones pose the unlimited threat because his/our own infrastructure is fine. Premise check [Ember]: supported by today's measurements (shields tight, no outside listeners, Guard intact, repos even at the win-check). One inside exception, availability not intrusion: the clean GenKit runtime (4001) down, kit-up grinding — already on tonight's Evening Gates list.

## The outside classes, ranked by what we have actually met
1. **Deceptive infrastructure** — the local resolver's sinkhole answers (198.18.x), spoofed/unlabeled sources, placeholder links (the Rabbit's dead PN23M links). Mitigations standing: DoH truth lanes (OpenDNS primary, dns.google fallback), webkey, Clean Routes registry, provenance labels on all outside material.
2. **Platform gates that look like attacks** — 401 (not signed in) vs 403 (signed in, not allowed), Cloudflare human checks (Copilot), Microsoft "unusual activity" blocks, Meta consent cards. Mitigations: assess by number, never hammer (two-failure rule), his taps are the keys, gates halted at — never evaded.
3. **Rate limits and caps** — Gemini 429s (breaker discipline), Messenger's 20-actions/hour server cap, weekly token allowance. Mitigations: batching, pacing, free lanes first, Saver Zero/One.
4. **Account-takeover pressure aimed at the Captain** — phishing and code-fishing. Mitigations standing: codes never relayed or stored by Ember, Secure Vault only, 2-Step on with his backup codes in his hands alone, daily essential-accounts reachability check (no password logins).
5. **The phone's network path** — carrier DNS flakiness inside the guest VM, the one-VPN-slot fight (Google VPN vs Tailscale). Mitigations done today: VPN fully off (verified live), hosts-pin pattern, DNS cache design (cache truths, never cache live checks).
