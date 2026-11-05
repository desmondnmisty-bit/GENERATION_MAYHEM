// Copyright Dark Logic Studios. Generation Mayhem.
// §3.5 / §4 Toxic oil. NEVER burns, NEVER ignites — there is deliberately no fire/ignite code path here.

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;
using GenerationMayhem.Player;

namespace GenerationMayhem.Traversal
{
    /// <summary>
    /// Trigger volume over a slick (Oil A / Oil B). Effects on everyone, both teams, boss included:
    ///  - traction loss (SkatePawn: TractionMultiplier; NavMeshAgent: accel/speed cut)
    ///  - toxic DoT while inside (only when isToxic; Phase 3 Enrage calls SetToxic(true))
    ///  - hero entering at boost speed: straight-line slide (no steering) + DoT
    ///  - boss shoved in: Toxic Slip (toxic) or oil stagger (clean) — events only, Combat applies the stagger
    ///  - grunt shoved in: slides to the far edge of the slick and falls over
    /// Canon: the oil is non-flammable. Do not add ignite/burn states (Slither_Boss_Fight_v002 §7).
    /// </summary>
    [RequireComponent(typeof(Collider))]
    public class ToxicOil : MonoBehaviour
    {
        /// <summary>Canon lock. There is no setter and no burning state.</summary>
        public const bool Flammable = false;

        public string slickId = "OilA";
        [Tooltip("Design answer Oct 12: slip + slow ALL match; toxic DoT only in Phase 3 (Enrage calls ToxicOil.SetAllToxic(true)).")]
        public bool isToxic = false;

        public static readonly List<ToxicOil> All = new List<ToxicOil>();
        void OnEnable() => All.Add(this);
        void OnDisable() => All.Remove(this);

        /// <summary>Phase 3 Enrage: both slicks turn toxic green. Never flammable.</summary>
        public static void SetAllToxic(bool toxic) { foreach (var o in All) if (o != null) o.isToxic = toxic; }
        [Range(0f, 1f)] public float tractionMultiplier = 0.15f;
        [Tooltip("Damage per second while inside (tuning units, solo boss HP baseline 3000).")]
        public float toxicDps = 20f;
        public float dotTick = 0.5f;
        [Tooltip("Entering at or above this planar speed = locked straight-line slide (boost = 12 m/s).")]
        public float slideEntrySpeed = 11f;
        [Tooltip("Agent speed multiplier while in oil.")]
        [Range(0f, 1f)] public float agentSpeedMultiplier = 0.55f;
        public float gruntSlideSpeed = 7f;

        readonly HashSet<GameObject> _inside = new HashSet<GameObject>();
        readonly Dictionary<NavMeshAgent, Vector2> _agentDefaults = new Dictionary<NavMeshAgent, Vector2>();
        Collider _col;
        float _nextTick;

        void Awake() { _col = GetComponent<Collider>(); _col.isTrigger = true; }

        public void SetToxic(bool toxic) => isToxic = toxic;

        void OnTriggerEnter(Collider other)
        {
            GameObject root = FighterRoot(other);
            if (root == null || !_inside.Add(root)) return;
            var id = root.GetComponent<FighterIdentity>();
            bool shoved = ShoveState.IsShovedNow(root.transform, out Vector3 shoveDir);

            var pawn = root.GetComponent<SkatePawnController>();
            if (pawn != null)
            {
                pawn.TractionMultiplier = Mathf.Min(pawn.TractionMultiplier, tractionMultiplier);
                if (pawn.PlanarSpeed >= slideEntrySpeed) pawn.SteeringLocked = true; // oil slip as a move
            }

            var agent = root.GetComponent<NavMeshAgent>();
            if (agent != null && !_agentDefaults.ContainsKey(agent))
            {
                _agentDefaults[agent] = new Vector2(agent.speed, agent.acceleration);
                agent.speed *= agentSpeedMultiplier;
                agent.acceleration *= tractionMultiplier;
            }

            if (id != null && id.role == FighterRole.Boss && shoved)
            {
                if (isToxic) TraversalEvents.RaiseToxicSlip(root);
                else TraversalEvents.RaiseCheckedIntoOil(root);
            }
            else if (id != null && shoved && !id.IsFamily && agent != null)
            {
                StartCoroutine(GruntSlide(agent, shoveDir));
            }
        }

        void OnTriggerExit(Collider other)
        {
            GameObject root = FighterRoot(other);
            if (root == null || !_inside.Remove(root)) return;
            var pawn = root.GetComponent<SkatePawnController>();
            if (pawn != null) { pawn.TractionMultiplier = 1f; pawn.SteeringLocked = false; }
            var agent = root.GetComponent<NavMeshAgent>();
            if (agent != null && _agentDefaults.TryGetValue(agent, out Vector2 d))
            {
                agent.speed = d.x; agent.acceleration = d.y;
                _agentDefaults.Remove(agent);
            }
        }

        void Update()
        {
            if (!isToxic || _inside.Count == 0 || Time.time < _nextTick) return;
            _nextTick = Time.time + dotTick;
            _inside.RemoveWhere(g => g == null || !g.activeInHierarchy);
            foreach (var g in _inside)
                TraversalEvents.RaiseHazardDamage(g, toxicDps * dotTick, "toxic_oil");
        }

        IEnumerator GruntSlide(NavMeshAgent agent, Vector3 dir)
        {
            dir.y = 0f;
            if (dir.sqrMagnitude < 1e-4f) dir = agent.transform.forward;
            dir.Normalize();
            agent.isStopped = true;
            float safety = 3f;
            while (agent != null && safety > 0f && _inside.Contains(agent.gameObject))
            {
                agent.Move(dir * gruntSlideSpeed * Time.deltaTime);
                safety -= Time.deltaTime;
                yield return null;
            }
            if (agent == null) yield break;
            var anim = agent.GetComponentInChildren<Animator>();
            if (anim != null) anim.SetTrigger("Knockdown"); // fall over at the far edge
            yield return new WaitForSeconds(1.2f);
            if (agent != null && agent.isOnNavMesh) agent.isStopped = false;
        }

        static GameObject FighterRoot(Collider c)
        {
            var id = c.GetComponentInParent<FighterIdentity>();
            if (id != null) return id.gameObject;
            var pawn = c.GetComponentInParent<SkatePawnController>();
            return pawn != null ? pawn.gameObject : null;
        }
    }
}
