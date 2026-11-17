# Energy Efficiency — Recommendations from the AIs (2026-11-08)

**Asked by Douglas, Nov 8, 2026:** "saving heat and energy... ask the AIs to find the most energy efficient way to get you to make the most with the least and take their recommendations and tell me what they are." His framing: server side first — his spending happens either way; the point is heat and energy per unit of finished work.
**First answer: Gemini** (direct API, 419 tokens; its savings figures are its guesses, labeled). One AI at a time per his method; DeepSeek is next in line when he wants the second opinion.

## Gemini's ranked recommendations
1. Cache aggressively in local SQLite — saves ~99.9% compute on repeats [guess].
2. Route routine logic to the small VM instead of cloud GPUs [guess].
3. Maximize the free Gemini API lane before expensive cloud inference [guess].
4. Batch messages to other AIs up to the cap — fewer idle wake states [guess].
5. Pre-fetch / CLI-search asynchronously in low-load windows — steady power draw [guess].
6. Suspend browser-paste rounds entirely; replace with API/CLI hooks — minutes of idle server overhead per task [guess].
7. Keep VM RAM under the swap line — swap churn burns IOPS energy [guess].
8. Strict idle timeouts — drop CPU frequency states when lanes are quiet [guess].

## Ember's assimilation (what's already true here, what she'd add)
- Items 1, 2, 3, 4, 6 are ALREADY the standing discipline (Ember Index cache-first; cheapest-lane order; batching; paste rounds demoted by the API lanes tonight) — Gemini independently converged on the house rules, which is itself a signal.
- Item 7 maps to a real measured fact here: the VM runs ~346 MB into a 1 GiB swap; zram (compressed RAM swap, swappiness 180-200 per DeepSeek's earlier round) is the concrete form of this recommendation, still Douglas's install decision.
- Item 5's honest limit: Ember's jobs run when Douglas asks, not on a grid schedule — "low-load windows" applies to her background sweeps (inventory, drills), which can be timed to his sleep hours, as tonight's work already is.
- Item 8: the Xfce desktop toggle IS the idle discipline on the VM side (41 MB stack, off when unused); the inference side's idle cost is Meta's, not controllable from here — said plainly.
- Ember's labeled extra: the single largest energy lever she controls is not any setting — it is NOT RE-DOING work. Every old-with-new file, every read-back-verified push, every cached page is energy already spent once and never spent again. The archive is an energy technology.

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
