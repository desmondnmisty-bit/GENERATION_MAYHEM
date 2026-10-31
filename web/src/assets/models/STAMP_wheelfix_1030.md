# Vixen War Rig wheel fix (2026-10-30)
**What was wrong:** the hip tires + hub glow were merged into `VIXEN_Body_LOD1` and skinned 100% to `wheel_l_02`/`wheel_r_02`, which hang off `skate_*` → `foot_*`. Every leg/foot rotation swung the 0.55 m tires on a 23 cm lever, so they tilted and clipped through the shins and skates (shots 14/18).
**Fix:**
- Tire + hub split out into 2 separate unskinned meshes: `VIXEN_WarRig_Wheel_L` / `_R` (2,856 tris each; body now 11,766).
- Origin = axle centre (±0.35, 0, 0.27 Blender Z-up; three.js Y-up: x ±0.35, y 0.27). Spin = local X (lateral axle). Measured drift after 90° spin: 0.00000 m (no wobble).
- Parented to the `pelvis` bone (hip-mounted, as in the approved wide War Rig) so legs move between them instead of dragging them. Hip frame struts reweighted 100% to pelvis so frame and wheels stay locked.
- Size unchanged (r 0.276, width 0.17). Inner tire face at |x| 0.265, legs/skates inside that. Bottom sits at z −0.006 (0.6 cm floor contact).
- Note: the ChaosWheelSkate clips still key `wheel_*_02` — those no longer move these meshes. Game code should spin the nodes: `wheel.rotation.x += dist / 0.276` (same sign both sides). In deep crouches the wheels drop with the pelvis.
**Files:** vixen_warrig_wheelfix_1030.glb / .fbx / .blend, vixen_wheels_side.png, vixen_wheels_3q.png. web/src/assets/models/vixen.glb was replaced; the old one is backed up as vixen_pre_wheelfix_1030.glb.
