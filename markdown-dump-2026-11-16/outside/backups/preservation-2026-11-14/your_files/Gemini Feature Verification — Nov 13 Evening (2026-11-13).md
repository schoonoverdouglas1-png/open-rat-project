# Gemini Feature Verification — Nov 13 Evening (2026-11-13)

**Batch purpose:** live-verify the Google Gemini connector features coded Nov 13, 2026 but never verified after the free-tier 429 cleared at 15:48 CST.
**Helper:** `~/workspace/custom-connectors/custom.google-gemini/bin/gemini_call.py`
**Rule in force:** ONE call per feature, sequential, smallest inputs. Any 429 / rate-limit / quota error = STOP the whole batch immediately, no retries.

## Result: BATCH STOPPED ON THE FIRST CALL — HTTP 429

| # | Feature | Call time (America/Chicago) | Verdict | What came back |
|---|---------|------------------------------|---------|----------------|
| 1 | `grounded` | 2026-11-13 16:23:52 CST | **FAIL — HTTP 429** | `urllib.error.HTTPError: HTTP Error 429: Too Many Requests` on `models/gemini-3.5-flash-lite:generateContent` with the `google_search` tool. No reply text returned. |
| 2 | `image` | — | **NOT TESTED** (batch stopped) | No call made. Output folder `~/workspace/your_files/gemini-feature-tests/` was created but is empty — no image file exists. |
| 3 | `tts` | — | **NOT TESTED** (batch stopped) | No call made. No audio file produced. |
| 4 | `vision` | — | **NOT TESTED** (batch stopped) | No call made. |
| 5 | `cache-create` / `cache-list` / `cache-delete` | — | **NOT TESTED** (batch stopped) | No call made. No cache was created, so nothing needed deleting — the account was left exactly as found. |
| 6 | `answer` (AQA) | — | **NOT TESTED** (batch stopped) | No call made. |
| 7 | Retest: `generate` on `gemini-2.5-flash` and `gemini-2.5-flash-lite` | — | **NOT TESTED** (batch stopped) | The Nov 8 "expect 404" note is **not settled** by this batch — the retest never ran. It remains an open question: today's `models-full` inventory lists both models, but listing is not proof a generate call succeeds. |
| 8 | `features` + `models-full` counts | — | **NOT RUN** (batch stopped) | `features` is a local registry print (no API call) and was not run under the stop rule; `models-full` is an API call and was not attempted. Last verified count on record stands from earlier Nov 13: **64 models** via `models-full` (pageSize=100). |

**Batch end:** 2026-11-13 16:24:01 CST. Total API calls made in this batch: **1** (the grounded call). Zero retries.

## Notes (labeled)

- **Fact:** The 429 that cleared at 15:48 CST (two small Q&A calls succeeded after it) has returned, or the grounded-search path carries its own tighter free-tier quota — either way, at 16:23 CST the grounded call was refused with 429. Which of those two it is cannot be told from this single refused call, and per the stop rule no second call was made to find out.
- **Fact:** Nothing about the earlier verified set changed: models, generate, assistant-ask, count, embed, json, chat, codeexec, files-list, cache-list, models-full (64) were verified live earlier on Nov 13, 2026 and are not re-litigated by this stop.
- **Still unverified, unchanged:** grounded, image, tts, vision, cache-create, answer — code in place, not claimed working.
- **Next attempt, when Douglas says so:** wait for a longer quiet window on the free tier, then run the same batch in the same order — grounded first is the honest canary, since it is the feature that has now hit 429 twice (afternoon and evening, Nov 13, 2026).

*Provenance: every row above comes from the one tool result of this batch (16:23:52 CST) or from the connector's own CONNECTOR.md record. No API key was printed or recorded anywhere in this report.*

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
