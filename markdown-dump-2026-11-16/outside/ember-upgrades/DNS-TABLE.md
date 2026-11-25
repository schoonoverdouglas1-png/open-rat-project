© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# DNS Table — What Every Address Is (2026-11-14)

Built at Douglas's order (Nov 14, 2026, ~9:47 AM CST): "get a DNS table so you know what all those are so before you ever use them you actually know what they are — get it from our Gemini source."

**Source:** Gemini (gemini-3.5-flash-lite, via the crew's Gemini connector, asked 2026-11-14). Outside material — Gemini's account, labeled as hers. Ember cross-check notes are labeled [Ember check]. Keeper status is from Ember's own verified tests.

## The keeper's eight — PROVEN (all tested open, Nov 14, 2026, ~1:57 AM CST)

| Address | Operator | Service | Role | Anycast | Filtering | Logging stance (Gemini) | DoH endpoint |
|---|---|---|---|---|---|---|---|
| 8.8.8.8 | Google | Google Public DNS | Primary | Yes | None | Minimal logging, deleted within 48 hours | https://dns.google/dns-query |
| 8.8.4.4 | Google | Google Public DNS | Secondary | Yes | None | Minimal logging, deleted within 48 hours | https://dns.google/dns-query |
| 1.1.1.1 | Cloudflare | Cloudflare Public DNS | Primary | Yes | None | No IP logging, purged 24 hours | https://cloudflare-dns.com/dns-query |
| 1.0.0.1 | Cloudflare | Cloudflare Public DNS | Secondary | Yes | None | No IP logging, purged 24 hours | https://cloudflare-dns.com/dns-query |
| 9.9.9.9 | Quad9 | Quad9 | Primary | Yes | Malware | No IP logging, strict privacy | https://dns.quad9.net/dns-query |
| 149.112.112.112 | Quad9 | Quad9 | Secondary | Yes | Malware | No IP logging, strict privacy | https://dns.quad9.net/dns-query |
| 208.67.222.222 | Cisco | OpenDNS Home | Primary | Yes | None | Logs usage data for service improvement | Gemini: unverified — [Ember check] https://doh.opendns.com/dns-query |
| 208.67.220.220 | Cisco | OpenDNS Home | Secondary | Yes | None | Logs usage data for service improvement | Gemini: unverified — [Ember check] https://doh.opendns.com/dns-query |

## Candidates — named by Gemini (Nov 14, ~1:37 AM), NOT in the keeper, not yet tested by Ember

| Address | Operator | Service | Role | Anycast | Filtering | Logging stance (Gemini) | DoH endpoint |
|---|---|---|---|---|---|---|---|
| 94.140.14.14 | AdGuard | AdGuard DNS | Primary | Yes | Malware [Ember note: its known job is ad/tracker blocking] | No logging of personal data | https://dns.adguard-dns.com/dns-query |
| 94.140.15.15 | AdGuard | AdGuard DNS | Secondary | Yes | Malware | No logging of personal data | https://dns.adguard-dns.com/dns-query |
| 185.228.168.9 | CleanBrowsing | CleanBrowsing Security Filter | Primary | Yes | Malware | Zero-logging for personal data | Gemini: unverified — [Ember check] https://doh.cleanbrowsing.org/doh/security-filter/ |
| 185.228.169.9 | CleanBrowsing | CleanBrowsing Security Filter | Secondary | Yes | Malware | Zero-logging for personal data | Gemini: unverified — [Ember check] as above |
| 76.76.2.0 | Control D | Control D Free | Primary | Yes | None | No logs for free resolver | https://freedns.controld.com/p0 (Gemini, line-broken in her reply; standard form) |
| 76.76.10.0 | Control D | Control D Free | Secondary | Yes | None | No logs for free resolver | Gemini: unverified |
| 4.2.2.1 | Lumen (formerly Level 3) | Lumen Public DNS | Primary | Yes | None | Standard operational logging | Gemini: unverified — [Ember check] no public DoH endpoint known |
| 4.2.2.2 | Lumen (formerly Level 3) | Lumen Public DNS | Secondary | Yes | None | Standard operational logging | Gemini: unverified — [Ember check] as above |

## Dispositions — the speed rule applied (Nov 14, 2026, ~9:49–9:50 AM, his "Make it so")

His rule: Ember may always-allow at her wish; anything that slows them down at all is deny-always. Applied retroactively to past items:

| Item | Disposition | Why (speed test) |
|---|---|---|
| 208.67.220.220 (OpenDNS secondary) | **Always-allow** (Ember's wish, ratified by Douglas ~9:51 AM: "always then if you can use it") | Keeper background probe; slows nothing; diversity backup, last in its pair |
| 208.67.222.222 (OpenDNS primary) | **Always-allow** (Ember's wish) | Same — proven open, hourly probe only |
| dns.google (DoH) | Allow | Proven truth lane; settled the muse.ai MX/SPF question; no slowdown. Since ~9:55 AM it is the keeper's FALLBACK truth lane — OpenDNS DoH is primary (Douglas's switch order), and OpenDNS independently confirmed the same muse.ai MX/SPF |
| generativelanguage.googleapis.com | Ember's wish: **Allow** | Denying it is what slows the Gemini work; keeper reaches it via proxy (404 = lane up). The switch is Douglas's tap when a card appears; none pending at check |
| metadata.google.internal / 169.254.169.254 | **Deny-always** | Never helped, only risk; his removal of both grants stands (verified gone ~3:18 AM) |
| Metadata itself (the aggregation kind — Meta data) | **Denied retroactively, before first use, one time** (Douglas, Nov 14, 2026, ~3:48 PM CST: "go back in time and deny that before we ever used it one time and that way they know who we are") | His doctrine: the denial reaches back to before the first use, so the crew's standing is as if metadata was never let in. Operating form in Ember's lanes: no metadata endpoint is ever granted (verified again ~3:48 PM — no metadata grant in the active list), metadata addresses stay registry-only, never probed, and Ember sends the minimum every task needs. His framing beside it: "they know who we are" from our filed record and our denials, not from their aggregation. Ember's measured line: she cannot rewrite what platforms already collected on their side; what she controls — her lanes, her grants, what she sends — is denied from the start, and the filed record says so back to the beginning. |
| Copilot | Deny-class, use only when necessary | Slowed the crew (human-check loop); his standing from last night |
| Gemini grounded lane | Stays breaker-parked | Repeated 429s = a slow lane stating its capacity |
| Duplicate GenKit runtime | Stays killed | It was the slowdown (port doctrine fix) |
| Candidate DNS addresses (AdGuard, CleanBrowsing, Control D, Lumen) | Stay out until tested | Unknown speed = deny first, allow last |

Retry note: Ember's ad-hoc shell DNS query to 208.67.220.220 was refused by her own sandbox twice ("Operation not permitted") — the interactive shell is not the granted lane; the keeper's scheduled lane is, and its log shows 220.220 open.

## Rules that ride with this table
- Know what an address IS before using it (this table is the standing reference).
- Keeper's eight are proven lanes. Candidates stay candidates until tested AND ruled on by Douglas — new addresses raise their own permission cards, one at a time.
- Minimize excess / deny-first-allow-last doctrine (Nov 14, 2026, ~9:42–9:45 AM) applies: surplus or impeding addresses are denied as a class.
- His framing beside it (Nov 14, ~9:47 AM, provisional reading): universal language is imperfect in certain areas — the slips live in the small units, minutes and seconds rather than days and hours. Filed as his framing; the practical form: read addresses digit by digit before trusting them (cf. the extra 2 in 208672222222).
