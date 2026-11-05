// Copyright Dark Logic Studios. Generation Mayhem.

using UnityEngine;

namespace GenerationMayhem.Combat
{
    /// <summary>Marks a collider as hittable and routes hits to its Health (optional damage multiplier, e.g. a weak spot).</summary>
    public class Hurtbox : MonoBehaviour
    {
        public Health health;
        public float multiplier = 1f;
        void Awake() { if (health == null) health = GetComponentInParent<Health>(); }
    }
}
