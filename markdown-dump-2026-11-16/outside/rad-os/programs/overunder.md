# Program: overunder

The Over/Underrun keeper lives at the Rat OS root as `over_under.py`
(Rat Code home: ~/workspace/rat-code/over_under.py — the same script, parallel).

Every situation it watches has a band: a minimum and a maximum of what
should be there. Under the minimum is an UNDERRUN (missing, fallen short);
over the maximum is an OVERRUN (duplicates, excess). Fixes are additive
only — copies are resynced from the source of truth; nothing is ever
deleted. Run: `python3 over_under.py --fix`.
