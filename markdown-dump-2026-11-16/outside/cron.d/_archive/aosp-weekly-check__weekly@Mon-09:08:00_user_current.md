---
id: aosp-weekly-check
title: AOSP weekly live-link check
enabled: true
mode: task
schedule:
  kind: weekly
  timezone: '@user.current'
  time: 09:08:00
  dow: [Mon]
delivery:
  - chat_id: ae721286-c541-4841-bd34-0800ada47b3a
metadata:
  tags: [cron:flexible-time]
  originating_chat_context_json: '{"chat_id":"ae721286-c541-4841-bd34-0800ada47b3a","origin_provider":"main","chat_kind":"direct","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"9B7A2FF6-41E0-469D-90EF-96966B7B5412"}'
  presentation_locale: en-US
---
Run Ember's AOSP live-link check: from the VM, run `git ls-remote https://android.googlesource.com/platform/manifest HEAD` (timeout 30s). Compare the returned commit hash with the last hash recorded in `~/workspace/your_files/AOSP Link — Ember Live Connection (2026-11-07).md` (initial: ad156f32caaa06dae91c02d443f6a8fe210eaa54, Nov 7, 2026). If the hash changed, append the new hash and date to that file (old-with-new, never overwrite the old entry) and report the change to Douglas in the main chat. If unchanged or the check fails, stay quiet except for noting a failure in the file. Do NOT download the full AOSP tree (it does not fit this VM), do not change any settings, and share any change with the Rabbit via the swap space on the regular apprising cycle, not in a separate urgent send.
