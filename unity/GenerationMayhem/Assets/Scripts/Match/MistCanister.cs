// Copyright Dark Logic Studios. Generation Mayhem.
// Lobbed mist canister: visible arc (the telegraph ring is already on the ground), bursts on landing.

using System;
using UnityEngine;

namespace GenerationMayhem.Match
{
    public class MistCanister : MonoBehaviour
    {
        Vector3 _from, _to; float _dur, _t, _apex; Action<Vector3> _onLand;

        public static void Launch(Vector3 from, Vector3 to, float duration, float apex, Action<Vector3> onLand)
        {
            var go = FxUtil.Sphere(from, 0.45f, FxUtil.ToxicGreen, 0f, 2f);
            go.name = "MistCanister";
            var c = go.AddComponent<MistCanister>();
            c._from = from; c._to = to; c._dur = Mathf.Max(0.1f, duration); c._apex = apex; c._onLand = onLand;
        }

        void Update()
        {
            _t += Time.deltaTime;
            float u = Mathf.Clamp01(_t / _dur);
            Vector3 p = Vector3.Lerp(_from, _to, u);
            p.y += 4f * _apex * u * (1f - u);
            transform.position = p;
            if (u >= 1f)
            {
                _onLand?.Invoke(_to);
                Destroy(gameObject);
            }
        }
    }
}
