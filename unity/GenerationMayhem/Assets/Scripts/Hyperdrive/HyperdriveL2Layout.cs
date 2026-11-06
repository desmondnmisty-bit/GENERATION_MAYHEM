// Runtime-safe Hyperdrive L2 (Soft) layout. Used by HyperdriveL2RuntimeBootstrap (play) AND the Editor menu builder (bake).
// Same coords as web Soft L2 (+Z north): Approach 0–35 · Ring Hall 35–90 · Corridor 90–130 · Cockpit Core 130–180 · Apex 180–215.
// Soft mesh GO: stamped Tripo war-rig meshes via WarRigTireStandIn.Apply (Resources/WarRigs) + WarRigTireStandIn ladder (Vixen .30 / Payton .27 / Brianna .22 / Kailee .16).
using UnityEngine;
using GenerationMayhem.Player; using GenerationMayhem.Traversal; using GenerationMayhem.Art;
namespace GenerationMayhem.Hyperdrive
{
    public static class HyperdriveL2Layout
    {
        public const string SceneName = "Hyperdrive_L2";
        public const float ApexClampX = 12f;
        static Material M(string n, Color c, float emit = 0) { var m = new Material(Shader.Find("Universal Render Pipeline/Lit") ?? Shader.Find("Standard")) { name = n, color = c }; if (emit > 0) { m.EnableKeyword("_EMISSION"); m.SetColor("_EmissionColor", c * emit); } return m; }
        static GameObject Cube(string n, Transform p, Vector3 c, Vector3 s, Material m, float pitch = 0) { var g = GameObject.CreatePrimitive(PrimitiveType.Cube); g.name = n; g.transform.SetParent(p); g.transform.position = c; g.transform.localScale = s; g.transform.rotation = Quaternion.Euler(pitch, 0, 0); g.GetComponent<Renderer>().sharedMaterial = m; return g; }
        static GameObject NewCam() { var c = new GameObject("Main Camera"); c.tag = "MainCamera"; c.AddComponent<Camera>(); c.AddComponent<AudioListener>(); return c; }

        /// Builds the whole Soft L2 lane into the active scene. Returns the root.
        public static Transform Build()
        {
            var floorM = M("HD_Floor", new Color(0.12f, 0.13f, 0.16f)); var wallM = M("HD_Wall", new Color(0.2f, 0.22f, 0.28f));
            var rampM = M("HD_Ramp", new Color(0.95f, 0.8f, 0.15f)); var railM = M("HD_Rail", new Color(1f, 0.48f, 0.1f), 2f); var boxM = M("HD_Funbox", new Color(0.35f, 0.38f, 0.45f));
            var root = new GameObject("Hyperdrive_L2").transform;
            // zones (floor + side walls), widths mirror web greybox
            (string n, float z0, float z1, float w)[] zones = { ("Approach", 0, 35, 12), ("RingHall", 35, 90, 26), ("Corridor", 90, 130, 10), ("CockpitCore", 130, 180, 22) };
            foreach (var z in zones)
            {
                var zr = new GameObject(z.n).transform; zr.SetParent(root); float cz = (z.z0 + z.z1) / 2, len = z.z1 - z.z0;
                Cube("Floor", zr, new Vector3(0, -0.5f, cz), new Vector3(z.w, 1, len), floorM);
                Cube("WallW", zr, new Vector3(-z.w / 2 - 0.5f, 2, cz), new Vector3(1, 4, len), wallM); Cube("WallE", zr, new Vector3(z.w / 2 + 0.5f, 2, cz), new Vector3(1, 4, len), wallM);
            }
            var rides = new GameObject("Rideables").transform; rides.SetParent(root);
            void Rail(float x, float z0, float z1, float h = 0.75f)
            {
                var r = new GameObject($"GrindRail_{x}_{z0}"); r.tag = "Rail"; r.transform.SetParent(rides); r.transform.position = new Vector3(x, h, z0);
                var p0 = new GameObject("P0").transform; p0.SetParent(r.transform); p0.position = new Vector3(x, h, z0);
                var p1 = new GameObject("P1").transform; p1.SetParent(r.transform); p1.position = new Vector3(x, h, z1);
                var bar = GameObject.CreatePrimitive(PrimitiveType.Cylinder); bar.name = "Bar"; bar.transform.SetParent(r.transform); bar.transform.position = new Vector3(x, h, (z0 + z1) / 2); bar.transform.rotation = Quaternion.Euler(90, 0, 0); bar.transform.localScale = new Vector3(0.14f, (z1 - z0) / 2, 0.14f); bar.GetComponent<Renderer>().sharedMaterial = railM;
                Object.DestroyImmediate(bar.GetComponent<Collider>());
                var bc = r.AddComponent<BoxCollider>(); bc.center = new Vector3(0, 0, (z1 - z0) / 2); bc.size = new Vector3(0.3f, 0.2f, z1 - z0);
                var gr = r.AddComponent<GrindRail>(); gr.railId = $"HD_{x}_{z0}"; gr.snapDistance = 2.0f; // Soft: wider catch than Dock (1.2)
            }
            void Kicker(float x, float z, float w, float l, float h)
            {
                var k = new GameObject($"Kicker_{x}_{z}"); k.transform.SetParent(rides); k.transform.position = new Vector3(x, 0, z);
                float ang = Mathf.Atan2(h, l) * Mathf.Rad2Deg, hyp = Mathf.Sqrt(h * h + l * l);
                var s = Cube("Slope", k.transform, new Vector3(x, h / 2, z + l / 2), new Vector3(w, 0.1f, hyp), rampM, -ang);
                var kr = k.AddComponent<KickerRamp>(); kr.lipHeight = h; kr.targetAirTime = 0.8f; kr.minLaunchSpeed = 6f;
                var lip = new GameObject("LipTrigger"); lip.transform.SetParent(k.transform); lip.transform.position = new Vector3(x, h + 0.6f, z + l - 0.3f);
                var lb = lip.AddComponent<BoxCollider>(); lb.isTrigger = true; lb.size = new Vector3(w, 1.4f, 0.6f); lip.AddComponent<KickerLipTrigger>();
            }
            void Funbox(float x, float z, float w, float l, float h) => Cube($"Funbox_{x}_{z}", rides, new Vector3(x, h / 2, z), new Vector3(w, h, l), boxM);
            // same placements as web world.ts Soft rideables
            Kicker(0, 10, 3, 3.5f, 0.8f); Rail(-3, 18, 32); Rail(3.5f, 40, 47); Kicker(3.5f, 37, 2.4f, 3.5f, 0.8f);
            Funbox(0, 60, 6, 6, 0.6f); Kicker(0, 51, 3, 3.5f, 0.9f); Rail(-7, 44, 53); Rail(7, 75, 85);
            Rail(0, 92, 120, 0.8f); Kicker(0, 90.5f, 2.2f, 3, 0.85f); Kicker(2.5f, 128, 3, 4, 1.2f);
            Rail(-4, 138, 146, 0.8f); Rail(4, 166, 174, 0.8f); Kicker(0, 143, 3, 3.5f, 1.0f); Funbox(0, 155, 8, 5, 0.7f);

            // systems
            var sys = new GameObject("_HyperdriveSystems"); var frenzy = sys.AddComponent<MomsFrenzy>(); sys.AddComponent<HyperdriveHUD>(); sys.AddComponent<HyperdriveIntro>();
            // Vixen (player) — reuses Dock skate controller
            var player = new GameObject("SkatePawn"); player.tag = "SkatePawn"; player.transform.position = new Vector3(0, 0.05f, 3);
            var cc = player.AddComponent<CharacterController>(); cc.height = 1.8f; cc.radius = 0.4f; cc.center = new Vector3(0, 0.9f, 0); cc.slopeLimit = 50f; cc.stepOffset = 0.3f;
            player.AddComponent<SkatePawnController>(); player.AddComponent<HyperdriveSmashDriver>(); var trav = player.AddComponent<SkaterTraversal>(); player.AddComponent<FighterIdentity>().role = FighterRole.Hero;
            var vhp = player.AddComponent<SoftHP>(); vhp.maxHP = vhp.hp = 150; player.AddComponent<SoftTrickTracker>();
            var vm = GameObject.CreatePrimitive(PrimitiveType.Capsule); vm.name = "MeshRoot"; Object.DestroyImmediate(vm.GetComponent<Collider>()); vm.transform.SetParent(player.transform, false); vm.transform.localPosition = new Vector3(0, 0.9f, 0); vm.GetComponent<Renderer>().sharedMaterial = M("Vixen", new Color(0.85f, 0.1f, 0.1f));
            WarRigTireStandIn.Apply(player.transform, WarRigWho.Vixen); // Misty MODEST v002 lockstep
            var cam = (Camera.main ? Camera.main.gameObject : NewCam()); var rig = cam.AddComponent<TraversalCameraRig>(); rig.target = trav;
            // girls / allies
            (HyperdriveAlly who, Color c, Vector3 off)[] girls = { (HyperdriveAlly.Brianna, new Color(0.1f, 0.7f, 0.4f), new Vector3(-2.5f, 0, -2.5f)), (HyperdriveAlly.Payton, new Color(1f, 0.85f, 0.1f), new Vector3(2.5f, 0, -2.5f)), (HyperdriveAlly.Kailee, new Color(0.2f, 0.6f, 1f), new Vector3(0, 0, -4f)) };
            foreach (var g in girls)
            {
                var a = GameObject.CreatePrimitive(PrimitiveType.Capsule); a.name = g.who.ToString(); a.transform.position = player.transform.position + g.off + Vector3.up; a.GetComponent<Renderer>().sharedMaterial = M(g.who + "_M", g.c);
                var k = a.AddComponent<HyperdriveAllyKit>(); k.who = g.who; k.follow = player.transform; k.offset = g.off;
                var h = a.AddComponent<SoftHP>(); h.isGirl = true; h.girlName = g.who.ToString().ToUpper();
                var ww = g.who == HyperdriveAlly.Kailee ? WarRigWho.Kailee : g.who == HyperdriveAlly.Brianna ? WarRigWho.Brianna : WarRigWho.Payton;
                WarRigTireStandIn.Apply(a.transform, ww); // Misty MODEST v002 lockstep
            }
            // Pink Vipers per zone (Swarm / Cobra / Fang / Hive). Capsule/sphere stays the body.
            // The split GLB replaces that stand-in mesh when it loads (Hive = 56-part redsuit).
            var vipM = M("PinkViper", new Color(1f, 0.3f, 0.7f), 0.5f); var vroot = new GameObject("PinkVipers").transform;
            (ViperKindL2 k, Vector3 p)[] vs = { (ViperKindL2.Swarm, new Vector3(-3, 1, 28)), (ViperKindL2.Swarm, new Vector3(3, 1, 30)), (ViperKindL2.Cobra, new Vector3(-8, 1, 65)), (ViperKindL2.Fang, new Vector3(8, 1, 70)), (ViperKindL2.Swarm, new Vector3(0, 1, 110)), (ViperKindL2.Hive, new Vector3(0, 1.5f, 165)) };
            foreach (var v in vs)
            {
                var e = GameObject.CreatePrimitive(v.k == ViperKindL2.Hive ? PrimitiveType.Sphere : PrimitiveType.Capsule);
                e.name = "Viper_" + v.k; e.tag = "Enemy"; e.transform.SetParent(vroot); e.transform.position = v.p;
                e.GetComponent<Renderer>().sharedMaterial = vipM; e.AddComponent<SoftViper>().kind = v.k;
                var h = e.AddComponent<SoftHP>(); h.maxHP = h.hp = v.k == ViperKindL2.Hive ? 400 : v.k == ViperKindL2.Cobra ? 120 : 50;
                if (v.k == ViperKindL2.Hive) e.transform.localScale = Vector3.one * 3;
                string parts = v.k == ViperKindL2.Swarm ? ViperMeshHang.Swarm : v.k == ViperKindL2.Cobra ? ViperMeshHang.Cobra : v.k == ViperKindL2.Fang ? ViperMeshHang.Fang : ViperMeshHang.Hive;
                ViperMeshHang.TryHang(e.transform, parts, v.k == ViperKindL2.Hive ? 3f : 2f);
            }
            frenzy.Bind(vhp);
            var light = Object.FindFirstObjectByType<Light>(); if (light) light.color = new Color(0.7f, 0.75f, 1f);
            RenderSettings.ambientLight = new Color(0.25f, 0.2f, 0.35f);
            BuildApex(root, floorM, wallM, player.transform);
            return root;
        }

        /// Soft Apex → CityLivedIn_v012: Iron Rose Arms + Slither Surplus only, 3 ambient civs, silver stairs, cover, exactly 4 edge guns, X clamp ±12.
        static void BuildApex(Transform root, Material floorM, Material wallM, Transform player)
        {
            var apex = new GameObject("Apex").transform; apex.SetParent(root);
            const float z0 = 180, z1 = 215, cz = (z0 + z1) / 2, len = z1 - z0, w = ApexClampX * 2;
            Cube("Floor", apex, new Vector3(0, -0.5f, cz), new Vector3(w, 1, len), floorM);
            Cube("WallW", apex, new Vector3(-ApexClampX - 0.5f, 2, cz), new Vector3(1, 4, len), wallM); Cube("WallE", apex, new Vector3(ApexClampX + 0.5f, 2, cz), new Vector3(1, 4, len), wallM);
            var shopM = M("HD_Shop", new Color(0.45f, 0.2f, 0.25f)); var signM = M("HD_ShopSign", new Color(1f, 0.35f, 0.6f), 1.5f);
            void Shop(string n, float x, float z) { var s = Cube("Shop_" + n, apex, new Vector3(x, 2, z), new Vector3(5, 4, 6), shopM); Cube("Sign", s.transform, new Vector3(x - Mathf.Sign(x) * 2.6f, 3.4f, z), new Vector3(0.1f, 0.8f, 4f), signM); }
            Shop("IronRoseArms", -9.5f, 192); Shop("SlitherSurplus", 9.5f, 204); // only these two
            var civM = M("HD_Civ", new Color(0.6f, 0.6f, 0.55f));
            foreach (var p in new[] { new Vector3(-5, 1, 188), new Vector3(4, 1, 196), new Vector3(-3, 1, 208) })
            { var c = GameObject.CreatePrimitive(PrimitiveType.Capsule); c.name = "AmbientCiv"; c.transform.SetParent(apex); c.transform.position = p; c.GetComponent<Renderer>().sharedMaterial = civM; }
            var silver = M("HD_SilverStairs", new Color(0.82f, 0.84f, 0.88f));
            for (int i = 0; i < 6; i++) Cube("SilverStair_" + i, apex, new Vector3(0, 0.15f + i * 0.3f, 209 + i * 0.6f), new Vector3(6, 0.3f + i * 0.6f, 0.6f), silver);
            var coverM = M("HD_Cover", new Color(0.4f, 0.4f, 0.42f));
            foreach (var p in new[] { new Vector3(-4, 0.6f, 186), new Vector3(5, 0.6f, 190), new Vector3(-6, 0.6f, 200), new Vector3(3, 0.6f, 202) }) { var cover = Cube("Cover", apex, p, new Vector3(3, 1.2f, 0.8f), coverM); cover.AddComponent<HyperdriveSmashable>(); }
            var gunM = M("HD_EdgeGun", new Color(0.15f, 0.15f, 0.15f));
            foreach (var p in new[] { new Vector3(-11, 1.2f, 184), new Vector3(11, 1.2f, 184), new Vector3(-11, 1.2f, 212), new Vector3(11, 1.2f, 212) }) // exactly 4
            { var g = Cube("EdgeGun", apex, p, new Vector3(0.6f, 0.6f, 1.6f), gunM); g.transform.LookAt(new Vector3(0, 1.2f, (z0 + z1) / 2)); }
            player.gameObject.AddComponent<HyperdriveApexClamp>();
        }
    }

    /// Keeps the player inside X ±12 once they reach the Apex (z ≥ 180).
    public class HyperdriveApexClamp : MonoBehaviour
    {
        void LateUpdate()
        {
            var p = transform.position; if (p.z < 180f || Mathf.Abs(p.x) <= HyperdriveL2Layout.ApexClampX) return;
            var cc = GetComponent<CharacterController>(); if (cc) cc.enabled = false;
            p.x = Mathf.Clamp(p.x, -HyperdriveL2Layout.ApexClampX, HyperdriveL2Layout.ApexClampX); transform.position = p;
            if (cc) cc.enabled = true;
        }
    }
}
