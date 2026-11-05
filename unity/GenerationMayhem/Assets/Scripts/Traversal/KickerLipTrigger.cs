// Copyright Dark Logic Studios. Generation Mayhem.

using UnityEngine;

namespace GenerationMayhem.Traversal
{
    /// <summary>Lip trigger relay. Lives on a child with a trigger BoxCollider.</summary>
    [RequireComponent(typeof(Collider))]
    public class KickerLipTrigger : MonoBehaviour
    {
        KickerRamp _ramp;
        void Awake() { _ramp = GetComponentInParent<KickerRamp>(); GetComponent<Collider>().isTrigger = true; }
        void OnTriggerEnter(Collider other)
        {
            var s = other.GetComponentInParent<SkaterTraversal>();
            if (s != null && _ramp != null) _ramp.TryLaunch(s);
        }
    }
}
