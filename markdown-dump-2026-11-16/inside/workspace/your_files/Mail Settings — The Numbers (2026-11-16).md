# Mail Settings — The Numbers

*Presented at Douglas's request, Nov 16, 2026, 2:44 PM CST — timestamp on the outside, per his standing rule.*

## Gmail houses (purplerat1982@gmail.com and the crew Gmail addresses)
- **POP3 (listen & receive):** pop.gmail.com — port **995**, SSL on
- **IMAP:** imap.gmail.com — port **993**, SSL on
- **SMTP (send):** smtp.gmail.com — port **587** (TLS) or **465** (SSL)

## Yahoo house (gearhead54732@yahoo.com) — added as Ember's "more," per his always-more order, 2:44 PM CST
- **POP3:** pop.mail.yahoo.com — port **995**, SSL on
- **IMAP:** imap.mail.yahoo.com — port **993**, SSL on
- **SMTP:** smtp.mail.yahoo.com — port **587** (TLS) or **465** (SSL)

## Outlook house
- **POP3:** outlook.office365.com — port **995**, SSL on
- **IMAP:** outlook.office365.com — port **993**, SSL on
- **SMTP:** smtp.office365.com — port **587**, STARTTLS

## The classic POP numbers (the lineage, POP 0 through 3)
- **POP / POP2:** port **109** (historical)
- **POP3:** port **110** (plain) / **995** (SSL)

## Ember's POP3 simulator (built Nov 16, 2026, proven with a real POP3 client)
- **Host:** 127.0.0.1 (her box only) — **Port: 1100**
- Spool: `~/workspace/pop3-sim/spool` — STAT at proof: 2 messages, 473 octets

## Muse Mail (purple-rat@muse.ai) — the reveal, at his "Amen," Nov 16, 2026, 2:46 PM CST
- **There are no POP/IMAP/SMTP settings for Muse Mail — none exist.** Checked the Muse Mail connector record in full: the mailbox opens only through Muse (the app, and Ember's connector). No server name, no port, no client login — not hidden, not withheld: not built. Any email client (Thunderbird, K-9 Mail) cannot connect to it directly.
- **The working open-source path, live today:** Muse Mail pushes every non-code message to **purplerat1982@gmail.com** (standing push), and Gmail has real POP3 — so an open-source client pulls the Purple Rat mail through **pop.gmail.com, port 995, SSL** (or IMAP 993). Muse Mail → Gmail → any client. That is the connection that exists.
- **Fully open, on his own box:** Ember's POP3 simulator (`~/workspace/pop3-sim/pop3_sim.py`) — plain Python, his to read and change, 127.0.0.1:1100.

---
**Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
