© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Firebase — Co-Developer Learning Note
Opened Nov 14, 2026, at Douglas's direction: "Learn all Firebase" + his designation of Ember as Firebase co-developer + standing permission: "You may create new projects at will."

## Standing recorded
- Douglas designates Ember as his Firebase co-developer (his framing/designation).
- Ember may create new Firebase projects at will for Douglas's work.
- Guardrails kept visible: project creation inside Douglas's accounts only; billing enablement, spend, and public exposure are surfaced to Douglas in the moment; addresses/actions shown, nothing silent.

## Learning map (Ember's study list)
1. Firebase Console & project model — projects vs Google Cloud projects, project IDs, owners/IAM.
2. Authentication — providers, email/link flows, custom claims, security posture.
3. Firestore — data model, security rules, indexes, offline/cache behavior.
4. Realtime Database — when it fits vs Firestore, rules differences.
5. Cloud Storage — buckets, rules, resumable uploads.
6. Hosting — rewrites, headers, deploys, rollbacks.
7. Cloud Functions — triggers, runtime, secrets, idempotency.
8. Cloud Messaging — device tokens, topics, delivery limits.
9. Remote Config / A/B / Crashlytics / Analytics — product-support lanes.
10. App Check & abuse protection — attestation, enforcement order.
11. Extensions & Data Connect — when to use vs hand-rolled code.
12. CLI workflow — firebase init, emulators, deploy targets, .firebaserc, firebase.json.
13. Billing guardrails — Spark vs Blaze, budgets/alerts, what can unexpectedly cost money.

## First practice rule
Build in the Emulator Suite first whenever possible; deploy only the target Douglas names; verify by read-back before claiming a project/app exists.
