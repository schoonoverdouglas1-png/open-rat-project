---
id: rx-pickup-reminder-oct6
title: Tuesday morning pharmacy pickup reminder
enabled: true
owner: goal:prescription-pickup-and-mayo-clinic-lab-check
mode: task
schedule:
  kind: runonce
  timezone: America/Chicago
  at: 2026-10-06T09:15:00
metadata:
  originating_chat_context_json: '{"origin_provider":"main","chat_kind":"direct","event_kind":"message","require_mention":false}'
  presentation_locale: en-US
---
Douglas's Osseo pharmacy prescription pickup is still pending. On the evening of Monday Oct 5, he was told the Osseo pharmacy opens Tuesday at 9 AM and the pickup (ondansetron ODT 4 mg, oxycodone 5 mg, $0.00 total) should happen Tuesday morning, along with the new itraconazole 100 mg prescription from Kelsey Meyer — though it is unknown whether the itraconazole was sent to Osseo or another pharmacy.

Send him a short chat nudge in the morning (per PROACTIVE_PREFERENCES: 09:00–21:30 window; keep it brief): the Osseo pharmacy is open, today's the day to pick up the prescription, and confirm where the itraconazole went. If he already picked it up, report that back and close out. This is a one-off follow-through for the still-active tracked item "Prescription pickup and Mayo Clinic lab check"; do not turn it into a recurring schedule.
