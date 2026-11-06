// Attached ONLY to Vixen by the shared Hyperdrive runtime/Editor builder.
using UnityEngine;
namespace GenerationMayhem.Hyperdrive
{
    [RequireComponent(typeof(CharacterController))]
    public class HyperdriveSmashDriver : MonoBehaviour
    {
        void OnControllerColliderHit(ControllerColliderHit hit)
        {
            // Side/body impact only: do not destroy anything being ridden on top.
            if (hit.normal.y > 0.5f) return;
            var clutter = hit.collider.GetComponentInParent<HyperdriveSmashable>();
            if (clutter) clutter.Smash();
        }
    }
}
