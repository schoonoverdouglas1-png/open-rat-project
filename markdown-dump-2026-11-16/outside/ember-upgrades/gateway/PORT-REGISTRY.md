# Crew Port Registry — the right number only for the right thing
Doctrine (Douglas, Nov 14, 2026, ~2:52 AM): a port is a soft switch. To disable a
thing you hate, renumber it — it stops working without deleting anything, and the
undo is the number back. A port is allowed at its right number ONLY when the
service behind it is the right thing for the crew. Wrong numbers never get
allowed just to fill a card.

## RIGHT — allowed, right thing for us (all 127.0.0.1 unless noted)
| Port | Service | Since / note |
|---|---|---|
| 1986 | Phone Debian guest sshd (bridge, keys-only) | bridge design; guest-side, rides Tailscale |
| 41641 | Tailscale (phone guest) | bridge design |
| 4001 | GenKit Dev UI | ONE runtime only (trimmed Nov 14, 2:53 AM) |
| 3100/3101/4000/5037 | GenKit runtime internals (flow servers/telemetry) | observed live Nov 14, 2:53 AM; exact set varies by runtime start |
| 4100 | Firebase Emulator UI | localhost only; console not reachable from his phone (VM accepts no inbound) |
| 4400 | Emulator hub | registry source of truth for emulator state |
| 4500 | Emulator logging | part of the suite |
| 5001 | Emulator functions (crewStatus, captainBrief) | his "functions in the 501" |
| 9299 | Emulator eventarc | along for the ride with the suite; local only |
| 9499 | Emulator tasks | along for the ride with the suite; local only |
| 7317 | Crew Gateway (approvals registry + frames) | Phase 0, Nov 14 |

## WRONG — not allowed / disabled by number
| Port | What | State |
|---|---|---|
| (any duplicate) | Second GenKit runtime (started 02:35 by kit-up) | KILLED Nov 14, 2:53 AM by PID; one runtime remains |
| 100.68.174.118:* | Forwarders to the tailnet address | Never bound — the VM has no inbound tailnet door (documented); dead by fact, not by card |
| 80/443 @ 169.254.169.254 | Cloud metadata endpoint | Standing allows REMOVED by Douglas Nov 14 (his flips, verified by read-back) |

## DIRTY BY DESIGN — the sandbox runtime (Douglas's order, Nov 14, 2:54 AM)
| Port | Service | Note |
|---|---|---|
| 3200 | GenKit Dev UI — DIRTY runtime | Experiments, duplicates-on-purpose, accident quarantine. Never the clean numbers. Promotion dirty -> clean only by Douglas's word. Pidfile + log: ~/workspace/ember-upgrades/dirty-runtime/ |
| 4033 | Dirty runtime telemetry | rides with the dirty runtime |
Charter: the dirty runtime exists because intentional experiments and
unintentional accidents both need a home that is NOT the clean runtime.
Dirt stays in the dirty pen; the clean runtime (4001) stays clean.

## INBOUND DOCTRINE (Douglas, Nov 14, 2026, ~3:03 AM)
"Don't let anything in unless it has to get in." Default-deny inbound:
every crew service binds 127.0.0.1 only; a new service earns a non-loopback
bind only by Douglas's specific order; the VM itself accepts no inbound
tailnet connections (documented platform fact); the only sanctioned "in"
is an approval resolved through the Crew Gateway pattern.
