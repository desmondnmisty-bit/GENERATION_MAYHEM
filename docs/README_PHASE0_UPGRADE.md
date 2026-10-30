# Phase 0 — Weapon Upgrade Loop (Dockyard)

## Open & test
1. Open project `generation-mayhem/unity/GenerationMayhem` in Unity 6.
2. Open `Assets/Scenes/Dockyard.unity` (only scene in Build Settings). Press Play.
   (Optional: menu **Generation Mayhem → Phase 0 → Wire Upgrade Loop (Dockyard)** puts `GM_GameFlow` in the scene with the REFBOT_Ref.fbx model. Without it, GameFlow self-spawns at runtime with placeholder bots.)

## Loop
START SCREEN (PLAY / QUIT) → Ref Bot call → FIGHT
→ Round 1 (Slither Phase 1) → boss hits Phase 2 → Ref: "End of round 1!" → game pauses → **UPGRADE SCREEN** → Med Bot heals/revives the family → Round 2
→ Phase 3 → upgrade again → Round 3 → KO → **UPGRADE SCREEN** → NEXT FIGHT (Dockyard reloads, upgrades carry over, Ref calls "Fight 2!").

## How the player uses it
- 3 random cards (non-maxed). Pick: A/D, arrows, 1/2/3, D-pad/stick, or mouse click.
- Enter / Space / pad A → confirm box → CONFIRM (Enter/A) or BACK (Esc/B).
- Applied instantly to the live fighters; bottom-left chip shows current upgrades. Each upgrade stacks to LV 3.

## What numbers change (per level)
| Upgrade | Weapon asset | Change |
|---|---|---|
| White-Hot Edge | GM_WPN_KAILEE_BLADE_v01 | Kailee blade dmg 14 → 17.5 / 21 / 24.5 |
| Quick Draw | GM_WPN_KAILEE_BLADE_v01 | Kailee swing cooldown 0.75s ×0.85 per level |
| Coil Overcharge | GM_WPN_BRIANNA_GAUNTLETS_v01 | Brianna bolt dmg +30%, range +2m |
| Rapid Coil | GM_WPN_BRIANNA_GAUNTLETS_v01 | Brianna fire cooldown 1.1s ×0.82 |
| Resonant Hits | GM_WPN_SONIC_RESONATOR_v01 | All Vixen attack dmg +20% (jab/cross/kick/heavies/check/ramp slam) |
| Snap Combo | GM_WPN_SONIC_RESONATOR_v01 | Vixen windup+recovery ×0.88 (faster swings) |
| Wheels Pace | Chaos Wheels | Vixen top speed +10% |
| Big Drum | GM_WPN_DRUM_100_v01 | Jessica shell dmg +25%, cooldown ×0.9 |

## Bots
- **Ref Bot**: spawned beside the arena; bounces on match start / round end / KO; one-liners ("Down goes the Viper!", "Round 2! FIGHT!").
- **Med Bot** (PLACEHOLDER mesh — Soft rebuild pending; assign `GameFlow.medBotModel` when ready): full heal + revive between rounds; drops a green Patch Kit every 30s (+35 HP when any family fighter touches it).

## Dialogue
Intro trimmed to 4 punchy lines; no lore. Upgrade picks trigger a 1-liner from the weapon owner.

## Files
- NEW `Assets/Scripts/Upgrades/WeaponUpgrades.cs` — catalog, `PlayerLoadout` (static runtime state), `UpgradeApplier`
- NEW `Assets/Scripts/Flow/GameFlow.cs` — start screen, rounds, upgrade screen, next fight
- NEW `Assets/Scripts/Flow/Bots.cs` — RefBot, MedBot, MedPickup
- NEW `Assets/Scripts/Editor/Phase0UpgradeWiring.cs` — scene wiring menu
- EDIT `Assets/Scripts/Match/MatchDirector.cs` — waits on start screen, Retry guarded during upgrade, short lines
- EDIT `Assets/Scripts/Player/SkatePawnController.cs` — `UpgradeSpeedScale`

Not compiled in an editor here (no Unity on the build box) — first open may need a tiny fix if anything trips.
