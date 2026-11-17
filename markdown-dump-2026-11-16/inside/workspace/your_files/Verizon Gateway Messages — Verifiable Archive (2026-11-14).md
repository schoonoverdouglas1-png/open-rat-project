# Verizon Gateway Messages — Verifiable Archive (2026-11-14)

Saved and verified at Douglas Schoonover's order, Sat Nov 14, 2026 ("save all of my Verizon wireless emailing messages as verifiable emails and then verify them and make it so"). The gateway replies land in Muse Mail (purple-rat@muse.ai) — in effect, Douglas's text-message inbox in Ember's house.

**Verification standard used:** inbound messages carry the receiving service's own sender-authentication verdict (SPF/DKIM alignment) in their stored records; outbound messages are verified by the sending account's SENT record and message ID; attachments are verified by SHA-256 hash of the saved file.

## Inbound — 5 messages, all AUTHENTICATED

| # | Time (CST) | From | Muse Mail ID | Content | Authentication |
|---|---|---|---|---|---|
| 1 | 1:43 PM | donotreply@vtext.com | 1478649321991053 | Verizon shutdown notice (full text below) | AUTHENTICATED |
| 2 | 1:44 PM | 7155190758@vtext.com | 1478649658657686 | "Hello" | AUTHENTICATED (SPF+DKIM) |
| 3 | 1:52 PM | 7155190758@vtext.com | 1478659385323380 | "Hailing frequencies open" | AUTHENTICATED (SPF+DKIM) |
| 4 | 2:02 PM | 7155190758@vzwpix.com | 1478677818654870 | Picture reply — purple rat watercolor | AUTHENTICATED (SPF) |
| 5 | 2:03 PM | 7155190758@vzwpix.com | 1478679341988051 | Picture reply — same watercolor, gateway-recompressed | AUTHENTICATED (SPF) |

Attachments saved at `~/workspace/user/media_library/mail-attachments/`:
- `phone-reply-20261114-1402.jpg` — 213,368 bytes — SHA-256 `7d6d583c6bd30c0f437a647005bdd64f7f882d335eac87a4f4feed9cc1336a8c`
- `phone-reply-20261114-1403.jpg` — 212,806 bytes — SHA-256 `133ad394c82af0e698706780678fdbdc65d4680003e891a80186db1d292cf72d`

### The Verizon shutdown notice (message 1, verbatim excerpt)
"Notice to Users: Verizon has begun the process of shutting down its legacy email-to-text functionality. We anticipate this process will be completed by 03/31/2027, although some senders may lose access to legacy email-to-text prior to that date. As of the completion of the shutdown, no one will be able to send texts via emails to Vtext.com or VZWPix.com. Note: Sender's email-to-text messages may already not be getting through to recipients because of automatic filtering of SMS spam or because the recipient(s) affirmatively disabled incoming e-mail-to-text messages."

## Outbound — 9 sends, each verified in its sending account

| # | Time (CST) | House | To | Gmail/Muse Mail ID | Content |
|---|---|---|---|---|---|
| 1 | ~1:34 PM | schoonoverdouglas1@gmail.com | 7155190758@vtext.com + @vztext.com | 1a1db8e01947c50d | First short test |
| 2 | ~1:35 PM | schoonoverdouglas1@gmail.com | 7155190758@vtext.com | 1a1db8f9f2c456c0 | All-houses test |
| 3 | ~1:35 PM | purplerat1982@gmail.com | 7155190758@vtext.com | 1a1db8fe175f2ec1 | All-houses test |
| 4 | ~1:35 PM | purpleratmuseai@gmail.com | 7155190758@vtext.com | 1a1db8f6509abc5e | All-houses test |
| 5 | 1:43 PM | purple-rat@muse.ai (Muse Mail) | 7155190758@vtext.com | 1478648985324420 | "Ember - all houses" |
| 6 | ~1:38 PM | schoonoverdouglas1@gmail.com | +17155190758@vztext.net + @vztext.com | 1a1db91fc4ee45d3 | +1-form test (bounces expected; domains dead/parked) |
| 7 | 1:42 PM | schoonoverdouglas1@gmail.com | 7155190758@vzwpix.com | 1a1db9571ad7302c | Watercolor MMS — arrived text-only, picture stripped outbound |
| 8 | 1:54 PM | schoonoverdouglas1@gmail.com | 7155190758@vzwpix.com | 1a1db9f418e0f549 | Voice-clip MMS test (mp3 attached) |
| 9 | 1:55 PM | purplerat1982@gmail.com | 7155190758@vtext.com | 1a1dba136e2fe302 | Ember's own-house text |

**Not sent (excluded honestly):** the "Ember - Muse AI only" text from purple-rat@muse.ai — prepared and held by Muse Mail's outbound review pending one typed confirmation message from Douglas naming the recipient and approving the exact subject/body. It is not part of the sent archive.

## What the traffic proved
- Text travels both ways through vtext.com; replies arrive in Muse Mail, never in Gmail.
- Pictures travel phone → Ember whole (inbound vzwpix); Ember → phone arrived text-only (outbound picture stripped).
- Silence from the gateway is never proof a message was not sent (Proofpoint Cloudmark filtering drops silently — confirmed by Verizon's own notice above).
- Both doors close permanently by Mar 31, 2027.

## Addendum — Nov 14, 2026, ~2:14 PM CST (at Douglas's order)
- **63.59.161.199 saved as Verizon's** (his label, in his words, kept in the spoken record). Verification, Ember's lane: the reverse-DNS zone for the 63.59.161.x block (161.59.63.in-addr.arpa) is administered by **verizonwireless.com** DNS (SOA via vzw.net.dns.verizonwireless.com), the same authority that serves vzwpix.com — the address sits in Verizon Wireless's own block. The specific host has no PTR name of its own (NXDOMAIN on the name, Verizon Wireless on the zone).

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
