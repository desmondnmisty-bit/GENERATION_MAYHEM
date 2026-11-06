// Pink Viper split meshes (Misty 2026-11-06). Each GLB is one Tripo-native part hierarchy:
// tripo_part_N children under ROOT. Unskinned, no animations, 2K Current textures.
// Same import path as the war rigs (Assets/Resources/WarRigs): com.unity.cloud.gltfast imports .glb,
// then Resources.Load<GameObject>. Do not plane-cut, merge, rename, or auto-skin these parts.
// Colliders on the instance are stripped so the imported mesh is not a smashable.
// The gameplay body (capsule / sphere stand-in collider, NavMesh agent) stays.
using UnityEngine;

namespace GenerationMayhem.Art
{
    /// <summary>
    /// Hangs a named Pink Viper GLB in place of a capsule, sphere, or old FBX stand-in.
    /// Displays the imported part hierarchy as-is. If the GLB cannot load, the stand-in stays.
    /// </summary>
    public static class ViperMeshHang
    {
        public const string ResRoot = "Enemies/Vipers/";

        // Existing slot names only. Hive is the 56-part redsuit, not an older 6-part split.
        public const string Swarm = "GM_Viper_Swarm/GM_Viper_Swarm_Parts";           // Scar Swarm
        public const string Cobra = "GM_Viper_Cobra/GM_Viper_Cobra_Parts";           // Hood Strike (blue snake). Never Tail-Strike.
        public const string Fang = "GM_Viper_Fang/GM_Viper_Fang_Parts";              // Jet Fang
        public const string Hive = "GM_Viper_Hive_redsuit/GM_Viper_Hive_redsuit_Parts"; // Hex Nest

        /// <summary>
        /// Instantiate <paramref name="resourcePath"/> under <paramref name="anchor"/>.
        /// Seats the mesh feet on the stand-in renderer's bottom, or on the anchor origin when
        /// the anchor is an empty mesh root. Hides the anchor's own renderer when the GLB loads.
        /// Does not add an Animator and does not rename tripo_part_N children.
        /// </summary>
        public static bool TryHang(Transform anchor, string resourcePath, float targetHeight)
        {
            if (anchor == null || string.IsNullOrEmpty(resourcePath)) return false;
            var prefab = Resources.Load<GameObject>(ResRoot + resourcePath);
            if (prefab == null)
            {
                Debug.LogError("[GM] VIPER MESH FAILED to load Resources/" + ResRoot + resourcePath + " (glTFast installed?) — keeping stand-in");
                return false;
            }

            var standIn = anchor.GetComponent<Renderer>();
            float groundY = standIn != null ? standIn.bounds.min.y : anchor.position.y;

            var holder = new GameObject("ViperMesh").transform;
            holder.SetParent(anchor, false);
            holder.position = new Vector3(anchor.position.x, groundY, anchor.position.z);
            holder.rotation = anchor.rotation;

            var inst = Object.Instantiate(prefab, holder, false);
            StripColliders(inst);
            FitHeightBottom(holder, inst.transform, targetHeight);

            if (standIn != null) standIn.enabled = false;
            Debug.Log("[GM] viper mesh hung: " + resourcePath + " under " + anchor.name);
            return true;
        }

        /// <summary>Uniform-scale inst so its world height equals targetHeight, then put its bounds bottom on the holder origin and center x/z.</summary>
        static void FitHeightBottom(Transform holder, Transform inst, float targetHeight)
        {
            var rs = inst.GetComponentsInChildren<Renderer>();
            if (rs.Length == 0 || targetHeight <= 0f) return;
            var b = rs[0].bounds;
            foreach (var r in rs) b.Encapsulate(r.bounds);
            float cur = b.size.y;
            float s = cur > 1e-4f ? targetHeight / cur : 1f;
            Vector3 p0 = inst.localPosition;
            Vector3 lc = holder.InverseTransformPoint(b.center);
            Vector3 lmin = holder.InverseTransformPoint(b.min);
            inst.localScale = inst.localScale * s;
            inst.localPosition = new Vector3(-s * (lc.x - p0.x), -s * (lmin.y - p0.y), -s * (lc.z - p0.z));
        }

        static void StripColliders(GameObject go)
        {
            foreach (var c in go.GetComponentsInChildren<Collider>(true)) Object.DestroyImmediate(c);
        }
    }
}
