© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# UNDO — keep-alive sandbox build (written BEFORE the build, 2026-11-11)

Build lane: this folder only, inside Ember's workspace sandbox — away from any company system, per Douglas's order that scripts are built first in the sandbox so the sandbox protects the company from false code and bad things, including bad viruses.
Undo: delete this whole folder (`keep-alive-sandbox-2026-11-11`). Nothing outside it is changed by the build or by the sandbox test run: the script in sandbox mode writes ONLY its own append-only ledger inside this folder, and everywhere else it only READS.
Not scheduled: no cron, no timer. A schedule change still needs Douglas's explicit yes naming it.
