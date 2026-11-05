// Copyright Dark Logic Studios. Generation Mayhem.

using UnityEngine;

namespace GenerationMayhem.Traversal
{
    /// <summary>
    /// Combat marks a fighter as "shoved" (check, Blue Blaze Blitz, Payton recoil push, wall-jump kick).
    /// Hazards read it: shoved into oil = Toxic Slip / grunt slide; shoved into a breakable = +10% damage.
    /// </summary>
    [DisallowMultipleComponent]
    public class ShoveState : MonoBehaviour
    {
        float _until;
        public Vector3 ShoveDirection { get; private set; }
        public bool IsShoved => Time.time < _until;

        public void MarkShoved(Vector3 direction, float seconds = 0.6f)
        {
            ShoveDirection = direction.sqrMagnitude > 1e-4f ? direction.normalized : transform.forward;
            _until = Time.time + seconds;
        }

        public static bool IsShovedNow(Component c, out Vector3 dir)
        {
            var s = c != null ? c.GetComponentInParent<ShoveState>() : null;
            dir = s != null ? s.ShoveDirection : Vector3.zero;
            return s != null && s.IsShoved;
        }
    }
}
