Rat Debug Report — broken_test.py

Target: /home/hatch/workspace/rat-code/broken_test.py
When: 2026-11-16T12:20:37
Compile: OK
Run exit code: 1

ERROR FOUND
Type: NameError
Detail: NameError: name 'total' is not defined
Failing line: 5
Source: print(total + 1)

Full traceback (tail):
Traceback (most recent call last):
  File "/home/hatch/workspace/rat-code/broken_test.py", line 5, in <module>
    print(total + 1)
          ^^^^^
NameError: name 'total' is not defined


Debugger-first rule: this report is what actually came back from running the code. Debug from the report, not from a guess.
