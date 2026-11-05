// Copyright Dark Logic Studios. Generation Mayhem.
// §2.1 / §5.2 zone volume (wave home zone + leash). Trigger box.

using UnityEngine;

namespace GenerationMayhem.Traversal
{
    [RequireComponent(typeof(BoxCollider))]
    public class CityBlockZone : MonoBehaviour
    {
        public string zoneId = "A";
        public string displayName = "Crane Yard";
        [Tooltip("Open zones host waves/boss (A). Narrow zones (B) are travel/chase only (§2.4).")]
        public bool isFightSpace = true;

        void Awake() => GetComponent<BoxCollider>().isTrigger = true;

        public bool Contains(Vector3 worldPos)
        {
            var b = GetComponent<BoxCollider>();
            Vector3 local = transform.InverseTransformPoint(worldPos) - b.center;
            Vector3 h = b.size * 0.5f;
            return Mathf.Abs(local.x) <= h.x && Mathf.Abs(local.y) <= h.y && Mathf.Abs(local.z) <= h.z;
        }
    }
}
