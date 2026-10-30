# Wire: Bake-only cold open (1030)

- `gm_cold_open.mp4` (31.9s, 7,538,025 B, H.264 video-only) has captions + title sting "CAN YOU SURVIVE THE CIRCUIT" burned in.
- Unity `IntroCutsceneController.cs`: video loads from `Resources/Intro/gm_cold_open` -> plays with HUD title/caption/pink bolt hidden; dialogue JSON NOT required (no caption loop; Click/Space do nothing during video).
  - Natural end -> fade -> LoadScene(StartMenu) (no duplicate Tag card; sting is baked).
  - SKIP / Esc / Backspace / Tab / Start (Joystick7) early -> Tag() tagline -> StartMenu.
  - Audio: routed to an AudioSource if the clip has an audio track; current clip is silent -> None.
  - Fallback: video missing or fails Prepare within 5s -> stills beats (Resources/Intro/*.png) with HUD restored.
  - Safety cap: waits at most clip.length + 3s if loopPointReached never fires.
- Browser:
  - GitHub Phase0 static: `web/intro/gm_cold_open.mp4`, overlay injected right after `<body>` in `web/index.html` (`web_index_cold_open_snippet.html` / `apply_web_cold_open.py` / `web_index_cold_open.diff`). Muted autoplay; click / any key / ended / error removes overlay.
  - Vite local: `web/public/intro/gm_cold_open.mp4` (served as `intro/gm_cold_open.mp4`, wired in `web/src/main.ts`).
- Silent backup (no captions): `art/intro_stills_now/gm_cold_open_silent.mp4` (not shipped).
- Pace unchanged: see README_PACE.md.
