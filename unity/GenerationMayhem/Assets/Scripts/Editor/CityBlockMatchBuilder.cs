// Copyright Dark Logic Studios. Generation Mayhem.
// Called by "Build CityBlock Greybox" after the NavMesh bake: places the match.
//   Vixen (player) · Kailee / Brianna / Payton (AI) · Slither · Ref Bot · cranes X1/X2 · Viper spawns ·
//   MatchDirector + SlingshotFinisher · MatchHUD.  Payton sits this match out.
// Hero / boss FBX from Assets/Art/HeroPacks with a generated Generic Animator; colored capsules otherwise
// (or always, with "Generation Mayhem/Characters/Use Capsules Only").
#if UNITY_EDITOR
using System.Collections.Generic;
using System.Linq;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.AI;
using GenerationMayhem.Combat;
using GenerationMayhem.Match;
using GenerationMayhem.Player;
using GenerationMayhem.Art;
using GenerationMayhem.Traversal;

namespace GenerationMayhem.EditorTools
{
    public static class CityBlockMatchBuilder
    {
        const string CapsulesPref = "GM_CapsulesOnly";
        const string FlipPref = "GM_FlipModels180";
        const string HudDir = "Assets/Art/HeroPacks/HUD/HUD_v001/Sprites/";

        public static readonly Color KaileeBlue = new Color(0.15f, 0.45f, 1f);
        public static readonly Color VixenRed = new Color(0.9f, 0.12f, 0.12f);
        public static readonly Color BriannaEmerald = new Color(0.02f, 0.45f, 0.25f);
        public static readonly Color PaytonYellow = new Color(1f, 0.85f, 0.1f);
        public static readonly Color SlitherGreen = new Color(0.4f, 1f, 0.12f);

        static bool CapsulesOnly => EditorPrefs.GetBool(CapsulesPref, false);
        static bool Flip => EditorPrefs.GetBool(FlipPref, false);
        static readonly List<string> Report = new List<string>();

        [MenuItem("Generation Mayhem/Characters/Use Capsules Only (toggle)")]
        static void ToggleCapsules()
        {
            EditorPrefs.SetBool(CapsulesPref, !CapsulesOnly);
            Debug.Log("[GM] Capsules only = " + CapsulesOnly + ". Re-run Generation Mayhem > Build CityBlock Greybox.");
        }
        [MenuItem("Generation Mayhem/Characters/Use Capsules Only (toggle)", true)]
        static bool ToggleCapsulesCheck() { Menu.SetChecked("Generation Mayhem/Characters/Use Capsules Only (toggle)", CapsulesOnly); return true; }

        [MenuItem("Generation Mayhem/Characters/Flip Hero Models 180 (toggle)")]
        static void ToggleFlip()
        {
            EditorPrefs.SetBool(FlipPref, !Flip);
            Debug.Log("[GM] Flip models 180 = " + Flip + ". Re-run Generation Mayhem > Build CityBlock Greybox.");
        }
        [MenuItem("Generation Mayhem/Characters/Flip Hero Models 180 (toggle)", true)]
        static bool ToggleFlipCheck() { Menu.SetChecked("Generation Mayhem/Characters/Flip Hero Models 180 (toggle)", Flip); return true; }

        public static void Build(Transform root, Transform systems, bool dockBrutesOnly = false)
        {
            Report.Clear();
            var fighters = new GameObject("Match_Fighters").transform;
            fighters.SetParent(root, false);

            var sysGo = GameObject.Find("MatchSystems");
            var stub = sysGo != null ? sysGo.GetComponent<ShatterSlingshotStub>() : Object.FindFirstObjectByType<ShatterSlingshotStub>();
            var victory = sysGo != null ? sysGo.GetComponent<VictoryController>() : Object.FindFirstObjectByType<VictoryController>();

            RuntimeAnimatorController acShared = CapsulesOnly ? null : GMAnimatorFactory.Shared();

            // ---------------- Vixen (player) ----------------
            var player = GameObject.Find("SkatePawn");
            if (player == null) { Debug.LogError("[GM Match] SkatePawn missing; match not built."); return; }
            player.transform.position = new Vector3(20, 0.05f, 7);
            var vixHp = SetupFamilyHealth(player, "Vixen", false);
            player.AddComponent<KnockbackBody>();
            var vixFa = player.AddComponent<FighterAnimator>();
            player.AddComponent<VixenCombat>();
            var meshRoot = player.transform.Find("MeshRoot");
            var vixAnim = AttachModel(player.transform, meshRoot, "Vixen", "Assets/Art/HeroPacks/Vixen/Vixen/FBX/VIXEN_Hero.fbx",
                                      CapsulesOnly ? null : GMAnimatorFactory.Hero("Vixen") ?? acShared, VixenRed, new Vector3(0, -0.9f, 0), true);
            vixFa.animator = vixAnim;
            WarRigTireStandIn.Apply(player.transform, WarRigWho.Vixen); // Misty MODEST v002 lockstep w/ Three.js
            TeamRing(player.transform, VixenRed, "Vixen");
            if (stub != null) CityBlockGreyboxBuilder.SetPrivate(stub, "planter", player.transform);

            // ---------------- allies ----------------
            var kailee = Ally(fighters, "Kailee", AllyRole.Kailee, new Vector3(22, 0, 5.5f), KaileeBlue, player.transform, new Vector3(2.2f, 0, -1.6f), true, acShared);
            var brianna = Ally(fighters, "Brianna", AllyRole.Brianna, new Vector3(17, 0, 5), BriannaEmerald, player.transform, new Vector3(-2.6f, 0, -2.4f), false, acShared);
            var payton = Ally(fighters, "Payton", AllyRole.Payton, new Vector3(23, 0, 4), PaytonYellow, player.transform, new Vector3(3.2f, 0, -3.4f), false, acShared);

            // ---------------- Slither ----------------
            var boss = dockBrutesOnly ? null : Boss(fighters);

            // ---------------- Ref Bot (decor + subtitles speaker) ----------------
            if (!dockBrutesOnly) RefBot(fighters);

            // ---------------- cranes ----------------
            var x1 = Crane(fighters, "X1", new Vector3(24, 0, 20), "CraneDrop_X1");
            var x2 = Crane(fighters, "X2", new Vector3(12, 0, 9), "CraneDrop_X2");

            // ---------------- spawns ----------------
            var spawnRoot = new GameObject(dockBrutesOnly ? "IronRoseBrute_Spawns" : "Viper_Spawns").transform; spawnRoot.SetParent(fighters, false);
            var spawns = new List<Transform>();
            foreach (var p in new[] { new Vector3(-4, 0, 11.85f), new Vector3(-9, 0, 4.75f), new Vector3(38, 0, 25), new Vector3(38, 0, 8) })
            {
                var t = new GameObject((dockBrutesOnly ? "IronRoseBruteSpawn_" : "ViperSpawn_") + spawns.Count).transform; t.SetParent(spawnRoot, false); t.position = p; spawns.Add(t);
            }

            // ---------------- director / finisher ----------------
            var matchGo = new GameObject("Match");
            matchGo.transform.SetParent(systems, false);
            var director = matchGo.AddComponent<MatchDirector>();
            var finisher = matchGo.AddComponent<SlingshotFinisher>();
            director.vixen = vixHp;
            director.kailee = kailee; director.brianna = brianna; director.payton = payton;
            director.boss = boss; director.stub = stub; director.victory = victory; director.finisher = finisher;
            director.craneX1 = x1; director.craneX2 = x2;
            director.dockBrutesOnly = dockBrutesOnly; director.fodderSpawns = spawns.ToArray();
            if (!CapsulesOnly && !dockBrutesOnly)
            {
                var models = new[]
                {
                    LoadModel("Assets/Art/Characters/Vipers/VIPER_01/FBX/VIPER_01_LOD0.fbx"), // Fang
                    LoadModel("Assets/Art/Characters/Vipers/VIPER_02/FBX/VIPER_02_LOD0.fbx"), // Cobra
                    LoadModel("Assets/Art/Characters/Vipers/VIPER_03/FBX/VIPER_03_LOD0.fbx"), // Tail-Strike
                    LoadModel("Assets/Art/Characters/Vipers/VIPER_01/FBX/VIPER_01_LOD0.fbx"), // Swarm
                };
                director.viperModels = models.Any(m => m != null) ? models : new GameObject[0];
                director.viperAnimator = acShared;
                Report.Add("Vipers: " + (models.Any(m => m != null) ? "VIPER_01/02/03 LOD0 + shared ChaosFightSkate clips" : "pink capsules (Viper FBX not found)"));
            }
            finisher.stub = stub; finisher.vixen = player.transform; finisher.kailee = kailee;

            // ---------------- HUD ----------------
            var hudGo = new GameObject("MatchHUD");
            hudGo.transform.SetParent(systems, false);
            var hud = hudGo.AddComponent<MatchHUD>();
            hud.director = director; hud.vixen = player.GetComponent<VixenCombat>(); hud.stub = stub; hud.finisher = finisher;
            hud.healthFrame = Sprite("HUD_HealthArmor_Frame_EmptyTrack");
            hud.healthFill = Sprite("HUD_Health_Fill");
            hud.abilityFrameLit = Sprite("HUD_Ability1_Frame_Lit");
            hud.abilityFrameEmpty = Sprite("HUD_Ability1_Frame_Empty");
            hud.abilityIcon = Sprite("HUD_Ability1_Icon_Sunburst_Orange");
            hud.bannerArt = Sprite("HUD_Banner_Title_NoLabel");
            Report.Add("HUD art: " + (hud.healthFrame != null ? "HUD_v001 sprites" : "plain bars (HUD_v001 sprites not imported as Sprite)"));

            Debug.Log("[GM Match] Match placed.\n - " + string.Join("\n - ", Report));
        }

        // =================================================================== pieces
        static Health SetupFamilyHealth(GameObject go, string name, bool isKailee)
        {
            var id = go.GetComponent<FighterIdentity>();
            if (id == null) id = go.AddComponent<FighterIdentity>();
            id.isKailee = isKailee;
            var hp = go.AddComponent<Health>();
            hp.team = Team.Family;
            hp.displayName = name;
            hp.maxHP = 300f;
            hp.downInsteadOfDie = true;
            hp.downedRecoverSeconds = 8f;
            hp.recoverFraction = 0.25f;
            return hp;
        }

        static Health Ally(Transform parent, string name, AllyRole role, Vector3 pos, Color color, Transform leader, Vector3 offset, bool isKailee, RuntimeAnimatorController fallbackAc)
        {
            var go = new GameObject(name);
            go.transform.SetParent(parent, false);
            go.transform.position = pos;
            go.AddComponent<FighterIdentity>().role = FighterRole.Ally;
            var col = go.AddComponent<CapsuleCollider>(); col.height = 1.8f; col.radius = 0.4f; col.center = Vector3.up * 0.9f;
            var rb = go.AddComponent<Rigidbody>(); rb.isKinematic = true; rb.useGravity = false;
            go.AddComponent<ShoveState>();
            var agent = go.AddComponent<NavMeshAgent>();
            agent.radius = 0.4f; agent.height = 1.8f; agent.speed = 10f; agent.acceleration = 40f; agent.angularSpeed = 720f; agent.stoppingDistance = 0.3f;
            go.AddComponent<KnockbackBody>();
            var hp = SetupFamilyHealth(go, name, isKailee);
            var fa = go.AddComponent<FighterAnimator>();
            var ai = go.AddComponent<AllyAI>();
            ai.role = role; ai.leader = leader; ai.followOffset = offset;
            var mesh = new GameObject("MeshRoot").transform; mesh.SetParent(go.transform, false);
            fa.animator = AttachModel(go.transform, mesh, name, "Assets/Art/HeroPacks/" + name + "/" + name + "/FBX/" + name.ToUpperInvariant() + "_Hero.fbx",
                                      CapsulesOnly ? null : GMAnimatorFactory.Hero(name) ?? fallbackAc, color, Vector3.zero, false);
            var who = name == "Kailee" ? WarRigWho.Kailee : name == "Brianna" ? WarRigWho.Brianna : WarRigWho.Payton;
            WarRigTireStandIn.Apply(go.transform, who); // Misty MODEST v002 lockstep w/ Three.js
            TeamRing(go.transform, color, name);
            return hp;
        }

        static SlitherBoss Boss(Transform parent)
        {
            var go = new GameObject("Slither");
            go.transform.SetParent(parent, false);
            go.transform.position = new Vector3(20, 0, 22);
            go.transform.rotation = Quaternion.LookRotation(Vector3.back);
            go.AddComponent<FighterIdentity>().role = FighterRole.Boss;
            var col = go.AddComponent<CapsuleCollider>(); col.height = 2.3f; col.radius = 0.6f; col.center = Vector3.up * 1.15f;
            var rb = go.AddComponent<Rigidbody>(); rb.isKinematic = true; rb.useGravity = false;
            go.AddComponent<ShoveState>();
            var agent = go.AddComponent<NavMeshAgent>();
            agent.radius = 0.6f; agent.height = 2.3f; agent.speed = 7.5f; agent.acceleration = 30f; agent.angularSpeed = 360f; agent.stoppingDistance = 0.5f;
            var kb = go.AddComponent<KnockbackBody>(); kb.knockbackScale = 0.7f;
            var hp = go.AddComponent<Health>();
            hp.team = Team.Vipers; hp.displayName = "Slither"; hp.maxHP = 3000f; hp.minHPFraction = 0.01f; hp.deactivateAfterDeath = 0f;
            var fa = go.AddComponent<FighterAnimator>();
            fa.idleState = "Slither_Idle_Skate"; fa.moveState = "Slither_Skate_Fwd";
            fa.hitLight = "Slither_HitReact_Light_Front"; fa.hitHeavy = "Slither_HitReact_Heavy_Front";
            fa.downState = "Slither_Stagger_Loop"; fa.recoverState = "Slither_Stagger_Exit";
            go.AddComponent<BossKOSequence>();
            var boss = go.AddComponent<SlitherBoss>();
            var mesh = new GameObject("MeshRoot").transform; mesh.SetParent(go.transform, false);
            fa.animator = AttachModel(go.transform, mesh, "Slither", "Assets/Art/HeroPacks/Slither/Slither/FBX/SLITHER_Boss.fbx",
                                      CapsulesOnly ? null : GMAnimatorFactory.Slither(), SlitherGreen * 0.6f + new Color(0, 0, 0, 1), Vector3.zero, false, 2.3f);
            boss.visualRoot = mesh;
            // Four toxic-green eyes (spec): the telegraph flare uses these.
            var eyes = new List<Renderer>();
            var eyeMat = CityBlockGreyboxBuilder.Mat("SlitherEye", SlitherGreen);
            eyeMat.EnableKeyword("_EMISSION"); if (eyeMat.HasProperty("_EmissionColor")) eyeMat.SetColor("_EmissionColor", SlitherGreen * 2f);
            for (int i = 0; i < 4; i++)
            {
                var e = GameObject.CreatePrimitive(PrimitiveType.Sphere);
                Object.DestroyImmediate(e.GetComponent<Collider>());
                e.name = "Eye_" + (i + 1);
                e.transform.SetParent(mesh, false);
                e.transform.localPosition = new Vector3((i % 2 == 0 ? -1 : 1) * (i < 2 ? 0.07f : 0.13f), i < 2 ? 1.98f : 1.93f, 0.2f);
                e.transform.localScale = Vector3.one * 0.06f;
                e.GetComponent<Renderer>().sharedMaterial = eyeMat;
                eyes.Add(e.GetComponent<Renderer>());
            }
            boss.eyes = eyes.ToArray();
            var top = new GameObject("Slither_GantryTop").transform; top.SetParent(parent, false); top.position = new Vector3(12, 2.6f, 24);
            var drop = new GameObject("Slither_GantryDrop").transform; drop.SetParent(parent, false); drop.position = new Vector3(12, 0, 20);
            boss.gantryTop = top; boss.gantryDrop = drop;
            TeamRing(go.transform, SlitherGreen, "Slither", 1.8f);
            return boss;
        }

        static void RefBot(Transform parent)
        {
            var go = new GameObject("RefBot");
            go.transform.SetParent(parent, false);
            go.transform.position = new Vector3(36, 0, 3);
            go.transform.rotation = Quaternion.LookRotation((new Vector3(20, 0, 15) - go.transform.position).normalized);
            var mesh = new GameObject("MeshRoot").transform; mesh.SetParent(go.transform, false);
            AttachModel(go.transform, mesh, "RefBot", "Assets/Art/HeroPacks/RefBot/Characters/RefBot/FBX/REFBOT_Ref.fbx",
                        CapsulesOnly ? null : GMAnimatorFactory.RefBot(), new Color(0.85f, 0.65f, 0.1f), Vector3.zero, false);
        }

        static CraneHazard Crane(Transform parent, string id, Vector3 at, string markerName)
        {
            var go = new GameObject("CraneHazard_" + id);
            go.transform.SetParent(parent, false);
            go.transform.position = at;
            var c = go.AddComponent<CraneHazard>();
            c.zoneName = id;
            var m = GameObject.Find(markerName);
            if (m != null) c.marker = m.GetComponent<Renderer>();
            return c;
        }

        /// <summary>Model under meshRoot (or a capsule). Returns the Animator, or null.</summary>
        static Animator AttachModel(Transform owner, Transform meshRoot, string label, string fbxPath, RuntimeAnimatorController ac, Color color,
                                    Vector3 localOffset, bool meshRootIsCapsule, float capsuleHeight = 1.8f)
        {
            var model = CapsulesOnly ? null : LoadModel(fbxPath);
            if (model != null)
            {
                var inst = (GameObject)PrefabUtility.InstantiatePrefab(model, meshRoot);
                inst.name = label + "_Model";
                inst.transform.localPosition = localOffset;
                inst.transform.localRotation = Flip ? Quaternion.Euler(0, 180, 0) : Quaternion.identity;
                foreach (var c in inst.GetComponentsInChildren<Collider>(true)) Object.DestroyImmediate(c);
                if (meshRootIsCapsule)
                {
                    var r = meshRoot.GetComponent<MeshRenderer>(); if (r != null) r.enabled = false;
                }
                var anim = inst.GetComponent<Animator>();
                if (anim == null) anim = inst.AddComponent<Animator>();
                anim.runtimeAnimatorController = ac;
                anim.applyRootMotion = false;
                anim.cullingMode = AnimatorCullingMode.AlwaysAnimate;
                Report.Add(label + ": " + System.IO.Path.GetFileName(fbxPath) + (ac != null ? " + " + ac.name : " (no clips found: static pose)"));
                return ac != null ? anim : null;
            }
            // Capsule fallback
            if (!meshRootIsCapsule)
            {
                var cap = GameObject.CreatePrimitive(PrimitiveType.Capsule);
                Object.DestroyImmediate(cap.GetComponent<Collider>());
                cap.name = label + "_Capsule";
                cap.transform.SetParent(meshRoot, false);
                cap.transform.localPosition = Vector3.up * capsuleHeight * 0.5f;
                cap.transform.localScale = new Vector3(capsuleHeight / 1.8f * 0.9f, capsuleHeight * 0.5f, capsuleHeight / 1.8f * 0.9f);
                cap.GetComponent<Renderer>().sharedMaterial = CityBlockGreyboxBuilder.Mat("Fighter_" + label, color);
                var nose = GameObject.CreatePrimitive(PrimitiveType.Cube);   // shows which way it faces
                Object.DestroyImmediate(nose.GetComponent<Collider>());
                nose.transform.SetParent(cap.transform, false);
                nose.transform.localPosition = new Vector3(0, 0.45f, 0.45f); nose.transform.localScale = new Vector3(0.5f, 0.12f, 0.2f);
                nose.GetComponent<Renderer>().sharedMaterial = CityBlockGreyboxBuilder.Mat("Fighter_Visor", Color.white);
            }
            else
            {
                var r = meshRoot.GetComponent<Renderer>(); if (r != null) r.sharedMaterial = CityBlockGreyboxBuilder.Mat("Fighter_" + label, color);
            }
            Report.Add(label + ": capsule" + (CapsulesOnly ? " (Capsules Only is on)" : " (model not found: " + fbxPath + ")"));
            return null;
        }

        /// <summary>Flat ring at the feet in the fighter's color, so the family reads at a glance.</summary>
        static void TeamRing(Transform owner, Color c, string label, float diameter = 1.3f)
        {
            var ring = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
            Object.DestroyImmediate(ring.GetComponent<Collider>());
            ring.name = "TeamRing";
            ring.transform.SetParent(owner, false);
            ring.transform.localPosition = Vector3.up * 0.03f;
            ring.transform.localScale = new Vector3(diameter, 0.005f, diameter);
            ring.GetComponent<Renderer>().sharedMaterial = CityBlockGreyboxBuilder.Mat("Ring_" + label, c);
        }

        static GameObject LoadModel(string path) => AssetDatabase.LoadAssetAtPath<GameObject>(path);
        static Sprite Sprite(string name) => AssetDatabase.LoadAssetAtPath<Sprite>(HudDir + name + ".png");

        public static void AddSceneToBuildSettings(string scenePath)
        {
            var list = EditorBuildSettings.scenes.ToList();
            if (list.Any(s => s.path == scenePath)) return;
            list.Insert(0, new EditorBuildSettingsScene(scenePath, true));
            EditorBuildSettings.scenes = list.ToArray();
        }
    }
}
#endif
