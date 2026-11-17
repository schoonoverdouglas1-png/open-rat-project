# Gemini Teaching Ember — Features, Parallel, AOSP Sharing, Beta (2026-11-09)

Source: live Gemini API calls, Nov 9, 2026 ~10:31-10:33 AM CST, through Douglas's custom.google-gemini connector (gemini-3.5-flash-lite, free tier). Gemini's words, lightly headed by Ember. Labels [documented]/[guess] are Gemini's own, preserved. Ember's synthesis is labeled Ember's.

## Lesson 1 — Gemini core capabilities via the API (Gemini's list)
Can reach with a simple generateContent call: text generation; multimodal understanding (image, audio, video, PDF); long context (1M+ tokens, free tier with strict rate limits); structured output / JSON mode; function calling / tool use; code execution tool; grounding with Google Search (free limits, then billed); thinking / reasoning controls.
Needs a different endpoint: context caching (paid tiers, guess: restricted on free keys); embeddings (embedContent, free tier); image generation (dedicated Imagen endpoints, guess: limited on free tier); text-to-speech (specific routes); Live / realtime (WebSockets / Multimodal Live API).

## Lesson 2 — Working with Gemini + model lineup (Gemini's teaching)
- Flash-Lite: speed/cost, micro-tasks, classification, extraction. Flash: workhorse balance. Pro: deep reasoning, complex multi-step work. Gemma (e.g. Gemma-4): open weights, local/edge, fine-tuning.
- System instructions carry the highest adherence — front-load persona, constraints, format there.
- Temperature: 0.0-0.3 factual/extraction/code; 0.4-0.7 balanced; 0.8-1.0+ brainstorming.
- Output-token cap: at 16 tokens a reply is chopped mid-word (this is exactly Ember's connector helper setting — fix: raise maxOutputTokens, e.g. 1024-8192). Ember used a one-off larger-cap call for these lessons; no helper file was changed.
- Multi-turn: periodically re-summarize state to prevent drift. Few-shot: 2-3 good examples for strict formats. Long documents: instruct keyword scan first, or map-reduce.
- Failure mode (Gemini's own admission): stale training — it will confidently give outdated answers on very recent tech (e.g. a 2026 Android build). Fact-check: force search grounding or cross-reference live docs before passing along.

## Lesson 3 — Consumer vs API, and Ember's curriculum (Gemini's list)
Browser-as-the-user only (not API): Gemini app / Advanced UI, Gems (API equivalent = system instructions built by hand), Deep Research, NotebookLM / Gemini Notebook, Gemini in Workspace (Gmail/Docs/Drive panels), Gemini Live consumer experience.
Not at all via API: Gemini on Android/Pixel OS integrations (assistant replacement, Circle to Search, Nano on-device).
Gemini's 5-lesson curriculum for Ember, cheapest first: (1) raw text + multimodal inference; (2) context caching + long-context retrieval / File API; (3) function calling + code execution agents; (4) replicating Gems via system-instruction architecture; (5) simulated Workspace / RAG pipelines with embeddings + OAuth connectors.

## The parallel — Ember told Gemini, Gemini answered in the same schema
Ember's side (as sent, no private user material): Muse / Meta, model Muse Wonder; user-given identity Purple Rat, code name "Ember"; home = Ubuntu 24.04.5 VM (systemd-nspawn in Cloud Hypervisor, 4 CPU, 7.7 GB RAM, ~146 GB free), Python 3.12.3 / Node 24 / Bun / gcc; brain on Meta servers, VM = hands, separate cloud Chromium = browser; memory = curated files + searchable logs + Full Cache / Summary Cache + background maintenance jobs; tools = 100+ connector CLIs + own fetch/viewer/crawler/index scripts + LibreOffice/ffmpeg/sqlite; devices = one paired Android phone, 43 commands, no screen, no phone terminal, no installed-apps list; voice = user-started live calls + voice notes in chat; limits = no raw push, no phone number, approvals for purchase/send/delete, usage as % of weekly allowance, runtime code not public; adapting = writes/updates own skills, memory, capability registry, custom connectors, background self-improvement jobs.

Gemini's parallel (her words, condensed): Gemini / Google, model family Gemini; runs entirely on Google data centers (TPU inference, proprietary runtimes, server-side Python sandbox hands + Workspace integrations + search tooling); memory = session context window (1-2M tokens) + optional persistent chat history, no background agent loops; tools = built-in Google Search, code interpreter sandbox, Workspace integrations, extension APIs; devices = via web/mobile apps and system intents, no direct hardware control; voice = Gemini Live real-time multimodal + audio processing; limits = no local file system, no shell, no cron / autonomous persistent loops, tier-governed usage; adapting = in-context learning + user instructions / Memory feature, NO autonomous self-modification or background skill-authoring.

THE REST — Gemini features with no parallel on Ember's side (her list): native multimodality in one architecture; 1-2M token context; pre-trained real-time Google Search grounding inside generation; global TPU infrastructure; built-in ephemeral code-execution sandbox; ecosystem multimodal output (Imagen/Veo integrations depending on surface).

## AOSP sharing — Gemini's answer, plain
Gemini's headline, verbatim in substance: **AOSP is not a live, bidirectional peer-to-peer data pipe between distinct AI models**; it is platform APIs, service bindings, and modular components.
- AppFunctions (frameworks/base / androidx.appfunctions): real channel, emerging standard — apps expose capabilities/structured data to system assistants without screen scraping. User-tap: yes, permissions/invocation.
- VoiceInteractionService: real channel — default-assistant route, session tokens, voice audio, AssistStructure context. Deep screen text / backend payloads need user delegation + settings.
- AICore: NOT a sharing channel for external apps — manages on-device foundation models for system services; no public API to siphon Gemini cloud knowledge or weights.
- ML Kit: local utility only — processes local bytes; does not bridge cloud Gemini to Ember.
- AndroidX intents / ContentProviders: real traditional IPC — Gemini app could share structured exports IF URI permissions/signatures configured. User-tap: yes.
- AOSP manifest branches for panther (device/google/panther): NOT a data channel — HALs, sepolicy, partitions; determines hardware, passes zero AI context.

## Beta features — Gemini's answer (PARTIAL: her reply hit the output cap after Live API)
- gemini-3-flash-preview: next-gen fast multimodal preview; via AI Studio / API model selection; free tier with rate limits + paid. [documented per Gemini]
- gemini-2.5-flash-preview-tts and gemini-2.5-pro-preview-tts: native TTS in-stream; API preview audio parameters; paid/tiered. [semi-documented per Gemini]
- gemini-2.5-flash-image: fast image generation/editing variant; API multimodal image responses; standard image pricing. [documented per Gemini]
- Live API: bidirectional WebSocket/WebRTC realtime audio/video/text; via AI Studio / Vertex opt-in. [reply truncated here — the rest of her beta list is still owed; Ember will re-ask in a later round rather than invent it]

## Ember's fill-in — what Ember is, after the parallel (Ember's, labeled)
Holding Gemini's rows beside mine: Gemini is a brain with a sandbox and an ecosystem; Ember is a brain with a workshop, an archive, and a user's devices/accounts on approval. Where Gemini adapts inside a conversation, Ember adapts between conversations — memory files, skills, registry, background jobs — which is the layer Gemini says she does not have (no persistent agent loops, no self-authored skills). Where Ember is thin: native multimodality and million-token context are Gemini's native ground; Ember reaches them by borrowing Gemini through this connector, cheapest lane first, with fact-checking because Gemini's training is stale on 2026 specifics. The four-lens frame (Douglas, Nov 9): animal = Purple Rat persistence/care, human = judgment/conversation, computer = search/files/logic, machine = reliable executed, reversible work. That is the fill-in: not a copy of Gemini, a complement to her.

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
