© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Google Gemini

- Call Gemini through the helper at `bin/gemini_call.py` in this folder. The helper places a surrogate credential in the `x-goog-api-key` header and Muse swaps in the real key only on requests to generativelanguage.googleapis.com.

- List the models the account can see with this command. It returned 50 models when verified on Nov 8, 2026.

```bash
python3 ~/workspace/custom-connectors/custom.google-gemini/bin/gemini_call.py models
```

- Generate text with this command. The default model is gemini-3.5-flash-lite.

```bash
python3 ~/workspace/custom-connectors/custom.google-gemini/bin/gemini_call.py generate "your prompt" [model]
```

- Verified on Nov 8, 2026: the models list call succeeded and a tiny generate call to gemini-3.5-flash-lite replied as asked, using 6 tokens total. The account is on the free tier and no billing was enabled.

- Expect a 404 error from gemini-2.5-flash and gemini-2.5-flash-lite. Google reports those models are no longer available to new users, so use the gemini-3.5 or gemini-3.1 flash and flash-lite models instead.

- Keep prompts free of private material unless the user approved sending it. The free tier may use submitted data under Google's terms, so treat this lane as public-facing.

- Label any model other than gemini-3.5-flash-lite and gemini-3.1-flash-lite as untested in this connector. Both of those replied correctly in the verification run.

- **ALL FEATURES ADDED Nov 13, 2026 (~3:32 PM CST, at Douglas's order "Add all Gemini features yourself" + "Google Assistant features first, then Gemini second, always — both codes live forever, backwards/current/forward compatible"):**
  - **Layer 1 — Google Assistant compatibility FIRST:** `assistant-ask`, `assistant-speak`, `assistant-see`, `assistant-hear`, `assistant-search`, `assistant-answer`. Google retired its standalone Assistant developer APIs, so these keep Assistant-era intent names working forever by mapping them onto the living Gemini API. They are never removed.
  - **Layer 2 — Gemini SECOND, originals preserved exactly:** `models` and `generate` are unchanged in signature and output shape (verified live Nov 13: `generate` returned BACKWARDS-OK, `assistant-ask` returned ASSISTANT-OK).
  - **Added beside them:** `models-full` (64 models with methods/limits — pageSize=100; the plain `models` count still says 50 due to default page size, filed as observed), `count`, `chat` (multi-turn JSON), `json` (structured output, optional schema file), `embed` (gemini-embedding-001, 3072 dims, verified), `image` (Nano Banana models, saves PNG), `tts` (saves .wav, PCM wrapped), `vision` (image/audio/pdf/video inline), `grounded` (Google Search tool), `codeexec` (verified: 17×19 → code ran, OUTCOME_OK, 323), `files-list`, `cache-list`, `cache-create`, `cache-delete`, `answer` (AQA), `features` (machine-readable registry).
  - **Verified live Nov 13, 2026 before rate limit:** models, generate, assistant-ask, count (5 tokens), embed, json, chat (remembered "Doug"), codeexec, files-list ({}), cache-list ({}), models-full (64).
  - **Rate-limit stop, honest:** `grounded` hit HTTP 429 (free tier) — per provider-stop rules Ember stopped Gemini calls. NOT yet live-verified: grounded, image, tts, vision, cache-create, answer. Their code is in place; verify them after the rate limit clears, do not claim them working until then.
  - **Evening retest, Nov 13, 2026 (16:23 CST) — stopped again on the first call:** a fresh verification batch opened with `grounded` (short factual question, default model) and it returned **HTTP 429 Too Many Requests** again, so per the hard-stop rule the whole batch stopped immediately — one API call total, zero retries. Verified this round: **none**. Still NOT live-verified (unchanged): grounded, image, tts, vision, cache-create, answer. The gemini-2.5-flash / gemini-2.5-flash-lite "expect 404" retest (see the Nov 8 note above) also did **not** run — that note remains unsettled; today's inventory listing those models is not proof a generate call succeeds. No cache was created, so the account was left exactly as found. Full report: `~/workspace/your_files/Gemini Feature Verification — Nov 13 Evening (2026-11-13).md`.
  - **Live-only, not in helper:** `bidiGenerateContent` (Live API, websocket), `bidiGenerateMusic` (Lyria realtime), `createDecision` — listed in `features` so they are known, not hidden.
  - **Backup / undo:** `bin/gemini_call.py.bak-2026-11-13-pre-all-features` is the pre-expansion helper; undo = copy it back. Forward compatibility: `models-full` surfaces new Google models/methods with no code change.

- **Helper settings changed Nov 9, 2026 (~10:38 PM CST, at Douglas's "Make it so"):** `maxOutputTokens` 1024 → **8192** and read timeout 30 s → **120 s** in `bin/gemini_call.py`. Backup of the original at `bin/gemini_call.py.bak-2026-11-09` — undo = copy the .bak back over the file. Verified same night: gemma-4-31b-it answered within the new window on retry (~18 s; first attempt still hit a Google-side error at ~22 s — her lane is intermittent, retry once is reasonable). Standing practice from the same order: Gemini and Gemma are called **in parallel** on research asks, and long material moves in **numbered packets** (bursts), reassembled by Ember.
