// Copyright Dark Logic Studios. Generation Mayhem.
// Health for every fighter (and mist walls). Family fighters go DOWN (8 s / 25% self-recover), Vipers die,
// Slither has an HP floor (1%): only boss_knocked_out ends the match.

using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using GenerationMayhem.Traversal;

namespace GenerationMayhem.Combat
{
    [DisallowMultipleComponent]
    public class Health : MonoBehaviour
    {
        public static readonly List<Health> All = new List<Health>();

        public Team team = Team.Vipers;
        public string displayName = "";
        public float maxHP = 100f;
        [SerializeField] float current = -1f;

        [Header("Down / death")]
        [Tooltip("Family fighters: downed instead of dead. Self-recover after downedRecoverSeconds at recoverFraction (boss spec §8).")]
        public bool downInsteadOfDie;
        public float downedRecoverSeconds = 8f;
        [Range(0f, 1f)] public float recoverFraction = 0.25f;
        [Tooltip("HP never drops below this fraction. Slither = 0.01.")]
        [Range(0f, 1f)] public float minHPFraction;
        public float deactivateAfterDeath = 1.5f;

        [Header("Modifiers")]
        public bool invulnerable;
        public float incomingMultiplier = 1f;

        /// <summary>Per-hit multiplier hook (block, Shatter Window rules). May edit the hit (e.g. cancel knockback).</summary>
        public delegate float DamageModifier(ref DamageInfo info);
        public DamageModifier modifier;

        public event Action<DamageInfo, float> onDamaged;
        public event Action onDown, onRevive, onDeath;

        public float Current => current;
        public float Normalized => maxHP > 0f ? Mathf.Clamp01(current / maxHP) : 0f;
        public bool IsDown { get; private set; }
        public bool IsDead { get; private set; }
        public bool IsAlive => !IsDown && !IsDead && isActiveAndEnabled;
        public float DownedTimeLeft => IsDown ? Mathf.Max(0f, downedRecoverSeconds - (Time.time - _downAt)) : 0f;
        public float LastHitAmount { get; private set; }
        public float LastHitTime { get; private set; } = -99f;
        /// <summary>Overwatch Lock heat tag: ×1.5 damage taken while heated.</summary>
        public float HeatedUntil { get; set; }
        public bool IsHeated => Time.time < HeatedUntil;
        public FighterIdentity Identity { get; private set; }
        public bool IsKailee => Identity != null && Identity.isKailee;

        KnockbackBody _kb;
        ShoveState _shove;
        float _downAt;

        void Awake()
        {
            if (current < 0f) current = maxHP;
            Identity = GetComponent<FighterIdentity>();
            _kb = GetComponent<KnockbackBody>();
            _shove = GetComponent<ShoveState>();
        }

        void OnEnable()
        {
            if (!All.Contains(this)) All.Add(this);
            TraversalEvents.HazardDamage += OnHazard;
            TraversalEvents.HeroFellInHarbor += OnFellInHarbor;
            TraversalEvents.CheckedIntoBreakable += OnCheckedIntoBreakable;
        }

        void OnDisable()
        {
            All.Remove(this);
            TraversalEvents.HazardDamage -= OnHazard;
            TraversalEvents.HeroFellInHarbor -= OnFellInHarbor;
            TraversalEvents.CheckedIntoBreakable -= OnCheckedIntoBreakable;
        }

        /// <summary>Apply a hit. Returns HP actually removed.</summary>
        public float TakeDamage(DamageInfo d)
        {
            if (IsDead || IsDown || invulnerable || d.amount <= 0f) return 0f;
            float mult = incomingMultiplier * (IsHeated ? 1.5f : 1f);
            if (modifier != null) mult *= modifier(ref d);
            float amount = d.amount * mult;
            float floor = maxHP * minHPFraction;
            float before = current;
            current = Mathf.Max(floor, current - amount);
            float applied = before - current;
            LastHitAmount = amount; LastHitTime = Time.time;

            // Mom's Chaos: one team meter, filled mainly by Kailee taking hits (design answer Oct 12).
            if (team == Team.Family && amount > 0f && MomsChaosMeter.Instance != null)
                MomsChaosMeter.Instance.ReportDamage(IsKailee, amount);

            onDamaged?.Invoke(d, applied);
            CombatEvents.RaiseDamaged(this, d, applied);

            if (amount > 0f)
            {
                Vector3 dir = d.knockDir.sqrMagnitude > 1e-4f ? CombatQuery.Flat(d.knockDir).normalized
                                                            : CombatQuery.Flat(transform.position - d.origin).normalized;
                if (dir.sqrMagnitude < 1e-4f) dir = -transform.forward;
                Vector3 kv = dir * d.knockForce + Vector3.up * d.knockUp;
                if (_kb != null && (kv.sqrMagnitude > 0.01f || d.stun > 0f)) _kb.Apply(kv, d.stun, d.shove);
                else if (d.shove && _shove != null) _shove.MarkShoved(dir);
            }

            if (current <= 0f)
            {
                if (downInsteadOfDie) GoDown();
                else Die();
            }
            return applied;
        }

        /// <summary>Runtime setup (spawned Vipers, mist walls): set max HP and refill.</summary>
        public void SetMax(float max)
        {
            maxHP = Mathf.Max(1f, max);
            current = maxHP;
        }

        public void Heal(float amount)
        {
            if (IsDead || IsDown || amount <= 0f) return;
            current = Mathf.Min(maxHP, current + amount);
        }

        /// <summary>Check-revive (Vixen/Kailee) or self-recover.</summary>
        public void Revive(float fraction)
        {
            if (!IsDown) return;
            IsDown = false;
            current = Mathf.Max(1f, maxHP * fraction);
            onRevive?.Invoke();
            CombatEvents.RaiseRevived(this);
        }

        public void ResetFull()
        {
            IsDown = false; IsDead = false; current = maxHP;
        }

        void GoDown()
        {
            if (IsDown) return;
            IsDown = true;
            current = 0f;
            _downAt = Time.time;
            onDown?.Invoke();
            CombatEvents.RaiseDowned(this);
        }

        void Die()
        {
            if (IsDead) return;
            IsDead = true;
            current = 0f;
            onDeath?.Invoke();
            CombatEvents.RaiseDied(this);
            if (deactivateAfterDeath >= 0f) StartCoroutine(DeactivateLater());
        }

        IEnumerator DeactivateLater()
        {
            yield return new WaitForSeconds(deactivateAfterDeath);
            gameObject.SetActive(false);
        }

        /// <summary>Out of the match without HP loss (grunt in the harbor).</summary>
        public void RemoveFromMatch()
        {
            if (IsDead) return;
            IsDead = true;
            current = 0f;
            onDeath?.Invoke();
            CombatEvents.RaiseDied(this);
        }

        void Update()
        {
            if (IsDown && Time.time - _downAt >= downedRecoverSeconds) Revive(recoverFraction);
        }

        // ---- Traversal hooks ----
        // Toxic oil DoT (Phase 3 only, ToxicOil.isToxic) and any other hazard damage request.
        void OnHazard(GameObject target, float amount, string source)
        {
            if (target != gameObject) return;
            TakeDamage(new DamageInfo { amount = amount, kind = source, origin = transform.position });
        }

        // Fell in the harbor: respawn on the quay (HarborKOEdge), lose 10% max HP. Not a match loss.
        void OnFellInHarbor(GameObject f)
        {
            if (f != gameObject) return;
            TakeDamage(new DamageInfo { amount = maxHP * 0.10f, kind = "harbor_fall", origin = transform.position, unblockable = true });
        }

        // Checked/knocked into a breakable: that hit does +10% (Breakable.checkedIntoDamageMultiplier = 1.10).
        void OnCheckedIntoBreakable(GameObject f, float mult)
        {
            if (f != gameObject || mult <= 1f || Time.time - LastHitTime > 1.5f || LastHitAmount <= 0f) return;
            TakeDamage(new DamageInfo { amount = LastHitAmount * (mult - 1f), kind = "breakable_bonus", origin = transform.position, unblockable = true });
        }
    }
}
