# Unassigned extra enemies

Parked for Misty. These are not Pink Vipers and they are not wired into Hyperdrive or Dockyard spawners. Hive and Slither were not copied, moved, renamed, or edited.

Each folder holds the playable GLB and a byte-identical `_LOD0` copy (same SHA-256). LOD1–LOD3 are not in this drop. No stand-in LOD geometry was invented. Split part meshes are not in this drop either. When those part GLBs arrive, parent each one under a named transform at local identity. Do not auto-skin the combined playable.

`UnassignedExtraEnemy` loads the playable through `Resources.Load` (glTFast import, same path as the war rigs and world props) and falls back to the LOD0 copy. Colliders on the instance are stripped. The root is left at identity so the mesh keeps its authored coordinates.

| Folder | Playable | Tris | Skins / anims |
| --- | --- | --- | --- |
| `GM_QuadCannon_Walker` | `GM_QuadCannon_Walker.glb` | 60000 | none |
| `GM_ClawWalker_RedYellow` | `GM_ClawWalker_RedYellow.glb` | 60000 | none |
| `GM_Skater_BlackRed` | `GM_Skater_BlackRed.glb` | 21514 | none |

Known mesh notes, left as delivered:

- Meshes are unskinned. Tripo skeletons were stripped.
- The quad cannon was cut like a biped, so the cannon is not its own part. It likely stayed on the torso or an arm.
- Claw `FL` / `FR` / `BL` / `BR` labels may be swapped, and the leg sizes are uneven.
- Skater `Arm_L` is denser than `Arm_R`.
- Cut edges are open. That is expected for a later part rig.

Drop `*_Extra.prefab` in a scratch scene to preview. Do not add it to an encounter table.
