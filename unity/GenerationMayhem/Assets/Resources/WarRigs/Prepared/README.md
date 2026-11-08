# Generation Mayhem — share-only war-rig preparation

LOCAL REVIEW SET — not a Misty-stamped or AAA-certified final. Do not auto-integrate or hand off.

Prepared only from the four raw GM_*_WarRig_shareonly.glb files in the parent directory. Raw SHA-256 hashes verified unchanged. No Tripo generation, external contact, repository integration, or PR.

## Rig/export
- Authored/baked at 30 fps. GLB +Y up; actual binary FBX -Z forward/Y up, all actions as takes, no leaf bones.
- One skin per GLB. Humanoid-named body bones, Root, flank-tire Left/RightWheel children of LowerLeg. Socket_* bones are non-deforming.
- Max four normalized influences; identical source-position duplicate vertices use identical weights across meshes (verified in final GLBs).
- Original mesh counts, UVs, textures and triangle counts retained. No decimation, new weapons, blade geometry, or mesh cuts.
- Existing segmentation was retained. Kailee glove/forearm correction was a weighting fix, not a reslice. No local splits were made.
- Approximate wheel-contact grounding added for grounded clips. In-place locomotion; Root motion in relevant jumps, dodges, checks, falls and signatures.
- Unity integration was intentionally not performed. Avatar mapping, contact/foot sliding, collisions, shader appearance and all clips still require in-engine QC. Keep extra bones/sockets exposed; disable Optimize Game Objects or explicitly expose required socket transforms.

## Shared clips (all four)
Idle_Skate (2.000s, loop), Locomotion_Fwd (1.000s, loop), Locomotion_Back (1.000s, loop), Locomotion_TurnL (1.000s, loop), Locomotion_TurnR (1.000s, loop), Strafe_L (1.000s, loop), Strafe_R (1.000s, loop), Brake (0.800s), Jump (0.800s), Land (0.667s), Attack_Punch_L (0.600s), Attack_Kick_L (0.800s), Check_L (0.667s), Dodge_L (0.667s), Attack_Punch_R (0.600s), Attack_Kick_R (0.800s), Check_R (0.667s), Dodge_R (0.667s), Attack_Elbow (0.600s), Block (0.667s), HitReact_Light (0.500s), HitReact_Heavy (0.833s), Death (1.667s), Knockdown_Recover (1.667s), Taunt (1.667s), Victory (2.000s)

## Character outputs

### Kailee
- GLB: `GM_Kailee_WarRig_Prepared.glb` — 3,117,544 bytes
- FBX: `GM_Kailee_WarRig_Prepared.fbx` — 10,290,716 bytes
- 80 meshes; 9,669 triangles; 32 joints including sockets/Root; 1 GLB skin; 28 clips.
- Specials: Shatter_Fly (1.800s), Slip_And_Slide (2.133s)
- Sockets: Socket_R_Hand → RightHand, Socket_L_Hand → LeftHand, Socket_Wheel_L_Pivot → LeftWheel, Socket_Wheel_R_Pivot → RightWheel, Socket_Skate_L → LeftFoot, Socket_Skate_R → RightFoot, Socket_FX_Root → Root, Socket_SlideUnder_Root → Root, Socket_Blade_R → RightLowerArm, Socket_Blade_L → LeftLowerArm
- Arms-down bind; per-character relaxed retarget. Gloves/forearms isolated from thigh weights without mesh cuts. Configure/enforce T-pose when making a Unity Humanoid avatar. Residual local skin-stretch outliers remain; needs artist review, particularly glove/hip contacts and shoulder/hair boundaries.
- Local splits: none.
- Automatic sampled-edge stretch diagnostic: worst ratio 43.77× (tripo_part_19, Idle_Skate); ratios on very short source edges can be large, so this is a review flag, not an artistic score.
- FBX independently reimported: all expected takes, bones, meshes, skin modifiers, and embedded texture references present; no missing image paths.

### Brianna
- GLB: `GM_Brianna_WarRig_Prepared.glb` — 2,787,420 bytes
- FBX: `GM_Brianna_WarRig_Prepared.fbx` — 8,838,204 bytes
- 53 meshes; 9,791 triangles; 31 joints including sockets/Root; 1 GLB skin; 27 clips.
- Specials: Chest_Buster (3.500s)
- Sockets: Socket_R_Hand → RightHand, Socket_L_Hand → LeftHand, Socket_Wheel_L_Pivot → LeftWheel, Socket_Wheel_R_Pivot → RightWheel, Socket_Skate_L → LeftFoot, Socket_Skate_R → RightFoot, Socket_FX_Root → Root, Socket_Chest_Plate → Chest, Socket_Shoulder_Seeker → Chest
- Near-T source bind; relaxed retarget. Chest_Buster uses one right-hand downward aiming chain and three recoil peaks at frames 42/52/62; head remains forward/down, then body-language smirk and ride-away. Residual torso/shoulder stretching needs review.
- Local splits: none.
- Automatic sampled-edge stretch diagnostic: worst ratio 4.07× (tripo_part_0, Chest_Buster); ratios on very short source edges can be large, so this is a review flag, not an artistic score.
- FBX independently reimported: all expected takes, bones, meshes, skin modifiers, and embedded texture references present; no missing image paths.

### Payton
- GLB: `GM_Payton_WarRig_Prepared.glb` — 2,989,564 bytes
- FBX: `GM_Payton_WarRig_Prepared.fbx` — 9,091,516 bytes
- 41 meshes; 9,760 triangles; 34 joints including sockets/Root; 1 GLB skin; 27 clips.
- Specials: Gatling_AreaClear (3.000s)
- Sockets: Socket_R_Hand → RightHand, Socket_L_Hand → LeftHand, Socket_Wheel_L_Pivot → LeftWheel, Socket_Wheel_R_Pivot → RightWheel, Socket_Skate_L → LeftFoot, Socket_Skate_R → RightFoot, Socket_FX_Root → Root, Socket_R_Shoulder_Gatling → RightGatling, Socket_L_Shoulder_Gatling → LeftGatling, Socket_Hip_Ammo → Hips
- A-pose/sloped arms, NOT a strict T-pose. Per-character rest-to-relaxed retarget. Existing shoulder pods use Left/RightGatling; no invented barrel meshes. Residual hip/torso deformation needs review.
- Local splits: none.
- Automatic sampled-edge stretch diagnostic: worst ratio 6.65× (tripo_part_4, Gatling_AreaClear); ratios on very short source edges can be large, so this is a review flag, not an artistic score.
- FBX independently reimported: all expected takes, bones, meshes, skin modifiers, and embedded texture references present; no missing image paths.

### Vixen
- GLB: `GM_Vixen_WarRig_Prepared.glb` — 3,015,268 bytes
- FBX: `GM_Vixen_WarRig_Prepared.fbx` — 9,887,964 bytes
- 85 meshes; 9,509 triangles; 30 joints including sockets/Root; 1 GLB skin; 28 clips.
- Specials: Shatter_Plant (1.667s), Sonic_Scream (2.500s)
- Sockets: Socket_R_Hand → RightHand, Socket_L_Hand → LeftHand, Socket_Wheel_L_Pivot → LeftWheel, Socket_Wheel_R_Pivot → RightWheel, Socket_Skate_L → LeftFoot, Socket_Skate_R → RightFoot, Socket_FX_Root → Root, Socket_Mouth_SonicScream → Head
- Near-T/sloped-arm source bind; relaxed retarget. Sonic charge/scream and Shatter_Plant authored. Residual torso/hair stretching in Shatter_Plant needs review.
- Local splits: none.
- Automatic sampled-edge stretch diagnostic: worst ratio 14.37× (tripo_part_1, Shatter_Plant); ratios on very short source edges can be large, so this is a review flag, not an artistic score.
- FBX independently reimported: all expected takes, bones, meshes, skin modifiers, and embedded texture references present; no missing image paths.

## Validation and limitations
Final GLB validator checks binary structure, embedded images, exact source triangle/mesh counts, all required named clips and durations, skin/joint indices, normalized weights, maximum four influences, and duplicate-position weight consistency. FBX reimport checks actual take names/counts, skin bindings, joint/mesh counts and texture paths. Full results: manifest.json and source/*_fbx_validation.json.

Rendered workbench spot-checks cover Idle_Skate and every required special; short MP4 previews are under previews/. Blender previews are not proof of Unity material/retargeting quality. The procedural pass is structurally complete but not a hand-polished AAA animation deliverable. Residual local stretching is recorded above; do not hide it or call this final/stamped.

No facial blendshapes or new FX geometry were authored. Brianna smirk is body language. Sonic cone, muzzle flashes/projectiles, blade FX and gameplay hitboxes remain socket-driven integration work; they are not baked into these files. FBX embedded base-color atlas is portable, but Unity PBR material setup may still need manual shader configuration.

Authoring .blend files, adapted scripts, joint coordinates, clip inventories and source hashes are in source/. Logs are in logs/. No Afterburn Volley, Overwatch Lock or Blue Blaze Blitz clips were added.
