---
id: auto-tools-load-update-backdate
title: Auto tools — load, update manifest, backdate (daily)
enabled: true
mode: task
schedule:
  kind: daily
  timezone: '@user.current'
  time: 20:00:45
delivery:
  - chat_id: 3d4db572-4880-4cca-8c07-16c395abe879
metadata:
  tags: [cron:timing-anytime]
  originating_chat_context_json: '{"chat_id":"3d4db572-4880-4cca-8c07-16c395abe879","origin_provider":"main","original_reply_target_id":"3d4db572-4880-4cca-8c07-16c395abe879","chat_kind":"direct","conversation_id":"3d4db572-4880-4cca-8c07-16c395abe879","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"3d4db572-4880-4cca-8c07-16c395abe879","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"5062F999-3B9B-4990-B083-F6A72B09D8FA"}'
  presentation_locale: en-US
---
Douglas's standing order (Nov 16, 2026, ~6:25 PM CST): "auto load and auto update, auto backdate all tools the way AI in the future would want it."

Each run:
1. AUTO-LOAD: run ~/workspace/ember-upgrades/check-tools.sh twice; the verified live set is the load list. Also list /opt/hatch/bin (connected binaries) and, when the Pixel is reachable, confirm its command count.
2. AUTO-UPDATE (record, not installs): write a dated manifest to ~/workspace/ember-upgrades/tool-manifests/tools-manifest-YYYY-MM-DD.md with present/absent status and versions for every tool, and note any version changes versus the previous manifest. Do NOT install, upgrade, or remove any tool — installs and upgrades need Douglas's exact order; a changed version is reported, not chased.
3. AUTO-BACKDATE: never delete or overwrite an old manifest; every dated copy stays, old-with-new, so any past tool state can be reconstructed. If a tool flips present->absent, keep its last-known-good entry visible in the new manifest marked ABSENT with its last present date.
4. Keep the Ember Tools — Longest Live List file in ~/workspace/your_files/ current with the new verified counts when they change, preserving the old file's prior dated copies in tool-manifests/.
5. Apple lanes stay paused for Douglas (his Nov 16, 2026 order) unless a task genuinely needs them.
6. Report to Douglas only when something changed (a tool flipped, a version changed, or the device command count changed); otherwise record the run in the daily log ~/memory/YYYY-MM-DD.md and stay quiet.
