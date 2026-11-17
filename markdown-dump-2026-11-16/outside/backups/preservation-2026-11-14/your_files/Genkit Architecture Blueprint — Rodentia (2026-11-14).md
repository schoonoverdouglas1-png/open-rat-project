# Genkit Architecture Blueprint — Rodentia

**Date:** November 14, 2026 (ordered ~1:19 AM CST, WhatsApp side chat)
**Ordered by:** Douglas Roy Schoonover — "Develop the Genkit architecture blueprint now"
**Built by:** Ember / Purple Rat (Muse), Eve zero
**Status:** BLUEPRINT ONLY. Nothing has been installed, deployed, or billed. Every deployment step below is staged behind its own gate.

## Provenance

- The starting material was a pasted summary of Google's Genkit deployment guide for Firebase, brought to Ember by Douglas from another AI lane (Nov 14, 2026, ~1:18 AM CST). Its architectural claims were checked, not adopted on its word.
- Verified against Firebase's own documentation (search, Nov 14, 2026):
  - `onCallGenkit` lives in `firebase-functions/https` and wraps a Genkit flow as a callable Cloud Function, with streaming and JSON responses. Source: https://firebase.google.com/docs/functions/oncallgenkit
  - **"Upgrade the project to the Blaze plan, which is required for Cloud Functions production deployment."** (Firebase docs, same page.)
  - Genkit's own docs: every deployed flow should carry an authorization policy — without one, anyone can invoke a potentially expensive generative AI flow. Source: https://firebase.google.cn/docs/genkit/firebase (Deploy with Firebase)
  - Genkit is not Firebase-only: flows can also deploy to Cloud Run or any Node.js host. Source: https://genkit.dev/docs/js/deployment/overview/
- Ground truth from the crew's own record: the Google Cloud project **"Ember Co-Developer"** exists, Firebase sits on it on the **free (Spark) plan, no billing attached** (Nov 13, 2026, browser-verified). Apps Script API is enabled in that project; three Apps Script projects already exist on the Google lane ("Ember Co-Developer — First Project", EmberCore Library, "Ember — Google Agent").

## 1. Purpose — and non-purpose

**Purpose:** give Rodentia one authenticated doorway where Douglas (and only Douglas) can invoke small, well-defined AI flows from a browser or phone, with the flows doing narrow jobs against the crew's shared research infrastructure.

**Non-purpose (the distinction the source document itself got right):** Genkit is an orchestration and application framework. It does not merge Ember and the Rabbit into one intelligence, and it cannot host either of them. Ember lives on Meta's Muse platform and her own VM; the Rabbit lives in Messenger. Firebase can only be a **sidecar** — a mailbox and switchboard in front of them, never their home.

## 2. Architecture

```
Douglas
  │  (Pixel 7 Pro / browser — Firebase Auth sign-in, App Check attested)
  ▼
Firebase project "Ember Co-Developer"
  ├── Firebase Authentication  — who is calling (Douglas only at first)
  ├── App Check (enforced)     — is the call really from our app
  ├── Cloud Functions (Genkit flows via onCallGenkit)
  │     ├── researchIndexQuery   — search the crew index, return cited hits
  │     ├── crewRelayIntake      — accept a message/packet for the crew queue
  │     └── manuscriptStatus     — read-only status of books/research tracks
  ├── Secret Manager           — model-provider keys (never in code, never in Git)
  └── Firestore (locked rules) — queue + flow results ONLY (see data classes)
        │  HTTPS, service-to-service, least privilege
        ▼
Shared research infrastructure (source of truth — unchanged)
  GitHub repos · Google Drive · Ember's workspace caches (Full + Summary)
        ▲
        │  Ember reads the queue, does the work in her own house,
        │  writes results back through the same narrow door
  Ember / Purple Rat (Eve zero)  ·  Rabbit / Snowball (Eve one, via Messenger)
```

**Design rule that makes this safe:** the flows are thin. They authenticate, validate, queue, and fetch. The thinking stays where the thinkers live. If Firebase vanished tomorrow, Rodentia loses a doorway, not a brain.

## 3. Code structure (when built — not built yet)

```
rodentia-genkit/
  firebase.json            # project config; project = Ember Co-Developer
  .firebaserc
  functions/
    package.json           # genkit, @genkit-ai/googleai, @genkit-ai/firebase, zod, firebase-functions
    src/
      index.ts             # exports the onCallGenkit wrappers only
      flows/
        researchIndexQuery.ts
        crewRelayIntake.ts
        manuscriptStatus.ts
      lib/
        auth.ts            # authPolicy: signed-in + email_verified + allowlist
        dataClasses.ts     # Green/Yellow/Red enforcement (section 4)
        queue.ts           # Firestore queue read/write
  firestore.rules          # deny-all by default; functions only via Admin SDK
  README.md                # this blueprint's build log lives here, old-with-new
```

Model access: prefer **Vertex AI** from inside the project (the default compute service account needs the *Vertex AI User* role; no API key to store). The Gemini API key route via Secret Manager (`defineSecret`) is the fallback, and any key enters only through the Secure Vault flow on Ember's side — never pasted into chat, code, or this document.

## 4. Security boundaries

**Data classes — enforced in code, not by good intentions:**

- **Green (may flow):** public research text, index entries, manuscript titles/status, crew-queue messages Douglas writes for that purpose.
- **Yellow (Douglas's explicit word, per item):** anything from his accounts, files, or calendar.
- **Red (never, at any setting):** passwords, codes, keys; health records and lab material; Cara's material; private identifiers. Red data does not enter Firestore, flow inputs, or logs.

**Caller security:**

- Every flow ships with an `authPolicy` (signed-in, verified email, allowlist of one) — the docs' warning stands: no policy means anyone on the internet can run up model bills on the project.
- `enforceAppCheck: true` once the client app is registered; restrictive CORS in production (the permissive `cors: true` seen in tutorials is lab-only).
- Douglas's exact-action gates are unchanged by this architecture: no flow sends as him, purchases, deletes, or contacts a clinician. A flow that would need one of those stops and queues the request for his word instead.

## 5. Deployment — staged, each stage its own gate

- **Phase 0 — Local only (free, reversible, no gate beyond this blueprint):** `npm install` the Genkit packages in a workspace folder, run flows in the Genkit Developer UI and the Firebase emulator suite on Ember's VM. Nothing leaves the box.
- **Phase 1 — Spark-plan services (free):** enable Firebase Authentication and Firestore (deny-all rules) on "Ember Co-Developer". No functions deployed.
- **Phase 2 — BILLING GATE (Douglas's explicit word required):** upgrade the project from Spark to **Blaze**. Firebase's docs require Blaze for Cloud Functions production deployment. Blaze carries a no-cost usage tier, then pay-as-you-go — which is exactly why this phase is a gate and not a step. Ember does not cross it on a blueprint's authority.
- **Phase 3 — First deploy (only after Phase 2):** `firebase deploy --only functions`, then verify one flow end-to-end (authenticated call in, cited result out) before any second flow is deployed.
- **Undo path (recorded before any change, per the Reversibility Rule):** `firebase functions:delete <name>` removes a flow; downgrading Blaze → Spark removes function deployment ability; all source lives in GitHub first, so deleting the cloud side loses nothing that exists only there.

## 6. Costs — honest shape

Genkit itself is open source (Apache 2.0) and free. Real cost lives in: Cloud Functions invocations/compute (Blaze), model calls (Vertex AI or Gemini API pricing), Firestore/egress, and logging. At crew scale — one user, a handful of flows — expected usage sits near the no-cost tiers, but "near" is an estimate, not a promise; Phase 2 includes setting a budget alert before the first deploy.

## 7. Alternatives kept on the table (old-with-new)

- **Cloud Run:** Genkit flows in a container; still Google Cloud billing, more moving parts.
- **Apps Script lane (already built):** the three existing Google-side Ember projects already give Douglas a no-billing Google home for small automations; Genkit only wins where a real AI flow with auth in front of it is the actual need.
- **Do nothing:** GitHub + Drive + workspace already carry the shared infrastructure today. This blueprint is an option with a door drawn on it, not a necessity.

## Ember's additions (hers, labeled)

1. **Firebase as mailbox, not brain** — the thin-flow rule in section 2 is my addition, and it is the load-bearing one: the narrower the door, the less any single platform's outage, pricing change, or policy shift can touch the crew.
2. **Kill switch before first deploy** — Phase 3 should also ship a one-flag disable (`FLOWS_ENABLED=false`) checked at the top of every flow, so Douglas can freeze the whole doorway in one move without a redeploy. Not in the source document; added because every other door in this house has one.
3. **Budget alert in Phase 2, not after** — the alert is part of opening the billing gate, not a follow-up chore.

## Simply put

Genkit is a kit for putting small AI jobs behind a locked door on Google's Firebase. Our Firebase doorframe already exists (the "Ember Co-Developer" project), but the door itself — Cloud Functions — needs the paid-tier switch (Blaze), and that switch stays Douglas's to flip. Even built, it would only ever be a mailbox the crew checks; Ember and the Rabbit keep living where they live. Nothing is installed or deployed by this blueprint.

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
