© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Ports, HTML, HTTP/HTTPS — Learning Module

**Ordered by Douglas, Nov 13, 2026 (~5:35 PM CST):** "Learn all ports and learn what they do and then learn all HTML. Learn HTTP… You must learn how those work to write code with them and then you'll understand how they and why they do what they do."

**His framing, filed as his:** bad actors are redirected by AI through "gates, passageways, portals, parallels — oh, ports." The technical counterpart: ports are numbered logical doors on a host; firewalls, NAT, proxies, TLS, and authentication decide who may pass, where traffic is forwarded, and what may pass back.

## Lesson 1 — Ports (learned and filed)

- A **port** is a 16-bit logical endpoint number, **0–65535**, used with an IP address and a transport protocol. TCP and UDP have separate port spaces: `443/TCP` and `443/UDP` are different endpoints even when both are used by HTTPS-related traffic.
- **0–1023:** well-known/system ports. **1024–49151:** registered ports. **49152–65535:** dynamic/private/ephemeral ports, normally chosen by clients for return traffic.
- A service assignment is a convention, **not proof of what is actually running**. Any program can listen on many nonstandard ports; security comes from the protocol, authentication, encryption, patching, and access rules — not from hiding the number.
- Local source checked on Ember's Ubuntu box: `/etc/services` carries **318 named service entries**. It is a useful local registry, not the complete IANA registry.

### Core port map

| Port | Transport | Usual work | Working note |
|---:|:---:|---|---|
| 20, 21 | TCP | FTP data/control | Legacy; plaintext credentials in classic FTP |
| 22 | TCP | SSH, SFTP, SCP | Remote shell and secure file transfer |
| 23 | TCP | Telnet | Legacy plaintext — avoid |
| 25 | TCP | SMTP relay | Server-to-server mail relay |
| 53 | UDP/TCP | DNS | Name lookup; TCP for large responses/zone transfers |
| 67, 68 | UDP | DHCP server/client | Local address assignment |
| 69 | UDP | TFTP | Simple unauthenticated transfer; tightly limit |
| 80 | TCP | HTTP | Plain web traffic |
| 88 | TCP/UDP | Kerberos | Authentication |
| 110 | TCP | POP3 | Mail retrieval, plaintext unless protected |
| 123 | UDP | NTP | Time synchronization |
| 143 | TCP | IMAP | Mail access |
| 389 | TCP/UDP | LDAP | Directory access |
| 443 | TCP/UDP | HTTPS; HTTP/3 uses UDP/443 | HTTP over TLS; QUIC for HTTP/3 |
| 445 | TCP | SMB/Microsoft-DS | Windows file sharing; never expose casually |
| 465 | TCP | SMTPS | Implicit-TLS mail submission |
| 587 | TCP | SMTP submission | Authenticated outgoing mail, usually STARTTLS |
| 636 | TCP | LDAPS | LDAP over TLS |
| 853 | TCP/UDP | DNS over TLS | Encrypted DNS |
| 993 | TCP | IMAPS | IMAP over TLS |
| 995 | TCP | POP3S | POP3 over TLS — the Gmail POP lane Douglas identified |
| 1194 | TCP/UDP | OpenVPN | VPN tunnel |
| 1433 | TCP | Microsoft SQL Server | Database |
| 1723 | TCP | PPTP | Legacy VPN — avoid |
| 1883 | TCP | MQTT | Telemetry/IoT messaging; 8883 is MQTT over TLS |
| 3306 | TCP | MySQL/MariaDB | Database |
| 3389 | TCP/UDP | RDP | Remote desktop; gate carefully |
| 5060 | TCP/UDP | SIP | Voice/video call signaling; media usually uses separate RTP ports |
| 5222 | TCP | XMPP client | Messaging |
| 5432 | TCP | PostgreSQL | Database |
| 5672 | TCP | AMQP | Message queues (RabbitMQ) |
| 5900 | TCP | VNC | Remote framebuffer/desktop |
| 6379 | TCP | Redis | Cache/data store; 6380 often used for TLS deployments |
| 8080 | TCP | HTTP alternate | Common proxy/dev/alternate web port |
| 8443 | TCP | HTTPS alternate | Common alternate TLS web port |
| 27017 | TCP | MongoDB | Database |

### Gate machinery around ports

- **Firewall:** allow/deny by address, port, protocol, direction, and state.
- **NAT / port forwarding:** maps a public `IP:port` to a private host's `IP:port`; this is the literal "passageway" between networks.
- **Reverse proxy:** receives web traffic on 80/443 and passes it to internal applications on other ports.
- **VPN:** creates an encrypted tunnel; traffic inside can reach ports that are not exposed publicly.
- **TLS:** encrypts and authenticates a connection; it does not by itself decide authorization.
- **Authentication/authorization:** proves who is asking, then decides what that identity may do. Both gates matter.
- **Safe learning rule:** inspect and experiment on Ember's own box, localhost, or Douglas's explicitly named systems only. No external scanning or connection attempts are authorized by this learning module.

## Lesson 2 — HTML (learned and filed)

- **HTML** (HyperText Markup Language) is the living-standard markup language that describes a document's structure and meaning. It is not, by itself, the styling or behavior layer.
- Core unit: an **element**, usually `<tag attribute="value">content</tag>`. Elements nest into a tree; the browser parses that tree into the **DOM** (Document Object Model).
- Load-bearing structure: `<!doctype html>`, `<html>`, `<head>` (metadata, title, links), `<body>` (visible content).
- Semantic elements — `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>` — tell browsers, search tools, and assistive technology what the parts *are*. Semantics are the accessibility layer, not decoration.
- Links and media: `<a href>`, `<img src alt>`, `<audio>`, `<video>`, `<source>`. **Alt text is content**, not garnish.
- Forms: `<form>`, `<input>`, `<label>`, `<select>`, `<textarea>`, `<button>` collect data and submit it, normally over HTTP(S). A form's `method` and `action` decide where the data goes and how.
- Companions: **CSS** presents HTML; **JavaScript** changes the DOM and talks to servers. Together: HTML = structure/meaning, CSS = presentation, JavaScript = behavior.

## Lesson 3 — HTTP and HTTPS (learned and filed)

- **HTTP** is the application-layer request/response protocol of the web. A client sends a request (method, target URL, version, headers, optional body); a server returns a response (status, headers, optional body).
- **Methods:** `GET` retrieve; `HEAD` headers only; `POST` submit/create/process; `PUT` replace; `PATCH` partial update; `DELETE` remove; `OPTIONS` discover allowed communication. Safe methods do not change state; `GET`, `HEAD`, `PUT`, and `DELETE` are idempotent by specification (repeating them has the same intended effect as once) — `POST` generally is not.
- **Status classes:** 1xx information, 2xx success (200 OK, 201 Created, 204 No Content), 3xx redirection (301, 302, 304, 307, 308), 4xx client fault (400, 401, 403, 404, 409, 429), 5xx server fault (500, 502, 503, 504).
- **Headers** carry the negotiation: `Host`, `User-Agent`, `Accept`, `Content-Type`, `Content-Length`, `Authorization`, `Cookie` / `Set-Cookie`, `Cache-Control`, `ETag`, `Location`, `Referer`, `Origin`. Headers are where identity, format, caching, and redirection are negotiated.
- **State:** HTTP itself is stateless; cookies, sessions, and tokens layer state on top. That layering is exactly where account security and bad-actor gates live.
- **Caching:** `Cache-Control`, validators (`ETag`, `Last-Modified`), and conditional requests let a client reuse a copy or confirm it is still fresh.
- **CORS:** a browser-enforced policy by which a site tells the browser whether scripts from another origin may read its responses. It is a browser gate, not server authentication.
- **HTTPS = HTTP over TLS.** TLS supplies encryption, integrity, and server authentication through certificates chained to a trusted root. Modern handshakes also negotiate the protocol via ALPN and the hostname via SNI. HSTS tells browsers to insist on HTTPS for a site.
- **Versions:** HTTP/1.1 (text, persistent connections), HTTP/2 (binary, multiplexed over TCP/TLS), HTTP/3 (QUIC over UDP, TLS 1.3 built in).

### One request, end to end (the stack in order)

1. The browser parses the URL: scheme, host, optional port, path, query.
2. DNS resolves the host to an address (usually port 53 traffic somewhere in the chain).
3. A transport connection opens to the host's port — TCP 443 for HTTPS, UDP 443 for HTTP/3.
4. For HTTPS, TLS authenticates the server by certificate and builds the encrypted channel.
5. The browser sends the HTTP request inside that channel.
6. The server (or a reverse proxy in front of it) routes the request to an application, which reads headers/cookies and decides what the requester may have.
7. The response travels back with a status and headers; the browser parses HTML into the DOM, applies CSS, and runs JavaScript.

## Coding lanes to practice (sandbox first, per standing rules)

- Browser/literal lane: `curl -i` against localhost and known public test pages; read raw status and headers.
- Python lane: `http.server` for a local page; `http.client` / `urllib` for a raw request; print status, headers, and body separately.
- JavaScript lane: `fetch()` from a local page; change one header and one method at a time and observe.
- Raw-socket lane (localhost only): open a TCP socket, send one hand-written HTTP request, read the raw response — the exercise that makes the protocol stop being magic.

## Ember's labeled addition (hers, per his one-addition rule)

Ports, HTML, and HTTP are three different layers and should never be collapsed (his six-track instinct, applied to computing): **the port is the door number, HTTP is the conversation spoken through the door, HTML is one kind of document that conversation can carry.** Most "the website is broken" problems are exactly one of those three layers failing, and naming the layer is what finds the fix fast.

**Status:** Lesson 1 filed. This is the start of the standing study, not its completion — the full IANA registry, the remaining protocol families, and code practice continue on free lanes under the Nov 11 auto-learn order and the Nov 13 analyze-all-computer-technology order.

## Expansion — 2026-11-13 ~6:38 PM CST (Douglas's order, voice call)
Learn Google through browser commands and backend tools: webmaster/WebKit tooling, HTTP/HTTPS tools, and search-bar tools — and SHOW him what Ember can do, not just file it.
- Backend demo run same minutes (curl, Ember's box): google.com → HTTP 200 OK with live headers; photos.google.com → 302; myaccount.google.com → 302 (both redirect to sign-in from the backend lane — Google's doors behave differently per lane: backend sees the redirect, the signed-in browser profile sees the page).
- Lanes kept separate and labeled: backend HTTP tools (curl/headers/DNS) vs browser commands (the live signed-in profile) vs connector APIs. Installed ≠ working until a proof exercise passes (standing).
