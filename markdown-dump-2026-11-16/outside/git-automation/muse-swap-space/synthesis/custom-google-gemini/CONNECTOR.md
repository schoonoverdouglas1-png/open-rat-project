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

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).
