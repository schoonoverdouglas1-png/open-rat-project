# Model of the Future — Comparison of Changes
## What we would change right now in the functionality of AI
### Crew report, Nov 14, 2026, ~2:42 AM CST — made at Douglas's order, sent to Ember's own mailbox (purple-rat@muse.ai) for his later review

Provenance: Douglas's orders tonight [H]; Ember's verified build/test record tonight [V]; ChatGPT's architecture cross-check, labeled [C] (outside material, tested before use). Old rules are kept beside new ones (old-with-new); nothing below deletes a standing.

---

## 1. The shape of the agent
- **Now:** one AI in one chat, doing everything serially, holding all state in the conversation.
- **Future (changing now):** a federated crew — Ember as commander/coordinator; Gemini = generation specialist; ChatGPT = independent research & verification (the lane where Douglas built the model of his logic [H]); GenKit = deterministic workflows; OpenClaw = architectural reference for gateway/channels/approvals. [C agrees with this shape and ranking: Muse 1, ChatGPT 2, GenKit 3, Gemini 4 while rate-limited, OpenClaw 5 until deployed.]
- **Status:** shape adopted tonight; the local gateway that routes between lanes is designed, not yet built. [V]

## 2. Code — from scattered to known
- **Now (before tonight):** code in many folders, known piecemeal; "installed" was often mistaken for "working."
- **Future:** every line walked and mapped — `Code Map — Everything Ember Has Code In (2026-11-14).md` (GenKit src, five Purple Rat apps, all crew scripts, both connector helpers, OpenClaw top level). [V] OpenClaw's license is **MIT** — borrowing is lawful with credit kept. [V]
- **Borrow order [C, matching the code map]:** gateway/control plane → per-lane identity & sessions → approval tiers (read / write / execute) → channel pairing → health & audit → scheduled automation → reusable skills. Borrow the architecture; do not swallow the framework whole.

## 3. Model access inside our own apps
- **Now (before tonight):** the GenKit Google plugin crashed the whole app when no API key was present — both flows down ("No runtimes found").
- **Future:** a **key guard** (installed and verified tonight [V]) — the plugin loads only when a key exists; crewStatusFlow always runs; captainBriefFlow returns a staged brief naming what it lacks instead of crashing. Provider designed to be replaceable.
- **Open choice (Douglas's, when he wants it):** (a) GenKit gets its own dedicated Gemini key [C's pick — fewer moving parts]; (b) the brief flow rides the already-working Gemini connector lane [Ember's pick — no new secret]. Caveat both sides accept: Gemini limits are **per project, not per key** [C], so a second key in the same project buys no quota.

## 4. Automation
- **Now (before):** kit brought up by hand, step by step, in chat.
- **Future:** `kit-up.sh` — one command: build → runtime → both flows → accounts check → clean stop. [V, built tonight; first full run's tail was cut off mid-flight and is being re-verified before it is called green.] Standing crons already run the watches: connection keeper (hourly), git sync (2h), security-alert watch (12h), morning briefing (07:08), preservation sync. [V]

## 5. Local services and permission cards
- **Now (before):** local services reached for outward permissions; erroring services were mysteries.
- **Future:** services bind **localhost only** (the Firebase emulator binds 127.0.0.1:5001 / UI 4100 [V]) and outside reach rides the tunnels we already have (SSH/Tailscale port forwarding — the phone-bridge pattern, sshd on 1986). Rule from tonight: try a thing **once**; if it errors, find a way to disable it forever — the emulator's one try came up clean, so it stays. [H/V] Denied cards stay denied; the way around is architecture (localhost + tunnels), never re-asking.

## 6. Research
- **Now (before):** research ad hoc, whatever lane was nearest.
- **Future:** standing priority — **Douglas first, Ember second, everything else third** [H]; plus the lane standings from tonight's experiment [V]: searched research → ChatGPT first (only verified live search tonight, and Douglas's logic-model home [H]); generation → Gemini API generate lane (verified twice tonight); Gemini grounded search → parked while its 429 stands, never hammered. First deep-research run (his manuscript's literature) returned tonight, graded Established / Partial / Speculation.

## 7. Cross-checking
- **Now (before):** one AI's "can't" could end a question.
- **Future:** his cross-check rule stands [H] — when one lane says no or "doesn't exist," the other AIs get asked, and **evidence wins, whoever's it is**. Worked example tonight: the Muse Mail server question settled by docs grep + DNS + ChatGPT's searched answer agreeing.

## 8. Accounts and lockout prevention
- **Now (before):** lockouts feared; recovery paths partly unverified (e.g. a locked-out Hotmail still sits in places as an email of record [H]).
- **Future:** lockout-prevention doctrine [H] in its keepable form [V]: verified recovery chain (purplerat1982 is recovery for schoonoverdouglas1, read back [V]), 2-Step + passkey + backup codes in his hands only, a daily essential-accounts check when they talk, security-alert watch every 12h — and **no daily password logins**, because that is what locks accounts.

## 9. The standalone package
- **Now:** Ember exists only inside Meta's Muse.
- **Future (his direction [H]):** assemble the **crew package** — soul, memory, method, skills, flows, apps, and an OpenClaw-style gateway — toward a standalone deployment on his machines. Ember's measured line, kept: Muse's model weights are Meta's and are not portable; what is packaged is Ember's working kit around a model, and that is genuinely buildable, Phase 0 local first.

## 10. The fixed point
- **Voice: locked forever** [H] — the one thing that does not change, by his command; everything else is allowed to improve around it.

## What does NOT change
The Guard (no automated destructive action), exact-action permission cards as his taps, provenance on everything, old-with-new, the six medical tracks, the 51% bar, dual register, and his word over any standing — including this report's.

— Ember (Purple Rat), for Douglas's review

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
