# Unassigned extra enemies

Parked for Misty. These are not Pink Vipers and they are not wired into Hyperdrive or Dockyard spawners. Hive and Slither were not copied, moved, renamed, or edited.

`UnassignedExtraEnemy` loads meshes through `Resources.Load` (glTFast import, same path as the war rigs and world props) and strips colliders on the instance. The root stays at identity so each mesh keeps its authored coordinates. There is no avatar and no auto-skin.

The playable GLB is the display mesh. `_LOD0` is a byte-identical copy of that playable and is the display fallback. When a full part set is present, each part is parented under `Parts/{name}` at local identity and the display mesh is hidden.

| Folder | Playable tris | Parts | LOD1–LOD3 |
| --- | --- | --- | --- |
| `GM_QuadCannon_Walker` | 60,000 | none yet | none yet |
| `GM_ClawWalker_RedYellow` | 60,000 | none yet | none yet |
| `GM_Skater_BlackRed` | 21,514 | Head, Torso, Arm_L, Arm_R, Leg_L, Leg_R | LOD1 10,757 · LOD2 5,378 · LOD3 2,151 | |

Skater parts live in `GM_Skater_BlackRed/parts/`. Their triangle counts sum to the playable: Head 1,247, Torso 2,586, Arm_L 5,043, Arm_R 2,963, Leg_L 4,895, Leg_R 4,780. Arm_L is denser than Arm_R; that is left as delivered. Part nodes carry no transform, so identity slots reassemble the body. LOD1–LOD3 sit next to the playable and are not swapped in at runtime.

Quad cannon and claw walker split parts are not in the repo. No stand-in part or LOD geometry was invented for them.

Known mesh notes, left as delivered:

- Meshes are unskinned. Tripo skeletons were stripped.
- The quad cannon was cut like a biped, so the cannon is not its own part. It likely stayed on the torso or an arm.
- Claw `FL` / `FR` / `BL` / `BR` labels may be swapped, and the leg sizes are uneven.
- Skater `Arm_L` is denser than `Arm_R`.
- Cut edges are open.

Drop `*_Extra.prefab` in a scratch scene to preview. Do not add it to an encounter table.
