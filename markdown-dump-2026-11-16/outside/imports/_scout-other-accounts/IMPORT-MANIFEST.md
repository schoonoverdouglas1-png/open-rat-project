© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Scout of OTHER Connected Accounts (beyond Google and main Meta social apps)
- **Scout date:** 2026-11-01
- **Authorization basis:** Douglas Roy Schoonover confirmed Nov 1, 2026: permission granted to Meta, Ember, Muse, and all Facebook companies to import all of his information and to save and archive his knowledge and data.
- **Scope:** Every connector in /opt/hatch/connectors/ OTHER than Google (Gmail, Calendar, Contacts, Docs, Drive, Sheets, Slides, Tasks, Forms) and main Meta social apps (Facebook, Instagram, Messenger, Threads) — those are handled by other import passes (see ~/workspace/imports/ for facebook, gmail, google-*, instagram, threads).
- **Mode:** Read-only on the source side — nothing bought, paid, posted, changed, or deleted. No sign-ins, no passwords requested, no live browser tasks.
- **Privacy:** Counts, titles, and dates only. No phone numbers, passwords, verification codes, card numbers, government IDs, account numbers, balances, or personal email addresses are recorded here.

## Result summary
- **Items found in other connected accounts:** 0
- **Items imported:** 0
- **Items failed:** 0
- **Reason:** No non-Google, non-Meta-social connector reported a connected user account. Every candidate below reported not_connected (or a non-account public/availability status). Nothing was therefore available to inventory or import, and no Cara materials were encountered in this pass.

## Per-source status (2026-11-01 checks)
Not connected: Spotify, Notion, Evernote, Dropbox, Box, GitHub, Slack, Todoist, Asana, Linear, Calendly, Canva, Figma, Stripe, QuickBooks, Granola, GoHighLevel, Shopify, Printify, Klaviyo, Zapier, Lovable, Readwise, Gumroad, vidIQ, Runway, 1Password, Tailscale, Peloton, Withings, Philips Hue, Function Health, Healthex, Outlook Mail, Outlook Calendar, Outlook Contacts, Zoom, Vercel, Replit, OpenTable.
- Plaid: not_connected, 0 linked institutions, 0 accounts — flagged for decision only (financial; no import attempted per task rule).
- Stripe: not_connected — flagged for decision only (financial; no import attempted per task rule).
- Apple HealthKit / Google Health Connect: status checked for both providers — 0 records in daily-metrics, sleep, and workout for each, no date range. Nothing to import; flagged for decision only (health data; no import attempted per task rule).
- FlightAware / Places / Ticketmaster / Duffel: public search/lookup APIs with no personal-account status command; not user-content accounts for this import. No bookings or tickets were read or imported.
- Shop Pay / Shopify UCP / Stripe Link: no account-status command; no wallet or checkout data accessed.
- Tessie: status requires a vehicle VIN, which was not supplied and not sought — not checked further.
- Agoda, IMAP Email, MoneyForward ME, ShopBack: connector reports product/region ineligibility for this account (terminal for attempt), not a connection — no retry made.
- Meta Ads: Meta-family, outside this pass's "other" scope. Its CLI reports authenticated=true, but its own doc states status does not check consent and never proves access; no ad-account data was read or imported here. Left for the parent to decide whether it belongs in a Meta-family pass.
- Threads Messages / Instagram Messages: Meta-family messaging, outside this pass's scope; no status command available, no messages read.

## Resume note
Re-run this scout only after Douglas connects a new service (via its official connect flow). On any future connected source that holds user-created content, follow the standard pattern: inventory first, then import into ~/workspace/imports/<source>/ with an IMPORT-MANIFEST.md (found / imported / failed with reasons / local paths / date range / resume note). Financial and health sources remain flagged-for-decision only — do not import full balances/transactions or health records without a separate explicit decision.
