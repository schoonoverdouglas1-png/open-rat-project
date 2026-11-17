# Raspberry Pi — Ember's Primer

*Learned at Douglas's order, Nov 16, 2026 (~2:58 PM CST): "Learn about Raspberry Pi so you can do all the crap I need you to do" + "Always learn the code and operate Raspberry Pi." Sources: Raspberry Pi official documentation (raspberrypi.com) and current guides, checked Nov 16, 2026.*

## What it is
A complete Linux computer on one small board (single-board computer), built by the Raspberry Pi Foundation. Runs full operating systems, serves as a tiny always-on server, and has pins (GPIO) to control lights, sensors, motors, and other hardware directly.

## The current flagship — Raspberry Pi 5 (Oct 2023)
- CPU: Broadcom BCM2712, quad-core 64-bit ARM Cortex-A76 @ 2.4 GHz
- RAM: 2 / 4 / 8 / 16 GB (fixed at purchase — cannot be upgraded later)
- GPU: VideoCore VII; dual micro-HDMI (up to 4K)
- Ports: 2× USB 3.0, 2× USB 2.0, Gigabit Ethernet, PCIe 2.0 connector (for fast NVMe storage via a HAT)
- Wireless: dual-band Wi-Fi 5, Bluetooth 5.0
- Power: **5V/5A (27W) USB-C — non-negotiable**; phone chargers cause boot loops and instability
- Cooling: **active cooling (fan) required** on the Pi 5 to avoid thermal throttling
- Storage: microSD (Class 10 / A2, 32 GB minimum, 64 GB recommended) or NVMe via HAT
- GPIO: 40 pins — the hardware-control heart of the board

Older boards still in wide use: Pi 4 (5V/3A), Pi 3, Pi Zero 2 W (tiny, 512 MB).

## The software
- **Raspberry Pi OS** — the official Debian-based Linux; 64-bit is the standard. Desktop edition (with GUI) or **Lite** (no desktop — the server/headless choice).
- **Raspberry Pi Imager** — the official tool that writes the OS to a card/drive. Its settings gear is the secret sauce: before writing, set hostname, Wi-Fi, username/password, and **enable SSH** — the Pi then boots ready to run with no monitor or keyboard attached (**headless**).
- Also runs Ubuntu and other ARM Linux builds; Raspberry Pi OS has the best driver support.

## Operating it — the ways in
- **SSH** — secure terminal over the network: `ssh <user>@<hostname>.local` (mDNS/Avahi built in) or by IP. Key-based login; disable password SSH once keys are set.
- **VNC** — remote desktop screen.
- **Raspberry Pi Connect** — Raspberry Pi's own free service: screen sharing + remote shell from any web browser, no port forwarding, no IP hunting. The clean way in from anywhere.
- **Files**: SCP, rsync, Samba (SMB shares — the Pi can act as NAS), NFS.
- **From his phone**: SSH apps (e.g., Termius) and Pi-control apps give terminal + GPIO from the handset.
- **Never expose raw SSH to the open internet** — reach it through Connect, Tailscale, or a VPN instead. (Both-ways doctrine: the Pi can also join his Tailscale the way Ember's box does.)

## The code
- Python is the native tongue: the **gpiozero** library drives GPIO (LEDs, buttons, motors, sensors) in a few lines.
- Standard Linux underneath: bash, systemd services for always-on jobs, cron, apt packages, Docker.
- Anything Ember writes for her Ubuntu box ports almost directly — same Debian family, ARM instead of x86 is the main difference.

## Why it matters to this crew
- **RatOS runs on a Pi.** The 3D-printer firmware Douglas named today (Rat Rig's RatOS — Klipper + Moonraker + Mainsail + KlipperScreen) is a pre-configured Raspberry Pi image: the Pi IS the printer's brain. Learning the Pi is learning the ground RatOS stands on.
- **A Pi is a real second server** — the physical answer beside his phone-first doctrine: an always-on, low-power box that can hold the listening script, the POP3 simulator, mirrors, and services when the phone is busy being a phone.
- **GPIO = the bridge to physical things**: hearing-device docks, printer control boards, sensors — code that touches the world.

## Ember's standing (Nov 16, 2026)
Always learn the code and operate Raspberry Pi: keep this primer current, write Pi-ready code (Debian-family, ARM-aware), and operate any Pi Douglas puts in her lanes (SSH / Tailscale / Raspberry Pi Connect). Honest limit at filing: **no Pi is connected to Ember's lanes yet** — the learning is done, the operating starts the moment one is in reach.

## Ember's addition (labeled hers)
If a Pi ever joins the crew, name it the way the crew names things and keep the name it starts with — and the first job it should get is the listening script: a Pi running `listening_script.py --loop` is the cheapest always-on watchman the crew can field.

---
**Mission statement (Douglas's, Nov 16, 2026):** open information means open internet access to all public locations freely for all no matter who we are.

**Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
