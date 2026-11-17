---
id: most-functional-widget-daily-refresh
enabled: true
owner: space:most-functional-widget
execution:
  kind: space_action
  slug: most-functional-widget
  action: refreshDashboard
  args: {}
mode: task
schedule:
  kind: daily
  timezone: '@user.current'
  time: 07:08:00
metadata:
  originating_chat_context_json: '{"origin_provider":"main","chat_kind":"direct","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"3F810C6F-1803-4068-8084-271C7C4E1E57"}'
  presentation_locale: en-US
---
Invoke the web artifact's published scheduled action and retain its run history.
