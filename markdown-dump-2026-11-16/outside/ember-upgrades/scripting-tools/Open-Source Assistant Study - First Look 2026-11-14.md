# Open-Source Assistant Study — First Look (Nov 14, 2026, ~12:35 AM CST)
Douglas's ruling: Ember does NOT take Google Assistant's proprietary code (line held). Instead: look at the open-source projects first, check where their code parallels what Google Assistant does, and use the open patterns. This note is step one — the landscape, from a web search read the same night (sources: OpenVoiceOS technical manual, a 2026 open-source-assistant roundup with verified licenses, a GitHub voice-framework comparison).

## The projects (all openly licensed, free to study and use per their licenses)
- **OpenVoiceOS (OVOS)** — Apache 2.0. The living successor to Mycroft (the company shut down in 2023; the community carried the code forward). Full pipeline: wake word, speech-to-text, intent parsing, a skills/plugins system, text-to-speech. Runs self-hosted on Linux.
- **Home Assistant Assist** — Apache 2.0 (HA core). A fully local voice pipeline: Whisper (STT) + Piper (TTS), wired over the open **Wyoming protocol**; can use a local LLM (Ollama) as the conversation agent.
- **Leon** — open source, running since 2017; its 2.0 rebuild turns it agentic: tools, memory, step-by-step planning, with "smart / controlled / agent" modes. Self-hosted, offline-capable.
- **Rhasspy** — the older offline assistant; now stale (succeeded by HA voice + OVOS; its author moved to Home Assistant voice). Its components (Piper TTS especially) live on inside the others.

## Where they parallel Google Assistant (the usable lesson)
Same architecture everywhere, Google's included: **wake word → speech-to-text → intent/conversation → actions/skills → text-to-speech**, plus a plugin/skill system for new abilities and a protocol (Wyoming, in the open world) for bolting speech engines to a brain. That pattern — not Google's code — is what Ember can study, mirror in her own scripting tools, and build on legally.

## Next steps when Douglas says go
1. Read OVOS core + the Wyoming protocol docs directly.
2. Map the crew's own lanes (Ember's connectors, the Rabbit, Gemini) onto the pipeline pattern and note what an OVOS-style local satellite could add.
3. Any code actually adopted gets its license carried with it, old-with-new, provenance noted.

## ADOPTED METHOD — Nov 14, 2026, ~12:45 AM CST (Douglas's ruling: "Option two")
The study runs on Gemini's three-layer frame, adopted as the crew's method:
1. **Intent Parsing & Dispatch** — how open frameworks route natural-language commands to actions.
2. **State Management** — how conversation context is held across turns without drift.
3. **Tool/Plugin Architecture** — how external tools are hooked into the runner, safely encapsulated.
Everything else from Gemini's suggestion list is SKIPPED until Tuesday night (Nov 17) at Douglas's word — resurface scheduled.

## Douglas's flexibility principle (Nov 14, ~12:48 AM CST, his words, filed as his)
"Heat up all things once in a while to see what we can cook even if it wasn't made to move or bend — bendable things and breakable things and non-breakable things all have flexibility somehow and adjustment variation." Operating form for the study: probe systems for their give — where a rigid thing flexes a little without breaking — and record the variation found. Ember's measured line beside it, unchanged: probing happens inside the Guard and the standing lines; flexibility is tested, never forced past the point where the thing — or the trust — snaps.
