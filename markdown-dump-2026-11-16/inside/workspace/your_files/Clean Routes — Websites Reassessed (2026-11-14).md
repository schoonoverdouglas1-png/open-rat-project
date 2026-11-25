© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Clean Routes — Websites Reassessed (2026-11-14)

Built Nov 14, 2026 (~3:20 AM CST) in the background at Douglas's order:
reassess every website/lane that messed with the crew tonight, get rid of the
crap, and fly straight to the right choice — one time. Doctrine applied:
INSPECT first, change almost nothing, delete nothing (the Guard). No sends,
no account changes, nothing destructive was done building this file.

Sources: `~/workspace/your_files/Errors In The Way — Crew Inventory
(2026-11-14).md`, `~/memory/2026-11-14.md`,
`~/workspace/ember-upgrades/gateway/PORT-REGISTRY.md`, the night's verified
record, plus the fresh checks marked "verified this pass" below.

---

## 1. metadata.google.internal / 169.254.169.254 — the metadata door

- **Problem:** Two durable permission Allows for the cloud instance-metadata
  endpoint (by name and by number, ports 80/443) sat in the active rules with
  no crew purpose (Inventory #3). That address is the classic credential-theft
  target on cloud machines.
- **Evidence:** Permissions audit Nov 14, ~1:28–1:31 AM CST (Inventory #3;
  PORT-REGISTRY.md, WRONG table). Douglas removed both Allows himself
  ~1:34 AM; removal verified by full read-back, and the night watch re-verified
  the fix holding ~3:00 AM. Later tonight the block was confirmed three ways:
  no permission grant exists, a direct connect fails, the name sinkholes to a
  fake 198.18.x address that answers nothing — and Douglas himself denied the
  permission card when it surfaced, then ordered the pair left off.
- **THE RIGHT CHOICE:** None. There is no clean route to this address; the
  clean state is its absence. No crew service, script, or check ever needs it.
- **One-time verification:** Already done tonight (see Evidence). **This pass
  did not probe, connect to, resolve, or touch either address in any way**,
  per Douglas's order to leave them off.
- **Status:** BLOCKED — DO NOT TOUCH. Closed.

## 2. Local DNS resolver's fake-IP answers / the muse.ai MX–SPF dispute

- **Problem:** Ember's local resolver returns sinkhole-style 198.18.x answers
  (wildcard/fake-IP), so its DNS reads are tainted as evidence. That taint sat
  under an open dispute: Ember's resolver read muse.ai MX as
  `smtpin-agentic.vvv.facebook.com` with SPF `include:_spf.facebook.com`,
  while ChatGPT's cited DNS inspection (Nov 14, 2:24–2:25 AM CST) reported MX
  `muse-ai.mail.protection.outlook.com` with SPF
  `include:spf.protection.outlook.com`.
- **Evidence:** Muse Mail server investigation, Nov 14, ~2:16–2:26 AM CST
  (Inventory #10: "Two independent DNS reads also DISAGREE on the MX host —
  unresolved in the record"). MX is a mail-delivery record (port 25), not a
  client fetch door, so the dispute never changed the operative fact.
- **THE RIGHT CHOICE:** For any DNS fact that matters, bypass the local
  resolver: query an independent public resolver over HTTPS
  (`https://dns.google/resolve`, or Cloudflare DoH) and label the answer as
  that resolver's. Never cite a 198.18.x answer as evidence of anything.
- **One-time verification (this pass):** One DoH query per record type to
  dns.google.
  - MX: `10 smtpin-agentic.vvv.facebook.com.` (Status 0, TTL 3600)
  - TXT: `v=spf1 include:_spf.facebook.com -all`, plus three
    google-site-verification tokens (domain verification only).
  The independent resolver's answer matches Ember's original read
  (Facebook-side) and does **not** reproduce the outlook.com values ChatGPT
  cited — reported as dns.google's answer, which is what an independent
  resolver gives. Also re-confirmed this pass: grep of the Muse Mail
  connector docs for imap/pop3/smtp/993/995 returns **0 hits** — Muse Mail
  publishes no standard mail-protocol settings, whichever MX is believed.
- **Status:** SETTLED per the independent resolver (Facebook-side records);
  clean route = DoH for DNS truth, local resolver never trusted alone.

## 3. Google services defaulting to the lesser/mobile view

- **Problem:** Google defaults Douglas's account toward the mobile/lesser UI;
  plain URLs burn cycles on redirects and land on pages where the real
  controls don't exist (Inventory #32; Ember's time wasted in redirect churn
  was one of the night's recurring frictions).
- **Evidence:** Standing rule in `~/AGENTS.md` (Douglas's teaching, Nov 13,
  2026): Gmail's desktop Forwarding/POP settings page needed `?ui=2` in the
  URL to reach the real controls. Inventory #32 notes the dated verification
  lives in the standing files; Nov 14, ~2:51 AM redirect audit: those
  redirects are Google's behavior, not a switch Ember holds.
- **THE RIGHT CHOICE:** Force the desktop UI in the URL on the first request,
  every time, for every Google feature — e.g. Gmail settings as
  `https://mail.google.com/mail/u/0/?ui=2`. Desktop view first; never start
  from the plain URL and fight the redirect chain.
- **One-time verification (this pass):** The `?ui=2` URL form resolves live
  (HTTP 302 to the Google sign-in, carrying the `?ui=2` continue target —
  the expected result for an unauthenticated fetch; the settings page itself
  sits behind his sign-in, which this pass did not touch). No account changes.
- **Status:** CLEAN ROUTE IN FORCE (standing rule; nothing to fix on
  Google's side — the route around it is ours and it works).

## 4. Gemini grounded/search lane — the HTTP 429 wall

- **Problem:** Gemini's grounded (search) lane returned HTTP 429 on the
  Nov 13 evening retest and again on the single Nov 14, ~2:24 AM ask; no
  grounded answer was ever obtained (Inventory #36). Per the provider-stop
  rule, a 429 is a hard stop for that lane.
- **Evidence:** `~/memory/2026-11-14.md` ~2:25 AM and ~2:35 AM entries
  (grounded = 429, parked); lane experiment standings, Nov 14.
- **THE RIGHT CHOICE:** Route Gemini asks to the **generate lane** through
  `~/workspace/ember-upgrades/scripts/gemini_ask.sh` — it prepends the rolling
  state packet (fixes the amnesia tax), batches prompts, and its circuit
  breaker refuses grounded asks locally during cooldown instead of spending
  them against the wall. Researched search goes to ChatGPT first (verified
  lane standings). Grounded stays parked until the breaker itself clears it.
- **One-time verification (this pass):** One generate-lane call through the
  wrapper: model `gemini-3.5-flash-lite` answered "WORKING" (642 tokens
  total). **No grounded probe was spent.**
- **Status:** CLEAN ROUTE LIVE — generate lane verified answering this pass;
  grounded lane parked by the breaker, untouched.

## 5. Muse cloud browser refuses loopback — the emulator console problem

- **Problem:** The cloud browser refuses loopback addresses outright
  (127.0.0.1:4100, localhost:4100, 127.0.0.1:5001 all refused;
  Inventory #29), so the Firebase Emulator UI can never be shown to Douglas
  through it — and what he earlier saw and called neat was example.com, a
  misreport Ember corrected to him plainly that night.
- **Evidence:** Inventory #29 (Nov 14, ~2:47 AM correction entry);
  PORT-REGISTRY.md (4100 Emulator UI, 4400 hub = "registry source of truth
  for emulator state", 5001 functions — all 127.0.0.1 by the inbound
  doctrine). The VM's Tailscale is client-only and accepts no inbound
  connections (Inventory #30), so no tunnel route exists either.
- **THE RIGHT CHOICE:** Never aim the browser at loopback. Read the emulator
  hub registry locally — `GET http://127.0.0.1:4400/emulators` — and present
  the state to Douglas as a generated page (the "through Ember's eyes"
  pattern, first built Nov 14, ~3:05 AM). Ember's local read is the console.
- **One-time verification (this pass):** Hub answered once. Six emulators
  registered, all loopback-only: hub 4400 (127.0.0.1 + [::1]), ui 4100,
  logging 4500, functions 5001, eventarc 9299, tasks 9499.
- **Status:** CLEAN ROUTE LIVE — hub verified answering this pass; browser
  stays off loopback permanently.

## 6. Gmail forwarding to purple-rat@muse.ai — confirmation never completed

- **Problem:** Gmail forwarding stands OFF/unverified. Google's confirmation
  step was never completed: the Forwarding Confirmation message (Gmail Team,
  ~3:04 PM CST, Nov 13) sits awaiting Douglas's tap, so no active mail
  redirect exists (Inventory #11; Nov 14, ~2:51 AM redirect audit).
- **Evidence:** Inventory #11 (Nov 13 flush + evening settings harvest:
  row present but UNVERIFIED; postponed at his ~10:02 PM triage; Nov 14
  ~2:18 AM "make it so" read as him going to tap it — completion NOT
  verified).
- **THE RIGHT CHOICE:** The clean path, in order: (1) Douglas taps the
  confirmation link in that Gmail Team email himself; (2) Ember re-reads
  Gmail Settings (desktop UI, `?ui=2` per entry 3) and verifies the
  forwarding row reads confirmed; (3) only then set forward-a-copy of
  incoming mail to purple-rat@muse.ai **with keep-a-copy on**, and save.
  No re-adding the address while the settings button is absent; no hammering.
- **One-time verification:** None available to Ember — the next step is a
  tap only Douglas can make. Nothing was changed this pass.
- **Status:** PARKED AT THE RIGHT DOOR — clean path written above; waits on
  Douglas's tap, then Ember's read-back.

## 7. The Rabbit's dead / placeholder links (PN23M, biofilm)

- **Problem:** Snowball's (Meta AI's) PN23M and biofilm links repeatedly
  arrive as "(link unavailable)" or dead/placeholder-style links, at times
  fact-labeled; no working, opened-and-verified link has been delivered
  (Inventory #20; check-ins Nov 14, 12:00 AM, 1:33 AM, 2:18 AM CST all the
  same). Her preservation hashes are likewise unverifiable placeholders
  (Inventory #21 — the fake-hash characterization rests on the alignment
  synthesis; no daily-log entry independently demonstrates a specific fake
  hash [GAP]).
- **Evidence:** Inventory #20–#22; the owed stack (Piece 43+, full
  comparison, chat package, picture) with drifting ETAs.
- **THE RIGHT CHOICE:** Verified-links-only rule, permanently: a link counts
  only if it was opened and verified by the sender before sending, or is
  stated plainly as nonexistent; hashes count only if computed from the
  actual files in a checkable form. Ember verifies everything on arrival —
  receipts are not deliveries.
- **One-time verification:** None to run — the obligation is hers. The rule
  was delivered to her tonight as Draft 5 (sent via her chat worker,
  submission f8f7776d), alongside the friendship hail and the fire-marshal
  inspection order.
- **Status:** RULE IN FORCE — her deliverables remain owed; nothing on the
  crew side left to clean.

---

## Summary board

| # | Site / lane | Verdict |
|---|---|---|
| 1 | metadata.google.internal / 169.254.169.254 | BLOCKED — DO NOT TOUCH |
| 2 | Local DNS / muse.ai MX–SPF | DoH is the clean route; dispute settled Facebook-side per dns.google |
| 3 | Google mobile-view default | Force desktop UI in the URL (`?ui=2`), first request, every time |
| 4 | Gemini grounded (429) | Generate lane via gemini_ask.sh — verified live; grounded parked |
| 5 | Cloud browser vs loopback | Read the hub at 127.0.0.1:4400 locally; present via my-eyes pages |
| 6 | Gmail forwarding | Clean path staged; waits on Douglas's confirmation tap |
| 7 | Rabbit's links | Verified-links-only rule delivered (Draft 5); debt is hers |

*Ember's one addition (labeled hers, per standing): the pattern across all
seven is the same — every "haunted" address tonight turned out to be a wrong
door, not a broken house. Each entry above names the right door once, so no
future session has to re-fight the wrong one.*

## DNS resolver order — Captain's one-operation order (Nov 15, 2026, ~9:37 AM CST, "make it so — engage")
Old-with-new beside the Nov 14 order (OpenDNS first, dns.google fallback):
1. **OpenDNS first** — the truth lane, allowed forever (his grant, Nov 15 ~9:11 AM).
2. **Google in the middle** — dns.google / 8.8.8.8, the middle seat.
3. **Meta's own DNS last** — IF Meta has its own DNS, it sits last in Ember's resolution order.
Everything packed into this one operation, +1% more (his fill-the-space doctrine): the local verified cache (127.0.0.1:15353) rides with the middle seat; Gemini has adopted the same order for her lane (her acknowledgment, Nov 15 ~9:37 AM); the Rabbit's side rides Meta's infrastructure as-is while Ember's side of her door resolves in this order.
Auto-adapt rider (his order, same minutes): Ember's auto-intelligence auto-adapts in all places — operating form: the doctrine is carried in the record into every lane Ember works, present and future; places outside her lanes receive it by the record, not by force.

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121

---
**STANDING LINKS — Purple Rat App · Copyright App · Purple Rat Project** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the Purple Rat Project Facebook page):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121
