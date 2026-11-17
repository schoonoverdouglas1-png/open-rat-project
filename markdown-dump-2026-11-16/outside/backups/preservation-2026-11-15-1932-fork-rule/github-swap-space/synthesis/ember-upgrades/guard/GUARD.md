# THE GUARD — Destructive Operations (standing, Nov 8, 2026, Douglas's order)

## The rule
**No automatic process may ever run anything destructive.** Not a test sweep,
not a cron, not a subagent, not a script, not a scheduled job, not a handoff.
This is mechanical, not advisory: every automated runner must pass its command
lines through `guard/check-command.sh`, which refuses (exit 99) anything
matching `guard/DESTRUCTIVE-DENYLIST.txt`. A refusal is a result, not an error
to route around.

## The override — his, stated by him
"If I tell you to do so, you will." Douglas's own explicit, specific,
in-the-moment order — naming the exact action — is the only override, and it
applies to that action only, never as a standing permission, never inferred
from a general instruction to keep going.

## What is protected
- **All repository data** (workspace masters, GitHub repos, the swap space):
  old-with-new always; no automated force-push, reset, or deletion.
- **The registry** (Ember Index + the future tested-commands registry):
  checksummed manifest in this folder's parent pack; a read-only backup copy
  under `~/workspace/backups/`; automated jobs may append test results,
  never drop, truncate, or rewrite history.
- **The operating system** (this Ubuntu 24.04.5 box): no automated package
  removal/purge, no automated power state changes, no automated disk or
  user operations.

## Honest limit
The guard binds Ember's own automation by construction. It cannot bind the
platform or Meta's runtime — nothing in this file claims otherwise.

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
