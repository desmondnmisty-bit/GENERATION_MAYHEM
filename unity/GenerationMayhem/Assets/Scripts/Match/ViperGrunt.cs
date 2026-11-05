// Copyright Dark Logic Studios. Generation Mayhem.
// Pink Viper grunts: NavMesh chase + a basic attack per type. They die, or get knocked into the harbor
// (HarborKOEdge → GruntOutOfMatch).

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;
using GenerationMayhem.Combat;
using GenerationMayhem.Traversal;

namespace GenerationMayhem.Match
{
    public enum ViperKind { Fang, Cobra, TailStrike, Swarm }

    [RequireComponent(typeof(Health))]
    public class ViperGrunt : MonoBehaviour
    {
        public static readonly List<ViperGrunt> All = new List<ViperGrunt>();
        public static int AliveCount { get { int n = 0; foreach (var v in All) if (v != null && v.Hp != null && v.Hp.IsAlive) n++; return n; } }

        public ViperKind kind = ViperKind.Fang;
        public float speed = 9f;
        public float attackRange = 1.8f;
        public float attackRadius = 1.2f;
        public float damage = 12f;
        public float windup = 0.35f;
        public float cooldown = 1.2f;
        public float knockForce = 4f;
        [Header("Cobra (sniper)")]
        public float snipeMin = 8f, snipeMax = 16f, laserTelegraph = 1.2f;
        [Header("Swarm (grenades)")]
        public float grenadeEvery = 7f, grenadeDamage = 14f;

        public Health Hp { get; private set; }
        NavMeshAgent _agent;
        KnockbackBody _kb;
        FighterAnimator _anim;
        Renderer _body;
        Color _baseColor;
        Health _target;
        float _nextAttack, _retargetAt, _nextPath, _nextGrenade;
        bool _attacking;
        LineRenderer _laser;

        bool AgentReady => _agent != null && _agent.enabled && _agent.isOnNavMesh;

        public void Configure(ViperKind k)
        {
            kind = k;
            switch (k)
            {
                case ViperKind.Fang: speed = 9.5f; attackRange = 1.8f; damage = 12f; windup = 0.35f; cooldown = 1.2f; knockForce = 4f; break;
                case ViperKind.TailStrike: speed = 6f; attackRange = 2.4f; attackRadius = 1.8f; damage = 25f; windup = 0.75f; cooldown = 2.5f; knockForce = 9f; break;
                case ViperKind.Swarm: speed = 8.5f; attackRange = 1.6f; damage = 7f; windup = 0.3f; cooldown = 1f; knockForce = 2f; break;
                case ViperKind.Cobra: speed = 7f; attackRange = 16f; damage = 30f; windup = 0f; cooldown = 4.5f; knockForce = 3f; break;
            }
        }

        void Awake()
        {
            Hp = GetComponent<Health>();
            _agent = GetComponent<NavMeshAgent>();
            _kb = GetComponent<KnockbackBody>();
            _anim = GetComponent<FighterAnimator>();
            _body = GetComponentInChildren<Renderer>();
            if (_body != null) _baseColor = _body.sharedMaterial != null && _body.sharedMaterial.HasProperty("_Color") ? _body.sharedMaterial.color : Color.magenta;
        }

        void OnEnable()
        {
            All.Add(this);
            TraversalEvents.GruntOutOfMatch += OnOutOfMatch;
            Hp.onDeath += OnDeath;
            _nextAttack = Time.time + 1f;
            _nextGrenade = Time.time + 3f;
        }

        void OnDisable()
        {
            All.Remove(this);
            TraversalEvents.GruntOutOfMatch -= OnOutOfMatch;
            Hp.onDeath -= OnDeath;
            if (_laser != null) _laser.enabled = false;
        }

        void Start()
        {
            if (_agent != null) _agent.speed = speed;
            if (kind == ViperKind.Cobra) _laser = FxUtil.Line(transform, Color.red, 0.06f);
        }

        void OnOutOfMatch(GameObject g) { if (g == gameObject) Hp.RemoveFromMatch(); }   // knocked into the harbor
        void OnFellOutOfWorld() { Hp.RemoveFromMatch(); gameObject.SetActive(false); }

        void OnDeath()
        {
            StopAllCoroutines();
            _attacking = false;
            if (_laser != null) _laser.enabled = false;
            if (AgentReady) { _agent.isStopped = true; _agent.ResetPath(); }
            var vis = transform.Find("MeshRoot");
            if (vis != null) vis.localRotation = Quaternion.Euler(80f, 0f, 0f); // falls over
        }

        void Update()
        {
            if (!Hp.IsAlive) return;
            if (MatchDirector.IsOver) { Stop(); return; }
            if (_attacking || _kb != null && (_kb.InKnockback || _kb.IsStunned) || !AgentReady) return;

            if (_target == null || !_target.IsAlive || Time.time >= _retargetAt)
            {
                _retargetAt = Time.time + 1f;
                _target = NearestFamily();
            }
            if (_target == null) { Stop(); return; }

            Vector3 to = CombatQuery.Flat(_target.transform.position - transform.position);
            float dist = to.magnitude;

            if (kind == ViperKind.Cobra)
            {
                bool los = HasLineOfSight(_target);
                if (dist < snipeMin) MoveTo(transform.position - to.normalized * 6f);
                else if (dist > snipeMax || !los) MoveTo(_target.transform.position);
                else
                {
                    Stop(); Face(_target.transform.position);
                    if (Time.time >= _nextAttack) StartCoroutine(Snipe(_target));
                }
                return;
            }

            if (kind == ViperKind.Swarm && Time.time >= _nextGrenade && dist > 5f && dist < 12f)
            {
                _nextGrenade = Time.time + grenadeEvery;
                ThrowGrenade(_target.transform.position);
            }

            if (dist > attackRange) { MoveTo(_target.transform.position); return; }
            Stop(); Face(_target.transform.position);
            if (Time.time >= _nextAttack) StartCoroutine(Melee(_target));
        }

        IEnumerator Melee(Health target)
        {
            _attacking = true;
            _nextAttack = Time.time + cooldown + windup;
            if (_anim != null) _anim.Play(kind == ViperKind.TailStrike ? "Attack_Kick_R" : "Attack_Punch_R", windup + 0.4f);
            float t = 0f;
            while (t < windup)
            {
                t += Time.deltaTime;
                if (_body != null) FxUtil.Tint(_body, Color.Lerp(_baseColor, Color.white, Mathf.PingPong(t * 8f, 1f)), 0.5f);
                if (target != null) Face(target.transform.position);
                if (!Hp.IsAlive || _kb != null && _kb.IsStunned) { Done(); yield break; }
                yield return null;
            }
            if (_body != null) FxUtil.Tint(_body, _baseColor, 0f);
            if (kind == ViperKind.Fang && AgentReady) _agent.Move(transform.forward * 1.2f); // rush
            var d = DamageInfo.Make(damage, gameObject, kind == ViperKind.TailStrike ? "tail_strike" : "viper_hit");
            d.knockDir = transform.forward; d.knockForce = knockForce; d.knockUp = kind == ViperKind.TailStrike ? 2f : 0.5f; d.stun = kind == ViperKind.TailStrike ? 0.6f : 0.25f;
            CombatQuery.Strike(Team.Vipers, transform.position + Vector3.up + transform.forward * (attackRange * 0.6f), attackRadius, d);
            yield return new WaitForSeconds(0.35f);
            Done();
        }

        IEnumerator Snipe(Health target)
        {
            _attacking = true;
            _nextAttack = Time.time + cooldown + laserTelegraph;
            if (!MatchDirector.SaidOnce("cobra")) MatchDirector.Say("Brianna", "Sniper, corridor mouth! Red line!");
            _laser.enabled = true;
            float t = 0f;
            Vector3 aim = target.transform.position + Vector3.up;
            while (t < laserTelegraph + 0.25f)
            {
                t += Time.deltaTime;
                if (t < laserTelegraph && target != null) aim = target.transform.position + Vector3.up; // tracks, then locks for 0.25 s
                Vector3 eye = transform.position + Vector3.up * 1.5f;
                _laser.SetPosition(0, eye); _laser.SetPosition(1, aim);
                _laser.startWidth = _laser.endWidth = t < laserTelegraph ? 0.04f : 0.12f;
                if (!Hp.IsAlive || _kb != null && _kb.IsStunned) { _laser.enabled = false; Done(); yield break; }
                yield return null;
            }
            _laser.enabled = false;
            Vector3 from = transform.position + Vector3.up * 1.5f;
            Vector3 dir = aim - from;
            if (Physics.Raycast(from, dir.normalized, out RaycastHit hit, dir.magnitude + 1f, ~0, QueryTriggerInteraction.Ignore))
            {
                var hb = hit.collider.GetComponentInParent<Hurtbox>();
                var h = hb != null ? hb.health : hit.collider.GetComponentInParent<Health>();
                if (h != null && h.team == Team.Family && h.IsAlive) // barriers / containers block the shot
                {
                    var d = DamageInfo.Make(damage, gameObject, "cobra_snipe");
                    d.knockDir = dir; d.knockForce = knockForce; d.stun = 0.3f;
                    h.TakeDamage(d);
                }
                FxUtil.Sphere(hit.point, 0.5f, Color.red, 0.25f, 3f);
            }
            yield return new WaitForSeconds(0.3f);
            Done();
        }

        void ThrowGrenade(Vector3 at)
        {
            if (!MatchDirector.SaidOnce("grenade")) MatchDirector.Say("Kailee", "Grenades! Scatter!");
            FxUtil.Ring(at, 5f, new Color(1f, 0.3f, 0.6f), 1.1f);
            Projectile.Fire(transform.position + Vector3.up * 1.5f, at, null, 11f, 2.5f, new Color(1f, 0.3f, 0.6f), 0.35f, p =>
            {
                var d = new DamageInfo { amount = grenadeDamage, source = gameObject, kind = "swarm_grenade", origin = p, knockForce = 5f, knockUp = 2f, stun = 0.4f };
                CombatQuery.Strike(Team.Vipers, p, 2.5f, d);
                // The Swarm's grenades also burst mist walls.
                foreach (var w in MistWall.All.ToArray())
                    if (w != null && w.Hp != null && (w.transform.position - p).sqrMagnitude < 4.5f * 4.5f)
                        w.Hp.TakeDamage(new DamageInfo { amount = 60f, kind = "swarm_grenade", origin = p });
                FxUtil.Sphere(p, 2.5f, new Color(1f, 0.5f, 0.7f, 0.5f), 0.3f, 2f, true);
            });
        }

        void Done()
        {
            _attacking = false;
            if (_body != null) FxUtil.Tint(_body, _baseColor, 0f);
        }

        Health NearestFamily()
        {
            Health best = null; float bestD = float.MaxValue;
            foreach (var h in Health.All)
            {
                if (h == null || h.team != Team.Family || !h.IsAlive || h.Identity == null) continue;
                float d = (h.transform.position - transform.position).sqrMagnitude;
                if (h.Identity.role == FighterRole.Hero) d *= 0.7f; // slight player preference
                if (d < bestD) { bestD = d; best = h; }
            }
            return best;
        }

        bool HasLineOfSight(Health t)
        {
            Vector3 from = transform.position + Vector3.up * 1.5f, to = t.transform.position + Vector3.up;
            if (!Physics.Raycast(from, (to - from).normalized, out RaycastHit hit, Vector3.Distance(from, to), ~0, QueryTriggerInteraction.Ignore)) return true;
            return hit.collider.GetComponentInParent<Health>() == t;
        }

        void MoveTo(Vector3 p)
        {
            if (!AgentReady || Time.time < _nextPath) return;
            _nextPath = Time.time + 0.25f;
            _agent.isStopped = false;
            _agent.speed = speed;
            _agent.SetDestination(p);
        }

        void Stop()
        {
            if (!AgentReady) return;
            _agent.isStopped = true;
            _agent.ResetPath();
        }

        void Face(Vector3 p)
        {
            Vector3 d = CombatQuery.Flat(p - transform.position);
            if (d.sqrMagnitude > 1e-4f) transform.rotation = Quaternion.RotateTowards(transform.rotation, Quaternion.LookRotation(d.normalized), 720f * Time.deltaTime);
        }
    }
}
