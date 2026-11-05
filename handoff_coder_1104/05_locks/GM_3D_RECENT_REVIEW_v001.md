# Generation Mayhem 3D — recent assets for Misty approve/reject (2026-11-04)
**No new 3D spend until stamped.** Sources: 3D KEEP list 1104 + Model Audit 1104 + folder mtimes.

## KEEP candidates (3D flagged do-not-delete)
| # | What | Belongs to | Status |
|---|------|------------|--------|
| 1 | Kailee pearl .40 Soft GLB + LODs (`GM_Kailee_40cal_PearlK_Soft`) | Kailee / Dock | KEEP candidate — Soft prop; needs grip/muzzle sockets + PRECISION KINETICS decal |
| 2 | Vixen handgun Soft GLB + LODs | Vixen / Dock | KEEP candidate — Soft prop; needs sockets |
| 3 | Kailee thermal blade Soft (`GM_WPN_KaileeThermalBlade_Soft`) | Kailee | HOLD Soft retexture — orange vs blue open with Misty |
| 4 | Brianna gauntlets Soft (combined L+R) | Brianna | KEEP candidate — needs L/R split |
| 5 | Brianna thermal coil gauntlet L/R Soft | Brianna | Greybox placeholders only (144 tris) — not production |
| 6 | HyperDrive greybox v001 (blend/fbx/glb + previews) | HyperDrive arena | KEEP greybox — **look may be army-base; Misty just locked spacey-tech Pink Viper skin redo** |
| 7 | Skybox HyperDrive v001 | HyperDrive | KEEP candidate |
| 8 | Skybox Dock Night v001 | Dockyards | KEEP candidate |
| 9 | Soft HyperDrive L2 lean zip (handoff) | HyperDrive Unity | In handoff — Soft HOLD for skin redo |

## Soft scrap / superseded
| # | What | Belongs to | Status |
|---|------|------------|--------|
| S1 | Old Vixen rifle (`weapons/vixen_gun_1102`) | Vixen | SCRAP — archived SUPERSEDED_safe_scrap |

## Audit findings (not new meshes — gaps 3D flagged before more credits)
| Item | Arena/char | Note |
|------|------------|------|
| Web heroes vixen/kailee/payton/brianna.glb | Both | Pre-lock look risk; open edges; feet pivot wrong |
| Web viper01–03 | HyperDrive | Generics — not Swarm/Cobra/Fang/Hive |
| medic_bot.glb | Dock | Soft rebuild still pending (MedBot scrap lock) |
| Unity PinkViper generic only | HyperDrive | No per-Viper variants |
| Army HyperDrive concept plates (hyperdrive_1103 Army v002) | HyperDrive | **Reject for current look** per Misty voice (spacey-tech, not army) |

## Misty stamps needed
- Approve / reject each KEEP candidate above before more Soft credits.
- HyperDrive greybox + army plates: reject army look → spacey-tech Pink Viper skin.
- Kailee blade color stamp.

## Misty voice APPROVED spend (2026-11-04) — only these
1. Brianna L/R gauntlets match + her colors — **GO**
2. Vixen: sonic muzzle + space-age gun (not regular handgun) — **GO** (refs in `vixen_weapons_refs_1104/`)
3. Scrap army-base HyperDrive assets — **GO / REJECT army**
4. Rebuild HyperDrive spacey-tech Pink Viper skin — **GO**
All other Soft: still HOLD pending per-number stamp.

## Additions from 3D (2026-11-04) — stamp by number
| # | What | Belongs to | Status / Misty action |
|---|------|------------|------------------------|
| 10 | HyperDrive sky v001 (`soft/skybox_hyperdrive_v001/`) baked from ARMY war-dusk pan | HyperDrive | **REJECT candidate** under spacey-tech lock (same as army plates). Misty already GO scrap army HD — treat as **REJECT** unless she says keep layout-only. |
| 11 | Polden pitch v002 (`outbound/polden_video/GM_Polden_Pitch_v002.mp4`, 52s silent; moiny-send-pack copy) | Pitch / Polden | DRAFT, email HOLD; debug label ~19–21s — needs Misty stamp |
| 12 | Kailee pearl .40 raw Tripo (`tripo_exports/2026-11-03/GM_Kailee_40cal_PearlK.glb`, ~60MB, 55 cr) | Kailee | Source only for game-ready .40 |
| 13 | Vixen handgun raw Tripo (`tripo_exports/2026-11-02/GM_Vixen_Handgun.glb`, 55 cr) | Vixen | Source only — **REJECT look** per space-age gun lock (keep file as archive source if needed) |
| 14 | Old resonator rifle raw Tripo (`tripo_exports/2026-11-02/GM_Vixen_Gun.glb`, 55 cr) | Vixen | Cancelled — **SCRAP candidate** (sonic muzzle still in loadout via separate ref) |
| 15 | Kailee blade gauntlet cutouts (`concepts/moves/kailee_blade_1102/soft_cutouts/`) | Kailee | Prep only, no Tripo; HOLD blade color stamp |
| 16 | Kailee .40 cutouts (`concepts/misty_drop_1103_enemies_kailee40/soft_cutouts/`) | Kailee | Prep, already used |
| 17 | Audit docs (`GM_Model_Audit_1104.md`, `raw.jsonl`, `GM_Anim_Socket_Spec_1104.md`) | Paperwork | No spend |

**Tripo spend so far:** 3 jobs / 165 credits. Army greybox mesh may stay **layout reference only**.
