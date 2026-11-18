// Copyright Dark Logic Studios. Generation Mayhem.
// Slither, boss of the Pink Vipers (Slither_Boss_Fight_v003 §4–§6, Match_Slither_FullScript_v001).
// One continuous fight, 3 phases at HP thresholds, then Last Stand. Only the Shatter-Slingshot can finish him:
// at ≤10% HP it plays the harbor KO and boss_knocked_out fires at water contact (BossKOSequence).

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;
using GenerationMayhem.Art;
using GenerationMayhem.Combat;
using GenerationMayhem.Traversal;

namespace GenerationMayhem.Match
{
    public enum BossPhase { Intro, Phase1, Phase2, Phase3, LastStand, KO }

    [RequireComponent(typeof(Health))]
    public class SlitherBoss : MonoBehaviour
    {
        public static SlitherBoss Instance { get; private set; }

        [Header("Move")]
        public float moveSpeed = 7.5f;
        public float turnSpeed = 540f;

        [Header("Venom-Lash (2 hits, ~6 m lunge, 0.8 s eye-flare telegraph)")]
        public float lashTelegraph = 0.8f;
        public float lashReach = 6f;
        public float lashRange = 6.5f;
        public float lashDamage = 22f;

        [Header("Venom-Mist Blind (1.2 s telegraph)")]
        public float mistTelegraph = 1.2f;
        public float mistCooldown = 9f;
        public float mistRangeMin = 4f, mistRangeMax = 20f;

        [Header("Corrosive Viper-Lock (Phase 2+, 1.0 s telegraph, up to 4 s pin)")]
        public float lockTelegraph = 1f;
        public float lockReach = 7f;
        public float lockRange = 7.5f;
        public float lockHoldMax = 4f;
        public float lockDps = 14f;
        [Tooltip("Extra Mom's Chaos per second while Kailee is pinned (the lore beat: Mom's rage spikes).")]
        public float kaileeLockChaosPerSecond = 0.08f;

        [Header("Recovery")]
        public float recovery = 0.9f;
        public float whiffRecovery = 1.4f;
        [Tooltip("Phase 3: about 25% shorter recovery.")]
        public float phase3RecoveryScale = 0.75f;

        [Header("Shatter Windows (§6)")]
        public float oilWindow = 4f;
        public float craneWindow = 5f;
        public float lockBrokenWindow = 3f;
        public float toxicSlipWindow = 4f;
        public float lastStandWindow = 12f;
        public float staggerImmunity = 5f;
        public float toxicSlipDamage = 90f;
        [Tooltip("Last Stand: if the family stalls, he recovers and fights this long before kneeling again.")]
        public float lastStandFightSeconds = 10f;

        [Header("Gantry Leap (Phase 2)")]
        public Transform gantryTop;
        public Transform gantryDrop;
        public float gantryMaxSeconds = 30f;
        public float gantryMistEvery = 5f;

        [Header("Look")]
        public Transform visualRoot;
        public Renderer[] eyes;

        public BossPhase Phase { get; private set; } = BossPhase.Intro;
        public bool WindowOpen => _windowLeft > 0f;
        public float WindowLeft => _windowLeft;
        public float WindowTotal { get; private set; } = 1f;
        public bool OnGantry { get; private set; }
        public bool Kneeling { get; private set; }
        public Health LockVictim { get; private set; }
        public Health Health => _hp;
        public string CurrentMove { get; private set; } = "";
        public bool IsEnraging { get; private set; }

        public event System.Action<BossPhase> onPhaseChanged;

        Health _hp;
        NavMeshAgent _agent;
        KnockbackBody _kb;
        FighterAnimator _anim;
        BossKOSequence _ko;
        LineRenderer _line;
        GameObject _crackRing, _reticle;

        float _windowLeft; bool _windowPaused;
        float _staggerImmuneUntil, _nextMist, _retargetAt, _nextKneel;
        string _lastMove = "";
        Health _target;
        bool _wave1, _wave3, _gantryDone, _enraged, _pendingGantry, _pendingEnrage, _lastStandFirst = true;
        bool _saidOil, _saidSlip;
        Vector3 _visualBaseScale = Vector3.one;

        bool AgentReady => _agent != null && _agent.enabled && _agent.isOnNavMesh;
        float RecoveryScale => Phase >= BossPhase.Phase3 ? phase3RecoveryScale : 1f;

        void Awake()
        {
            Instance = this;
            _hp = GetComponent<Health>();
            _agent = GetComponent<NavMeshAgent>();
            _kb = GetComponent<KnockbackBody>();
            _anim = GetComponent<FighterAnimator>();
            _ko = GetComponent<BossKOSequence>();
            if (_agent != null) { _agent.updateRotation = false; _agent.speed = moveSpeed; }
            if (visualRoot != null) _visualBaseScale = visualRoot.localScale;
            // Outside a Shatter Window, AI-ally finishers do 50% (boss spec §6).
            _hp.modifier += (ref DamageInfo d) => d.aiFinisher && !WindowOpen ? 0.5f : 1f;
        }

        void OnDestroy() { if (Instance == this) Instance = null; }

        void OnEnable()
        {
            _hp.onDamaged += OnDamaged;
            TraversalEvents.CheckedIntoOil += OnCheckedIntoOil;
            TraversalEvents.ToxicSlip += OnToxicSlip;
            TraversalEvents.BossHarborBounce += OnHarborBounce;
        }

        void OnDisable()
        {
            _hp.onDamaged -= OnDamaged;
            TraversalEvents.CheckedIntoOil -= OnCheckedIntoOil;
            TraversalEvents.ToxicSlip -= OnToxicSlip;
            TraversalEvents.BossHarborBounce -= OnHarborBounce;
        }

        void Start()
        {
            // Existing Dockyard Slither slot. The split GLB replaces the capsule or old boss mesh when it loads.
            SlitherMeshHang.Hang(visualRoot != null ? visualRoot : transform);
            _line = FxUtil.Line(transform, FxUtil.ToxicGreen, 0.35f);
            StartCoroutine(MatchStart());
        }

        IEnumerator MatchStart()
        {
            Phase = BossPhase.Intro;
            _hp.invulnerable = true;
            while (MatchDirector.Instance != null && MatchDirector.Instance.State == MatchState.PreMatch) yield return null; // holds for the ref call
            _hp.invulnerable = false;
            SetPhase(BossPhase.Phase1);
            MatchDirector.Say("Slither", "Watch the eyes, mama.");
            _nextMist = Time.time + 4f;
            StartCoroutine(Brain());
        }

        void SetPhase(BossPhase p)
        {
            if (Phase == p) return;
            Phase = p;
            onPhaseChanged?.Invoke(p);
        }

        // =================================================================== brain
        IEnumerator Brain()
        {
            while (true)
            {
                if (MatchDirector.IsOver || _kb != null && (_kb.InKnockback || _kb.IsStunned) || !AgentReady)
                { StopMove(); yield return null; continue; }

                if (_pendingGantry) { _pendingGantry = false; yield return Gantry(); continue; }
                if (_pendingEnrage) { _pendingEnrage = false; yield return Enrage(); continue; }
                if (Phase == BossPhase.LastStand && Time.time >= _nextKneel) { Interrupt(LastStandKneel()); yield break; }

                var target = PickTarget();
                if (target == null) { StopMove(); yield return null; continue; }
                float dist = FlatDist(target.transform.position);
                string move = ChooseMove(dist);
                if (move == null) { Chase(target); yield return new WaitForSeconds(0.2f); continue; }
                _lastMove = move;
                if (move == "lash") yield return Lash(target);
                else if (move == "mist") yield return Mist(target);
                else if (move == "lock") yield return ViperLock(target);
            }
        }

        string ChooseMove(float dist)
        {
            bool mistReady = Time.time >= _nextMist && dist >= mistRangeMin && dist <= mistRangeMax;
            bool lockOk = Phase >= BossPhase.Phase2 && _lastMove != "lock" && dist <= lockRange; // never twice in a row
            bool lashOk = dist <= lashRange;
            float r = Random.value;
            if (Phase == BossPhase.Phase1)
            {
                if (lashOk) return mistReady && r < 0.3f ? "mist" : "lash";
                return mistReady && r < 0.15f ? "mist" : null;
            }
            // Phase 2+: Lash 40% · Mist 30% · Viper-Lock 30%
            if (lashOk || lockOk)
            {
                if (r < 0.4f) return lashOk ? "lash" : (lockOk ? "lock" : null);
                if (r < 0.7f && mistReady) return "mist";
                if (lockOk) return "lock";
                return lashOk ? "lash" : null;
            }
            return mistReady && r < 0.2f ? "mist" : null;
        }

        Health PickTarget()
        {
            if (_target != null && _target.IsAlive && Time.time < _retargetAt && FlatDist(_target.transform.position) < 35f) return _target;
            _retargetAt = Time.time + 5f;
            Health best = null; float bestScore = 0f;
            foreach (var h in Health.All)
            {
                if (h == null || h.team != Team.Family || !h.IsAlive || h.Identity == null) continue;
                float d = FlatDist(h.transform.position);
                if (d > 35f) continue;
                float w = h.Identity.role == FighterRole.Hero ? 2f : (h.IsKailee ? 1.5f : 1f);
                float score = w / (1f + d * 0.12f) * Random.Range(0.75f, 1.25f);
                if (score > bestScore) { bestScore = score; best = h; }
            }
            _target = best;
            return best;
        }

        // =================================================================== moves
        IEnumerator Lash(Health target)
        {
            CurrentMove = "Venom-Lash";
            StopMove();
            Face(target.transform.position, 9999f);
            EyeFlare(true);
            if (_anim != null) _anim.Play("Slither_VenomLash", lashTelegraph + 0.8f);
            _line.enabled = true;
            float t = 0f;
            while (t < lashTelegraph)
            {
                t += Time.deltaTime;
                if (t < lashTelegraph * 0.5f && target != null) Face(target.transform.position, 240f);
                Vector3 a = transform.position + Vector3.up * 0.05f;
                _line.SetPosition(0, a); _line.SetPosition(1, a + transform.forward * lashReach);
                yield return null;
            }
            _line.enabled = false;
            EyeFlare(false);

            Vector3 dir = transform.forward, start = transform.position;
            var hit1 = new HashSet<Health>(); var hit2 = new HashSet<Health>();
            int hits = 0; float dur = 0.35f; t = 0f; bool first = false;
            while (t < dur)
            {
                t += Time.deltaTime;
                if (AgentReady) _agent.Move(dir * (lashReach / dur) * Time.deltaTime);
                if (!first && t >= dur * 0.45f) { first = true; hits += LashHit(dir, hit1); }
                yield return null;
            }
            hits += LashHit(dir, hit2);
            FxUtil.Strip(start, transform.position, 1.2f, FxUtil.ToxicGreen, 3f); // venom trail (visual)
            CurrentMove = "";

            // Phase 3: faster combos — Lash, then Viper-Lock.
            if (Phase >= BossPhase.Phase3 && target != null && target.IsAlive && Random.value < 0.5f && FlatDist(target.transform.position) <= lockRange)
            {
                _lastMove = "lock";
                yield return ViperLock(target);
                yield break;
            }
            yield return Recover(hits > 0 ? recovery : whiffRecovery * 0.8f);
        }

        int LashHit(Vector3 dir, HashSet<Health> exclude)
        {
            var d = DamageInfo.Make(lashDamage, gameObject, "venom_lash");
            d.knockDir = dir; d.knockForce = 6f; d.knockUp = 2f; d.stun = 0.35f;
            return CombatQuery.Strike(Team.Vipers, transform.position + Vector3.up + dir * 1.3f, 1.7f, d, null, exclude);
        }

        IEnumerator Mist(Health target)
        {
            CurrentMove = "Venom-Mist Blind";
            StopMove();
            Face(target.transform.position, 9999f);
            _nextMist = Time.time + mistCooldown;
            if (_anim != null) _anim.Play("Slither_VenomMist_Blind", mistTelegraph + 0.5f);

            Vector3 me = transform.position, tp = target.transform.position;
            Vector3 fwd = CombatQuery.Flat(tp - me); if (fwd.sqrMagnitude < 0.01f) fwd = transform.forward; fwd.Normalize();
            Vector3 side = Vector3.Cross(Vector3.up, fwd);
            var walls = new List<Vector3>(); var clouds = new List<Vector3>();
            int wallCap = Phase == BossPhase.Phase1 ? 1 : (Phase >= BossPhase.Phase3 ? 2 : 0);   // P1 one wall at a time · P3 pairs
            int wantWalls = Mathf.Max(0, wallCap - MistWall.AliveCount);
            Vector3 mid = Vector3.Lerp(me, tp, 0.55f);
            for (int i = 0; i < wantWalls; i++) walls.Add(mid + side * (wantWalls == 2 ? (i == 0 ? -5f : 5f) : 0f));
            int cloudCount = (Phase == BossPhase.Phase2 ? 3 : 2) - walls.Count + (Phase >= BossPhase.Phase3 ? 1 : 0);
            for (int i = 0; i < Mathf.Max(1, cloudCount); i++) { var c = Random.insideUnitCircle * 3f; clouds.Add(tp + new Vector3(c.x, 0f, c.y)); }

            var rings = new List<GameObject>();
            for (int i = 0; i < walls.Count; i++) walls[i] = OnMesh(walls[i]);
            for (int i = 0; i < clouds.Count; i++) clouds[i] = OnMesh(clouds[i]);
            foreach (var w in walls) rings.Add(FxUtil.Ring(w, 3f, FxUtil.ToxicGreen, mistTelegraph + 1f));
            foreach (var c in clouds) rings.Add(FxUtil.Ring(c, 2.5f, FxUtil.ToxicGreen, mistTelegraph + 1f));
            yield return new WaitForSeconds(mistTelegraph);

            Vector3 hand = transform.position + Vector3.up * 2f;
            foreach (var w in walls) { var at = w; MistCanister.Launch(hand, at, 0.9f, 3f, p => MistWall.Spawn(p, fwd)); }
            foreach (var c in clouds) { var at = c; MistCanister.Launch(hand, at, 0.9f, 3f, p => MistCloud.Spawn(p)); }
            if (Random.value < 0.4f) MatchDirector.Say("Slither", "Breathe deep.");
            CurrentMove = "";
            yield return Recover(recovery);
        }

        IEnumerator ViperLock(Health target)
        {
            CurrentMove = "Corrosive Viper-Lock";
            StopMove();
            Face(target.transform.position, 9999f);
            if (_anim != null) _anim.Play("Slither_ViperLock_Start", lockTelegraph + 0.4f);
            if (visualRoot != null) visualRoot.localScale = new Vector3(_visualBaseScale.x * 1.1f, _visualBaseScale.y * 0.82f, _visualBaseScale.z * 1.1f); // low crouch + coil
            _reticle = FxUtil.Sphere(target.transform.position + Vector3.up * 2.4f, 0.45f, FxUtil.ToxicGreen, 0f, 3f);
            float t = 0f;
            while (t < lockTelegraph)
            {
                t += Time.deltaTime;
                if (target != null) { Face(target.transform.position, 300f); if (_reticle != null) _reticle.transform.position = target.transform.position + Vector3.up * 2.4f; }
                EyeFlare(Mathf.Repeat(t * 10f, 1f) > 0.5f); // eyes strobe
                yield return null;
            }
            EyeFlare(false);
            if (_reticle != null) Destroy(_reticle);
            if (visualRoot != null) visualRoot.localScale = _visualBaseScale;

            Vector3 dir = target != null ? CombatQuery.Flat(target.transform.position - transform.position) : transform.forward;
            float reach = Mathf.Min(lockReach, dir.magnitude + 0.5f);
            dir = dir.sqrMagnitude > 1e-4f ? dir.normalized : transform.forward;
            float dur = 0.3f; t = 0f;
            Health grabbed = null;
            while (t < dur && grabbed == null)
            {
                t += Time.deltaTime;
                if (AgentReady) _agent.Move(dir * (reach / dur) * Time.deltaTime);
                grabbed = FamilyNear(transform.position + dir * 1.1f, 1.4f);
                yield return null;
            }
            if (grabbed == null)
            {
                CurrentMove = "Whiff";
                if (_anim != null) _anim.Play("Slither_ViperLock_Whiff", whiffRecovery);
                if (Random.value < 0.3f) MatchDirector.Say("Kailee", "Hugged the air, buddy.");
                yield return Recover(whiffRecovery);
                yield break;
            }
            yield return Hold(grabbed);
        }

        IEnumerator Hold(Health victim)
        {
            CurrentMove = "Viper-Lock HOLD";
            LockVictim = victim;
            var kb = victim.GetComponent<KnockbackBody>();
            if (kb != null) kb.Pin(transform, new Vector3(0f, 0f, 1.2f));
            if (_anim != null) _anim.Hold("Slither_ViperLock_Hold");
            var id = victim.Identity;
            if (victim.IsKailee) { MatchDirector.Say("Slither", "There she is. Your little debt."); MatchDirector.Say("Kailee", "Get your scaly— ugh— OFF!"); }
            else if (id != null && id.role == FighterRole.Hero) { MatchDirector.Say("Slither", "Old wires. Still twitch?"); MatchDirector.Say("Vixen", "Kailee! Hit him!"); }
            else if (victim.displayName == "Brianna") MatchDirector.Say("Brianna", "He's got me! Somebody check him!");
            else MatchDirector.Say("Payton", "Oh, you picked the wrong one, snake!");

            float t = 0f, tick = 0f;
            while (t < lockHoldMax && victim != null && victim.IsAlive && LockVictim == victim)
            {
                t += Time.deltaTime; tick += Time.deltaTime;
                if (tick >= 0.5f)
                {
                    tick = 0f;
                    victim.TakeDamage(new DamageInfo { amount = lockDps * 0.5f, kind = "viper_lock", origin = transform.position, unblockable = true });
                }
                if (victim.IsKailee && MomsChaosMeter.Instance != null) MomsChaosMeter.Instance.Add(kaileeLockChaosPerSecond * Time.deltaTime);
                yield return null;
            }
            ReleaseVictim(transform.forward * 6f + Vector3.up * 2f);
            if (_anim != null) { _anim.Unhold(); _anim.Play("Slither_ViperLock_Release", 0.6f); }
            CurrentMove = "";
            yield return Recover(recovery);
        }

        void ReleaseVictim(Vector3 throwVel)
        {
            if (LockVictim == null) return;
            var kb = LockVictim.GetComponent<KnockbackBody>();
            if (kb != null) kb.Release(throwVel);
            LockVictim = null;
        }

        /// <summary>Partner Check breaks the grab → stagger, 3 s Shatter Window.</summary>
        public void BreakLock(GameObject by)
        {
            if (LockVictim == null) return;
            bool kaileeFreedByMom = LockVictim.IsKailee && by != null && by.GetComponent<FighterIdentity>() != null && by.GetComponent<FighterIdentity>().role == FighterRole.Hero;
            ReleaseVictim(Vector3.zero);
            if (kaileeFreedByMom) { MatchDirector.Say("Vixen", "Hands off my kid."); MatchDirector.Say("Slither", "Ghk! Mama bites."); MatchDirector.Say("Kailee", "Thanks, Mom. I had it. Mostly."); }
            Stagger(lockBrokenWindow, "lock_broken", true);
        }

        IEnumerator Recover(float seconds)
        {
            StopMove();
            yield return new WaitForSeconds(seconds * RecoveryScale);
        }

        // =================================================================== gantry / enrage / last stand
        IEnumerator Gantry()
        {
            CurrentMove = "Gantry Leap";
            StopMove();
            OnGantry = true;
            float kbScale = _kb != null ? _kb.knockbackScale : 1f;
            if (_kb != null) _kb.knockbackScale = 0f;
            MatchDirector.Say("Slither", "Fine. Let's make it a party.");
            if (_anim != null) _anim.Play("Slither_GantryLeap_Up", 1.2f);
            if (gantryTop != null) yield return Jump(gantryTop.position, 1.0f, 4f);
            if (_anim != null) _anim.Play("Slither_Command_Summon", 1.5f);
            MatchDirector.Say("Slither", "Fang, Cobra, Tail, Swarm. All of you. Now!");
            MatchDirector.SpawnWave(2);
            float t = 0f, nextMist = 1.5f; bool said = false;
            while (t < gantryMaxSeconds && !MatchDirector.IsOver)
            {
                t += Time.deltaTime;
                if (t > 3f && MatchDirector.AliveVipers <= 1) break;   // comes down when one Viper is left, or after 30 s
                var tgt = PickTarget();
                if (tgt != null) Face(tgt.transform.position, 200f);
                if (t >= nextMist && tgt != null)
                {
                    nextMist += gantryMistEvery;
                    Vector3 at = OnMesh(tgt.transform.position);
                    FxUtil.Ring(at, 2.5f, FxUtil.ToxicGreen, 2f);
                    MistCanister.Launch(transform.position + Vector3.up * 2f, at, 1.1f, 2f, p => MistCloud.Spawn(p));
                    if (!said) { said = true; MatchDirector.Say("Slither", "Down there in the dark, where you belong."); }
                }
                yield return null;
            }
            MatchDirector.Say("Slither", "Useless. I'll do it myself.");
            if (_anim != null) _anim.Play("Slither_GantryLeap_Drop", 1f);
            Vector3 drop = gantryDrop != null ? gantryDrop.position : transform.position + transform.forward * 4f;
            yield return Jump(drop, 0.9f, 2f);
            if (_kb != null) _kb.knockbackScale = kbScale;
            OnGantry = false;
            _gantryDone = true;
            CurrentMove = "";
            yield return Recover(0.6f);
        }

        IEnumerator Jump(Vector3 to, float duration, float apex)
        {
            if (_agent != null && _agent.enabled) _agent.enabled = false;
            Vector3 from = transform.position; float t = 0f;
            while (t < duration)
            {
                t += Time.deltaTime;
                float u = Mathf.Clamp01(t / duration);
                Vector3 p = Vector3.Lerp(from, to, u);
                p.y += 4f * apex * u * (1f - u);
                transform.position = p;
                yield return null;
            }
            transform.position = to;
            if (to.y < 0.5f && _agent != null && NavMesh.SamplePosition(to, out NavMeshHit nh, 3f, NavMesh.AllAreas))
            { _agent.enabled = true; _agent.Warp(nh.position); }
        }

        IEnumerator Enrage()
        {
            CurrentMove = "ENRAGE";
            IsEnraging = true;
            StopMove();
            _hp.invulnerable = true;
            if (_anim != null) _anim.Play("Slither_Enrage", 2.5f);
            EyeFlare(true);
            yield return new WaitForSeconds(1.2f);
            ToxicOil.SetAllToxic(true);   // both slicks turn toxic green — toxic, NOT flammable
            if (MatchDirector.Instance != null) MatchDirector.Instance.OnToxicFlood();
            yield return new WaitForSeconds(1.3f);
            EyeFlare(false);
            _enraged = true;
            _hp.invulnerable = false;
            IsEnraging = false;
            SetPhase(BossPhase.Phase3);
            MatchDirector.Say("Slither", "Faster now, mama. Keep up.");
            CurrentMove = "";
        }

        void EnterLastStand()
        {
            if (Phase == BossPhase.LastStand || Phase == BossPhase.KO) return;
            if (!_enraged) { ToxicOil.SetAllToxic(true); _enraged = true; if (MatchDirector.Instance != null) MatchDirector.Instance.OnToxicFlood(); }
            _pendingEnrage = false; _pendingGantry = false;
            if (OnGantry) { OnGantry = false; if (_kb != null) _kb.knockbackScale = 0.7f; }
            IsEnraging = false; _hp.invulnerable = false;
            SetPhase(BossPhase.LastStand);
            Interrupt(LastStandKneel());
        }

        IEnumerator LastStandKneel()
        {
            StopMove();
            if (gantryDrop != null && transform.position.y > 1f) yield return Jump(gantryDrop.position, 0.8f, 1f);
            if (_lastStandFirst)
            {
                _lastStandFirst = false;
                MatchDirector.Say("Ref Bot", "He's on one knee! Finish it!");
                MatchDirector.Say("Slither", "If I go down, she comes with me!");
                // His final desperate Viper-Lock goes for Kailee.
                var k = MatchDirector.Instance != null ? MatchDirector.Instance.Kailee : null;
                if (k != null && k.IsAlive && FlatDist(k.transform.position) < 25f)
                {
                    CurrentMove = "Viper-Lock (desperate)";
                    Face(k.transform.position, 9999f);
                    yield return new WaitForSeconds(0.6f);
                    Vector3 to = OnMesh(k.transform.position - CombatQuery.Flat(k.transform.position - transform.position).normalized * 1.2f);
                    yield return Jump(to, 0.35f, 0.8f);
                    if (k.IsAlive)
                    {
                        LockVictim = k;
                        var kb = k.GetComponent<KnockbackBody>();
                        if (kb != null) kb.Pin(transform, new Vector3(0f, 0f, 1.2f));
                        yield return new WaitForSeconds(1.2f);
                        ReleaseVictim(transform.forward * 4f);
                    }
                }
            }
            // Mom's Chaos tops up to full: the ending never stalls.
            if (MomsChaosMeter.Instance != null && !MomsChaosMeter.Instance.IsFull)
            {
                MomsChaosMeter.Instance.Add(1f);
                if (MatchDirector.Instance != null) MatchDirector.Instance.ChaosSurge();
            }
            MatchDirector.Say("Vixen", "Kailee. Tether. NOW.");
            CurrentMove = "LAST STAND";
            Kneeling = true;
            if (_anim != null) _anim.Hold("Slither_Stagger_Loop");
            if (visualRoot != null) visualRoot.localScale = new Vector3(_visualBaseScale.x, _visualBaseScale.y * 0.7f, _visualBaseScale.z);
            OpenWindow(lastStandWindow);
            while (WindowOpen) yield return null;
            Kneeling = false;
            if (visualRoot != null) visualRoot.localScale = _visualBaseScale;
            if (_anim != null) _anim.Unhold();
            MatchDirector.Say("Slither", "Too slow!");
            _nextKneel = Time.time + lastStandFightSeconds;
            CurrentMove = "";
            StartCoroutine(Brain());
        }

        // =================================================================== staggers / windows
        void OnCheckedIntoOil(GameObject boss)
        {
            if (boss != gameObject) return;
            if (!_saidOil) { _saidOil = true; MatchDirector.Say("Slither", "Gah! Slick little trick."); }
            Stagger(oilWindow, "oil");
        }

        void OnToxicSlip(GameObject boss)
        {
            if (boss != gameObject) return;
            _hp.TakeDamage(new DamageInfo { amount = toxicSlipDamage, kind = "toxic_slip", origin = transform.position, unblockable = true });
            if (!_saidSlip) { _saidSlip = true; MatchDirector.Say("Slither", "Agh! My own— gah!"); MatchDirector.Say("Payton", "Taste your own soup!"); }
            Stagger(toxicSlipWindow, "toxic_slip");
        }

        void OnHarborBounce(GameObject boss, float stun)
        {
            if (boss != gameObject || Phase == BossPhase.KO) return;
            if (_kb != null) _kb.Stun(stun);
            MatchDirector.Say("Slither", "Rude.");
        }

        /// <summary>Crane load landed on him: damage + 5 s crane stagger (the main stagger source in Phase 2).</summary>
        public void CraneHit(float damageFraction)
        {
            if (OnGantry || Phase == BossPhase.KO) return;
            _hp.TakeDamage(new DamageInfo { amount = _hp.maxHP * damageFraction, kind = "crane_load", origin = transform.position, unblockable = true });
            MatchDirector.Say("Kailee", "Ha! Shipping and handling!");
            Stagger(craneWindow, "crane", true);
        }

        public void Stagger(float seconds, string reason, bool force = false)
        {
            if (Phase == BossPhase.KO || Phase == BossPhase.Intro || OnGantry || IsEnraging || Kneeling) return;
            if (!force && Time.time < _staggerImmuneUntil) return;
            Interrupt(StaggerRoutine(seconds, reason));
        }

        IEnumerator StaggerRoutine(float seconds, string reason)
        {
            CurrentMove = "STAGGERED";
            StopMove();
            ReleaseVictim(Vector3.zero);
            if (_anim != null) { _anim.Play("Slither_Stagger_Enter", 0.3f); _anim.Hold("Slither_Stagger_Loop"); }
            OpenWindow(seconds);
            while (WindowOpen) yield return null;
            if (_anim != null) { _anim.Unhold(); _anim.Play("Slither_Stagger_Exit", 0.5f); }
            _staggerImmuneUntil = Time.time + staggerImmunity;
            CurrentMove = "";
            yield return new WaitForSeconds(0.4f);
            StartCoroutine(Brain());
        }

        void OpenWindow(float seconds)
        {
            _windowLeft = seconds; WindowTotal = seconds; _windowPaused = false;
            if (_crackRing == null) _crackRing = FxUtil.Ring(transform.position, 3.6f, FxUtil.ShatterOrange, 0f);
            if (MatchDirector.Instance != null) MatchDirector.Instance.OnWindowOpened();
        }

        public void CloseWindow() { _windowLeft = 0f; }

        /// <summary>The window pauses during the Slingshot, so you can't miss it mid-move.</summary>
        public void PauseWindow(bool paused) => _windowPaused = paused;

        // =================================================================== Slingshot / KO
        /// <summary>
        /// Shatter-Slingshot impact. ≤10% HP: harbor KO (the ONLY finishing blow). In a window: 20% max HP + knockdown,
        /// window resets. Outside: 6% and he shrugs it off.
        /// </summary>
        public void ApplySlingshot(Vector3 fromDir)
        {
            if (Phase == BossPhase.KO) return;
            if (_hp.Normalized <= 0.10f + 1e-4f) { BeginHarborKO(); return; }
            bool window = WindowOpen;
            var d = new DamageInfo { amount = _hp.maxHP * (window ? 0.20f : 0.06f), kind = "shatter_slingshot", origin = transform.position - fromDir, unblockable = true };
            CloseWindow();
            var before = Phase;
            _hp.TakeDamage(d);
            if (Phase != before && Phase == BossPhase.LastStand) return; // Last Stand took over
            if (window) { MatchDirector.Say("Slither", "Gah!"); Interrupt(Knockdown()); }
            else MatchDirector.Say("Slither", "That tickled.");
        }

        IEnumerator Knockdown()
        {
            CurrentMove = "KNOCKED DOWN";
            StopMove();
            if (_anim != null) _anim.Play("Slither_HitReact_Heavy_Front", 1.6f);
            if (visualRoot != null) visualRoot.localScale = new Vector3(_visualBaseScale.x, _visualBaseScale.y * 0.5f, _visualBaseScale.z);
            yield return new WaitForSeconds(1.6f);
            if (visualRoot != null) visualRoot.localScale = _visualBaseScale;
            _staggerImmuneUntil = Time.time + staggerImmunity;
            CurrentMove = "";
            StartCoroutine(Brain());
        }

        public void BeginHarborKO()
        {
            if (Phase == BossPhase.KO) return;
            StopAllCoroutines();
            Cleanup();
            CloseWindow();
            Kneeling = false;
            SetPhase(BossPhase.KO);
            CurrentMove = "KNOCKOUT";
            _hp.invulnerable = true;
            if (_kb != null) { _kb.suppressAgentRestore = true; _kb.knockbackScale = 0f; }
            if (_ko != null) _ko.BeginKO();
            if (_anim != null) _anim.Hold("Slither_KO_HarborSplash");
            MatchDirector.Say("Slither", "THIS ISN'T OVERRRR—");
            StartCoroutine(KOFlight());
        }

        IEnumerator KOFlight()
        {
            if (_agent != null) _agent.enabled = false;
            // Aim at the closest edge point over the water; the KO camera would hide the travel (§6).
            Vector3 target = transform.position + Vector3.back * 12f + Vector3.down * 3f;
            var edge = FindFirstObjectByType<HarborKOEdge>();
            if (edge != null)
            {
                var b = edge.GetComponent<Collider>().bounds;
                target = new Vector3(Mathf.Clamp(transform.position.x, b.min.x + 3f, b.max.x - 3f), b.center.y, b.center.z);
            }
            Vector3 from = transform.position;
            float dur = 1.4f, t = 0f;
            while (t < dur)
            {
                t += Time.deltaTime;
                float u = Mathf.Clamp01(t / dur);
                Vector3 p = Vector3.Lerp(from, target, u);
                p.y = Mathf.Lerp(from.y, target.y, u) + 4f * 6f * u * (1f - u);
                transform.position = p;
                transform.Rotate(Vector3.right, 360f * Time.deltaTime, Space.Self);
                yield return null;
            }
            // Water contact. HarborKOEdge normally gets here first through its trigger; BossKOSequence fires only once.
            if (_ko != null) _ko.OnWaterContact();
            FxUtil.Ring(new Vector3(transform.position.x, -1.45f, transform.position.z), 8f, FxUtil.ToxicGreen, 3f);
            FxUtil.Sphere(new Vector3(transform.position.x, -1.4f, transform.position.z), 4f, new Color(0.7f, 1f, 0.7f, 0.5f), 1.2f, 2f, true);
            foreach (var r in GetComponentsInChildren<Renderer>()) r.enabled = false;
        }

        // =================================================================== helpers
        void Interrupt(IEnumerator routine)
        {
            StopAllCoroutines();
            Cleanup();
            StartCoroutine(routine);
        }

        void Cleanup()
        {
            if (_line != null) _line.enabled = false;
            if (_reticle != null) Destroy(_reticle);
            EyeFlare(false);
            if (visualRoot != null) visualRoot.localScale = _visualBaseScale;
            ReleaseVictim(Vector3.zero);
            if (_anim != null) _anim.Unhold();
            StopMove();
            CurrentMove = "";
        }

        void OnDamaged(DamageInfo d, float applied)
        {
            if (Phase == BossPhase.Intro || Phase == BossPhase.KO) return;
            float n = _hp.Normalized;
            if (!_wave1 && n <= 0.85f) { _wave1 = true; MatchDirector.Say("Slither", "Vipers! Take them!"); MatchDirector.SpawnWave(1); }
            if (Phase == BossPhase.Phase1 && n <= 0.70f) { SetPhase(BossPhase.Phase2); if (!_gantryDone) _pendingGantry = true; } // Stinger A "Up the Gantry"
            if (Phase == BossPhase.Phase2 && n <= 0.35f && !_enraged) _pendingEnrage = true;                                   // Stinger B "Enrage"
            if (Phase == BossPhase.Phase3 && !_wave3 && n <= 0.25f) { _wave3 = true; MatchDirector.Say("Slither", "Tail! Swarm! Bury them!"); MatchDirector.SpawnWave(3); }
            if (n <= 0.10f + 1e-4f && Phase != BossPhase.LastStand) EnterLastStand();
        }

        void Update()
        {
            if (_windowLeft > 0f && !_windowPaused) _windowLeft = Mathf.Max(0f, _windowLeft - Time.deltaTime);
            if (_crackRing != null)
            {
                if (WindowOpen) { _crackRing.SetActive(true); _crackRing.transform.position = new Vector3(transform.position.x, transform.position.y + 0.03f, transform.position.z); }
                else _crackRing.SetActive(false);
            }
            if (AgentReady)
            {
                _agent.speed = moveSpeed * (Phase >= BossPhase.Phase3 ? 1.15f : 1f);
                if (CurrentMove == "" && _agent.velocity.sqrMagnitude > 0.5f) Face(transform.position + _agent.velocity, turnSpeed);
            }
        }

        void Chase(Health target)
        {
            if (!AgentReady || target == null) return;
            _agent.isStopped = false;
            _agent.SetDestination(target.transform.position);
        }

        void StopMove()
        {
            if (!AgentReady) return;
            _agent.isStopped = true;
            _agent.ResetPath();
        }

        void Face(Vector3 p, float degPerSec)
        {
            Vector3 d = CombatQuery.Flat(p - transform.position);
            if (d.sqrMagnitude < 1e-4f) return;
            transform.rotation = Quaternion.RotateTowards(transform.rotation, Quaternion.LookRotation(d.normalized), degPerSec * Time.deltaTime);
        }

        void EyeFlare(bool on)
        {
            if (eyes == null) return;
            foreach (var e in eyes) FxUtil.Tint(e, on ? FxUtil.ToxicGreen : FxUtil.ToxicGreen * 0.5f, on ? 4f : 0.8f);
        }

        float FlatDist(Vector3 p) => CombatQuery.Flat(p - transform.position).magnitude;

        static Vector3 OnMesh(Vector3 p) => NavMesh.SamplePosition(p, out NavMeshHit h, 4f, NavMesh.AllAreas) ? h.position : p;

        Health FamilyNear(Vector3 p, float r)
        {
            foreach (var h in Health.All)
                if (h != null && h.team == Team.Family && h.IsAlive && h.Identity != null && CombatQuery.Flat(h.transform.position - p).sqrMagnitude <= r * r) return h;
            return null;
        }
    }
}
