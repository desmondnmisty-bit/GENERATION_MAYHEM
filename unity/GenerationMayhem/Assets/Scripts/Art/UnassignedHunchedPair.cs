// Parked scene prop (Misty 2026-11-06). Two hunched figures plus a small crate.
// Not a Pink Viper and not registered with Hyperdrive or Dockyard.
// 65 tripo_part_N meshes under ROOT. Unskinned, no animations. Labels are not remapped.
// Same import path as the other parked extras: glTFast, then Resources.Load. Colliders stripped.
// Drop UnassignedHunchedPair on an empty object in a scratch scene to preview. This is not a spawner.
using UnityEngine;

namespace GenerationMayhem.Art
{
    public static class UnassignedHunchedPairHang
    {
        public const string ResourcePath = "Enemies/Unassigned/GM_HunchedPair_Scene/GM_HunchedPair_Scene_raw";

        /// <summary>Show the imported part hierarchy under Display. Does not skin or assign an enemy slot.</summary>
        public static Transform Hang(Transform root)
        {
            if (root == null) return null;
            var existing = root.Find("Display");
            if (existing != null) return existing;

            var prefab = Resources.Load<GameObject>(ResourcePath);
            if (prefab == null)
            {
                Debug.LogError("[GM] UNASSIGNED SCENE PROP FAILED to load Resources/" + ResourcePath + " (glTFast installed?)");
                return null;
            }

            var display = new GameObject("Display").transform;
            display.SetParent(root, false);
            display.localPosition = Vector3.zero;
            display.localRotation = Quaternion.identity;
            display.localScale = Vector3.one;
            var inst = Object.Instantiate(prefab, display, false);
            inst.transform.localPosition = Vector3.zero;
            inst.transform.localRotation = Quaternion.identity;
            inst.transform.localScale = Vector3.one;
            var cols = inst.GetComponentsInChildren<Collider>(true);
            for (var i = 0; i < cols.Length; i++) Object.DestroyImmediate(cols[i]);
            Debug.Log("[GM] unassigned scene prop hung: GM_HunchedPair_Scene");
            return display;
        }
    }

    /// <summary>Scratch-scene preview only. Not placed in a match, a wave, or a Viper slot.</summary>
    public class UnassignedHunchedPair : MonoBehaviour
    {
        void Start()
        {
            UnassignedHunchedPairHang.Hang(transform);
        }
    }
}
