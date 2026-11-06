// GM world props hang (2026-11-06): stamped Tripo environment props hung from Assets/Resources/WorldProps
// (GM_Roadway_MagentaRamp_raw / GM_Roadway_SplitDeck_raw / GM_Portal_PurpleGate_raw — 2K Current textures, do not re-export).
// Same import path as the war rigs (Assets/Resources/WarRigs): requires com.unity.cloud.gltfast to import .glb.
// These are world PROPS (roadway / portal dressing), not characters or enemies. Visual-only: colliders are stripped,
// so the greybox floors / kickers / rails keep all gameplay collision and the NavMesh is untouched.
using System.Collections.Generic;
using UnityEngine;

namespace GenerationMayhem.Art
{
    /// <summary>
    /// Hangs the Generation Mayhem world-prop GLBs into existing roadway / portal slots.
    /// Tripo exports are ~1 m normalized with the pivot at the bounds bottom; every hang
    /// re-fits bounds so the prop sits bottom-centered on the slot position.
    /// </summary>
    public static class WorldPropHang
    {
        public const string ResDir = "WorldProps/";
        public const string RoadwayMagentaRamp = "GM_Roadway_MagentaRamp_raw"; // curved magenta elevated highway ramp (~9.3k tris, 35 parts)
        public const string RoadwaySplitDeck = "GM_Roadway_SplitDeck_raw";     // industrial deck kit, already split into slabs/walls (~24k tris, 176 parts)
        public const string PortalPurpleGate = "GM_Portal_PurpleGate_raw";     // standing industrial frame, purple lightning opening (~9.2k tris, 11 parts)

        /// <summary>Which bound the slot's targetSize fits: the largest horizontal footprint dimension, or the height.</summary>
        public enum Fit { Footprint, Height }

        /// <summary>One placeable split-deck kit slot (floor position, yaw, target footprint size in meters).</summary>
        public struct KitSlot
        {
            public Vector3 pos; public float yawDeg; public float size;
            public KitSlot(Vector3 p, float yaw, float s) { pos = p; yawDeg = yaw; size = s; }
        }

        static GameObject Load(string propName)
        {
            var prefab = Resources.Load<GameObject>(ResDir + propName);
            if (prefab == null)
                Debug.LogError("[GM] WORLD PROP FAILED to load Resources/" + ResDir + propName + " (glTFast installed?) — keeping greybox stand-in");
            return prefab;
        }

        /// <summary>Hang one whole prop bottom-centered on a slot. Returns the holder (null if the GLB could not load).</summary>
        public static Transform Hang(string propName, Transform parent, Vector3 floorPos, float yawDeg, float targetSize, Fit fit = Fit.Footprint)
        {
            var prefab = Load(propName);
            if (prefab == null) return null;
            var holder = new GameObject(propName + "_Prop").transform;
            holder.SetParent(parent, false);
            holder.position = floorPos;
            holder.rotation = Quaternion.Euler(0f, yawDeg, 0f);
            var inst = Object.Instantiate(prefab, holder, false);
            StripColliders(inst);
            FitBottomCenter(holder, inst.transform, targetSize, fit);
            return holder;
        }

        /// <summary>
        /// Hang the split-deck GLB as a KIT, not one solid block: the export is already broken into
        /// separate slab/wall parts (tripo_part_N), so one staging instance is exploded and its largest
        /// pieces are re-parented one-per-slot as individually placed roadway kit pieces. Unused pieces
        /// are discarded from the staging instance (the source asset keeps all 176).
        /// </summary>
        public static Transform HangSplitDeckKit(Transform parent, string kitName, IList<KitSlot> slots)
        {
            var prefab = Load(RoadwaySplitDeck);
            if (prefab == null) return null;
            var kit = new GameObject(kitName).transform;
            kit.SetParent(parent, false);

            var staging = Object.Instantiate(prefab);
            staging.name = "SplitDeck_Staging";
            StripColliders(staging);
            var pieces = new List<Transform>();
            foreach (var r in staging.GetComponentsInChildren<MeshRenderer>()) pieces.Add(r.transform);
            // Largest footprint first → the big deck slabs land on the big roadway slots, walls/rails on the small ones.
            pieces.Sort((a, b) => Footprint(b).CompareTo(Footprint(a)));

            int n = Mathf.Min(slots.Count, pieces.Count);
            for (int i = 0; i < n; i++)
            {
                var slot = slots[i];
                var holder = new GameObject("SplitDeckPiece_" + i).transform;
                holder.SetParent(kit, false);
                holder.position = slot.pos;
                holder.rotation = Quaternion.Euler(0f, slot.yawDeg, 0f);
                pieces[i].SetParent(holder, false);
                FitBottomCenter(holder, pieces[i], slot.size, Fit.Footprint);
            }
            Object.DestroyImmediate(staging);
            return kit;
        }

        static float Footprint(Transform t)
        {
            var r = t.GetComponent<Renderer>();
            if (r == null) return 0f;
            var s = r.bounds.size;
            return s.x * s.z;
        }

        /// <summary>Uniform-scale inst so the chosen bound equals targetSize, then bottom-center it on the holder origin.</summary>
        static void FitBottomCenter(Transform holder, Transform inst, float targetSize, Fit fit)
        {
            var rs = inst.GetComponentsInChildren<Renderer>();
            if (rs.Length == 0) return;
            var b = rs[0].bounds;
            foreach (var r in rs) b.Encapsulate(r.bounds);
            float cur = fit == Fit.Height ? b.size.y : Mathf.Max(b.size.x, b.size.z);
            float s = cur > 1e-4f ? targetSize / cur : 1f;
            Vector3 p0 = inst.localPosition;
            Vector3 lc = holder.InverseTransformPoint(b.center);
            Vector3 lmin = holder.InverseTransformPoint(b.min);
            inst.localScale = inst.localScale * s;
            // Scaling happens about the piece's own pivot (p0), so re-solve for center x/z = 0 and min y = 0 in holder space.
            inst.localPosition = new Vector3(-s * (lc.x - p0.x), -s * (lmin.y - p0.y), -s * (lc.z - p0.z));
        }

        static void StripColliders(GameObject go)
        {
            foreach (var c in go.GetComponentsInChildren<Collider>(true)) Object.DestroyImmediate(c);
        }
    }
}
