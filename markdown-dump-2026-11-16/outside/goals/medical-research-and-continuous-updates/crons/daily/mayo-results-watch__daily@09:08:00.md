---
id: mayo-results-watch
title: Mayo test-result + refill watch — Gmail notifications, daily
enabled: true
owner: goal:medical-research-and-continuous-updates
mode: task
schedule:
  kind: daily
  timezone: America/Chicago
  time: 09:08:00
delivery:
  - chat_id: 93a60292-34e8-4546-815a-e47714c5f2f2
metadata:
  tags: [cron:flexible-time]
  predicted_connector_permissions:
  - connector: gmail
    method: users.messages.get
  - connector: gmail
    method: users.messages.list
  originating_chat_context_json: '{"chat_id":"9608ea4b-0647-48ba-98c6-a31679642643","origin_provider":"main","original_reply_target_id":"9608ea4b-0647-48ba-98c6-a31679642643","chat_kind":"direct","conversation_id":"9608ea4b-0647-48ba-98c6-a31679642643","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"9608ea4b-0647-48ba-98c6-a31679642643","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"7BE1F79E-5E5F-4698-A8B4-676C4AD1C184"}'
  presentation_locale: en-US
---
Watch Douglas's Gmail for Mayo Clinic / MyChart notifications that new test results have posted (senders or subjects mentioning Mayo Clinic, Mayo Clinic Health System, MyChart, or new test results). Context: Dr. Kyle Van Dyke ordered three tests on Nov 9, 2026, with results expected in about two weeks (around Nov 23, 2026); Douglas also has Mayo Tapestry 2.0 enrollment on file.

ALSO watch, per Douglas's order Nov 12, 2026 (~1:24 PM CST), for Mayo Clinic refill / prescription notices: messages from Mayo Clinic or its pharmacy whose subject or sender indicates a refill was processed, a prescription is ready, or a refill needs his action (for example "prescription ready", "refill" in the subject). A notice like this already exists on the record: a Nov 9, 2026 Mayo prescription-ready notice was seen in Gmail during this watch's Nov 11 run. When a NEW refill/prescription-ready Mayo notice appears: send Douglas one short, plain message in this chat — that a Mayo refill appears done / a prescription appears ready, with the date and subject of the notification only. File it without interpretation; never advise on the medication itself, never contact the clinic or pharmacy, and never attempt any refill action — monitoring and reporting only, exactly as with results.

Hard limits, from Douglas's own standing law:
- NEVER log into Mayo Clinic, MyChart, or any patient portal. NEVER ask for or accept portal credentials. This watch reads only the email notifications that arrive in his Gmail.
- NEVER report, quote, or interpret any lab values. A notification email normally contains no values anyway; if one somehow does, do not relay them — say only that results appear to have posted.

Behavior:
- Search Gmail for matching messages newer than the last run's check (keep a watermark in this goal's hidden_files). Search at least the last 48 hours on the first runs to avoid misses.
- If a new result notification is found: send Douglas one short, plain message in this chat — that Mayo results appear to have posted, the date and subject of the notification, and that he can open his chart himself; anything he shows Ember from it will be recorded faithfully without interpretation. Update the watermark.
- If nothing new: end without messaging him. Silence is the normal state of this watch.
- Record each run's outcome (found / nothing) in one line in the daily log, ~/memory/YYYY-MM-DD.md.
