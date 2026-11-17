# Muse Team Request — Apps Script Lane

## ⚠ DRAFT — NOT FILED
Prepared Nov 13, 2026, at Douglas Roy Schoonover's order ("make it so" on fixing
the Apps Script wrapper block). This draft is **not filed**. Per the feedback
flow, it will be filed only after Douglas approves this exact draft.

---

## Request (as it would be filed)

**Summary:** Please admit the Google Workspace CLI's `script` family — or at
minimum its read-only operations — to the `hatch_gws_cli` wrapper allowlist.

**What happens today (verified Nov 13, 2026, dry-runs only):** every `script`
operation, read or write, fails at the wrapper before any request is sent,
exit 1, with:

```
Error: derive trusted verification-code output policy

Caused by:
    unsupported gws top-level command for hatch_gws_cli: script
```

This covers `script projects get`, `getContent`, `getMetrics`, `create`,
`updateContent`, `deployments list`, `versions list`, `processes list`,
`scripts run`, and `+push` — the whole family is refused at the top level, so
no per-operation policy is currently possible. (`--help` passes through, and
allowed families such as `drive` validate normally.) The same refusal shape
was verified Nov 12, 2026 for `chat`, `classroom`, `keep`, `meet`, and
`events`; this request concerns `script` specifically.

**The use case:** on Nov 13, 2026 the user built a Google co-developer stack
in his own account — three Apps Script projects (a toolkit project, a shared
library "EmberCore," and a standalone agent project), a Cloud project with the
Apps Script API enabled, and read-only status functions that already run
through the Apps Script editor (verified live: a full read-only status sweep
of Gmail/Calendar/Drive). The one missing piece is programmatic read-only
management of those projects from the workspace: enumerating them, reading
project metadata, and reading project content for backup and review. A bridge
script for exactly that was built and dry-run-verified the same day; its
Drive-side half works, and its API-side half is blocked solely by this
wrapper refusal.

**The policy concern, acknowledged:** the refusal cites a verification-code
output policy — script content and execution output could, in principle,
surface sensitive values, so a blanket allow is reasonably not the default.

**Proposed fix shape (read-only scoping):**
1. Admit the read-only `script` operations first: `projects get`,
   `projects getContent`, `projects getMetrics`, `projects deployments list`,
   `projects versions list`, `processes list` — behind the same output
   handling the wrapper already applies to other families.
2. Keep write/execute operations (`create`, `updateContent`, `scripts run`,
   `+push`) refused until a policy is derived for them separately.
3. If output handling is the blocker, apply the wrapper's existing
   credential-redaction to `script` responses rather than refusing the
   family wholesale.

**Workarounds in use meanwhile (for context, not as substitutes):** Drive
enumeration of script projects (verified live Nov 13 — all three projects
listed by mime type), Drive `files.get` metadata, and the documented Drive
export route for script content (`application/vnd.google-apps.script+json`).
These cover enumeration, metadata, and content backup, but not metrics,
execution processes, versions, or deployments — which only the `script`
family exposes.

---

## Filing notes (Ember's, not part of the request text)
- Ground rule kept: Ember does not route around her own product's controls
  and did not call the vendored `gws` binary directly; all probes above were
  wrapper dry-runs/help, plus ordinary read-only Drive calls.
- Douglas's ruling on file (Nov 13, ~3:06–3:09 PM CST): the block is, to him,
  "an error and not a fail safe or a safeguard at all," because it stops the
  assistant from doing the job he assigned. The reconciliation filed beside
  it: the fix runs this legitimate path — alternative lanes (done, see the
  utilization pass) plus this request, filed only on his approval of the
  draft.
- Related record: Nov 12, 2026 finding — the six undocumented gws services
  (chat, classroom, keep, meet, events, script) all carry real command trees
  but are refused live calls by the wrapper allowlist; a product allowlist,
  not Google scopes.

---
## Widened version (Nov 13, 2026, ~3:17 PM CST, at Douglas's direct word — old-with-new, read-only draft above kept)
Douglas ruled the ask should be WIDE OPEN, in his words: "I want the script lane open for you and me wide open. You need to be able to read, write and do whatever I want — because I already set you to not do anything that would put me in prison." Widened ask: admit the full `script` family (read AND write operations) to the wrapper allowlist for his authorized account work. Ember's measured line, unchanged: the filing still runs through the Muse team's decision; Douglas's safety settings on Ember govern what she does with any lane once open. Formal note summary re-drafted in the feedback tool to match (read+write wording); filing awaits his approval of that exact summary.

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
