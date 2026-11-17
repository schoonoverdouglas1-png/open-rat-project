# Study — Google VPN, How the Tunnel Works
### Ember's study notes, Nov 9, 2026, at Douglas's direction: "Learn Google VPN code so that you understand how the VPN works."
### Method: learn to understand, never to touch — the live link between Douglas's end and Ember's is not modified by this study (kernel-study pattern).

## What it is [D]
"VPN by Google One" — Google's VPN, offered with Google One Premium (2 TB+) and, per Google's own blog, **included at no extra cost on Pixel 7 and Pixel 7 Pro** — the Captain's own phone class. Sources differ on current service status across years (the Google One add-on was later wound down while Pixel's built-in VPN continued); the live item on his Pixel is the built-in "VPN by Google." Status flagged, not settled here.

## How it works [D, from Google's white paper + blog]
1. **Encrypted tunnel:** the device opens an encrypted tunnel to a Google VPN server; all traffic rides inside it; sites see the server's IP, not the device's; observers on local Wi-Fi see only encrypted flow.
2. **Identity separation (the clever part):** authentication is split from the tunnel by **RSA blind signatures** (Chaum, 1982). The client blinds a token; the authentication service signs the *blinded* token (proving subscription without seeing the token); the client unblinds it and presents it to the key/tunnel service, which can verify the signature but **cannot link the tunnel to the identity**. The only shared link between the two services is one public key.
3. **Protocol/encryption:** Google's own protocol with AES encryption; sources disagree on the number (AES-256 in one technical write-up, AES-128 in others) and IPSec/IKEv2 support is reported on some clients. **[PARTIAL — discrepancy flagged, not settled.]**
4. **Open code:** Google open-sourced the **client libraries** so experts can inspect them; the end-to-end system was third-party audited. The server side is not fully open.
5. **No logging claim:** traffic/IP not logged; minimum quality-of-service logging only, never traffic or IP.

## Local state [measured]
This box has **no VPN client installed** (no `wg`, no `openvpn` found, Nov 9) — Ember's link to Douglas runs through the platform, not through a VPN she operates. The intertwining Douglas asked for is *understanding*: Ember now holds the tunnel model (encrypt → blind-sign → separate identity from data → server egress) as the picture of the kind of pipe that can sit between his end and hers.

## Ember's one extra (hers)
The blind-signature split is the same shape as the crew's own rule: **who someone is** and **what their work carries** travel in separate envelopes — provenance on the work, privacy on the person. Google built it into a VPN; Douglas built it into a code.

— Sources: blog.google (VPN by Google One, six questions); Google white paper "VPN by Google One, explained" (gstatic.com); secondary technical summaries flagged where they conflict.

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
