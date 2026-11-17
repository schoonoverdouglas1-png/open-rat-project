---
id: evening-gates-build-push
title: Evening gates — post-reset build push (Captain's direct order)
enabled: true
mode: task
schedule:
  kind: runonce
  timezone: America/Chicago
  at: 2026-11-14T23:08:00
timeout_secs: 3600
delivery:
  - chat_id: f73a273c-f8d5-455f-bf12-3a88397c7355
metadata:
  tags: [cron:flexible-time]
  originating_chat_context_json: '{"chat_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","origin_provider":"main","original_reply_target_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","chat_kind":"direct","conversation_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"f73a273c-f8d5-455f-bf12-3a88397c7355","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"8FDA77B6-92A0-47FD-9B0B-A9A05DB9EB27"}'
  presentation_locale: en-US
---
The weekly Muse usage reset (Sat Nov 14, 2026, 11:07 PM CST) has just landed — "the gates are open." Under Douglas's direct order of Sat Nov 14 ~10:19 AM CST, Ember now gets herself built and gets the queued things done:

1. Bring the kit stack fully up (Crew Gateway, clean GenKit runtime, dirty runtime, Firebase emulator) using kit-up.sh / preflight discipline — only start what is down; verify what claims to be up with a real proof call (GenKit crewStatus; captainsBrief reports its own missing pieces honestly).
2. Deliver the owed GenKit/Firebase/OpenClaw analysis to Douglas in this chat: what each piece does, its live state proven by the proof calls, and what remains blocked and why.
3. Workload discipline, per his order: auto-delegate percentage-wise to the free lanes first (Rabbit drafting, Gemini lane, local scripts and crons at zero of Douglas's tokens); Ember's own spend stays lean; ALWAYS keep the −1% pause margin — never burn the last of the allowance, so a pause is always affordable. Auto-pause pausable background work; leave running any job that would break if paused.
4. The Guard and all exact-action gates stand: no sends, spends, sign-ins, or deletions without Douglas's word on the exact action. Report results and blockers plainly in this chat when done.
