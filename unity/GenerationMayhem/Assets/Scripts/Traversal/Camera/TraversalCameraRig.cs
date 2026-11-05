// Copyright Dark Logic Studios. Generation Mayhem.
// §6 Camera for verticality (SLICE rows): ground follow, ramp air, grind yaw lock, wall-ride, combat lock, container fade.

using System.Collections.Generic;
using UnityEngine;

namespace GenerationMayhem.Traversal
{
    /// <summary>
    /// FALLBACK ONLY (production camera = CinemachineTraversalDirector). Self-contained 3rd-person rig driving this Camera's transform (no compile-time Cinemachine dependency,
    /// so it builds even if the Cinemachine package fails to resolve). Cinemachine 3 is in the manifest; if the
    /// team moves to CinemachineCamera + ThirdPersonFollow, port the per-state targets from ComputeTargets().
    /// Roll is always 0 (never tilt the horizon).
    /// </summary>
    public class TraversalCameraRig : MonoBehaviour
    {
        public SkaterTraversal target;

        [Header("Ground (exists)")]
        public float groundDistance = 6f;
        public float groundHeight = 2.2f;
        public float groundPitch = 10f;

        [Header("Ramp air [SLICE]")]
        public float airDistance = 7.5f;
        public float airPitch = 18f;
        [Tooltip("Don't follow vertical for this long after takeoff (anti-nausea).")]
        public float airVerticalDelay = 0.3f;
        public float airVerticalEase = 0.35f;

        [Header("Grind [SLICE]")]
        public float grindYawDamping = 0.4f;
        public float grindSideOffset = 0.8f;

        [Header("Wall-ride [SLICE]")]
        public float wallRideOffset = 1f;

        [Header("Combat lock [SLICE]")]
        public float combatRadius = 10f;
        public int combatMinEnemies = 3;
        public float combatExtraDistancePerMeter = 0.35f;
        public float combatMaxDistance = 11f;

        [Header("Smoothing")]
        public float defaultYawDamping = 0.2f;
        public float distanceDamping = 0.35f;
        public float pitchDamping = 0.3f;
        public float positionDamping = 0.08f;

        [Header("Occlusion (containers dither-fade)")]
        public LayerMask occluderMask = ~0;
        public float occlusionRadius = 0.3f;

        // Smoothed state
        float _yaw, _yawVel, _dist, _distVel, _pitch, _pitchVel, _focusY, _focusYVel;
        Vector3 _side, _sideVel, _posVel;
        float _airStart = -1f;
        public bool CombatLocked { get; private set; }
        readonly List<Transform> _group = new List<Transform>();
        readonly HashSet<ContainerDitherFade> _fadedNow = new HashSet<ContainerDitherFade>();
        readonly HashSet<ContainerDitherFade> _fadedPrev = new HashSet<ContainerDitherFade>();
        readonly Collider[] _overlap = new Collider[32];

        void Start()
        {
            if (target == null) target = FindAnyObjectByType<SkaterTraversal>();
            if (target != null)
            {
                _yaw = target.transform.eulerAngles.y;
                _focusY = target.transform.position.y;
            }
            _dist = groundDistance; _pitch = groundPitch;
        }

        void LateUpdate()
        {
            if (target == null) return;
            float dt = Time.deltaTime;
            Transform t = target.transform;
            var state = target.State;

            UpdateCombatGroup(t.position);

            float wantDist = groundDistance, wantPitch = groundPitch, yawDamp = defaultYawDamping;
            float wantYaw = t.eulerAngles.y;
            Vector3 wantSide = Vector3.zero;

            // --- Air: pull back + pitch, vertical hold then ease (air pitch is never suppressed) ---
            bool inAir = state == SkaterTraversal.TraversalState.Air && target.AirFromRamp;
            if (inAir)
            {
                if (_airStart < 0f) _airStart = Time.time;
                wantDist = airDistance; wantPitch = airPitch;
            }
            else _airStart = -1f;

            float focusTargetY = t.position.y;
            if (inAir && Time.time - _airStart < airVerticalDelay) focusTargetY = _focusY; // hold
            _focusY = Mathf.SmoothDamp(_focusY, focusTargetY, ref _focusYVel, inAir ? airVerticalEase : 0.1f);

            if (CombatLocked)
            {
                // Frame player + targets; grind/wall-ride cameras suppressed.
                Vector3 c = Vector3.zero; float spread = 0f;
                foreach (var g in _group) c += g.position;
                c /= Mathf.Max(1, _group.Count);
                foreach (var g in _group) spread = Mathf.Max(spread, Vector3.Distance(c, g.position));
                Vector3 toC = c - t.position; toC.y = 0f;
                if (toC.sqrMagnitude > 0.25f) wantYaw = Quaternion.LookRotation(toC).eulerAngles.y;
                wantDist = Mathf.Min(combatMaxDistance, Mathf.Max(wantDist, groundDistance + spread * combatExtraDistancePerMeter * 2f));
            }
            else if (state == SkaterTraversal.TraversalState.Grind)
            {
                Vector3 tan = target.RailTangent; tan.y = 0f;
                if (tan.sqrMagnitude > 1e-4f) wantYaw = Quaternion.LookRotation(tan).eulerAngles.y;
                yawDamp = grindYawDamping;
                wantSide = Quaternion.Euler(0f, wantYaw, 0f) * Vector3.right * grindSideOffset;
            }
            else if (state == SkaterTraversal.TraversalState.WallRide)
            {
                wantSide = target.WallNormal * wallRideOffset; // 1 m away from the wall, roll stays 0
            }

            _yaw = Mathf.SmoothDampAngle(_yaw, wantYaw, ref _yawVel, yawDamp);
            _dist = Mathf.SmoothDamp(_dist, wantDist, ref _distVel, distanceDamping);
            _pitch = Mathf.SmoothDamp(_pitch, wantPitch, ref _pitchVel, pitchDamping);
            _side = Vector3.SmoothDamp(_side, wantSide, ref _sideVel, 0.25f);

            Vector3 focus = new Vector3(t.position.x, _focusY, t.position.z) + _side;
            Quaternion rot = Quaternion.Euler(_pitch, _yaw, 0f); // roll locked to 0
            Vector3 lookPoint = focus + Vector3.up * (groundHeight * 0.5f);
            Vector3 wantPos = lookPoint - rot * Vector3.forward * _dist + Vector3.up * (groundHeight * 0.5f);
            transform.position = Vector3.SmoothDamp(transform.position, wantPos, ref _posVel, positionDamping);
            transform.rotation = rot;

            UpdateOcclusion(lookPoint);
        }

        void UpdateCombatGroup(Vector3 p)
        {
            _group.Clear();
            int n = Physics.OverlapSphereNonAlloc(p, combatRadius, _overlap, ~0, QueryTriggerInteraction.Ignore);
            int enemies = 0; bool boss = false;
            var seen = new HashSet<FighterIdentity>();
            for (int i = 0; i < n; i++)
            {
                var id = _overlap[i].GetComponentInParent<FighterIdentity>();
                if (id == null || id.IsFamily || !seen.Add(id)) continue;
                enemies++;
                if (id.role == FighterRole.Boss) boss = true;
                _group.Add(id.transform);
            }
            CombatLocked = boss || enemies >= combatMinEnemies;
            if (CombatLocked) _group.Add(target.transform);
            else _group.Clear();
        }

        void UpdateOcclusion(Vector3 lookPoint)
        {
            _fadedNow.Clear();
            Vector3 dir = transform.position - lookPoint;
            float len = dir.magnitude;
            if (len > 0.01f)
            {
                var hits = Physics.SphereCastAll(lookPoint, occlusionRadius, dir / len, len, occluderMask, QueryTriggerInteraction.Ignore);
                foreach (var h in hits)
                {
                    var f = h.collider.GetComponentInParent<ContainerDitherFade>();
                    if (f != null) { _fadedNow.Add(f); f.SetOccluding(true); }
                }
            }
            foreach (var f in _fadedPrev) if (f != null && !_fadedNow.Contains(f)) f.SetOccluding(false);
            _fadedPrev.Clear();
            foreach (var f in _fadedNow) _fadedPrev.Add(f);
        }
    }
}
