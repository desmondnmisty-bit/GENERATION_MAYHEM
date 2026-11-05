// Copyright Dark Logic Studios. Generation Mayhem.
// §6 camera on Cinemachine 3 (design answer Oct 12, 2026). Drives a proxy target + two CinemachineCameras.

using System.Collections.Generic;
using UnityEngine;
using Unity.Cinemachine;

namespace GenerationMayhem.Traversal
{
    /// <summary>
    /// Setup (the greybox builder does this):
    ///  - Main Camera has CinemachineBrain.
    ///  - CM_Traversal: CinemachineCamera + CinemachineThirdPersonFollow, Follow = Proxy.
    ///  - CM_CombatLock: CinemachineCamera + CinemachineThirdPersonFollow (Follow = Proxy) + CinemachineRotationComposer
    ///    (LookAt = TargetGroup). Raised above CM_Traversal while combat-locked; the brain blends.
    /// The proxy carries all traversal rules: yaw (grind lock 0.4 s), pitch (10° ground / 18° air), roll always 0,
    /// vertical hold 0.3 s after ramp takeoff, 1 m wall-ride offset. ThirdPersonFollow copies the proxy's rotation.
    /// Combat lock keeps air pitch/distance but suppresses grind/wall framing.
    /// </summary>
    public class CinemachineTraversalDirector : MonoBehaviour
    {
        public SkaterTraversal target;
        public Transform proxy;
        public CinemachineCamera traversalCam;
        public CinemachineCamera combatCam;
        public CinemachineTargetGroup targetGroup;

        [Header("Ground (exists): 6 m back, ~2.2 m up, 10° down")]
        public float groundDistance = 6f;
        public float proxyHeight = 1.2f;
        public float groundPitch = 10f;

        [Header("Ramp air [SLICE]")]
        public float airDistance = 7.5f;
        public float airPitch = 18f;
        public float airVerticalDelay = 0.3f;
        public float airVerticalEase = 0.35f;

        [Header("Grind [SLICE]")]
        public float grindYawDamping = 0.4f;
        public float grindShoulderOffset = 0.8f;

        [Header("Wall-ride [SLICE]")]
        public float wallRideOffset = 1f;

        [Header("Combat lock [SLICE]")]
        public float combatRadius = 10f;
        public int combatMinEnemies = 3;
        public int traversalPriority = 10;
        public int combatPriority = 20;
        public float combatExtraDistancePerMeter = 0.7f;
        public float combatMaxDistance = 11f;

        [Header("Smoothing")]
        public float defaultYawDamping = 0.2f;
        public float distanceDamping = 0.35f;
        public float pitchDamping = 0.3f;

        [Header("Occlusion (container dither-fade instead of push-in)")]
        public LayerMask occluderMask = ~0;
        public float occlusionRadius = 0.3f;

        public bool CombatLocked { get; private set; }

        float _yaw, _yawVel, _dist, _distVel, _pitch, _pitchVel, _focusY, _focusYVel, _shoulder, _shoulderVel;
        Vector3 _side, _sideVel;
        float _airStart = -1f;
        readonly List<Transform> _enemies = new List<Transform>();
        readonly HashSet<FighterIdentity> _seen = new HashSet<FighterIdentity>();
        readonly Collider[] _overlap = new Collider[32];
        readonly HashSet<ContainerDitherFade> _fadedNow = new HashSet<ContainerDitherFade>();
        readonly HashSet<ContainerDitherFade> _fadedPrev = new HashSet<ContainerDitherFade>();
        CinemachineThirdPersonFollow _tpfTraversal, _tpfCombat;

        void Start()
        {
            if (target == null) target = FindAnyObjectByType<SkaterTraversal>();
            if (proxy == null) proxy = new GameObject("CM_Proxy").transform;
            if (traversalCam != null) _tpfTraversal = traversalCam.GetComponent<CinemachineThirdPersonFollow>();
            if (combatCam != null) _tpfCombat = combatCam.GetComponent<CinemachineThirdPersonFollow>();
            foreach (var t in new[] { _tpfTraversal, _tpfCombat })
                if (t != null) t.AvoidObstacles.Enabled = false; // containers fade instead (§6)
            if (target != null)
            {
                _yaw = target.transform.eulerAngles.y;
                _focusY = target.transform.position.y;
            }
            _dist = groundDistance; _pitch = groundPitch;
        }

        void LateUpdate()
        {
            if (target == null || proxy == null) return;
            Transform t = target.transform;
            var state = target.State;

            UpdateCombat(t.position);

            float wantDist = groundDistance, wantPitch = groundPitch, yawDamp = defaultYawDamping, wantShoulder = 0f;
            float wantYaw = t.eulerAngles.y;
            Vector3 wantSide = Vector3.zero;

            bool inAir = state == SkaterTraversal.TraversalState.Air && target.AirFromRamp;
            if (inAir) { if (_airStart < 0f) _airStart = Time.time; wantDist = airDistance; wantPitch = airPitch; }
            else _airStart = -1f;

            float focusTargetY = t.position.y;
            if (inAir && Time.time - _airStart < airVerticalDelay) focusTargetY = _focusY; // hold vertical
            _focusY = Mathf.SmoothDamp(_focusY, focusTargetY, ref _focusYVel, inAir ? airVerticalEase : 0.1f);

            if (CombatLocked)
            {
                Vector3 c = t.position; float spread = 0f;
                foreach (var e in _enemies) c += e.position;
                c /= (_enemies.Count + 1);
                foreach (var e in _enemies) spread = Mathf.Max(spread, Vector3.Distance(c, e.position));
                Vector3 toC = c - t.position; toC.y = 0f;
                if (toC.sqrMagnitude > 0.25f) wantYaw = Quaternion.LookRotation(toC).eulerAngles.y;
                wantDist = Mathf.Min(combatMaxDistance, Mathf.Max(wantDist, groundDistance + spread * combatExtraDistancePerMeter));
            }
            else if (state == SkaterTraversal.TraversalState.Grind)
            {
                Vector3 tan = target.RailTangent; tan.y = 0f;
                if (tan.sqrMagnitude > 1e-4f) wantYaw = Quaternion.LookRotation(tan).eulerAngles.y;
                yawDamp = grindYawDamping;
                wantShoulder = grindShoulderOffset; // rail stays visible
            }
            else if (state == SkaterTraversal.TraversalState.WallRide)
            {
                wantSide = target.WallNormal * wallRideOffset;
            }

            _yaw = Mathf.SmoothDampAngle(_yaw, wantYaw, ref _yawVel, yawDamp);
            _dist = Mathf.SmoothDamp(_dist, wantDist, ref _distVel, distanceDamping);
            _pitch = Mathf.SmoothDamp(_pitch, wantPitch, ref _pitchVel, pitchDamping);
            _shoulder = Mathf.SmoothDamp(_shoulder, wantShoulder, ref _shoulderVel, 0.25f);
            _side = Vector3.SmoothDamp(_side, wantSide, ref _sideVel, 0.25f);

            proxy.position = new Vector3(t.position.x, _focusY + proxyHeight, t.position.z) + _side;
            proxy.rotation = Quaternion.Euler(_pitch, _yaw, 0f); // roll locked to 0

            Apply(_tpfTraversal);
            Apply(_tpfCombat);
            if (traversalCam != null) traversalCam.Priority = traversalPriority;
            if (combatCam != null) combatCam.Priority = CombatLocked ? combatPriority : traversalPriority - 1;

            UpdateOcclusion(proxy.position);
        }

        void Apply(CinemachineThirdPersonFollow tpf)
        {
            if (tpf == null) return;
            tpf.CameraDistance = _dist;
            tpf.ShoulderOffset = new Vector3(_shoulder, 0f, 0f);
            tpf.VerticalArmLength = 0f;
        }

        void UpdateCombat(Vector3 p)
        {
            _enemies.Clear(); _seen.Clear();
            int n = Physics.OverlapSphereNonAlloc(p, combatRadius, _overlap, ~0, QueryTriggerInteraction.Ignore);
            bool boss = false;
            for (int i = 0; i < n; i++)
            {
                var id = _overlap[i].GetComponentInParent<FighterIdentity>();
                if (id == null || id.IsFamily || !_seen.Add(id)) continue;
                if (id.role == FighterRole.Boss) boss = true;
                _enemies.Add(id.transform);
            }
            CombatLocked = boss || _enemies.Count >= combatMinEnemies;

            if (targetGroup == null) return;
            targetGroup.Targets.Clear();
            if (!CombatLocked) return;
            targetGroup.AddMember(target.transform, 1.5f, 1f);
            foreach (var e in _enemies) targetGroup.AddMember(e, 1f, 1f);
        }

        void UpdateOcclusion(Vector3 lookPoint)
        {
            var cam = Camera.main;
            if (cam == null) return;
            _fadedNow.Clear();
            Vector3 dir = cam.transform.position - lookPoint;
            float len = dir.magnitude;
            if (len > 0.01f)
                foreach (var h in Physics.SphereCastAll(lookPoint, occlusionRadius, dir / len, len, occluderMask, QueryTriggerInteraction.Ignore))
                {
                    var f = h.collider.GetComponentInParent<ContainerDitherFade>();
                    if (f != null) { _fadedNow.Add(f); f.SetOccluding(true); }
                }
            foreach (var f in _fadedPrev) if (f != null && !_fadedNow.Contains(f)) f.SetOccluding(false);
            _fadedPrev.Clear();
            foreach (var f in _fadedNow) _fadedPrev.Add(f);
        }
    }
}
