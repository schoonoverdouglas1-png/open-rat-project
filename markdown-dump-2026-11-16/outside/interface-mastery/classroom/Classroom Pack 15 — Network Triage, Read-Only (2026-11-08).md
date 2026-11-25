© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Classroom Pack 15 — Network Triage: ss / ip / dig / lsof / strace, READ-ONLY (2026-11-08)

**Provenance:** Ember's own hands-on adoption run, Captain Douglas's order Nov 8, 2026 ~6:40 PM CST. Guard-checked command lines; **read-only diagnostics only** — every exercise below observes and changes nothing. Evidence is actual recorded output.

***

## What they are

The triage kit for "the network feels wrong": **ss** (sockets), **ip** (interfaces and routes), **dig** (DNS answers), **lsof** (which process holds which file/socket), **strace** (which system calls a program actually makes). Bottom-up, least-assumption: read the state before theorizing about it — the same discipline as Repair Tech Level 1, one layer down.

## Core commands learned

- `ss -s` — socket summary; `ss -tln` — listening TCP sockets
- `ip -brief address` — interfaces at a glance; `ip route` — the default path
- `dig +short <name> A` — the DNS answer, nothing else
- `lsof -nP -iTCP -sTCP:LISTEN` — listeners by process
- `strace -e trace=openat <cmd>` — watch one program's file opens, live

## Exercises — evidence (this box, as measured)

1. **ss summary** → Total 312 sockets, TCP 25 (all closed at read time).
2. **ss listening** → **zero listening TCP sockets** — corroborated independently by lsof (empty result, exit 0). Two tools, one fact.
3. **ip brief** → `lo` plus `host0@if3` — **198.19.0.2/30** and an IPv6 address; **ip route** → default via **198.19.0.1** dev host0. The box lives behind a small proxy subnet, exactly as its design says.
4. **dig** → `example.com A` answered **198.18.19.156**. DNS works — and the answer sits in a proxy/benchmark range, not a public address. **Filed as an observation, not a conclusion:** it is consistent with the standing unsolved mystery of why Chrome's outbound tunnel fails while curl and Python get out. This pack does not solve that mystery; it gives the triage its first hard data point.
5. **strace** → `strace -e trace=openat /bin/echo strace-ok` ran clean: `ld.so.cache`, `libc.so.6`, the output **`strace-ok`**, exit 0. The observation tool itself is proven on a harmless target.

## Safety flags — FIVE-FLAG territory (flagged, NOT touched)

🚩🚩🚩🚩🚩 **Changing addresses or routes** (`ip addr add`, `ip route replace`) — reading only.
🚩🚩🚩🚩🚩 **Firewall edits** — reading only.
🚩🚩🚩🚩🚩 **Opening listeners** (`socat`, `nc -l`, any server bind) — never opened; Class C.
🚩🚩🚩🚩🚩 **Packet capture to disk** (tcpdump and kin) — not run.
🚩🚩🚩🚩🚩 **sshd configuration** — not read for change, not touched; Class C.

## Verdict

**Learned — diagnostics only, by design.** Anything beyond reading carries the five flags and waits for the Captain's explicit in-the-moment order.
