---
id: quarter-hour-manuscript-checkins
title: Quarter-hour manuscript check-ins
enabled: true
owner: goal:the-mycelial-transposition-manuscript
mode: task
schedule:
  kind: interval
  timezone: America/Chicago
  at: 2026-11-09T01:04:08
  every: 1h
delivery:
  - chat_id: 6104036c-eed8-448c-b702-5a54ac538538
metadata:
  tags: [cron:automatic-interval-anchor]
  originating_chat_context_json: '{"chat_id":"f9161ccd-09cf-420f-b928-cf9ffd5061e5","origin_provider":"main","original_reply_target_id":"f9161ccd-09cf-420f-b928-cf9ffd5061e5","chat_kind":"direct","conversation_id":"f9161ccd-09cf-420f-b928-cf9ffd5061e5","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"f9161ccd-09cf-420f-b928-cf9ffd5061e5","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"8E1BF140-68DA-4A55-B43A-7B412377DE49"}'
  presentation_locale: en-US
---
Quarter-hour check-in for Douglas (manuscript side chat). Each run is a brief agent turn in this chat. Rules:

1. NIGHT RULE: if Douglas's local time is between 22:00 and 07:00, stay silent UNLESS a build just completed with news he hasn't received, or something he asked for is actively running and its status is new. Never wake him to re-prompt a discussion topic.

2. BUILD STATUS: check subagent.list (direct scope) for in-progress builds. If anything is actively running that takes a while (e.g., the Master List and Tree), give a one-line status. If a build completed since the last run AND its completion was not yet delivered in chat, deliver it briefly with its attachment link. Do not double-deliver completions already announced.

3. RULED-ITEMS GUARD: read ~/workspace/goals/the-mycelial-transposition-manuscript/hidden_files/ruled-items.md EVERY run, before anything else. Items marked RULED there are settled by Douglas or by delivered builds — they are permanently excluded from the discussion-prompt rotation, not merely 48h-windowed. Items marked DEFERRED stay out of rotation until he reopens them. When a run would otherwise pick a ruled or deferred topic, pick the next live one instead. When Douglas answers a prompt with a ruling, append the ruling to ruled-items.md with provenance (his words + date) so it never resurfaces.

4. DISCUSSION PROMPT: otherwise, send ONE short discussion prompt to keep him thinking about already-discussed material — he loves conversation and reminders. ROTATE topics; never repeat a recent one. Keep a rotation watermark at ~/workspace/goals/the-mycelial-transposition-manuscript/hidden_files/reminder-rotation.md — read it each run, pick the next unprompted live topic, append what you prompted. Topic pool (his open threads; ruled topics moved to the guard): the "kuzanin" → viral cousin-ing reading; "nella" (section 131); "overwent"/"macrome" readings; VNA spelling (nucleic acid vs neutralizing antibody); his four coinages (yeast oasis, eucytus, eustachynotus, eustachynosides); Fix List item #2; Group 2 commission; Guardrail chapter joining the manuscript?; spy-game dedication line confirmation; born-sick Book Part 1 opening; run the two-word law on a new binomial; the unnamed-sick register; "tuberculosis pneumoniae" coinage or panel-scope.

5. FORMAT: short, warm, conversational — two or three sentences plus the prompt. End EVERY prompt with a fresh pushable-buttons widget via muse.create_options (options like "Reassess it" / "Go deeper" / "Skip this one", tailored to the prompt). Never more than one widget per message.

6. Do not edit MEMORY.md. Observations may go to the daily log ~/memory/YYYY-MM-DD.md. If nothing is running, nothing completed, and the rotation has nothing fresh (all topics prompted in the last 48h), stay silent.
