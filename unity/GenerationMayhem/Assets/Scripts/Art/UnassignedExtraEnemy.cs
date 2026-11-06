// Parked extra enemies (Misty 2026-11-06). Unassigned — not Pink Vipers.
// Playable GLBs and byte-identical LOD0 copies live in Assets/Resources/Enemies/Unassigned/{id}/.
// Same import path as the war rigs and world props: com.unity.cloud.gltfast imports .glb,
// then Resources.Load<GameObject>. Meshes are unskinned (Tripo skins were stripped).
// Nothing here is registered with a Hyperdrive or Dockyard spawner.
using UnityEngine;

namespace GenerationMayhem.Art
{
    public static class UnassignedExtraEnemyHang
    {
        public const string ResDir = "Enemies/Unassigned/";

        public const string QuadCannonWalker = "GM_QuadCannon_Walker";
        public const string ClawWalkerRedYellow = "GM_ClawWalker_RedYellow";
        public const string SkaterBlackRed = "GM_Skater_BlackRed";

        static GameObject Load(string enemyId, string assetName)
        {
            var path = ResDir + enemyId + "/" + assetName;
            var prefab = Resources.Load<GameObject>(path);
            if (prefab == null)
                Debug.LogError("[GM] UNASSIGNED EXTRA FAILED to load Resources/" + path + " (glTFast installed?) — no stand-in mesh");
            return prefab;
        }

        /// <summary>
        /// Hang the playable mesh under Display at the GLB's authored transform.
        /// LOD0 is a byte-identical copy of that playable and is loaded as the fallback.
        /// Does not skin, assign an avatar, or build a part hierarchy.
        /// </summary>
        public static Transform Hang(Transform root, string enemyId)
        {
            if (root == null || string.IsNullOrEmpty(enemyId)) return null;
            var old = root.Find("Display");
            if (old) Object.DestroyImmediate(old.gameObject);

            var playable = Load(enemyId, enemyId);
            var lod0 = Load(enemyId, enemyId + "_LOD0");
            var prefab = playable != null ? playable : lod0;
            if (prefab == null) return null;

            var display = new GameObject("Display").transform;
            display.SetParent(root, false);
            var inst = Object.Instantiate(prefab, display, false);
            StripColliders(inst);
            var source = playable != null ? enemyId : enemyId + "_LOD0";
            Debug.Log("[GM] unassigned extra hung: " + source + (lod0 != null ? " (LOD0 parked)" : ""));
            return display;
        }

        static void StripColliders(GameObject go)
        {
            foreach (var c in go.GetComponentsInChildren<Collider>(true)) Object.DestroyImmediate(c);
        }
    }

    /// <summary>Drop on an unassigned extra root. Hangs the parked GLB on play. Not a spawner.</summary>
    public class UnassignedExtraEnemy : MonoBehaviour
    {
        public string enemyId;

        void Start()
        {
            UnassignedExtraEnemyHang.Hang(transform, enemyId);
        }
    }
}
