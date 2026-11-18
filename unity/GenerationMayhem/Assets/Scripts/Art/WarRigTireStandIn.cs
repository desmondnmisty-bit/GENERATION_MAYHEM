// LOCAL ONLY — Misty lockstep 2026-11-04: mirror Three.js web/src/game.ts addTruckTires R/T/X exactly.
// Misty 2026-11-07: prepared share-only REVIEW meshes replace the four Soft hangs in Unity only. Requires glTFast.
using UnityEngine;

namespace GenerationMayhem.Art
{
    public enum WarRigWho { Vixen, Payton, Brianna, Kailee }

    /// <summary>
    /// Procedural side-of-leg war-rig tire stand-ins. Numbers lockstep with
    /// generation-mayhem/web/src/game.ts addTruckTires (SIZE LADDER v001).
    /// </summary>
    public static class WarRigTireStandIn
    {
        // R, T, X — meters, Misty tire SIZE LADDER (GM_WARRIG_TIRE_SIZE_LADDER_v001.md) lockstep w/ Three.js
        public static readonly Vector3 VixenRTX = new Vector3(0.30f, 0.12f, 0.32f);      // biggest tank
        public static readonly Vector3 PaytonRTX = new Vector3(0.27f, 0.105f, 0.29f);    // tank #2
        public static readonly Vector3 BriannaRTX = new Vector3(0.22f, 0.09f, 0.24f);     // mid
        public static readonly Vector3 KaileeRTX = new Vector3(0.16f, 0.06f, 0.18f);     // bigger striker (still under Brianna)

        public static readonly Color VixenHub = new Color(1f, 0.122f, 0.812f);      // 0xff1fcf
        public static readonly Color PaytonHub = new Color(0.604f, 0.298f, 1f);     // 0x9a4cff
        public static readonly Color BriannaHub = new Color(0.122f, 0.820f, 0.541f); // 0x1fd18a
        public static readonly Color KaileeHub = new Color(1f, 0.310f, 0.627f);      // 0xff4fa0 (Three.js stand-in; Soft Soft Soft Soft blue hubs later)

        public static Vector3 Rtx(WarRigWho who) =>
            who == WarRigWho.Vixen ? VixenRTX :
            who == WarRigWho.Payton ? PaytonRTX :
            who == WarRigWho.Brianna ? BriannaRTX : KaileeRTX;

        public static Color Hub(WarRigWho who) =>
            who == WarRigWho.Vixen ? VixenHub :
            who == WarRigWho.Payton ? PaytonHub :
            who == WarRigWho.Brianna ? BriannaHub : KaileeHub;

        /// <summary>Hide baked WarRig/hip wheels, hang L/R stand-in tires on <paramref name="root"/>.</summary>
        public static Transform Apply(Transform root, WarRigWho who)
        {
            if (root == null) return null;
            HideBakedWheels(root);
            var old = root.Find("WarRigTireStandIn");
            if (old) Object.DestroyImmediate(old.gameObject);
            // Review the prepared model's real wheels; do not mask them with procedural tire substitutes.
            return HangWarRigMesh(root, who);
        }
        public static string MeshName(WarRigWho who) =>
            who == WarRigWho.Vixen ? "GM_Vixen_WarRig_Prepared" :
            who == WarRigWho.Payton ? "GM_Payton_WarRig_Prepared" :
            who == WarRigWho.Brianna ? "GM_Brianna_WarRig_Prepared" : "GM_Kailee_WarRig_Prepared";

        /// <summary>Lockstep w/ Three.js hangWarRig: scale stamped mesh to hero height, feet on root, hide old capsule body.</summary>
        public static Transform HangWarRigMesh(Transform root, WarRigWho who, float height = 1.7f)
        {
            var old = root.Find("WarRigMesh");
            if (old) Object.DestroyImmediate(old.gameObject);
            var prefab = Resources.Load<GameObject>("WarRigs/Prepared/" + MeshName(who));
            if (prefab == null) { Debug.LogError("[GM] WAR-RIG MESH FAILED to load Resources/WarRigs/" + MeshName(who) + " (glTFast installed?) — keeping stand-in body"); return null; }
            // Hide stand-ins only after verifying the imported mesh has renderers.
            var holder = new GameObject("WarRigMesh").transform;
            holder.SetParent(root, false);
            var inst = Object.Instantiate(prefab, holder, false);
            var rs = inst.GetComponentsInChildren<Renderer>(true);
            if (rs.Length == 0) { Debug.LogError("[GM] WAR-RIG loaded without renderers: " + who); Object.DestroyImmediate(holder.gameObject); return null; }
            foreach (var r in root.GetComponents<Renderer>()) r.enabled = false;
            var oldVisual = root.Find("MeshRoot");
            if (oldVisual) foreach (var r in oldVisual.GetComponentsInChildren<Renderer>(true)) r.enabled = false;
            if (rs.Length > 0)
            {
                var b = rs[0].bounds; foreach (var r in rs) b.Encapsulate(r.bounds);
                float s = b.size.y > 1e-4f ? height / b.size.y : 1f;
                inst.transform.localScale = Vector3.one * s;
                var lc = holder.InverseTransformPoint(b.center); var lmin = holder.InverseTransformPoint(b.min);
                inst.transform.localPosition = new Vector3(-lc.x * s, -lmin.y * s, -lc.z * s);
            }
            var animator = inst.GetComponentInChildren<Animator>(true);
            if (animator)
            {
                animator.runtimeAnimatorController = Resources.Load<RuntimeAnimatorController>("WarRigs/Prepared/Controllers/AC_" + who + "_Prepared");
                animator.applyRootMotion = false; // the CharacterController remains the movement/collision authority
                animator.cullingMode = AnimatorCullingMode.AlwaysAnimate;
                var driver = root.GetComponent<PreparedWarRigAnimator>() ?? root.gameObject.AddComponent<PreparedWarRigAnimator>();
                driver.Configure(animator);
            }
            Debug.Log("[GM] PREPARED REVIEW war-rig hung: " + who + " skinned=" + inst.GetComponentsInChildren<SkinnedMeshRenderer>(true).Length);
            return holder;
        }

        static void HideBakedWheels(Transform root)
        {
            foreach (var t in root.GetComponentsInChildren<Transform>(true))
            {
                var n = t.name;
                if (System.Text.RegularExpressions.Regex.IsMatch(n, "WarRig_Wheel|HipTire|hip_tire|wheel_[lr]_02", System.Text.RegularExpressions.RegexOptions.IgnoreCase))
                {
                    foreach (var r in t.GetComponentsInChildren<Renderer>(true)) r.enabled = false;
                }
            }
        }

        static void SetMat(GameObject go, Color albedo, Color emission, float eIntensity)
        {
            var r = go.GetComponent<Renderer>();
            if (r == null) return;
            var m = new Material(Shader.Find("Universal Render Pipeline/Lit") ?? Shader.Find("Standard"));
            if (m.HasProperty("_BaseColor")) m.SetColor("_BaseColor", albedo);
            else if (m.HasProperty("_Color")) m.SetColor("_Color", albedo);
            if (eIntensity > 0f)
            {
                if (m.HasProperty("_EmissionColor"))
                {
                    m.EnableKeyword("_EMISSION");
                    m.SetColor("_EmissionColor", emission * eIntensity);
                }
            }
            r.sharedMaterial = m;
        }
    }

    /// <summary>Drop on a Dock/HD hero root; picks who from name if unset.</summary>
    public class WarRigTireStandInBehaviour : MonoBehaviour
    {
        public WarRigWho who = WarRigWho.Vixen;
        public bool autoFromName = true;

        void Start()
        {
            if (autoFromName)
            {
                var n = gameObject.name.ToLowerInvariant();
                if (n.Contains("payton") || n.Contains("peyton")) who = WarRigWho.Payton;
                else if (n.Contains("brianna")) who = WarRigWho.Brianna;
                else if (n.Contains("kailee")) who = WarRigWho.Kailee;
                else who = WarRigWho.Vixen;
            }
            WarRigTireStandIn.Apply(transform, who);
        }
    }
}
