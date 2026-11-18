// Copyright Dark Logic Studios. Generation Mayhem.
// CityBlock slice — per-skater traversal state: Ground / Air (+tricks) / Grind / WallRide (§3.1–3.3).

using UnityEngine;
using GenerationMayhem.Controls;
using GenerationMayhem.Player;

namespace GenerationMayhem.Traversal
{
    /// <summary>
    /// Sits next to SkatePawnController. Ground + plain air movement stays in SkatePawnController;
    /// Grind and WallRide take over via SkatePawnController.ExternalControl.
    /// Input: Input System actions via GMControls (Jump / Trick / Move), player slot 0.
    /// Mapping + remap docs: Assets/Resources/Input/CONTROLS.md.
    /// </summary>
    [RequireComponent(typeof(SkatePawnController))]
    public class SkaterTraversal : MonoBehaviour
    {
        public enum TraversalState { Ground, Air, Grind, WallRide }

        [Header("Input")]
        // Jump = Shift / RT, Trick = J / LT (Space / A-Cross is already brake in SkatePawnController).
        // Bindings live in Assets/Resources/Input/GMControls.inputactions; rebind via pause menu / settings.
        [SerializeField] float ollieVerticalSpeed = 7f;

        [Header("Air tricks (§3.1) — shared set at slice")]
        [Tooltip("Seconds a trick needs to complete. Landing before that = bail.")]
        [SerializeField] float trickDuration = 0.45f;
        [SerializeField] float bailStumble = 0.6f;
        [Tooltip("Animator trigger names for the 4 shared tricks (up/right/down/left). Optional.")]
        [SerializeField] string[] trickTriggers = { "Trick_Up", "Trick_Right", "Trick_Down", "Trick_Left" };
        [SerializeField] Animator animator;

        [Header("Grind (§3.2)")]
        [SerializeField] float railJumpOffVertical = 8f;
        [Tooltip("Balance meter drift speed. NO FAIL at slice — meter only clamps (§3.2).")]
        [SerializeField] float balanceDrift = 0.6f;

        [Header("Wall-ride (§3.3)")]
        [SerializeField] string wallRideTag = "WallRide";
        [SerializeField] float wallRideMinSpeed = 6f;
        [SerializeField, Range(0f, 90f)] float wallRideMaxAngle = 30f;
        [SerializeField] float wallRideMaxTime = 1.5f;
        [SerializeField] float wallProbeDistance = 0.9f;
        [SerializeField] float wallRideStandOff = 0.45f;
        [SerializeField] float wallRideGravityScale = 0.15f;
        [SerializeField] float wallJumpOut = 6f;
        [SerializeField] float wallJumpUp = 8f;

        public SkatePawnController Pawn { get; private set; }
        public TraversalState State { get; private set; } = TraversalState.Ground;
        public bool AirFromRamp { get; private set; }
        public float StateStartTime { get; private set; }
        public float AirStartHeight { get; private set; }
        public GrindRail CurrentRail { get; private set; }
        public Vector3 RailTangent { get; private set; }
        public Vector3 WallNormal { get; private set; }
        /// <summary>-1..1, purely cosmetic at slice (drives lean/UI).</summary>
        public float Balance { get; private set; }

        int _trick = -1; float _trickStart; float _stumbleUntil;
        float _railAlong; int _railDir; float _railSpeed;
        float _wallVy; Vector3 _wallTangent; float _wallSpeed;

        GMControls _controls;
        GMControls Controls => _controls ?? (_controls = GMControls.For(0));
        bool JumpPressed => Controls.Jump.WasPressedThisFrame();

        void Awake()
        {
            Pawn = GetComponent<SkatePawnController>();
            if (animator == null) animator = GetComponentInChildren<Animator>();
        }

        void Update()
        {
            float dt = Time.deltaTime;
            switch (State)
            {
                case TraversalState.Ground: TickGround(); break;
                case TraversalState.Air: TickAir(); break;
                case TraversalState.Grind: TickGrind(dt); break;
                case TraversalState.WallRide: TickWallRide(dt); break;
            }
            if (_stumbleUntil > 0f && Time.time >= _stumbleUntil)
            {
                _stumbleUntil = 0f;
                Pawn.SteeringLocked = false;
            }
        }

        // ---------------- Ground ----------------
        void TickGround()
        {
            if (!Pawn.IsGrounded) { EnterAir(Pawn.PlanarVelocity + Vector3.up * Pawn.VerticalSpeed, false, setVelocity: false); return; }
            if (!Pawn.InputLocked && JumpPressed && _stumbleUntil <= 0f)
            {
                if (TryStartWallRide(requireAir: false)) return;
                EnterAir(Pawn.PlanarVelocity + Vector3.up * ollieVerticalSpeed, false);
            }
        }

        // ---------------- Air ----------------
        public void EnterAir(Vector3 velocity, bool fromRamp, bool setVelocity = true)
        {
            SetState(TraversalState.Air);
            AirFromRamp = fromRamp;
            AirStartHeight = transform.position.y;
            _trick = -1;
            if (setVelocity) Pawn.SetVelocity(velocity);
        }

        void TickAir()
        {
            // Trick input: button + stick direction (4 tricks).
            if (_trick < 0 && !Pawn.InputLocked && Controls.Trick.WasPressedThisFrame())
            {
                Vector2 m = Controls.Move.ReadValue<Vector2>();
                float x = m.x, y = m.y;
                _trick = Mathf.Abs(y) >= Mathf.Abs(x) ? (y >= 0f ? 0 : 2) : (x > 0f ? 1 : 3);
                _trickStart = Time.time;
                if (animator != null && _trick < trickTriggers.Length && !string.IsNullOrEmpty(trickTriggers[_trick]))
                    animator.SetTrigger(trickTriggers[_trick]);
            }

            if (Time.time - StateStartTime > 0.1f && TryStartGrind()) return;
            if (TryStartWallRide(requireAir: true)) return;

            if (Pawn.IsGrounded && Time.time - StateStartTime > 0.1f && Pawn.VerticalSpeed <= 0f)
                Land();
        }

        void Land()
        {
            if (_trick >= 0)
            {
                if (Time.time - _trickStart >= trickDuration) TraversalEvents.RaiseTrickLanded(gameObject, _trick);
                else Bail();
            }
            _trick = -1;
            SetState(TraversalState.Ground);
        }

        void Bail()
        {
            TraversalEvents.RaiseTrickBailed(gameObject);
            _stumbleUntil = Time.time + bailStumble;
            Pawn.SteeringLocked = true;
            Pawn.SetVelocity(Pawn.PlanarVelocity * 0.4f);
            if (animator != null) animator.SetTrigger("Bail");
        }

        // ---------------- Grind ----------------
        bool TryStartGrind()
        {
            Vector3 feet = transform.position;
            Vector3 vel = Pawn.PlanarVelocity + Vector3.up * Pawn.VerticalSpeed;
            foreach (var rail in GrindRail.All)
            {
                if (rail == null) continue;
                if (rail.CanSnap(feet, vel, out float along, out int dir))
                {
                    // Trick still spinning when you hit a rail counts as a clean landing.
                    if (_trick >= 0 && Time.time - _trickStart >= trickDuration) TraversalEvents.RaiseTrickLanded(gameObject, _trick);
                    _trick = -1;
                    CurrentRail = rail; _railAlong = along; _railDir = dir;
                    _railSpeed = Mathf.Max(Pawn.PlanarVelocity.magnitude, rail.minGrindSpeed);
                    Balance = 0f;
                    Pawn.ExternalControl = true;
                    SetState(TraversalState.Grind);
                    return true;
                }
            }
            return false;
        }

        void TickGrind(float dt)
        {
            TraversalEvents.RaiseGrindTick(gameObject, dt);
            _railAlong += _railDir * _railSpeed * dt;
            Vector3 tan = CurrentRail.TangentAt(_railAlong) * _railDir;
            RailTangent = tan;
            Vector3 target = CurrentRail.PointAt(_railAlong) + Vector3.up * CurrentRail.rideHeight;
            Pawn.MoveExternal(target - transform.position);
            Vector3 flat = new Vector3(tan.x, 0f, tan.z);
            if (flat.sqrMagnitude > 1e-4f) transform.rotation = Quaternion.LookRotation(flat, Vector3.up);

            // Balance: drifts, stick corrects; clamps at ±1 — no fail at slice.
            float input = Controls.Move.ReadValue<Vector2>().x;
            Balance = Mathf.Clamp(Balance + (Mathf.Sin(Time.time * 2.3f) * balanceDrift - input * 1.5f * balanceDrift) * dt, -1f, 1f);

            bool atEnd = _railAlong <= 0f || _railAlong >= CurrentRail.Length;
            if (atEnd) ExitGrind(tan * _railSpeed + Vector3.up * 2f);
            else if (JumpPressed) ExitGrind(tan * _railSpeed + Vector3.up * railJumpOffVertical);
        }

        void ExitGrind(Vector3 v)
        {
            Pawn.ExternalControl = false;
            CurrentRail = null;
            EnterAir(v, fromRamp: false);
        }

        // ---------------- Wall-ride ----------------
        bool TryStartWallRide(bool requireAir)
        {
            Vector3 v = Pawn.PlanarVelocity;
            if (v.magnitude <= wallRideMinSpeed) return false;
            if (requireAir && Time.time - StateStartTime < 0.05f) return false;
            Vector3 origin = transform.position + Vector3.up * 1f;
            Vector3 right = Vector3.Cross(Vector3.up, v.normalized);
            for (int side = -1; side <= 1; side += 2)
            {
                if (!Physics.Raycast(origin, right * side, out RaycastHit hit, wallProbeDistance, ~0, QueryTriggerInteraction.Ignore)) continue;
                if (!HasTag(hit.collider, wallRideTag)) continue;
                Vector3 n = hit.normal; n.y = 0f;
                if (n.sqrMagnitude < 0.5f) continue; // not a vertical wall
                n.Normalize();
                float angleToWall = Mathf.Asin(Mathf.Clamp01(Mathf.Abs(Vector3.Dot(v.normalized, n)))) * Mathf.Rad2Deg;
                if (angleToWall >= wallRideMaxAngle) continue;
                WallNormal = n;
                _wallTangent = Vector3.ProjectOnPlane(v, n).normalized;
                _wallSpeed = v.magnitude;
                _wallVy = Mathf.Max(Pawn.VerticalSpeed, 1.5f);
                Pawn.ExternalControl = true;
                _trick = -1;
                SetState(TraversalState.WallRide);
                return true;
            }
            return false;
        }

        static bool HasTag(Collider c, string tag)
        {
            // CompareTag errors if the tag is not defined in TagManager; the builder/TagManager defines "WallRide".
            Transform t = c.transform;
            while (t != null) { if (t.CompareTag(tag)) return true; t = t.parent; }
            return false;
        }

        void TickWallRide(float dt)
        {
            _wallVy += Pawn.Gravity * wallRideGravityScale * dt;
            Vector3 delta = (_wallTangent * _wallSpeed + Vector3.up * _wallVy) * dt;
            // Hold stand-off from the wall.
            Vector3 origin = transform.position + Vector3.up * 1f;
            bool still = Physics.Raycast(origin, -WallNormal, out RaycastHit hit, wallProbeDistance + 0.3f, ~0, QueryTriggerInteraction.Ignore)
                         && HasTag(hit.collider, wallRideTag);
            if (still) delta += WallNormal * (wallRideStandOff - (hit.distance - Pawn.Controller.radius)) * 0.5f;
            Pawn.MoveExternal(delta);
            transform.rotation = Quaternion.LookRotation(_wallTangent, Vector3.up);

            float t = Time.time - StateStartTime;
            if (JumpPressed)
                EndWallRide(_wallTangent * _wallSpeed + WallNormal * wallJumpOut + Vector3.up * wallJumpUp);
            else if (!still || t >= wallRideMaxTime)
                EndWallRide(_wallTangent * _wallSpeed + WallNormal * 1f + Vector3.up * Mathf.Min(_wallVy, 0f));
        }

        void EndWallRide(Vector3 v)
        {
            Pawn.ExternalControl = false;
            EnterAir(v, fromRamp: false);
        }

        void OnControllerColliderHit(ControllerColliderHit hit)
        {
            var b = hit.collider.GetComponentInParent<Breakable>();
            if (b != null) b.OnSkaterContact(gameObject, Pawn.PlanarSpeed);
        }

        void SetState(TraversalState s)
        {
            State = s;
            StateStartTime = Time.time;
        }

        /// <summary>Force back to ground state (respawn, cutscene, KO).</summary>
        public void ResetTraversal()
        {
            Pawn.ExternalControl = false;
            Pawn.SteeringLocked = false;
            CurrentRail = null;
            _trick = -1;
            SetState(TraversalState.Ground);
        }
    }
}
