// Copyright Dark Logic Studios. Generation Mayhem.
// §3.1 Kicker ramp (K1–K3): lip trigger launches the skater, carrying speed. Air time ~0.7–1.0 s.

using UnityEngine;
using GenerationMayhem.Player;

namespace GenerationMayhem.Traversal
{
    /// <summary>
    /// Put on the ramp root. Needs a trigger collider at the lip (builder creates "LipTrigger" child with KickerLipTrigger).
    /// Launch = planar speed carried along ramp forward + vertical speed sized for target air time.
    /// With pawn gravity -28 m/s², 0.8 s air ≈ 11.2 m/s vertical.
    /// </summary>
    public class KickerRamp : MonoBehaviour
    {
        public string rampId = "K1";
        [Tooltip("1 m (Ramp_Kicker_S) or 1.5 m (Ramp_Kicker_L).")]
        public float lipHeight = 1f;
        [Tooltip("Target air time on flat landing (s). §3.1: 0.7–1.0.")]
        [Range(0.4f, 1.5f)] public float targetAirTime = 0.8f;
        [Tooltip("Minimum planar speed out of the lip (m/s).")]
        public float minLaunchSpeed = 8f;
        [Tooltip("Only launch if entering within this angle of ramp forward (deg).")]
        [Range(0f, 90f)] public float maxEntryAngle = 60f;

        public void TryLaunch(SkaterTraversal skater)
        {
            if (skater == null || skater.State != SkaterTraversal.TraversalState.Ground) return;
            SkatePawnController pawn = skater.Pawn;
            Vector3 fwd = transform.forward; fwd.y = 0f; fwd.Normalize();
            Vector3 planar = pawn.PlanarVelocity;
            if (planar.sqrMagnitude < 1f || Vector3.Angle(planar, fwd) > maxEntryAngle) return;
            float speed = Mathf.Max(planar.magnitude, minLaunchSpeed);
            float vy = Mathf.Abs(pawn.Gravity) * targetAirTime * 0.5f;
            skater.EnterAir(fwd * speed + Vector3.up * vy, fromRamp: true);
        }
    }
}
