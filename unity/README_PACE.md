# Generation Mayhem — Pace pass (Oct 29, 2026)
Goal: slower, readable, less luck-based. Shift is now a clear fast gear.

| Setting | File | OLD | NEW | Change |
|---|---|---|---|---|
| maxSpeed (base move) | Player/SkatePawnController.cs | 12 | 8.4 | −30% |
| accel | Player/SkatePawnController.cs | 28 | 20 | −29% |
| turnRateDeg | Player/SkatePawnController.cs | 220 | 160 | −27% |
| sprintMultiplier (hold Shift, NEW) | Player/SkatePawnController.cs | — (no sprint) | 1.4 → 11.76 top speed | ≈ old 12 |
| knockbackScale (default) | Combat/KnockbackBody.cs | 1.0 | 0.6 | −40% knockback/slide |
| groundFriction (slide damp) | Combat/KnockbackBody.cs | 16 | 22 | damps ~38% faster |
| stunChainGrace (NEW) | Combat/KnockbackBody.cs | — | 0.35 s | re-stun within 0.35 s after a stun ends is halved |

Notes
- These are `[SerializeField]`/public defaults. If a scene or prefab has a saved value, the Inspector value wins — reset the component (or the field) on the player prefab to pick up the new defaults.
- Scripts that set `knockbackScale` at runtime (MatchDirector, SlitherBoss, CityBlockMatchBuilder) still override it for those enemies; unchanged.
- Brake (36), coast (6), air control (0.35) left as-is.
- Web DockContracts (`/workspace/generation-mayhem/web/src/game.ts`) has its own TS constants, not shared with Unity — not changed in this pass.

## 1030 note
Pace table unchanged (8.4 / 20 / 160 / Shift x1.4). Knockback tuning still deferred for Phase0 (KnockbackBody not in Phase0 pack).

## 1101 — match the web build (PROVISIONAL from Idea Guy; lock when he ships finals)

| Setting | File | 1029 | 1101 | Change |
|---|---|---|---|---|
| maxSpeed | Player/SkatePawnController.cs | 8.4 | 6.8 | −19% |
| accel | Player/SkatePawnController.cs | 20 | 11.5 | −43% |
| turnRateDeg | Player/SkatePawnController.cs | 160 | 120 | −25% |
| sprintMultiplier (Shift) | Player/SkatePawnController.cs | 1.4 | 1.4 (unchanged) | top speed 6.8 × 1.4 = 9.52 |
| enemyChaseSpeedScale (NEW) | Match/MatchDirector.cs | — (1.0) | 0.78 | Viper agent.speed −22% at spawn |

Notes
- **Inspector overrides win.** Open CityBlock_Slice / Dockyard and run
  `Generation Mayhem → Pace → Apply 1101 Pace Defaults (open scenes + prefabs)`
  (Editor/GMPaceDefaults.cs). It stamps the 1101 values on every SkatePawnController and
  MatchDirector in the open scenes and in all prefabs (the player prefab included).
  `Audit 1101 Pace (log only)` lists off-default values without changing anything.
- enemyChaseSpeedScale is applied to the NavMeshAgent at spawn (MatchDirector.SpawnViper).
  If ViperGrunt re-sets `agent.speed` in its own states (charge / flee), scale those tables
  at source in ViperGrunt.cs too — that script is not in this repo drop.
- Brake (36), coast (6), air control (0.35) still as-is.
- Web DockContracts TS constants are separate and already at these targets — web/ untouched.
