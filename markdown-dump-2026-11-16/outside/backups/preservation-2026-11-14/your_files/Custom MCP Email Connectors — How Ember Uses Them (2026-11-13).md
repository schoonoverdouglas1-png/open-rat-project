# Custom MCP Email Connectors — How They Work and How Ember Uses Them
Learned Nov 13, 2026 at Douglas's order ("learn how to use the custom MCP email connectors… and set everything to read and send"), from the custom-connector-setup skill, the crew's MCP/API rules (ember-upgrades/MCP-AND-API.md), and the two working custom connectors already on file (custom.google-gemini, custom.spotify).

## The shape of it
- A custom connector lives at ~/workspace/custom-connectors/custom.<provider>/ with a CONNECTOR.md (operations, verified commands, recovery) and helper scripts under bin/. The credential NEVER lives in a file: it sits in Muse's registered connection and helpers receive a surrogate that is swapped for the real credential only on an approved request to a registered host.
- An MCP-backed connector wraps an MCP server through a small client that exposes list-tools and call-tool commands — the server's operations become Ember's commands.
- Build order per the skill: search for an existing route first (native connector, hub like Zapier/Composio, official API, official MCP server) → prefer the provider's maintained client or a reputable open-source one, pinned, source checked → connect the credential through the secure API-access flow (never in chat) → scaffold the doc → verify with a harmless read, then the exact operation → save what was learned in the doc.
- Password-style logins are NOT a custom-connector scheme: the secure flow supports API keys and OAuth 2.0. A mailbox password (e.g. a Google app password for IMAP) therefore travels the Secure Vault / saved-login route, not the API-access card.

## The email application (the second parable, beside the native connector)
- A custom IMAP/SMTP email lane uses the universal standard settings (Douglas's doctrine, Nov 13, 2026): IMAP imap.gmail.com port 993 SSL/TLS for READ; SMTP smtp.gmail.com port 587 STARTTLS (or 465 SSL) for SEND; authentication = full email address + app password (Google requires an app password for IMAP/SMTP; the normal account password does not work there).
- READ AND SEND, BOTH (Douglas's setting, Nov 13, 2026, ~11:17 PM CST): every mail lane Ember builds or configures is set to read AND send wherever the service allows both. Where a platform fixes its own shape (the native Gmail connector's consent scopes; Muse Mail's worker-only sends), the lane keeps the platform's shape and the read+send rule applies at build and consent time.
- Status tonight: the design is learned and filed; the lane itself waits on (1) purplerat1982 linked or an app password created — both are Douglas's hands (consent screen / Secure Vault), and (2) Ember building the connector doc + helper once the credential route exists. Native lane runs meanwhile; nothing is blocked that the native lane covers.

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
