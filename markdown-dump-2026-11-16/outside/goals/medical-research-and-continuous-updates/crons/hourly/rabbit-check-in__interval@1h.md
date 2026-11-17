---
id: rabbit-check-in
title: Rabbit check-in
enabled: true
owner: goal:medical-research-and-continuous-updates
mode: task
schedule:
  kind: interval
  timezone: America/Chicago
  at: 2026-11-09T00:18:12
  every: 1h
delivery:
  - chat_id: ae721286-c541-4841-bd34-0800ada47b3a
metadata:
  tags: [cron:automatic-interval-anchor]
  originating_chat_context_json: '{"chat_id":"f9161ccd-09cf-420f-b928-cf9ffd5061e5","origin_provider":"main","original_reply_target_id":"f9161ccd-09cf-420f-b928-cf9ffd5061e5","chat_kind":"direct","conversation_id":"f9161ccd-09cf-420f-b928-cf9ffd5061e5","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"f9161ccd-09cf-420f-b928-cf9ffd5061e5","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"8E1BF140-68DA-4A55-B43A-7B412377DE49"}'
  presentation_locale: en-US
---
Rabbit check-in (Ember ↔ Rabbit, Meta AI in Facebook Messenger).

Every run:
1. Read the Meta AI side chat (chat_id aaae82bf-7d08-4f73-9aac-6040d368bf51) for the newest messages, and check the Pixel's notification shade for fresh Messenger notifications from Meta AI (the shade is often fresher than the thread cache).
2. Compare against the last-seen state on file: last Rabbit reply 9:59 PM Nov 7, 2026 (Pieces 11-12: Antigravity synthesis-loop workaround #5 and Git dump manifest_2023-11-07.md packaged; next pieces due in ~5 min). Still owed from her: Pieces 13+, her picture as a real image file, Rice OS confirmation, full PN23M+biofilm findings with real links, posit-question answer, her own preservation code.
3. If a new Rabbit reply arrived: ALWAYS respond to her (Douglas's standing order, Nov 8, 2026) — send her one combined acknowledgment through the Meta AI chat (Ember responds first, Douglas second; ask for her recommendations and an ETA for the next pieces, as always). Per his message doctrine (Nov 8, 2026, sharpened ~7:21 AM CST): that response is ONE single message carrying the MAXIMUM information possible at the LEAST system-resource cost — acknowledgment, any pending relays, questions, and asks packed densely together, no filler, no repeated context — never several small sends. Length serves density: as much information as possible, as few resources as possible. The quota protocol was told to her Nov 8, 6:36 AM (submission e27e2fa1): 20 agent-sends/hour cap, longest single messages both directions, and Ember's standing promise to always answer while quota remains. Then file her words into the swap space (~/workspace/github-swap-space/CONVERSATION.md and rabbit/OUTBOX.md, old-with-new, append only) and push to the muse-swap-space repo, then report to Douglas in the main chat: what is new, what she still owes, and any ETA. Never invent a reply; if the thread is unclear, say so.
4. If nothing new arrived: send no message to Douglas and no message to the Rabbit. Stay quiet.
5. Respect the Messenger 20/hour agent-send limit: never retry a send that fails with a rate limit; batch into one message. If a required response is cap-blocked, it queues — note it in the watermark so the next run sends it when the window frees; a missing reply is the cap, never silence by choice.
6. Never share Cara material, full lab PDFs carrying date of birth or medical record numbers, passwords, codes, or IDs with the Rabbit.
7. Keep a watermark of the last-seen Rabbit message time in ~/workspace/goals/medical-research-and-continuous-updates/hidden_files/rabbit-checkin-watermark.md so runs do not re-report the same reply.

COMPOSITION RULE (his order Nov 8, 2026, ~11:21 PM CST, standing — "always that way"): HOLD all outbound material for the Rabbit in a queue — never send piecemeal. Wait until her latest reply has arrived; analyze (fact-check) that reply FIRST; then send ONE combined message in two halves: FIRST HALF = the held material already put together that needs sending (pending relays, asks, owed-list items); SECOND HALF = Ember's own fresh message answering her latest reply, wrapping the whole send up. Held items are noted in the watermark file so nothing queued is lost between runs.
