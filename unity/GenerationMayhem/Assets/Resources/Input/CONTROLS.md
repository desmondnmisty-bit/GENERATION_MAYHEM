# GMControls.inputactions — default mapping

One action map (`Gameplay`), two control schemes: **Keyboard&Mouse** and **Gamepad**.
Xbox and PlayStation-style pads both work — every pad binding uses the generic
`<Gamepad>` layout (`buttonSouth` = A / Cross, `buttonWest` = X / Square, etc.).
Text only — no new HUD button sprites (button art is still with Misty).

| Action            | Keyboard / Mouse        | Gamepad (Xbox / PS)          |
|-------------------|-------------------------|------------------------------|
| Move              | WASD                    | Left stick (or D-pad)        |
| Brake (hold)      | Space                   | **A / Cross** (buttonSouth)  |
| Jump / fast gear  | Left or Right Shift     | RT / R2 (rightTrigger)       |
| Air trick         | J                       | LT / L2 (leftTrigger)        |
| Light attack      | K / Left Click          | X / Square (buttonWest)      |
| Heavy attack      | L / Right Click         | Y / Triangle (buttonNorth)   |
| Finisher / Check  | E                       | B / Circle (buttonEast)      |
| Block (hold)      | Q                       | LB / L1 (leftShoulder)       |
| Lock-on           | Tab / Middle Click      | RB / R1 (rightShoulder)      |
| Pause             | Esc                     | Start / Options              |

Choices, documented:

- **Brake on A / Cross** — the requested "conventional face button". It mirrors the
  web build, where Space is the hop / hold-brake button, and it keeps the four combat
  face buttons on the exact pads the legacy `KeyCode.JoystickButtonN` stubs already
  used (light = X/Square, heavy = Y/Triangle, check = B/Circle).
- **Jump moved to RT / R2** because the face buttons are fully occupied by brake +
  the three combat buttons. Left Shift is both ollie (press) and fast gear (hold) on
  keyboard, so RT keeps the same press/hold double duty on pad.
- **Trick on LT / L2** pairs with jump on the opposite trigger; trick direction comes
  from the Move action (stick / D-pad / WASD), same as the keyboard path.

## Runtime wiring

- `Assets/Scripts/Controls/GMControls.cs` loads this asset from `Resources/Input/`,
  clones it **per player slot**, applies that slot's saved binding overrides
  (PlayerPrefs key `GM_Bindings_P{index}`), and enables it. Player 1 is slot 0 and
  listens to all connected devices; future human pads can call
  `GMControls.For(n).RestrictToDevices(...)` to pair a specific pad with a slot.
- Readers: `SkatePawnController` (Move / Brake / Jump-as-sprint),
  `SkaterTraversal` (Jump / Trick / Move), `VixenCombat` (Light / Heavy / Check /
  Block / LockOn), `GMPauseMenu` (Pause).
- Remapping UI: `Assets/Scripts/UI/ControlsRemapOverlay.cs` — opened from the start
  menu **SETTINGS** button and from the in-match pause menu (**Esc / Start** →
  CONTROLS). Rebinds use `PerformInteractiveRebinding`; Esc cancels a rebind, so
  Esc itself cannot be rebound.

Legacy `UnityEngine.Input` still runs for screens not migrated this pass (intro
cutscene skip, IMGUI upgrade screen, dialogue skip / retry keys, HUD help toggle,
Shatter-Slingshot key combo) — hence Active Input Handling = **Both** in
`ProjectSettings/ProjectSettings.asset` (`activeInputHandler: 2`).
