© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# program: crew
```python
import csv
rows = list(csv.reader(open("system/crew.csv")))
print("Crew: " + ", ".join(f"{r[0]} ({r[1]})" for r in rows[1:]))
```
