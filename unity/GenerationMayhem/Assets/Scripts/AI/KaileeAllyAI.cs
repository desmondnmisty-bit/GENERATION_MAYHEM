// Copyright Dark Logic Studios. Generation Mayhem.
// AI Kailee — Rev 4.1 / 4.2 §3.4 minimum acceptance behavior stubs.

using UnityEngine;
using GenerationMayhem.Combat;

namespace GenerationMayhem.AI
{
    /// <summary>
    /// §3.4 AI Kailee acceptance (minimum):
    /// Follow / Pathing, Ping Threat (5s), Ping Go, Kinetic Synergy contribute,
    /// Shatter-Slingshot accept, 8s/25% downed auto-recover, drop-out handoff ≤1s.
    /// </summary>
    public class KaileeAllyAI : MonoBehaviour
    {
        public enum AllyState
        {
            Follow,
            PingThreat,
            PingGo,
            Downed,
            SlingshotAccept
        }

        [Header("Follow (§3.4)")]
        [SerializeField] Transform followTarget;
        [Tooltip("Jammer lane follow distance (meters).")]
        [SerializeField] float jammerLaneFollowDistance = 4.5f;
        [SerializeField] float jammerLaneRepathSlack = 0.8f;
        [SerializeField] float moveSpeed = 11f;

        [Header("Ping")]
        [SerializeField] float pingThreatPrioritySeconds = 5f;
        [SerializeField] Transform priorityThreat;
        [SerializeField] Vector3 goPingLocation;
        [SerializeField] bool hasGoPing;

        [Header("Downed auto-recover (§3.4: 8s / 25%)")]
        [SerializeField] float downedAutoRecoverSeconds = 8f;
        [SerializeField] float autoRecoverHealthFraction = 0.25f;
        [SerializeField] float maxHealth = 100f;
        [SerializeField] float currentHealth = 100f;
        [SerializeField] bool isDowned;
        float _downedTimer;

        [Header("Drop-out handoff (§3.4: ≤1s, no mission reset)")]
        [SerializeField] float dropOutPossessTimeoutSeconds = 1f;
        float _dropOutHandoffTimeRemaining = -1f;
        bool _aiPossessed = true;

        [Header("Synergy / Slingshot")]
        [SerializeField] ShatterSlingshotStub synergySource;
        [SerializeField] float defaultHitSynergyContribution = 5f;

        [Header("State")]
        [SerializeField] AllyState state = AllyState.Follow;

        CharacterController _cc;
        float _threatPriorityTimeRemaining;

        public bool IsDowned => isDowned;
        public AllyState State => state;
        public bool IsAiPossessed => _aiPossessed;

        void Awake()
        {
            _cc = GetComponent<CharacterController>();
            if (synergySource == null)
                synergySource = FindFirstObjectByType<ShatterSlingshotStub>();
        }

        void Update()
        {
            float dt = Time.deltaTime;
            TickDropOutHandoff(dt);
            TickDownedAutoRecover(dt);
            TickPingPriority(dt);

            if (isDowned)
            {
                state = AllyState.Downed;
                return;
            }

            // Priority: Go ping → Threat → Follow Vixen within jammer lane.
            if (hasGoPing)
            {
                state = AllyState.PingGo;
                StubMoveToward(goPingLocation);
                if (Vector3.Distance(transform.position, goPingLocation) < 1f)
                    hasGoPing = false;
                return;
            }

            if (_threatPriorityTimeRemaining > 0f && priorityThreat != null)
            {
                state = AllyState.PingThreat;
                StubMoveToward(priorityThreat.position);
                return;
            }

            // Solo: accept Shatter-Slingshot when window open + Mom's Chaos full.
            if (synergySource != null && synergySource.IsShatterWindowOpen && synergySource.IsSlingshotReady)
            {
                state = AllyState.SlingshotAccept;
                AcceptShatterSlingshotPlant(synergySource.gameObject);
                return;
            }

            state = AllyState.Follow;
            TickFollowVixen();
        }

        // --- §3.4 Follow / Pathing ---
        public void SetFollowTarget(Transform target) => followTarget = target;

        void TickFollowVixen()
        {
            if (followTarget == null)
                return;

            float dist = Vector3.Distance(transform.position, followTarget.position);
            if (dist > jammerLaneFollowDistance + jammerLaneRepathSlack)
            {
                StubMoveToward(followTarget.position);
            }
            // Too close: hold (lean/brake later). Wet-hazard repath TBD.
        }

        // --- §3.4 Ping Threat / Go ---
        public void ReceivePingThreat(Transform markedEnemy)
        {
            priorityThreat = markedEnemy;
            _threatPriorityTimeRemaining = pingThreatPrioritySeconds;
            hasGoPing = false;
        }

        public void ReceivePingGo(Vector3 worldLocation)
        {
            goPingLocation = worldLocation;
            hasGoPing = true;
        }

        void TickPingPriority(float dt)
        {
            if (_threatPriorityTimeRemaining > 0f)
            {
                _threatPriorityTimeRemaining -= dt;
                if (_threatPriorityTimeRemaining <= 0f)
                {
                    _threatPriorityTimeRemaining = 0f;
                    priorityThreat = null;
                }
            }
        }

        // --- §3.4 Kinetic Synergy ---
        public void ContributeSynergyOnHitOrAssist(float amount = -1f)
        {
            float add = amount > 0f ? amount : defaultHitSynergyContribution;
            if (synergySource != null)
                synergySource.ContributeSynergy(add);
        }

        // --- §3.4 Shatter-Slingshot accept ---
        public bool AcceptShatterSlingshotPlant(GameObject planter)
        {
            if (synergySource == null || !synergySource.IsSlingshotReady)
                return false;
            return synergySource.TryAcceptLaunch(gameObject);
        }

        // --- §3.4 Downed: wait Check; else 8s → 25% auto-recover ---
        public void SetDowned(bool downed)
        {
            isDowned = downed;
            if (downed)
            {
                _downedTimer = downedAutoRecoverSeconds;
                state = AllyState.Downed;
            }
        }

        /// <summary>Ally revive via Check (2P) — clears downed immediately.</summary>
        public void ReceiveCheckRevive(float healthFraction = 0.5f)
        {
            isDowned = false;
            currentHealth = maxHealth * Mathf.Clamp01(healthFraction);
            _downedTimer = 0f;
        }

        void TickDownedAutoRecover(float dt)
        {
            if (!isDowned)
                return;

            _downedTimer -= dt;
            if (_downedTimer <= 0f)
            {
                isDowned = false;
                currentHealth = maxHealth * autoRecoverHealthFraction;
                Debug.Log($"[KaileeAllyAI] Auto-recover after {downedAutoRecoverSeconds}s at {autoRecoverHealthFraction * 100f:0}% HP.");
            }
        }

        // --- §3.4 Drop-out handoff ≤1s, same kit, no mission reset ---
        /// <summary>
        /// Call when human Kailee drops. AI possesses same pawn within 1s.
        /// GameMode owns real session wiring; this stores intent + stub possess flag.
        /// </summary>
        public void RequestDropOutHandoff()
        {
            _dropOutHandoffTimeRemaining = dropOutPossessTimeoutSeconds;
            _aiPossessed = true;
            enabled = true;
            Debug.Log($"[KaileeAllyAI] Drop-out handoff — AI possess within {dropOutPossessTimeoutSeconds}s (no mission reset).");
        }

        void TickDropOutHandoff(float dt)
        {
            if (_dropOutHandoffTimeRemaining < 0f)
                return;

            _dropOutHandoffTimeRemaining -= dt;
            if (_dropOutHandoffTimeRemaining < 0f && !_aiPossessed)
            {
                Debug.LogWarning(
                    $"[KaileeAllyAI] Drop-out handoff exceeded {dropOutPossessTimeoutSeconds}s — GameMode must possess Kailee within 1s.");
            }
        }

        void StubMoveToward(Vector3 worldLocation)
        {
            Vector3 delta = worldLocation - transform.position;
            delta.y = 0f;
            if (delta.sqrMagnitude < 0.01f)
                return;

            Vector3 dir = delta.normalized;
            Quaternion look = Quaternion.LookRotation(dir, Vector3.up);
            transform.rotation = Quaternion.RotateTowards(transform.rotation, look, 360f * Time.deltaTime);

            Vector3 motion = dir * (moveSpeed * Time.deltaTime);
            if (_cc != null)
                _cc.Move(motion + Physics.gravity * Time.deltaTime);
            else
                transform.position += motion;
        }
    }
}
