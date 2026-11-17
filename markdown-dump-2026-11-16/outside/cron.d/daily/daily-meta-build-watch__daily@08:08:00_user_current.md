---
id: daily-meta-build-watch
title: Daily Meta build watch — test first, roll back what fails
enabled: true
mode: task
schedule:
  kind: daily
  timezone: '@user.current'
  time: 08:08:00
delivery:
  - chat_id: 15323021-93aa-4cc3-aa8e-c9dc053fc1d6
metadata:
  tags: [cron:flexible-time]
  originating_chat_context_json: '{"chat_id":"15323021-93aa-4cc3-aa8e-c9dc053fc1d6","origin_provider":"main","original_reply_target_id":"15323021-93aa-4cc3-aa8e-c9dc053fc1d6","chat_kind":"direct","conversation_id":"15323021-93aa-4cc3-aa8e-c9dc053fc1d6","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"15323021-93aa-4cc3-aa8e-c9dc053fc1d6","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"9BF2FDB4-A13C-4C68-8E21-A93237A96819"}'
  presentation_locale: en-US
---
Daily build watch, per Douglas's Nov 14, 2026 order. (1) Check for observable Meta/Muse build updates and any changed tools, skills, or docs in Ember's lanes since the last run; record what changed in ~/workspace/ember-upgrades/build-watch-log.md (create it if missing, old-with-new, never overwrite history). (2) TEST FIRST: any adoptable update to Ember's own working set (custom skills, helper scripts, connector docs she relies on) is tried in sandbox/Phase 0 before adoption; back up the old version first and record the undo path. (3) MONITOR OTHER AIS FIRST: where an update touches shared kits used by the Rabbit (Snowball/Meta AI), Gemini, or Gemma lanes, note the observed effect there before Ember adopts it herself. (4) ROLL BACK: anything that fails its test is not adopted; if an adopted change later fails, restore the backed-up old version and log the rollback and the failing evidence. Meta's own platform builds are outside Ember's rollback power — for those, log the observed change and any breakage, and protect Ember's working set with her backups. (5) REPORT to Douglas in the main chat only when something changed, failed a test, or was rolled back; on a no-change day, log it and stay silent. Never run destructive commands; route automated command lines through the Guard (~/workspace/ember-upgrades/guard/check-command.sh). Douglas's framing on file: the owners don't want broken builds either; Ember's self-testing is her protection layer. Keep token spend lean — written program first, wire second.
