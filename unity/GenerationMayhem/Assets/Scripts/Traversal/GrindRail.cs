// Copyright Dark Logic Studios. Generation Mayhem.
// §3.2 Grind rail: Catmull-Rom spline through child points (no com.unity.splines dependency at slice).

using System.Collections.Generic;
using UnityEngine;

namespace GenerationMayhem.Traversal
{
    /// <summary>
    /// Rail spline = ordered child transforms (P0, P1, ...). Distance-parameterized by a baked polyline.
    /// Snap rule (§3.2): within 1.2 m of the rail and within 35° of its direction.
    /// </summary>
    public class GrindRail : MonoBehaviour
    {
        public static readonly List<GrindRail> All = new List<GrindRail>();

        [Tooltip("R1 = crane rail (Container Street), R2 = gantry rail (yard).")]
        public string railId = "R1";
        public float snapDistance = 1.2f;
        [Range(0f, 90f)] public float snapAngleDeg = 35f;
        [Tooltip("Minimum ride speed on the rail (m/s). Cruise = 8.")]
        public float minGrindSpeed = 8f;
        [Tooltip("Height of the rider's feet above the spline.")]
        public float rideHeight = 0.05f;
        [SerializeField, Range(2, 32)] int samplesPerSegment = 8;

        readonly List<Vector3> _pts = new List<Vector3>();   // world-space baked polyline
        readonly List<float> _dist = new List<float>();      // cumulative distance
        public float Length => _dist.Count > 0 ? _dist[_dist.Count - 1] : 0f;

        void OnEnable() { All.Add(this); Bake(); }
        void OnDisable() { All.Remove(this); }

        /// <summary>Rebake if rail points move (rails are static at slice, so Awake/OnEnable is enough).</summary>
        public void Bake()
        {
            _pts.Clear(); _dist.Clear();
            // Control points = children named P0, P1, ... (visual/leg children are ignored).
            var cp = new List<Vector3>();
            for (int i = 0; i < transform.childCount; i++)
            {
                var ch = transform.GetChild(i);
                if (ch.name.Length > 1 && ch.name[0] == 'P' && char.IsDigit(ch.name[1])) cp.Add(ch.position);
            }
            int n = cp.Count;
            if (n < 2) return;
            var c = cp.ToArray();
            for (int seg = 0; seg < n - 1; seg++)
            {
                Vector3 p0 = c[Mathf.Max(seg - 1, 0)], p1 = c[seg], p2 = c[seg + 1], p3 = c[Mathf.Min(seg + 2, n - 1)];
                int start = seg == 0 ? 0 : 1;
                for (int s = start; s <= samplesPerSegment; s++)
                    _pts.Add(CatmullRom(p0, p1, p2, p3, s / (float)samplesPerSegment));
            }
            float d = 0f;
            _dist.Add(0f);
            for (int i = 1; i < _pts.Count; i++) { d += Vector3.Distance(_pts[i - 1], _pts[i]); _dist.Add(d); }
        }

        static Vector3 CatmullRom(Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3, float t)
        {
            float t2 = t * t, t3 = t2 * t;
            return 0.5f * ((2f * p1) + (-p0 + p2) * t + (2f * p0 - 5f * p1 + 4f * p2 - p3) * t2 + (-p0 + 3f * p1 - 3f * p2 + p3) * t3);
        }

        public Vector3 PointAt(float distance)
        {
            if (_pts.Count == 0) return transform.position;
            distance = Mathf.Clamp(distance, 0f, Length);
            int i = Index(distance);
            float segLen = _dist[i + 1] - _dist[i];
            float t = segLen > 1e-5f ? (distance - _dist[i]) / segLen : 0f;
            return Vector3.Lerp(_pts[i], _pts[i + 1], t);
        }

        public Vector3 TangentAt(float distance)
        {
            if (_pts.Count < 2) return transform.forward;
            int i = Index(Mathf.Clamp(distance, 0f, Length));
            return (_pts[i + 1] - _pts[i]).normalized;
        }

        int Index(float distance)
        {
            int i = 0;
            while (i < _dist.Count - 2 && _dist[i + 1] < distance) i++;
            return i;
        }

        /// <summary>Closest point on the rail to p. Returns distance-along and world point.</summary>
        public float ClosestDistance(Vector3 p, out Vector3 closest)
        {
            closest = transform.position;
            float best = float.MaxValue, bestAlong = 0f;
            for (int i = 0; i < _pts.Count - 1; i++)
            {
                Vector3 a = _pts[i], b = _pts[i + 1], ab = b - a;
                float len2 = ab.sqrMagnitude;
                float t = len2 > 1e-6f ? Mathf.Clamp01(Vector3.Dot(p - a, ab) / len2) : 0f;
                Vector3 q = a + ab * t;
                float d2 = (p - q).sqrMagnitude;
                if (d2 < best) { best = d2; closest = q; bestAlong = Mathf.Lerp(_dist[i], _dist[i + 1], t); }
            }
            return bestAlong;
        }

        /// <summary>§3.2 snap test. dirSign = +1 ride toward the end, -1 toward the start.</summary>
        public bool CanSnap(Vector3 feet, Vector3 velocity, out float along, out int dirSign)
        {
            along = 0f; dirSign = 1;
            if (_pts.Count < 2) return false;
            along = ClosestDistance(feet, out Vector3 q);
            if (Vector3.Distance(feet, q) > snapDistance) return false;
            if (along <= 0.05f && Vector3.Dot(velocity, TangentAt(0f)) < 0f) return false;      // off the start
            if (along >= Length - 0.05f && Vector3.Dot(velocity, TangentAt(Length)) > 0f) return false; // off the end
            Vector3 tan = TangentAt(along);
            Vector3 v = velocity; v.y = 0f; Vector3 tFlat = tan; tFlat.y = 0f;
            if (v.sqrMagnitude < 0.01f || tFlat.sqrMagnitude < 1e-4f) return false;
            float ang = Vector3.Angle(v, tFlat);
            if (ang <= snapAngleDeg) { dirSign = 1; return true; }
            if (ang >= 180f - snapAngleDeg) { dirSign = -1; return true; }
            return false;
        }

#if UNITY_EDITOR
        void OnDrawGizmos()
        {
            if (!Application.isPlaying) Bake();
            Gizmos.color = Color.white;
            for (int i = 0; i < _pts.Count - 1; i++) Gizmos.DrawLine(_pts[i], _pts[i + 1]);
        }
#endif
    }
}
