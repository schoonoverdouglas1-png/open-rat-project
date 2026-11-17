---
id: google-password-reminder
title: Google password reminder
enabled: true
owner: goal:google-password-recovery-reminder
mode: task
schedule:
  kind: interval
  timezone: America/Chicago
  at: 2026-11-06T11:38:07
  every: 72h
delivery:
  - chat_id: ae721286-c541-4841-bd34-0800ada47b3a
metadata:
  tags: [cron:automatic-interval-anchor]
  originating_chat_context_json: '{"chat_id":"ae721286-c541-4841-bd34-0800ada47b3a","origin_provider":"main","chat_kind":"direct","event_kind":"message","require_mention":false,"device_id":"70ddccc65ff6a994"}'
  presentation_locale: en-US
---
Remind Douglas in the main chat, in a short message: he asked to be reminded every three days to track down his Google password so he can get into his Google accounts, and once he is in he plans to share everything. This is the Google sign-in problem blocking the Google Keep note and the Google Photos scan (saved login rejected as wrong password on Nov 2, 2026). Do NOT ask for a password in chat, do NOT attempt a sign-in, do NOT start a password reset. The routes when he is ready are: replace the saved Google login through the secure entry flow, or take over the live browser and sign in himself. Ask only whether he has tracked the password down / gotten into those accounts yet, and whether he wants to try one of those routes now. If he confirms he is into his Google accounts, the reminder's job is done — report that and stop; do not keep reminding. Keep the message short, within his proactive window, and do not mention any other person's accounts or materials.
