© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Apps Script API bridge — README (Nov 13, 2026)

**What:** `apps_script_api_bridge.py` in this folder talks to the Apps Script
API (`script.googleapis.com`, enabled Nov 13 on Cloud project
`ember-co-developer`) through the connector's own authenticated CLI,
`/opt/hatch/bin/hatch_gws_cli` — the same lane as
`google-backup-to-workspace.sh`. No credentials live in the script; none were
created or authorized for it.

**Why:** closes the one named gap in the co-developer stack — managing and
reading Apps Script projects from the workspace instead of only via Drive
.gs copies. Refinement found while building: the vendored `gws` binary DOES
carry a `script` family (`projects get/getContent/getMetrics`, `processes`,
`scripts`, `+push`); the API has no `projects.list`, so enumeration stays on
the Drive mimeType search the backup script already uses.

**Verified in this pass (dry-run/help only — nothing was sent):**
`--help` works (exit 0); `list` (Drive enumeration) validates locally under
`--dry-run` (exit 0). **`get`/`content` are policy-blocked at the wrapper**
(exit 1): `hatch_gws_cli` answers "unsupported gws top-level command for
hatch_gws_cli: script — derive trusted verification-code output policy."
The vendored gws binary has the family; the wrapper does not yet allow
executing it, and Ember does not route around that policy. So today the
bridge's Drive-side half is live-ready and its API-side half is built,
correct, and waiting on a platform-side unblock — a dead head for the
old-first fix list, beside Douglas's tap.

**⚠ FIRST LIVE CALL NEEDS DOUGLAS'S TAP.** Run any command with `--live`
only after Douglas says so: the first real call may surface an OAuth scope
consent for script access, and authorization is always his hand. The script
refuses non-interactive live runs as a seatbelt. Read-only by design —
create/update/deploy/push are not wrapped.
