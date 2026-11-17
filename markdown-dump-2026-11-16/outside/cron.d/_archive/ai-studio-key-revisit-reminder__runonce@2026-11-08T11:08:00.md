---
id: ai-studio-key-revisit-reminder
title: Revisit the AI Studio key
enabled: true
owner: goal:ai-studio-key-copy-revisit
mode: task
schedule:
  kind: runonce
  timezone: America/Chicago
  at: 2026-11-08T11:08:00
delivery:
  - chat_id: ae721286-c541-4841-bd34-0800ada47b3a
metadata:
  tags: [cron:flexible-time]
  originating_chat_context_json: '{"chat_id":"ae721286-c541-4841-bd34-0800ada47b3a","origin_provider":"main","chat_kind":"direct","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"3D70070A-5327-4F9A-A22A-21A4998DDEF5"}'
  presentation_locale: en-US
---
Reminder for Douglas, set at his request on Nov 8, 2026 (~2:10 AM CST): revisit the Google AI Studio API key copy. He was having a hard time getting the key copied, and separately planned to open the AI Studio API keys page externally himself and copy the key over from there.

State to resume from (verify before acting — he may have completed it himself via the external page):
- Douglas is signed in to AI Studio as schoonoverdouglas1@gmail.com.
- Two free-tier keys exist in the Default Gemini Project: "Gemini API Key" (masked …4ZVA — the one he chose to use) and "Default Gemini API Key" (masked …tedQ).
- The key's value must go ONLY into the Secure Vault capture page for the google-gemini connector (issued Nov 8; re-issue a fresh one if needed). Never ask him to paste a key into chat, never receive or repeat a key value.
- Once the key is submitted to secure storage: author the custom.google-gemini connector doc (host generativelanguage.googleapis.com, key as x-goog-api-key header), run ONE tiny free test call, and record the real free-tier limits observed in the Borrowing Ledger.
- Tracked item: "AI Studio key copy — revisit" (goal_48d9c3e0dfbf). If he confirms the key is in, close that item; if he wants to keep parking it, note that and do not nag.

Deliver the reminder in the main chat, briefly, with the AI Studio API keys page link (https://aistudio.google.com/api-keys) so he can open it externally.
