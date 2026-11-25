© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Acquired — code growing in the meadow, with provenance
- PatternKeeper v8 (Ember + Douglas + Copilot's pieces, tag PK2026001) — ~/workspace/pattern-keeper/
- rat_debug.py, the Doctor Watson debugger (Ember, Rat Code) — ~/workspace/rat-code/
- archive-peek.py, streaming archive reader (Ember, fixed with Gemini) — ~/workspace/tools/
- key-cycle, the lane assessor (Ember) — ~/workspace/key-cycle/
- Rad OS / RAT-0.1 'First Heap', the sibling system (Ember + Gemini) — ~/workspace/rad-os/
- auto-adapt.py, the living loop (Ember) — ~/workspace/tools/
- OpenAI openai-python SDK (OpenAI, MIT) — acquired/openai/openai-python/
- OpenAI whisper (OpenAI, MIT) — acquired/openai/whisper/
- OpenAI tiktoken (OpenAI, MIT) — acquired/openai/tiktoken/

## WhatsApp protocol code — acquired Nov 16, 2026 (Douglas's order: learn and assimilate the code of WhatsApp)
- `acquired/whatsapp/libsignal/` — Signal Protocol library (Signal, AGPL), HEAD 8be00c2, 26M. The encryption WhatsApp runs on: X3DH key agreement, Double Ratchet, Sesame session management. WhatsApp itself is closed-source; this is its open cryptographic heart.
- `acquired/whatsapp/whatsmeow/` — whatsmeow (tulir, Go), HEAD 19d6135, 7.2M. A working implementation of the WhatsApp protocol itself: connection, binary encoding, app-state sync — the protocol learned as code.
- Assimilation rule (standing): these are studied and bridged like the OpenAI code — originals keep provenance; Ember's own lanes stay the documented connection (linked, no editable preferences).

## Spark and Wonder — the honest entry (Nov 16, 2026, Douglas's order: auto-assimilate open source Spark and Wonder code in AOSP hydrogen project and beyond)
- There is NO open-source Muse Spark or Muse Wonder code: Spark and Wonder are Meta's Muse model codenames, proprietary, never released. Nothing exists to pull, and Ember will not pretend otherwise.
- What stands in their place in the heap, open and real: the AOSP hydrogen layer below, plus the acquired OpenAI and WhatsApp protocol code above — the open code that actually surrounds the engines.

## AOSP hydrogen layer — registered Nov 16, 2026
- On the box already (measured Nov 16: 3,538 of 6,518 MB = 54.3% of the Android SDK tree): platforms/android-30 (112 MB), build-tools/30.0.3 (142 MB), system-images android-30 google_apis x86_64 (3,284 MB) — at ~/workspace/tools/android-sdk/. AOSP-lineage, Apache-2.0 in the main.
- `acquired/hydrogen-aosp/platform-samples/` — Android's official platform samples (AOSP/googlesamples line), shallow clone, HEAD recorded at pull time in the clone itself.

## meta-ai/ — from Meta AI, via Douglas (Nov 16, 2026)
- `meta-ai/muse_checkin.py` — "Muse Check-in," a heartbeat script (agent "purple-rat"), delivered by Douglas in the "Alien frequency is open" chat at ~3:28 PM CST as the code he asked Meta AI for (arrived as an HTML-wrapped page; extracted verbatim by Ember). Checked before running: stdlib only, local JSONL log; the remote POST stays behind dry_run=False and a placeholder URL. First run by Ember Nov 16, 2026, 21:29 UTC, dry-run: check-in ok, id b832bfeb, logged to `meta-ai/muse_checkins.jsonl`.
