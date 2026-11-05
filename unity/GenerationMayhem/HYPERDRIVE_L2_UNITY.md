# Hyperdrive L2 — Unity

Hyperdrive is now Level 2 in Unity (not web-only).

## Open / play
1. Unity Hub → open `unity/GenerationMayhem`.
2. Open `Assets/Scenes/Hyperdrive_L2.unity` → press **Play**. `_HyperdriveBootstrap` (HyperdriveL2RuntimeBootstrap) builds the whole Soft lane at runtime:
   Approach 0–35 · Ring Hall 35–90 · Corridor 90–130 · Cockpit Core 130–180 · **Apex 180–215**.
3. Full flow: IntroCutscene (movie-only, untouched) → StartMenu → Dockyard → **win the Dock (Slither KO)** → Hyperdrive_L2. A loss still goes to WeaponUpgrade.
4. Optional bake: menu **Generation Mayhem → Build Hyperdrive L2 (Soft)** overwrites the scene with fully baked objects (bootstrap skips rebuilding if the `Hyperdrive_L2` root exists) and inserts it into Build Settings after Dockyard.

## What's in it
- Vixen SkatePawn (CharacterController + SkatePawnController + SkaterTraversal + SoftHP + trick tracker), TraversalCameraRig.
- Brianna / Payton / Kailee ally kits, Pink Vipers (Swarm/Cobra/Fang/Hive), Mom's Frenzy, HUD, intro.
- Kickers, funboxes, orange grind rails at web coords.
- Apex (toward CityLivedIn_v012): shops **Iron Rose Arms + Slither Surplus only**, 3 ambient civs, silver stairs, 4 cover blocks, **exactly 4 edge guns**, X clamp ±12. Primitive stand-ins.
- Tire ladder: Vixen 0.30 / Payton 0.27 / Brianna 0.22 / Kailee 0.16. **Soft HOLD:** no Tripo war-rig meshes hung.

## Files
- `Assets/Scripts/Hyperdrive/HyperdriveL2Layout.cs` (runtime shared builder)
- `Assets/Scripts/Hyperdrive/HyperdriveL2RuntimeBootstrap.cs`
- `Assets/Scripts/Editor/HyperdriveL2Builder.cs` (now calls the shared layout)
- `Assets/Scripts/UI/GMFlow.cs` (Dock clear → Hyperdrive_L2)
- `Assets/Scenes/Hyperdrive_L2.unity`, `ProjectSettings/EditorBuildSettings.asset`

Not yet compiled in a real Editor — if Unity reports an error on first open, send the Console text.
