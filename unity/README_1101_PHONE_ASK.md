# 1101 — Misty's phone ask (Unity side only)

Goal: laptop Unity (CityBlock_Slice / Dock Contracts) lines up with the browser build.
`web/` is intentionally untouched; the cold-open intro / captions / music are NOT touched
(not greenlit). Pace numbers are LOCKED — Idea Guy finals, web v7 (PR #4, gh-pages
1e54bb2): https://desmondnmisty-bit.github.io/GENERATION_MAYHEM/?v=7-1e54bb2

This repo carries only the Phase0 script drop (`unity/Assets/Scripts`); the CityBlock /
Dockyard scenes, player prefab, Sonic scream HUD and wheel meshes live in the full project
on the laptop. Each item below says what landed here and what to run there.

## 1. Pace — slower, skill-readable, not luck (LOCKED, web v7)

- `Player/SkatePawnController.cs`: maxSpeed **6.8**, accel **11**, turn **lerp 5.2 → 2.4
  rad/s** by speed/MAX (snap 9 rad/s under 2.5 — replaces the old flat `turnRateDeg`),
  overspeed burst **cap MAX+3.2, bleeding 12/s** above MAX (kicker / rail / boost headroom;
  applies grounded and in air). Shift sprint neutralized to **×1.0** — web v7 has no sprint
  gear (Shift is brake there); the +3.2 burst cap is the only over-MAX headroom.
- `Match/MatchDirector.cs`: vipers spawn at agent speed **4.8**, acceleration **9.5**
  (`viperChaseSpeed` / `viperChaseAccel`).
- Because **Inspector overrides win over script defaults**, run
  `Generation Mayhem → Pace → Apply 1101 Pace Defaults (open scenes + prefabs)` with
  CityBlock_Slice / Dockyard open. `Audit 1101 Pace (log only)` just reports drift.
- TODO (laptop — scripts not in this repo drop, locked numbers): rebase ViperGrunt
  per-state tables on **4.8**; enforcers **3.6** (accel **7**); boss **4.7** (accel
  **9.5**), dash **24**; melee lunges **8 / 6.5**; enemy bolts **13**; Kailee combat
  follow **9**.

## 2. Wheels — axle spin, not a solid blob

- New `Player/SkateWheelSpinner.cs`. Add it to the player prefab next to
  SkatePawnController; assign the wheel transforms or let it auto-find children named
  `*wheel*`. Wheels roll around their axle axis from real planar speed (signed — skating
  backwards spins backwards), capped so they don't strobe at sprint.
- The usual cause of the blob look is the FBX pivot not being at the hub:
  `recenterPivots` (default on) wraps each wheel in a generated `<name>_Axle` parent at its
  renderer-bounds centre and spins that, so rotation happens around the true hub without
  re-exporting the mesh. Set `wheelRadius` to the real mesh radius.

## 3. Sonic scream UI + HUD — much smaller

- New `UI/GMHudTuning.cs`: single source for HUD sizing — `HudScale = 0.6` (whole match
  HUD at 60%) and `SonicScreamExtraScale = 0.75` (scream UI at 0.6 × 0.75 = 45%).
- uGUI HUDs: drop the `GMHudCompactor` component into CityBlock_Slice / Dockyard. It
  shrinks root canvases by name (`HUD/Match/Meter/Chaos`, scream = `Scream/Sonic`) and
  skips menus (`StartMenu/Upgrade/Intro`). Rescans so code-built HUDs are caught.
- IMGUI HUDs: in the HUD's `OnGUI`, replace the hand-rolled 1920×1080 matrix with
  `var prev = GMHudTuning.BeginHudMatrix(out float W, out float H); ... GUI.matrix = prev;`.
- TODO (laptop): the Sonic scream UI script itself isn't in this repo drop — apply one of
  the two hooks above to it and tune the two constants on the phone until readable.

## 4. Arena — rooms, not a corridor  (ART FOLLOW-UP NEEDED)

- The CityBlock greybox isn't checked in here, so no layout change landed. If the current
  greybox plays as one long line: break it into 3–5 pocket "rooms" (plaza, alley loop,
  dock pad) connected by at least two routes each, so there's always a flanking skate line;
  place zone markers / crane hazards per room rather than along one spine. Needs a greybox
  + NavMesh re-bake pass in the full project — flagging for the art/level follow-up.

## 5. Interact dialogue / banter

- Hooks exist and are live: `MatchDirector.Say(speaker, line)` queues subtitles;
  `MatchDirector.SaidOnce(key)` guards one-shot barks. Pre-match, re-try, crane, downed,
  toxic-flood and win/lose banter are wired in MatchDirector/Bots/GameFlow.
- TODO (missing content, not in this drop):
  - No interact/prompt system (walk-up E-to-talk) is checked in — if the laptop project has
    `Interactable`/prompt stubs, point their callbacks at `MatchDirector.Say`.
  - CityBlock zone banter (dock contracts pickup/turn-in lines) — content not written.
  - Kailee/Brianna/Jessica idle chatter pool for skating between rooms — content not written.

## Verify in Editor (laptop, full project)

1. Pull this branch, let scripts compile.
2. Run `Generation Mayhem → Pace → Apply 1101 Pace Defaults`, check the console summary.
3. Add `SkateWheelSpinner` to the player prefab (wheels/radius), `GMHudCompactor` to the
   CityBlock / Dockyard scene.
4. Play CityBlock_Slice (or Dockyard): base skate tops out at 6.8 (no sprint gear — a
   kicker/rail burst carries up to +3.2 and bleeds off); steering is wider at speed and
   snappy near standstill; wheels visibly roll and stop with you; Vipers chase at 4.8;
   HUD + scream UI small but phone-readable; banter still fires on crane drops / downs.
