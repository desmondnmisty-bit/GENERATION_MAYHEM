// Menu: Generation Mayhem/Build Hyperdrive L2 (Soft) → Assets/Scenes/Hyperdrive_L2.unity
// Mirrors web Soft L2 lane (same coords, +Z north): Approach 0–35 · Ring Hall 35–90 · Corridor 90–130 · Cockpit Core 130–180.
// Kickers / funboxes / orange grind rails at web positions; Vixen skate pawn; Brianna/Payton/Kailee ally kits; Pink Vipers;
// Mom's Frenzy + RAGE; trick tracker + grind sparks; Soft VO (Resources/VO). Hyperdrive = Level 2 of the same game.
#if UNITY_EDITOR
using UnityEditor; using UnityEditor.SceneManagement; using UnityEngine; using UnityEngine.SceneManagement;
using GenerationMayhem.Player; using GenerationMayhem.Traversal; using GenerationMayhem.Hyperdrive; using GenerationMayhem.Art;
namespace GenerationMayhem.EditorTools
{
    public static class HyperdriveL2Builder
    {
        const string ScenePath = "Assets/Scenes/Hyperdrive_L2.unity";
        static Material M(string n, Color c, float emit = 0) { var m = new Material(Shader.Find("Universal Render Pipeline/Lit") ?? Shader.Find("Standard")) { name = n, color = c }; if (emit > 0) { m.EnableKeyword("_EMISSION"); m.SetColor("_EmissionColor", c * emit); } return m; }
        static GameObject Cube(string n, Transform p, Vector3 c, Vector3 s, Material m, float pitch = 0) { var g = GameObject.CreatePrimitive(PrimitiveType.Cube); g.name = n; g.transform.SetParent(p); g.transform.position = c; g.transform.localScale = s; g.transform.rotation = Quaternion.Euler(pitch, 0, 0); g.GetComponent<Renderer>().sharedMaterial = m; return g; }
        static void EnsureTag(string tag) { var a = AssetDatabase.LoadAllAssetsAtPath("ProjectSettings/TagManager.asset"); if (a.Length == 0) return; var so = new SerializedObject(a[0]); var t = so.FindProperty("tags"); for (int i = 0; i < t.arraySize; i++) if (t.GetArrayElementAtIndex(i).stringValue == tag) return; t.InsertArrayElementAtIndex(t.arraySize); t.GetArrayElementAtIndex(t.arraySize - 1).stringValue = tag; so.ApplyModifiedPropertiesWithoutUndo(); }

        [MenuItem("Generation Mayhem/Build Hyperdrive L2 (Soft)")]
        public static void Build()
        {
            foreach (var t in new[] { "Enemy", "SkatePawn", "Rail" }) EnsureTag(t);
            var scene = EditorSceneManager.NewScene(NewSceneSetup.DefaultGameObjects, NewSceneMode.Single);
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
            player.AddComponent<SkatePawnController>(); var trav = player.AddComponent<SkaterTraversal>(); player.AddComponent<FighterIdentity>().role = FighterRole.Hero;
            var vhp = player.AddComponent<SoftHP>(); vhp.maxHP = vhp.hp = 150; player.AddComponent<SoftTrickTracker>();
            var vm = GameObject.CreatePrimitive(PrimitiveType.Capsule); vm.name = "MeshRoot"; Object.DestroyImmediate(vm.GetComponent<Collider>()); vm.transform.SetParent(player.transform, false); vm.transform.localPosition = new Vector3(0, 0.9f, 0); vm.GetComponent<Renderer>().sharedMaterial = M("Vixen", new Color(0.85f, 0.1f, 0.1f));
            WarRigTireStandIn.Apply(player.transform, WarRigWho.Vixen); // Misty MODEST v002 lockstep
            var cam = Camera.main.gameObject; var rig = cam.AddComponent<TraversalCameraRig>(); rig.target = trav;
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
            // Pink Vipers per zone (Swarm / Cobra / Fang / Hive)
            var vipM = M("PinkViper", new Color(1f, 0.3f, 0.7f), 0.5f); var vroot = new GameObject("PinkVipers").transform;
            (ViperKindL2 k, Vector3 p)[] vs = { (ViperKindL2.Swarm, new Vector3(-3, 1, 28)), (ViperKindL2.Swarm, new Vector3(3, 1, 30)), (ViperKindL2.Cobra, new Vector3(-8, 1, 65)), (ViperKindL2.Fang, new Vector3(8, 1, 70)), (ViperKindL2.Swarm, new Vector3(0, 1, 110)), (ViperKindL2.Hive, new Vector3(0, 1.5f, 165)) };
            foreach (var v in vs) { var e = GameObject.CreatePrimitive(v.k == ViperKindL2.Hive ? PrimitiveType.Sphere : PrimitiveType.Capsule); e.name = "Viper_" + v.k; e.tag = "Enemy"; e.transform.SetParent(vroot); e.transform.position = v.p; e.GetComponent<Renderer>().sharedMaterial = vipM; e.AddComponent<SoftViper>().kind = v.k; var h = e.AddComponent<SoftHP>(); h.maxHP = h.hp = v.k == ViperKindL2.Hive ? 400 : v.k == ViperKindL2.Cobra ? 120 : 50; if (v.k == ViperKindL2.Hive) e.transform.localScale = Vector3.one * 3; }
            frenzy.Bind(vhp);
            var light = GameObject.Find("Directional Light"); if (light) light.GetComponent<Light>().color = new Color(0.7f, 0.75f, 1f);
            RenderSettings.ambientLight = new Color(0.25f, 0.2f, 0.35f);
            EditorSceneManager.SaveScene(scene, ScenePath);
            var list = new System.Collections.Generic.List<EditorBuildSettingsScene>(EditorBuildSettings.scenes); if (!list.Exists(s => s.path == ScenePath)) { list.Add(new EditorBuildSettingsScene(ScenePath, true)); EditorBuildSettings.scenes = list.ToArray(); }
            Debug.Log("Hyperdrive L2 Soft built → " + ScenePath);
        }
    }
}
#endif
