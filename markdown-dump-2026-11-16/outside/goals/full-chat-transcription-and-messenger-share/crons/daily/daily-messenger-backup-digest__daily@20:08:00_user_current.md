---
id: daily-messenger-backup-digest
title: Daily Messenger backup digest
enabled: true
owner: goal:full-chat-transcription-and-messenger-share
mode: task
schedule:
  kind: daily
  timezone: '@user.current'
  time: 20:08:00
delivery:
  - chat_id: ae721286-c541-4841-bd34-0800ada47b3a
metadata:
  tags: [cron:flexible-time]
  originating_chat_context_json: '{"chat_id":"9517f9d6-e437-49c2-8b77-0d6b6b6d2263","origin_provider":"main","original_reply_target_id":"9517f9d6-e437-49c2-8b77-0d6b6b6d2263","chat_kind":"direct","conversation_id":"9517f9d6-e437-49c2-8b77-0d6b6b6d2263","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"9517f9d6-e437-49c2-8b77-0d6b6b6d2263","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"1386B774-3BEB-4498-8D5C-8F224C7673AA"}'
  presentation_locale: en-US
---
Daily backup digest for Douglas's Messenger self-chat, prepared in the main chat — do NOT send anything to Messenger yourself.

Each run:
1. Look at what new works were built or finished in the Muse workspace today (America/Chicago date), using file timestamps with the Chicago timezone conversion, and the day's conversation turns. List only Douglas's own works (books, tables, theses, research pages, bundles, setup files). Exclude private imports, Cara/Kira (CJ) materials, lab PDFs, and any identifier values (phone, email, date of birth, record number).
2. If nothing new was built today, send a short main-chat note saying so and stop — do not draft an empty digest.
3. If there is new work, deliver in the main chat an exact, ready-to-send Messenger self-chat digest text: dated, chronological, one line per work with its title and its workspace link or public link where one exists, plus a line saying it is a backup copy and the master stays in Drive and Muse. Tell Douglas he can tap to confirm and the message will then be sent to his self-chat only.
4. Never send to Messenger, Facebook, or any other person from this run. Never claim a message was sent. Never include private import content or identifiers in the draft.
