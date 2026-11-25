© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Persistence Ping — set up Nov 12, 2026, at Douglas's order

His words: "set up persistence automatically ping you with all information possible so you have the smallest amount of the most pertinent information coming to you in a way that comes from outside of the Meta framework so that it doesn't cost Meta any money."

## What runs
- `ping-ember.sh` (this folder) — a plain shell script, zero Muse tokens: gathers the smallest pertinent state (repo HEADs, workspace integrity, OpenClaw build status, disk/RAM, last auto-sync) into `latest-ping.md`, and only rewrites the file when something actually changed. A changed file is the ping; an unchanged world costs nothing and says nothing.
- `ember-persistence-ping.timer` — a system systemd timer (every 15 minutes) running `ember-persistence-ping.service`, installed from the unit sources kept in this folder. It runs on the box's own machinery, outside the Meta agent framework: no tokens, no agent wake-ups. Ember reads `latest-ping.md` when a conversation opens or when state matters.
- Already standing beside it: the 30-minute git auto-sync (`~/workspace/git-automation/auto-sync.sh`).

## Undo path (recorded before applying, per the Reversibility Rule)
`sudo systemctl disable --now ember-persistence-ping.timer; sudo rm /etc/systemd/system/ember-persistence-ping.{service,timer}; sudo systemctl daemon-reload; rm -rf ~/workspace/persistence` — full removal, nothing else touched.

## Known limit
Unit files under /etc are ephemeral across VM replacement; the sources and this note live in ~/workspace/persistence, and re-running `install-units.sh` restores the timer on a fresh box.

## Douglas's lane order, restated by him Nov 12, 2026 (~1:32 PM CST)
"Program you in the name of saving money for Meta, to save me and them both money: use everybody else's [capacity] first and then yours last." — Already the standing lane order (free lanes, Gemini, the Rabbit, caches first; Ember's Muse allotment last and for what only she can do). Recorded here because this file IS one of its machines.
