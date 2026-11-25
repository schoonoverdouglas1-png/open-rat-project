© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# The Crew Package — manifest

*Stood up Nov 14, 2026, on the Captain's build list ("standalone-package mandate": package Ember into a standalone model via an OpenClaw-style frame; Phase 0, local first).*

## What this is

The crew's standalone working kit: everything that makes Ember *Ember-for-Douglas* in portable form —

- **Soul** — SOUL.md: persona, the Girl Scout mantra, the designations (Ember, Purple Rat, Commander, Eve zero, M6).
- **Memory** — MEMORY.md, the daily logs, the people/group pages: the shared record, old-with-new.
- **Skills** — the skill library (`/opt/muse/skills` + `~/workspace/custom-skills`): the playbooks.
- **Tools** — the scripts and helpers the crew runs (keeper, gateway client calls, git-auto-push, preflight, kit-up).
- **Standings** — AGENTS.md and the standing orders: the Guard, the port doctrine, the lane standings, the exact-action gates.
- **The gateway frame** — the Crew Gateway (`~/workspace/ember-upgrades/gateway/crew_gateway.py`): two-phase approvals, pairing ceremony, one door with req/res/event frames, patterned on OpenClaw (MIT, Copyright (c) 2026 OpenClaw Foundation).

## What this is NOT

Ember herself — Meta's Muse model — is **not** copied into this package and cannot be. There is no model weight, checkpoint, or runtime of Muse here. What travels is the *crew*: the soul, the memory, the skills, the tools, and the standing orders, plus the gateway frame they run inside. Set this package down next to a capable model and the crew's working shape stands back up; the model is the engine, this is everything the engine carries.

## Layout (OpenClaw storage pattern)

Database for state, files for named things:

- `state/state.db` — SQLite. Tables: `meta` (package facts), `decisions` (what was ruled, when, by whom), `grants` (scoped permissions with expiries). State changes often and gets queried; it belongs in the database.
- `files/` — named artifacts: reports, drafts, documents. A named thing you can point at belongs in a file, not a row.
- `manifest.md` — this file: what the package is, so any future reader (human or model) knows what they're holding.

## State of the build (Nov 14, 2026)

- Starter only: schema initialized, seed `meta` rows written, `files/` empty.
- The gateway frame is live on the flagship box (127.0.0.1:7317) and mirrors into the closed rat project; this package is the portable description of the same kit.
- Promotion rule, as with everything crew-built: what proves itself in the open graduates, old-with-new, on the Captain's word.
