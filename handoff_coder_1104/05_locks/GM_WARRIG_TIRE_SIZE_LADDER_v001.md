# War-Rig Tire Size Ladder (Misty voice 2026-11-04 call end)

**Rule:** Size by person / role need — not equal.
1. **Vixen** — biggest (tank)
2. **Payton** — tank #2 (slightly under Mom)
3. **Brianna** — mid / smaller than tanks
4. **Kailee** — smallest (striker)

## Three.js `web/src/game.ts` addTruckTires R/T/X
| Char | Prior modest | Ladder now |
|------|--------------|------------|
| Vixen | 0.28 / 0.11 / 0.30 | **0.30 / 0.12 / 0.32** |
| Payton | 0.26 / 0.10 / 0.28 (tied Brianna) | **0.27 / 0.105 / 0.29** |
| Brianna | 0.26 / 0.10 / 0.28 | **0.22 / 0.09 / 0.24** |
| Kailee | 0.10 / 0.029 / 0.12 | **0.16 / 0.06 / 0.18** (bigger; still under Brianna) |

Hubs unchanged. Unity lockstep required (`WarRigTireStandIn.cs`).
Concept war-rig re-renders follow the same ladder.

## Update — Misty "Kailee's bigger"
Kailee 0.10 / 0.029 / 0.12 → **0.16 / 0.06 / 0.18** (still under Brianna 0.22). Unity lockstep.
