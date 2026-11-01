// Copyright Dark Logic Studios. Generation Mayhem.
// 1101 phone ask (Misty): skate wheels must SPIN on their axle pivots,
// not ride along as a solid blob with the character.

using System.Collections.Generic;
using UnityEngine;

namespace GenerationMayhem.Player
{
    /// <summary>
    /// Rolls skate wheel meshes around their axle axis from the pawn's planar speed.
    ///
    /// Setup (player prefab, CityBlock_Slice / Dockyard path):
    ///   1. Add this next to SkatePawnController (root or mesh root both work).
    ///   2. Assign the wheel transforms, or leave empty to auto-find children whose
    ///      name contains "wheel" (case-insensitive).
    ///   3. Set wheelRadius to the real mesh radius so roll speed matches ground speed.
    ///
    /// If the FBX import pivot is NOT at the wheel hub (the usual cause of the
    /// "blob" look), keep recenterPivots on: each wheel gets wrapped in a generated
    /// "&lt;name&gt;_Axle" parent placed at its renderer-bounds centre and the axle is
    /// spun instead, so rotation always happens around the true hub.
    /// </summary>
    public class SkateWheelSpinner : MonoBehaviour
    {
        [Tooltip("Auto-filled from parents when empty.")]
        [SerializeField] SkatePawnController pawn;
        [Tooltip("Wheel meshes. Empty = auto-find children whose name contains 'wheel'.")]
        [SerializeField] Transform[] wheels;
        [Tooltip("Axle axis in wheel-local space. Skate wheels usually spin around local X (right).")]
        [SerializeField] Vector3 localAxleAxis = Vector3.right;
        [Tooltip("Real wheel radius in metres; drives roll rate (degPerSec = speed / radius).")]
        [SerializeField] float wheelRadius = 0.035f;
        [Tooltip("Wrap each wheel in a generated axle parent at its mesh centre (fixes off-hub import pivots).")]
        [SerializeField] bool recenterPivots = true;
        [Tooltip("Visual cap so wheels don't strobe at sprint speed. 0 = uncapped.")]
        [SerializeField] float maxDegPerSec = 1800f;

        struct Axle
        {
            public Transform t;
            public Quaternion rest;
        }

        readonly List<Axle> _axles = new List<Axle>();
        float _angleDeg;

        void Awake()
        {
            if (pawn == null) pawn = GetComponentInParent<SkatePawnController>();
            if (pawn == null)
            {
                Debug.LogWarning("[SkateWheelSpinner] No SkatePawnController in parents; disabling.", this);
                enabled = false;
                return;
            }

            if (wheels == null || wheels.Length == 0)
                wheels = AutoFindWheels();

            foreach (var w in wheels)
            {
                if (w == null) continue;
                Transform spin = w;
                if (recenterPivots)
                    spin = WrapInAxle(w);
                _axles.Add(new Axle { t = spin, rest = spin.localRotation });
            }

            if (_axles.Count == 0)
                Debug.LogWarning("[SkateWheelSpinner] No wheels found. Assign wheel transforms, or name them '*wheel*'.", this);
        }

        Transform[] AutoFindWheels()
        {
            var found = new List<Transform>();
            foreach (var t in pawn.GetComponentsInChildren<Transform>(true))
                if (t != pawn.transform && t.name.ToLowerInvariant().Contains("wheel"))
                    found.Add(t);
            // Drop transforms that are parents of other found wheels (keep leaves only).
            found.RemoveAll(a => found.Exists(b => b != a && b.IsChildOf(a)));
            return found.ToArray();
        }

        static Transform WrapInAxle(Transform wheel)
        {
            var r = wheel.GetComponentInChildren<Renderer>();
            Vector3 hub = r != null ? r.bounds.center : wheel.position;
            var axle = new GameObject(wheel.name + "_Axle").transform;
            axle.SetParent(wheel.parent, false);
            axle.SetPositionAndRotation(hub, wheel.rotation);
            wheel.SetParent(axle, true); // keep world transform; wheel now offsets from the hub
            return axle;
        }

        void LateUpdate()
        {
            if (_axles.Count == 0 || wheelRadius <= 0.0001f) return;

            // Signed roll: forward motion spins forward, skating backwards spins back.
            float signedSpeed = Vector3.Dot(pawn.PlanarVelocity, pawn.transform.forward);
            float degPerSec = signedSpeed / wheelRadius * Mathf.Rad2Deg;
            if (maxDegPerSec > 0f)
                degPerSec = Mathf.Clamp(degPerSec, -maxDegPerSec, maxDegPerSec);

            _angleDeg = Mathf.Repeat(_angleDeg + degPerSec * Time.deltaTime, 360f);
            Quaternion spin = Quaternion.AngleAxis(_angleDeg, localAxleAxis.normalized);
            for (int i = 0; i < _axles.Count; i++)
                _axles[i].t.localRotation = _axles[i].rest * spin;
        }

#if UNITY_EDITOR
        void OnDrawGizmosSelected()
        {
            Gizmos.color = Color.cyan;
            var list = _axles.Count > 0 ? _axles : null;
            if (list != null)
            {
                foreach (var a in list)
                    if (a.t != null)
                        Gizmos.DrawLine(a.t.position - a.t.TransformDirection(localAxleAxis) * 0.08f,
                                        a.t.position + a.t.TransformDirection(localAxleAxis) * 0.08f);
            }
            else if (wheels != null)
            {
                foreach (var w in wheels)
                    if (w != null)
                        Gizmos.DrawLine(w.position - w.TransformDirection(localAxleAxis) * 0.08f,
                                        w.position + w.TransformDirection(localAxleAxis) * 0.08f);
            }
        }
#endif
    }
}
