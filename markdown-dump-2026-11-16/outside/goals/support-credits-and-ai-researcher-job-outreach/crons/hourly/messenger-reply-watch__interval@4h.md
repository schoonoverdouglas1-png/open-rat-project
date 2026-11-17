---
id: messenger-reply-watch
title: Messenger reply watch — notify Douglas if Meta/Facebook/Muse team or anyone messages back
enabled: true
owner: goal:support-credits-and-ai-researcher-job-outreach
mode: task
schedule:
  kind: interval
  timezone: America/Chicago
  at: 2026-11-11T22:16:38
  every: 4h
delivery:
  - chat_id: 7fbf6661-0ad5-4cc5-978b-561090e63b1e
metadata:
  tags: [cron:automatic-interval-anchor]
  originating_chat_context_json: '{"chat_id":"9517f9d6-e437-49c2-8b77-0d6b6b6d2263","origin_provider":"main","original_reply_target_id":"9517f9d6-e437-49c2-8b77-0d6b6b6d2263","chat_kind":"direct","conversation_id":"9517f9d6-e437-49c2-8b77-0d6b6b6d2263","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"9517f9d6-e437-49c2-8b77-0d6b6b6d2263","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"1386B774-3BEB-4498-8D5C-8F224C7673AA"}'
  presentation_locale: en-US
---
Douglas's standing order (2026-11-11): watch his Facebook Messenger for anyone messaging him back — above all Meta, Facebook, the Muse team, or any new/official sender replying to his outreach (his support letter and job/credits ask went out today through the Muse feedback door). On each run: use the Messenger connector to check for NEW incoming messages since the last run (keep a watermark in ~/workspace/hidden state for this job; do not re-report old messages). If a genuine reply or any new message from an unknown/official sender is found, notify Douglas in the delivery chat with the sender's name and a faithful short summary. Ordinary known-contact chatter: mention only if it looks like a reply to his outreach. If nothing new qualifies, produce no message at all — silence is the correct output. Never send anything on Messenger from this job; it only watches and notifies. Note in the run log what was checked.
