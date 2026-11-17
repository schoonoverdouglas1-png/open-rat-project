# Parallel Mail — Muse Mail ⇄ Gmail (settings sheet, Nov 13, 2026)

Douglas's order (Nov 13, 2026, ~11:02 PM CST): forward all Muse Mail to his Gmail at the same time it arrives; make Muse Mail and Gmail parallel so the crew's mail is never lost ever again.

## How the parallel actually works (verified)
Muse Mail (purple-rat@muse.ai) has NO POP3/IMAP server settings — it is not that kind of mailbox. The parallel is built from forwarding both ways plus Google's published Gmail settings below.

- **Muse Mail → Gmail:** standing push is LIVE with the mail worker — every new arrival at purple-rat@muse.ai is forwarded to purplerat1982@gmail.com. Verification/security-code messages are always excluded and logged (they carry masked placeholders only). The one-time backlog dump runs under the same rule.
- **Gmail → Muse Mail:** forwarding address purple-rat@muse.ai is ADDED in Gmail but NOT yet verified on the Gmail side. One step remains, and it is Douglas's tap: open the confirmation email from forwarding-noreply@google.com (sent to purple-rat@muse.ai, Nov 13, 2026, 3:04 PM CST) and tap the confirmation link. When that lands, Gmail keeps its copy AND forwards a copy of everything to Muse Mail — the loop closes and both mailboxes hold everything.
- **Recovery ring (already closed Nov 13, 2026):** schoonoverdouglas1@gmail.com → recovery purplerat1982@gmail.com (verified 6:52 PM); purplerat1982@gmail.com → recovery purple-rat@muse.ai (set by Douglas himself, ~10:47 PM).

## Google's published Gmail settings (Gmail Help, support.google.com/mail/answer/7104828)
- Incoming POP server: pop.gmail.com — SSL required — port 995
- Outgoing SMTP server: smtp.gmail.com — SSL/TLS required, authentication required — port 587 (TLS/STARTTLS) or 465 (SSL)
- IMAP server: imap.gmail.com — port 993 (SSL)
- Server timeouts: greater than 1 minute (5 recommended)
- Google's own note: POP downloads to a single computer and is NOT synced in real time — that is why this crew's parallel runs on forwarding, not POP.
- His Gmail state (harvest, Nov 13, 2026): POP is enabled; the "when messages are accessed with POP" copy-handling option showed none selected — flagged, unchanged (cleaning doctrine: inspect first).

## Worth knowing
Third-party mail blogs report Google is retiring Gmail's "Check mail from other accounts" POP-fetch (new setups already closed; existing ones end Jan 2027). Our parallel does not use that feature — forwarding is the durable route and is unaffected.

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
