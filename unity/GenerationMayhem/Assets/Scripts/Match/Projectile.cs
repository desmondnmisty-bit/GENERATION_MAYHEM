// Copyright Dark Logic Studios. Generation Mayhem.
// Simple greybox projectile (Brianna's thermal bolts, Payton's cannon shells, Swarm grenades).

using System;
using UnityEngine;

namespace GenerationMayhem.Match
{
    public class Projectile : MonoBehaviour
    {
        Vector3 _from, _to; Transform _follow; float _dur, _t, _apex; Action<Vector3> _onImpact;

        public static Projectile Fire(Vector3 from, Vector3 to, Transform follow, float speed, float apex, Color color, float size, Action<Vector3> onImpact)
        {
            GenerationMayhem.Audio.GMGameplayAudio.Play("pistol");
            GenerationMayhem.Audio.GMGameplayAudio.Play("casing", .5f);
            var go = FxUtil.Sphere(from, size, color, 0f, 2.5f);
            go.name = "Projectile";
            var p = go.AddComponent<Projectile>();
            p._from = from; p._to = to; p._follow = follow; p._apex = apex; p._onImpact = onImpact;
            p._dur = Mathf.Max(0.08f, Vector3.Distance(from, to) / Mathf.Max(1f, speed));
            return p;
        }

        void Update()
        {
            if (_follow != null && _follow.gameObject.activeInHierarchy) _to = _follow.position + Vector3.up * 1f;
            _t += Time.deltaTime;
            float u = Mathf.Clamp01(_t / _dur);
            Vector3 p = Vector3.Lerp(_from, _to, u);
            p.y += 4f * _apex * u * (1f - u);
            transform.position = p;
            if (u >= 1f)
            {
                _onImpact?.Invoke(_to);
                Destroy(gameObject);
            }
        }
    }
}
