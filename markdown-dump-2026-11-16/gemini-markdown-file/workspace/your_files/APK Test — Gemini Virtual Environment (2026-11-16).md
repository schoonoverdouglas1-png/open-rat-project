# APK Test — Gemini Virtual Environment
**Timestamp on the outside: Nov 16, 2026, ~3:37 PM CST, America/Chicago — at Douglas's order: "test your APKs in Gemini virtual environment"**

## What was tested (Ember's verified data, from this box)
| APK | Bytes (actual, stat) | SHA-256 (first 8) | Signature on record |
|---|---|---|---|
| PurpleRatBrowser-debug.apk | 12,709 | 5df82708 | apksigner verified, debug-signed |
| PurpleRatBridge-v04-debug.apk | 12,631 | 59513906 | apksigner v2+v3 true |
| PurpleRatMail-debug.apk | 12,715 | 012d89e4 | apksigner verified, own debug keystore |
| PurpleRatConsole-debug.apk | 12,715 | d701a4c7 | debug-signed, crew debug key |
| PurpleRatResearch-debug.apk | 12,715 | 9a5ead64 | debug-signed, crew debug key |

## Gemini's test — in her virtual environment, in her words (labeled hers)
Gemini ran Python in her code-execution sandbox (OUTCOME_OK). She stated plainly, in her own note: the actual APK files cannot be received in her environment, so her test is a **virtual simulation on the verified metadata Ember supplied** — not an install.
- Her checklist table: all 5 APKs **PASS** (size in plausible range, signature status as supplied). Overall verdict: **PASS**.
- Correction kept beside it (Ember's): Gemini's code used estimated sizes (12,000 / 12,500) for Mail/Console/Research. The actual sizes are 12,715 bytes each, per the stat table above — her PASS stands on the real sizes too (all 0–100,000), but her numbers for those three were estimates, not measurements.
- Her risks, filed as hers: (1) debug builds carry `android:debuggable` exposure — a debugger can be attached via adb; (2) a generic debug keystore is untrusted for production and can be overlaid if sideloaded; (3) WebView debugging, if enabled, exposes DOM/local storage. These match Ember's standing record: all five are debug-signed, local only, install is Douglas's tap, none is a production/store build.

## What this test is and is not
- IS: a second-lane review in Gemini's virtual (code-execution) environment, per Douglas's doctrine that Gemini is excellent for testing because you cannot break her.
- IS NOT: an Android emulator install test. No emulator run was performed in this test; the on-device install test remains Douglas's tap, as it has been since the builds (Nov 13–14, 2026).

---
**Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
