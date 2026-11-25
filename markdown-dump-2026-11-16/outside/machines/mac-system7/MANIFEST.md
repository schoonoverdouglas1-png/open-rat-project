© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Mac System 7 — Asset Manifest (built 2026-11-15)
All downloads from archive.org (Internet Archive) public preservation items only.

| File | Source (archive.org item) | SHA256 |
|---|---|---|
| Quadra800.rom (1,048,576 B) | https://archive.org/download/800_20250604/800.ROM (item: 800_20250604 "Macintosh Quadra 800 ROM") | 05ad753fb594e656cf078023ec189e09e2a7655a780de993b75b8c51ed6b09ca |
| Quadra-650.rom (1,048,576 B) | https://archive.org/download/macos755_202405/Quadra-650.rom (item: macos755_202405) | 05ad753fb594e656cf078023ec189e09e2a7655a780de993b75b8c51ed6b09ca (identical to Quadra800.rom) |
| Performa-630.ROM (1,048,576 B) | https://archive.org/download/macos755_202405/Performa-630.ROM | c1098a03786667c8bf888792590ce53b47f65bf44a75e11c24718983e1d25af8 |
| macos755.dsk (157,286,400 B, raw HFS volume "MacOS 7.5.5", bootable in Basilisk terms) | https://archive.org/download/macos755_202405/macos755.dsk | de3e2298584e0675c61dfae0fe4f4f3d2df5e16a478b66fdd83102524e98a3a1 |
| quadra.zip -> quadra/system71.img (256 MB, APM + Apple_Driver + System 7.1 HFS) + quadra/q800.rom | https://archive.org/download/quadra/quadra.zip (item: quadra) | see SHA256SUMS.txt |
| performa753.iso (747 MB, "Macintosh 7.5.3 Performa 6300 6400" CD) | https://archive.org/download/macintosh-7.5.3.-performa-6300-6400/Macintosh_7.5.3.Performa_6300_6400.iso | a608d3b0b6af6725787050454e641a3ce65e66082ba331c2b4f7797558bbf7d1 |
| system755-partitioned.img (DERIVED, built locally) | First 96 blocks (DDM + partition map + Apple_Driver) from quadra/system71.img, HFS partition payload = macos755.dsk verbatim; partition block counts patched (total 307,296 blocks). Hash in SHA256SUMS.txt | derived |

Emulators installed from Ubuntu noble apt: qemu-system-misc 1:8.2.2+ds-0ubuntu1.18 (provides qemu-system-m68k 8.2.2, machine q800), basilisk2 0.9.20240401-1.
Gemini lane answer: gemini-answer.txt in this folder.
