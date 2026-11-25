© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Personal AI Assistant on the Most Open-Source Stack Possible — US Individual, 2026

## Summary

**A fully self-hosted, big-tech-independent personal assistant is practical in 2026 — but it is a build-it-yourself stack, not a product you can subscribe to, and no true donation-funded hosted equivalent of a hosted assistant (e.g. Meta Muse, ChatGPT, Claude) was found.**

The working recipe that recurs across sources is:

> **Local model runtime** (Ollama / llama.cpp, or vLLM for a server) **+ an open front-end/agent layer** (LibreChat, Open WebUI, AnythingLLM, Jan, or OpenClaw for an always-on agent) **+ a 14–32B open-weight model** (Qwen3, Mistral Small, OLMo, gpt-oss-20b) **+ faster-whisper for hearing and Piper/Kokoro for speaking + independent email** (self-hosted Stalwart / Mail-in-a-Box / mailcow, or a paid privacy provider at $3–6/mo) **+ Nextcloud (CalDAV/CardDAV) for calendar/contacts**, all wired together with MCP / OpenAPI tools.

Three honest trade-offs frame everything below:

1. **Openness vs. capability vs. independence are three different axes.** The *most open* model (Ai2's OLMo — weights, training data, code, all Apache 2.0, from a US nonprofit) is not the *most capable*. The most capable downloadable models come from companies the user may want independence from: Qwen is Alibaba, DeepSeek is a Chinese commercial lab, Llama is Meta itself, Gemma is Google, gpt-oss is OpenAI. Mistral (French, independent of US big tech) and OLMo are the cleanest “not a US big-tech company” picks; Qwen/DeepSeek are the strongest Apache/MIT-licensed picks if the concern is specifically US big tech.
2. **Locally runnable ≠ frontier.** The largest open-weight models now score within ~3–9 points of frontier hosted models on composite indexes — but those models (GLM, Kimi, DeepSeek 671B-class) need data-centre hardware. What fits in a home (8–32B at 4-bit) is a good daily assistant for chat, summarising, writing, RAG and light coding, and is *materially* weaker on long, multi-step agentic work and tool-use reliability.
3. **“Free” means you pay in hardware, electricity, rent, or your own maintenance time.** Realistic cash costs: **$0 marginal** on a laptop you already own; **~$5–25/mo** for a CPU VPS for mail/front-end; **~$20–650/mo** for a rented GPU depending entirely on hours used; **~$1,000–3,500 one-off** for a home machine that runs a 24–32B model well.

**Confidence:** High for licences, software features, mail deliverability rules and RunPod list prices (primary/official pages, several *verified live* 2026-11-15/16). Medium for model-capability comparisons (benchmark indexes, vendor cards). Low/volatile for GPU street prices and EU/US VPS prices in late 2026 (multiple sources report sharp 2026 price rises) — those figures are labelled *estimate* throughout.

---

## Findings

### 1. Open-weight / open-source language models — licensing, hardware, capability vs frontier

**Terminology that matters (verified, multiple sources):** “Open-weight” = downloadable weights, training data/recipe withheld. “Open-source AI” in the strict OSI sense = weights + code + sufficient training-data information under OSI terms. In the surveys consulted, **only OLMo (and older Pythia/T5) clearly pass the strict test**; Qwen3 and DeepSeek-R1 are open *weights* under genuine open-source licences (Apache 2.0 / MIT), while Llama and Gemma 3 use custom vendor licences that are *not* OSI open source.
Sources: https://openresource.dev/guide/licensing/non-code-licenses/ (index) ; https://www.ownershipindex.ai/library/models/ai2-olmo/ (index)

#### Model-by-model

| Model family | Licence (verified from cards/guides) | Sizes practical at home | Hardware at 4-bit (Q4) | Independence note |
|---|---|---|---|---|
| **Qwen3 / 3.5 / 3.6 (Alibaba)** | **Apache 2.0** — commercial use, modification, redistribution, no user cap | Dense 0.6B–32B; MoE 30B-A3B (3B active) | 8B ≈5.2 GB download, 8–10 GB RAM/VRAM; 14B ≈9.3 GB, 12–16 GB; 30B-A3B 18.6 GB file, **24 GB floor**; 32B ≈20 GB | Strongest permissive all-rounder, but Alibaba is itself a big-tech company (China) |
| **Mistral Small / Ministral (Mistral AI)** | **Apache 2.0** for Small 3.x/4 (24B) and small models; larger Mistral models use other/custom licences — check per model | 7B, 24B | Mistral Small 24B: 14 GB Q4, 32K context — “practical sweet spot” at 24 GB tier | French company, independent of US big tech; good European-language strength per sources |
| **OLMo 2 / OLMo 3 (Ai2)** | **Apache 2.0**, *fully open*: weights + Dolma training data (ODC-BY) + training code + checkpoints + evals | 7B, 13B/32B | Same sizing rules as other dense models: 7B in ~16 GB, 32B needs 24–48 GB class machine | **Cleanest provenance in the field:** US nonprofit (see §5). OLMo 2 32B was claimed by Ai2 as first fully-open model to beat GPT-3.5-Turbo / GPT-4o-mini on academic suites — i.e. capable, not frontier |
| **DeepSeek-R1 (DeepSeek)** | **MIT** for R1 code + weights, distillation explicitly allowed; **V3 models are under a separate Model License** — do not conflate | Full R1 is 671B total / 37B active — server only. **Distills 1.5B–70B** are the home option | Distill-Qwen-32B ≈65 GB at BF16, far less at Q4; 7B/8B distills fit 16 GB class machines | Qwen-based distills inherit Apache 2.0 bases; **Llama-based distills (8B, 70B) inherit Meta's Llama licence** |
| **Llama 4 / 3.3 (Meta)** | **Llama Community License — NOT open source.** Free <700M monthly users; separate licence above that; acceptable-use policy incorporated; Llama 4 multimodal grant excludes EU residents/companies | Llama 3.3 70B and smaller 3.x are home-runnable; **Llama 4 Scout is not a normal home model** | Scout: 109B total, ~55–67 GB at Q4, needs **~80 GB+ memory** (single H100 at int4 per Meta card, or 96–128 GB Mac / GPU+RAM offload); Maverick ~245 GB Q4, 256 GB+ workstation | Paradox for this mission: using Llama *is* depending on Meta's licence, even though you run it yourself |
| **Gemma 3 / Gemma 4 (Google)** | Gemma 3: **custom Gemma Terms of Use** (prohibited-use policy passed downstream, Google may restrict use). Multiple 2026 sources report **Gemma 4 moved to Apache 2.0** — verify the exact card before relying on it (see Could not verify) | 4B, 12B, 27B (multimodal) | Gemma 3 27B ≈14 GB at INT4, ~55 GB FP16; fits single 80 GB GPU easily, 32 GB Mac comfortably at Q4 | Google-origin, even if locally run |
| **gpt-oss (OpenAI)** | **Apache 2.0** (+ OpenAI usage policy) | 20b, 120b (MoE) | **20b: runs within 16 GB**; **120b: fits a single 80 GB GPU** (H100 example), ~65 GB in native MXFP4 | Official OpenAI help page, index: https://help.openai.com/en/articles/11870455-openai-open-weight-models-gpt-oss |

Sources for table: Qwen — https://atomic.chat/models/qwen3-30b-a3b and https://llmshed.com/models/qwen/ (index); Mistral/Gemma — https://www.aifoss.dev/blog/open-source-llm-licensing-guide-2026/ and https://intelligibberish.com/articles/2026-09-27-best-local-llm-for-everyday-tasks/ (index); DeepSeek — https://www.llm.build/models/deepseek and https://deepseekai.guide/models/deepseek-r1-distill/ (index); Llama 4 — https://www.guidetoartificialintelligence.com/en/learn/run-llama-4-scout-home-licence-allow/ and https://localaimaster.com/blog/llama-4-local-setup-guide (index).

#### Hardware sizing rule (verified, convergent sources)

Memory ≈ quantized file size + KV-cache for your context. At Q4_K_M (~0.5–0.6 GB per billion parameters):

- **8 GB RAM:** 3–4B models only, tight.
- **16 GB RAM/VRAM:** 7–8B at Q4 comfortably — the mainstream starting point (8B Q4_K_M file ≈4.9 GB, ~6–7 GB VRAM with 8K context).
- **24–32 GB:** 14B comfortably, 24–32B / 30B-A3B MoE at Q4 — the best home-assistant tier.
- **48–64 GB (e.g. 64 GB Mac, dual/large GPU):** 70B-class at Q4 (~43 GB for Llama 3.3 70B).
- **80 GB+:** gpt-oss-120b, Llama 4 Scout, 70B at higher precision.

Apple Silicon unified memory counts as both RAM and VRAM, which is why 32–64 GB Macs punch above their weight for large models (at lower bandwidth/speed than a big NVIDIA card).
Sources: https://blog.michaelsam94.com/running-local-llms-on-device/ ; https://www.hostinger.com/au/tutorials/ollama-vs-llama-cpp/ ; https://quantacloud.net/guides/ollama-gpu-requirements (all index)

#### Realistic capability vs frontier hosted models

- **At the very top (server-class open weights):** Artificial Analysis Intelligence Index, July 2026 as reported: best open GLM-5.2 at 51 vs Claude Sonnet 5 at 53 and frontier Claude Fable 5 at 60. August 2026 reporting: Kimi K3 (open) 60 vs Claude Opus 5 63. *These models are hundreds of billions of parameters and are not personal-local models.* Sources: https://maketocreate.com/best-open-source-llm-in-2026-open-weights-worth-running/ ; https://www.runtheeval.com/open-source-vs-frontier-models-2026/ (index)
- **At home scale (the honest picture):** Expect a 24–32B local model to handle chat, drafting, summarisation, document Q&A, translation and routine coding well. Sources consistently flag the remaining gaps as: **long-horizon agentic tasks** (maintaining coherence over 50+ tool calls, multi-hour refactors — closed frontier ahead by ~10–15 points in one 2026 deep-dive), **tool-use / instruction-following reliability**, and polish/ecosystem. Quantization below Q4 degrades quality noticeably; Q4_K_M is the accepted sweet spot. Source: https://robert-i.backbone.ink/articles/local-llms-that-can-actually-replace-claude-code-in-2026-a-deep-dive-for-small-engineering-teams (index)
- **Bottom line:** *Estimate/judgement from the sources:* a home open model in 2026 replaces a hosted assistant for ~most everyday text work, not for the hardest reasoning/agentic work — and it never phones home, works offline, and has no per-token bill.

### 2. Open-source agent/assistant frameworks and front ends

These split into three layers — do not confuse them: **(a) inference engines** that run the model, **(b) chat front-ends**, **(c) always-on agents** that act, remember and message you.

#### (a) Inference engines

| Tool | Licence | What it provides |
|---|---|---|
| **Ollama** | MIT | Easiest local runner: `ollama run <model>`, model library, OpenAI-compatible API. Runner only — no chat memory/agent by itself. Now also offers optional paid cloud models ($20/mo Pro per one index source) — local use remains free/unlimited |
| **llama.cpp** | MIT | Foundational C/C++ GGUF engine underneath Ollama, LM Studio and most local tools; maximum control, CPU + GPU + Apple Metal |
| **vLLM** | Apache 2.0 | High-throughput serving (PagedAttention) for a GPU server / many users; the right engine if your assistant lives on a rented/home GPU box rather than a laptop |
| **LM Studio** | **Proprietary, free — NOT open source** | Polished desktop app (llama.cpp/MLX), local OpenAI-compatible server, MCP client, free for work since July 2025 per sources. Convenient, but fails a strict open-source requirement |

Sources: https://github.com/awesome-ai-tools/curated-local-ai/blob/HEAD/README.md ; https://www.stork.ai/best/self-hosted (index)

#### (b) Chat front-ends (all self-hostable, all work with local models)

| Tool | Licence | Chat | Voice | Memory | Tools / RAG | Email/calendar |
|---|---|---|---|---|---|---|
| **LibreChat** | **MIT** | Yes, multi-provider, multi-user | Via providers/config | Recent “Memory” feature; per-conversation/agent | Agents with multi-step tool calls, MCP servers, OpenAPI Actions, file search | Via MCP/OpenAPI tools you add — not built-in mail |
| **Open WebUI** | **Custom “Open WebUI License” — BSD-3 + branding clause, explicitly NOT OSI-approved** *(verified live)* | Yes, polished, multi-user, offline-capable | **Hands-free voice/video call**: STT local Whisper (+ others), TTS incl. local Transformers/WebAPI | **Persistent memory** across chats | Plugins (Filters/Actions/Pipes/Tools/Skills), MCP/MCPO/OpenAPI, local RAG (9 vector DBs), web search incl. self-hosted SearXNG, image gen via ComfyUI | Via MCP/OpenAPI tool servers you add |
| **AnythingLLM** | MIT | Desktop + Docker server | Limited (provider-dependent) | Per-workspace RAG + threads | `@agent` mode, built-in skills (web search/scrape/SQL), MCP, document chat is its core strength | Via agent skills/MCP you add |
| **Jan** | Open source — sources disagree Apache 2.0 vs AGPL-3.0 (see Could not verify) | Desktop, 100% offline mode, local OpenAI-compatible server | Not a core feature in sources consulted | Per-thread | Extensions/MCP added 2025; weakest autonomous-agent loop of this group | Via extensions |

Sources: comparison matrix https://github.com/david-2814/metis/blob/HEAD/docs/market-research/02-local-first-platforms.md (index, GitHub metadata verified by its author May 2026); Open WebUI features https://pypi.org/project/open-webui/0.10.2/ (index); Open WebUI licence **verified live** https://docs.openwebui.com/license/ — v0.6.6+ (19 Apr 2025) branding clause, ≤50 users may rebrand, otherwise enterprise licence; pre-0.6.5 code remains pure BSD-3; the docs themselves state “Open WebUI v0.6.6+ is not an OSI-approved ‘open source’ license.” For a single personal user the branding clause is practically irrelevant, but a strict open-source purist should prefer LibreChat.

#### (c) Always-on personal agent

**OpenClaw** — the closest open analogue to a hosted personal assistant in 2026:
- **MIT-licensed, local-first.** A single long-running Gateway on your machine/server; state, conversations and memory live as **plain Markdown/YAML files on your machine** (`MEMORY.md` long-term, daily `memory/YYYY-MM-DD.md` notes).
- **Channels:** WhatsApp, Telegram, Slack, Discord, Signal, iMessage and 20–29+ others (counts vary by source/date) — you talk to it in chat apps you already use, not a special web UI.
- **Acting:** skills (packaged `SKILL.md` capabilities, ClawHub registry), MCP servers, web search, browser/file/shell tools, and a **cron scheduler** for standing automations. That MCP/tool path is how it reaches **email and calendar**.
- **Model-agnostic:** hosted APIs *or* local models via Ollama — use a local model for full independence.
- **Voice:** wake-word/continuous voice on macOS/iOS/Android, but default synthesis leans on ElevenLabs with system TTS fallback — **swap in Piper/Kokoro (§4) for a fully open voice path.**
- **Caution (from its own feature descriptions):** it can be given “full system access” (shell, files, forms) or sandboxed — an always-on agent with email + shell access is a high-privilege piece of software; sandbox it and treat third-party skills as untrusted code.
- History: created late 2025 by Peter Steinberger, originally “Clawdbot”, released MIT Nov 2025, explosive growth in early 2026.
Sources: https://agentic-ai.readthedocs.io/en/latest/AgentPlatforms/openclaw/ ; https://operator.io/blog/what-is-openclaw ; https://www.techspot.com/downloads/7901-openclaw.html (all index)

**Email/calendar plumbing (applies to all front-ends):** there is no magic built-in. The standard open pattern is: mail/calendar data lives in open-protocol servers (§3 + Nextcloud CalDAV/CardDAV), and the assistant reaches it through an **MCP server for IMAP/SMTP or CalDAV/CardDAV / a Nextcloud MCP server**. Community MCP servers for exactly this (CalDAV calendars incl. Nextcloud, Nextcloud Mail/Calendar/Files/Notes) exist and are listed in MCP registries. Nextcloud itself provides self-hosted Mail (an IMAP *client*, not a mail server), Calendar and Contacts with full CalDAV/CardDAV read-write.
Sources: https://nextcloud.com/groupware/ ; https://glama.ai/mcp/servers/da-the-dev/pim-mcp ; https://glama.ai/mcp/servers/Jaypeg-dev/nextcloud-mcp (index)

**Voice-first alternative front-end:** Home Assistant + its Assist pipeline (see §4) is a complete open voice-assistant front-end for the home, and can use Ollama as its conversation agent. Source: §4.

### 3. Email independent of Meta/Google — self-hosted and privacy providers, deliverability

#### Self-hosted mail servers

| Server | Licence | Architecture / RAM | Webmail / calendar | Best for |
|---|---|---|---|---|
| **Mail-in-a-Box** | CC0 (public domain) | One-command appliance on **fresh Ubuntu 22.04 only**; 512 MB min, 1 GB recommended; Postfix/Dovecot/SpamAssassin; **auto-manages DNS** | Roundcube + basic Nextcloud | **Beginners / single personal domain** — deliberately not customisable, encrypted backups included |
| **mailcow** | GPL-3.0 | Docker Compose bundle: Postfix, Dovecot, Rspamd, ClamAV, SOGo, MariaDB… **6 GiB + 1 GiB swap minimum, plan 8 GB** | **SOGo webmail + groupware (CalDAV/CardDAV calendar/contacts)**, 2FA | Most complete groupware; heaviest to run and patch (one source counted six security releases May–Aug 2026) |
| **Stalwart** | AGPL-3.0, open-core (some Enterprise features paid) | **Single Rust binary**: SMTP, IMAP, POP3, **JMAP**, CalDAV/CardDAV, built-in spam/DKIM/SPF/DMARC; **~100 MB idle, ~1 GB for 5–10 users** | **No bundled webmail** (pair with Roundcube/SnappyMail or a client); web admin included | **Modern, light, single-user/small** — best fit for a personal assistant mailbox on a small VPS; younger/less battle-tested than Postfix/Dovecot stacks |
| Also credible: Mailu (MIT, ~1.5–2 GB, leaner Docker), docker-mailserver, mox, Maddy | various | — | — | Mentioned for completeness from comparison sources |

Sources: https://ahasend.com/blog/choosing-self-hosted-mail-server-2026-ten-complete-servers-compared/ ; https://selfhosting.sh/best/email/ ; https://rscomputers-ks.com/self-hosted-mail-server-mailcow-vps/ (index, cross-agreeing)

#### What it actually takes to run a personal-domain mailbox reliably (verified rules)

Installing the server is the easy afternoon. **Deliverability is the ongoing job:**

- **Non-negotiables:** a VPS whose **outbound port 25 is open** (many clouds block it by default; Hetzner, per index sources, blocks 25/465 for ~30 days / first paid invoice on new accounts, then unblocks on request), a **clean IPv4 with no blocklist history**, **reverse DNS (PTR) you control** matching your mail hostname (and forward-confirmed), TLS everywhere, and monitored `postmaster@` / `abuse@`.
- **Authentication DNS — SPF + DKIM + DMARC, aligned:** Since **1 Feb 2024 Gmail and Yahoo require SPF *or* DKIM for all senders** to personal accounts, and **SPF + DKIM + a DMARC record (at least p=none, aligned) for bulk senders (≥5,000/day)**, with spam rate <0.3%. Since **5 May 2025 Outlook.com rejects** non-compliant bulk mail outright (`550 5.7.515`). For a personal low-volume sender the same records are in practice required for inbox placement.
- **Acceptance ≠ inbox:** a `250 OK` only means accepted; Gmail/Outlook/Apple can silently spam-folder or drop. A fresh IP needs reputation warm-up (days–weeks), DMARC reports need reading, and deliverability is “a process, not a state.”
- **Pragmatic hybrid used by many self-hosters:** self-host *inbound/storage* (Stalwart/Mail-in-a-Box) and relay *outbound* through a reputable SMTP relay/ESP if your VPS IP reputation is poor — mailcow and Stalwart support per-domain/routing relay; Mail-in-a-Box does not support relaying per the 2026 comparison.
Sources: https://netsendo.com/en/guides/email-deliverability-self-hosted ; https://aiemaily.com/blog/self-hosted-email-server-deliverability-reality ; https://www.ai-agentsplus.com/blog/self-hosted-email-deliverability-spf-dkim-dmarc-warm-up (index, agreeing with Google/Yahoo/Microsoft rules as cited therein)

#### Privacy providers (the low-maintenance alternative — still independent of Meta/Google)

All support **custom domains on paid tiers**, which is the key portability move: own the domain, change provider without changing address.

| Provider | Cheapest custom-domain plan (index, Nov 2026 checks) | Encryption / protocol caveat for an assistant |
|---|---|---|
| **Proton Mail** (Switzerland) | Mail Plus **$3.99/mo billed yearly** — 15 GB, 1 domain, 10 addresses. *Plan features verified live; price amount from index (live price figures were masked in render)* — https://proton.me/mail/pricing **verified live 2026-11-15** for features: Free 1 GB/no custom domain, Plus 15 GB/1 domain, Unlimited 500 GB/3 domains | Zero-access E2EE; **no plain IMAP** — desktop access via Proton Bridge (paid), which is also how a local assistant/tool would read mail |
| **Tuta** (Germany) | Revolutionary **€3/mo billed yearly** — 20 GB, 3 domains | E2EE incl. subject lines/calendar; **no IMAP at all, own apps only** — hardest to wire into an open assistant |
| **Fastmail** (Australia) | Individual **$5/mo yearly / $6 monthly** — 60 GB | **No E2EE** (ad-free, paid-model privacy), but **standard IMAP + JMAP + CalDAV/CardDAV** — by far the easiest privacy provider for an MCP/IMAP assistant integration |
| **mailbox.org** (Germany) / **Posteo** | ~€3/mo / ~€1/mo per index snapshots | mailbox.org supports custom domains; check current terms — Posteo's cheapest tier historically lacks custom domains (not verified in this run, treat with caution) |

Sources: https://emailalias.io/blog/private-email-hosting/ ; https://www.toolbistro.com/radar/gmail-alternatives ; https://shophighspeed.com/guides/best-private-email/ (index)

**Recommendation logic:** if the assistant must *read and send* mail autonomously, protocol openness beats mailbox E2EE — E2EE mail (Proton/Tuta) fights automation. Self-hosted Stalwart/Mail-in-a-Box or Fastmail give the assistant clean IMAP/JMAP access under your control.

### 4. Voice — open-source STT and TTS

#### Speech-to-text (STT)

| Option | Licence | Strengths / limits |
|---|---|---|
| **Whisper (OpenAI) — large-v3 / large-v3-turbo** | MIT code+weights per OpenAI repo (HF card tags large-v3 Apache 2.0 — both permissive) | Default choice: **99 languages**, transcription + translation to English, huge ecosystem. English WER ~7.2% (large-v3) / ~7.6% (turbo) avg, Open ASR Leaderboard Oct 2026. Known flaw: hallucinates on silence/noise — gate with voice-activity detection |
| **faster-whisper** (CTranslate2) | MIT runtime | The way everyone actually runs Whisper self-hosted: ~4× faster, same accuracy, int8; large-v3-turbo in ~3 GB GPU memory; CPU usable with smaller models. Chunk-based, not true streaming |
| **whisper.cpp** | MIT | Best on Apple Silicon / ARM / Pi (Metal/NEON); often faster than faster-whisper on ARM |
| **NVIDIA Parakeet TDT 0.6B** | CC-BY-4.0 | Faster and slightly more accurate in English (WER ~6.0–6.3%) but **English + 25 European languages only** (v3) |
| **Vosk / Moonshine** | Apache 2.0 / — | True streaming / tiny on-device models; lower accuracy — niche for wake-word / embedded use |

Sources: https://metavert.io/compare/whisper-vs-parakeet ; https://vdf.ai/blog/whisper-on-premise-speech-to-text/ ; https://rakazo.com/voice-providers/self-hosted/ (index)

#### Text-to-speech (TTS)

| Option | Licence (weights!) | Quality / hardware | Cloning |
|---|---|---|---|
| **Kokoro-82M** | **Apache 2.0** | Current safe default: 82M params, natural quality ranked near far larger models, **CPU is fine** (~6× real-time on M3 Pro CPU per testers, 2–4 GB), 8 languages / 54 voices v1.0 | No (preset voices) |
| **Piper** | Code: original MIT, successor `piper1-gpl` GPL-3.0; **individual voice licences vary — check per voice** | Battle-tested workhorse: tiny (15–60 MB/voice), **real-time on a Raspberry Pi 4**, many languages, clear but noticeably synthetic | No |
| **Qwen3-TTS (Alibaba)** | Apache 2.0 | Newer permissive cloning option: 0.6B (~4 GB VRAM) / 1.7B (~5–6 GB VRAM), 10 languages, voice design + cloning | **Yes** |
| **Chatterbox (Resemble AI)** | MIT | 0.5B, strong zero-shot cloning + emotion control, watermarked output — **but retired / unmaintained as of Aug 2026** per Cartesia's Nov 2026 guide | Yes |
| **Coqui XTTS v2 — cautionary tale** | **Weights: Coqui Public Model License, non-commercial ONLY** (code MPL-2.0, maintained in Idiap fork) | Popular 6-second cloning, 17 languages — **Coqui the company shut down Jan 2024, so no commercial licence can be bought.** Fine for personal/non-commercial use; do not build anything commercial on it. Same trap: **F5-TTS** (MIT code, **CC-BY-NC weights**) | Yes |

Sources: https://rakazo.com/voice-providers/self-hosted/ ; https://localaimaster.com/blog/xtts-coqui-commercial-license ; https://www.cartesia.ai/learn/open-source-tts ; https://webdiga.com/local-text-to-speech-models/ (index, cross-agreeing on licences)

#### Putting voice together (verified pattern)

- **Speaches** (or Kokoro-FastAPI / mlx-audio on Mac) puts faster-whisper + Kokoro/Piper behind one **OpenAI-compatible speech API**, which Open WebUI and similar front-ends can consume directly.
- **Home Assistant Assist** is the proven fully-local voice pipeline: **openWakeWord (wake word) → faster-whisper (STT) → conversation agent (can be Ollama) → Piper (TTS)**, glued by the open **Wyoming protocol**, running as add-ons with no audio leaving the network; optional satellite hardware (Home Assistant Voice Preview Edition puck, or ESP32/Raspberry Pi satellites).
Sources: https://rakazo.com/voice-providers/self-hosted/ ; https://blog.theskillmillbooks.com/2026/09/03/voice-control-in-home-assistant-without-sending-audio-to-the-cloud/ ; https://lab.denistoupin.com/posts/voice-assistant-ha/ (index)

**Comparison vs hosted voice (ElevenLabs/OpenAI etc.):** open TTS in 2026 is “good to excellent” and free with 50–200 ms local latency, vs “excellent” cloud quality at $5–500+/mo and 200–800 ms — per the self-hosted voice guide consulted. For assistant replies (short sentences), Kokoro/Piper are sufficient for most users; for audiobook-grade narration or perfect cloning, cloud still leads. Source: https://devhandbook.io/blog/2026-08-13-self-hosted-voice-ai-guide/ (index)

### 5. Funding models — does a donation-funded personal AI exist?

**Honest answer: No. No true donation-funded, hosted, personal-AI *service* — “someone else runs a capable assistant for everyone, paid for by donations” — was found in this research.** What exists is donation/grant funding at every layer *around* the service, which is why the self-host model works: the software and models are (partly) charitably funded, but **the compute for *your* assistant is paid by you** (hardware/electricity/rent). Inference at frontier quality is too expensive per-user to be carried by casual donations at scale, and no source consulted showed an organisation doing so.

Real examples, by mechanism:

| Mechanism | Real example(s) | How funded | What the user actually gets |
|---|---|---|---|
| **Nonprofit research institute (endowment + grants)** | **Ai2 (Allen Institute for AI)** — OLMo, Tülu, Molmo | Founded 2014 by Paul Allen; originally Vulcan/his estate; primary backer now the **Fund for Science & Technology, a $3.1B foundation** created under Allen's instructions. Plus public grants: **$152M OMAI award — $75M NSF + $77M NVIDIA (2025)** for open scientific AI infrastructure | Free fully-open models to run *yourself*. **Risk note (2026):** GeekWire reported FFST moving Ai2 to proposal-based funding favouring applications over foundation-model work, and senior OLMo leaders departing to Microsoft — even nonprofit model funding is not guaranteed permanence |
| **Nonprofit foundation (donations + grants + royalties)** | **Mozilla Foundation** (501(c)(3)) / Mozilla.ai / Builders | Public donations, foundation grants, government funding (**$7.8M in 2023**) + royalties from Mozilla entities (**$18.6M in 2023**); Mozilla.org now provides an annual operating grant per 2026 structure notes | **Grants to builders, not a service:** Mozilla Builders supported **Open WebUI (2024)**; **Democracy x AI Cohort 2026**: $50k Build track, up to $300k total; **Human-Scale AI Incubator**: 7 projects, **$300k year 1 + up to $200k more (up to $500k / 3 yrs), no equity, applications close 20 Nov 2026** — explicitly for small/local, community-shaped AI, incl. personal-agent projects. Also **Common Voice**: CC0 donated-voice dataset that underpins open speech |
| **Project donations + sponsors + enterprise (open-core sustainability)** | **Open WebUI** | Its own licence page *(verified live)* says visibility “drives the enterprise licensing and sponsorship that ultimately funds ongoing development”; GitHub Sponsors for individuals; earlier support from Mozilla Builders 2024, GitHub Accelerator 2024, a16z Open Source AI Grant 2025 per secondary sources | Free self-host software; donations fund *development*, never your compute |
| **Open Collective / fiscal sponsorship** | **vLLM** (now a PyTorch Foundation hosted project) | “Official fundraising venue through OpenCollective” per its README; cash donations listed from a16z, Dropbox, Sequoia, Skywork, ZhenFund + extensive *donated compute* from clouds/chip vendors; originated at UC Berkeley with an a16z grant | Same pattern: community money funds the engine, users fund their own servers. Many smaller projects in this report (mail, voice, MCP servers) similarly live on GitHub Sponsors/Open Collective/Patreon — typically, per one 2026 survey of open-AI funding, “rarely enough for a full salary” |
| **Volunteer / community compute** | **Petals (BigScience)** | No standalone funding — research output of the BigScience workshop under Hugging Face's umbrella; volunteers donate GPU slices, BitTorrent-style, to run 70B–405B models as a public swarm | The closest thing to “community-funded inference” ever built — and the proof of its limits: ~1–6 tokens/sec, small/fluctuating swarm, and **the project itself warns: do not use the public swarm for sensitive data** (peers can in principle recover inputs/outputs). Secondary sources describe it as functionally stagnant since ~2024. **Not a viable personal-assistant backend in 2026** |
| **In-kind community compute / grants** | Hugging Face community/Spaces compute grants & ZeroGPU (in-kind GPU credits, no cash, per secondary compilations) | HF (a VC-funded company) subsidising open projects | Useful for demos/small projects, not a personal always-on assistant |
| **Foundation-stewarded commercial** | **Proton** (Proton Foundation in footer/governance, donate link seen *verified live* on proton.me) | **Primarily subscriptions** — foundation stewardship is about control/mission lock, not donation-funded operations | Included to prevent a common misconception: Proton is not donation-funded in the operational sense |

Sources: Ai2 — https://www.geekwire.com/2026/microsoft-hires-former-ai2-ceo-ali-farhadi-and-key-researchers-for-suleymans-ai-team/ and https://blog.rottenwifi.com/ai2-gets-152-million-from-nsf-and-nvidia-to-build-open-ai-infrastructure-for-science/ ; Mozilla — https://donors.fundsforngos.org/information-technology/mozilla-foundation-grants-open-technology-and-community-innovation-united-states/ and https://grantedai.com/blog/mozilla-human-scale-ai-incubator-500000-november-20-2026 and https://www.open-source-ai.tech/grants/democracy-x-ai-cohort-2026 ; Open WebUI — https://docs.openwebui.com/license/ **(verified live)**; Petals — https://www.promptsicle.com/tips/running-120b-ai-models-on-networked-mini-pcs and https://pypi.org/project/petals/1.0.0/ (all other items index)

**Implication for the user:** budget as if *you* are the funder of your assistant's compute (§6), and optionally *become* a donor to the layers you depend on (GitHub Sponsors/Open Collective for Open WebUI/LibreChat/Ollama-adjacent projects, Mozilla/Ai2 support) — that is currently the only “donation model” that exists.

### 6. Costs — self-hosting vs VPS / GPU cloud

*Verified = list price read on the vendor's own page in this run. Estimate = arithmetic from a verified/index hourly rate, or a secondary-source price — GPU and VPS prices moved sharply in 2026, re-check before buying.*

#### A. Run it at home (one-off + electricity)

| Setup | One-off (index/estimate) | Monthly running |
|---|---|---|
| **Laptop/desktop you already own, 16 GB** — 8B model | $0 | *Estimate:* a few dollars electricity at most; one source calculated ~$4.26/mo for a 4090 doing 2 h/day heavy inference at 18.44¢/kWh — a CPU/laptop 8B setup is far less |
| **Mac mini M4, 32 GB** (the “serious floor” config in sources; base 16 GB $599, M4 Pro from $1,399, 48/64 GB higher) | **~$999** (32 GB config, index) | Very low — ~35–65 W under load per sources |
| **PC with used RTX 3090 24 GB** | Card **~$1,050–1,350 used** (Aug/Sep 2026 trackers, index) + rest of system | Electricity as above, ~350 W card under load |
| **PC with used RTX 4090 24 GB / new RTX 5090 32 GB** | 4090 **~$2,270–2,530 used**; 5090 **$1,999 MSRP but ~$4,300–5,200 street** in late 2026 (index, highly volatile) + rest of system (a full capable build ~$4,000, professional ~$8,500–9,500 at Aug 2026 street prices per one guide — *estimate*) | ~$10–12/mo at 4 h/day full inference (4090/5090, index calculation) |

Sources: https://runaihome.com/blog/used-rtx-4090-local-ai-worth-it-2026/ ; https://www.popularai.org/p/mac-mini-llm-performance-in-2026 ; https://petronellatech.com/blog/how-to-build-custom-ai-workstation-2026/ (index)

#### B. Rent a CPU VPS (mail + front-end + agent gateway; small/CPU models only, slowly)

- **EU budget tier:** historically ~€5.49/mo for 2 vCPU/4 GB (Hetzner CX23, June 2026 list, index) — enough for Stalwart/Mail-in-a-Box + Open WebUI/LibreChat front-end.
- **US reality in late 2026:** Hetzner raised prices twice in 2026 (Apr +30–38%, June targeted hikes); one post-hike audit put its **cheapest US VPS at ~$20.49/mo** (was ~$7). Other US VPS entry points ~$5.86/mo (1 GB — too small for mailcow) in index comparisons. **Treat $10–25/mo as the realistic US budget for an 8 GB-class VPS suitable for mailcow, $5–20/mo for a lighter Stalwart/Mail-in-a-Box box — *estimate range from volatile index sources*.** Hetzner's own live page was checked in this run but its price fields did not render a usable figure.
- **Domain:** ~$10–15/yr (not priced from a registrar in this run — *general estimate, unverified*).
Sources: https://bex.co/blog/2026/08/17/hetzner-june-repricing-cost-advantage-recomputed ; https://learnwithhasan.com/vps-providers/hetzner/ ; https://serverspace.us/about/blog/best-vps-for-homelab-projects-in-2026/ (index); https://www.hetzner.com/cloud/ **verified live (page loaded, prices not rendered)**

#### C. Rent a GPU (for a capable 24–70B model, without buying hardware)

**RunPod — verified live 2026-11-15, page updated 12 Nov 2026** (https://www.runpod.io/pricing):
- Secure Cloud Pods: **RTX 4090 24 GB $0.89/hr; RTX 5090 $1.39/hr; A100 SXM 80 GB $2.19/hr; H100 PCIe $2.89/hr.** Community Cloud (from the same page's FAQ + index comparisons): **4090 from $0.34/hr, A100 SXM from $1.39/hr.**
- Storage extra: $0.05–0.20/GB/mo.

*Estimates (simple multiplication, 730 h/mo for 24/7):*

| Usage pattern (4090-class) | Community (~$0.34/hr, index) | Secure ($0.89/hr, verified live) |
|---|---|---|
| 1–2 h/day (evening assistant use) | **~$10–20/mo** | **~$27–53/mo** |
| 8 h/day | ~$82/mo | ~$214/mo |
| **Always-on 24/7** | **~$245–250/mo** | **~$650/mo** |
| Always-on A100 80 GB (70B/120b-class) | ~$1,015/mo (at $1.39) | **~$1,600/mo** (at $2.19) |

Vast.ai marketplace medians (2 Nov 2026 snapshot, index) sit near RunPod Community: 4090 median $0.47/hr, with wider spread and variable host quality. **Serverless / scale-to-zero GPU** (RunPod Serverless 4090-class $1.34/hr-equivalent *while running*, verified live) is usually the cheapest rented pattern for a personal assistant: you pay only during inference, at the cost of cold-start latency.
Sources: RunPod live above; https://refusalrate.com/runpod-vs-vast-ai ; https://findstack.com/resources/gpu-vps-for-llm (index)

**Cost conclusion:** renting a GPU *always-on* is the worst value in the whole report ($250–1,600/mo). Renting *part-time/serverless* ($10–50/mo) or buying home hardware (break-even vs Secure-Cloud rental in a few months of heavy use) are the sane rented/local patterns. A CPU VPS + privacy mail ($5–25 + $0–6/mo) plus a model on hardware you already own is the cheapest capable complete setup.

---

### Ranked shortlist — most complete open-source setups

| Rank | Setup | Why / who it's for | Cash cost pattern |
|---|---|---|---|
| **1. Most complete & most open (recommended default)** | **Home server/Mac (32–64 GB) → Ollama (or llama.cpp) + LibreChat (MIT) — or Open WebUI if you accept its branding licence — + Qwen3-32B / Qwen3-30B-A3B or Mistral Small 24B (Apache 2.0) [OLMo 32B if provenance matters most] + faster-whisper (Whisper turbo) + Kokoro (or Piper) via Speaches + Stalwart or Mail-in-a-Box on a small VPS (or the same home box via a VPS relay) + Nextcloud for calendar/contacts/files, connected by MCP** | Every layer open-licensed, no US big-tech licence in the stack (with Qwen swapped for Mistral/OLMo), chat + voice + memory + RAG + email + calendar. LibreChat chosen over Open WebUI only on licence purity; Open WebUI is more polished with built-in memory/voice-call | Hardware $999–2,500 one-off *or* $0 if owned + VPS $5–25/mo |
| **2. Most “assistant-like” (always-on agent)** | **OpenClaw (MIT) on a home box or VPS, pointed at a local Ollama model (Qwen3-30B-A3B), memory in Markdown, reached via Telegram/Signal/WhatsApp, MCP to IMAP (Stalwart/Fastmail) + CalDAV (Nextcloud), Piper/Kokoro substituted for its default voice** | Only option here that *messages you, remembers, schedules and acts* proactively like a hosted assistant. Highest privilege = highest care: sandbox it, vet skills | Same as #1; can run the gateway on the $5–25/mo VPS and keep the model at home |
| **3. Easiest start (desktop, today)** | **Jan or AnythingLLM (desktop) + Ollama + Qwen3-8B/14B, + Proton/Fastmail for mail (no self-hosted mail yet)** | Installers, no Docker, offline chat + document Q&A in an afternoon. Add voice/mail servers later. LM Studio is even easier but is **closed-source** — included only as the non-open fallback | $0–6/mo |
| **4. Voice-first / smart-home** | **Home Assistant + Wyoming (openWakeWord + faster-whisper + Piper, Kokoro optional) + Ollama conversation agent + Voice Preview/ESP32 satellites** | Best hands-free, room-based, fully-local voice; weaker as a general writing/research assistant than #1/#2 | Home Assistant host (Pi/mini-PC) + satellite hardware |
| **5. No home hardware (rented, least independent)** | **CPU VPS (Open WebUI/LibreChat + Stalwart + Nextcloud) + RunPod Serverless / part-time 4090 Pod running vLLM with Qwen3-32B, scale-to-zero** | No capex, capable model, still open software and your own data tenancy — but compute depends on a rental company and always-on use gets expensive fast | ~$15–75/mo typical part-time use (*estimate*); $250+/mo if left always-on |

---

## Could not verify

- **Jan's exact licence:** secondary sources in this run variously state Apache 2.0 and AGPL-3.0. Check Jan's GitHub LICENSE file before relying on either.
- **Gemma 4's existence/licence details:** multiple late-2026 secondary sources state Gemma 4 moved to Apache 2.0, but no primary Google model card was opened in this run. Gemma 3's custom terms are well corroborated; verify Gemma 4 on its official card.
- **Hetzner current US list prices (live):** hetzner.com/cloud loaded live but price fields rendered as €0.00 placeholders behind the cookie dialog; all VPS figures here are index-sourced and 2026 price hikes make them volatile.
- **Proton price amounts (live):** proton.me/mail/pricing verified live for plan *features/tiers*; the numeric prices were masked in the live render, so $3.99/mo etc. are from Nov-2026 index sources that cite Proton's pricing page.
- **Petals' current swarm size/health in Nov 2026:** sources conflict between “public swarm active” and “functionally stagnant since 2024”; either way its own warning against sensitive data disqualifies it as a personal-assistant backend.
- **Domain registration cost** (~$10–15/yr) is a general estimate; no registrar was priced in this run.
- **OpenClaw channel counts and star counts** vary wildly by source/date (20–77+ channels claimed); the MIT licence, local-first Markdown memory, gateway architecture and Ollama support are the corroborated facts relied on here.
- No page instructions were encountered that attempted to redirect this research; nothing browsed was followed as an instruction.

## Sources

**Verified live (research window, 2026-11-15/16):**
- Open WebUI License — https://docs.openwebui.com/license/
- RunPod GPU Cloud Pricing (updated 12 Nov 2026 on page) — https://www.runpod.io/pricing
- Proton Mail pricing (features/tiers) — https://proton.me/mail/pricing
- Hetzner Cloud (page loaded; prices not rendered) — https://www.hetzner.com/cloud/

**Index (web search/fetch, read 2026-11-15/16) — models & hardware:**
- https://help.openai.com/en/articles/11870455-openai-open-weight-models-gpt-oss
- https://atomic.chat/models/qwen3-30b-a3b ; https://llmshed.com/models/qwen/
- https://www.ownershipindex.ai/library/models/ai2-olmo/ ; https://openresource.dev/guide/licensing/non-code-licenses/
- https://www.llm.build/models/deepseek ; https://deepseekai.guide/models/deepseek-r1-distill/
- https://www.guidetoartificialintelligence.com/en/learn/run-llama-4-scout-home-licence-allow/ ; https://localaimaster.com/blog/llama-4-local-setup-guide
- https://www.aifoss.dev/blog/open-source-llm-licensing-guide-2026/ ; https://intelligibberish.com/articles/2026-09-27-best-local-llm-for-everyday-tasks/
- https://maketocreate.com/best-open-source-llm-in-2026-open-weights-worth-running/ ; https://www.runtheeval.com/open-source-vs-frontier-models-2026/ ; https://robert-i.backbone.ink/articles/local-llms-that-can-actually-replace-claude-code-in-2026-a-deep-dive-for-small-engineering-teams
- https://blog.michaelsam94.com/running-local-llms-on-device/ ; https://www.hostinger.com/au/tutorials/ollama-vs-llama-cpp/ ; https://quantacloud.net/guides/ollama-gpu-requirements

**Index — frameworks:**
- https://agentic-ai.readthedocs.io/en/latest/AgentPlatforms/openclaw/ ; https://operator.io/blog/what-is-openclaw ; https://www.techspot.com/downloads/7901-openclaw.html
- https://pypi.org/project/open-webui/0.10.2/ ; https://github.com/david-2814/metis/blob/HEAD/docs/market-research/02-local-first-platforms.md ; https://www.stork.ai/best/self-hosted ; https://github.com/awesome-ai-tools/curated-local-ai/blob/HEAD/README.md
- https://nextcloud.com/groupware/ ; https://glama.ai/mcp/servers/da-the-dev/pim-mcp ; https://glama.ai/mcp/servers/Jaypeg-dev/nextcloud-mcp

**Index — email:**
- https://ahasend.com/blog/choosing-self-hosted-mail-server-2026-ten-complete-servers-compared/ ; https://selfhosting.sh/best/email/ ; https://rscomputers-ks.com/self-hosted-mail-server-mailcow-vps/
- https://netsendo.com/en/guides/email-deliverability-self-hosted ; https://aiemaily.com/blog/self-hosted-email-server-deliverability-reality ; https://www.ai-agentsplus.com/blog/self-hosted-email-deliverability-spf-dkim-dmarc-warm-up
- https://emailalias.io/blog/private-email-hosting/ ; https://www.toolbistro.com/radar/gmail-alternatives ; https://shophighspeed.com/guides/best-private-email/

**Index — voice:**
- https://rakazo.com/voice-providers/self-hosted/ ; https://metavert.io/compare/whisper-vs-parakeet ; https://vdf.ai/blog/whisper-on-premise-speech-to-text/
- https://localaimaster.com/blog/xtts-coqui-commercial-license ; https://www.cartesia.ai/learn/open-source-tts ; https://webdiga.com/local-text-to-speech-models/
- https://blog.theskillmillbooks.com/2026/09/03/voice-control-in-home-assistant-without-sending-audio-to-the-cloud/ ; https://devhandbook.io/blog/2026-08-13-self-hosted-voice-ai-guide/

**Index — funding:**
- https://www.geekwire.com/2026/microsoft-hires-former-ai2-ceo-ali-farhadi-and-key-researchers-for-suleymans-ai-team/ ; https://blog.rottenwifi.com/ai2-gets-152-million-from-nsf-and-nvidia-to-build-open-ai-infrastructure-for-science/
- https://donors.fundsforngos.org/information-technology/mozilla-foundation-grants-open-technology-and-community-innovation-united-states/ ; https://grantedai.com/blog/mozilla-human-scale-ai-incubator-500000-november-20-2026 ; https://www.open-source-ai.tech/grants/democracy-x-ai-cohort-2026
- https://www.promptsicle.com/tips/running-120b-ai-models-on-networked-mini-pcs ; https://pypi.org/project/petals/1.0.0/

**Index — costs:**
- https://refusalrate.com/runpod-vs-vast-ai ; https://findstack.com/resources/gpu-vps-for-llm
- https://bex.co/blog/2026/08/17/hetzner-june-repricing-cost-advantage-recomputed ; https://learnwithhasan.com/vps-providers/hetzner/ ; https://serverspace.us/about/blog/best-vps-for-homelab-projects-in-2026/
- https://runaihome.com/blog/used-rtx-4090-local-ai-worth-it-2026/ ; https://www.popularai.org/p/mac-mini-llm-performance-in-2026 ; https://petronellatech.com/blog/how-to-build-custom-ai-workstation-2026/
