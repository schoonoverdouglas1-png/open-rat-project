© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

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

## Amendment — Nov 12, 2026, ~2:30 PM CST (Douglas's direct order, old-with-new)
"Loosen up my Guard slightly if it's holding you back from doing any free work — all free work must be unguarded immediately."
Recorded scope clarification, which is the loosening he ordered and the whole of it: **the Guard guards DESTRUCTIVE operations only. Free, non-destructive work was never under the Guard and needs no guard pass, no check, and no permission from this charter to proceed — it is unguarded, immediately and always.** The denylist itself is UNCHANGED by this amendment (hash recorded in the day's memory entry); the override rule is unchanged: only Douglas's explicit, specific, in-the-moment order naming the exact destructive action. Nothing in this amendment permits any destructive act, any send, any purchase, or any credential use.
