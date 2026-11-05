# War-Rig Tire Scale — MODEST shrink v002 (voice 2026-11-04)

**Source:** Misty voice — wheels still too big in Three.js browser; modest further cut. Unity lockstep.

## File
`web/src/game.ts` — `addTruckTires(kit, R, T, X, accent)` call sites

## Before → After
| Char | Before R/T/X | After R/T/X | Hub |
|------|--------------|-------------|-----|
| Vixen | 0.34 / 0.13 / 0.36 | **0.28 / 0.11 / 0.30** | 0xff1fcf |
| Payton / Brianna | 0.32 / 0.12 / 0.34 | **0.26 / 0.10 / 0.28** | purple / green |
| Kailee | 0.12 / 0.035 / 0.15 | **0.10 / 0.029 / 0.12** | still smaller |

Backup: `web/src/game.ts.bak_1104_tireshrink2`

## Standing rule
Three.js browser ↔ Unity stay in lockstep — same change, same proportion.

## Soft Soft Soft Soft mesh / Concept plates
Still HOLD for Concept re-render at smaller tire scale (separate from this stand-in tweak).

## Unity Dock stand-in (lockstep — Expert Unity Developer 2026-11-04)
File: `unity/GenerationMayhem/Assets/Scripts/Art/WarRigTireStandIn.cs`
- Constants mirror Three.js AFTER values exactly (Vixen 0.28/0.11/0.30, Payton/Brianna 0.26/0.10/0.28, Kailee 0.10/0.029/0.12).
- `WarRigTireStandIn.Apply(root, who)` hides baked WarRig/hip wheels and hangs L/R procedural stand-ins.
- `WarRigTireStandInBehaviour` auto-picks who from GameObject name on Start.
- LOCAL ONLY / no gh. Soft Soft Soft Soft mesh still HOLD for Concept smaller-tire plates.
