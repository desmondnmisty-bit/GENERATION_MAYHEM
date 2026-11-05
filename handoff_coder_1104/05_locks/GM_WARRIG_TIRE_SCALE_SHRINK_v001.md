# War-Rig Tire Scale — SHRINK Soft Soft Soft Soft (voice 2026-11-04)

**Source:** Misty voice call — tires too large, dwarf characters; bodies/faces barely visible.

## Override
- PREVIOUS: nearly leg-sized tires (Vixen/Payton/Brianna); Kailee small
- NOW: shrink tires significantly so each girl's body + face read clearly at full view
- KEEP: electric hub centers (Vixen red / Payton purple / Brianna green / Kailee blue)
- KEEP: same wheel design language, side-of-leg placement, skate-strut → waist-pivot
- KEEP: Kailee still smaller than the other three (relative)

## Pipeline impact
- Re-render Concept plates: Vixen v004, Payton v003, Brianna v002, Kailee at new scale
- Soft Soft Soft Soft cutouts / Soft Soft Soft Soft Tripo / Soft Soft Soft Soft mesh HOLD until new plates Soft Soft Soft Soft-stamped
- Prior Soft Soft Soft Soft GO stamps on Vixen v003 / Payton v002 / Brianna v001 supersede only for look-not-scale; scale must Soft Soft Soft Soft re-stamp

## Unity
- Local stand-in tire scale follow shrink; Soft Soft Soft Soft GLB HOLD

## LOCAL Dock stand-in (Unity 2026-11-04)
Applied in `web/src/game.ts` `addTruckTires` (LOCAL ONLY / no GitHub):
- Vixen: R/T/X `0.34 / 0.13 / 0.36` (was `0.6 / 0.25 / 0.48`) — electric red hub
- Payton / Brianna: `0.32 / 0.12 / 0.34` (was `0.58 / 0.24 / 0.46`) — purple / green hubs
- Kailee: `0.12 / 0.035 / 0.15` (was `0.14 / 0.04 / 0.16`) — still smaller than sisters
Backup: `/workspace/game.ts.bak_1104_tireshrink`
