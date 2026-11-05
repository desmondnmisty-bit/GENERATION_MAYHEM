// Copyright Dark Logic Studios. Generation Mayhem.
// LOCKED win rule: victory fires ONLY on boss_knocked_out (Slither_Boss_Fight_v002 §7).

using UnityEngine;
using UnityEngine.Events;

namespace GenerationMayhem.Traversal
{
    /// <summary>
    /// Subscribes to TraversalEvents.BossKnockedOut and nothing else. Not HP, not timers, not wave clears,
    /// not the harbor trigger directly. Wire the ref VO, crowd, mist-gate drop and sting on onVictory.
    /// </summary>
    public class VictoryController : MonoBehaviour
    {
        public UnityEvent onVictory = new UnityEvent();
        [Tooltip("Mist walls that seal the Crane Yard; disabled on victory.")]
        public GameObject[] mistGates;
        public bool HasWon { get; private set; }

        void OnEnable() => TraversalEvents.BossKnockedOut += OnBossKnockedOut;
        void OnDisable() => TraversalEvents.BossKnockedOut -= OnBossKnockedOut;

        void OnBossKnockedOut()
        {
            if (HasWon) return;
            HasWon = true;
            Debug.Log("[Victory] Ref: \"Slither's in the water! Knockout! The family takes the match!\"");
            if (mistGates != null) foreach (var g in mistGates) if (g != null) g.SetActive(false);
            onVictory.Invoke();
        }
    }
}
