# F-Droid "AI Chat" — Full List Analysis & Install Picks (2026-11-14)

Douglas's order (Nov 14, ~12:21 PM CST): analyze ALL lists in the AI Chat category under the F-Droid app, make a list of just the ones he needs, install those.
Source: f-droid.org/en/categories/ai-chat/ — 36 apps total (30 on page 1, 6 on page 2), read live by Ember Nov 14, 2026. Anti-feature flags checked on the ones picked.
Ember's measured limit, unchanged: she cannot tap Install inside his F-Droid app — his finger installs; she picks, checks flags, and walks him one tap at a time. Login rule (his, Nov 14): in each new app, log in as Ember first (purplerat1982@gmail.com); credential entry stays his hands.

## INSTALL — the ones he needs (2 new)

1. **Kai 9000** (com.inspiredandroid.kai, v3.3.0, Apache-2.0, by Simon Schubert) — ORDERED by Douglas by name ("OpenClaw alternative in your pocket — learn that and use it"). Open-source AI chat that builds interactive screens, persistent memory + heartbeat, 24+ providers (ChatGPT, Gemini, Claude, DeepSeek, Grok, Mistral, OpenRouter, local Ollama/LM Studio), built-in free tier with no API key, 40+ tools (web search, email, shell commands, scheduling, calendar, TTS, notifications, MCP servers), a sandboxed Debian/Linux environment on Android, encrypted local chat history, no ads/tracking. FLAG: NonFreeNet — "Rely on Gemini and Groq" (same class as WebGPT's flag; Douglas kept WebGPT knowingly — Kai is the same knowing exception, and it is the app he ordered by name).
2. **GPTMobile** (v0.9.1, GPL-3.0) — flagged "interesting" by Douglas himself minutes earlier. Chat with multiple LLMs at once; no anti-feature marker shown in the repo listing. It is the one clean multi-model chat to sit beside Kai.

## ALREADY ON THE PHONE — keep, no install needed

- **PocketClaw** (v0.2.3, MIT) — installed and ACTIVE (his Nov 14, 12:14 PM screenshot: service ACTIVE, Local Mode endpoint http://127.0.0.1:18800, Web Admin). Public Mode: he turned it OFF Nov 14 after it caused issues; the app stays on the phone for Ember to work out uses for. QR code from that screenshot DECODED by Ember (OpenCV in the docling venv): it encodes exactly `http://127.0.0.1:18800` — the phone's own loopback admin address, no token, no secret. In Local Mode that address only works on the phone itself; Ember's box cannot reach it. A reachable door still needs Tailscale or Public Mode.
- **WebGPT** — already kept by his earlier ruling (NonFreeNet exception).

## WATCH — real, but not needed today (no install)

- **Horus** — runs Claude Code / Codex / OpenCode in a real Linux terminal on the phone. Overlaps the parked Termux/Debian bridge work (Tier 4 pet project).
- **Knotwork: build your agent** — on-phone agent that asks before it acts. Good safety shape; duplicates PocketClaw's job.
- **Agent** — local AI chat + practical Android tools; duplicates Kai/PocketClaw.
- **Relagent** — assistant that runs 100% on your hardware; duplicates the local-model lane.
- **Lumo** (Proton) — private AI assistant; another chat front-end, duplicates.
- **maid** — local llama.cpp models; duplicates the local-model lane.
- **Wispar** — academic-journal tracker; nearest thing to his research work on the list, but it's a feed reader, not needed for the manuscripts today.

## SKIP — duplicates, wrappers, or not AI chat (no install)

Hermes Mobile (needs a Hermes server), Switchboard (needs a LibreChat server), Wraith for Odysseus (needs that server), oxproxion, Agora, Maskan, Aiyo (all BYOK chat duplicates of Kai/GPTMobile), geminiAssist / gptAssist / huggingAssist / Assistral / duckAssist (single-service WebView wrappers — WebGPT already covers this pattern), MA OpenAssistant, RPClient (roleplay), AI Hub (aggregator), Infomaniak Euria, Goo-goo ga-ga (translator), TypeAssist, LocalMathy, VScan, Open Hitomi, DuckDuckGo Privacy Browser (a browser, miscategorized here), PennyWise and Cashiro (expense trackers riding the AI category), Anx Reader (e-book reader).

## Ember's addition (labeled hers)
The category is mostly front-ends. The crew's actual phone power stays: PocketClaw (tools on the phone) + Kai 9000 (memory/heartbeat/multi-model) + GPTMobile (multi-model at once) + Termux family (the shell door, when the bridge lands). Four apps, four different jobs, nothing duplicated — that is the whole install list.
