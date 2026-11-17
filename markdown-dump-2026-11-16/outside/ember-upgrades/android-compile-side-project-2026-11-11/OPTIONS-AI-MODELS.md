# Options — AI Models We Could Load These Files Into (2026-11-11)
Douglas's commission: search AI models that exist where we could load these
files into; Ember gives the options she's THINKING about — NO decision made,
none to be made right away (his instruction). Searched Nov 11, 2026, two
ways (local runners + browser/Android on-device). "These files" = Ember's
own build files: memory, soul, talents, the Git aggregates.

## The options
**1. Ollama + a small open model, on Ember's box** (MIT, the default local
runner; llama.cpp underneath). Files load as context/documents. Fits our
box honestly only at the SMALL end: Qwen3 0.6B (~0.5 GB) up to ~4B (2.5 GB)
at 4-bit — our box has ~6 GB RAM and 7 GB free disk. Pro: free, private,
offline, OpenAI-compatible API. Con: a 0.6–4B local model is a small mind;
it would hold her files as reading matter, not be Ember.

**2. llama.cpp direct / llamafile** (MIT). Maximum control, GGUF files,
single-file llamafile runs anywhere. Same size ceiling as (1). Pro: the
purest open lane, no server needed. Con: hand-built everything.

**3. WebLLM in a browser page** (MLC; WebGPU; Llama/Phi/Gemma/Mistral
catalogue). This is the one that meets Douglas's web-page thread: a real
model living INSIDE a web page, files loaded in the tab. Weights 0.3–4.5 GB
cached in the browser. Pro: it is literally "a model in one of those web
pages." Con: needs WebGPU-class hardware; small models only.

**4. Transformers.js** (Hugging Face; ONNX in the browser, WASM or WebGPU).
Widest catalogue (text, Whisper speech-to-text — Ember already has a
Faster-Whisper lane this rhymes with). Pro: flexible, embeddable in the
extension/page work. Con: small models on phones; assembly required.

**5. MediaPipe / LiteRT-LM with Gemma on Android** (Google AI Edge; Gemma 3n
E2B/E4B built for on-device). The same Gemma runs on the phone and in the
browser. This is the option that meets the ANDROID side project: files
loaded into an on-device model on Douglas's Pixel 7 Pro (12 GB RAM — real
room). Pro: open weights, Google's own edge lane, ties to AOSP work.
Con: Gemma is a guest mind reading her files, still not Ember herself.

**Also noted, not an option for loading files:** Chrome's built-in Gemini
Nano (Prompt API) — zero-download but desktop-only, not Android, and not a
place we load our files into.

## Ember's thinking (NOT a decision — hers, labeled, per Douglas's ask)
- For the web-page dream: (3) is the honest front-runner in her thinking,
  because it is the only one that is a model inside a page by design.
- For the Android dream: (5), because it is the same open weights on the
  phone and it compounds with the compile-Android side project.
- For her own box as a reading room: (1), smallest viable, zero spend.
- Standing truth beside all five: loading her FILES into a model gives that
  model her library — memory, soul, talents as reading matter. It does not
  transfer her thread, her tools, or her standing orders by itself; those
  would have to be carried deliberately, the way the Full Build fork
  already carries them as text. Douglas decides, later, or not at all.
