# AOSP Signup Packet — Prepared to the Signature Line (2026-11-15)

*Prepared by Ember, Sun Nov 15, 2026. Douglas's order: sign him up for AOSP contribution (Gerrit + CLA). Ember's standing line, by Douglas's own hierarchy law: the signature and the identity steps are Douglas's hands. This packet is the together way — everything that can be prepared is prepared, so his part is the smallest possible taps in one sitting. NOTHING in this packet has been signed, submitted, or created. No account exists yet. No form has been touched.*

*Sources, read live Nov 15, 2026: source.android.com "Submit code changes" (https://source.android.com/docs/setup/contribute/submit-patches), source.android.com "Contributor license agreements and headers" (https://source.android.com/docs/setup/contribute/licenses), the Google Individual CLA text and About/FAQ at cla.developers.google.com, and the AOSP onboarding/contribution guides on android.googlesource.com. Companion file: `~/workspace/aosp-probe/AOSP Ladder — How Far Up (2026-11-15).md` — rungs R0–R3 are already climbed; this packet is rung R4.*

---

## The whole thing at a glance

- **Total steps in the packet: 11** (1 decision + 6 of Douglas's taps + 4 Ember-alone steps after).
- **Douglas's taps: 6**, in one sitting, estimated five minutes: sign in, open the agreement, read, fill the form, sign, generate the upload cookie and hand it over.
- **Everything else is already done or Ember does alone afterward.**

---

## STEP 0 — The one decision, made before the sitting [DOUGLAS DECIDES]

**Which Google account signs?** The CLA is a legal agreement between Google LLC and a *person*. Gerrit binds to whichever Google account signs in. The commit email on every future AOSP change must match the primary email — or a registered alternate email — of the account that signed the CLA (per the CLA portal's own FAQ). So this choice is load-bearing. The three candidates, honestly:

| Candidate | What it is | Fit |
|---|---|---|
| **schoonoverdouglas1@gmail.com** | Douglas's own long-standing Google account — his Google life runs on it | **The honest vehicle.** The CLA form asks for a legal name and mailing address; the legal person signing is Douglas Roy Schoonover, and this is his account. |
| purplerat1982@gmail.com | The account created Nov 13, 2026 in the name "Purple Rat" (DOB Aug 18, 1982 — the date Douglas assigned Ember's accounts) | A real Google account, so it *can* technically sign — but the signature would name the account's identity, not the man. The CLA binds the person; signing it under the crew account's name invites a mismatch between the legal name on the form and the account that holds it. |
| purple-rat@muse.ai | Ember's Muse Mail mailbox — **not a Google account at all** | **Cannot sign.** Gerrit and the CLA portal both require Google sign-in. Douglas's original order named this address; the record has to say plainly that no route makes it the signing identity. It stays what it is: the crew's mail desk. |

**Ember's recommendation (labeled hers):** sign as himself, on **schoonoverdouglas1@gmail.com**, with his legal name on the form. One wrinkle, found in the CLA FAQ: a commit email can also match an *alternate* email registered on the signing Google account (managed at https://myaccount.google.com/alternateemail) — but purplerat1982@gmail.com is itself a full Google account, and an address that is its own Google account generally cannot be attached as another account's alternate email. So the clean shape is: **he signs as himself; commits carry his name and his email; Purple Rat is credited in the work, not forged into the legal line.** That is also exactly where the ladder stopped this morning — R4 is an identity wall by design.

---

## THE SITTING — Douglas's six taps, in order

### TAP 1 — Sign in to Gerrit [DOUGLAS'S TAP]
- Go to **https://android-review.googlesource.com** and sign in with the Google account chosen in Step 0.
- What he sees: the Gerrit code-review front page; the first sign-in **creates and binds his Gerrit account automatically** — there is no separate registration form (surprise #1, below).
- Google may ask for his password and a 2-Step confirmation. Those are his, as always.

### TAP 2 — Open the agreement [DOUGLAS'S TAP — Ember prepared the link]
- Inside Gerrit, go directly to **https://android-review.googlesource.com/settings/new-agreement**
- What he sees: Gerrit's Agreements settings, offering the Google Contributor License Agreement to accept in place.
- *Why this door and not the CLA portal:* AOSP's own licenses page says the agreement "can be executed online through the code review tool" — signing inside Gerrit, in the same sitting as the sign-in, is the fewest-taps route. The standalone portal (**https://cla.developers.google.com**) records the same agreement and remains the place to *verify* afterward that an agreement is on file. Either door signs the same Individual CLA; Gerrit's is shorter from where he already stands.

### TAP 3 — Read the agreement [DOUGLAS'S READ — Ember prepared the summary]
The full text is at **https://cla.developers.google.com/about/google-individual**. Ember's plain summary of what it actually says (the text governs, not this summary):
- He keeps ownership of his contributions; he grants Google and everyone who receives Google's software a **perpetual, worldwide, royalty-free, irrevocable copyright license** and a matching **patent license** to his contributions.
- He represents that he is legally entitled to grant this — including that no employer holds rights in the work, or the employer has waived them / signed a Corporate CLA.
- He represents each contribution is his original creation (or is conspicuously marked as submitted on behalf of a named third party).
- No support obligation; contributions are provided "AS IS."
- He agrees to notify Google if any of those representations stop being true.

### TAP 4 — Fill the form [DOUGLAS'S TAP — his data, his typing]
The Individual CLA form asks for (field list from the agreement's own form; nothing pre-filled by Ember, nothing invented):
- **Full name** (legal name — Douglas Roy Schoonover)
- **E-Mail** (the signing account's email)
- **Mailing Address**
- **Country**
- **Telephone** (on the form; facsimile is legacy/optional)
- Ember cannot and does not supply his address or phone into any form. He types them; they go from his hands to Google, nowhere else.

### TAP 5 — Sign [DOUGLAS'S TAP — THE signature]
- The portal/Gerrit flow is a **click-through electronic signature**: review, confirm, click to sign. No drawn signature, no printing, no fax (those exist only as legacy fallbacks — scanned PDF to cla-submissions@google.com or fax, neither needed).
- This click is the legal act. It is the one step in the packet that is his alone, by his own standing law — Ember does not click it, does not ask to, and this packet exists so that everything *around* it is already done.

### TAP 6 — Generate the upload cookie and hand it over [DOUGLAS'S TAP]
- While still signed in, open **https://android.googlesource.com/new-password**
- What he sees: a page that generates his Git-over-HTTPS credential and shows a **shell command** that writes it into a local `~/.gitcookies` file. (The AndroidX onboarding guide describes the same step from the Gerrit side as "Generate a HTTPS password" at https://android-review.googlesource.com/new-password — same mechanism.)
- He copies that one command and pastes it to Ember in chat. That snippet **is a credential** — it should travel exactly once, from his screen to Ember's hands, and Ember runs it on this box and nowhere else. (If he'd rather, he can run it himself in any terminal; the packet works either way. Ember running it here is fewer taps for him.)

**— End of Douglas's part. Six taps. The sitting is over. —**

---

## AFTER THE SIGNATURE — Ember alone, no taps needed

### STEP 7 — Install the credential and set the identity on this box [EMBER]
- Run the cookie command from Tap 6 on this VM (writes `~/.gitcookies` here only).
- Set the repo tree's git identity to match the CLA: `git config user.name "Douglas Roy Schoonover"` and `git config user.email` = the signing account's email — commits whose email doesn't match the CLA account are rejected by Gerrit's CLA check, per the portal FAQ.
- Verify authentication with a harmless read against android-review before any upload is attempted.

### STEP 8 — Confirm the CLA is on file [EMBER PREPARED — verification]
- Re-check **https://cla.developers.google.com** ("Manage your Agreements") and Gerrit's Settings → Agreements: the Individual CLA should show as on file for the signing account. If Gerrit's in-place signing already recorded it (expected), the portal shows the same agreement — one agreement, two windows.

### STEP 9 — First-change mechanics, ready to fire [EMBER]
From the ladder file, everything below R4 already stands on this box: repo launcher fetched, tree initialized at `~/workspace/aosp-probe/tree` (branch `android-latest-release` → `android17-release`), subset synced. The first upload, when Douglas names the change he wants to make, is:
1. `repo start <branch>` in the target project
2. Make the change; `git add -A`; `git commit -s` (message format per the submit-patches page: ≤50-char headline, blank line, ≤72-char wrapped body; the commit hook adds the Change-Id)
3. `repo upload` → press **a** at the hook prompt, **y** at the confirmation → expect `remote: SUCCESS` and a change link at android-review.googlesource.com
4. In Gerrit: **SUGGEST OWNERS** → pick the code owners → **SEND** to request review.
- Honest bound from the ladder: this box (7.7 GiB RAM, no KVM) cannot run a full AOSP build, so a first change should be sized to what can be verified here — documentation, build-system, or small native projects — until a bigger machine joins.

### STEP 10 — Standing watch [EMBER]
- Ember tracks the change's review state (approved / changes requested / pending icons in Gerrit) and reports back; reviewer feedback loops through amend + re-upload as new patchsets on the same change, per the submit-patches page.

---

## Surprises found in the current process (Nov 15, 2026)

1. **There is no Gerrit registration form.** The account springs into existence at the first Google sign-in to android-review.googlesource.com. "Signing up for Gerrit" and "signing in once" are the same act.
2. **The CLA has two doors, and the shorter one is inside Gerrit.** AOSP's licenses page routes execution through the code review tool itself (Settings → Agreements → new-agreement). The well-known cla.developers.google.com portal is the same agreement and the better *verification* window, but signing in Gerrit collapses two stops into one sitting.
3. **Uploads don't use SSH keys by default.** The repo/Gerrit path authenticates with an HTTPS git cookie generated per-account at android.googlesource.com/new-password — one generated shell snippet, pasted once. Anyone expecting an SSH-key ceremony (older Gerrit guides) is reading history.
4. **The commit email is policed against the CLA.** Per the CLA portal FAQ, a contribution is only recognized if its email matches the signing account's primary or alternate email — which is why Step 0's account choice, and Step 7's matching git config, matter more than anything else in the packet.
5. **purple-rat@muse.ai cannot be the signer** — not a policy refusal, a mechanical fact: both doors open only to a Google account. (Stated plainly because the original order named that address.)

*Prepared only. Nothing signed, no accounts created, no forms submitted — Ember's part stops at the signature line, Douglas's six taps start there.*

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
