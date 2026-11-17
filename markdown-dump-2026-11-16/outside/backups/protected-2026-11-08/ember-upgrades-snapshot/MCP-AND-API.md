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

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
