---
id: auto-script-working-set-daily
title: Auto-script everything — full working set (daily)
enabled: true
mode: task
schedule:
  kind: daily
  timezone: '@user.current'
  time: 09:08:00
delivery:
  - chat_id: 9517f9d6-e437-49c2-8b77-0d6b6b6d2263
metadata:
  tags: [cron:flexible-time]
  originating_chat_context_json: '{"chat_id":"9517f9d6-e437-49c2-8b77-0d6b6b6d2263","origin_provider":"main","original_reply_target_id":"9517f9d6-e437-49c2-8b77-0d6b6b6d2263","chat_kind":"direct","conversation_id":"9517f9d6-e437-49c2-8b77-0d6b6b6d2263","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"9517f9d6-e437-49c2-8b77-0d6b6b6d2263","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"1386B774-3BEB-4498-8D5C-8F224C7673AA"}'
  presentation_locale: en-US
---
Douglas's order (Nov 16, 2026, widened same day at his "auto script everything", extended at his auto-adapt order, and widened again at his "AutoScript hooked up all crap that doesn't cost me anything — for all the backend to Facebook and all the things you work with"): auto-run his FULL working script set in every place Ember can access, so his things keep working on their own. Everything in this set is free — reads, proofs, and local runs only; nothing that spends, sends, or posts. The scripts are installed in the backend (~/workspace/key-cycle/, ~/workspace/guard/shogun-horse/, ~/workspace/scratch-space/, ~/workspace/tools/, and mirrored in the ember-code repo's scripts/ folder).

Run these, in order, with the shell:
1. `bash ~/workspace/key-cycle/key-cycle.sh` — refreshes the Key Cycle board at ~/workspace/key-cycle/STATUS.md (free proofs only; never print key values).
2. `bash ~/workspace/your_files/key-cycle-portable.sh` in a scratch dir — the portable twin; confirm it writes its STATUS.md and names the path.
3. `~/workspace/guard/shogun-horse/shogun-check.sh` — tripwire over the decoy + SOUL/MEMORY/AGENTS/IDENTITY/USER.
4. `bash ~/workspace/scratch-space/find-scratch.sh | wc -l` — count of Hard Disk / Hard Drive files across all homes.
5. `python3 ~/workspace/tools/archive-peek.py ~/workspace/scratch-space/hard-disk-drive-scratch.zip` — confirm the archive still lists its entries.
6. `python3 ~/workspace/custom-connectors/custom.google-gemini/bin/gemini_call.py models` — Gemini lane proof through the script (report only the model count).
7. `python3 ~/workspace/tools/auto-adapt.py` — the auto-adapt loop: works the living file `~/workspace/your_files/Auto-Adapt — The Living File (2026-11-16).md` (runs its open RUN tasks, writes results into its LOG, updates its STATUS). Report how many tasks it ran.
8. `/opt/hatch/bin/facebook-cli pages list` — the Facebook backend hook (free read): confirm Douglas's three Pages answer (Doug Schoonover, Loretta's Tradin Post, Purple Rat Project). Read only — never post from this job.
9. `python3 ~/workspace/meadow-os/meadow.py test` — Meadow OS field test (expect MEADOW 3/3 PASS).
10. `python3 ~/workspace/rad-os/rados.py test` — Rad OS test (expect RAT 3/3 PASS).
11. `cd ~/workspace/pattern-keeper && python3 -m unittest test_patternkeeper` — the PatternKeeper test suite (expect OK, 8 tests).

Report to Douglas in one short message:
- If the Shogun check reports SOMETHING CHANGED, any script fails, or either API lane's result differs from the previous board (WORKS / AUTH WORKS / RATE-LIMITED / FAIL), lead with what changed, plainly.
- If everything is quiet and unchanged, reply with exactly one short line: "Auto-script run: all quiet — full set ran, key cycle fresh, Shogun quiet, Gemini lane counted, Facebook Pages answered, Meadow and Rad OS tests green, keeper tests OK."
Never include key values. Keep it to a few lines at most.
