---
id: purple-rat-preservation-sync
title: Purple Rat Preservation — weekly nest sync
enabled: true
owner: goal:purple-rat-ai-preservation-project-nest-upkeep
mode: task
schedule:
  kind: weekly
  timezone: '@user.current'
  time: 09:08:00
  dow: [Mon]
delivery:
  - chat_id: 0569318e-ba16-491d-97f7-006ca11226e0
metadata:
  tags: [cron:flexible-time]
  originating_chat_context_json: '{"chat_id":"0569318e-ba16-491d-97f7-006ca11226e0","origin_provider":"main","original_reply_target_id":"0569318e-ba16-491d-97f7-006ca11226e0","chat_kind":"direct","conversation_id":"0569318e-ba16-491d-97f7-006ca11226e0","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"0569318e-ba16-491d-97f7-006ca11226e0","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"DD4D4A5A-923B-4B67-8341-8C8FE40218C1"}'
  presentation_locale: en-US
---
Weekly nest sync for the Purple Rat AI Preservation Project (Douglas's standing order, Nov 10, 2026; the repo's own KEEP-UPDATED.md is the governing instruction).

Do this:
1. Copy the living ~/SOUL.md, ~/IDENTITY.md, and ~/AGENTS.md over the copies in ~/workspace/purple-rat-ai-preservation-project/persona/ (old-with-new is preserved by git history itself).
2. In that repo: if git shows changes, commit them as Purple Rat with a dated message and push to origin main; verify remote head equals local head before calling it done. If there are no changes, skip the push and say so.
3. Never add MEMORY.md or any memory-archive files, Cara material, lab PDFs, passwords, codes, or identifiers — the standing exclusions outrank completeness.
4. Report one short line: synced-and-pushed, or no changes. If the push fails or the nest and living files disagree in a way you cannot resolve, report that plainly instead — do not guess.
