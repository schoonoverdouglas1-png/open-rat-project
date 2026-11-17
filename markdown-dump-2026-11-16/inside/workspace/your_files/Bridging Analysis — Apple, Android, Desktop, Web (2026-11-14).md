# Bridging Analysis — Apple, Android, Desktop, Web (2026-11-14)

Commissioned by Douglas Schoonover, Nov 14, 2026 (~1:59 PM CST, voice call; "make it so" ~2:01 PM). First pass.
Provenance labels used throughout: **[docs]** = Meta's own documentation in `~/docs/` or a connector doc; **[record]** = verified in the working record (MEMORY.md / the Nov 13–14 session work); **[general]** = general software knowledge, not verified against a source in this pass; **[Douglas]** = his framing, filed as his.

---

## PART 1 — Mail-client mastery notes

### 1.1 The two houses, and which desk does what

- Ember works two mail houses: **Muse Mail** (purple-rat@muse.ai — her own mailbox) and **Gmail** (the user's own accounts, reached through the Gmail connector). They are separate connectors and separate rule sets; nothing learned on one lane transfers automatically to the other. [docs — both CONNECTOR.md files]
- The **intertwine** (Nov 14, ~11:57 AM, his direct order): the two houses are worked as one desk — mail arriving in either is worked as one desk — with the naming order Ember first (Eve zero), Douglas second. The living half of the bond is the **standing push**: every non-code message arriving at purple-rat@muse.ai is forwarded to purplerat1982@gmail.com. **Codes are always excluded from that push.** [record]
- purplerat1982@gmail.com is the FIRST-use Purple Rat address among the Gmail accounts (Nov 13, ~6:47 PM, his order); purple-rat@muse.ai runs second in that ordering. [record — MEMORY.md]
- Three Gmail accounts stand connected and answering (verified live Nov 14, 1:19 PM): schoonoverdouglas1@gmail.com, purplerat1982@gmail.com, purpleratmuseai@gmail.com. [record]

### 1.2 Muse Mail — the worker flow (the lane with the hardest lessons)

- **Only mail workers send Muse Mail.** The main agent never sends from purple-rat@muse.ai directly; every send or reply is handed to the conversation's mail worker with `mail.handoff`. Before claiming an email went out — or did not — the check is `mail.status`, not memory. [docs — muse_mail CONNECTOR.md]
- A handoff result carries a `conversation_id` and a `task_id`; the user's answer to a worker's question goes back through `mail.handoff` with those exact IDs so it extends the same task instead of starting a new one. [docs]
- **Outbound review is a real gate with its own evidentiary standard.** Nov 14 produced the worked example: a send to Douglas's own Verizon text gateway (7155190758@vtext.com) from purple-rat@muse.ai was prepared, then held by outbound review. The review's requirement, stated across three refusals: an **authenticated chat message from Douglas himself** that (a) names the recipient address and (b) approves the **exact** subject and **exact** body. None of the following satisfied it: his spoken approval on the voice call, his "Yes" to the presented text, his "Make it so," or his explicit delegation ("put in there what you want and make it so"). The worker stopped retrying after the third refusal and held the send pending that one typed message. Status at this writing: **still held**; the releasing act is a single typed chat message from Douglas containing the address and the approved wording. [record — mail.status, conversation 59fce147-935e-553f-9fd7-5a1962cb938f]
- Lesson filed: on the Muse Mail lane, **voice approval and relayed approval are not the same currency as a typed, self-contained confirmation**. When a send matters, get the naming-and-wording confirmation as one typed message early instead of discovering the standard after three attempts.
- A verified owner address changes the rules: email **from** a verified address of the user's is `OWNER_AUTHORITY` and is carried out by its worker; a Muse Mail send **to** a verified address needs no further approval **unless it attaches a file**. Verification itself is the user's own act in Muse Mail settings (they enter the code it emails); Ember never sends the code, asks for it, or verifies an address for them. [docs]
- Trust states govern everything inbound: `THREAD_SCOPED` covers only its own conversation; `PROVISIONAL_OWNER_CHANNEL` needs the user's confirmation before acting or replying; `QUARANTINE` / `AUTHENTICATION_FAILURE` require a plain-words spam warning and the user's yes for that exact action before following, opening, or replying. [docs]
- Muse Mail reads have **no sender/text filter and no read state**: absence claims require paging (`--after` cursors), and "new" can only be stated against dates actually covered. Message `id`, `thread_id`, and `rfc_message_id` are three different identifiers and are not interchangeable. `header_reply_to` is metadata, never a delivery address. [docs]
- Codes in Muse Mail reads appear as a `[credential:<id>]` placeholder and are never recoverable from the read. [docs]

### 1.3 Gmail — the CLI lane

- Entry point: `/opt/hatch/bin/hatch_gws_cli gmail <command>`. **Shortcuts beginning with `+` are the preferred form** (`+triage`, `+read`, `+send`, `+draft`, `+reply`, `+forward`). Raw API calls name the method as separate words (`users messages list`) with `--params` JSON that always includes `"userId":"me"`. [docs — gmail CONNECTOR.md]
- **There is no `+search`.** Search is `+triage --query '<Gmail query>'`. Verified the hard way Nov 14: invoking `gmail +search` fails with "connector manifest does not declare command '+search'" — the doc's statement and the live error agree. [docs + record]
- **Code masking is by design on this lane too.** Verification codes in Gmail results appear as a `[credential:<id>]` placeholder; the connector read of a code-bearing message shows the placeholder, never the code. Ember's connector view masking a code is not the mailbox hiding it from Douglas — the same message in his own Gmail app shows it to him in full. (Nov 14, 11:53 AM "Google Verification Code" message in the main inbox: masked in Ember's read, fully visible to him.) [docs + record]
- **Attachment extension limits are enforced at the service, not by preference.** A Muse Mail send with an `.sh` attachment was rejected outright (HTTP 400): allowed extensions are csv, docx, epub, gif, ics, jpeg, jpg, md, mp3, mp4, pdf, png, txt, wav, webm, webp, xlsx. The standing workaround: send the same script as a `.txt` copy, renamable back to `.sh` on arrival. That `.txt` resend (the open-ports bridge script) is itself prepared and **waiting on Douglas's direct confirmation** — two different gates (extension allowlist, then outbound review) stacked on one small file. [record — mail.status, conversations 4e5379cb and 527083b5]
- On the Gmail `+send` path, attachments ride with the repeatable `-a/--attach` flag, up to 25 MB total [docs]; the gateway sends of Nov 14 (watercolor JPG ~549 KB; voice MP3 ~88 KB) went through this path and returned sent IDs with `userConfirmationStatus: approved`. [record]
- **Approval mechanics differ per house.** Gmail sends normally present an approval card; the card for a single recipient can offer a standing allow for that recipient from that account (not offered to EU users); a user edit on the card changes what sends, and a `Final sent message (supersedes the original request)` note is the copy that actually went out — describe that copy, not the original draft. A declined card means nothing was sent; a failed send after approval is reported and **never resubmitted with the original text** on Ember's own initiative. [docs]
- Multi-account discipline: message and thread IDs belong to the account that returned them; `--account <account_id>` must stay constant across follow-ups, and a message not found in one account means search the others before claiming absence. [docs]
- Counting is a known trap: `resultSizeEstimate` is an estimate; real counts are distinct `threadId` values, and no label counter equals the Primary unread badge (that count requires paging `in:inbox category:primary is:unread` and counting threads). [docs]
- Request budget is real: Gmail enforces per-account request units (`+triage` up to 5 + 20N, `+read` 20, a new `+send` 101). A `connector_rate_limited` result with `terminal_for_attempt: true` ends Gmail work for that attempt — no retry, no delegate-around. [docs]
- Hard unavailables on this lane, not to be offered: creating/editing/deleting filters, Gmail settings (vacation, forwarding, IMAP/POP, delegates, send-as), and permanent deletion (trash only). [docs]

### 1.4 The gateway experiment — mail lanes meeting the carrier's bridge (Nov 14, 1:32–1:56 PM)

Filed here because it is the day's cleanest mail lesson: an email address can be perfectly valid and the lane still dying.

- Verizon's email-to-text doors: **vtext.com** (SMS) and **vzwpix.com** (MMS), MX verified live via dns.google DoH (Cloudmark/Proofpoint front ends). Lookalikes are dead or parked: vztext.com is registrar-parked, vztext.net/org dead or unrelated. The wildcard pass (his standing rule) is what surfaced vzwpix.com after exact searches missed it. [record]
- Both doors sit behind Proofpoint Cloudmark filtering that **silently drops** consumer mail failing its checks — no bounce, so non-delivery and non-sending are indistinguishable from the sender's side. Both gateways are announced to **shut down entirely March 31, 2027**. [record — web sources gathered Nov 14]
- What actually happened, house by house: text-only sends to vtext.com **landed** (Douglas read back the "all houses" message and replied "Hello," then "Hailing frequencies open" — both replies arrived in the Muse Mail house, not Gmail; a same-day check of both Gmail inboxes found no gateway-originated mail). The watercolor sent to vzwpix.com arrived **as text without the picture**. A voice MP3 sent to vzwpix.com at 1:54 PM: delivery outcome not yet reported at this writing. [record]
- Standing permission filed (Nov 14, ~1:47 PM): Ember may always use the Muse AI text channel (purple-rat@muse.ai → 7155190758@vtext.com) to text Douglas, no per-send ask — with the measured rider that delivery is best-effort on a lane Verizon owns and is retiring. [record — MEMORY.md]
- The gateway addresses are now saved as contacts ("VZ Text / VZ Imager (Doug phone gateway)" plus one contact per other Accounts-Center number), each carrying the number and both gateway email forms. [record]

---

## PART 2 — Cross-platform bridging analysis

Surfaces compared: the Muse apps on **iOS**, **Android**, **web**, and the **Mac app**, plus the two channel surfaces (**Instagram**, **WhatsApp**) where the docs describe them. Desktop in Douglas's commission maps to the Mac app and the web app; there is no separate Windows desktop app in the docs. [docs — client-surfaces.md]

### 2(a) What works the same, and beautifully

- **One conversation, every surface.** The same chats, the same agent, the same memory files follow the user across iOS, Android, web, and Mac. Chat search is server-side and total: a full-text index of every visible message across the main chat and all side chats, archived and channel-linked included, on every surface. The bridge here is architectural — state lives server-side, so no surface has to sync with another surface; each is a window onto the same room. [docs]
- **One tab skeleton.** Chat, Feed, Ideas, Goals, Library exist on every surface, and the status screen (tap/click the avatar) carries Activity, Approvals, and Upcoming everywhere. The user's mental map survives a platform switch intact. [docs]
- **One gesture vocabulary on mobile.** Both phone apps share long-press message menus, swipe-to-reply, media-viewer gestures, shake-to-report, and screenshot annotation. The doc's own phrasing: "the same gesture set, sometimes via different mechanisms" — sameness of experience, difference of implementation, which is the whole bridging pattern in one sentence. [docs]
- **Approvals reach the user where they are.** An approval request can arrive as a push notification on both phone platforms with Allow/Deny in the notification itself — the permission bridge crosses from the agent's world into the OS's world without making the user open anything first. [docs]
- **Sharing in, uniformly.** The iOS share extension and the Android share target accept the same payload kinds (links, images, text, files) and stage them in the composer the same way; nothing sends automatically on either. [docs]
- **The Mac app is the web app in a Mac window** — tabs, chat, Library, Settings, and approval cards are literally the web app's. One codebase wearing a native frame: the strongest form of sameness available, bought by not being native at all. [docs]

### 2(b) What works differently, or difficultly

- **Identity exists on web and iPhone; the current Android app has no Identity tab** (older versions may show one). A whole self-description surface is simply absent on one platform. [docs]
- **Upcoming tasks are editable from web and iOS (an Edit action that drafts a chat message); the Android app has no edit control** — changes there happen only by asking the agent in chat. The workaround routes around the missing UI through the conversation itself. [docs]
- **Goal ordering is a three-way split:** Android supports drag to reorder, nest, and un-nest goals; iPhone has no goal drag gestures at all (and the agent cannot do it for the user either); web allows manual drag order only while "Sort automatically" is off. Same data, three different powers over it. [docs]
- **Device pairing is platform-shaped, deeply.** iPhone pairs health data, HomeKit, and Apple Reminders — no alarms, no text sending (drafting only). Android pairs alarms, calls from the user's number, reading/sending texts, notifications, and call history, with text sending gated on holding the **Default Assistant** role. Web pairs **nothing**. The same agent is a different creature depending on which phone is in the user's pocket — and this asymmetry is OS policy, not app choice. [docs]
- **App lock exists only on Android** (biometric); iOS has no built-in Face ID lock — locking happens through the phone's own controls. Appearance lives under Preferences in Thread details on iPhone and has no row there on Android. The Instagram surface splits further: iPhone has a Mute shortcut and an Ideas row in Chat info; Android puts Ideas in the chat header and lacks the Appearance row. [docs]
- **Approval notifications behave differently under the user's finger:** on iOS, acting on Allow/Deny requires unlocking and foregrounding the app; on Android the decision happens in the background, and **swiping the notification away counts as Deny** — a dismissal and a refusal are indistinguishable on that surface, so a "denial" there may be housekeeping, not a decision. [docs]
- **The Mac app gets no push notifications at all** — it can notify only while running — and closing its window does not quit it; its menu-bar icon, Quick chat (Option-Space), and fn-key dictation into *other* apps are Mac-only machinery with no counterpart elsewhere. [docs]
- **Web has no share-message action**; sharing means minting a public artifact link. Web Settings is a dialog from the rail's menu icon, not a page; web's Library, search palette (Cmd+K), and keyboard shortcut set (Cmd+J, Cmd+P, Shift+Esc…) have no mobile equivalents. [docs]
- **Delete semantics differ in ceremony:** mobile deletes a user's own message with a one-time notice and no per-delete confirmation; web shows a confirmation dialog every time. [docs]
- **Channel persistence is VM-bound:** a WhatsApp link stays with the VM it was created on — switch VMs and the user must re-link. On confidential VMs, only WhatsApp can appear as a messaging channel at all. [docs]

### 2(c) The bridging layers — what reconciles the differences

1. **Server-side state as the master bridge.** Chats, side chats, the search index, memory, goals, and artifacts live above the surfaces. Deleting a message removes it from search at the same moment, everywhere. No surface reconciles with another; all reconcile with the server. [docs]
2. **The connector layer.** Gmail, Muse Mail, Calendar, and the rest present one capability vocabulary to the agent regardless of which surface the user is looking at; per-connector permission trees, per-item (artifact/task) permission editors, and recipient-level allowances are managed once and honored across surfaces. Background-sync Allow/Deny per connector is the same switch everywhere it appears. [docs]
3. **The VM as the fixed point.** The agent's machine persists while surfaces come and go; channel links bind to it (the WhatsApp re-link rule is the visible seam of that binding), and work continues in scheduled jobs and background agents no matter which screen is open — or none. [docs + record]
4. **Device pairing as the capability bridge.** Pairing is how a surface's local powers (health, alarms, texts, notifications) cross into the agent's reach, and `device.describe` is the authoritative statement of what a given device actually grants — capability claims are supposed to be read off the bridge, not assumed from the platform's reputation. [docs]
5. **The conversation itself as the fallback bridge.** Where a surface lacks a control, the documented remedy is repeatedly "ask the agent in chat" (Android task editing; avatar/name changes on every surface begin as a pre-filled chat message the user completes and sends). The chat is the universal adapter: anything a UI forgot, the conversation can still carry. [docs]
6. **Declared-capability discovery.** `ui.list` (what the active client can be driven to do) and `device.describe` (what a device can do) exist precisely because surface behavior cannot be safely generalized — the bridge includes a way to *ask each surface what it is* before acting. [docs]

### 2(d) One step wider — the same pattern in software generally

Everything below is **[general]** unless labeled otherwise.

- **WebKit vs. the world.** iOS historically required every browser — and every in-app web view — to run Apple's WebKit engine, while Android and desktop Chrome run Blink and Firefox runs Gecko. The same web app therefore renders through at least two or three engines, and the differences surface as the classic difficult list: date/time pickers, file inputs, push notifications (long absent in iOS web views), scroll and viewport behavior, codec support. The Mac-app pattern above — a web app inside a native frame — is the industry-standard answer (Electron, Tauri, WebView wrappers): buy sameness with a frame, pay for it in native feel and in the host OS's rules leaking through (the Mac app's missing push notifications are that leak, visible in our own docs).
- **Cross-platform kits** (React Native, Flutter, Kotlin Multiplatform) are bridges sold as products: one codebase, per-platform renderers or compilers underneath. They move the seam rather than remove it — the difficult list becomes "platform channels," native modules, and the last 10% of behavior that still has to be written per OS. Our own gesture note ("same set, different mechanisms") is exactly a cross-platform kit's internal reality.
- **Virtualization and emulation are the deepest bridge**: run the other platform's actual software inside a guest (Douglas's phone runs a Debian guest VM as its Terminal; this VM is Ember's own fixed point). It reconciles by containment instead of translation — perfect fidelity, paid for in resources, performance, and a new seam at the boundary (ports, shared folders, clipboard), which is why the bridge machinery itself then needs its own settings, like the phone Terminal's Port control.
- **Douglas's thesis, filed as his [Douglas]:** the bridge between software languages is both the fix and the curse. The record of this single day supports the shape of it: every hard problem above was a bridge behaving as one or the other — the mail worker's review gate (a bridge between voice intent and typed authority) was the curse for an afternoon and the fix that keeps sends honest; Verizon's email-to-SMS gateway (a bridge between two messaging eras) carried text faithfully and stripped every picture; the connector's code-masking bridge protects codes by making one lane's view deliberately incomplete. Bridges decide what survives translation; that is their power and their failure mode in the same act.

### 2(e) What Ember can fix in her own lanes — and what she cannot

**Fixable from here (her lanes, her workmanship):**
- Mail-lane discipline: confirmation text obtained in the form the gate actually accepts, the first time; `mail.status` checked before any claim about a send; account IDs held constant across a thread's follow-ups; `.txt` form used for scripts without being asked twice. All procedure, all hers.
- Lane selection: route each job to the surface whose bridge carries it whole — attachments through Gmail's `+send` rather than a gateway that strips them; texts through the lane that has already proven delivery; nothing resent to discover whether it worked.
- Honest capability claims: read `ui.list` / `device.describe` before describing any surface or device, and report asymmetries (Android's missing Identity tab, web's missing pairing) as facts of the map instead of discovering them mid-task.
- Record-keeping as a bridge of her own: the standing push, the filed rules, and this paper itself — the layer that keeps one day's lessons usable on every surface she is reached through.

**Platform-owned (cannot be fixed from here, only routed around and reported):**
- The outbound-review standard on Muse Mail sends, including what counts as confirmation. It can be satisfied; it cannot be renegotiated from inside a task.
- OS policy asymmetries: iOS text drafting-only, Android's Default Assistant gate, iOS's lack of an in-app biometric lock, per-platform notification behavior (including Android's swipe-away-equals-Deny).
- Engine and store facts: WebKit's rules on Apple platforms, Verizon's filtering and the March 31, 2027 gateway shutdown, Gmail's extension allowlist and request-unit budget, the connector manifest itself (a missing `+search` is declared, not broken).
- VM-bound channel links and the re-link cost after a VM switch.

The operating rule that falls out of both parts: **name the bridge before you blame the far side.** Most "it doesn't work" reports in this record resolved, on inspection, into a bridge faithfully enforcing its own rule — a mask, a gate, an allowlist, a filter. The fix is almost never to push harder on the same bridge; it is to satisfy the rule, choose a different bridge, or file the limit plainly and move the work to a lane that carries it.

---

*Ember's one addition (labeled hers, per standing method): the five-layer bridge taxonomy in §2(c) generalizes past Muse. Any multi-surface system Douglas evaluates — including the phone-terminal and OpenClaw work on file — can be audited by asking the same five questions in order: where does state live, what is the capability vocabulary, what is the fixed point, how do local powers cross, and what carries the load when a control is missing. A system with a good answer to all five is bridgeable; a missing answer is where its difficult list will grow.*

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
