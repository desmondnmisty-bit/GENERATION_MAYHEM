# Phase 0 — Intro Cold Open

Scene order (EditorBuildSettings): **IntroCutscene → StartMenu → Dockyard → WeaponUpgrade**

Script: `Assets/Scripts/UI/IntroCutsceneController.cs` (scene `Assets/Scenes/IntroCutscene.unity`).
How To Play overlay: `Assets/Scripts/UI/StartMenuController.cs` (auto-shows first launch via PlayerPrefs `GM_HowToSeen`; also a HOW TO PLAY button).

## Beats (1 short caption each)
1. kids_happy — "This is what I fight for." (warm)
2. irs_contracts — "Sign it. Or lose everything." (red pressure push-in)
3. phone_call — "One call. That's all it took."
4. kitchen_rage — "RAGE." (shake + pink flash)
5. garage_cabinet — "The big cabinet. Haven't opened it in years." (dust tint)
6. war_rig_dusty — "Still here. Still mine." (dust)
7. strapping_in — "Strap in." (slow fade black + blur pulse → black)
8. Tagline **CAN YOU SURVIVE THE CIRCUIT** → fade → StartMenu (+ How To Play first launch)

Controls: Click / Space / Enter / Pad A = next beat; auto-advances on timer. SKIP button (or Esc) appears after beat 1 → jumps to tagline.

## Swap in real art
Drop images named after the slot into `Assets/Resources/Intro/` (e.g. `kids_happy.png`), Texture Type = Sprite. Or assign Sprites in the IntroCutsceneController `art` array (same order). Captions/durations/effects editable in the `beats` array in the Inspector.
Slot list: `Assets/Art/UI/Intro/_PLACEHOLDERS/README.txt`.
