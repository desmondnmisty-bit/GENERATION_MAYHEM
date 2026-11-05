// LOCAL ONLY — Misty lockstep 2026-11-04: mirror Three.js web/src/game.ts addTruckTires R/T/X exactly.
// Soft Soft Soft Soft mesh HOLD; these are Dock/HD procedural stand-ins only.
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

            var v = Rtx(who);
            float R = v.x, T = v.y, X = v.z;
            var hub = Hub(who);
            var kit = new GameObject("WarRigTireStandIn").transform;
            kit.SetParent(root, false);

            for (int s = -1; s <= 1; s += 2)
            {
                var w = new GameObject(s < 0 ? "Tire_L" : "Tire_R").transform;
                w.SetParent(kit, false);
                w.localPosition = new Vector3(s * X, R + T, 0f);

                // Rubber torus approx: thin cylinder as tire carcass (axis = local X)
                var tire = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
                tire.name = "Rubber";
                Object.DestroyImmediate(tire.GetComponent<Collider>());
                tire.transform.SetParent(w, false);
                tire.transform.localRotation = Quaternion.Euler(0f, 0f, 90f);
                tire.transform.localScale = new Vector3(R * 2f, T, R * 2f);
                SetMat(tire, new Color(0.05f, 0.05f, 0.05f), Color.black, 0f);

                // Hub cap
                var cap = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
                cap.name = "Hub";
                Object.DestroyImmediate(cap.GetComponent<Collider>());
                cap.transform.SetParent(w, false);
                cap.transform.localRotation = Quaternion.Euler(0f, 0f, 90f);
                cap.transform.localScale = new Vector3(R * 0.44f, T * 0.7f, R * 0.44f);
                SetMat(cap, hub, hub, 2.2f);
            }
            return kit;
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
                if (n.Contains("payton") || n.Contains("jessica")) who = WarRigWho.Payton;
                else if (n.Contains("brianna")) who = WarRigWho.Brianna;
                else if (n.Contains("kailee")) who = WarRigWho.Kailee;
                else who = WarRigWho.Vixen;
            }
            WarRigTireStandIn.Apply(transform, who);
        }
    }
}
