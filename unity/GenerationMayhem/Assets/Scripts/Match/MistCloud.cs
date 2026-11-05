// Copyright Dark Logic Studios. Generation Mayhem.
// Venom-Mist Blind cloud (boss spec §4): inside, family fighters are slowed 30% and the player's view is vignetted.

using System.Collections.Generic;
using UnityEngine;
using GenerationMayhem.Combat;

namespace GenerationMayhem.Match
{
    public class MistCloud : MonoBehaviour
    {
        public static readonly List<MistCloud> All = new List<MistCloud>();
        public float radius = 3.5f;
        public float lifetime = 8f;
        [Range(0f, 1f)] public float slow = 0.7f;
        float _dieAt;

        public static MistCloud Spawn(Vector3 at, float radius = 3.5f, float lifetime = 8f)
        {
            var go = FxUtil.Sphere(at + Vector3.up * 0.8f, radius * 2f, new Color(FxUtil.ToxicGreen.r, FxUtil.ToxicGreen.g, FxUtil.ToxicGreen.b, 0.35f), 0f, 0.6f, true);
            go.name = "VenomMist_Cloud";
            go.transform.localScale = new Vector3(radius * 2f, radius * 0.9f, radius * 2f);
            var c = go.AddComponent<MistCloud>();
            c.radius = radius; c.lifetime = lifetime;
            return c;
        }

        void OnEnable() { All.Add(this); _dieAt = Time.time + lifetime; }
        void OnDisable() => All.Remove(this);
        void Update() { if (Time.time >= _dieAt) Destroy(gameObject); }

        public bool Contains(Vector3 p) => CombatQuery.Flat(p - transform.position).sqrMagnitude <= radius * radius;

        /// <summary>Speed multiplier for a family fighter at p (1 = no mist). Vipers ignore their boss's mist.</summary>
        public static float SlowFactorAt(Vector3 p, bool family)
        {
            if (!family) return 1f;
            foreach (var c in All) if (c != null && c.Contains(p)) return c.slow;
            return 1f;
        }
    }
}
