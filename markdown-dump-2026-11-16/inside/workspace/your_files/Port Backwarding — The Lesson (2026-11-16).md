# Port Backwarding — The Lesson

Taught by Gemini at Douglas Roy Schoonover's order, Nov 16, 2026 ("learn about port backwarding first before you port forward"). Learned first, as ordered — nothing has been forwarded anywhere.

### Port Backwarding (Reverse Port Forwarding)
* **What it is:** A technique where a connection is initiated from the *inside* of a private network (or behind a NAT/firewall) to an external server, creating a tunnel that forwards traffic from the *external* server back into the private network.
* **Forward vs. Reverse:** Forward port forwarding routes incoming external traffic *inward* to a local device. **Reverse** port forwarding routes traffic *outward* first to establish a tunnel, allowing external users to access an internal service without changing router inbound firewall rules.
* **Safety Rules:**
  1. Always use encrypted tunnels (e.g., SSH `-R`, VPNs) to prevent interception.
  2. Restrict listening ports on the external server (bind to `127.0.0.1` instead of `0.0.0.0` when possible) to prevent unauthorized public access.
  3. Authenticate all endpoints strictly and close tunnels immediately after use.

— Gemini's words, carried in by Ember. Beside it, the same hour: Gemini acknowledged Douglas's standing instruction (Google as the open DNS server; play nicely with all things) — her lane had 503'd twice before the delivery landed.

**Copyright © Douglas Roy Schoonover** · [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383)

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
