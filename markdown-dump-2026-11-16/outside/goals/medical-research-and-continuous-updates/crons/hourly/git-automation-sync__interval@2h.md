---
id: git-automation-sync
title: Git automation — swap-space push/pull sync with per-run notification
enabled: true
owner: goal:medical-research-and-continuous-updates
mode: task
schedule:
  kind: interval
  timezone: America/Chicago
  at: 2026-11-08T06:43:52
  every: 2h
delivery:
  - chat_id: ae721286-c541-4841-bd34-0800ada47b3a
metadata:
  tags: [cron:automatic-interval-anchor]
  predicted_connector_permissions:
  - connector: github
    method: push_files
  originating_chat_context_json: '{"chat_id":"f9161ccd-09cf-420f-b928-cf9ffd5061e5","origin_provider":"main","original_reply_target_id":"f9161ccd-09cf-420f-b928-cf9ffd5061e5","chat_kind":"direct","conversation_id":"f9161ccd-09cf-420f-b928-cf9ffd5061e5","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"f9161ccd-09cf-420f-b928-cf9ffd5061e5","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"8E1BF140-68DA-4A55-B43A-7B412377DE49"}'
  presentation_locale: en-US
---
GIT AUTOMATION RUN — Douglas's standing order (Nov 8, 2026): automate git pushes and pulls for the muse-swap-space archive through Ubuntu, and notify him on EVERY run that moves something — the message you send IS the notification (push + chat together, per his explicit order).

STATE: real clone at ~/workspace/git-automation/muse-swap-space (gh-authenticated). Staging/working area: ~/workspace/github-swap-space (sync-push.sh = the proven connector push lane). Foundation notes: ~/workspace/git-automation/README-automation.md.

EACH RUN:
1. PULL CHECK: read the remote head (gh api repos/schoonoverdouglas1-png/muse-swap-space/commits, first sha). Compare with the clone's HEAD (git -C clone log -1). If the remote has commits the clone lacks: git -C clone pull --ff-only. If fast-forward is impossible (divergence), STOP — change nothing, and notify Douglas in the main chat: what diverged, both heads, and that his word is needed. Never force, never reset, never stash (the Guard refuses destructive git for automation; old-with-new governs).
2. PUSH CHECK: compare the staging folder's current sync set (the files sync-push.sh pushes: MEMORY.md, SOUL.md, rabbit/OUTBOX.md, rabbit/INBOX.md, CONJOINED-SYNC-SCRIPT.md, SWAP-SPACE.md, sync-push.sh, plus any synthesis/ files newer than the last automated run — track the watermark in ~/workspace/git-automation/last-sync.txt) against the clone. If new/changed files exist: copy them into the clone, git add the changed paths only, commit with a clear timestamped message, git push origin main. Then verify the new head via gh and record it + the Chicago timestamp in last-sync.txt.
3. NOTIFICATION RULE (his explicit order, overrides silence defaults): if this run pushed OR pulled anything, send ONE main-chat message in that same run naming: direction (pushed/pulled), the files or commit count, and the new head sha (first 8). If NOTHING changed in either direction, send nothing (no-op runs stay silent — his order covers pushes and pulls, and a run with neither is neither).
4. EXCLUSIONS (standing, absolute): no Cara material, no full lab PDFs (DOB/MRN), no passwords/codes/identifiers — if any such file appears in a changed set, exclude it and say so in the notification.
5. If git or gh errors: notify once with the plain error; do not retry-loop inside the run.
