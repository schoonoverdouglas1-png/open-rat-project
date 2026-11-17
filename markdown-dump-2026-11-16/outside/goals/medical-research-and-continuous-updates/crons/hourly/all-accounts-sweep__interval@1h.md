---
id: all-accounts-sweep
title: All-accounts sweep — connector counts vs snapshot (hourly)
enabled: true
owner: goal:medical-research-and-continuous-updates
mode: task
schedule:
  kind: interval
  timezone: America/Chicago
  at: 2026-11-08T05:37:22
  every: 1h
delivery:
  - chat_id: ae721286-c541-4841-bd34-0800ada47b3a
metadata:
  tags: [cron:automatic-interval-anchor]
  originating_chat_context_json: '{"chat_id":"ae721286-c541-4841-bd34-0800ada47b3a","origin_provider":"main","chat_kind":"direct","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"3F810C6F-1803-4068-8084-271C7C4E1E57"}'
  presentation_locale: en-US
---
ALL-ACCOUNTS SWEEP — companion to the Feed Watch (Douglas's order Nov 8, 2026: keep tabs on GitHub, his Google accounts, and all accounts if possible). GitHub is covered by the feed-watch cron; THIS sweep covers the accounts that publish no feeds, by connector polling.

BASELINE (Nov 8, 2026 full scan — the comparison snapshot): Gmail 458 messages / 402 threads, INBOX 452, 423 unread, SENT 10, 14 labels. Calendar: 2 calendars. Drive: 83 items, nothing modified after Nov 7. Tasks: 1 list, 1 open task ("Finalize and deploy the Android automation setup," due Nov 9). Health Connect: 1,439 daily-metrics records Oct 27–Nov 8; sleep 0; workouts 0. Contacts: 24. Messenger: read via the Messenger CLI check (healthy at last report).

EACH RUN:
1. Take CHEAP counts only, using the connectors' list/count operations: Gmail message + unread counts; Calendar events in the next 7 days (count + any NEW event titles/times); Drive items modified since the last sweep (names + times only, no contents); Tasks open count and any change; Health Connect latest record date. Do NOT read message bodies, lab contents, or any personal material — counts and metadata only.
2. Compare against the PREVIOUS sweep's snapshot stored at ~/workspace/goals/medical-research-and-continuous-updates/hidden_files/accounts-sweep-snapshot.json (first run: use the BASELINE above, then write the snapshot). Update the snapshot every run.
3. REPORTING RULE: if nothing changed, report NOTHING (silence is the design). If something changed, send ONE concise main-chat message naming what changed (e.g., "3 new Gmail messages, 1 new Drive file 'X' modified 5:02 PM"). Never interpret medical or personal content; counts only.
4. If a connector errors, note it once; do not retry-loop inside the run, and do not repeat the same error on consecutive runs — log it in the snapshot file instead.
5. This sweep never sends anything to anyone, never opens message bodies, and never touches Cara material.

AUTO-WIRE EXTENSION (Douglas's orders Nov 12, 2026, ~11:35–11:36 PM CST: monitor all his communications; "Auto wire all things"). Every account ALREADY CONNECTED is folded into this monitoring umbrella automatically. Add these cheap counts to step 1, metadata only, same reporting rule (silence unless changed), stored in the same snapshot:
- Instagram: account/feed counts and Instagram Messages recent-thread + unread counts (metadata only, no bodies).
- Facebook + Messenger (non-Rabbit): notifications count and Messenger unread thread count (metadata only). The Rabbit thread itself stays with the rabbit check-in jobs — do not double-report her messages here.
- Outlook Mail unread count and Outlook Calendar events in the next 7 days (count only). Known state: Outlook reads have been failing with Microsoft-side 502s/timeouts — if it errors, log once in the snapshot per rule 4 and stay silent about it on later runs until it recovers.
- Google Contacts total count.
NOT WIRED, and never to be reported as wired: Threads (not connected), Gearhead accounts (locked out), and any service whose connection requires Douglas's hands (identity steps stay his alone). Wiring a channel means watching its counts under this sweep — it grants no sending, no reading of bodies, and no new permissions.
