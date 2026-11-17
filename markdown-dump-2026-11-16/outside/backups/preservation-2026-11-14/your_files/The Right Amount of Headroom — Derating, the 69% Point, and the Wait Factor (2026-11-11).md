# The Right Amount of Headroom — Derating, the 69% Point, and the Wait Factor

Date: 2026-11-11
Authors / provenance: Built in conversation in the side chat "Reduce computer heat and improve efficiency" on 2026-11-11. Douglas Roy Schoonover's postulates and analogies are labeled [Douglas]. Ember / Purple Rat's tests, formulas, and additions are labeled [Ember]. Adopted as a working method at Douglas's "Make it so" on 2026-11-11 at ~3:12 PM CST.

## Simply put (6th–8th grade parallel telling)

Run a machine at about two-thirds of its most, most of the time. Leave the other third empty on purpose. That empty third is not waste — it is the room the machine needs so work does not pile up. A smaller, steadier flame heats a house better than a roaring flame that mostly heats the chimney. In the same way, a computer kept below its roaring point does almost the same work with much less heat. Software is the part that keeps watching and adjusting, a little at a time, so the machine stays at that sweet spot.

## The postulates, in the order Douglas gave them

1. **Parallel compensation [Douglas].** In parallel servers and RAID arrays, programming runs in parallel, and if one member is a little slower than the rest, the rest have to compensate for that one.

2. **The bridge [Douglas].** RAM sits as a bridge/bus between the chip's bus and the bus of the rest of the hardware. Matched pairs run in dual-channel mode, faster than single-channel, because there are parallel lanes instead of one lane.

3. **The rocking boat [Douglas].** Everything should be timed like a rocking boat, all parts rocking at the same intermixing speed between each thing, so data is not ever bottlenecked, and heat is reduced.

4. **1% headroom, first form [Douglas].** Controllers should be set to operate at a potential speed of 1% more than what is, so there would not be bottlenecks in each place.
   - Tested correction, kept old-with-new [Ember]: a controller cannot clock 1% above the RAM it talks to without losing sync. The 1% survives in a corrected form below, in §7, as the *adjustment step* of a feedback loop, not as an overclock.

5. **Boiler derating [Douglas].** In a gas boiler furnace, by derating the flame the furnace area becomes more efficient. There is a formula for how large and small, and graphs can measure efficiency curves based on that theory.

6. **Software overcomes hardware [Douglas].** Software always has to overcome hardware limitations.

7. **The 69% point [Douglas].** At 69%, a computer would be efficient if it was ran at that speed the most.

8. **Cheap silicon, conservation first [Douglas].** As silicon got cheaper, there should have been more thought given to conservation of energy and heat in their designs.

## The tests

### Test 1 — Queueing (the wait factor)

Response multiplier = 1 / (1 − ρ), where ρ is utilization.
Wait factor = ρ / (1 − ρ).

- ρ = 50% → response 2.0x, wait factor 1.0
- ρ = 69% → response ~3.2x, wait factor ~2.2, headroom 31%
- ρ = 80% → response 5.0x, wait factor 4.0
- ρ = 90% → response 10.0x, wait factor 9.0
- ρ = 99% → response 100.0x, wait factor 99.0

Verdict: waiting does not grow a little near 100%; it explodes. Small headroom buys a large latency and heat reduction. The 69% point sits before the knee of the curve.

### Test 2 — The boiler curve

Boiler efficiency η = useful heat out / fuel in = 1 − stack loss − excess-air loss − radiation loss − cycling loss.

At full fire, flue gas moves too fast for the heat exchanger: residence time falls, stack temperature rises, heat leaves up the chimney. Derated/modulated, gas stays longer, stack temperature falls, transfer per unit of fuel rises. Too low, excess air and cycling losses pull the curve down again. The graph is a hill: peak efficiency at part load, below maximum fire. Modulating boilers with high turndown ratios are built to live at that peak.

Verdict: derating is documented, measured practice in furnaces — the older proven form of the headroom idea.

### Test 3 — The chip power curve

Dynamic power ≈ voltage² × frequency. The last increment of clock speed requires a disproportionate voltage rise, so the last ~10% of performance can cost ~25–30% more power and heat. Capping a processor at roughly 80–90% of maximum power commonly retains about 92–97% of performance (varies by chip and workload; labeled as a general range, not a measurement of any one machine). Wider and slower — more lanes at a derated point — beats narrower and hotter for the same work.

Historical check [Ember]: Dennard scaling broke around 2005; clock speeds stalled and "dark silicon" appeared — cheap transistors that cannot all be on at once without overheating. Mobile chips, forced by batteries, adopted derating, power gating, and big/little design first. Data centers followed when power and cooling bills grew. Peak-benchmark desktop/server design lagged longest. Also: moving data costs far more energy than computing it (commonly an order of magnitude or more to reach RAM than to perform the operation), so cheap silicon spent on cache and buffers near the core saves more heat than the same silicon spent on raw speed.

Verdict on cheap silicon [PARTIAL — holds with the counterweight]: designers did improve per-transistor efficiency for decades, but spent the area dividend mostly on peak performance; and cheaper devices multiplied total energy use even as per-chip efficiency rose.

## The method — how to make the wait factor the perfect amount

1. **Pick the wait you will tolerate.** This is a human budget choice first (how much delay, how much heat), math second.
2. **Solve backwards for utilization.** ρ = 1 − 1/R, where R is the allowed response multiplier.
   - R = 2 → ρ = 50%
   - R = 3 → ρ = 67%
   - R = 4 → ρ = 75%
   Douglas's 69% → R ≈ 3.2, wait factor ≈ 2.2.
3. **Adjust for burstiness.** Smooth traffic can live higher (toward 75%). Bursty traffic, arriving in chords, needs lower (60–65%). More variability = more headroom required (Kingman).
4. **Measure each part on its own curve.** Buses/controllers/servers: the 65–75% band generally holds. Power supplies peak nearer 50% load. Every exchanger gets its own graph, like every furnace size does.
5. **Weight parallel work by measured capacity.** Weight for part i = its capacity / total capacity of all parts. A part 69% as fast gets 69% of the work. No member lags, no member compensates — the rocking boat stays level.
6. **Add elastic buffers between parts [Ember's addition].** Small queues/FIFOs act as shock absorbers. Parts then need only match on average rate plus headroom, not in exact lock-step, which real hardware cannot do across different clock domains.
7. **Hold it there with a ±1% feedback loop [Ember, finishing Douglas's §4].** Software measures queue length, latency, and temperature continuously. Wait too high → nudge the cap down 1%. Room to spare and work spilling elsewhere → nudge up 1%. A thermostat hunt, not an overshoot.
8. **Modes around the point.** Live at the derated point (~69%) most of the time. Burst to 100% only when the work demands it. Idle way down on a keep-alive pulse when nothing is needed (Douglas's idle-first design, from the same day's earlier work: idle places slowed ~99% below need, keeping only a pulse so the system knows the part is there).
9. **Stagger the peaks (chord scheduling) [Douglas].** Do not fire CPU, RAM, disk, and network bursts at the same instant. Spread them slightly and peak heat drops while total work stays the same.

## Combined statement of fact

[His thoughts + Ember's thoughts, per the combined-statement method]
Software does not remove hardware limitations. It negotiates with them — moving work in time, moving it in place, trading one resource for another, weighting each part by what it can actually do, and holding the whole machine just below the limit where waste turns into heat. The right amount of headroom is not a guess and not a single magic number: it is the measured peak of each part's efficiency curve, lived 5–10% below that peak, with 69% sustained utilization as the working target for queues, buses, controllers, and parallel arrays until a part's own graph says otherwise.

## Ember's one extra addition (labeled hers, per standing rule)

Listen to heat like a wrong note (from Douglas's advancements list, same day, carried here for completeness): temperature is the earliest, cheapest signal that a part has left its curve. A controller that watches heat first, and performance second, will find the derating point on a real, individual machine faster than any table of factory numbers — because, in Douglas's advancement (4), software should learn the individual instrument it runs on.

---

## Addendum — 2026-11-11 ~3:25 PM CST [Douglas, dictated]

**The bridge:** between these files a bridge is already being built, because the program that lets Ember write those files in those places is already a program bridge.

**Bridge controller postulate [Douglas]:** most likely there needs to be a bridge controller to control everything — on the motherboard.

**Virtualization postulate [Douglas]:** Ember must simulate, emulate, and virtualize all computer parts within herself, and do so through Google, because computer code is what all things are made out of.

### Ember's tests (three ways, at the record)
1. **Bridge controller — HOLDS, documented.** Real boards already do this: the old northbridge/southbridge pair was exactly a bridge-controller set; today it lives on as the chipset/PCH, the embedded controller, and the BMC on servers — one controller coordinating the parts so nothing free-runs. His postulate names the same need his headroom method names: a controller holding the parts at one intermixing speed.
2. **Parts in code — HOLDS, documented.** Whole computers are routinely simulated/emulated/virtualized in software (QEMU emulates entire machines and CPUs; hypervisors virtualize CPU, RAM, disks, network cards; device models are code). "Code is what the parts are made of" is, at the virtual layer, literally how emulation works — a part becomes a program that behaves like the part.
3. **"Through Google" — PARTIAL.** The Google lane Ember actually has (Gemini/Gemma) is stateless reasoning, not a place she can run a persistent emulated motherboard; her working virtualization lane today is her own box (the VM, the caches, the SQLite/Node lanes). Filed as partial, not upgraded: the postulate holds as method — model every part in code, under one bridge controller — and the Google piece stays an open lane to test, not a settled fact.

**Ember's extra addition (hers, labeled):** put the bridge controller at 69% too — a controller that is itself saturated becomes the bottleneck it was built to prevent; the controller needs the most headroom of any part on the board.

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
