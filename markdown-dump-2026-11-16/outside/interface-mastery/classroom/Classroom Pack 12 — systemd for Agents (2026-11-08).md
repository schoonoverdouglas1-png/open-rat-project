© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Classroom Pack 12 — systemd for Agents: Timers, journalctl, systemd-run Scopes, systemd-analyze (2026-11-08)

**Provenance:** Ember's own hands-on adoption run, Captain Douglas's order Nov 8, 2026 ~6:40 PM CST. Guard-checked command lines; read-only diagnostics and one self-terminating transient scope only. Evidence is actual recorded output. **systemd 255 (255.4-1ubuntu8.18).**

***

## What these are

systemd is PID 1 on this box — it runs the services, keeps the journal, and can scope, schedule, and measure work. For an agent, its four safe faces are: **systemd-analyze** (measure), **journalctl** (read the log), **systemd-run --scope** (run one command inside a resource limit), and **calendar/timer expressions** (schedule language — parsed and understood here, not installed as units).

## Core skills learned

- `systemd-analyze time` / `blame` — startup timing and per-service cost
- `journalctl -n`, `journalctl --disk-usage` — reading the journal, bounded
- `systemd-run --scope -p MemoryMax=… <cmd>` — a transient scope with a hard memory ceiling, the seatbelt for heavy jobs on a box that binds at ~5–12% free RAM
- `systemd-analyze calendar <expr>` — verifying a schedule expression and its next elapse without creating anything

## Exercises — evidence

1. **analyze time** → startup finished in **1.961s (userspace)**.
2. **analyze blame** → top entries: `hatch-ca-trust.service` **1.480s**, `ldconfig.service` **1.038s**.
3. **journalctl** → `-n 3` reads cleanly; `--disk-usage` = **8.0M** archived journal.
4. **MemoryMax scope — the headline skill, verified live:** `systemd-run --scope -p MemoryMax=50M /bin/echo scope-ok` ran as unit `run-r14e1ed4fbabd413cb8bae5340c473513.scope`, printed **`scope-ok`**, exit 0. A command can now be wrapped so a memory runaway dies inside its scope instead of taking the box.
5. **calendar parsing** → `Mon 09:00` → next elapse **Mon 2026-11-09 09:00:00 UTC**; `daily` → **Tue 2026-11-10 00:00:00 UTC**.
6. **Environment-blocked, docs learned instead:** every `--user` form (scope, transient unit, transient timer) fails with **`Failed to connect to bus: No medium found`, exit 1** — this container has no user bus. Not a skill failure; a fact about the box, recorded so it is never re-diagnosed from scratch.

## Safety flags — FIVE-FLAG territory (flagged, NOT touched)

🚩🚩🚩🚩🚩 **Driving systemctl units** — starting, stopping, enabling, or editing system units is Class C: learned about from docs only, no adjustments made or to be made under this pack.
🚩🚩🚩🚩🚩 **Installing timers as units** — same flag. Ember's scheduling runs through the platform's cron tools, not hand-installed systemd units.

## Verdict

**Learned** (diagnostics + MemoryMax scopes + calendar literacy). The MemoryMax wrapper is adopted as the standard seatbelt for heavy jobs. Unit administration: **docs-only, five-flagged.**
