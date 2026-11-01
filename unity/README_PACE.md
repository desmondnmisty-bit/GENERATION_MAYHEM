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

## 1101 — PACE LOCK (Idea Guy finals, web v7: PR #4, gh-pages 1e54bb2)

Matches https://desmondnmisty-bit.github.io/GENERATION_MAYHEM/?v=7-1e54bb2 exactly.

Player (Player/SkatePawnController.cs)

| Setting | 1029 | LOCKED 1101 | Notes |
|---|---|---|---|
| maxSpeed | 8.4 | **6.8** | |
| accel | 20 | **11** | |
| turn | 160 deg/s flat | **lerp 5.2 → 2.4 rad/s** by speed/MAX | snap 9 rad/s under speed 2.5; replaces `turnRateDeg` |
| overspeed burst | — (chopped at max) | **cap MAX + 3.2, bleeds 12/s above MAX** | kicker / rail / boost headroom |
| sprintMultiplier (Shift) | 1.4 | **1.0** | web v7 has no sprint gear (Shift brakes there); burst headroom is the +3.2 cap |

Enemies (−20…23% vs prior; web v7 locked)

| Enemy | LOCKED 1101 | Where |
|---|---|---|
| vipers | **4.8** (accel **9.5**) | Match/MatchDirector.cs (`viperChaseSpeed/Accel`, agent at spawn) — rebase ViperGrunt per-state tables on 4.8 (laptop) |
| enforcers | **3.6** (accel **7**) | laptop-only script |
| boss | **4.7** (accel **9.5**), dash **24** | laptop-only script |
| melee lunges | **8 / 6.5** | laptop-only script |
| enemy bolts | **13** | laptop-only script |
| Kailee combat follow | **9** | laptop-only script |

Notes
- **Inspector overrides win.** Open CityBlock_Slice / Dockyard and run
  `Generation Mayhem → Pace → Apply 1101 Pace Defaults (open scenes + prefabs)`
  (Editor/GMPaceDefaults.cs). `Audit 1101 Pace (log only)` lists drift without changing anything.
  The old `turnRateDeg` serialized field is gone — stale scene/prefab overrides of it are
  dropped automatically on load.
- Brake (36), coast (6), air control (0.35) still as-is (not part of the locked table).
- Web is the source of truth and already at these numbers — web/ untouched.
