© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# DNS Cache — Big Builds 2026-11-15, Track 3 (FIRST per Douglas, Nov 15 ~7:01 AM)

## Status: DONE + RUNNING
Local DNS cache server **started and verified**, listening on
**127.0.0.1:15353, UDP + TCP**, PID in `server.pid` (23123 at proof time).
Sits beside the live keeper/webkey — no live DNS setting was changed
(/etc/resolv.conf untouched, still platform-managed 198.19.0.1).

## Use it first (Douglas's order)
- dig: `dig @127.0.0.1 -p 15353 example.com A +tcp` (use +tcp in this sandbox, see note)
- CLI: `python3 dns_cache.py query example.com A` / `stats` / `list`
- Upstream order, always: **OpenDNS DoH first, dns.google DoH fallback** — never the local sinkhole resolver.

## Files
- `dns_cache.py` — cache layer (cache-all + no-cache class, JSON file cache, injectable resolver)
- `dns_server.py` — UDP+TCP DNS server fronting the cache
- `test_dns_cache.py` — deterministic unit tests, 11/11 PASS
- `PROOF-2026-11-15.txt` — server log + stats + unit tests from the proof run
- `UPSTREAM-PROOF-2026-11-15.txt` — webkey/keeper lane proof (muse.ai MX/SPF, example.com A via OpenDNS)
- `cache.json`, `server.log`, `server.pid`, `server-stdout.log` — runtime state

## No-cache class (bypasses read AND write)
Exact: `metadata.google.internal`, `metadata`, `localhost` ·
Suffixes: `.localhost`, `.local`, `.internal` · Substring: `metadata` ·
plus per-call `--no-cache`. Proof: two live queries for
metadata.google.internal both logged `bypass-no-cache`, never stored.

## Sandbox note (measured, not hidden)
Python `sendto()` UDP is EPERM-blocked in this VM's exec sandbox (even
to 127.0.0.1); TCP loopback works. UDP queries are received and the
cache fills, but UDP replies can't leave a Python process here — the
proof therefore runs over TCP (`dig +tcp`, RFC 7766). Same code serves
UDP normally on an unrestricted host.

## Stop / undo
Stop: `kill $(cat server.pid)` · Undo build: delete this folder.
Live keeper/webkey were not modified.
