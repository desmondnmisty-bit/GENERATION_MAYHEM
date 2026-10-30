// Copyright Dark Logic Studios. Generation Mayhem.
// Match_Slither_FullScript_v001 / Slither_Boss_Fight_v003 as a running match:
//   pre-match ref call → FIGHT → boss phases, Viper waves, crane schedule → win / lose → Retry.
// LOCKED rules:
//   • Victory ONLY from boss_knocked_out (VictoryController.onVictory). Never from HP, timers or wave clears.
//   • Loss ONLY when Vixen, Kailee, Brianna AND Jessica are all down at the same time.
//   • Mom's Chaos powers the Slingshot. Synergy pays for the AI finishers (starts at 50%).
//   • Oil never burns.

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;
using UnityEngine.SceneManagement;
using GenerationMayhem.Combat;
using GenerationMayhem.Player;
using GenerationMayhem.Traversal;

namespace GenerationMayhem.Match
{
    public enum MatchState { PreMatch, Fighting, Won, Lost }

    public class MatchDirector : MonoBehaviour
    {
        public static MatchDirector Instance { get; private set; }
        public static bool IsOver => Instance != null && (Instance.State == MatchState.Won || Instance.State == MatchState.Lost);
        public static int Attempts { get; private set; }
        public static bool IntroSeen { get; private set; }
        public static int AliveVipers => ViperGrunt.AliveCount;

        [Header("Family (all four down = loss)")]
        public Health vixen;
        public Health kailee;
        public Health brianna;
        public Health jessica;

        [Header("Refs")]
        public SlitherBoss boss;
        public ShatterSlingshotStub stub;
        public VictoryController victory;
        public SlingshotFinisher finisher;
        public CraneHazard craneX1;
        public CraneHazard craneX2;
        public Transform[] viperSpawns;
        [Tooltip("Optional Viper models (FBX) by ViperKind: Fang, Cobra, TailStrike, Swarm. Empty = pink capsules.")]
        public GameObject[] viperModels;
        public RuntimeAnimatorController viperAnimator;
        public float viperModelScale = 1f;

        [Header("Tuning")]
        [Range(0f, 1f)] public float startingSynergy = 0.5f;
        public float craneP1Every = 25f, craneP2Every = 18f, craneP3Every = 20f;

        public MatchState State { get; private set; } = MatchState.PreMatch;
        public Health Kailee => kailee;
        public readonly List<Health> Family = new List<Health>();
        public float MatchTime { get; private set; }
        public string Banner { get; private set; } = "";
        public float BannerUntil { get; private set; }
        public float ChaosSurgeAt { get; private set; } = -99f;

        // ---------------- subtitles ----------------
        public struct Line { public string speaker, text; }
        readonly Queue<Line> _lines = new Queue<Line>();
        public Line CurrentLine { get; private set; }
        public bool HasLine => Time.time < _lineUntil;
        float _lineUntil;
        readonly HashSet<string> _onceKeys = new HashSet<string>();
        float _nextCrane;
        bool _craneAlt;
        float _lastWindowLine = -99f;

        public static void Say(string speaker, string text)
        {
            if (Instance == null) { Debug.Log("[" + speaker + "] " + text); return; }
            Instance.Enqueue(speaker, text);
        }

        /// <summary>One-shot barks: false the first time a key is used, true after (use `if (!SaidOnce(k)) Say(..)`).</summary>
        public static bool SaidOnce(string key) => Instance == null || !Instance._onceKeys.Add(key);

        public static void SpawnWave(int n) { if (Instance != null) Instance.StartCoroutine(Instance.Wave(n)); }

        void Awake()
        {
            Instance = this;
            foreach (var h in new[] { vixen, kailee, brianna, jessica }) if (h != null) Family.Add(h);
        }

        void OnDestroy() { if (Instance == this) Instance = null; }

        void OnEnable()
        {
            CombatEvents.Downed += OnDowned;
            CombatEvents.Revived += OnRevived;
        }

        void OnDisable()
        {
            CombatEvents.Downed -= OnDowned;
            CombatEvents.Revived -= OnRevived;
        }

        void Start()
        {
            Attempts++;
            if (stub == null) stub = FindFirstObjectByType<ShatterSlingshotStub>();
            if (victory == null) victory = FindFirstObjectByType<VictoryController>();
            if (boss == null) boss = FindFirstObjectByType<SlitherBoss>();
            if (finisher == null) finisher = FindFirstObjectByType<SlingshotFinisher>();
            if (victory != null) victory.onVictory.AddListener(OnVictory);
            if (stub != null) stub.SetSynergyNormalized(startingSynergy);
            if (MomsChaosMeter.Instance != null) MomsChaosMeter.Instance.onFull.AddListener(OnChaosFull);
            if (boss != null) boss.onPhaseChanged += OnBossPhase;
            ToxicOil.SetAllToxic(false);
            StartCoroutine(PreMatch());
        }

        IEnumerator PreMatch()
        {
            State = MatchState.PreMatch;
            while (GenerationMayhem.Flow.GameFlow.HoldPreMatch) yield return null; // start screen / upgrade screen
            if (!IntroSeen)
            {
                // Match_Slither_FullScript_v001 §1 (gameplay cut of "Collateral"; the full cutscene is not built)
                Say("Slither", "Look who crawled back.");
                Say("Vixen", "Come say it to my face.");
                Say("Kailee", "Cool. Gonna stab you.");
                Say("Ref Bot", "Family versus Vipers! Keep it on the asphalt!");
                float until = Time.time + 16f;
                yield return null;
                while (Time.time < until && (HasLine || _lines.Count > 0))
                {
                    if (Input.GetKeyDown(KeyCode.Return) || Input.GetKeyDown(KeyCode.JoystickButton7)) { _lines.Clear(); _lineUntil = 0f; break; }
                    yield return null;
                }
                IntroSeen = true;
            }
            else
            {
                string[] pool = { "Vixen|Again. We go again.", "Kailee|Okay. That one was on purpose. Practice run.",
                                  "Brianna|Watch the eyes. Bait the crane. We've got this.", "Jessica|Run it back. I'm loading the big ones." };
                var l = pool[Random.Range(0, pool.Length)].Split('|');
                Say(l[0], l[1]);
                yield return new WaitForSeconds(1.8f);
            }
            SetBanner("FIGHT!", 1.5f);
            Say("Ref Bot", GenerationMayhem.Flow.GameFlow.FightNumber > 1 ? "Fight " + GenerationMayhem.Flow.GameFlow.FightNumber + "! FIGHT!" : IntroSeen && Attempts > 1 ? "Rematch is on! FIGHT!" : "FIGHT!");
            State = MatchState.Fighting;
            _nextCrane = Time.time + craneP1Every;
        }

        void Update()
        {
            // Subtitle queue: one line on screen at a time.
            if (!HasLine && _lines.Count > 0)
            {
                CurrentLine = _lines.Dequeue();
                _lineUntil = Time.time + Mathf.Clamp(1.2f + CurrentLine.text.Length * 0.045f, 1.6f, 3.6f);
            }

            var vc = vixen != null ? vixen.GetComponent<VixenCombat>() : null;
            if (vc != null) vc.CombatLocked = State != MatchState.Fighting || finisher != null && finisher.Busy;

            if (State == MatchState.Won || State == MatchState.Lost)
            {
                if (Input.GetKeyDown(KeyCode.R) || Input.GetKeyDown(KeyCode.JoystickButton7) || Input.GetKeyDown(KeyCode.Return)) Retry();
                return;
            }
            if (State != MatchState.Fighting) return;
            MatchTime += Time.deltaTime;

            // LOSS: all four family fighters down at once.
            if (Family.Count > 0)
            {
                bool allDown = true;
                foreach (var h in Family) if (h != null && h.IsAlive) { allDown = false; break; }
                if (allDown) Lose();
            }

            TickCranes();
        }

        // ---------------- cranes ----------------
        void TickCranes()
        {
            if (boss == null || Time.time < _nextCrane) return;
            var phase = boss.Phase;
            if (phase == BossPhase.KO || phase == BossPhase.Intro) return;
            if (phase == BossPhase.Phase1)
            {
                Drop(craneX1);
                _nextCrane = Time.time + craneP1Every;
            }
            else if (phase == BossPhase.Phase2)
            {
                _craneAlt = !_craneAlt;
                Drop(_craneAlt ? craneX2 : craneX1);
                _nextCrane = Time.time + craneP2Every;
            }
            else
            {
                _craneAlt = !_craneAlt;
                Drop(_craneAlt ? craneX2 : craneX1);
                _nextCrane = Time.time + craneP3Every;
            }
        }

        void Drop(CraneHazard c)
        {
            if (c == null || c.IsBusy) return;
            c.Drop();
            if (!SaidOnce("crane_" + c.zoneName)) Say("Brianna", "Crane load overhead! Bait him under the marker!");
        }

        // ---------------- waves ----------------
        IEnumerator Wave(int n)
        {
            ViperKind[] kinds;
            switch (n)
            {
                case 1: kinds = new[] { ViperKind.Fang, ViperKind.Fang, ViperKind.Cobra }; break;
                case 2: kinds = new[] { ViperKind.Fang, ViperKind.Fang, ViperKind.TailStrike, ViperKind.Fang }; break;
                default: kinds = new[] { ViperKind.TailStrike, ViperKind.Swarm, ViperKind.Swarm, ViperKind.Swarm }; break;
            }
            SetBanner("VIPERS INCOMING", 2f);
            for (int i = 0; i < kinds.Length; i++)
            {
                if (IsOver) yield break;
                var at = viperSpawns != null && viperSpawns.Length > 0 && viperSpawns[i % viperSpawns.Length] != null
                    ? viperSpawns[(i + n) % viperSpawns.Length].position
                    : (boss != null ? boss.transform.position + Random.insideUnitSphere * 8f : Vector3.zero);
                SpawnViper(kinds[i], at, n * 10 + i);
                yield return new WaitForSeconds(0.45f);
            }
            if (kinds[kinds.Length - 1] == ViperKind.Swarm) Say("Jessica", "Swarm's here. Clumped up, perfect for a Volley.");
        }

        static readonly Color PinkA = new Color(1f, 0.25f, 0.62f), PinkB = new Color(0.9f, 0.1f, 0.45f),
                              PinkC = new Color(1f, 0.55f, 0.8f), PinkD = new Color(0.75f, 0.2f, 0.75f);

        public ViperGrunt SpawnViper(ViperKind kind, Vector3 at, int index)
        {
            if (NavMesh.SamplePosition(at, out NavMeshHit hit, 6f, NavMesh.AllAreas)) at = hit.position;
            var go = new GameObject("Viper_" + kind + "_" + index);
            go.transform.position = at;           // position BEFORE the agent exists, so it binds to the right mesh
            if (boss != null) { var d = CombatQuery.Flat(boss.transform.position - at); if (d.sqrMagnitude > 0.01f) go.transform.rotation = Quaternion.LookRotation(d.normalized); }

            var id = go.AddComponent<FighterIdentity>();
            id.role = kind == ViperKind.Fang ? FighterRole.Fang : kind == ViperKind.TailStrike ? FighterRole.TailStrike : kind == ViperKind.Cobra ? FighterRole.Cobra : FighterRole.Grunt;
            var col = go.AddComponent<CapsuleCollider>();
            col.height = kind == ViperKind.TailStrike ? 2.1f : 1.8f; col.radius = kind == ViperKind.TailStrike ? 0.5f : 0.38f; col.center = Vector3.up * col.height * 0.5f;
            var rb = go.AddComponent<Rigidbody>(); rb.isKinematic = true; rb.useGravity = false; // hazards / harbor triggers see it
            go.AddComponent<ShoveState>();
            var agent = go.AddComponent<NavMeshAgent>();
            agent.radius = col.radius; agent.height = col.height;
            agent.acceleration = 30f; agent.angularSpeed = 540f; agent.stoppingDistance = 0.2f;
            agent.obstacleAvoidanceType = ObstacleAvoidanceType.LowQualityObstacleAvoidance;
            CityBlockNavBootstrap.ConfigureAgent(agent);
            if (!agent.isOnNavMesh) agent.Warp(at);
            var kb = go.AddComponent<KnockbackBody>();
            kb.knockbackScale = kind == ViperKind.TailStrike ? 0.6f : 1.1f;
            var hp = go.AddComponent<Health>();
            hp.team = Team.Vipers;
            hp.displayName = kind == ViperKind.Fang ? "Fang" : kind == ViperKind.Cobra ? "Cobra" : kind == ViperKind.TailStrike ? "Tail-Strike" : "Swarm";
            hp.SetMax(kind == ViperKind.TailStrike ? 160f : kind == ViperKind.Cobra ? 55f : kind == ViperKind.Swarm ? 40f : 70f);
            hp.deactivateAfterDeath = 1.6f;

            // Visual
            var meshRoot = new GameObject("MeshRoot").transform;
            meshRoot.SetParent(go.transform, false);
            Color tint = kind == ViperKind.Fang ? PinkA : kind == ViperKind.TailStrike ? PinkB : kind == ViperKind.Cobra ? PinkD : PinkC;
            Animator anim = null;
            GameObject model = null;
            if (viperModels != null && viperModels.Length > 0)
                model = (int)kind < viperModels.Length && viperModels[(int)kind] != null ? viperModels[(int)kind] : viperModels[0];
            if (model != null)
            {
                var m = Instantiate(model, meshRoot);
                m.transform.localPosition = Vector3.zero; m.transform.localRotation = Quaternion.identity;
                m.transform.localScale = Vector3.one * viperModelScale * (kind == ViperKind.TailStrike ? 1.15f : kind == ViperKind.Swarm ? 0.9f : 1f);
                foreach (var c in m.GetComponentsInChildren<Collider>()) Destroy(c);
                anim = m.GetComponentInChildren<Animator>();
                if (anim == null) anim = m.AddComponent<Animator>();
                if (viperAnimator != null) anim.runtimeAnimatorController = viperAnimator;
                anim.applyRootMotion = false;
                foreach (var r in m.GetComponentsInChildren<Renderer>()) FxUtil.Tint(r, Color.Lerp(r.sharedMaterial != null && r.sharedMaterial.HasProperty("_Color") ? r.sharedMaterial.color : Color.white, tint, 0.35f));
            }
            else
            {
                var cap = GameObject.CreatePrimitive(PrimitiveType.Capsule);
                Destroy(cap.GetComponent<Collider>());
                cap.name = "Body";
                cap.transform.SetParent(meshRoot, false);
                cap.transform.localPosition = Vector3.up * col.height * 0.5f;
                cap.transform.localScale = new Vector3(col.radius * 2f, col.height * 0.5f, col.radius * 2f);
                cap.GetComponent<Renderer>().sharedMaterial = FxUtil.Mat(tint);
                var visor = GameObject.CreatePrimitive(PrimitiveType.Cube);
                Destroy(visor.GetComponent<Collider>());
                visor.transform.SetParent(cap.transform, false);
                visor.transform.localPosition = new Vector3(0f, 0.55f, 0.42f); visor.transform.localScale = new Vector3(0.7f, 0.15f, 0.2f);
                visor.GetComponent<Renderer>().sharedMaterial = FxUtil.Mat(FxUtil.ToxicGreen, 2f);
            }
            var fa = go.AddComponent<FighterAnimator>();
            fa.animator = anim;

            var g = go.AddComponent<ViperGrunt>();
            g.Configure(kind);
            agent.speed = g.speed;
            return g;
        }

        // ---------------- events ----------------
        void OnBossPhase(BossPhase p)
        {
            switch (p)
            {
                case BossPhase.Phase2: SetBanner("PHASE 2", 1.5f); break;
                case BossPhase.Phase3: SetBanner("PHASE 3 — TOXIC FLOOD", 2f); break;
                case BossPhase.LastStand: SetBanner("LAST STAND — SLINGSHOT HIM INTO THE HARBOR!", 3f); break;
            }
        }

        /// <summary>Enrage: both slicks go toxic green. Toxic, not flammable: they damage over time, they never burn.</summary>
        public void OnToxicFlood()
        {
            foreach (var o in ToxicOil.All)
            {
                if (o == null) continue;
                foreach (var r in o.GetComponentsInChildren<Renderer>()) FxUtil.Tint(r, new Color(0.35f, 0.9f, 0.1f, 0.85f), 1.2f);
                var parent = o.transform.parent;
                if (parent != null) foreach (var r in parent.GetComponentsInChildren<Renderer>()) if (r.name.Contains("Oil")) FxUtil.Tint(r, new Color(0.35f, 0.9f, 0.1f, 0.85f), 1.2f);
            }
            Say("Ref Bot", "The oil's gone TOXIC! Stay off the green!");
            Say("Brianna", "It's poison, not fuel. Don't stand in it, shove HIM in it.");
        }

        public void OnWindowOpened()
        {
            if (Time.time - _lastWindowLine < 6f) return;
            _lastWindowLine = Time.time;
            bool chaosFull = MomsChaosMeter.Instance != null && MomsChaosMeter.Instance.IsFull;
            Say("Vixen", chaosFull ? "He's open! Chaos is full: Slingshot, NOW!" : "He's open! Hit him!");
        }

        public void ChaosSurge()
        {
            ChaosSurgeAt = Time.time;
            SetBanner("MOM'S CHAOS SURGE! PRESS F / Y", 2.5f);
        }

        void OnChaosFull()
        {
            ChaosSurgeAt = Time.time;
            if (State == MatchState.Fighting) Say("Kailee", "Launch me, Mom!");
        }

        void OnDowned(Health h)
        {
            if (h == null || h.team != Team.Family || State != MatchState.Fighting) return;
            int up = 0; foreach (var f in Family) if (f != null && f.IsAlive) up++;
            string n = h.displayName;
            if (h == kailee) Say("Vixen", "KAILEE! Stay with me!");
            else if (h == vixen) Say("Kailee", "Mom's down! Covering her!");
            else Say(n, "I'm down! Check me up!");
            if (up == 1) Say("Ref Bot", "One fighter left standing!");
        }

        void OnRevived(Health h) { }

        void OnVictory()
        {
            if (State == MatchState.Won) return;
            State = MatchState.Won;
            Say("Ref Bot", "Slither's in the water! KNOCKOUT!");
            Say("Ref Bot", "Winner: GENERATION MAYHEM!");
            SetBanner("KNOCKOUT!", 4f);
        }

        void Lose()
        {
            State = MatchState.Lost;
            Say("Ref Bot", "Family's down! Winner: SLITHER!");
            string[] gloat = { "Interest compounds, mama.", "Same time tomorrow? I'll be here.", "Tell your girl I'll keep her paperwork warm." };
            Say("Slither", gloat[Random.Range(0, gloat.Length)]);
            SetBanner("THE FAMILY IS DOWN", 4f);
        }

        void SetBanner(string text, float seconds) { Banner = text; BannerUntil = Time.time + seconds; }

        void Enqueue(string speaker, string text)
        {
            if (HasLine && CurrentLine.text == text) return;
            foreach (var l in _lines) if (l.text == text) return;
            while (_lines.Count >= 8) _lines.Dequeue();
            _lines.Enqueue(new Line { speaker = speaker, text = text });
            Debug.Log("[" + speaker + "] " + text);
        }

        public void Retry()
        {
            if (GenerationMayhem.Flow.GameFlow.Busy) return; // upgrade screen owns the reload
            Time.timeScale = 1f;
            var scene = SceneManager.GetActiveScene();
            if (scene.buildIndex >= 0) { SceneManager.LoadScene(scene.buildIndex); return; }
#if UNITY_EDITOR
            UnityEditor.SceneManagement.EditorSceneManager.LoadSceneInPlayMode(scene.path, new LoadSceneParameters(LoadSceneMode.Single));
#else
            SceneManager.LoadScene(scene.name);
#endif
        }
    }
}
