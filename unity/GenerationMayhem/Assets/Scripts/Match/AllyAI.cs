// Copyright Dark Logic Studios. Generation Mayhem.
// AI family fighters for this match: Kailee (Slingshot partner, Check-revive, breaks Viper-Lock, Blue Blaze Blitz),
// Brianna (thermal bolts, Overwatch Lock) and Payton (shoulder cannons, Afterburn Volley). Payton sits this match out.

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;
using GenerationMayhem.Combat;
using GenerationMayhem.Traversal;

namespace GenerationMayhem.Match
{
    public enum AllyRole { Kailee, Brianna, Payton }

    [RequireComponent(typeof(Health))]
    public class AllyAI : MonoBehaviour
    {
        public AllyRole role = AllyRole.Kailee;
        public Transform leader;
        public Vector3 followOffset = new Vector3(-2f, 0f, -2f);
        public float speed = 10f;
        public float engageRadius = 14f;

        [Header("Basic attack")]
        public float range = 1.8f;
        public float damage = 14f;
        public float cooldown = 0.8f;

        [Header("Finishers (pay Kinetic Synergy)")]
        public float finisherCooldown = 14f;
        public float blitzCost = 35f, overwatchCost = 30f, volleyCost = 40f;

        public bool Scripted { get; set; }   // Slingshot flight etc.
        public Health Hp { get; private set; }
        public string Status { get; private set; } = "";

        NavMeshAgent _agent;
        KnockbackBody _kb;
        FighterAnimator _anim;
        ShatterSlingshotStub _stub;
        Health _leaderHp;
        float _nextAttack, _nextFinisher, _nextPath, _reviveTimer, _breakTimer;
        bool _busy;
        int _combo;

        bool AgentReady => _agent != null && _agent.enabled && _agent.isOnNavMesh;
        SlitherBoss Boss => SlitherBoss.Instance;

        void Awake()
        {
            Hp = GetComponent<Health>();
            _agent = GetComponent<NavMeshAgent>();
            _kb = GetComponent<KnockbackBody>();
            _anim = GetComponent<FighterAnimator>();
        }

        void Start()
        {
            _stub = FindFirstObjectByType<ShatterSlingshotStub>();
            if (leader != null) _leaderHp = leader.GetComponent<Health>();
            if (role == AllyRole.Kailee && _stub != null) _stub.onShatterWindowOpen.AddListener(OnShatterWindowOpen);
            _nextFinisher = Time.time + 12f;
            switch (role)
            {
                case AllyRole.Kailee: range = 1.8f; damage = 14f; cooldown = 0.75f; break;      // flaming wrist-blade
                case AllyRole.Brianna: range = 11f; damage = 12f; cooldown = 1.1f; break;       // thermal coil bolts
                case AllyRole.Payton: range = 12f; damage = 15f; cooldown = 1.6f; break;       // shoulder cannon shells
            }
        }

        void OnDestroy() { if (_stub != null) _stub.onShatterWindowOpen.RemoveListener(OnShatterWindowOpen); }

        // Solo: the AI partner accepts the tether (boss spec §6).
        void OnShatterWindowOpen()
        {
            if (!Hp.IsAlive || _kb != null && _kb.Pinned || leader == null) return;
            if ((leader.position - transform.position).sqrMagnitude > 30f * 30f) return;
            _stub.TryAcceptLaunch(gameObject);
        }

        void Update()
        {
            Status = "";
            if (Scripted || MatchDirector.IsOver) { if (MatchDirector.IsOver) Stop(); return; }
            if (!Hp.IsAlive) { Status = "DOWN"; Stop(); return; }
            if (_busy || _kb != null && (_kb.InKnockback || _kb.IsStunned) || !AgentReady) return;
            _agent.speed = speed * MistCloud.SlowFactorAt(transform.position, true);

            if (role == AllyRole.Kailee && KaileeDuties()) return;
            if (TryFinisher()) return;

            var target = PickTarget();
            if (target != null) { Engage(target); return; }
            Follow();
        }

        // ---------------- Kailee: break Viper-Lock, Check-revive ----------------
        bool KaileeDuties()
        {
            var boss = Boss;
            if (boss != null && boss.LockVictim != null && boss.LockVictim != Hp)
            {
                Status = "BREAKING THE LOCK";
                float d = Flat(boss.transform.position);
                if (d > 2.8f) { _breakTimer = 0f; MoveTo(boss.transform.position); return true; }
                Stop(); Face(boss.transform.position);
                _breakTimer += Time.deltaTime;
                if (_breakTimer >= 0.6f) { _breakTimer = 0f; if (_anim != null) _anim.Play("Check_R", 0.5f); boss.BreakLock(gameObject); }
                return true;
            }
            foreach (var h in Health.All)
            {
                if (h == null || h == Hp || h.team != Team.Family || !h.IsDown || Flat(h.transform.position) > 20f) continue;
                Status = "REVIVING";
                if (Flat(h.transform.position) > 1.8f) { _reviveTimer = 0f; MoveTo(h.transform.position); return true; }
                Stop();
                _reviveTimer += Time.deltaTime;
                if (_reviveTimer >= 1.2f)
                {
                    _reviveTimer = 0f;
                    if (_anim != null) _anim.Play("Check_L", 0.5f);
                    h.Revive(0.5f);
                    MatchDirector.Say("Kailee", "Up, up, we're not done.");
                }
                return true;
            }
            return false;
        }

        // ---------------- Targeting / basic attacks ----------------
        Health PickTarget()
        {
            Vector3 anchor = leader != null ? leader.position : transform.position;
            var boss = Boss;
            if (boss != null && boss.Health.IsAlive && boss.WindowOpen && Flat(boss.transform.position) < 20f) return boss.Health;
            Health best = null; float bestD = engageRadius * engageRadius;
            foreach (var h in Health.All)
            {
                if (h == null || h.team == Team.Family || !h.IsAlive || h.Identity == null) continue;
                if (boss != null && h == boss.Health && boss.OnGantry && role == AllyRole.Kailee) continue; // can't reach him up there
                float d = (h.transform.position - anchor).sqrMagnitude;
                if (d < bestD) { bestD = d; best = h; }
            }
            return best;
        }

        void Engage(Health target)
        {
            float d = Flat(target.transform.position);
            bool ranged = role != AllyRole.Kailee;
            if (d > range * 0.9f) { MoveTo(target.transform.position); return; }
            if (ranged && d < range * 0.35f) { MoveTo(transform.position - (target.transform.position - transform.position).normalized * 4f); return; }
            Stop(); Face(target.transform.position);
            if (Time.time < _nextAttack) return;
            _nextAttack = Time.time + cooldown;
            if (role == AllyRole.Kailee)
            {
                _combo = (_combo + 1) % 3;
                if (_anim != null) _anim.Play(_combo == 2 ? "Attack_Kick_L" : (_combo == 1 ? "Attack_Punch_R" : "Attack_Punch_L"), 0.4f);
                var info = DamageInfo.Make(_combo == 2 ? damage * 1.6f : damage, gameObject, "kailee_blade");
                info.knockDir = transform.forward; info.knockForce = _combo == 2 ? 6f : 2f; info.stun = 0.3f; info.shove = _combo == 2;
                if (CombatQuery.Strike(Team.Family, transform.position + Vector3.up + transform.forward * 1.1f, 1.1f, info) > 0 && _stub != null) _stub.ContributeSynergy(2f);
            }
            else
            {
                Color c = role == AllyRole.Brianna ? new Color(1f, 0.5f, 0.1f) : new Color(1f, 0.85f, 0.1f);
                float apex = role == AllyRole.Payton ? 1.5f : 0f;
                float aoe = role == AllyRole.Payton ? 1.5f : 0.8f;
                var tgt = target;
                if (_anim != null) _anim.Play("Attack_Punch_R", 0.4f);
                Projectile.Fire(transform.position + Vector3.up * 1.6f, tgt.transform.position + Vector3.up, tgt.transform, 26f, apex, c, 0.3f, p =>
                {
                    var info = new DamageInfo { amount = damage, source = gameObject, kind = role == AllyRole.Brianna ? "thermal_bolt" : "cannon_shell", origin = transform.position, knockForce = 1.5f, stun = 0.15f };
                    if (CombatQuery.Strike(Team.Family, p, aoe, info) > 0 && _stub != null) _stub.ContributeSynergy(1.5f);
                });
            }
        }

        void Follow()
        {
            if (leader == null) return;
            Vector3 slot = leader.position + leader.rotation * followOffset;
            if (Flat(slot) > 1.5f) MoveTo(slot); else Stop();
        }

        // ---------------- Finishers ----------------
        bool TryFinisher()
        {
            if (Time.time < _nextFinisher || _stub == null) return false;
            var boss = Boss;
            bool bossNearWindow = boss != null && boss.Health.IsAlive && boss.WindowOpen && Flat(boss.transform.position) < 12f;
            switch (role)
            {
                case AllyRole.Kailee:
                    if ((CombatQuery.CountEnemies(Team.Family, transform.position, 8f) >= 2 || bossNearWindow) && _stub.TrySpendSynergy(blitzCost))
                    { StartCoroutine(BlueBlazeBlitz()); return true; }
                    break;
                case AllyRole.Brianna:
                    if ((CombatQuery.CountEnemies(Team.Family, transform.position, 16f) >= 2 || bossNearWindow) && _stub.TrySpendSynergy(overwatchCost))
                    { OverwatchLock(); return true; }
                    break;
                case AllyRole.Payton:
                    bool wallNear = false;
                    foreach (var w in MistWall.All) if (w != null && Flat(w.transform.position) < 14f) { wallNear = true; break; }
                    if ((CombatQuery.CountEnemies(Team.Family, transform.position, 16f) >= 2 || bossNearWindow || wallNear) && _stub.TrySpendSynergy(volleyCost))
                    { StartCoroutine(AfterburnVolley()); return true; }
                    break;
            }
            return false;
        }

        /// <summary>Kailee: dash through a Viper line. On Slither the final X-slash shoves him ~3 m along the dash line.</summary>
        IEnumerator BlueBlazeBlitz()
        {
            _busy = true; _nextFinisher = Time.time + finisherCooldown;
            MatchDirector.Say("Kailee", "BLUE BLAZE BLITZ!");
            var t0 = PickTarget();
            Vector3 dir = t0 != null ? CombatQuery.Flat(t0.transform.position - transform.position).normalized : transform.forward;
            if (dir.sqrMagnitude < 0.01f) dir = transform.forward;
            transform.rotation = Quaternion.LookRotation(dir);
            Stop();
            var hit = new HashSet<Health>();
            float t = 0f, dur = 0.35f;
            var trailFrom = transform.position;
            while (t < dur)
            {
                t += Time.deltaTime;
                if (AgentReady) _agent.Move(dir * (9f / dur) * Time.deltaTime);
                foreach (var h in Health.All.ToArray())
                {
                    if (h == null || h.team == Team.Family || !h.IsAlive || hit.Contains(h)) continue;
                    if ((h.transform.position - transform.position).sqrMagnitude > 1.8f * 1.8f) continue;
                    hit.Add(h);
                    bool isBoss = Boss != null && h == Boss.Health;
                    var d = new DamageInfo
                    {
                        amount = isBoss ? h.maxHP * (Boss.WindowOpen ? 0.08f : 0.03f) : 40f,
                        source = gameObject, kind = "blue_blaze_blitz", origin = transform.position,
                        knockDir = dir, knockForce = isBoss ? 7f : 9f, knockUp = 1f, stun = 0.5f, shove = true, aiFinisher = true
                    };
                    h.TakeDamage(d);
                }
                yield return null;
            }
            FxUtil.Strip(trailFrom, transform.position, 0.8f, new Color(0.2f, 0.5f, 1f), 1.5f);
            yield return new WaitForSeconds(0.3f);
            _busy = false;
        }

        /// <summary>Brianna: heat-tag up to 5 targets. A heated target takes ×1.5.</summary>
        void OverwatchLock()
        {
            _nextFinisher = Time.time + finisherCooldown;
            MatchDirector.Say("Brianna", "Five tagged. Overwatch Lock, now!");
            var list = new List<Health>();
            foreach (var h in Health.All) if (h != null && h.team != Team.Family && h.IsAlive && h.Identity != null && Flat(h.transform.position) < 18f) list.Add(h);
            list.Sort((a, b) => Flat(a.transform.position).CompareTo(Flat(b.transform.position)));
            bool bossTagged = false;
            for (int i = 0; i < Mathf.Min(5, list.Count); i++)
            {
                var h = list[i];
                h.HeatedUntil = Time.time + 8f;
                FxUtil.Sphere(h.transform.position + Vector3.up * 2.6f, 0.35f, new Color(1f, 0.4f, 0f), 8f, 3f).transform.SetParent(h.transform, true);
                h.TakeDamage(new DamageInfo { amount = 25f, source = gameObject, kind = "overwatch_lock", origin = transform.position, stun = 0.3f, aiFinisher = true });
                if (Boss != null && h == Boss.Health) bossTagged = true;
            }
            if (bossTagged) MatchDirector.Say("Brianna", "He's running hot. Hit him!");
        }

        /// <summary>Payton: 4-tube barrage. Shreds lanes, bursts mist walls, recoil push can shove Slither (Toxic Slip setup).</summary>
        IEnumerator AfterburnVolley()
        {
            _busy = true; _nextFinisher = Time.time + finisherCooldown;
            Stop();
            MatchDirector.Say("Payton", "All four tubes hot. AFTERBURN VOLLEY!");
            var targets = new List<Transform>();
            foreach (var w in MistWall.All) if (w != null && Flat(w.transform.position) < 16f) { targets.Add(w.transform); break; }
            foreach (var h in Health.All)
                if (h != null && h.team != Team.Family && h.IsAlive && h.Identity != null && Flat(h.transform.position) < 18f && targets.Count < 4) targets.Add(h.transform);
            if (targets.Count == 0) { _busy = false; yield break; }
            bool burst = false;
            for (int i = 0; i < 4; i++)
            {
                var tgt = targets[i % targets.Count];
                if (tgt == null) continue;
                Face(tgt.position);
                Vector3 from = transform.position + Vector3.up * 2f + transform.right * (i % 2 == 0 ? -0.4f : 0.4f);
                Projectile.Fire(from, tgt.position, tgt, 24f, 2f, new Color(1f, 0.85f, 0.1f), 0.4f, p =>
                {
                    FxUtil.Sphere(p, 2.5f, new Color(1f, 0.6f, 0.1f, 0.5f), 0.3f, 2f, true);
                    foreach (var h in Health.All.ToArray())
                    {
                        if (h == null || h.team == Team.Family || !h.IsAlive || (h.transform.position - p).sqrMagnitude > 2.8f * 2.8f) continue;
                        bool isBoss = Boss != null && h == Boss.Health;
                        bool isWall = h.GetComponent<MistWall>() != null;
                        var d = new DamageInfo
                        {
                            amount = isBoss ? h.maxHP * 0.0125f : (isWall ? 50f : 35f),
                            source = gameObject, kind = "afterburn_volley", origin = transform.position,
                            knockDir = CombatQuery.Flat(p - transform.position), knockForce = isBoss ? 5f : 6f, knockUp = 1f,
                            stun = 0.3f, shove = true, aiFinisher = true
                        };
                        if (h.TakeDamage(d) > 0f && isWall && !h.IsAlive) burst = true;
                    }
                });
                yield return new WaitForSeconds(0.15f);
            }
            yield return new WaitForSeconds(0.8f);
            if (burst) MatchDirector.Say("Payton", "Fog's gone. You're welcome.");
            _busy = false;
        }

        // ---------------- helpers ----------------
        void MoveTo(Vector3 p)
        {
            if (!AgentReady || Time.time < _nextPath) return;
            _nextPath = Time.time + 0.25f;
            _agent.isStopped = false;
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

        float Flat(Vector3 p) => CombatQuery.Flat(p - transform.position).magnitude;
    }
}
