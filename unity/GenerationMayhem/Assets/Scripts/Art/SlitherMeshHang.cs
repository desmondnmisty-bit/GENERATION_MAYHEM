// Dockyard Slither (Misty 2026-11-06). Six unskinned part GLBs plus GM_Slither_Parts.glb.
// Same import path as the war rigs and Pink Vipers: com.unity.cloud.gltfast, then Resources.Load.
// Parts stay under their own names at local identity (Head, Torso, Arm_L, Arm_R, Leg_L, Leg_R).
// Parts.glb is the combined display and is hidden only when all six parts load.
// No avatar and no auto-skin. Imported colliders are stripped. The boss capsule stays.
using UnityEngine;

namespace GenerationMayhem.Art
{
    /// <summary>
    /// Hangs the split Slither meshes on the existing Dockyard Slither visual root.
    /// Does not load the older Slither boss FBX.
    /// </summary>
    public static class SlitherMeshHang
    {
        public const string ResDir = "Enemies/Vipers/GM_Slither/";
        public const string PartsGlb = "GM_Slither_Parts";

        // Filename labels. Not remapped.
        public static readonly string[] PartNames = { "Head", "Torso", "Arm_L", "Arm_R", "Leg_L", "Leg_R" };

        /// <summary>
        /// Parent the six parts at local identity and show Parts.glb until that set is complete.
        /// Hides the capsule stand-in once either the display or the full part set is visible.
        /// </summary>
        public static Transform Hang(Transform visualRoot)
        {
            if (visualRoot == null) return null;
            var existing = visualRoot.Find("SlitherMesh");
            if (existing != null) return existing;

            var holder = new GameObject("SlitherMesh").transform;
            holder.SetParent(visualRoot, false);
            holder.localPosition = Vector3.zero;
            holder.localRotation = Quaternion.identity;
            holder.localScale = Vector3.one;

            var partsRoot = new GameObject("Parts").transform;
            partsRoot.SetParent(holder, false);
            partsRoot.localPosition = Vector3.zero;
            partsRoot.localRotation = Quaternion.identity;
            partsRoot.localScale = Vector3.one;

            var loaded = 0;
            var missing = "";
            for (var i = 0; i < PartNames.Length; i++)
            {
                var part = PartNames[i];
                var slot = new GameObject(part).transform;
                slot.SetParent(partsRoot, false);
                slot.localPosition = Vector3.zero;
                slot.localRotation = Quaternion.identity;
                slot.localScale = Vector3.one;
                var prefab = Resources.Load<GameObject>(ResDir + "GM_Slither_" + part);
                if (prefab == null)
                {
                    missing = missing.Length == 0 ? part : missing + ", " + part;
                    continue;
                }
                var inst = Object.Instantiate(prefab, slot, false);
                inst.transform.localPosition = Vector3.zero;
                inst.transform.localRotation = Quaternion.identity;
                inst.transform.localScale = Vector3.one;
                StripColliders(inst);
                loaded++;
            }

            var partsComplete = loaded == PartNames.Length;
            partsRoot.gameObject.SetActive(partsComplete);

            var displayPrefab = Resources.Load<GameObject>(ResDir + PartsGlb);
            Transform display = null;
            if (displayPrefab != null)
            {
                display = new GameObject("Display").transform;
                display.SetParent(holder, false);
                display.localPosition = Vector3.zero;
                display.localRotation = Quaternion.identity;
                display.localScale = Vector3.one;
                var inst = Object.Instantiate(displayPrefab, display, false);
                inst.transform.localPosition = Vector3.zero;
                inst.transform.localRotation = Quaternion.identity;
                inst.transform.localScale = Vector3.one;
                StripColliders(inst);
                display.gameObject.SetActive(!partsComplete);
            }

            if (!partsComplete && display == null)
            {
                Object.DestroyImmediate(holder.gameObject);
                Debug.LogError("[GM] SLITHER MESH FAILED to load Resources/" + ResDir + " (glTFast installed?) — keeping the existing Dockyard visual");
                return null;
            }

            FitSlotHeight(holder, visualRoot);
            HideStandIn(visualRoot, holder);

            if (partsComplete)
                Debug.Log("[GM] slither part rig hung: " + loaded + " parts, display hidden");
            else
                Debug.LogWarning("[GM] slither display kept (" + loaded + "/" + PartNames.Length + " parts, missing " + missing + ")");
            return holder;
        }

        /// <summary>One scale on the holder so the ~1 m export fills the existing Slither body. Part slots stay local identity.</summary>
        static void FitSlotHeight(Transform holder, Transform visualRoot)
        {
            var rs = holder.GetComponentsInChildren<Renderer>();
            if (rs.Length == 0) return;
            var b = rs[0].bounds;
            foreach (var r in rs) b.Encapsulate(r.bounds);
            float cur = b.size.y;
            var col = visualRoot.GetComponentInParent<CapsuleCollider>();
            float target = col != null && col.height > 0.2f ? col.height : 2.3f;
            if (cur > 1e-4f) holder.localScale = Vector3.one * (target / cur);
        }

        static void HideStandIn(Transform visualRoot, Transform hang)
        {
            for (var i = 0; i < visualRoot.childCount; i++)
            {
                var child = visualRoot.GetChild(i);
                if (child == hang) continue;
                if (child.name != "Slither_Model" && child.name != "Slither_Capsule") continue;
                var renderers = child.GetComponentsInChildren<Renderer>(true);
                for (var r = 0; r < renderers.Length; r++) renderers[r].enabled = false;
            }
        }

        static void StripColliders(GameObject go)
        {
            var cols = go.GetComponentsInChildren<Collider>(true);
            for (var i = 0; i < cols.Length; i++) Object.DestroyImmediate(cols[i]);
        }
    }
}
