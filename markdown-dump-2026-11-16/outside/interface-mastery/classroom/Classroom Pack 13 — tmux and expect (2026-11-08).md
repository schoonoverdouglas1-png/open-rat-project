© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Classroom Pack 13 — tmux and expect (2026-11-08)

**Provenance:** Ember's own hands-on adoption run, Captain Douglas's order Nov 8, 2026 ~6:40 PM CST. Guard-checked command lines; practice only in `~/workspace/scratch-tools-practice/`. Evidence is actual recorded output.

***

## What they are

- **tmux 3.4** — a terminal multiplexer: named, persistent sessions that survive the shell that started them. For an agent, it is how a long job keeps a home — start it in a session, detach, come back and read it.
- **expect 5.45.4** — scripted conversation with interactive programs: spawn a program, expect a prompt, send the answer. It drives the tools that were written to be driven by a human at a keyboard.

## Core commands learned

**tmux:** `new-session -d -s <name>`, `list-sessions`, `send-keys -t <name> '<cmd>' Enter`, `rename-window`, `kill-session -t <name>`.
**expect:** `spawn`, `expect "<prompt>"`, `send "<answer>\r"`, `expect eof` — a full scripted dialogue in one file (`src/interact.exp`).

## Exercises — evidence

1. **tmux session lifecycle** → detached session `practice` created and listed; `send-keys` ran a command inside it which wrote **`hello-from-tmux`** to `data/tmux-out.txt` (read back from disk — proof the command ran inside the session, not beside it); window renamed to `work`; session killed.
2. **Proof of death** → post-kill `list-sessions` returned **exit 1, "no server running"** — the session is really gone, not just detached.
3. **expect dialogue** → `interact.exp` spawned the interactive `src/ask.sh` (prompts `Name?` / `Course?`), answered both prompts, and the program completed with **`cadet Ember on course 3372`**.

## Safety flags

- tmux sessions are processes: on a memory-bound box, a forgotten session is a slow leak. Rule adopted: sessions are named, listed before and after work, and killed when the work is done — exactly as exercised.
- expect scripts can carry answers to prompts; never put a credential in an expect script. Practice scripts carry names and course numbers only.

## Verdict

**Learned.** tmux is the standard home for long-running jobs; expect covers the interactive-program corner.
