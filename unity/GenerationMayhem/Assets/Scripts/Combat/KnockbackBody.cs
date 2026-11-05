// Copyright Dark Logic Studios. Generation Mayhem.
// Knockback, stun and pin (Viper-Lock) for both skate pawns (CharacterController) and NavMesh fighters.

using System.Collections;
using UnityEngine;
using UnityEngine.AI;
using GenerationMayhem.Player;
using GenerationMayhem.Traversal;

namespace GenerationMayhem.Combat
{
    /// <summary>
    /// Pawn (player): knockback = SkatePawnController.SetVelocity; the controller handles collisions.
    /// NavMesh fighter: the agent is switched off and the body flies ballistically (so a shove can carry a
    /// grunt off the quay into the harbor), sweeping ahead for walls: a JerseyBarrier = wall-slam, a Breakable =
    /// checked-into (+10%). On landing it snaps back onto the NavMesh. Shove hits mark ShoveState so the
    /// existing hazards fire: oil slide / Toxic Slip, breakable +10%, barrier wall-slam.
    /// </summary>
    [DisallowMultipleComponent]
    public class KnockbackBody : MonoBehaviour
    {
        public float knockbackScale = 0.6f;   // PACE 1029: was 1 (-40% knockback/slide)
        public float groundFriction = 22f;    // PACE 1029: was 16 (slide damps faster)
        [Tooltip("PACE 1029: a new stun landing within this many seconds after the last one ended is halved (anti chain-stun).")]
        public float stunChainGrace = 0.35f;
        public float gravity = -25f;
        public float bodyRadius = 0.4f;

        public bool IsStunned => Time.time < _stunUntil || Pinned;
        public bool Pinned { get; private set; }
        public bool InKnockback { get; private set; }
        public float StunLeft => Mathf.Max(0f, _stunUntil - Time.time);
        public Transform PinnedBy { get; private set; }

        SkatePawnController _pawn;
        NavMeshAgent _agent;
        ShoveState _shove;
        Coroutine _fly;
        float _stunUntil;
        Vector3 _pinOffset;

        void Awake()
        {
            _pawn = GetComponent<SkatePawnController>();
            _agent = GetComponent<NavMeshAgent>();
            _shove = GetComponent<ShoveState>();
        }

        void OnDisable()
        {
            InKnockback = false; Pinned = false; PinnedBy = null; _fly = null;
            if (_pawn != null) _pawn.InputLocked = false;
        }

        public void Stun(float seconds)
        {
            // PACE 1029: widen recovery - re-stun right after a stun ends is halved so chain-stuns aren't luck.
            if (Time.time >= _stunUntil && Time.time - _stunUntil < stunChainGrace) seconds *= 0.5f;
            _stunUntil = Mathf.Max(_stunUntil, Time.time + seconds);
        }

        public void Apply(Vector3 velocity, float stun, bool shove)
        {
            if (stun > 0f) Stun(stun);
            velocity *= knockbackScale;
            if (shove && _shove != null) _shove.MarkShoved(CombatQuery.Flat(velocity), 0.8f);
            if (Pinned || velocity.sqrMagnitude < 0.05f) return;

            if (_pawn != null)
            {
                _pawn.SetVelocity(new Vector3(velocity.x, Mathf.Max(velocity.y, 0f), velocity.z));
                return;
            }
            if (_agent != null && _agent.enabled && _agent.isOnOffMeshLink) return; // mid-link: stun only
            Launch(velocity, ignoreCollisions: false);
        }

        /// <summary>Ballistic flight (NavMesh fighters). ignoreCollisions = ghost flight (Slither's harbor KO).</summary>
        public void Launch(Vector3 velocity, bool ignoreCollisions)
        {
            if (!isActiveAndEnabled) return;
            if (_fly != null) StopCoroutine(_fly);
            _fly = StartCoroutine(Fly(velocity, ignoreCollisions));
        }

        IEnumerator Fly(Vector3 v, bool ghost)
        {
            InKnockback = true;
            bool hadAgent = _agent != null && _agent.enabled;
            if (hadAgent) _agent.enabled = false;
            Vector3 pos = transform.position;
            float t = 0f;
            bool overWater = false;
            while (true)
            {
                if ((transform.position - pos).sqrMagnitude > 1f) break; // teleported (harbor respawn / quay bounce)
                float dt = Time.deltaTime;
                t += dt;
                Vector3 h = new Vector3(v.x, 0f, v.z);
                float step = h.magnitude * dt;
                if (!ghost && step > 1e-4f &&
                    Physics.SphereCast(pos + Vector3.up * 0.9f, bodyRadius, h.normalized, out RaycastHit hit, step + 0.15f, ~0, QueryTriggerInteraction.Ignore)
                    && !hit.collider.transform.IsChildOf(transform) && hit.collider.GetComponentInParent<FighterIdentity>() == null)
                {
                    bool shoved = _shove != null && _shove.IsShoved;
                    var br = hit.collider.GetComponentInParent<Breakable>();
                    if (br != null)
                    {
                        if (shoved) br.ReceiveCheckedFighter(gameObject); else br.Hit();
                        h *= 0.6f; // smashed through
                    }
                    else
                    {
                        var bar = hit.collider.GetComponentInParent<JerseyBarrier>();
                        if (bar != null && shoved)
                        {
                            bar.ReportWallSlam(gameObject);
                            Stun(1.2f);
                        }
                        h = Vector3.zero;
                    }
                    v.x = h.x; v.z = h.z;
                }
                pos += h * dt;
                v.y += gravity * dt;
                pos.y += v.y * dt;

                bool grounded = false;
                if (!ghost && !overWater && v.y <= 0f &&
                    Physics.Raycast(pos + Vector3.up * 0.6f, Vector3.down, out RaycastHit g, 0.7f, ~0, QueryTriggerInteraction.Ignore)
                    && !g.collider.transform.IsChildOf(transform) && g.point.y > -0.25f)
                {
                    pos.y = g.point.y; v.y = 0f; grounded = true;
                }
                if (grounded)
                {
                    h = Vector3.MoveTowards(h, Vector3.zero, groundFriction * dt);
                    v.x = h.x; v.z = h.z;
                }
                if (pos.y < -0.5f) overWater = true; // off the quay: keep falling into the harbor trigger
                transform.position = pos;
                if (pos.y < -14f) break;
                if (grounded && h.sqrMagnitude < 0.2f && t > 0.12f) break;
                if (t > 6f) break;
                yield return null;
            }

            if (hadAgent && _agent != null && isActiveAndEnabled && !suppressAgentRestore)
            {
                if (NavMesh.SamplePosition(transform.position, out NavMeshHit nh, 2.5f, NavMesh.AllAreas))
                {
                    _agent.enabled = true;
                    _agent.Warp(nh.position);
                }
                else if (!overWater) _agent.enabled = true;
            }
            InKnockback = false;
            _fly = null;
            if (overWater) SendMessage("OnFellOutOfWorld", SendMessageOptions.DontRequireReceiver);
        }

        // ---- Viper-Lock pin ----
        public void Pin(Transform holder, Vector3 localOffset)
        {
            if (_fly != null) { StopCoroutine(_fly); _fly = null; InKnockback = false; }
            Pinned = true; PinnedBy = holder; _pinOffset = localOffset;
            if (_agent != null && _agent.enabled) _agent.enabled = false;
            if (_pawn != null) { _pawn.InputLocked = true; _pawn.SetVelocity(Vector3.zero); }
        }

        public void Release(Vector3 throwVelocity)
        {
            if (!Pinned) return;
            Pinned = false; PinnedBy = null;
            if (_pawn != null) _pawn.InputLocked = false;
            if (_agent != null && !_agent.enabled && isActiveAndEnabled)
            {
                if (NavMesh.SamplePosition(transform.position, out NavMeshHit nh, 3f, NavMesh.AllAreas))
                { _agent.enabled = true; _agent.Warp(nh.position); }
            }
            if (throwVelocity.sqrMagnitude > 0.05f) Apply(throwVelocity, 0.4f, false);
        }

        /// <summary>Set by Slither's harbor KO so nothing puts him back on the NavMesh.</summary>
        public bool suppressAgentRestore;

        void Update()
        {
            // Harbor respawn teleports a body whose agent is off: put it back on the NavMesh once it's on the deck.
            if (_agent == null || _agent.enabled || InKnockback || Pinned || suppressAgentRestore) return;
            if (transform.position.y < -0.5f) return;
            if (NavMesh.SamplePosition(transform.position, out NavMeshHit nh, 2.5f, NavMesh.AllAreas))
            { _agent.enabled = true; _agent.Warp(nh.position); }
        }

        void LateUpdate()
        {
            if (!Pinned) return;
            if (PinnedBy == null || !PinnedBy.gameObject.activeInHierarchy) { Release(Vector3.zero); return; }
            Vector3 target = PinnedBy.TransformPoint(_pinOffset);
            target.y = PinnedBy.position.y;
            var cc = GetComponent<CharacterController>();
            if (cc != null && cc.enabled) cc.Move(target - transform.position);
            else transform.position = target;
            Vector3 face = CombatQuery.Flat(PinnedBy.position - transform.position);
            if (face.sqrMagnitude > 1e-4f) transform.rotation = Quaternion.LookRotation(face);
        }
    }
}
