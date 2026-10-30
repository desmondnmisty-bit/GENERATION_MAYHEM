GENERATION MAYHEM - DOCK CONTRACTS (web build v1)
A Dark Logic Studios game. Created by Misty McDaniel Breeden.
Dark Logic Studios ™
===================================================================

WHAT THIS IS
A playable browser build of the Dockyard vertical slice. You play as Vixen, with
Kailee fighting beside you. Skate north through the night dockyard, survive
4 waves, beat Falcon (Iron Rose) and reach the EXTRACTION GATE.

The whole game is a single self-contained file, index.html (about 10 MB). The
models, textures, code and audio are all inside it. No install, no internet needed.

-------------------------------------------------------------------
HOW TO OPEN IT
-------------------------------------------------------------------
On your computer:
  1. Unzip the folder.
  2. Double-click index.html. It opens in your browser.
     For the best performance use Chrome, Edge or Firefox (desktop).
  3. Click PLAY, then click inside the game to lock the mouse.
  (If a locked-down browser refuses to run local files, open a terminal in the
   folder, run  python -m http.server 8000  and go to http://localhost:8000/ )

On itch.io:
  1. Create a new project. Set "Kind of project" to HTML.
  2. Upload GenerationMayhem_DockContracts_web_v1.zip and tick
     "This file will be played in the browser".
  3. Set the embed size to 1280 x 720. Turn on "Click to launch in fullscreen"
     or "Mobile friendly" if you want them. The fullscreen button is
     recommended.
  4. Save, then view the page.

-------------------------------------------------------------------
CONTROLS
-------------------------------------------------------------------
Keyboard and mouse
  W A S D ............ skate (with momentum: accelerate, carve, glide)
  Mouse .............. aim the camera (click the game to lock; Esc releases)
  Space .............. tap to hop / hold to brake   (Shift also brakes)
  Left click or J .... Resonator punch (3-hit combo, stronger at speed)
  Right click or K ... sonic cone (short blast, staggers enemies, destroys bolts)
  E or L ............. SHATTER-SLINGSHOT (when the Chaos meter is full)
  Arrow keys ......... turn the camera without the mouse
  Esc or P ........... pause (Resume / Replay / Quality / Main Menu)
  M .................. mute

Touch (phones and tablets)
  Left stick to skate. On-screen PUNCH, CONE, SLING and HOP buttons. II pauses.

-------------------------------------------------------------------
HOW TO PLAY
-------------------------------------------------------------------
Goal: survive 4 waves of Pink Vipers and Iron Rose Enforcers. Each cleared wave
drops the magenta laser fence ahead. Falcon arrives in wave 4. Beat Falcon, then
skate into the extraction gate to win.

Chaos meter: whenever Kailee takes damage, Vixen's CHAOS meter fills. When it is
full, the screen shakes, a cue plays and the meter flashes. Press E to fire the
Shatter-Slingshot: Vixen tethers to Kailee and launches her through the enemy
line. If Kailee goes down she gets back up after 8 seconds.

Hazards: the swinging crane-hook container, electrified puddles (they flicker
before switching on) and the water's edge past the yellow curb. All of these
hurt enemies too. Knock enemies into the water for an instant KO.

If Vixen goes down: RETRY WAVE restarts from the current wave, and REPLAY
restarts the whole run.

Quality: the game drops to LOW automatically on slow machines. You can switch it
yourself in the pause menu.

-------------------------------------------------------------------
CREDITS
-------------------------------------------------------------------
A Dark Logic Studios game
Created by Misty McDaniel Breeden

SPECIAL THANKS
Carl Mitchell, Jessica Greene & Glenda Smith without yalls love, support, and backing nothing I've done would have been possible. Love you guys!

Dark Logic Studios ™

--- v2_wheels (2026-10-25) ---
Vixen + Kailee now use the Unity Soft hero packs (Oct 12): Vixen big knobby hip-frame tires with red hubs over black inlines; Kailee's big glowing wheels. Same ChaosWheelSkate rig/anims. Prototype quality only - early look/feel, not the funded slice.
Open index.html in Chrome/Edge (or run `npm run dev` in web/).

== v3 VIXEN FIX (2026-10-25) — INTERNAL / NOT PARTNER-FACING until Misty OKs the face ==
- Removed bad auto-generated emissive map from Vixen body (it lit her arms/skin red).
- Removed Soft "ResonatorMuzzle_Mask" disc prop that covered her face (texture mask from Soft BC shows instead, matching VIXEN_real_base).
- Textures 2048 webp (was 1024). Big hip wheels + red hub glow kept. Rig unchanged.
- Shots: 16_vixen_face.png, 17_vixen_34.png, 18_vixen_wheels.png

== v4 VENTS (2026-10-25) — Misty OKed v3 face; adds mask vent glow ==
- New mask-only emissive map: Soft VIXEN_E_2K limited to the face/muzzle UV box AND pixels that are red mask paint in VIXEN_BC_2K. Skin/arms stay unlit.
- No body-wide E map, no ResonatorMuzzle disc. 2048 textures, hip wheels + hub glow unchanged.
- New shot: 19_vixen_vents.png (16/17/18 refreshed).

-------------------------------------------------------------------
v5 (2026-10-25): pace pass - player top speed 8 / accel 14.5 (was 11.5/21), chase camera farther/higher, slower Vipers/Falcon, colored ground rings + longer attack telegraphs. Vixen Soft face + mask vent glow (partner-safe). Early look/feel prototype; not the fundable 15-min slice, no co-op, not Steam-ready.
