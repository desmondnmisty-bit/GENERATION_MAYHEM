// Copyright Dark Logic Studios. Generation Mayhem.
// Unity 6 LTS stub — Chaos wheel-skate locomotion feel (WASD + grounded skate).

using UnityEngine;

namespace GenerationMayhem.Player
{
    /// <summary>
    /// Basic skate pawn: WASD move, grounded check, momentum / lean stub for Chaos wheel-skate feel.
    /// Assign Vixen FBX as child mesh under this GameObject (see README).
    /// </summary>
    [RequireComponent(typeof(CharacterController))]
    public class SkatePawnController : MonoBehaviour
    {
        [Header("Move")]
        // PACE LOCK 1101 — Idea Guy finals, web v7 (PR #4, gh-pages 1e54bb2):
        //   MAX 6.8 · ACC 11 · overspeed burst cap MAX+3.2 (bleeds 12/s above MAX)
        //   turn lerp 5.2 -> 2.4 rad/s by speed fraction (snap 9 rad/s under speed 2.5).
        // Inspector overrides win over these defaults: run
        // "Generation Mayhem/Pace/Apply 1101 Pace Defaults" (Editor/GMPaceDefaults.cs) after pulling.
        [SerializeField] float maxSpeed = 6.8f;          // PACE LOCK 1101
        [SerializeField] float accel = 11f;              // PACE LOCK 1101: was 11.5 provisional
        [SerializeField] float brakeDecel = 36f;
        [SerializeField] float coastDecel = 6f;
        [Tooltip("PACE LOCK 1101: web v7 has no sprint gear (Shift brakes there); keep 1. Burst headroom is the +3.2 overspeed cap.")]
        [SerializeField] float sprintMultiplier = 1f;

        [Header("Turn (PACE LOCK 1101: rad/s lerped by speed, replaces turnRateDeg)")]
        [Tooltip("Turn rate at standstill, radians/sec (web v7: 5.2).")]
        [SerializeField] float turnRadSlow = 5.2f;
        [Tooltip("Turn rate at MAX speed, radians/sec (web v7: 2.4).")]
        [SerializeField] float turnRadAtMax = 2.4f;
        [Tooltip("Below this speed, pivot snappily instead (web v7: 9 rad/s under 2.5).")]
        [SerializeField] float turnSnapSpeed = 2.5f;
        [SerializeField] float turnSnapRad = 9f;

        [Header("Overspeed (PACE LOCK 1101: kicker / rail / boost headroom)")]
        [Tooltip("Hard cap above MAX while bursting (web v7: +3.2).")]
        [SerializeField] float overspeedBurst = 3.2f;
        [Tooltip("Speed bleed per second while above MAX (web v7: 12).")]
        [SerializeField] float overspeedDecay = 12f;
        [SerializeField] float airControl = 0.35f;

        [Header("Ground / Gravity")]
        [SerializeField] float gravity = -28f;
        [SerializeField] float groundedStick = -2f;
        [SerializeField] float groundProbeDistance = 0.35f;
        [SerializeField] LayerMask groundMask = ~0;

        [Header("Skate feel (stub)")]
        [SerializeField] float leanMaxDeg = 18f;
        [SerializeField] float leanSmooth = 8f;
        [Tooltip("Optional visual lean root (mesh). Falls back to this transform.")]
        [SerializeField] Transform leanRoot;

        CharacterController _cc;
        Vector3 _velocity;
        float _verticalSpeed;
        float _currentLean;
        bool _grounded;

        public bool IsGrounded => _grounded;
        public float PlanarSpeed => new Vector3(_velocity.x, 0f, _velocity.z).magnitude;
        public Vector3 PlanarVelocity => new Vector3(_velocity.x, 0f, _velocity.z);

        // --- Traversal hooks (CityBlock slice, Assets/Scripts/Traversal) ---
        /// <summary>When true, Update() skips its own movement so a traversal state (grind, wall-ride) can drive the pawn.</summary>
        public bool ExternalControl { get; set; }
        /// <summary>0..1 multiplier on accel/brake/turn (ToxicOil sets this below 1).</summary>
        public float TractionMultiplier { get; set; } = 1f;
        /// <summary>When true, input steering is ignored (oil slip at boost speed: straight-line slide).</summary>
        public bool SteeringLocked { get; set; }
        /// <summary>Combat: downed / pinned (Viper-Lock) / planting. No move, brake, jump or trick input; physics keeps running.</summary>
        public bool InputLocked { get; set; }
        /// <summary>Combat: mist slow (0.7), block (0.5). Multiplies top speed.</summary>
        public float SpeedMultiplier { get; set; } = 1f;
        /// <summary>Phase 0 weapon upgrades (Chaos Wheels pace). Multiplies top speed.</summary>
        public float UpgradeSpeedScale { get; set; } = 1f;
        /// <summary>PACE LOCK 1101: sprintMultiplier defaults to 1 (web v7 has no sprint gear).</summary>
        public bool Sprinting => !InputLocked && (Input.GetKey(KeyCode.LeftShift) || Input.GetKey(KeyCode.RightShift));
        float GearScale => Sprinting ? sprintMultiplier : 1f;
        /// <summary>PACE LOCK 1101: turn rate in deg/s — 9 rad/s under speed 2.5, else lerp 5.2→2.4 rad/s by speed/MAX (web v7).</summary>
        float TurnRateDegNow
        {
            get
            {
                float speed = PlanarSpeed;
                float max = Mathf.Max(0.01f, maxSpeed * UpgradeSpeedScale);
                float radPerSec = speed < turnSnapSpeed
                    ? turnSnapRad
                    : Mathf.Lerp(turnRadSlow, turnRadAtMax, Mathf.Clamp01(speed / max));
                return radPerSec * Mathf.Rad2Deg;
            }
        }
        public float MaxSpeed => maxSpeed * UpgradeSpeedScale;
        public float Gravity => gravity;
        public float VerticalSpeed => _verticalSpeed;
        public CharacterController Controller => _cc != null ? _cc : GetComponent<CharacterController>();

        /// <summary>Replace full velocity (planar + vertical). Used by kicker launch / rail exit / wall jump.</summary>
        public void SetVelocity(Vector3 v)
        {
            _velocity = v;
            _verticalSpeed = v.y;
            if (v.y > 0.01f)
                _grounded = false;
        }

        /// <summary>Move via CharacterController while ExternalControl is on (keeps collision).</summary>
        public CollisionFlags MoveExternal(Vector3 delta) => Controller.Move(delta);

        void Awake()
        {
            _cc = GetComponent<CharacterController>();
            if (leanRoot == null)
                leanRoot = transform;
        }

        void Update()
        {
            if (ExternalControl)
                return;
            float dt = Time.deltaTime;
            ProbeGround();

            Vector2 input = (SteeringLocked || InputLocked) ? Vector2.zero : ReadMoveInput();
            Vector3 wish = CameraRelativeWish(input);

            if (_grounded && _verticalSpeed > 0.01f)
                _grounded = false; // launched this frame (SetVelocity), don't stick to ground
            if (_grounded)
            {
                ApplyGroundedMove(wish, input.sqrMagnitude > 0.01f, dt);
                _verticalSpeed = groundedStick;
            }
            else
            {
                ApplyAirMove(wish, dt);
                _verticalSpeed += gravity * dt;
            }

            _velocity.y = _verticalSpeed;
            CollisionFlags flags = _cc.Move(_velocity * dt);
            if ((flags & CollisionFlags.Below) != 0)
            {
                _grounded = true;
                _verticalSpeed = groundedStick;
            }

            ApplyLeanVisual(input.x, dt);
        }

        static Vector2 ReadMoveInput()
        {
            // Legacy Input Manager — works without Input System asset wiring on first open.
            float x = Input.GetAxisRaw("Horizontal");
            float y = Input.GetAxisRaw("Vertical");
            Vector2 v = new Vector2(x, y);
            if (v.sqrMagnitude > 1f)
                v.Normalize();
            return v;
        }

        Vector3 CameraRelativeWish(Vector2 input)
        {
            Transform cam = Camera.main != null ? Camera.main.transform : null;
            Vector3 forward = cam != null ? cam.forward : Vector3.forward;
            Vector3 right = cam != null ? cam.right : Vector3.right;
            forward.y = 0f;
            right.y = 0f;
            forward.Normalize();
            right.Normalize();
            return (forward * input.y + right * input.x).normalized;
        }

        void ApplyGroundedMove(Vector3 wishDir, bool hasInput, float dt)
        {
            Vector3 planar = PlanarVelocity;
            float effMax = maxSpeed * GearScale * UpgradeSpeedScale * SpeedMultiplier;

            if (hasInput && wishDir.sqrMagnitude > 0.001f)
            {
                float speed = planar.magnitude;
                float turnScale = Mathf.Max(0.2f, TractionMultiplier);
                if (speed > effMax + 0.01f)
                {
                    // PACE LOCK 1101 overspeed (kicker / rail / boost): keep the burst rolling,
                    // steer the velocity, bleed 12/s back toward MAX, hard cap MAX+3.2 (web v7).
                    Vector3 dir = Vector3.RotateTowards(planar.normalized, wishDir,
                        TurnRateDegNow * Mathf.Deg2Rad * turnScale * dt, 0f);
                    float newSpeed = Mathf.Min(Mathf.Max(effMax, speed - overspeedDecay * dt), effMax + overspeedBurst);
                    planar = dir * newSpeed;
                }
                else
                {
                    // Accelerate toward wish.
                    planar = Vector3.MoveTowards(planar, wishDir * effMax, accel * TractionMultiplier * dt);
                }
                // Steer facing (PACE LOCK 1101: speed-lerped rad/s, not a flat deg/s).
                Quaternion targetRot = Quaternion.LookRotation(wishDir, Vector3.up);
                transform.rotation = Quaternion.RotateTowards(
                    transform.rotation, targetRot, TurnRateDegNow * turnScale * dt);
            }
            else
            {
                // Coast / brake feel — Space = hard brake stub.
                float decel = (!InputLocked && Input.GetKey(KeyCode.Space)) ? brakeDecel : coastDecel;
                planar = Vector3.MoveTowards(planar, Vector3.zero, decel * TractionMultiplier * dt);
                // Overspeed cap still applies while coasting.
                float speed = planar.magnitude;
                float cap = effMax + overspeedBurst;
                if (speed > cap) planar *= cap / speed;
            }

            _velocity.x = planar.x;
            _velocity.z = planar.z;
        }

        void ApplyAirMove(Vector3 wishDir, float dt)
        {
            if (wishDir.sqrMagnitude < 0.001f)
                return;
            Vector3 planar = PlanarVelocity;
            planar += wishDir * (accel * airControl * dt);
            float mag = planar.magnitude;
            // PACE LOCK 1101: air cap leaves the +3.2 burst headroom so kicker launches aren't chopped.
            float cap = maxSpeed * UpgradeSpeedScale + overspeedBurst;
            if (mag > cap)
                planar *= cap / mag;
            _velocity.x = planar.x;
            _velocity.z = planar.z;
        }

        void ProbeGround()
        {
            Vector3 origin = transform.position + Vector3.up * 0.1f;
            _grounded = Physics.Raycast(origin, Vector3.down, groundProbeDistance + 0.1f, groundMask,
                QueryTriggerInteraction.Ignore) || _cc.isGrounded;
        }

        void ApplyLeanVisual(float strafeInput, float dt)
        {
            float targetLean = -strafeInput * leanMaxDeg;
            // Extra lean from lateral velocity vs facing (skate carve stub).
            Vector3 right = transform.right;
            float lateral = Vector3.Dot(PlanarVelocity, right);
            targetLean += Mathf.Clamp(-lateral * 1.2f, -leanMaxDeg, leanMaxDeg);
            targetLean = Mathf.Clamp(targetLean, -leanMaxDeg, leanMaxDeg);
            _currentLean = Mathf.Lerp(_currentLean, targetLean, 1f - Mathf.Exp(-leanSmooth * dt));

            Vector3 e = leanRoot.localEulerAngles;
            leanRoot.localRotation = Quaternion.Euler(e.x, e.y, _currentLean);
        }

#if UNITY_EDITOR
        void OnDrawGizmosSelected()
        {
            Gizmos.color = _grounded ? Color.green : Color.yellow;
            Gizmos.DrawLine(transform.position + Vector3.up * 0.1f,
                transform.position + Vector3.down * groundProbeDistance);
        }
#endif
    }
}
