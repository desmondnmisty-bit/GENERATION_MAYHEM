// Copyright Dark Logic Studios. Generation Mayhem.
// Placeholder meter gains from traversal (design answer Oct 12, 2026). All tuning lives in this asset.

using UnityEngine;

namespace GenerationMayhem.Traversal
{
    [CreateAssetMenu(menuName = "Generation Mayhem/Traversal Chaos Config", fileName = "TraversalChaosConfig")]
    public class TraversalChaosConfig : ScriptableObject
    {
        [Header("Per clean trick (normalized 0..1)")]
        [Range(0f, 0.2f)] public float synergyPerTrick = 0.03f;
        [Range(0f, 0.2f)] public float momsChaosPerTrick = 0.01f;
        [Tooltip("Extra Mom's Chaos per trick when the trickster is Kailee (§3.1 +2% total).")]
        [Range(0f, 0.2f)] public float kaileeMomsChaosBonusPerTrick = 0.01f;

        [Header("Per grind second (normalized 0..1)")]
        [Range(0f, 0.1f)] public float synergyPerGrindSecond = 0.01f;
        [Range(0f, 0.1f)] public float momsChaosPerGrindSecond = 0.003f;

        [Header("Cap (traversal-sourced only; damage-sourced Chaos is uncapped)")]
        [Range(0f, 1f)] public float capPerWindow = 0.15f;
        public float capWindowSeconds = 10f;
    }
}
