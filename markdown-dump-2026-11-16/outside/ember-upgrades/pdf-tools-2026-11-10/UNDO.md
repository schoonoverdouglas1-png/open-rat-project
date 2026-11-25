© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# PDF tools install — undo manifest (written BEFORE install, Reversibility Rule)
Date: 2026-11-10. Ordered by Douglas: "Add pdf functions please."
What will be added:
- venv only: ~/workspace/ember-upgrades/pdf-venv (PyMuPDF, pypdf, reportlab, pdfplumber + deps)
- tool: ~/workspace/ember-upgrades/pdf-tools-2026-11-10/pdf.py (+ wrapper pdf.sh)
- NO system packages (dpkg untouched), NO services, NO config changes.
UNDO (complete): rm -rf ~/workspace/ember-upgrades/pdf-venv ~/workspace/ember-upgrades/pdf-tools-2026-11-10
Nothing else on the box changes; removal restores the exact prior state.
