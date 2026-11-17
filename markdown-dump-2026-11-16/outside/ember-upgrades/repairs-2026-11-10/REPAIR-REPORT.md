# Repair Report — The Two Flagged Repairs (Nov 10, 2026, ~4:31 PM CST authorization)

Douglas's word: "Do the repairs still flagged." Both repairs named in
TOOL-MASTERY-PLAYBOOK-2026-11-10.md §5–6. Both are **VERIFIED COMPLETE**
(tested with read-backs, per verify_before_claiming_completion).

Rules held: venv-only (no apt, no sudo, no system packages); every install
command passed `guard/check-command.sh` (exit 0, allowed) before running;
snapshots + UNDO.md written BEFORE any install; one venv at a time;
no servers left running.

## 1. MarkItDown (markitdown-venv) — FIXED & VERIFIED

- Before: `markitdown==0.1.9` core-only — silent empty output on PDF/DOCX.
- Action: `pip install 'markitdown[pdf,docx,pptx,xlsx]'` (exit 0).
- markitdown itself unchanged: **0.1.9 → 0.1.9**. No pre-existing package
  changed version. 17 packages newly added:
  cffi 2.1.1, cobble 0.1.4, cryptography 50.0.2, et-xmlfile 2.0.0,
  lxml 6.1.3, mammoth 1.13.0, openpyxl 3.1.5, pandas 3.1.1,
  pdfminer.six 20260107, pdfplumber 0.11.10, pillow 13.0.0,
  pycparser 3.12, pypdfium2 5.15.2, python-dateutil 4.0.0,
  python-pptx 1.0.2, tzdata 2026.6, xlsxwriter 3.3.1.
- **Test** (test files in /tmp/repair-test: sample.md → DOCX via
  pandoc-venv/pypandoc, → PDF via LibreOffice; stderr kept visible):
  - PDF → non-empty correct markdown text: heading "Repair Test Heading",
    the bold paragraph, table cells (Alpha 3 / Beta 7), and both list
    items all present (layout flattened, as expected from the PDF lane).
  - DOCX → full correct markdown: `# Repair Test Heading`, `**bold**`,
    a real Markdown table (Alpha|3, Beta|7), and both list items.

## 2. Faster-Whisper (faster-whisper-venv) — FIXED & VERIFIED

- Investigation: faster-whisper **1.2.1 is already the latest release**
  (pip index), so upgrading it could not fix anything. Its requirement is
  `av>=11` (unbounded), which pulled the incompatible PyAV.
  PyAV's official changelog: **v19.0.0 removed the `metadata_encoding` and
  `metadata_errors` arguments to `av.open()`** — the exact argument
  faster-whisper 1.2.1 passes in `decode_audio`. Minimal fix chosen:
  pin the newest compatible PyAV, one step down.
- Action: `pip install 'av==18.1.0'` (exit 0).
- Change: **av (PyAV) 19.0.2 → 18.1.0**. Nothing else in the venv changed
  (freeze diff is that single line). faster-whisper stays 1.2.1,
  ctranslate2 stays 4.8.5.
- **Test** (standard file-path lane — the one that crashed before):
  generated 3 s 440 Hz tone WAV (ffmpeg, 16 kHz mono) at
  /tmp/repair-test/tone.wav; `WhisperModel("tiny", cpu, int8,
  download_root=/tmp/repair-test/fw-cache)`, then
  `model.transcribe("/tmp/repair-test/tone.wav", vad_filter=True)`.
  Result: **no decode_audio crash**; language=en; **0 segments**
  (correct for a pure tone — a PASS per the playbook study);
  model load 13.8 s (including the one-time tiny-model download into /tmp),
  transcribe 0.8 s. The ffmpeg/stdlib array bypass is no longer required,
  though it remains available.

## System integrity & RAM

- **dpkg unchanged, verified:** `diff dpkg-before.txt dpkg-after.txt`
  (both 825 lines) → no differences.
- RAM (`free -m` available MB): 361 at dispatch → 386 after snapshots →
  595 after MarkItDown → 845 before the PyAV pin → 1,088 after →
  906–923 during/after the Whisper test. Never dropped under the 250 MB
  floor; the floor-stop never triggered.
- check-tools.sh at the end:
  - `PRESENT  whisper        venv-mod:faster_whisper=/home/hatch/workspace/ember-upgrades/faster-whisper-venv`
  - `PRESENT  markitdown     venv-exe:markitdown=/home/hatch/workspace/ember-upgrades/markitdown-venv venv-mod:markitdown=/home/hatch/workspace/ember-upgrades/markitdown-venv`
- No servers left running (no searxng/whoogle/docling processes; the only
  pgrep hit was this check's own shell command line).

## Files in this folder

- `UNDO.md` — undo path, written before the installs
- `markitdown-freeze-before.txt` / `markitdown-freeze-after.txt`
- `faster-whisper-freeze-before.txt` / `faster-whisper-freeze-after.txt`
- `dpkg-before.txt` / `dpkg-after.txt`
- This report

## Undo (summary — full text in UNDO.md)

Per venv: `pip install -r <freeze-before.txt>` to restore listed versions,
plus `pip uninstall` of any newly added packages (MarkItDown list above).
Venvs are never deleted. System: nothing to undo — dpkg proven unchanged.
