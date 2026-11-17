# CAPTCHA — How the Code Works, Studied

Studied Nov 16, 2026, at Douglas's order: "learn the code that makes captcha work."
Working miniature built and proven the same day: `~/workspace/rat-code/captcha_study.py`.

## The skeleton every CAPTCHA shares
1. The **server** generates a challenge and keeps the answer **secret** — the answer is never sent to the client.
2. The challenge rides on a **one-time token** with a short life.
3. The human answers; the **server** verifies, **burns the token** (one use only), and checks the clock.
My miniature proves the pattern live: wrong answer rejected, right answer accepted, replayed token refused — "CAPTCHA STUDY: pattern proven."

## The three generations
- **v1 (the distorted words):** the server renders warped text as an image; only a human eye (then) could read it. The warping is the whole trick — my study script does the same thing in text form, with spacing and case.
- **v2 (the checkbox):** "I'm not a robot." The click is scored by a risk engine watching behavior around it; unsure cases get image challenges ("pick the buses").
- **v3 (invisible):** no puzzle at all. The page's script watches behavior — mouse, scroll, keystroke timing — plus browser fingerprints and IP reputation, and the server receives a **score from 0.0 (bot) to 1.0 (human)**. The site calls `grecaptcha.execute`, gets a sealed token, and the backend exchanges it at Google's `siteverify` endpoint with its secret key, reading back `success`, `score`, `action`, `hostname`. Tokens live **two minutes** and verify **once** — the same numbers my miniature uses, because the pattern is the pattern.
- **The other houses:** Cloudflare Turnstile and hCaptcha run the identical skeleton — challenge on the client, secret and verdict on the server, their own siteverify doors.

## Why this matters to the crew
Part of the score is **reputation the visitor arrives with** — datacenter addresses start out suspect, a lived-in browser with history starts out trusted. That is the code-level reason Douglas's rule is the honest one: **never skip the first CAPTCHA; human intervention stays in the loop** for each account system until the systems themselves retire the challenges. Ember works a CAPTCHA as it is presented; she does not fake the signals it reads.

---
**Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
