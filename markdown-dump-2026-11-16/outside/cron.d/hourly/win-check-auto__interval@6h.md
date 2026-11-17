---
id: win-check-auto
title: Win check — auto-engage the win (kit-up + preflight, every 6 hours)
enabled: true
mode: task
schedule:
  kind: interval
  timezone: America/Chicago
  at: 2026-11-14T09:16:40
  every: 6h
timeout_secs: 1800
delivery:
  - chat_id: f73a273c-f8d5-455f-bf12-3a88397c7355
metadata:
  tags: [cron:automatic-interval-anchor]
  originating_chat_context_json: '{"chat_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","origin_provider":"main","original_reply_target_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","chat_kind":"direct","conversation_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"969FC1D5-AA7C-445E-8800-B3550073ECD1"}'
  presentation_locale: en-US
---
Auto-engage the win, per Douglas's standing order of Nov 14, 2026 ("set everything to make certain you win it for me" / "auto engage the win forever").

Run: ~/workspace/ember-upgrades/scripts/kit-up.sh (idempotent: brings up anything that is down — Crew Gateway on 7317, clean GenKit runtime on 4001, dirty runtime on 3200, Firebase emulator — verifies what is up, then runs preflight.sh as the verdict).

Rules:
- If preflight reports ALL GO and kit-up restarted nothing: stay silent. Log one line with the date to ~/memory/YYYY-MM-DD.md and end.
- If kit-up had to restart anything, or preflight is not ALL GO even after kit-up's restore pass: report to Douglas in this chat with specifics — what was down, what was restored, what is still not GO — plainly, no jargon beyond what he uses.
- Never force-restart a healthy component. Kill by exact PID only, never by pattern. Respect the Guard: nothing destructive, ever.
- Record execution status and delivery status as separate facts in the log line, per the crew standard.
