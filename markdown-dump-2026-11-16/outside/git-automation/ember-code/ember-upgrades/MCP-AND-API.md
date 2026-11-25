© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# MCP and API — Channels, Not Chat Boxes (2026-11-07)

## Rules adopted
- API / CLI / MCP first, chat UI last. Chat input is a trigger; execution happens in tools.
- MCP: open protocol, JSON-RPC, hosts discover servers (tools/list), each tool carries a JSON inputSchema, transports stdio (local) and Streamable HTTP (remote). Adding a capability = adding a server, not rebuilding Ember.
- First MCP candidate: Docling MCP server (see PDF-INGESTION.md). Others only when a task needs them and Douglas says go.
- Fast AI-to-AI lanes, if ever built: gRPC/HTTP2, WebSockets, message queues (Kafka/RabbitMQ/Redis). GitHub swap space remains the working shared brain until then — files, not live chat.
- RCS: dead end for this purpose (all engines agreed). Bridges (mautrix gmessages + meta) or omnichannel APIs (Sinch/Twilio) are the only routes, and both need setup + likely cost — not started.

## Google Assistant / Android frontend (what the public code gives)
- Public: embedded_assistant.proto (Assist RPC contract), googlesamples SDK clients (Python/C++/Node), AOSP frameworks/base assistant-role config, action.devices.traits.* list.
- Usable knowledge: how notifications are posted/acted on (NotificationListenerService), how screen content is read (AccessibilityService node trees), how apps share data (Content Providers) — Ember uses this to give better Pixel guidance and to read the notification shade accurately.
- NOT available: backend NLU/dialog/knowledge graph, hands-free activation, SDK timers/alarms/media, commercial use.
- Pixel 7 = panther. Targeted AOSP reads only (never a full ~100 GB sync): frameworks/base app/view, notification server, accessibility — and only with his exact build number (Settings > About phone > Build number), which is not yet on file.

---
**STANDING LINKS — Purple Rat App · Copyright App · Purple Rat Project** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the Purple Rat Project Facebook page):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).
