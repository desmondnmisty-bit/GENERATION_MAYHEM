// Copyright Dark Logic Studios. Generation Mayhem.
// Vixen melee: light/heavy punch-kick combos, Check (shove), Block, lock-on, aerial strike and ramp slam.
// Input: Input System actions via GMControls (Light / Heavy / Check / Block / LockOn), player slot 0.
// Mouse clicks are bindings on the same actions (LMB=light, RMB=heavy, MMB=lock-on).
// Mapping + remap docs: Assets/Resources/Input/CONTROLS.md.

using System.Collections.Generic;
using UnityEngine;
using GenerationMayhem.Combat;
using GenerationMayhem.Controls;
using GenerationMayhem.Traversal;

namespace GenerationMayhem.Player
{
    [RequireComponent(typeof(SkatePawnController))]
    public class VixenCombat : MonoBehaviour
    {
        [System.Serializable]
        public struct AttackDef
        {
            public string name, anim;
            public float damage, windup, recovery, radius, reach, knockForce, knockUp, stun;
            public bool shove;
        }

        // Input (keyboard / mouse / pad) lives in Assets/Resources/Input/GMControls.inputactions:
        // Light = K / LMB / X-Square · Heavy = L / RMB / Y-Triangle · Check = E / B-Circle ·
        // Block = Q / LB-L1 (hold) · Lock-on = Tab / MMB / RB-R1. Rebind via pause menu / settings.

        [Header("Light chain: jab → cross → kick")]
        public AttackDef[] lightChain =
        {
            new AttackDef { name = "Jab",   anim = "Attack_Punch_L", damage = 14, windup = 0.08f, recovery = 0.22f, radius = 1.1f, reach = 1.2f, knockForce = 2f, knockUp = 0f, stun = 0.25f },
            new AttackDef { name = "Cross", anim = "Attack_Punch_R", damage = 16, windup = 0.10f, recovery = 0.26f, radius = 1.1f, reach = 1.25f, knockForce = 2.5f, knockUp = 0f, stun = 0.3f },
            new AttackDef { name = "Kick",  anim = "Attack_Kick_L",  damage = 24, windup = 0.14f, recovery = 0.40f, radius = 1.3f, reach = 1.4f, knockForce = 7f, knockUp = 1.5f, stun = 0.5f, shove = true },
        };
        [Header("Heavy chain: elbow → heavy kick")]
        public AttackDef[] heavyChain =
        {
            new AttackDef { name = "Heavy Punch", anim = "Attack_Elbow",  damage = 32, windup = 0.22f, recovery = 0.42f, radius = 1.3f, reach = 1.3f, knockForce = 5f, knockUp = 1f, stun = 0.45f },
            new AttackDef { name = "Heavy Kick",  anim = "Attack_Kick_R", damage = 45, windup = 0.28f, recovery = 0.55f, radius = 1.4f, reach = 1.5f, knockForce = 10f, knockUp = 2.5f, stun = 0.7f, shove = true },
        };
        public AttackDef check = new AttackDef { name = "Check", anim = "Check_R", damage = 10, windup = 0.10f, recovery = 0.35f, radius = 1.3f, reach = 1.2f, knockForce = 9f, knockUp = 0.5f, stun = 0.5f, shove = true };
        public float comboWindow = 0.55f;
        public float inputBuffer = 0.25f;

        [Header("Air (§3.6)")]
        public float aerialMultiplier = 1.5f;
        public float rampSlamDownSpeed = -22f;
        public float rampSlamDamage = 60f;
        public float rampSlamRadius = 3.5f;

        [Header("Block / lock-on")]
        [Range(0f, 1f)] public float blockDamageTaken = 0.3f;
        public float lockRange = 18f;
        public float softAimRange = 3.5f;
        public float reviveRange = 2.5f;
        [Range(0f, 1f)] public float checkReviveFraction = 0.5f;

        public Health LockTarget { get; private set; }
        public bool IsBlocking { get; private set; }
        public bool IsAttacking => Time.time < _busyUntil;
        public string LastAttackName { get; private set; } = "";

        SkatePawnController _pawn;
        SkaterTraversal _trav;
        GMControls _controls;
        GMControls Controls => _controls ?? (_controls = GMControls.For(0));
        Health _hp;
        KnockbackBody _kb;
        FighterAnimator _anim;
        ShatterSlingshotStub _synergy;

        float _busyUntil, _strikeAt, _comboUntil, _bufferUntil;
        int _lightIdx, _heavyIdx;
        AttackDef _pending; bool _hasPending; bool _pendingAerial;
        enum Buffered { None, Light, Heavy, Check }
        Buffered _buffered;
        bool _slamPending;
        readonly List<Health> _hits = new List<Health>();

        /// <summary>Set by the match (pre-match freeze, end screens, Slingshot plant).</summary>
        public bool CombatLocked { get; set; }

        void Awake()
        {
            _pawn = GetComponent<SkatePawnController>();
            _trav = GetComponent<SkaterTraversal>();
            _hp = GetComponent<Health>();
            _kb = GetComponent<KnockbackBody>();
            _anim = GetComponent<FighterAnimator>();
        }

        void Start()
        {
            _synergy = FindFirstObjectByType<ShatterSlingshotStub>();
            if (_hp != null) _hp.modifier += BlockModifier;
        }

        void OnDestroy() { if (_hp != null) _hp.modifier -= BlockModifier; }

        float BlockModifier(ref DamageInfo d)
        {
            if (!IsBlocking || d.unblockable) return 1f;
            Vector3 toSrc = CombatQuery.Flat(d.origin - transform.position);
            if (toSrc.sqrMagnitude > 1e-4f && Vector3.Dot(transform.forward, toSrc.normalized) < 0.1f) return 1f; // from behind
            d.knockForce *= 0.25f; d.knockUp = 0f; d.stun = 0f;
            return blockDamageTaken;
        }

        void Update()
        {
            bool down = _hp != null && !_hp.IsAlive;
            bool pinned = _kb != null && _kb.Pinned;
            _pawn.InputLocked = down || pinned || CombatLocked;
            if (down || pinned || CombatLocked) { IsBlocking = false; _hasPending = false; _pawn.SpeedMultiplier = 1f; return; }

            bool stunned = _kb != null && _kb.IsStunned;
            TickLock();

            // Block (hold)
            bool wasBlocking = IsBlocking;
            IsBlocking = !stunned && !IsAttacking && Controls.Block.IsPressed() && (_trav == null || _trav.State == SkaterTraversal.TraversalState.Ground);
            _pawn.SpeedMultiplier = (IsBlocking ? 0.5f : 1f) * Match.MistCloud.SlowFactorAt(transform.position, true);
            if (IsBlocking && !wasBlocking && _anim != null) _anim.Play("Block", 0.4f);

            // Inputs → buffer. Heavy is swallowed while pad block is held so the legacy
            // Shatter-Slingshot combo (hold LB + press Y) doesn't buffer a heavy, same as before.
            if (Controls.LightAttack.WasPressedThisFrame()) { _buffered = Buffered.Light; _bufferUntil = Time.time + inputBuffer; }
            if (Controls.HeavyAttack.WasPressedThisFrame() && !GMControls.HeldOnGamepad(Controls.Block)) { _buffered = Buffered.Heavy; _bufferUntil = Time.time + inputBuffer; }
            if (Controls.Check.WasPressedThisFrame()) { _buffered = Buffered.Check; _bufferUntil = Time.time + inputBuffer; }
            if (Time.time > _bufferUntil) _buffered = Buffered.None;

            // Resolve a pending strike on its active frame
            if (_hasPending && Time.time >= _strikeAt) ResolveStrike();

            // Ramp slam lands
            if (_slamPending && (_trav == null || _trav.State == SkaterTraversal.TraversalState.Ground) && _pawn.IsGrounded) RampSlamImpact();

            if (stunned || IsAttacking || IsBlocking || _buffered == Buffered.None) return;
            var b = _buffered; _buffered = Buffered.None;
            bool inAir = _trav != null && _trav.State == SkaterTraversal.TraversalState.Air;

            if (b == Buffered.Check) { DoCheck(); return; }
            if (inAir)
            {
                if (b == Buffered.Heavy && _trav.AirFromRamp && !_slamPending) { BeginRampSlam(); return; }
                var a = b == Buffered.Heavy ? heavyChain[0] : lightChain[lightChain.Length - 1];
                a.name = "Aerial Strike"; a.damage *= aerialMultiplier; a.knockUp = -1f; a.stun = 0.8f; a.shove = true;
                Begin(a, aerial: true);
                return;
            }
            if (Time.time > _comboUntil) { _lightIdx = 0; _heavyIdx = 0; }
            if (b == Buffered.Light) { Begin(lightChain[_lightIdx], false); _lightIdx = (_lightIdx + 1) % lightChain.Length; _heavyIdx = 0; }
            else { Begin(heavyChain[_heavyIdx], false); _heavyIdx = (_heavyIdx + 1) % heavyChain.Length; _lightIdx = 0; }
        }

        void Begin(AttackDef a, bool aerial)
        {
            FaceTarget();
            _pending = a; _hasPending = true; _pendingAerial = aerial;
            _strikeAt = Time.time + a.windup;
            _busyUntil = Time.time + a.windup + a.recovery;
            _comboUntil = _busyUntil + comboWindow;
            LastAttackName = a.name;
            if (_anim != null) _anim.Play(a.anim, a.windup + a.recovery);
        }

        void ResolveStrike()
        {
            _hasPending = false;
            var a = _pending;
            Vector3 center = transform.position + Vector3.up * 1f + transform.forward * a.reach;
            var info = DamageInfo.Make(a.damage, gameObject, _pendingAerial ? "aerial_strike" : a.name.ToLowerInvariant().Replace(' ', '_'));
            info.knockForce = a.knockForce; info.knockUp = Mathf.Max(0f, a.knockUp); info.stun = a.stun; info.shove = a.shove;
            info.knockDir = transform.forward;
            _hits.Clear();
            CombatQuery.Strike(Team.Family, center, a.radius, info, _hits);
            foreach (var h in _hits)
            {
                if (_synergy != null) _synergy.ContributeSynergyOnHitOrAssist();
                if (_pendingAerial) TraversalEvents.RaiseAerialStrike(gameObject, h.gameObject);
            }
        }

        // ---- Check: shove + Check-revive + break Viper-Lock ----
        void DoCheck()
        {
            // Check-revive a downed family fighter in reach (boss spec §8: Vixen or Kailee can Check-revive).
            foreach (var h in Health.All)
            {
                if (h == null || h == _hp || h.team != Team.Family || !h.IsDown) continue;
                if ((h.transform.position - transform.position).sqrMagnitude > reviveRange * reviveRange) continue;
                h.Revive(checkReviveFraction);
                Match.MatchDirector.Say("Vixen", "Up. Now.");
                _busyUntil = Time.time + 0.5f;
                if (_anim != null) _anim.Play("Check_L", 0.5f);
                return;
            }
            // Partner Check breaks Slither's Viper-Lock (staggers him, 3 s window).
            var boss = Match.SlitherBoss.Instance;
            if (boss != null && boss.LockVictim != null && boss.LockVictim != _hp &&
                (boss.transform.position - transform.position).sqrMagnitude <= 3.5f * 3.5f)
            {
                boss.BreakLock(gameObject);
                _busyUntil = Time.time + 0.5f;
                if (_anim != null) _anim.Play("Check_R", 0.5f);
                return;
            }
            Begin(check, false);
        }

        // ---- Ramp slam ----
        void BeginRampSlam()
        {
            _slamPending = true;
            LastAttackName = "Ramp Slam";
            _pawn.SetVelocity(_pawn.PlanarVelocity * 0.35f + Vector3.up * rampSlamDownSpeed);
            _busyUntil = Time.time + 2f; // released on impact
            if (_anim != null) _anim.Play("Land", 0.6f);
        }

        void RampSlamImpact()
        {
            _slamPending = false;
            _busyUntil = Time.time + 0.35f;
            var info = DamageInfo.Make(rampSlamDamage, gameObject, "ramp_slam");
            info.knockForce = 8f; info.knockUp = 3f; info.stun = 0.8f; info.shove = true;
            _hits.Clear();
            CombatQuery.Strike(Team.Family, transform.position + Vector3.up * 0.5f, rampSlamRadius, info, _hits);
            TraversalEvents.RaiseRampSlam(gameObject, transform.position);
            if (_synergy != null) foreach (var _ in _hits) _synergy.ContributeSynergyOnHitOrAssist();
        }

        // ---- Lock-on ----
        void TickLock()
        {
            if (Controls.LockOn.WasPressedThisFrame())
                LockTarget = LockTarget != null ? null : CombatQuery.NearestEnemy(Team.Family, transform.position, lockRange);
            if (LockTarget != null && (!LockTarget.IsAlive || (LockTarget.transform.position - transform.position).sqrMagnitude > (lockRange * 1.5f) * (lockRange * 1.5f)))
                LockTarget = null;
        }

        void FaceTarget()
        {
            Health t = LockTarget;
            if (t == null)
            {
                var near = CombatQuery.NearestEnemy(Team.Family, transform.position, softAimRange);
                if (near != null && Vector3.Dot(transform.forward, CombatQuery.Flat(near.transform.position - transform.position).normalized) > 0f) t = near;
            }
            if (t == null) return;
            Vector3 d = CombatQuery.Flat(t.transform.position - transform.position);
            if (d.sqrMagnitude > 1e-4f) transform.rotation = Quaternion.LookRotation(d.normalized, Vector3.up);
        }
    }
}
