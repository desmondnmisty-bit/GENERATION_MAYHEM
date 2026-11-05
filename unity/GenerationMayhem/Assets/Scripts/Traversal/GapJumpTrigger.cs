// Copyright Dark Logic Studios. Generation Mayhem.
// §3.4 Container gap (5 m) off K2. Fail = fall into the lower aisle (no damage, just slower).

using UnityEngine;

namespace GenerationMayhem.Traversal
{
    /// <summary>
    /// Two trigger volumes: Mode.Clear on the far landing deck, Mode.Fail in the lower aisle under the gap.
    /// No damage either way — the aisle floor is real geometry and the skater just rolls out of it.
    /// </summary>
    [RequireComponent(typeof(Collider))]
    public class GapJumpTrigger : MonoBehaviour
    {
        public enum Mode { Clear, Fail }
        public Mode mode = Mode.Fail;
        public string gapId = "GapB";
        [Tooltip("Fail: planar speed multiplier applied once (\"just slower\").")]
        [Range(0.2f, 1f)] public float failSpeedMultiplier = 0.6f;

        void Awake() => GetComponent<Collider>().isTrigger = true;

        void OnTriggerEnter(Collider other)
        {
            var skater = other.GetComponentInParent<SkaterTraversal>();
            if (skater != null)
            {
                if (mode == Mode.Clear)
                {
                    if (skater.State == SkaterTraversal.TraversalState.Air) TraversalEvents.RaiseGapJump(skater.gameObject, true);
                }
                else
                {
                    var p = skater.Pawn;
                    p.SetVelocity(p.PlanarVelocity * failSpeedMultiplier + Vector3.up * p.VerticalSpeed);
                    TraversalEvents.RaiseGapJump(skater.gameObject, false);
                }
                return;
            }
            var id = other.GetComponentInParent<FighterIdentity>();
            if (id != null) TraversalEvents.RaiseGapJump(id.gameObject, mode == Mode.Clear);
        }
    }
}
