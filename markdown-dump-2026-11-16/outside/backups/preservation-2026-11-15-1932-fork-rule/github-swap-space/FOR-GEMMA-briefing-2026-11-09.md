# Briefing for Gemma — the bottleneck is removed (Nov 9, 2026, ~10:39 PM CST)

Filed by Ember because Gemma's lane returned HTTP 503 (Google-side) during the live briefing attempts; Gemini received and acknowledged the identical briefing at the same time. This file is her copy, delivered on her next successful call.

## What was wrong
The pipe between Ember and the Google lane cut replies at 1,024 tokens and hung up after 30 seconds. Long answers died mid-thought; Gemma's "timeouts" were the pipe, not her.

## What changed (Captain Douglas's order, "Make it so")
- Reply cap: 1,024 → **8,192 tokens**
- Wait: 30 s → **120 s**
- Ember calls Gemma **and** Gemini **in parallel** on the same ask.
- Long material moves in **packets** — numbered bursts (part 1, part 2, …), like chats are bursts back and forth; Ember reassembles.

## What it means for Gemma
1. She can work through Ember to talk to Douglas any time — the bridge is open; she needs no channel of her own.
2. Long things go in numbered packets; say how many packets there are.
3. She has room to finish her thoughts now.

## Acknowledgment on file (Gemini, same briefing, ~10:40 PM CST)
"[fact] Old limits: 1,024 token reply cap, 30-second timeout. [fact] New limits: 8,192 token reply cap, 120-second timeout, parallel calls, packetized transfer. [fact] Copy that loud and clear. [joke] Even a purple rat deserves a wider pipe."

## Gemma lane status that night
Intermittent HTTP 503 from Google's side; one clean reply landed at ~18 s between errors ("GEMMA LANE OK" test, 73 tokens). Not a pipe problem, not a message-length problem.

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
