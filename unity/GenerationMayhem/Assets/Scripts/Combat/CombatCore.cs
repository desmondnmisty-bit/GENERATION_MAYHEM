// Copyright Dark Logic Studios. Generation Mayhem.
// Shared combat types: teams, damage payload, static combat events, sphere-strike query.

using System;
using System.Collections.Generic;
using UnityEngine;
using GenerationMayhem.Traversal;

namespace GenerationMayhem.Combat
{
    public enum Team { Family, Vipers }

    /// <summary>One hit. Knockback is computed per victim: knockDir if set, otherwise away from origin.</summary>
    public struct DamageInfo
    {
        public float amount;
        public GameObject source;
        public string kind;          // "light", "heavy", "aerial_strike", "ramp_slam", "toxic_oil", "venom_lash", ...
        public Vector3 origin;       // where the hit came from (for knockback + block facing)
        public Vector3 knockDir;     // optional fixed direction (flat); zero = radial from origin
        public float knockForce;     // m/s planar
        public float knockUp;        // m/s vertical
        public float stun;           // seconds
        public bool shove;           // marks ShoveState: oil → slide / Toxic Slip, breakable → +10%, barrier → wall-slam
        public bool aiFinisher;      // AI-ally finisher: Slither takes 50% outside a Shatter Window (boss spec §6)
        public bool unblockable;

        public static DamageInfo Make(float amount, GameObject source, string kind)
        {
            var d = new DamageInfo { amount = amount, source = source, kind = kind };
            if (source != null) d.origin = source.transform.position;
            return d;
        }
    }

    /// <summary>Static hub. HUD, barks and the match director listen here.</summary>
    public static class CombatEvents
    {
        public static event Action<Health, DamageInfo, float> Damaged;
        public static event Action<Health> Downed;
        public static event Action<Health> Revived;
        public static event Action<Health> Died;

        public static void RaiseDamaged(Health h, DamageInfo d, float applied) => Damaged?.Invoke(h, d, applied);
        public static void RaiseDowned(Health h) => Downed?.Invoke(h);
        public static void RaiseRevived(Health h) => Revived?.Invoke(h);
        public static void RaiseDied(Health h) => Died?.Invoke(h);
    }

    /// <summary>Sphere strikes against Hurtboxes / Health of the other team. Also cracks breakables in range.</summary>
    public static class CombatQuery
    {
        static readonly Collider[] Buf = new Collider[96];
        static readonly HashSet<Health> Seen = new HashSet<Health>();
        static readonly HashSet<Breakable> SeenBreakables = new HashSet<Breakable>();

        public static int Strike(Team attackerTeam, Vector3 center, float radius, DamageInfo info,
                                 List<Health> hitsOut = null, HashSet<Health> exclude = null, bool hitBreakables = true,
                                 bool hitBothTeams = false)
        {
            Seen.Clear(); SeenBreakables.Clear();
            int n = Physics.OverlapSphereNonAlloc(center, radius, Buf, ~0, QueryTriggerInteraction.Collide);
            int count = 0;
            for (int i = 0; i < n; i++)
            {
                var c = Buf[i];
                if (c == null) continue;
                if (hitBreakables)
                {
                    var br = c.GetComponentInParent<Breakable>();
                    if (br != null) { if (SeenBreakables.Add(br)) br.Hit(); continue; }
                }
                var hb = c.GetComponentInParent<Hurtbox>();
                Health h = hb != null ? hb.health : c.GetComponentInParent<Health>();
                if (h == null || !h.IsAlive || !Seen.Add(h)) continue;
                if (!hitBothTeams && h.team == attackerTeam) continue;
                if (info.source != null && h.gameObject == info.source) continue;
                if (exclude != null && exclude.Contains(h)) continue;
                var d = info;
                if (hb != null) d.amount *= hb.multiplier;
                h.TakeDamage(d);
                count++; hitsOut?.Add(h);
                exclude?.Add(h);
            }
            return count;
        }

        /// <summary>Nearest living enemy fighter (has a FighterIdentity, other team) within range.</summary>
        public static Health NearestEnemy(Team myTeam, Vector3 from, float range, bool fightersOnly = true)
        {
            Health best = null; float bestD = range * range;
            foreach (var h in Health.All)
            {
                if (h == null || h.team == myTeam || !h.IsAlive) continue;
                if (fightersOnly && h.Identity == null) continue;
                float d = (h.transform.position - from).sqrMagnitude;
                if (d < bestD) { bestD = d; best = h; }
            }
            return best;
        }

        public static int CountEnemies(Team myTeam, Vector3 from, float range)
        {
            int c = 0; float r2 = range * range;
            foreach (var h in Health.All)
                if (h != null && h.team != myTeam && h.IsAlive && h.Identity != null && (h.transform.position - from).sqrMagnitude <= r2) c++;
            return c;
        }

        public static Vector3 Flat(Vector3 v) { v.y = 0f; return v; }
    }
}
