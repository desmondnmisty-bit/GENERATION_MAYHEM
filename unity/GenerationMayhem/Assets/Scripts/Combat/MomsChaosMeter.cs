// Copyright Dark Logic Studios. Generation Mayhem.
// Mom's Chaos — ONE team meter (design answer Oct 12, 2026). Powers Vixen's Shatter-Slingshot (chaos_meter: 1.0).

using UnityEngine;
using UnityEngine.Events;

namespace GenerationMayhem.Combat
{
    [System.Serializable] public class ChaosChangedEvent : UnityEvent<float> { }

    /// <summary>
    /// Scene singleton, normalized 0..1. Fills mainly when Kailee takes hits (ReportDamage); other family
    /// fighters' hits add a smaller amount; tricks/grinds add a little through TrickChaosGain (capped there).
    /// ShatterSlingshotStub checks IsFull before Vixen can plant, and calls Spend() on launch.
    /// </summary>
    public class MomsChaosMeter : MonoBehaviour
    {
        public static MomsChaosMeter Instance { get; private set; }

        [SerializeField, Range(0f, 1f)] float current;
        [Tooltip("Normalized gain per 1 damage unit Kailee takes (placeholder: 300 dmg ≈ full).")]
        [SerializeField] float kaileeHitGainPerDamage = 1f / 220f; // placeholder: Kailee HP 300, ~220 damage taken ≈ full
        [Tooltip("Normalized gain per 1 damage unit any OTHER family fighter takes.")]
        [SerializeField] float otherFamilyHitGainPerDamage = 1f / 1500f;

        public ChaosChangedEvent onChanged = new ChaosChangedEvent();
        public UnityEvent onFull = new UnityEvent();

        public float Normalized => current;
        public bool IsFull => current >= 1f - 1e-4f;

        void Awake()
        {
            if (Instance != null && Instance != this) { Debug.LogWarning("[MomsChaos] Second meter in scene; disabling " + name); enabled = false; return; }
            Instance = this;
        }

        void OnDestroy() { if (Instance == this) Instance = null; }

        // Health.TakeDamage is the ONE reporter (combat hits AND hazard damage such as the Phase 3 oil DoT),
        // so the meter no longer listens to TraversalEvents.HazardDamage itself (that would double-count).

        /// <summary>Call from the damage system whenever a family fighter takes damage.</summary>
        public void ReportDamage(bool victimIsKailee, float damage)
        {
            if (damage <= 0f) return;
            Add(damage * (victimIsKailee ? kaileeHitGainPerDamage : otherFamilyHitGainPerDamage));
        }

        /// <summary>Raw normalized add (TrickChaosGain uses this after its own cap).</summary>
        public void Add(float normalized)
        {
            if (normalized <= 0f) return;
            bool wasFull = IsFull;
            current = Mathf.Clamp01(current + normalized);
            onChanged.Invoke(current);
            if (!wasFull && IsFull) onFull.Invoke();
        }

        public void Spend()
        {
            current = 0f;
            onChanged.Invoke(current);
        }
    }
}
