© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# developer.android.com — Study Map (2026-11-14)

At Douglas's order: "go to developer.android.com and learn all the text and all the pages because you must know those things immediately."
Ember's measured form, told to him: the site is a library of thousands of pages — no one reads it whole in a sitting. What she holds immediately is (1) this map, (2) the core canon below, pulled live on 2026-11-14, and (3) a standing rule: for Android work, this site is consulted FIRST. The deep sections ride the Android Dev Summit learning lane (the site's own front door today leads with the Summit's 50+ talks — the two orders are one library).

## The core canon (pulled 2026-11-14, sources: the site's homepage, Application fundamentals, Permissions/signing pages)
- **Packages:** SDK tools compile code + resources into an **APK** (installable) or an **Android App Bundle (.aab)** (publishing format; defers APK generation/signing; cannot be installed directly).
- **The sandbox:** Android is a multi-user Linux system — **each app is a different Linux user**, files permissioned to that UID only; each app runs in its own process and its own VM. **Principle of least privilege:** an app by default reaches only what its work requires.
- **Shared user ID:** two apps MAY share one Linux user ID (and process/VM) — **only if signed with the same certificate**. ← This is the documented root of the crew's Termux rule: Termux + its add-ons share a user ID, so one signing source (F-Droid) for the whole family, or nothing talks.
- **Permissions:** apps declare in AndroidManifest.xml; dangerous permissions (camera, location, contacts, SMS) are granted by the user at runtime; normal permissions at install. Custom permissions can be defined; **signature-level permissions** are granted automatically to apps signed with the same certificate; Android 12+ adds `knownCerts`/`knownSigner` so signature permissions can be granted to known signers after manufacture.
- **Signing:** **every APK must be signed**; the certificate needs no CA — self-signed is typical; its purpose is to distinguish authors, and it gates signature permissions and shared identity.

## Study order for crew work (Ember's, labeled hers)
1. Application fundamentals (done, above).
2. Permissions overview + requesting — what her phone commands can and cannot ask for.
3. App signing + APK packaging — the Crew Scripts APK build and the missing build-tools hunt both live here.
4. Background work limits — why the Debian guest "keeps the device awake," why jobs get throttled.
5. Virtualization (AVF / protected KVM) — the Debian Terminal's own pages; the guest's known rough edges.
6. Android Dev Summit talks (50+) — riding the Summit lane in FUTURE-IDEAS.md.
