# Wire: cold-open video + pace (2026-10-29)

Misty approved: wire first, then PR.

## Repo paths (Phase0 branch `cursor/phase0-dockcontracts-web-v5-2d39` → PR into `main`)

| Attach path | Commit to |
|---|---|
| unity/Assets/Scripts/UI/IntroCutsceneController.cs | same |
| unity/Assets/Scripts/Player/SkatePawnController.cs | same (Phase0-safe pace + Shift sprint) |
| unity/Assets/Resources/Intro/* | create folder; mp4 + json + 15 pngs |
| unity/README_PACE.md | new |
| unity/WIRE_COLD_OPEN_PACE_1029.md | new |

## Behavior
- Cold-open plays `Resources/Intro/gm_cold_open` full-frame, captions from `gm_cold_open_dialogue.json` (sum 29.8s inside 30.4s video).
- Skip / Esc / Backspace / Tab / Start → title **CAN YOU SURVIVE THE CIRCUIT** → StartMenu via existing `nextScene` / `GMFlow.StartScene`.
- Falls back to stills beats if video/JSON missing.
- Pace: maxSpeed 8.4 (−30%), accel 20 (−29%), turn 160 (−27%), Shift ×1.4.
- KnockbackBody **not** included (absent from Phase0 pack).
- Requires Unity Video module (`com.unity.modules.video`) — enable if missing.

## Do NOT
- Change web/ DockContracts
- Force-push main
- Rewrite unrelated Phase0 UI
