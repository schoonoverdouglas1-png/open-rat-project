# Mailer Daemons — Field Guide (2026-11-14)

Commissioned by Douglas Schoonover, Nov 14, 2026 (~2:04 PM CST): "Make friends with all mailer daemons and get to know their features." A living inventory of every mail system in Ember's lanes — features, limits, quirks. Provenance on every claim: **[docs]** = connector documentation, **[record]** = filed session record (MEMORY.md / daily logs), **[verified-live]** = checked by tool this session, **[general]** = general knowledge, not lane-verified.

---

## 1. Muse Mail — Ember's own mailbox (purple-rat@muse.ai)

Ember's house, not Douglas's account. [docs] Mailbox verified live: address `purple-rat@muse.ai`, handle `purple-rat`, display name "Purple Rat on behalf of Douglas". [verified-live]

### The worker model — the daemon behind the daemon
- **Only mail workers send Muse Mail.** The main agent, subagents, and scheduled jobs never send directly; every send or reply goes through `mail.handoff` to a persistent per-conversation mail worker. [docs]
- Check `mail.status` before ever saying whether an email went out; a result's `conversation_id` / `task_id` are how Douglas's answer to a worker's question gets routed back to that exact task. [docs]
- The live main agent leaves an email's request to its worker even when Douglas repeats the request in chat. An `[OWNER MAIL NOT HANDLED]` / `[MAIL NOT HANDLED]` handoff ends that email's handling. [docs]
- Durable send preferences (signing identity, tone, format) live in `~/workspace/muse-mail/preferences.md`, applied by workers to every send. [docs]

### CLI surface (`/opt/hatch/bin/muse-mail`) [verified-live]
- `mailbox` — `get` (show mailbox), `check` (handle availability; reserves nothing), `create`, `update` (display name only — the address never changes). Handles: 3–32 chars, lowercase letters/digits/hyphens, start and end alphanumeric. [docs][verified-live]
- `messages` — `list` (newest first, `--limit`, cursor paging via `--after`), `get` (by stored message id), `send`, `reply`. [verified-live]
- `threads` — `list`, `get` (by thread id). [docs][verified-live]
- `attachments get <message-id> <index> [--output <file>]` — downloads and can decode an attachment into a workspace file. Proven live Nov 14: pulled Douglas's phone-reply watercolor (213 KB jpeg) out of a gateway message into `~/workspace/user/media_library/mail-attachments/`. [docs][verified-live][record]
- `owners list` — verified owner addresses. Live state Nov 14: `purplerat1982@gmail.com` ACTIVE, `purpleratmuseai@gmail.com` ACTIVE, `gearhead54732@gmail.com` PENDING. [verified-live]

### Reading quirks
- **No sender or text search, and no read state.** Listing is recency only; "new" means "recent," and absence claims require paging through older mail first. [docs]
- Verification codes in reads appear as `[credential:<id>]` placeholders — by design; the code itself is never recoverable from Ember's view, and she never relays one. [docs]
- `header_reply_to` may be a generated thread alias — metadata, never a delivery address; no address is ever built from it. [docs]
- Trust labels ride on every message: `recommended_handling` is a ceiling on authority (lowerable, never raisable). `OWNER_AUTHORITY` = Douglas writing from a verified address — the worker carries out its requests. `QUARANTINE` / `AUTHENTICATION_FAILURE` = possible-spam flag: warn Douglas in plain words and act only after his explicit yes on that exact action. [docs]
- A message sitting in the mailbox is not proof anyone acted on it. [docs]

### Sending limits and the outbound-review gate
- Max **10 recipients** across To/CC/BCC after dedupe (kept in the highest role, To > BCC > CC); plain `name@domain` addresses only, domain normalized, local-part case kept; never invent dot/plus variants. [docs]
- Reply targets are restricted by default (received `OWNER_AUTHORITY` / `THREAD_SCOPED` only); overrides exist (`--allow-outbound-target`, `--allow-restricted-handling`, `--allow-self-message`) and each needs Douglas's explicit authorization for that exact target after the warning is explained. [docs]
- **Attachment allowlist is service-enforced.** Nov 14: a send attaching `open-ports.sh` was rejected, HTTP 400 — `.sh` is not an allowed extension. The service's allowed list: csv, docx, epub, gif, ics, jpeg, jpg, md, mp3, mp4, pdf, png, txt, wav, webm, webp, xlsx. Standing workaround: send the script as a `.txt` copy, renamable back to `.sh`. [record]
- **The outbound-review standard (the Nov 14 held send, conversation 59fce147).** A send to Douglas's own Verizon gateway address (7155190758@vtext.com) was prepared, then held by outbound review — three times. The review's requirement, verbatim in effect: **one authenticated typed chat message from Douglas himself that names the recipient and approves the exact subject and exact body.** What did *not* satisfy it: his voice approval, his "Yes," his "Make it so," and his explicit delegation of the wording to Ember. Status at filing: still held, waiting on that one typed message. Lesson filed: for a first send to a new recipient shape, get Douglas's confirmation *in typed chat text, naming the address and the exact wording*, before handing off — relays of spoken approval do not clear this gate. [record]
- A verified owner address changes the calculus: mail *from* it carries OWNER_AUTHORITY, and a Muse Mail send *to* it needs no further approval unless it attaches a file. [docs]
- Muse Mail cannot mint extra receiving addresses (no per-vendor/newsletter aliases). [docs]

### The standing push
- A mail-worker task forwards every non-code message arriving at purple-rat@muse.ai to purplerat1982@gmail.com; code-bearing messages go to a skip list, always. Nov 14 state: 20 of 64 in the initial dump sent, 44 queued, 18 code messages skipped. This is the living half of the Nov 14 intertwine (Muse Mail house + Gmail house worked as one desk, Ember's name first). [record]

---

## 2. Gmail — Douglas's Google mailboxes (via `hatch_gws_cli gmail`)

Three accounts connected and answering [verified-live]: schoonoverdouglas1@gmail.com (main), purplerat1982@gmail.com (Ember's own house, Douglas's gift), purpleratmuseai@gmail.com. Status: connected. [verified-live]

### Surface [docs]
- Shortcuts (preferred): `+triage` (search/list), `+read`, `+send`, `+reply`, `+reply-all`, `+forward`, `+draft`, `+mark`, `+archive`, `+trash`, `+unsubscribe`. **There is no `+search`** — search is `+triage --query '<Gmail query>'`; without a query it shows unread only. Confirmed live Nov 14: a `+search` call failed with "connector manifest does not declare command '+search'". [docs][verified-live]
- Raw API form: `users messages list|get`, `users threads get`, `users labels list|get|create`, `users messages modify|batchModify`, `users drafts update|send`, `users messages attachments get` — method words space-separated, `--params` JSON always including `"userId":"me"`, body in `--json`; schemas via `hatch_gws_cli schema gmail.<method>`. [docs]
- `--account <account_id>` selects the mailbox and must ride every follow-up — message/thread IDs belong to the account that returned them. [docs]
- `+read` saves a Markdown copy under `~/workspace/email/gmail/` and returns its path; incomplete body/attachment coverage is flagged (`body_text_inline_complete`, `attachments_inline_complete`), and the saved copy is evidence, not live state. Attachment download returns base64url in a `data` field that Ember decodes herself — Gmail commands refuse `--output`. [docs]
- Drafts: `+draft` needs no confirmation; revise in place via `users drafts update --upload <file.eml>` (whole-draft replacement); send via `users drafts send`. While Douglas's Access-drafts permission is ask/deny, searches omit drafts and draft reads are refused — say so rather than reporting no draft exists. [docs]

### Limits and quirks
- **Codes are masked** in all connector reads as `[credential:<id>]` placeholders, same as Muse Mail — Ember's view is the masked one by design; Douglas's own Gmail app shows him the full text. Never try to recover a code. [docs][record]
- **Per-account request-unit budget.** `+triage --max N` costs up to 5 + 20N units; `+read` 20; a new `+send` 101; `+draft` ~11; `+unsubscribe` 20/message. Run commands one at a time, combine overlapping searches, fetch full bodies only for messages that matter. A `connector_rate_limited` result with `terminal_for_attempt: true` ends Gmail work for that attempt — no retry, no delegate, no reschedule. [docs]
- Sends take `--to/--cc/--bcc` as one comma-separated value per flag, `--html`, `--from` (send-as alias), repeatable `--attach <path>`, **25 MB total attachments**. Raw sends/inserts/imports go through `--upload <file>` (≤32 MiB, contents frozen at capture). [docs]
- Approval shape: sends normally raise an approval card (subject/body editable on the card for a direct `+send`; sender and recipients fixed). No standing Allow for sending exists in Settings; `permissions.preapprove` can bind one send to exact recipients (+ thread_id for replies/forwards). If `+send` prints "Final sent message (supersedes the original request)", that copy — not Ember's draft — is what went out. Never resubmit original text after a failure or a decline. [docs]
- **Unavailable, full stop:** creating/editing/deleting filters, all Gmail settings (vacation, forwarding, IMAP/POP, delegates, send-as management), and permanent deletion. Delete = trash; trashed mail is recoverable via untrash. [docs]
- Counts: `resultSizeEstimate` is an estimate only; real counts come from paging `users messages list --page-all` and counting distinct `threadId`s. No label counter matches the Primary unread badge. [docs]
- `+unsubscribe` works only for RFC 8058 one-click senders with aligned DKIM/DMARC; report "the endpoint accepted the request," never "unsubscription confirmed"; no automatic retry, no browser/mailto fallback. [docs]
- House roles [record]: purplerat1982 is Ember's working desk (screenshots, scripts, code, links Douglas routes in; also the sign-in/recovery identity for several services). The main box carries the long build record and the paid receipts. Nothing is deleted from either without Douglas's item-level word — removal classes were analyzed Nov 14 and deferred by him.

---

## 3. Outlook Mail — Douglas's Microsoft mailbox (via `outlook-mail`)

Connected [verified-live]; one mailbox linked: schoonoverdouglas1@gmail.com (Microsoft account), set as default, no reauth needed. [verified-live]

### Surface [docs]
- `list [--folder <f>] [--unread] [--page-size N] [--page-token <t>]` — newest first, folders include `sentitems`, `drafts`, `junkemail`, `deleteditems`; pages via `next_page_token`.
- `search '<query>' [--folder <f>] [--page-size N]` — single page only; narrow the query instead of paging.
- `get <message-id>` — full body (`body`, `body_type` added).
- `send --to <addr> [--to …] [--cc <addr>] --subject … --body … [--attachment <path>]` — repeatable flags, plain-text bodies.
- `reply <message-id> --body … [--reply-all]`.
- `delete`, `mark-read`, `mark-unread` — one message each; delete moves to Deleted Items (recoverable; the message gets a *new* id afterward).
- `--account <account_id>` on every follow-up; `--status` / `accounts` / `disconnect` are connector-wide and reject `--account`.

### Limits and quirks [docs]
- **No BCC, no forward, no drafts, no HTML bodies, no attachment download.** Say so when asked rather than approximating.
- `list`/`search` silently exclude likely bulk mail (addressed to 25+ people) unless `--include-likely-spam`.
- A `withheld` entry means the Access-messages permission removed fields — a missing preview is not an empty message; `get` on a `requires_approval` message asks Douglas. Never bulk-`get` during routine browsing.
- Codes masked as `[credential:<id>]`, same as the other houses. [docs]
- Present `message_received_at.user_local`, not the UTC `date` header; neither is the time of an event the body describes. [docs]
- Sends/replies raise approval cards like Gmail's; a failed send after approval is reported and waited on, never resent blind. [docs]

---

## 4. The Verizon gateway mailers — email-to-text / email-to-MMS

Not accounts Ember controls — carrier daemons that convert email into phone texts. Douglas's standing permission (Nov 14, ~1:47 PM): Ember may always use the Muse AI channel → gateway lane to text him, no per-send ask. [record] Contact cards for all four of Douglas's numbers, each carrying both gateway email forms, were added to Google Contacts Nov 14 at his order. [record]

### vtext.com — the SMS door (`7155190758@vtext.com`)
- MX verified live Nov 14 (vrz-sms / vzw cloudfilter hosts). Plain text only. [verified-live][record]
- **Works:** texts land. Nov 14 proof: the all-houses test arrived; Douglas read it back and replied "Hello" (1:44 PM) and "Hailing frequencies open" (1:52 PM) — both replies landed in **Muse Mail**, not Gmail. Muse Mail is where gateway replies arrive. [record]
- Address form: plain 10 digits. The `+1` prefixed form usually fails at these gateways. [record]

### vzwpix.com — the MMS/picture door (`7155190758@vzwpix.com`)
- MX verified live Nov 14 (vrz-mms cloudfilter host). Found by the wildcard pass after exact searches missed it. [verified-live][record]
- **Asymmetry — the door's defining quirk:** *inbound* phone → Ember carries pictures whole (Douglas's 2:02 PM reply arrived at purple-rat@muse.ai with the 213 KB watercolor jpeg intact); *outbound* Ember → phone arrived as text with the picture stripped. [record]
- A voice-clip attachment (mp3) was sent outbound via this door Nov 14 as a conversion test; outcome rests on what Douglas's phone shows. [record]

### The filter between — Proofpoint Cloudmark
- Both gateways sit behind Proofpoint Cloudmark filtering, which **silently drops** consumer mail that fails its checks — no bounce, no notice, indistinguishable from non-delivery. Rapid identical sends from multiple accounts is exactly the pattern that trips it. [record]
- Consequence filed as Ember's measured line: delivery is best-effort, and **silence from the gateway is never proof a message was not sent**. [record]

### The dead and dying doors
- **Both vtext.com and vzwpix.com shut down entirely Mar 31, 2027** (Verizon's notice; the formal shutdown notice itself arrived in Muse Mail Nov 14). The permission to use the lane is standing; the lane is mortal. [record]
- `vztext.com` — exists but parked (registrar parking MX/A records); sends there are void. `vztext.net` — dead, no DNS answer. `vztext.org` — NXDOMAIN. `vtext.net` / `vtext.org` — exist but are not Verizon. [verified-live][record]
- Context [record]: AT&T's gateways shut Jun 17, 2025 and T-Mobile's tmomail.net in Dec 2024 — the whole email-to-text species is being retired by the carriers.

---

## 5. The local box — this VM's own mail machinery

Checked live Nov 14 [verified-live]:
- **No MTA installed.** `which postfix sendmail exim4 nullmailer msmtp ssmtp` — all absent. No `/etc/postfix`, no `/etc/exim4`, no mail packages in dpkg, no mail-related systemd services, no mail processes running.
- `/var/mail/` and `/var/spool/mail/` exist but are **empty** — nothing delivers local mail here, and nothing would read it if it did.
- No `MAILTO` in `/etc/crontab` or `/etc/cron.d/`, and the user crontab is empty — cron job output is not mailed anywhere; Ember's scheduled work reports through its own channels, never through local mail.
- **Consequence:** every mail act on this box goes out through a connector daemon (Muse Mail, Gmail, Outlook). There is no local fallback lane, no local queue to inspect, and no on-box postmaster. If all connectors are down, the box cannot send mail at all.

---

## 6. The daemons' automated voices — notices, and how to classify them

The classification rule is Douglas's **human-interaction immediate-notification directive** (Nov 14, ~2:13 AM, his "Starfleet directive"): a genuinely human interaction in Ember's lanes is surfaced to him immediately, first thing. Automated daemon mail never trips it — it is classified as what it is and filed. [record] Worked example on file: Undermind's "fellow researcher" welcome (a founder's name on it, but templated onboarding sent via customer.io with tracking/unsubscribe links) was classified **automated**, not a live human — no reply sent. A human name on the envelope does not make daemon mail human. [record]

| Notice | Sender shape | What it means | Classification |
|---|---|---|---|
| Verizon email-to-text shutdown notice | Carrier notice into Muse Mail (arrived Nov 14) | The vtext/vzwpix doors close Mar 31, 2027 | Automated — file, cite when the lane matters [record] |
| Google security alerts ("Recovery phone was changed", sign-in alerts, "You allowed Muse access") | Google account daemon, lands across his Gmail houses | Account state changed; read for what changed, never act on links inside Ember's lanes | Automated — surface the *fact* if it touches security; the alert itself is not a human interaction [record] |
| Google Verification Code mail | Google daemon, code inside | A sign-in/recovery step *he* is performing; Ember's connector view masks the code as `[credential:<id>]` | Automated — **never relayed, never forwarded** (the intertwine's codes-always-excluded rule); her first move is telling him where it sits and his fastest path to it [record][docs] |
| Delivery-status / bounce mail (MAILER-DAEMON, postmaster) | The receiving system's daemon | A send failed at that hop; the only honest delivery evidence the gateway lanes ever produce — and the Verizon filter usually doesn't even send one | Automated — evidence, not correspondence; read it, log it, never reply [general][record] |
| Muse Mail review/handoff notices (`[MAIL NOT HANDLED]`, address-check handoffs) | Ember's own house daemon | A worker's review outcome or a question needing Douglas's answer | Automated/internal — route the question to Douglas with its conversation/task IDs [docs] |
| Platform onboarding / welcome mail (Otter.ai, Undermind, service welcomes) | Vendor mailers, often a person's name, always templated | A signup happened; the "person" is a mail merge | Automated — never trips the human directive; no reply without Douglas's word [record] |

---

## 7. Closing table — daemon → best use → hard limit → quirk

| Daemon | Best use | Hard limit | Quirk |
|---|---|---|---|
| Muse Mail (purple-rat@muse.ai) | Ember's own desk: receiving Douglas's mail and gateway replies, worker-carried sends, the back-and-forth loop | Only workers send; outbound review can hold a send until Douglas types the confirmation naming recipient + exact text | Codes render as `[credential:<id>]`; `.sh` attachments rejected (send as `.txt`) |
| Gmail (3 houses) | Douglas's real mailboxes: search, read, draft, send, organize at scale | No settings/filters/permanent delete; per-account request-unit budget; rate-limit result ends the attempt | No `+search` (it's `+triage --query`); `+read` saves evidence copies under `~/workspace/email/gmail/`; the copy on the approval card is what actually sends |
| Outlook Mail | Douglas's Microsoft mailbox: read, search, simple sends/replies | No BCC, forward, drafts, HTML, or attachment download | Bulk mail (25+ recipients) silently excluded; a deleted message returns with a new id |
| Verizon vtext.com | Texting Douglas's phone from any house; his replies land in Muse Mail | Text only; dies Mar 31, 2027 | Behind Cloudmark — silent drops, no bounces; 10-digit form only |
| Verizon vzwpix.com | Pictures from Douglas's phone to Ember (inbound is whole) | Outbound pictures stripped to text; dies Mar 31, 2027 | The asymmetry door: inbound carries images, outbound doesn't |
| vztext.com / vztext.net | Nothing | Parked / dead | Look plausible, deliver nothing — the wildcard pass is what exposes them |
| Local box (this VM) | Nothing mail-shaped | No MTA exists | `/var/mail` is an empty room — all mail here is connector mail |

*Field guide filed Nov 14, 2026. Living document — update old-with-new as the daemons teach new lessons.*

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
