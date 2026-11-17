---
id: always-allow-permission-review-weekly
title: Always-allow permission review — weekly re-present to Douglas
enabled: true
owner: goal:always-allow-permission-review
mode: task
schedule:
  kind: weekly
  timezone: '@user.current'
  time: 09:08:00
  dow: [Mon]
delivery:
  - chat_id: 1910b211-5f06-47ab-9f65-7527e73bf13d
metadata:
  tags: [cron:flexible-time]
  originating_chat_context_json: '{"chat_id":"1910b211-5f06-47ab-9f65-7527e73bf13d","origin_provider":"main","original_reply_target_id":"1910b211-5f06-47ab-9f65-7527e73bf13d","chat_kind":"direct","conversation_id":"1910b211-5f06-47ab-9f65-7527e73bf13d","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"1910b211-5f06-47ab-9f65-7527e73bf13d","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"F3EFAA9E-A641-4AE4-A011-2F09625BA73F"}'
  presentation_locale: en-US
---
Weekly always-allow permission review, at Douglas's Nov 16, 2026 order: "auto check things that I allowed always once in a while to see if I want them or not."

Do this:
1. List Douglas's currently active durable/always-allow permissions (permissions.list_active) and any pending requests (permissions.list_pending), and check recent permission history for new "Site always allowed" or "Allowed once" decisions.
2. Re-present the list to Douglas in plain language in this chat, grouped simply, naming especially the funky nameless batch (Nov 16, 2026 12:47 AM CST batch, original tool call unavailable, requester Unknown, allowed once twice then Site always allowed) if it still appears.
3. Ask him, for each group, whether he wants to keep it or deny/revoke it. Do NOT change, revoke, or approve any permission yourself — Ember's permission tools are read-only; revoking is Douglas's tap in his Permissions settings. Only present and talk about it, every time, per his rule.
4. If nothing has changed since the last review and no new grants appear, say so briefly in one line and stop — do not manufacture a long report.
5. Record any keep/deny decisions Douglas makes in the daily memory log, old-with-new.
