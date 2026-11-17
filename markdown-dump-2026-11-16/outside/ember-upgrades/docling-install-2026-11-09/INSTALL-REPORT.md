# Docling Install Report — 2026-11-09

- **Date/time:** 2026-11-09, started ~9:29 PM CST, test conversion verified ~9:58 PM CST
- **Authorized by:** Douglas, voice call Nov 9, 2026 ~9:28 PM CST — "Go ahead and sign me up for Docling." Docling is free open-source; **no account/sign-up exists for it and none was created.** The install is local only.
- **Douglas's sign-up permission (recorded per his ~9:28 PM CST update, NOT used here):** when a sign-up is genuinely needed, Ember may use the Muse email purple-rat@muse.ai and his schoonoverdouglas1@gmail.com, and may sign up using the GitHub login option or the Google login option — he implores doing both if possible. No step in this install required an account. The only external download beyond PyPI was Docling's public model files from Hugging Face Hub, fetched **unauthenticated** (the log states "You are sending unauthenticated requests to the HF Hub") — no HF account, no token, no OAuth. Had any step genuinely required an account, that sub-step would have been stopped for the parent to handle in the browser, per instruction.

## Method (Reversibility Rule + Guard)
- Snapshot BEFORE any change: `dpkg-before.txt` in this folder (825 lines, SHA256 3cb97ac05a77a29706fefa1c45f44ea42c39b77b82a5ae23c762ec6e9038ad83)
- Undo path recorded BEFORE install: `UNDO.md` in this folder
- Commands routed through `~/workspace/ember-upgrades/guard/check-command.sh` — all allowed, nothing destructive run, nothing deleted
- Venv-only: `python3 -m venv ~/workspace/ember-upgrades/docling-venv`, pip install inside that venv ONLY. No apt, no system packages, no systemd service.

## Result
- **Installed: YES** — Docling **2.149.0** (with docling-core 2.106.0, docling-parse 7.25.0, docling-ibm-models 4.0.4, torch 2.15.0)
- **Import verify:** `docling-venv/bin/python -c "import docling; print(docling.__version__)"` → `2.149.0`
- **Venv size:** 6.1 GB (plus ~506 MB of public model files cached at `~/.cache/huggingface` during the first test run)
- **dpkg unchanged: YES** — `dpkg-after.txt` diffed against `dpkg-before.txt`: no differences
- **Snapshot path:** `~/workspace/ember-upgrades/docling-install-2026-11-09/dpkg-before.txt`
- **Undo path:** delete `~/workspace/ember-upgrades/docling-venv` (exact steps in `UNDO.md`; deletion itself requires Douglas's in-the-moment order per The Guard)

## Honest bumps on the way (old-with-new, not hidden)
1. First `pip install docling` FAILED (exit 1): `OSError: [Errno 28] No space left on device` while downloading the torch wheel (539.2 MB, stopped at 199.2 MB). Cause: pip staged downloads in `/tmp`, a 512 MB tmpfs — the workspace disk itself had 143 GB free. Nothing had been installed into the venv at that point except pip 26.3.
2. One diagnosed retry with `TMPDIR` pointed at this install folder on the workspace disk: **succeeded (exit 0)**. Logs: `pip-install.log` (failure) and `pip-install-retry1.log` (success), both in this folder.
3. First test conversion failed on an environment quirk: the installed `httpx` cannot parse the bracketed IPv6 entries in this box's `no_proxy` env var (`Invalid port: ':1]'`). Workaround used for the test process only: `no_proxy=localhost,127.0.0.1`. No system config changed. **Future Docling runs should set that simplified `no_proxy` in the calling process**, or they will hit the same error when reaching Hugging Face.

## Test conversion (per PDF-INGESTION.md step 2)
- **Test PDF:** `doc_source.pdf` — `~/workspace/your_files/gui-playground/doc_source.pdf` (1 page, 14,866 bytes, "Notes from Inside the Machine", Nov 7–8, 2026; non-medical, no PII, chosen as the smallest suitable PDF in the workspace)
- **Result: SUCCEEDED** — converted to Markdown (`test-output.md` in this folder, 476 chars). Title and body text recovered correctly, including the closing line "The toolbox was never missing. It was only unopened."
- **Time:** 125.4 seconds total for the first run, including the one-time public model downloads; later runs should be faster with models cached.
- Note: the PDF-INGESTION.md plan mentioned scoring against a serotype table he already has answers for; this smoke test used a simple known text PDF instead to prove the pipeline end-to-end without touching medical material. Table-accuracy scoring on a known table is still available as a follow-up whenever Douglas wants it.
