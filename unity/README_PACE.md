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


## Phase0 GitHub pack note
This PR targets the slim `unity/` tree on `GENERATION_MAYHEM` (Phase0). `Combat/KnockbackBody.cs` is **not** in that pack yet (MatchDirector references it but the file is absent). Knockback defaults (−40%) stay documented here for when Combat lands; this PR ships move/accel/turn/Shift pace + video cold-open only.
