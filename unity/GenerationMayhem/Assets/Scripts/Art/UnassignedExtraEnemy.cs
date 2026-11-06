// Parked extra enemies (Misty 2026-11-06). Unassigned — not Pink Vipers.
// Playable GLBs, LOD copies, and any split parts live in Assets/Resources/Enemies/Unassigned/{id}/.
// Parts, when present, are in {id}/parts/. Same import path as the war rigs and world props:
// com.unity.cloud.gltfast imports .glb, then Resources.Load<GameObject>.
// Meshes are unskinned (Tripo skins were stripped). No avatar.
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

        public static readonly string[] SkaterBlackRedParts =
            { "Head", "Torso", "Arm_L", "Arm_R", "Leg_L", "Leg_R" };

        static readonly string[] NoParts = new string[0];

        public static string[] PartsFor(string enemyId) =>
            enemyId == SkaterBlackRed ? SkaterBlackRedParts : NoParts;

        static GameObject Load(string path)
        {
            var prefab = Resources.Load<GameObject>(path);
            if (prefab == null)
                Debug.LogError("[GM] UNASSIGNED EXTRA FAILED to load Resources/" + path + " (glTFast installed?) — no stand-in mesh");
            return prefab;
        }

        /// <summary>
        /// Hang the playable mesh under Display. LOD0 is a byte-identical copy and is the
        /// display fallback. When every split part for this id is present, parent each part
        /// under Parts/{name} at local identity (authored model space) and hide Display.
        /// Does not skin or assign an avatar. Ids with no part list keep the playable only.
        /// </summary>
        public static Transform Hang(Transform root, string enemyId)
        {
            if (root == null || string.IsNullOrEmpty(enemyId)) return null;

            var partNames = PartsFor(enemyId);
            Transform partsRoot = null;
            var loaded = 0;
            if (partNames.Length > 0)
            {
                partsRoot = DirectChild(root, "Parts");
                for (var i = 0; i < partNames.Length; i++)
                {
                    var part = partNames[i];
                    var slot = DirectChild(partsRoot, part);
                    slot.localPosition = Vector3.zero;
                    slot.localRotation = Quaternion.identity;
                    slot.localScale = Vector3.one;
                    if (slot.childCount > 0) { loaded++; continue; }
                    var partPrefab = Load(ResDir + enemyId + "/parts/" + enemyId + "_" + part);
                    if (partPrefab == null) continue;
                    StripColliders(Object.Instantiate(partPrefab, slot, false));
                    loaded++;
                }
            }
            var partsComplete = partNames.Length > 0 && loaded == partNames.Length;
            if (partsRoot != null) partsRoot.gameObject.SetActive(partsComplete);

            var old = root.Find("Display");
            if (old) Object.DestroyImmediate(old.gameObject);
            var playable = Load(ResDir + enemyId + "/" + enemyId);
            var lod0 = Load(ResDir + enemyId + "/" + enemyId + "_LOD0");
            var prefab = playable != null ? playable : lod0;
            Transform display = null;
            if (prefab != null)
            {
                display = new GameObject("Display").transform;
                display.SetParent(root, false);
                StripColliders(Object.Instantiate(prefab, display, false));
                display.gameObject.SetActive(!partsComplete);
            }

            if (partsComplete)
                Debug.Log("[GM] unassigned extra part rig: " + enemyId + " (" + loaded + " parts, display hidden)");
            else if (prefab != null)
                Debug.Log("[GM] unassigned extra hung: " + (playable != null ? enemyId : enemyId + "_LOD0"));
            return partsComplete ? partsRoot : display;
        }

        static Transform DirectChild(Transform parent, string name)
        {
            for (var i = 0; i < parent.childCount; i++)
            {
                var child = parent.GetChild(i);
                if (child.name == name) return child;
            }
            var go = new GameObject(name);
            go.transform.SetParent(parent, false);
            return go.transform;
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
