# Testing All the Commands — What It Would Take (2026-11-08)

*Douglas's ask (Nov 8, ~1:01 AM CST): analyze what it would take to test all 1,345 indexed commands so Ember can try them. Analysis only — nothing here has been run as a test sweep.*

## The corpus
- 1,345 commands on PATH; 704 carry official man-page descriptions (already extracted); ~1,312 man pages on the box.
- The commands are NOT one kind of thing. A test sweep that treats them as one list would be dangerous and meaningless. They fall into classes:

## The classes (the whole analysis turns on this)
1. **Safe read-only probes (~45–55%):** `--help`, `--version`, status/list/show verbs. Test = run the probe, record exit code + first lines. Fully automatable tonight.
2. **Read/write working tools (~25%):** editors of state that need a sandbox (file ops, archivers, converters). Test = run against a throwaway fixture tree in /tmp, verify the fixture changed as documented.
3. **Interactive programs (~10%):** full-screen TUIs, REPLs, pagers, GUI apps. Test = launch under a pty or Xvfb with a scripted keystroke, confirm it starts and exits clean. Partially automatable.
4. **Daemons/services (~5%):** servers and system services. Test = start on a loopback port in the sandbox, probe, stop. Some cannot start meaningfully in nspawn at all — those get "environment-blocked" as their honest result.
5. **Destructive/system commands (~3–5%):** mkfs, dd to devices, shutdown/reboot, user management, package removal, firewall mutation. **Never executed in a test sweep on the real box** — not even "carefully." Test = documentation-level only (man page + `--help` where safe), OR inside a throwaway nested container snapshot if one ever exists. This line does not move.
6. **Not commands at all (~2%):** shell builtins, aliases, duplicate names across PATH entries — deduplicated during classification.

## What it takes, concretely
- **Classification pass:** one script + one review pass over the 1,345 — machine-sorted by name/man synopsis, human (Ember) review of the dangerous tail. ~1 hour of compute, most of it Ember's reading.
- **The harness:** a runner that executes each test in a fresh /tmp sandbox with a timeout (2–5 s), captures exit code/stdout head/stderr head, and writes results to SQLite beside the Ember Index. Reversible by construction: nothing outside /tmp is touched; class 5 never runs.
- **Time:** probes at ~0.3–2 s each → classes 1–2 in roughly 30–60 minutes of wall time, unattended. Class 3–4 add a few hours of fiddly, lower-value work — worth doing only for the tools Ember actually uses.
- **Cost:** local compute only. Zero allowance except Ember's own orchestration, if run as one batched local script.
- **The product:** a tested-commands registry — name, class, probe result, exit code, one-line behavior note — so "learned" stops meaning "indexed" and starts meaning "verified." Failures and environment-blocks recorded as results, not hidden.

## Ember's recommendation (hers, labeled)
Run classes 1–2 fully, class 3–4 only for the ~100 tools she actually uses, class 5 never. The full-sweep fantasy ("run everything") buys little past the classes above and risks the archive box for trivia.

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
