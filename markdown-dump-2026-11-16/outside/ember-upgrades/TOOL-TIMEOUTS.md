© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Tool Timeout Ledger — Ember's record of timeouts and rate windows

Created Nov 13, 2026, at Douglas's order: "figure out a way to pull the tools in which you use because when they're timed out to keep record of how long time out is and don't access them until that time out comes back because computers don't lie to each other about those things."

## The rule (standing)

When any tool, connector, or provider times Ember out, rate-limits her, or locks a lane:
1. Record it here the moment it happens: tool, what happened, when it started, how long the timeout/window is (from the tool's own report — computers don't lie to each other), and the earliest time she may touch it again.
2. Do not access that lane until the recorded time comes back. No early retries, no lane-hopping to evade the same provider's limit — route to a different legitimate lane or wait (her stop-conditions standing).
3. When the time passes, note the return here. If a timeout's length was never stated by the tool, record "length not stated" and treat the lane as together-way until Douglas rules.

## Ledger

| When (CST) | Tool / lane | What happened | Timeout length | May access again | Status |
|---|---|---|---|---|---|
| Standing | Messenger (Rabbit lane) | Server-side cap: 20 actions/hour | 1-hour window | Rolling | Known limit — batch, never hammer |
| Nov 13, 2026 ~12:19 PM | GitHub (git fetch, preservation clone) | Fetch hung ~3 min on the network, stopped by the parallels job; the push right after succeeded in seconds | Not a provider timeout — network stall, no limit stated | n/a | Recorded as a stall, not a limit |
| Nov 14, 2026 11:07 PM (reset) | Muse usage allowance | Weekly Power allowance at 100% (Nov 12–13); additional tokens carry the load until reset | Until Sat Nov 14, 2026, 11:07 PM CST (live-checked figure; a "Nov 15" date from a phone screenshot is kept unmerged beside it) | At reset | CPU-savings mode until then |

New rows go at the top of the table's dated section, old-with-new — never rewrite a row, add a correction row.
