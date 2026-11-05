// Copyright Dark Logic Studios. Generation Mayhem.
// Menu: Generation Mayhem/Build CityBlock Greybox — builds Assets/Scenes/CityBlock_Slice.unity
// from CityBlock_Arena_Traversal_v001 §2.2 (SLICE: Zone A Crane Yard 40×30 m + Zone B Container Street 60×16.6 m).
#if UNITY_EDITOR
using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.AI;
using UnityEngine.SceneManagement;
using Unity.AI.Navigation;
using Unity.Cinemachine;
using GenerationMayhem.Player;
using GenerationMayhem.Combat;
using GenerationMayhem.Traversal;

namespace GenerationMayhem.EditorTools
{
    /// <summary>
    /// World layout (meters, Y up, +Z = north, harbor to the south at z &lt; 0):
    ///   Zone B Container Street: x ∈ [-60, 0], z ∈ [0, 16.4]  (widened from 14 m so both lanes are 4.6 m, design answer Oct 12)
    ///   Zone A Crane Yard:       x ∈ [0, 40],  z ∈ [0, 30]
    ///   Harbor (KO water) below the yard quay at z &lt; 0.
    /// Grid 2 m, props snapped to 0.5 m. Container = 6 × 2.4 × 2.6 m (long axis X), tier = 2.6 m.
    /// Re-running the menu overwrites the scene and greybox assets.
    /// CityBlockKit (Assets/Environment/CityBlockKit) is used when present: kickers, rails (own legs), wall-ride
    /// bolt-on faces, gap-edge lips, breakable state swaps, jersey barriers. Primitives otherwise.
    /// Always primitive: containers (DockKit containers not wired yet), the 2.6 m banks (kit bank is 1 m).
    /// </summary>
    public static class CityBlockGreyboxBuilder
    {
        const string ScenePath = "Assets/Scenes/CityBlock_Slice.unity";
        const string AssetDir = "Assets/Greybox/CityBlock";
        const string WallRideTag = "WallRide";
        const float Tier = 2.6f;
        const float Snap = 0.5f;
        // Zone B cross-section (z), containers 6 (L) × 2.4 (depth) × 2.6 (height), wall-ride faces 0.1 m:
        //   south stack 0–2.4 | face 2.4–2.5 | SOUTH LANE 2.5–7.0 (4.5 face-to-face) | face 7.0–7.1 | middle row 7.1–9.5 |
        //   face 9.5–9.6 | NORTH LANE 9.6–14.1 (4.5) | face 14.1–14.2 | north stack 14.2–16.6.   BDepth = 3×2.4 + 2×(4.5+0.2) = 16.6
        const float ContainerDepth = 2.4f, FaceThickness = 0.1f, MinLaneFaceToFace = 4.5f;
        const float LaneGap = MinLaneFaceToFace + 2f * FaceThickness;                     // 4.7 container-to-container
        const float BDepth = 3f * ContainerDepth + 2f * LaneGap;                            // 16.6
        const float ZSouthStack = ContainerDepth * 0.5f;                                    // 1.2
        const float ZMid = ContainerDepth + LaneGap + ContainerDepth * 0.5f;               // 8.3
        const float ZNorthStack = BDepth - ContainerDepth * 0.5f;                          // 15.4
        const float ZSouthLane = ContainerDepth + LaneGap * 0.5f;                           // 4.75
        const float ZNorthLane = 2f * ContainerDepth + 1.5f * LaneGap;                      // 11.85
        // R1 SideLegs: pipe at z 13.0, legs on cantilever arms 0.9 m toward the north wall (13.75–14.05 < face at 14.1).
        const float ZRail1 = 13.0f, ZK1 = 13.0f;
        static bool _useKit;
        static Vector3 _gapTakeoffA, _gapTakeoffB;

        static readonly Dictionary<string, Material> Mats = new Dictionary<string, Material>();
        static Mesh _wedge;
        static int _triggerLayer;

        [MenuItem("Generation Mayhem/Build CityBlock Greybox")]
        public static void Build()
        {
            if (!EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo()) return;

            EnsureFolder(AssetDir);
            EnsureFolder(AssetDir + "/Materials");
            foreach (var t in new[] { "Ramp", "RampLip", "Rail", "RailSpline", WallRideTag, "GapEdge", "Breakable", "Barrier" }) EnsureTag(t);
            foreach (var l in new[] { "Ground", "Grind", "WallRide", "Breakable", "Debris", "Obstacle" }) EnsureLayer(l);
            CityBlockKitLibrary.Reset();
            _useKit = CityBlockKitLibrary.Available;
            Debug.Log("[CityBlockGreybox] CityBlockKit " + (_useKit ? "found — using kit FBX." : "not found — primitives only."));
            EnsureNavSettings();
            _triggerLayer = LayerMask.NameToLayer("Ignore Raycast");
            Mats.Clear();
            _wedge = GetOrCreateWedgeMesh();

            Scene scene = EditorSceneManager.NewScene(NewSceneSetup.DefaultGameObjects, NewSceneMode.Single);
            var root = new GameObject("CityBlock_Slice").transform;
            var zoneA = Group("ZoneA_CraneYard", root);
            var zoneB = Group("ZoneB_ContainerStreet", root);
            var harbor = Group("Harbor", root);
            var nav = Group("Nav", root);
            var systems = Group("Systems", root);

            BuildGround(zoneA, zoneB);
            BuildContainerStreet(zoneB, nav, out KickerRamp k1, out KickerRamp k2, out KickerRamp k3, out GrindRail r1);
            BuildCraneYard(zoneA, nav, out GrindRail r2, out GameObject[] mistGates);
            Transform respawn = BuildHarbor(harbor);
            BuildZones(root);
            BuildSystems(systems, mistGates, respawn);
            BuildNav(nav, k1, k2, k3, r1, r2);
            // Fighters come AFTER the bake so their colliders/meshes never carve the NavMesh.
            CityBlockMatchBuilder.Build(root, systems);

            EditorSceneManager.MarkSceneDirty(scene);
            EditorSceneManager.SaveScene(scene, ScenePath);
            CityBlockMatchBuilder.AddSceneToBuildSettings(ScenePath);
            AssetDatabase.SaveAssets();
            Debug.Log("[CityBlockGreybox] Built " + ScenePath + (CityBlockKitLibrary.Report.Count > 0
                ? "\nKit notes:\n - " + string.Join("\n - ", CityBlockKitLibrary.Report) : ""));
        }

        // ------------------------------------------------------------------ ground
        static void BuildGround(Transform a, Transform b)
        {
            Box("Floor_A_WetAsphalt", a, new Vector3(20, -0.5f, 15), new Vector3(40, 1, 30), "Asphalt");
            Box("Floor_B_WetAsphalt", b, new Vector3(-30, -0.5f, BDepth * 0.5f), new Vector3(60, 1, BDepth), "Asphalt");
        }

        // ------------------------------------------------------------------ zone B
        static void BuildContainerStreet(Transform b, Transform nav, out KickerRamp k1, out KickerRamp k2, out KickerRamp k3, out GrindRail r1)
        {
            // North + south walls: 10 × Container_Stack2 each (max 2 high = 5.2 m per §2.4.6).
            // Wall-ride surface = lane-facing side (kit bolt-on face when available).
            var north = Group("Stacks_North_WallRide", b);
            var south = Group("Stacks_South_WallRide", b);
            for (int i = 0; i < 10; i++)
            {
                float x = -57 + i * 6;
                ContainerStack(north, "N" + i, new Vector3(x, 0, ZNorthStack), 2, i % 2 == 0 ? "ContainerRed" : "ContainerBlue", faceSouth: true);
                ContainerStack(south, "S" + i, new Vector3(x, 0, ZSouthStack), 2, i % 2 == 0 ? "ContainerBlue" : "ContainerRed", faceNorth: true);
            }

            // Middle row: run A (3 single containers) — 5 m gap — run B (3). Tops at +2.6 m. Both sides rideable.
            var mid = Group("MiddleRow_GapRoute", b);
            for (int i = 0; i < 3; i++) ContainerStack(mid, "RunA_" + i, new Vector3(-43 + i * 6, 0, ZMid), 1, "ContainerGrey", faceNorth: true, faceSouth: true);
            for (int i = 0; i < 3; i++) ContainerStack(mid, "RunB_" + i, new Vector3(-20 + i * 6, 0, ZMid), 1, "ContainerGrey", faceNorth: true, faceSouth: true);
            // CB_Ramp_Bank_2.6m (4 × 8 m, 18°) butting run A's west end (x −46); primitive wedge of the same size otherwise.
            Bank("Ramp_Bank_RunA_2.6m", mid, new Vector3(-54, 0, ZMid), 90f);

            // Gap x ∈ [-28, -23]: hazard lips on both roof edges (GapEdge), triggers below/after.
            _gapTakeoffA = GapEdge(mid, "GapEdge_RunA", new Vector3(-28f, Tier, ZMid), faceDir: Vector3.right);
            _gapTakeoffB = GapEdge(mid, "GapEdge_RunB", new Vector3(-23f, Tier, ZMid), faceDir: Vector3.left);
            var fail = TriggerBox("GapB_Fail_LowerAisle", mid, new Vector3(-25.5f, 0f, ZMid), new Vector3(5f, 1.5f, 2.4f));
            fail.AddComponent<GapJumpTrigger>().mode = GapJumpTrigger.Mode.Fail;
            var clear = TriggerBox("GapB_Clear_Landing", mid, new Vector3(-21f, Tier, ZMid), new Vector3(4f, 1.5f, 2.4f));
            clear.AddComponent<GapJumpTrigger>().mode = GapJumpTrigger.Mode.Clear;

            // K1 north lane → R1 crane rail. K2 on top of run A → gap (must be S: roof is 2.4 m wide). K3 → yard.
            k1 = Kicker("K1", b, new Vector3(-42, 0, ZK1), 90f, small: true, airTime: 0.8f);
            k2 = Kicker("K2", b, new Vector3(-30, Tier, ZMid), 90f, small: true, airTime: 0.8f);
            k3 = Kicker("K3", b, new Vector3(-3, 0, ZSouthLane), 90f, small: false, airTime: 0.9f);

            // R1 crane rail, top at +2.6 m, x ∈ [-36, -28], hugging the north wall so its legs don't block the lane.
            r1 = Rail("R1_CraneRail", b, new Vector3(-36, Tier, ZRail1), new Vector3(-28, Tier, ZRail1), legSide: Vector3.forward);

            // Breakable crates in the south lane (smash-through shortcut).
            var brk = Group("Breakables_Crates", b);
            Crate(brk, new Vector3(-19.5f, 0, 3.5f));
            Crate(brk, new Vector3(-18.5f, 0, 4.5f));
            Crate(brk, new Vector3(-17.5f, 0, 3.5f));
            Crate(brk, new Vector3(-16.5f, 0, 4.5f));
        }

        // ------------------------------------------------------------------ zone A
        static void BuildCraneYard(Transform a, Transform nav, out GrindRail r2, out GameObject[] mistGates)
        {
            // Boundary: west wall (z 14–30), north wall, east wall. South = open quay edge (KO).
            var walls = Group("Boundary", a);
            foreach (float z in new[] { BDepth + 3f, BDepth + 9f, 27f }) ContainerStack(walls, "W" + z, new Vector3(-1.2f, 0, z), 2, "ContainerGrey", alongZ: true);
            for (int i = 0; i < 7; i++) ContainerStack(walls, "N" + i, new Vector3(3 + i * 6, 0, 31.2f), 2, "ContainerGrey");
            for (int i = 0; i < 5; i++) ContainerStack(walls, "E" + i, new Vector3(41.2f, 0, 3 + i * 6), 2, "ContainerGrey", alongZ: true);

            // Gantry R2 (yard side): container platform + bank, rail continues off the platform at +2.6 m.
            var gantry = Group("Gantry_R2", a);
            // v002: 8 m bank → platform x 9–15 → R2 (EndLegs) x 16–24. Shifted +3 m vs rev 2 so the 8 m bank clears the west wall.
            ContainerStack(gantry, "R2_Platform", new Vector3(12, 0, 24), 1, "ContainerRed");
            Bank("Ramp_Bank_R2_2.6m", gantry, new Vector3(1f, 0, 24), 90f);
            r2 = Rail("R2_GantryRail", gantry, new Vector3(16, Tier, 24), new Vector3(24, Tier, 24), legSide: null);

            // Oil A / B (toxic green #66FF1F, never burns).
            Oil(a, "OilA", new Vector3(14, 0, 18), new Vector3(6, 0, 4));
            Oil(a, "OilB", new Vector3(26, 0, 9), new Vector3(6, 0, 4));

            // Crane drop zones (markers only; the crane hazard already exists in the slice).
            Marker(a, "CraneDrop_X1", new Vector3(24, 0, 20), 4f, "Hazard");
            Marker(a, "CraneDrop_X2", new Vector3(12, 0, 9), 4f, "Hazard");

            // 4 static jersey barriers (2 × 0.6 × 0.8 m), NavMeshObstacle carving.
            var bars = Group("JerseyBarriers", a);
            Barrier(bars, new Vector3(8, 0, 4), 0);
            Barrier(bars, new Vector3(20, 0, 13), 90);
            Barrier(bars, new Vector3(32, 0, 20), 0);
            Barrier(bars, new Vector3(33, 0, 5), 45);

            // Breakable barrels.
            var brk = Group("Breakables_Barrels", a);
            Barrel(brk, new Vector3(18, 0, 22));
            Barrel(brk, new Vector3(18.5f, 0, 23));
            Barrel(brk, new Vector3(30, 0, 12));

            // Mist walls seal the yard for the boss match (§2.4.5). Off by default for traversal testing.
            var mist = Group("MistGates", a);
            var g1 = TriggerBox("MistGate_ContainerStreet", mist, new Vector3(0.25f, 0, ZMid), new Vector3(0.5f, 6f, BDepth - 2f * ContainerDepth));
            g1.GetComponent<BoxCollider>().isTrigger = false;
            g1.layer = 0;
            g1.SetActive(false);
            mistGates = new[] { g1 };
        }

        // ------------------------------------------------------------------ harbor
        static Transform BuildHarbor(Transform h)
        {
            var water = Box("Harbor_Water", h, new Vector3(-10, -1.6f, -8), new Vector3(100, 0.2f, 16), "Water");
            Object.DestroyImmediate(water.GetComponent<Collider>());
            Box("Quay_Wall_Yard", h, new Vector3(20, -1.5f, -0.25f), new Vector3(40, 2f, 0.5f), "Concrete"); // below deck level: edge stays open for KOs
            var ko = TriggerBox("Harbor_KO_Edge", h, new Vector3(20, -4f, -6f), new Vector3(44, 3.4f, 11f));
            var edge = ko.AddComponent<HarborKOEdge>();
            var respawn = new GameObject("Quay_Respawn").transform;
            respawn.SetParent(h, false);
            respawn.position = new Vector3(20, 0.1f, 3);
            respawn.rotation = Quaternion.Euler(0, 0, 0);
            edge.quayRespawn = respawn;
            var pts = new List<Transform>();
            for (int i = 0; i < 5; i++)
            {
                var q = new GameObject("Quay_Point_" + i).transform;
                q.SetParent(h, false);
                q.position = new Vector3(4 + i * 8, 0.1f, 2f);
                pts.Add(q);
            }
            edge.quayPoints = pts.ToArray();
            return respawn;
        }

        static void BuildZones(Transform root)
        {
            var zones = Group("Zones", root);
            var a = TriggerBox("Zone_A_CraneYard", zones, new Vector3(20, 0, 15), new Vector3(40, 8, 30));
            var za = a.AddComponent<CityBlockZone>(); za.zoneId = "A"; za.displayName = "Crane Yard"; za.isFightSpace = true;
            var b = TriggerBox("Zone_B_ContainerStreet", zones, new Vector3(-30, 0, ZMid), new Vector3(60, 8, BDepth));
            var zb = b.AddComponent<CityBlockZone>(); zb.zoneId = "B"; zb.displayName = "Container Street"; zb.isFightSpace = false;
        }

        // ------------------------------------------------------------------ systems / player / camera
        static void BuildSystems(Transform sys, GameObject[] mistGates, Transform respawn)
        {
            var go = new GameObject("MatchSystems");
            go.transform.SetParent(sys, false);
            var meter = go.AddComponent<ShatterSlingshotStub>();
            var chaos = go.AddComponent<MomsChaosMeter>();
            var gain = go.AddComponent<TrickChaosGain>();
            SetPrivate(gain, "synergyMeter", meter);
            SetPrivate(gain, "momsChaos", chaos);
            SetPrivate(gain, "config", GetOrCreateChaosConfig());
            var victory = go.AddComponent<VictoryController>();
            victory.mistGates = mistGates;
            go.AddComponent<CityBlockNavBootstrap>();

            // Player skater (greybox capsule; parent Vixen under MeshRoot later).
            var player = new GameObject("SkatePawn");
            player.transform.position = new Vector3(20, 0.05f, 6);
            player.tag = "SkatePawn";
            int playerLayer = LayerMask.NameToLayer("Player");
            if (playerLayer >= 0) player.layer = playerLayer;
            var cc = player.AddComponent<CharacterController>();
            cc.height = 1.8f; cc.radius = 0.4f; cc.center = new Vector3(0, 0.9f, 0); cc.stepOffset = 0.3f; cc.slopeLimit = 50f;
            player.AddComponent<SkatePawnController>();
            player.AddComponent<SkaterTraversal>();
            player.AddComponent<FighterIdentity>().role = FighterRole.Hero;
            player.AddComponent<ShoveState>();
            var mesh = GameObject.CreatePrimitive(PrimitiveType.Capsule);
            mesh.name = "MeshRoot";
            Object.DestroyImmediate(mesh.GetComponent<Collider>());
            mesh.transform.SetParent(player.transform, false);
            mesh.transform.localPosition = new Vector3(0, 0.9f, 0);
            mesh.GetComponent<Renderer>().sharedMaterial = Mat("Vixen", new Color(0.85f, 0.1f, 0.1f));
            var pawnSo = new SerializedObject(player.GetComponent<SkatePawnController>());
            var lean = pawnSo.FindProperty("leanRoot");
            if (lean != null) { lean.objectReferenceValue = mesh.transform; pawnSo.ApplyModifiedPropertiesWithoutUndo(); }

            // Camera: Cinemachine 3 (TraversalCameraRig remains in the project as a fallback only).
            var cam = Camera.main != null ? Camera.main.gameObject : new GameObject("Main Camera", typeof(Camera));
            cam.tag = "MainCamera";
            cam.transform.position = player.transform.position + new Vector3(0, 3.2f, -6);
            if (cam.GetComponent<CinemachineBrain>() == null) cam.AddComponent<CinemachineBrain>();

            var camRoot = Group("Cameras", sys);
            var proxy = new GameObject("CM_Proxy").transform;
            proxy.SetParent(camRoot, false);
            proxy.position = player.transform.position + Vector3.up * 1.2f;
            var groupGo = new GameObject("CM_TargetGroup");
            groupGo.transform.SetParent(camRoot, false);
            var group = groupGo.AddComponent<CinemachineTargetGroup>();

            var travGo = new GameObject("CM_Traversal");
            travGo.transform.SetParent(camRoot, false);
            var trav = travGo.AddComponent<CinemachineCamera>();
            trav.Target.TrackingTarget = proxy;
            trav.Priority = 10;
            var tpf = travGo.AddComponent<CinemachineThirdPersonFollow>();
            tpf.CameraDistance = 6f; tpf.Damping = new Vector3(0.1f, 0.3f, 0.3f);

            var combGo = new GameObject("CM_CombatLock");
            combGo.transform.SetParent(camRoot, false);
            var comb = combGo.AddComponent<CinemachineCamera>();
            comb.Target.TrackingTarget = proxy;
            comb.Target.LookAtTarget = groupGo.transform;
            comb.Target.CustomLookAtTarget = true;
            comb.Priority = 9;
            var tpf2 = combGo.AddComponent<CinemachineThirdPersonFollow>();
            tpf2.CameraDistance = 6f; tpf2.Damping = new Vector3(0.1f, 0.3f, 0.3f);
            var composer = combGo.AddComponent<CinemachineRotationComposer>();
            composer.Damping = new Vector2(0.4f, 0.4f);

            var director = camRoot.gameObject.AddComponent<CinemachineTraversalDirector>();
            director.target = player.GetComponent<SkaterTraversal>();
            director.proxy = proxy;
            director.traversalCam = trav;
            director.combatCam = comb;
            director.targetGroup = group;
        }

        // ------------------------------------------------------------------ navigation (§5)
        static void BuildNav(Transform nav, KickerRamp k1, KickerRamp k2, KickerRamp k3, GrindRail r1, GrindRail r2)
        {
            int navMask = ~0;
            if (_triggerLayer >= 0) navMask &= ~(1 << _triggerLayer);

            var sA = Surface(nav, "NavSurface_ZoneA", new Vector3(20, 3, 15), new Vector3(41, 10, 31), navMask);
            var sB = Surface(nav, "NavSurface_ZoneB", new Vector3(-30, 3, ZMid), new Vector3(61, 10, BDepth + 1f), navMask);

            // Area modifiers (skipped with a warning if the area is not defined).
            AreaVolume(nav, "NavArea_OilA", new Vector3(14, 0.5f, 18), new Vector3(6, 2, 4), CityBlockNavAreas.Oil);
            AreaVolume(nav, "NavArea_OilB", new Vector3(26, 0.5f, 9), new Vector3(6, 2, 4), CityBlockNavAreas.Oil);
            AreaVolume(nav, "NavArea_CraneX1", new Vector3(24, 0.5f, 20), new Vector3(4, 2, 4), CityBlockNavAreas.CraneZone);
            AreaVolume(nav, "NavArea_CraneX2", new Vector3(12, 0.5f, 9), new Vector3(4, 2, 4), CityBlockNavAreas.CraneZone);
            foreach (var k in new[] { k1, k2, k3 })
            {
                var m = k.gameObject.AddComponent<NavMeshModifier>();
                int area = NavMesh.GetAreaFromName(CityBlockNavAreas.Ramp);
                if (area >= 0) { m.overrideArea = true; m.area = area; }
            }

            // Off-mesh links (§5.2).
            var links = Group("Links", nav);
            // K1: north lane, one-way east, Air_Launch → Air_Land.
            Link(links, "Link_K1", new Vector3(-45, 0, ZK1), new Vector3(-34, 0, ZK1), TraversalNavLink.LinkKind.Ramp, "K1", 0.8f, 1.6f, CityBlockNavAreas.RampLink, null);
            // K3: into the yard.
            Link(links, "Link_K3", new Vector3(-7, 0, ZSouthLane), new Vector3(6, 0, ZSouthLane), TraversalNavLink.LinkKind.Ramp, "K3", 0.9f, 2f, CityBlockNavAreas.RampLink, null);
            // K2 → container gap: Fang + allies only, 0.8 s arc, run A top → run B top.
            // Start behind K2 on run A, end past the far lip (offsets from the GapEdge_Takeoff markers).
            Vector3 gapStart = _gapTakeoffA + Vector3.left * 4f, gapEnd = _gapTakeoffB + Vector3.right * 3f;
            gapStart.y = Tier; gapEnd.y = Tier;
            Link(links, "Link_K2_Gap", gapStart, gapEnd, TraversalNavLink.LinkKind.Gap, "K2_Gap", 0.8f, 1.2f, CityBlockNavAreas.GapLink, null);
            // Rails: allies only.
            Link(links, "Link_R1", new Vector3(-37.5f, 0, ZNorthLane), new Vector3(-26.5f, 0, ZNorthLane), TraversalNavLink.LinkKind.Rail, "R1", 1f, 0f, CityBlockNavAreas.RailLink, r1);
            Link(links, "Link_R2", new Vector3(14, Tier, 24), new Vector3(26, 0, 24), TraversalNavLink.LinkKind.Rail, "R2", 1f, 0f, CityBlockNavAreas.RailLink, r2);
            // Seam links (two surfaces don't stitch): bidirectional, walkable, both lanes + the K3 apron.
            Seam(links, "Seam_NorthLane", new Vector3(-1.5f, 0, ZNorthLane), new Vector3(1.5f, 0, ZNorthLane));
            Seam(links, "Seam_SouthLane", new Vector3(-1.5f, 0, ZSouthLane), new Vector3(1.5f, 0, ZSouthLane));

            // (The Phase 2 link-test agents are gone: the real match fighters now use these links.)

            // Bake + persist NavMeshData as assets next to the scene.
            BakeAndSave(sA, AssetDir + "/NavMesh_ZoneA.asset");
            BakeAndSave(sB, AssetDir + "/NavMesh_ZoneB.asset");
        }

        static NavMeshSurface Surface(Transform parent, string name, Vector3 center, Vector3 size, int layerMask)
        {
            var go = new GameObject(name);
            go.transform.SetParent(parent, false);
            var s = go.AddComponent<NavMeshSurface>();
            s.agentTypeID = 0; // Humanoid — radius 0.45 set by EnsureNavSettings()
            s.collectObjects = CollectObjects.Volume;
            s.center = center;
            s.size = size;
            s.useGeometry = NavMeshCollectGeometry.PhysicsColliders;
            s.layerMask = layerMask;
            return s;
        }

        static void BakeAndSave(NavMeshSurface s, string path)
        {
            try
            {
                s.BuildNavMesh();
                if (s.navMeshData != null)
                {
                    AssetDatabase.DeleteAsset(path);
                    AssetDatabase.CreateAsset(s.navMeshData, path);
                    EditorUtility.SetDirty(s);
                }
            }
            catch (System.Exception e)
            {
                Debug.LogWarning("[CityBlockGreybox] NavMesh bake failed for " + s.name + " — select it and press Bake. " + e.Message);
            }
        }

        static void AreaVolume(Transform parent, string name, Vector3 center, Vector3 size, string areaName)
        {
            int area = NavMesh.GetAreaFromName(areaName);
            if (area < 0) { Debug.LogWarning("[CityBlockGreybox] Nav area '" + areaName + "' missing; " + name + " skipped."); return; }
            var go = new GameObject(name);
            go.transform.SetParent(parent, false);
            go.transform.position = center;
            var v = go.AddComponent<NavMeshModifierVolume>();
            v.size = size;
            v.center = Vector3.zero;
            v.area = area;
        }

        static void Link(Transform parent, string name, Vector3 start, Vector3 end, TraversalNavLink.LinkKind kind, string id,
                         float duration, float arc, string areaName, GrindRail rail)
        {
            var go = new GameObject(name);
            go.transform.SetParent(parent, false);
            var l = go.AddComponent<NavMeshLink>();
            l.startPoint = start; // parent is at origin, so local == world
            l.endPoint = end;
            l.width = kind == TraversalNavLink.LinkKind.Rail ? 0f : 1.5f;
            l.bidirectional = false; // one-way
            l.area = CityBlockNavAreas.AreaOrWalkable(areaName);
            l.UpdateLink();
            var t = go.AddComponent<TraversalNavLink>();
            t.kind = kind; t.linkId = id; t.duration = duration; t.arcHeight = arc; t.rail = rail;
            if (kind == TraversalNavLink.LinkKind.Rail) { t.launchTrigger = "Grind_Start"; t.landTrigger = "Grind_End"; }
        }

        static void Seam(Transform parent, string name, Vector3 a, Vector3 b)
        {
            var go = new GameObject(name);
            go.transform.SetParent(parent, false);
            var l = go.AddComponent<NavMeshLink>();
            l.startPoint = a; l.endPoint = b; l.width = 3f; l.bidirectional = true; l.area = 0;
            l.UpdateLink();
        }

        static void TestAgent(Transform parent, string name, FighterRole role, Vector3 start, Vector3 goal, Color c)
        {
            var go = GameObject.CreatePrimitive(PrimitiveType.Capsule);
            go.name = name;
            go.transform.SetParent(parent, false);
            go.transform.position = start + Vector3.up;
            go.GetComponent<Renderer>().sharedMaterial = Mat("Agent_" + name, c);
            var rb = go.AddComponent<Rigidbody>(); rb.isKinematic = true; // so trigger hazards see it
            var agent = go.AddComponent<NavMeshAgent>();
            agent.radius = 0.45f; agent.speed = 8f; agent.autoTraverseOffMeshLink = false;
            go.AddComponent<FighterIdentity>().role = role;
            go.AddComponent<ShoveState>();
            go.AddComponent<AgentLinkTraverser>();
            var a = new GameObject(name + "_GoalA").transform; a.SetParent(parent, false); a.position = start;
            var b = new GameObject(name + "_GoalB").transform; b.SetParent(parent, false); b.position = goal;
            var d = go.AddComponent<NavDebugGoal>(); d.goalA = a; d.goalB = b;
        }

        // ------------------------------------------------------------------ pieces
        static void ContainerStack(Transform parent, string name, Vector3 bottomCenter, int tiers, string mat, bool alongZ = false,
                                   bool faceNorth = false, bool faceSouth = false)
        {
            var go = new GameObject("Container_Stack" + tiers + "_" + name);
            go.transform.SetParent(parent, false);
            go.transform.position = SnapFine(bottomCenter);
            if (alongZ) go.transform.rotation = Quaternion.Euler(0, 90, 0);
            bool hasFaces = faceNorth || faceSouth;
            // With the kit, only the bolt-on faces are rideable; without it the whole container is tagged.
            bool tagBody = !(_useKit && hasFaces);
            if (tagBody && hasFaces) go.tag = WallRideTag;
            for (int t = 0; t < tiers; t++)
            {
                var c = Box("Tier" + t, go.transform, Vector3.zero, new Vector3(6f, Tier, 2.4f), mat);
                c.transform.localPosition = new Vector3(0, Tier * (t + 0.5f), 0);
                c.transform.localRotation = Quaternion.identity;
                if (tagBody && hasFaces) c.tag = WallRideTag;
                if (faceNorth) WallRideFace(go.transform, t, +1);
                if (faceSouth) WallRideFace(go.transform, t, -1);
            }
            // Chevron trim on the top edges (grindable-edge language, visual only at slice).
            var trim = Box("ChevronTrim", go.transform, Vector3.zero, new Vector3(6f, 0.06f, 2.42f), "ChevronWhite");
            trim.transform.localPosition = new Vector3(0, Tier * tiers + 0.03f, 0);
            trim.transform.localRotation = Quaternion.identity;
            Object.DestroyImmediate(trim.GetComponent<Collider>());
            go.AddComponent<ContainerDitherFade>();
        }

        /// <summary>Kit CB_WallRide_ContainerFace_6m bolted flush on the long side (side = +1 north / -1 south, stack-local Z).
        /// v002: WallRide_Normal.forward (+Z) is outward; WallRide_NormalTip sits 1 m out (cross-check).</summary>
        static void WallRideFace(Transform stack, int tier, int side)
        {
            if (!_useKit) return;
            const string piece = "CB_WallRide_ContainerFace_6m";
            var face = CityBlockKitLibrary.Spawn(piece, stack);
            if (face == null) return;
            Quaternion localRot = side > 0 ? Quaternion.identity : Quaternion.Euler(0, 180, 0); // piece +Z → outward
            Vector3 bottomCenter = new Vector3(0, Tier * tier, side * (ContainerDepth * 0.5f + FaceThickness * 0.5f));
            CityBlockKitLibrary.Place(face, stack, bottomCenter, localRot, piece);

            Vector3 outward = stack.TransformDirection(new Vector3(0, 0, side));
            var n = CityBlockKitLibrary.Marker(face, "WallRide_Normal");
            var tip = CityBlockKitLibrary.Marker(face, "WallRide_NormalTip");
            if (n == null) CityBlockKitLibrary.Note(piece + ": WallRide_Normal marker missing; facing not verified.");
            else
            {
                if (tip != null)
                {
                    Vector3 tipDir = tip.position - n.position;
                    if (Vector3.Angle(tipDir, n.forward) > 5f)
                        CityBlockKitLibrary.Note(piece + ": WallRide_Normal.forward and WallRide_NormalTip disagree (" + Vector3.Angle(tipDir, n.forward).ToString("0") + "°); trusting NormalTip.");
                    if (Mathf.Abs(tipDir.magnitude - 1f) > 0.05f)
                        CityBlockKitLibrary.Note(piece + ": WallRide_NormalTip is " + tipDir.magnitude.ToString("0.00") + " m out (expected 1 m).");
                }
                Vector3 kitOut = tip != null ? (tip.position - n.position) : n.forward;
                if (Vector3.Dot(kitOut, outward) < 0f)
                {
                    CityBlockKitLibrary.Note(piece + ": outward marker points INTO the container after placement; flipped 180°.");
                    CityBlockKitLibrary.Place(face, stack, bottomCenter, localRot * Quaternion.Euler(0, 180, 0), piece);
                }
            }
            CityBlockKitLibrary.SetTag(face, WallRideTag, children: true);
        }

        /// <summary>Gap lip on a roof edge. edgeCenter = roof-edge midpoint; faceDir points into the gap. Returns takeoff point.</summary>
        static Vector3 GapEdge(Transform parent, string name, Vector3 edgeCenter, Vector3 faceDir)
        {
            if (_useKit)
            {
                const string piece = "CB_GapEdge_Container_2.4m";
                var lip = CityBlockKitLibrary.Spawn(piece, parent);
                if (lip != null)
                {
                    lip.name = name;
                    // Piece is 2.4 (X) × 0.4 (Z); GapEdge_Takeoff sits on its z = 0 edge → that edge faces the gap,
                    // so piece −Z must point along faceDir.
                    Quaternion rot = Quaternion.LookRotation(-faceDir, Vector3.up);
                    Vector3 bc = edgeCenter - faceDir * 0.2f;
                    CityBlockKitLibrary.Place(lip, null, bc, rot, piece);
                    var tk = CityBlockKitLibrary.Marker(lip, "GapEdge_Takeoff");
                    if (tk != null && Vector3.Dot(tk.position - bc, faceDir) < 0f)
                    {
                        CityBlockKitLibrary.Note(piece + ": GapEdge_Takeoff is on the back edge; flipped.");
                        CityBlockKitLibrary.Place(lip, null, bc, rot * Quaternion.Euler(0, 180, 0), piece);
                        tk = CityBlockKitLibrary.Marker(lip, "GapEdge_Takeoff");
                    }
                    CityBlockKitLibrary.SetTag(lip, "GapEdge", children: false);
                    if (tk != null) return tk.position;
                    CityBlockKitLibrary.Note(piece + ": GapEdge_Takeoff marker missing; using roof edge.");
                    return edgeCenter;
                }
            }
            var p = Box(name, parent, edgeCenter - faceDir * 0.2f + Vector3.up * 0.04f, new Vector3(0.4f, 0.08f, 2.4f), "Hazard");
            CityBlockKitLibrary.SetTag(p, "GapEdge", children: false);
            return edgeCenter;
        }

        static KickerRamp Kicker(string id, Transform parent, Vector3 bottomCenterStart, float yaw, bool small, float airTime)
        {
            Vector3 size = small ? new Vector3(2, 1, 2) : new Vector3(4, 1.5f, 4); // Ramp_Kicker_S / _L (W × H × L)
            var go = new GameObject("Ramp_Kicker_" + (small ? "S_" : "L_") + id);
            go.transform.SetParent(parent, false);
            go.transform.position = SnapFine(bottomCenterStart);
            go.transform.rotation = Quaternion.Euler(0, yaw, 0);
            CityBlockKitLibrary.SetTag(go, "Ramp", children: false);
            int ground = LayerMask.NameToLayer("Ground");

            // Lip in ramp-local space; overwritten from the kit Ramp_Lip marker when the kit is used.
            Vector3 lipLocal = new Vector3(0, size.y, size.z);
            string piece = small ? "CB_Ramp_Kicker_S" : "CB_Ramp_Kicker_L";
            GameObject kit = _useKit ? CityBlockKitLibrary.Spawn(piece, go.transform) : null;
            if (kit != null)
            {
                // v002 contract: piece spans +X/+Z from its corner pivot, lip at the far +Z edge → identity in ramp frame.
                CityBlockKitLibrary.Place(kit, go.transform, new Vector3(0, 0, size.z * 0.5f), Quaternion.identity, piece);
                var lipM = CityBlockKitLibrary.Marker(kit, "Ramp_Lip");
                if (lipM == null) CityBlockKitLibrary.Note(piece + ": Ramp_Lip marker missing; lip assumed at far top edge.");
                else
                {
                    Vector3 l = go.transform.InverseTransformPoint(lipM.position);
                    if (l.z < size.z * 0.5f)
                    {
                        CityBlockKitLibrary.Note(piece + ": Ramp_Lip is on the near (−Z) side; rotated 180°.");
                        CityBlockKitLibrary.Place(kit, go.transform, new Vector3(0, 0, size.z * 0.5f), Quaternion.Euler(0, 180, 0), piece);
                        l = go.transform.InverseTransformPoint(lipM.position);
                    }
                    lipLocal = l;
                }
            }
            else
            {
                var w = Wedge("Wedge", go.transform, Vector3.zero, size, 0f, "RampYellow");
                w.transform.localPosition = Vector3.zero; w.transform.localRotation = Quaternion.identity;
            }
            if (ground >= 0) foreach (var t in go.GetComponentsInChildren<Transform>(true)) t.gameObject.layer = ground;

            var k = go.AddComponent<KickerRamp>();
            k.rampId = id; k.lipHeight = lipLocal.y; k.targetAirTime = airTime;
            var lip = new GameObject("LipTrigger");
            lip.transform.SetParent(go.transform, false);
            lip.transform.localPosition = new Vector3(lipLocal.x, lipLocal.y + 0.6f, lipLocal.z - 0.3f);
            if (_triggerLayer >= 0) lip.layer = _triggerLayer;
            var bc = lip.AddComponent<BoxCollider>(); bc.isTrigger = true; bc.size = new Vector3(size.x, 1.4f, 0.6f);
            lip.AddComponent<KickerLipTrigger>();
            return k;
        }

        /// <summary>Wedge: footprint size.x × size.z, rises to size.y along local +Z. Pivot bottom-center of the low edge.</summary>
        static GameObject Wedge(string name, Transform parent, Vector3 bottomCenterStart, Vector3 size, float yaw, string mat)
        {
            var go = new GameObject(name);
            go.transform.SetParent(parent, false);
            go.transform.position = SnapFine(bottomCenterStart);
            go.transform.rotation = Quaternion.Euler(0, yaw, 0);
            go.transform.localScale = size;
            go.AddComponent<MeshFilter>().sharedMesh = _wedge;
            go.AddComponent<MeshRenderer>().sharedMaterial = Mat(mat);
            var mc = go.AddComponent<MeshCollider>(); mc.sharedMesh = _wedge; mc.convex = true;
            return go;
        }

        /// <summary>
        /// Rail from a to b (top of pipe). Kit v002: SideLegs variant when legSide is given (legs on cantilever arms toward
        /// legSide, nothing under the pipe), EndLegs otherwise. Spline = Rail_P0..P2 markers. Pipe + legs are the only colliders.
        /// No extra trigger is needed: SkaterTraversal snaps by distance/angle to the spline (1.2 m / 35°), not by trigger.
        /// </summary>
        static GrindRail Rail(string name, Transform parent, Vector3 a, Vector3 b, Vector3? legSide)
        {
            var go = new GameObject(name);
            go.transform.SetParent(parent, false);
            CityBlockKitLibrary.SetTag(go, "Rail", children: false);
            var rail = go.AddComponent<GrindRail>();
            rail.railId = name.Substring(0, 2);
            var pts = new List<Vector3>();
            float len = Vector3.Distance(a, b);
            bool eight = len > 6f;
            string piece = eight ? (legSide.HasValue ? "CB_Rail_Crane_8m_SideLegs" : "CB_Rail_Crane_8m_EndLegs")
                                 : (legSide.HasValue ? "CB_Rail_Crane_4m_SideLegs" : "CB_Rail_Crane_4m");
            GameObject kit = _useKit ? CityBlockKitLibrary.Spawn(piece, parent) : null;
            if (kit != null)
            {
                kit.name = name + "_Kit";
                Vector3 dir = b - a; dir.y = 0f; dir.Normalize();
                // Piece runs along +Z; SideLegs legs are at −X of the pipe. Pick forward so local −X = legSide.
                Vector3 fwd = dir;
                if (legSide.HasValue)
                {
                    Vector3 f = Vector3.Cross(-legSide.Value, Vector3.up);
                    fwd = Vector3.Dot(f, dir) >= 0f ? dir : -dir;
                }
                kit.transform.rotation = Quaternion.LookRotation(fwd, Vector3.up);
                var m = CityBlockKitLibrary.IndexedMarkers(kit, "Rail_P");
                if (m.Count >= 2)
                {
                    // Anchor whichever end marker belongs at a.
                    Transform anchor = Vector3.Dot(m[m.Count - 1].position - m[0].position, b - a) >= 0f ? m[0] : m[m.Count - 1];
                    kit.transform.position += a - anchor.position;
                    foreach (var t in m) pts.Add(t.position);
                    if (anchor != m[0]) pts.Reverse();
                    float kitLen = Vector3.Distance(m[0].position, m[m.Count - 1].position);
                    if (Mathf.Abs(kitLen - len) > 0.1f) CityBlockKitLibrary.Note(name + ": kit rail length " + kitLen.ToString("0.00") + " m vs layout " + len.ToString("0.00") + " m.");
                    float floorY = CityBlockKitLibrary.RenderBounds(kit).min.y;
                    float topH = m[0].position.y - floorY;
                    if (Mathf.Abs(topH - Tier) > 0.05f) CityBlockKitLibrary.Note(piece + ": Rail_P height above floor " + topH.ToString("0.00") + " m (spec 2.6).");
                    if (legSide.HasValue)
                    {
                        Vector3 c = CityBlockKitLibrary.RenderBounds(kit).center - a; c.y = 0f;
                        if (Vector3.Dot(c, legSide.Value) <= 0f) CityBlockKitLibrary.Note(piece + ": legs did not end up on the requested side — check the −X leg convention.");
                    }
                }
                else CityBlockKitLibrary.Note(piece + ": Rail_P0..P2 markers missing; using layout points.");
                CityBlockKitLibrary.SetTag(kit, "Rail", children: false);
            }
            if (pts.Count < 2)
            {
                for (int i = 0; i < 3; i++) pts.Add(Vector3.Lerp(a, b, i / 2f));
                if (kit == null)
                {
                    Vector3 mid = (a + b) * 0.5f;
                    var vis = Box("RailVisual", go.transform, Vector3.zero, new Vector3(0.12f, 0.12f, len), "ChevronWhite");
                    vis.transform.position = mid - Vector3.up * 0.06f;
                    vis.transform.rotation = Quaternion.LookRotation(b - a);
                    Vector3 off = legSide.HasValue ? legSide.Value * 0.9f : Vector3.zero;
                    foreach (var lp in new[] { a, b })
                    {
                        Box("Leg", go.transform, new Vector3(lp.x, lp.y * 0.5f, lp.z) + off, new Vector3(0.3f, lp.y - 0.15f, 0.3f), "Hazard");
                        if (legSide.HasValue)
                            Box("Arm", go.transform, new Vector3(lp.x, lp.y - 0.2f, lp.z) + off * 0.5f, new Vector3(0.3f, 0.16f, 0.9f), "Hazard");
                    }
                }
            }
            for (int i = 0; i < pts.Count; i++)
            {
                var p = new GameObject("P" + i).transform;
                p.SetParent(go.transform, false);
                p.position = pts[i];
            }
            int grind = LayerMask.NameToLayer("Grind");
            if (grind >= 0) foreach (var t in go.GetComponentsInChildren<Transform>(true)) t.gameObject.layer = grind;
            rail.Bake();
            return rail;
        }

        /// <summary>2.6 m bank (4 × 8 m, 18°), rises along local +Z from bottomCenterStart. Kit CB_Ramp_Bank_2.6m or a wedge.</summary>
        static void Bank(string name, Transform parent, Vector3 bottomCenterStart, float yaw)
        {
            const string piece = "CB_Ramp_Bank_2.6m";
            var go = new GameObject(name);
            go.transform.SetParent(parent, false);
            go.transform.position = SnapFine(bottomCenterStart);
            go.transform.rotation = Quaternion.Euler(0, yaw, 0);
            CityBlockKitLibrary.SetTag(go, "Ramp", children: false);
            GameObject kit = _useKit ? CityBlockKitLibrary.Spawn(piece, go.transform) : null;
            if (kit != null)
            {
                CityBlockKitLibrary.Place(kit, go.transform, new Vector3(0, 0, 4f), Quaternion.identity, piece);
                var lip = CityBlockKitLibrary.Marker(kit, "Ramp_Lip");
                if (lip != null && go.transform.InverseTransformPoint(lip.position).z < 4f)
                {
                    CityBlockKitLibrary.Note(piece + ": high end is on −Z; rotated 180°.");
                    CityBlockKitLibrary.Place(kit, go.transform, new Vector3(0, 0, 4f), Quaternion.Euler(0, 180, 0), piece);
                }
            }
            else
            {
                var w = Wedge("Wedge", go.transform, Vector3.zero, new Vector3(4f, Tier, 8f), 0f, "RampYellow");
                w.transform.localPosition = Vector3.zero; w.transform.localRotation = Quaternion.identity;
            }
            int ground = LayerMask.NameToLayer("Ground");
            if (ground >= 0) foreach (var t in go.GetComponentsInChildren<Transform>(true)) t.gameObject.layer = ground;
            var mod = go.AddComponent<NavMeshModifier>();
            int area = NavMesh.GetAreaFromName(CityBlockNavAreas.Ramp);
            if (area >= 0) { mod.overrideArea = true; mod.area = area; }
        }

        static void Crate(Transform parent, Vector3 bottomCenter) =>
            BreakableProp(parent, "Crate_Breakable", SnapV(bottomCenter), Breakable.Kind.Crate,
                "CB_Crate_Breakable_Intact", "CB_Crate_Breakable_Cracked", "CB_Crate_Breakable_Debris");

        static void Barrel(Transform parent, Vector3 bottomCenter) =>
            BreakableProp(parent, "Barrel_Breakable", SnapV(bottomCenter), Breakable.Kind.Barrel,
                "CB_Barrel_Breakable_Intact", "CB_Barrel_Breakable_Cracked", "CB_Barrel_Breakable_Debris");

        /// <summary>Root carries the Breakable + one simple collider; kit state meshes are visual swaps (no colliders).</summary>
        static void BreakableProp(Transform parent, string name, Vector3 bottom, Breakable.Kind kind, string intactPiece, string crackedPiece, string debrisPiece)
        {
            bool barrel = kind == Breakable.Kind.Barrel;
            var root = new GameObject(name);
            root.transform.SetParent(parent, false);
            root.transform.position = bottom;
            CityBlockKitLibrary.SetTag(root, "Breakable", children: false);
            int brkLayer = LayerMask.NameToLayer("Breakable"), debLayer = LayerMask.NameToLayer("Debris");
            if (brkLayer >= 0) root.layer = brkLayer;

            GameObject intact = null, cracked = null, debris = null;
            if (_useKit)
            {
                intact = KitState(root, intactPiece, bottom);
                cracked = crackedPiece != null ? KitState(root, crackedPiece, bottom) : null;
                debris = KitState(root, debrisPiece, bottom);
            }
            if (intact == null)
            {
                // Primitive fallback.
                GameObject vis;
                if (barrel)
                {
                    vis = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
                    vis.transform.SetParent(root.transform, false);
                    vis.transform.localPosition = Vector3.up * 0.45f;
                    vis.transform.localScale = new Vector3(0.6f, 0.45f, 0.6f);
                    vis.GetComponent<Renderer>().sharedMaterial = Mat("Barrel");
                }
                else vis = Box("Intact", root.transform, bottom + Vector3.up * 0.5f, Vector3.one, "Crate");
                vis.name = "Intact";
                Object.DestroyImmediate(vis.GetComponent<Collider>());
                if (debris == null) debris = Debris(root.transform, barrel ? "Barrel" : "Crate");
                intact = null; // tint path: Breakable finds the renderer
            }
            if (debris != null && debLayer >= 0) CityBlockKitLibrary.SetLayer(debris, debLayer);
            if (debris != null) debris.SetActive(false);
            if (cracked != null) cracked.SetActive(false);

            if (barrel) { var c = root.AddComponent<CapsuleCollider>(); c.radius = 0.3f; c.height = 0.9f; c.center = Vector3.up * 0.45f; }
            else { var c = root.AddComponent<BoxCollider>(); c.size = Vector3.one; c.center = Vector3.up * 0.5f; }

            var b = root.AddComponent<Breakable>();
            b.kind = kind;
            SetPrivate(b, "intactRoot", intact);
            SetPrivate(b, "crackedRoot", cracked);
            SetPrivate(b, "debrisRoot", debris);
        }

        static GameObject KitState(GameObject root, string piece, Vector3 bottom)
        {
            var go = CityBlockKitLibrary.Spawn(piece, root.transform);
            if (go == null) return null;
            CityBlockKitLibrary.StripColliders(go); // the root owns collision
            CityBlockKitLibrary.Place(go, null, bottom, Quaternion.identity, piece);
            return go;
        }

        static GameObject Debris(Transform parent, string mat)
        {
            var d = new GameObject("Debris");
            d.transform.SetParent(parent, false);
            for (int i = 0; i < 4; i++)
            {
                var p = Box("Chunk" + i, d.transform, Vector3.zero, Vector3.one * 0.3f, mat);
                p.transform.localPosition = new Vector3((i % 2 - 0.5f) * 0.6f, 0.15f, (i / 2 - 0.5f) * 0.6f);
                p.transform.localRotation = Quaternion.Euler(0, i * 37f, 0);
                Object.DestroyImmediate(p.GetComponent<Collider>());
            }
            d.SetActive(false);
            return d;
        }

        static void Barrier(Transform parent, Vector3 bottomCenter, float yaw)
        {
            var root = new GameObject("JerseyBarrier");
            root.transform.SetParent(parent, false);
            root.transform.position = SnapV(bottomCenter);
            CityBlockKitLibrary.SetTag(root, "Barrier", children: false);
            Vector3 size = new Vector3(2f, 0.8f, 0.6f);
            GameObject kit = _useKit ? CityBlockKitLibrary.Spawn("CB_JerseyBarrier_2m", root.transform) : null;
            if (kit != null)
            {
                CityBlockKitLibrary.Place(kit, root.transform, Vector3.zero, Quaternion.identity, "CB_JerseyBarrier_2m"); // 2 m along X
                if (kit.GetComponentsInChildren<Collider>().Length == 0)
                {
                    var bc = root.AddComponent<BoxCollider>(); bc.size = size; bc.center = Vector3.up * 0.4f;
                }
            }
            else
            {
                var vis = Box("Visual", root.transform, root.transform.position + Vector3.up * 0.4f, size, "Concrete");
                vis.transform.SetParent(root.transform, true);
            }
            root.transform.rotation = Quaternion.Euler(0, yaw, 0);
            int obstacle = LayerMask.NameToLayer("Obstacle");
            if (obstacle >= 0) CityBlockKitLibrary.SetLayer(root, obstacle);
            root.AddComponent<JerseyBarrier>();
            var obs = root.AddComponent<NavMeshObstacle>();
            obs.shape = NavMeshObstacleShape.Box;
            obs.center = Vector3.up * 0.4f;
            obs.size = size;
            obs.carving = true;
        }

        static void Oil(Transform parent, string id, Vector3 center, Vector3 size)
        {
            var decal = Box(id + "_Slick", parent, SnapV(center) + Vector3.up * 0.01f, new Vector3(size.x, 0.02f, size.z), "ToxicOil");
            Object.DestroyImmediate(decal.GetComponent<Collider>());
            var trig = TriggerBox(id + "_Trigger", parent, SnapV(center), new Vector3(size.x, 1.2f, size.z));
            trig.AddComponent<ToxicOil>().slickId = id;
        }

        static void Marker(Transform parent, string name, Vector3 center, float diameter, string mat)
        {
            var go = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
            go.name = name;
            go.transform.SetParent(parent, false);
            go.transform.position = SnapV(center) + Vector3.up * 0.015f;
            go.transform.localScale = new Vector3(diameter, 0.01f, diameter);
            go.GetComponent<Renderer>().sharedMaterial = Mat(mat);
            Object.DestroyImmediate(go.GetComponent<Collider>());
        }

        // ------------------------------------------------------------------ primitives
        static Transform Group(string name, Transform parent)
        {
            var t = new GameObject(name).transform;
            if (parent != null) t.SetParent(parent, false);
            return t;
        }

        /// <summary>Cube by world center + size.</summary>
        static GameObject Box(string name, Transform parent, Vector3 center, Vector3 size, string mat)
        {
            var go = GameObject.CreatePrimitive(PrimitiveType.Cube);
            go.name = name;
            go.transform.SetParent(parent, false);
            go.transform.position = center;
            go.transform.localScale = size;
            go.GetComponent<Renderer>().sharedMaterial = Mat(mat);
            return go;
        }

        /// <summary>Trigger box by bottom-center + size, on the Ignore Raycast layer (excluded from nav bake).</summary>
        static GameObject TriggerBox(string name, Transform parent, Vector3 bottomCenter, Vector3 size)
        {
            var go = new GameObject(name);
            go.transform.SetParent(parent, false);
            go.transform.position = bottomCenter + Vector3.up * size.y * 0.5f;
            if (_triggerLayer >= 0) go.layer = _triggerLayer;
            var bc = go.AddComponent<BoxCollider>();
            bc.size = size; bc.isTrigger = true;
            return go;
        }

        /// <summary>Cross-section pieces (containers, kickers, banks) sit on exact layout coordinates (cm tidy only):
        /// the 2.4 m container depth + 0.1 m faces can't all land on the 0.5 m sub-snap. Props use SnapV (0.5 m).</summary>
        static Vector3 SnapFine(Vector3 v) =>
            new Vector3(Mathf.Round(v.x * 100f) / 100f, Mathf.Round(v.y * 100f) / 100f, Mathf.Round(v.z * 100f) / 100f);

        static Vector3 SnapV(Vector3 v) =>
            new Vector3(Mathf.Round(v.x / Snap) * Snap, Mathf.Round(v.y / 0.1f) * 0.1f, Mathf.Round(v.z / Snap) * Snap);

        internal static void SetPrivate(Object target, string field, Object value)
        {
            var so = new SerializedObject(target);
            var p = so.FindProperty(field);
            if (p != null) { p.objectReferenceValue = value; so.ApplyModifiedPropertiesWithoutUndo(); }
        }

        // ------------------------------------------------------------------ assets
        static Material Mat(string key) => Mat(key, DefaultColor(key));

        internal static Material Mat(string key, Color color)
        {
            if (Mats.TryGetValue(key, out var m) && m != null) return m;
            string path = AssetDir + "/Materials/GB_" + key + ".mat";
            m = AssetDatabase.LoadAssetAtPath<Material>(path);
            if (m == null)
            {
                // URP Lit only when a URP asset is actually active; otherwise Built-in Standard (avoids all-pink greybox).
                Shader sh = UnityEngine.Rendering.GraphicsSettings.currentRenderPipeline != null ? Shader.Find("Universal Render Pipeline/Lit") : null;
                if (sh == null) sh = Shader.Find("Standard");
                m = new Material(sh);
                AssetDatabase.CreateAsset(m, path);
            }
            if (m.HasProperty("_BaseColor")) m.SetColor("_BaseColor", color);
            if (m.HasProperty("_Color")) m.SetColor("_Color", color);
            if (key == "ToxicOil" || key == "ChevronWhite")
            {
                m.EnableKeyword("_EMISSION");
                if (m.HasProperty("_EmissionColor")) m.SetColor("_EmissionColor", color * (key == "ToxicOil" ? 1.5f : 0.5f));
            }
            EditorUtility.SetDirty(m);
            Mats[key] = m;
            return m;
        }

        static Color DefaultColor(string key)
        {
            switch (key)
            {
                case "Asphalt": return new Color(0.16f, 0.16f, 0.18f);
                case "Concrete": return new Color(0.6f, 0.6f, 0.58f);
                case "ContainerRed": return new Color(0.55f, 0.18f, 0.14f);
                case "ContainerBlue": return new Color(0.15f, 0.25f, 0.45f);
                case "ContainerGrey": return new Color(0.4f, 0.42f, 0.44f);
                case "RampYellow": return new Color(0.95f, 0.75f, 0.1f); // hazard yellow lip paint, not Payton's glow
                case "ChevronWhite": return Color.white;
                case "Hazard": return new Color(1f, 0.45f, 0.05f);
                case "ToxicOil": return new Color(0.4f, 1f, 0.12f);     // #66FF1F
                case "Water": return new Color(0.05f, 0.15f, 0.25f);
                case "Crate": return new Color(0.55f, 0.4f, 0.22f);
                case "Barrel": return new Color(0.3f, 0.32f, 0.12f);
                default: return Color.grey;
            }
        }

        static Mesh GetOrCreateWedgeMesh()
        {
            string path = AssetDir + "/GB_Wedge.asset";
            var mesh = AssetDatabase.LoadAssetAtPath<Mesh>(path);
            if (mesh != null) return mesh;
            // Unit wedge: x ∈ [-0.5, 0.5], z ∈ [0, 1], top slope from y=0 at z=0 to y=1 at z=1. Flat-shaded.
            Vector3 a = new Vector3(-0.5f, 0, 0), b = new Vector3(0.5f, 0, 0), c = new Vector3(-0.5f, 0, 1), d = new Vector3(0.5f, 0, 1);
            Vector3 e = new Vector3(-0.5f, 1, 1), f = new Vector3(0.5f, 1, 1);
            var v = new List<Vector3>(); var t = new List<int>();
            void Quad(Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3) { int i = v.Count; v.Add(p0); v.Add(p1); v.Add(p2); v.Add(p3); t.AddRange(new[] { i, i + 1, i + 2, i, i + 2, i + 3 }); }
            void Tri(Vector3 p0, Vector3 p1, Vector3 p2) { int i = v.Count; v.Add(p0); v.Add(p1); v.Add(p2); t.AddRange(new[] { i, i + 1, i + 2 }); }
            Quad(a, e, f, b);   // slope (faces up / -Z)
            Quad(c, d, f, e);   // back wall (+Z)
            Quad(a, b, d, c);   // bottom
            Tri(a, c, e);       // left side
            Tri(b, f, d);       // right side
            mesh = new Mesh { name = "GB_Wedge" };
            mesh.SetVertices(v);
            mesh.SetTriangles(t, 0);
            mesh.RecalculateNormals();
            mesh.RecalculateBounds();
            AssetDatabase.CreateAsset(mesh, path);
            return mesh;
        }

        static void EnsureFolder(string path)
        {
            if (AssetDatabase.IsValidFolder(path)) return;
            string parent = Path.GetDirectoryName(path).Replace('\\', '/');
            EnsureFolder(parent);
            AssetDatabase.CreateFolder(parent, Path.GetFileName(path));
        }

        static void EnsureTag(string tag)
        {
            var assets = AssetDatabase.LoadAllAssetsAtPath("ProjectSettings/TagManager.asset");
            if (assets == null || assets.Length == 0) return;
            var so = new SerializedObject(assets[0]);
            var tags = so.FindProperty("tags");
            for (int i = 0; i < tags.arraySize; i++)
                if (tags.GetArrayElementAtIndex(i).stringValue == tag) return;
            tags.InsertArrayElementAtIndex(tags.arraySize);
            tags.GetArrayElementAtIndex(tags.arraySize - 1).stringValue = tag;
            so.ApplyModifiedPropertiesWithoutUndo();
        }

        static void EnsureLayer(string layer)
        {
            if (LayerMask.NameToLayer(layer) >= 0) return;
            var assets = AssetDatabase.LoadAllAssetsAtPath("ProjectSettings/TagManager.asset");
            if (assets == null || assets.Length == 0) return;
            var so = new SerializedObject(assets[0]);
            var layers = so.FindProperty("layers");
            for (int i = 8; i < layers.arraySize; i++)
            {
                var el = layers.GetArrayElementAtIndex(i);
                if (string.IsNullOrEmpty(el.stringValue)) { el.stringValue = layer; so.ApplyModifiedPropertiesWithoutUndo(); return; }
            }
            Debug.LogWarning("[CityBlockGreybox] No free layer slot for '" + layer + "'.");
        }

        static TraversalChaosConfig GetOrCreateChaosConfig()
        {
            string path = AssetDir + "/TraversalChaosConfig.asset";
            var c = AssetDatabase.LoadAssetAtPath<TraversalChaosConfig>(path);
            if (c != null) return c;
            c = ScriptableObject.CreateInstance<TraversalChaosConfig>();
            AssetDatabase.CreateAsset(c, path);
            return c;
        }

        /// <summary>§5.1: agent radius 0.45 m and the custom areas (names + costs) in NavMeshProjectSettings.</summary>
        static void EnsureNavSettings()
        {
            // Same project-settings singleton the AI Navigation package's Navigation window edits.
            Object settings = Unsupported.GetSerializedAssetInterfaceSingleton("NavMeshProjectSettings");
            if (settings == null)
            {
                var objs = AssetDatabase.LoadAllAssetsAtPath("ProjectSettings/NavMeshAreas.asset");
                if (objs != null && objs.Length > 0) settings = objs[0];
            }
            if (settings == null) { Debug.LogWarning("[CityBlockGreybox] NavMesh settings object not found; set areas manually (README)."); return; }
            var so = new SerializedObject(settings);
            var radius = so.FindProperty("m_Settings.Array.data[0].agentRadius");
            if (radius != null) radius.floatValue = 0.45f;
            var areas = so.FindProperty("areas");
            if (areas != null)
            {
                var want = new (string name, float cost)[]
                {
                    (CityBlockNavAreas.Oil, CityBlockNavAreas.OilCost), (CityBlockNavAreas.CraneZone, 1f), (CityBlockNavAreas.Ramp, 1f),
                    (CityBlockNavAreas.RampLink, 1f), (CityBlockNavAreas.GapLink, 2f), (CityBlockNavAreas.RailLink, 1f)
                };
                foreach (var w in want)
                {
                    int free = -1; bool found = false;
                    for (int i = 3; i < areas.arraySize; i++) // 0..2 are built-in
                    {
                        var el = areas.GetArrayElementAtIndex(i);
                        var n = el.FindPropertyRelative("name");
                        if (n == null) continue;
                        if (n.stringValue == w.name) { found = true; break; }
                        if (free < 0 && string.IsNullOrEmpty(n.stringValue)) free = i;
                    }
                    if (!found && free >= 0)
                    {
                        var el = areas.GetArrayElementAtIndex(free);
                        el.FindPropertyRelative("name").stringValue = w.name;
                        var c = el.FindPropertyRelative("cost");
                        if (c != null) c.floatValue = w.cost;
                    }
                }
            }
            else Debug.LogWarning("[CityBlockGreybox] Could not find nav 'areas' property; add areas manually (README).");
            so.ApplyModifiedPropertiesWithoutUndo();
        }
    }
}
#endif
