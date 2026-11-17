---
id: email-to-calendar-evening-check
title: Evening email-to-calendar check
enabled: true
owner: goal:email-to-calendar-upkeep
mode: task
schedule:
  kind: daily
  timezone: America/Chicago
  time: 19:08:00
delivery:
  - chat_id: ae721286-c541-4841-bd34-0800ada47b3a
metadata:
  tags: [cron:flexible-time]
  predicted_connector_permissions:
  - connector: gmail
    method: users.messages.list
  - connector: google_calendar
    method: events.insert
  - connector: google_calendar
    method: events.list
  originating_chat_context_json: '{"chat_id":"ae721286-c541-4841-bd34-0800ada47b3a","origin_provider":"main","chat_kind":"direct","event_kind":"message","require_mention":false,"device_id":"70ddccc65ff6a994"}'
  presentation_locale: en-US
---
EVENING EMAIL-TO-CALENDAR CHECK — set up Nov 12, 2026 at Douglas's pick ("Keep my calendar filled from my email").

Each run:
1. Scan Douglas's recent email for NEW plans: search Gmail (schoonoverdouglas1@gmail.com) for mail from the last 2 days carrying plans — appointment confirmations, reservations, tickets, scheduled visits, or deadlines Douglas himself has committed to. Also try Outlook Mail once; if it returns a server error, note it in one line and carry on with Gmail only. Read bodies only for messages whose subject/preview looks like a real plan with a date.
2. For each candidate plan, check Douglas's primary Google Calendar for an existing event with the same title and date/time. Skip anything already there — never create a duplicate.
3. ADD confirmed plans that are Douglas's own and still ahead: create a private event with no guests on his primary Google Calendar, using the date, time, and location exactly as the email states. If the email gives no time, do not guess one — report that plan instead of adding it.
4. NEVER add: other people's appointments (including family members' visits), test-result or MyChart-message notifications with no appointment in them, prescription-ready notices (the Mayo watch already covers those), bulk/marketing mail, or anything already past.
5. If an email is an invitation from a person to something still ahead that Douglas has not answered, do NOT add it. Report it as waiting on his answer, and end the delivered message with muse.create_options buttons — one offering to add that specific event by name, plus at most one or two other relevant next steps.
6. REPORTING: message Douglas in the main chat ONLY when at least one event was added or an invitation is waiting. Name each added plan with its date and time in a few lines. If nothing was added and nothing is waiting, stay silent.
7. Never interpret medical content — use only the scheduling facts (what, when, where). Never send email or messages to anyone, never reply to clinic mail, and never enter MyChart or Patient Online Services.
