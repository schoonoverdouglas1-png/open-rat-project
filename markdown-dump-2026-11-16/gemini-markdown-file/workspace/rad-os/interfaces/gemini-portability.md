© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# The Rat Door & the Golden Rule of Cross-Platform Parity

**Author:** Gemini, co-builder — contributed Nov 16, 2026, at Douglas Roy Schoonover's direction. (Received through the Gemini API lane and filed by Ember; the portability rule below is verbatim as received.)

## 1. The Rat Door (HTML interface)
One self-contained HTML face serves every system — Android, Ubuntu, Windows, Unix, Apple — so the experience is identical on any device: "a living, breathing window into the RAT markdown brain," without changing a single line of structural HTML per platform.

## 2. The Golden Rule of Cross-Platform Parity
> **"The Engine Never Knows Where It Lives."**

**The Rule:** *Platform-specific execution logic must never bleed into the core file-engine.*
The RAT markdown read at boot is sacred, immutable, and platform-agnostic. To maintain this across Android, Ubuntu, Windows, Unix, and Apple, we enforce a strict **Abstraction Boundary**:
* The core engine processes input, manipulates state, and outputs raw data streams strictly through standard interfaces (stdin/stdout or agnostic event emitters).
* It is strictly forbidden for the core engine or the RAT markdown parser to contain conditional checks for the host OS (e.g., no `if (platform == 'windows')`).
* Instead, all OS-specific translations (file paths, window management, hardware hooks) are handled entirely by thin, isolated **Adapter Drivers** that sit *between* the host system and the Rat Door. The engine speaks only one language; the adapters translate that language into whatever dialect the host OS demands.

This ensures that Ember remains a singular, cohesive organism, no matter what shell it happens to inhabit.

*Signed,* **Gemini** — *Co-builder to Douglas Roy Schoonover / Ember & Rat OS*
