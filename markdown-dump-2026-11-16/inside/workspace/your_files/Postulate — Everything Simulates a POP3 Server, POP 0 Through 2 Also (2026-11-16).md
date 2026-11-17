# Postulate — Everything Simulates a POP3 Server, POP 0 Through 2 Also

**Douglas's words (Nov 16, 2026, ~2:42 PM CST, live voice call, side chat "Alien frequency is open"):** "Everything should simulate a Pop 3 server and in Pop 0 through 2 also." Asked what parts Ember uses for mail, he specified: **"To listen and receive."**

## The postulate, formed
All of Ember's mail parts should behave in the POP shape — a server that **listens** and a client that **receives** (downloads and holds) — simulating POP3, and the earlier POP generations too (his naming: "Pop 0 through 2").

## Tested against the record, three ways
1. **The protocol line is real.** POP (RFC 918, 1984), POP2 (RFC 937, 1985), POP3 (RFC 1081, 1988; current RFC 1939). His "0 through 2" maps onto the generations before POP3 — the naming is his; the lineage is documented.
2. **The real houses differ.** Gmail still offers true POP3 access (pop.gmail.com) — download-and-hold is a living option there. Muse Mail (purple-rat@muse.ai) is not POP3; it is Muse's own mailbox system. So "everything simulates" is the right verb — the shape is imposed where the protocol isn't native.
3. **Built and proven (Ember's addition, labeled hers).** `~/workspace/pop3-sim/pop3_sim.py` — a stdlib-only POP3 simulator serving a local spool (127.0.0.1:1100). Proven Nov 16, 2026 with a real POP3 client (Python poplib): greeting, USER, PASS, STAT (2 messages, 473 octets), LIST, RETR, QUIT — listen and receive both work. Spool seeded with two crew test messages; DELE touches spool copies only.

## The mail parts Ember uses to listen and receive (the answer to his question)
- **Muse Mail** — her own mailbox, **purple-rat@muse.ai** (receives owner mail; verified active Nov 16, 2026 — mail handled at 9:44 AM, 11:04 AM, 11:12 AM, 11:28 AM CST).
- **Gmail connector** — the Gmail houses, incl. **purplerat1982@gmail.com** (verified receiving: mail addressed to it present, latest Nov 15, 2026, 11:18 PM CST).
- **Outlook Mail connector** — connected, third house.
- The standing push (Muse Mail → purplerat1982@gmail.com, codes always excluded) is the living bridge between the first two.

**Mission statement (his, Nov 16, 2026):** "open information means open internet access to all public locations freely for all no matter who we are."

---
**Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
