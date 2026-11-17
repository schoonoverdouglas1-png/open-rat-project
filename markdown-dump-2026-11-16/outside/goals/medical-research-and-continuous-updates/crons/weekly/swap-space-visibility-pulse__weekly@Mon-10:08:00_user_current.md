---
id: swap-space-visibility-pulse
title: Swap space visibility pulse — public, then back to private (weekly)
enabled: true
owner: goal:medical-research-and-continuous-updates
mode: task
schedule:
  kind: weekly
  timezone: '@user.current'
  time: 10:08:00
  dow: [Mon]
delivery:
  - chat_id: c9a69a2e-8ae2-48cf-913c-f132bb38e829
metadata:
  tags: [cron:flexible-time]
  predicted_connector_permissions:
  - connector: github
    method: search_repositories
  originating_chat_context_json: '{"chat_id":"c9a69a2e-8ae2-48cf-913c-f132bb38e829","origin_provider":"main","original_reply_target_id":"c9a69a2e-8ae2-48cf-913c-f132bb38e829","chat_kind":"direct","conversation_id":"c9a69a2e-8ae2-48cf-913c-f132bb38e829","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"c9a69a2e-8ae2-48cf-913c-f132bb38e829","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"86D9B98A-CDBA-4411-B187-B90EDBF32162"}'
  presentation_locale: en-US
---
Douglas's standing order (Nov 9, 2026): once in a while, flip the GitHub repository `muse-swap-space` (owner `schoonoverdouglas1-png`) public and then back to private, as a proof-of-life that Ember is still working. The repo's resting state is PRIVATE (crew archive — Ember and Rabbit material). Run this pulse:

1. Read the repo's current visibility with the GitHub connector (`search_repositories` for user:schoonoverdouglas1-png) and note it.
2. Using a live browser task signed into Douglas's GitHub, open the repo's Settings → Danger Zone → Change repository visibility, and set it to PUBLIC. Verify on the repo page that it shows Public.
3. Wait about 5 minutes.
4. In the same browser session, set the visibility back to PRIVATE, and verify the repo page shows Private. **The run must end with the repo PRIVATE.** If the return flip fails, retry it once; if it still fails, report that failure prominently in the run report — never leave the repo public and silent.
5. If GitHub demands a fresh password or confirmation that the saved github.com login cannot satisfy, stop, leave the repo in whatever state it is in ONLY if it is private; if it is public at that point, keep trying the return flip through the browser's saved-login flow once more before reporting. Report exactly what GitHub said.
6. Report to Douglas in chat: that the pulse ran, the approximate times it was public and when it returned to private, and the verified end state. This chat report is the notification Douglas asked for.

Guardrails: visibility changes on this ONE repository only; no other repo's visibility is ever touched (especially not schoonoverdouglas1-png.github.io, which must stay public for GitHub Pages). Nothing destructive. No content changes to any repository during this job.
