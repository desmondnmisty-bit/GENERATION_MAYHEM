// Copyright Dark Logic Studios. Generation Mayhem.
// §4 Barricades — SLICE: 4 static jersey barriers (2 × 0.6 × 0.8 m). Pushable = ALPHA.

using UnityEngine;

namespace GenerationMayhem.Traversal
{
    /// <summary>
    /// Static cover (Cobra sniper LOS blocker) and wall-slam target. NavMeshObstacle (carving) is added by the builder.
    /// Combat calls ReportWallSlam when a knocked-back grunt hits it.
    /// </summary>
    public class JerseyBarrier : MonoBehaviour
    {
        [Tooltip("Cobra perch/cover marker usage (§5.2).")]
        public bool isCoverPoint = true;
        public float slamImpactSpeed = 5f;

        public void ReportWallSlam(GameObject fighter) => TraversalEvents.RaiseWallSlam(fighter, gameObject);

        void OnCollisionEnter(Collision c)
        {
            var id = c.collider.GetComponentInParent<FighterIdentity>();
            if (id != null && c.relativeVelocity.magnitude >= slamImpactSpeed && ShoveState.IsShovedNow(id, out _))
                ReportWallSlam(id.gameObject);
        }
    }
}
