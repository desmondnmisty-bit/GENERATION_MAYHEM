// Copyright Dark Logic Studios. Generation Mayhem.
// CityBlock slice — shared traversal/match events (CityBlock_Arena_Traversal_v001 §3, Slither_Boss_Fight_v002 §7).

using System;
using UnityEngine;

namespace GenerationMayhem.Traversal
{
    /// <summary>Who a fighter is, for link filtering, hazard rules and KO handling.</summary>
    public enum FighterRole
    {
        Hero,       // player-controlled family fighter
        Ally,       // AI family fighter (Kailee AI, Brianna, Payton, Payton)
        Grunt,      // generic Pink Viper / Swarm
        Fang,       // agile Viper: may use the container gap link
        TailStrike, // heavy Viper: never jumps gaps
        Cobra,      // sniper Viper
        Boss        // Slither
    }

    /// <summary>Static event hub. Keep payloads tiny so 2P host-authoritative sync can mirror them later.</summary>
    public static class TraversalEvents
    {
        /// <summary>Clean trick landed (fighter, trickIndex 0..3).</summary>
        public static event Action<GameObject, int> TrickLanded;
        /// <summary>Bail on landing (fighter). 0.6 s stumble is applied by SkaterTraversal.</summary>
        public static event Action<GameObject> TrickBailed;
        /// <summary>Gap jump result (fighter, cleared).</summary>
        public static event Action<GameObject, bool> GapJumpResolved;
        /// <summary>Fighter checked into a breakable (fighter, damageMultiplier = 1.10).</summary>
        public static event Action<GameObject, float> CheckedIntoBreakable;
        /// <summary>Toxic Slip on the boss (Slither shoved into a toxic slick → stagger). Combat owns the stagger.</summary>
        public static event Action<GameObject> ToxicSlip;
        /// <summary>Boss checked into a NON-toxic slick (Phase 1–2 oil stagger, boss spec §7).</summary>
        public static event Action<GameObject> CheckedIntoOil;
        /// <summary>Wall-slam into a barricade (fighter, barrier) → grunt stagger. Combat owns the stagger.</summary>
        public static event Action<GameObject, GameObject> WallSlam;
        /// <summary>Family fighter fell in the harbor: respawn on quay in 2 s, lose 10% max HP. Not a match loss.</summary>
        public static event Action<GameObject> HeroFellInHarbor;
        /// <summary>Grunt knocked into the harbor: out of the match.</summary>
        public static event Action<GameObject> GruntOutOfMatch;
        /// <summary>Per-frame while grinding (fighter, deltaTime). Feeds grind-second meter gain.</summary>
        public static event Action<GameObject, float> GrindTick;
        /// <summary>Boss fell in the harbor WITHOUT an active Slingshot KO: pushed to nearest quay (boss, stunSeconds). Not a win.</summary>
        public static event Action<GameObject, float> BossHarborBounce;
        /// <summary>Hazard damage request (target, amount, sourceTag). Combat/health system subscribes.</summary>
        public static event Action<GameObject, float, string> HazardDamage;
        /// <summary>Aerial strike landed from the air (attacker, victim). §3.6 ramp air → aerial strike.</summary>
        public static event Action<GameObject, GameObject> AerialStrike;
        /// <summary>Ramp slam impact (attacker, impact point). §3.6 ramp air → ramp slam.</summary>
        public static event Action<GameObject, Vector3> RampSlam;

        /// <summary>
        /// LOCKED win rule: fired ONLY by the KO clip SLB_Slither_KO_HarborSplash at water contact.
        /// VictoryController listens to this and nothing else.
        /// </summary>
        public static event Action BossKnockedOut;

        public const string BossKnockedOutId = "boss_knocked_out";

        public static void RaiseTrickLanded(GameObject f, int trick) => TrickLanded?.Invoke(f, trick);
        public static void RaiseTrickBailed(GameObject f) => TrickBailed?.Invoke(f);
        public static void RaiseGapJump(GameObject f, bool cleared) => GapJumpResolved?.Invoke(f, cleared);
        public static void RaiseCheckedIntoBreakable(GameObject f, float mult) => CheckedIntoBreakable?.Invoke(f, mult);
        public static void RaiseToxicSlip(GameObject boss) => ToxicSlip?.Invoke(boss);
        public static void RaiseCheckedIntoOil(GameObject boss) => CheckedIntoOil?.Invoke(boss);
        public static void RaiseWallSlam(GameObject f, GameObject barrier) => WallSlam?.Invoke(f, barrier);
        public static void RaiseHeroFellInHarbor(GameObject f) => HeroFellInHarbor?.Invoke(f);
        public static void RaiseGruntOutOfMatch(GameObject f) => GruntOutOfMatch?.Invoke(f);
        public static void RaiseGrindTick(GameObject f, float dt) => GrindTick?.Invoke(f, dt);
        public static void RaiseBossHarborBounce(GameObject boss, float stun) => BossHarborBounce?.Invoke(boss, stun);
        public static void RaiseHazardDamage(GameObject t, float amt, string src) => HazardDamage?.Invoke(t, amt, src);
        public static void RaiseAerialStrike(GameObject attacker, GameObject victim) => AerialStrike?.Invoke(attacker, victim);
        public static void RaiseRampSlam(GameObject attacker, Vector3 point) => RampSlam?.Invoke(attacker, point);

        /// <summary>Call from the KO clip's animation event / KO sequence at water contact. Nothing else should.</summary>
        public static void RaiseBossKnockedOut()
        {
            Debug.Log("[Traversal] " + BossKnockedOutId);
            BossKnockedOut?.Invoke();
        }
    }
}
