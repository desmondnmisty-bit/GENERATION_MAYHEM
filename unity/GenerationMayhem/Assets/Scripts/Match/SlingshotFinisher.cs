// Copyright Dark Logic Studios. Generation Mayhem.
// The Shatter-Slingshot as a playable move. Mom's Chaos full (ShatterSlingshotStub owns that rule; this class
// never touches Synergy) → Y / F → Vixen plants, Kailee skates in, tether, Kailee is fired at Slither.
//   Slither ≤10% HP → harbor KO → boss_knocked_out → victory (the ONLY win).
//   In a Shatter Window → 20% max HP + knockdown.  Outside → 6%.

using System.Collections;
using UnityEngine;
using UnityEngine.AI;
using GenerationMayhem.Combat;
using GenerationMayhem.Player;

namespace GenerationMayhem.Match
{
    public class SlingshotFinisher : MonoBehaviour
    {
        public ShatterSlingshotStub stub;
        public Transform vixen;
        public Health kailee;
        public float maxRange = 22f;
        public float flightSpeed = 30f;
        public float impactDamageRadius = 2.5f;

        public bool Busy { get; private set; }
        Health _vixHp;
        KnockbackBody _kailKb;
        /// <summary>Why the Slingshot can't be planted right now (empty = ready or Chaos not full). The HUD shows this.</summary>
        public string GateReason { get; private set; } = "";

        void Start()
        {
            if (stub == null) stub = FindFirstObjectByType<ShatterSlingshotStub>();
            if (stub == null) { enabled = false; return; }
            if (vixen != null) { stub.Planter = vixen; _vixHp = vixen.GetComponent<Health>(); }
            if (kailee != null) _kailKb = kailee.GetComponent<KnockbackBody>();
            stub.PlantGate = Gate;
            stub.onPlantStarted.AddListener(OnPlantStarted);
            stub.onLaunchAccepted.AddListener(OnLaunchAccepted);
        }

        void OnDestroy()
        {
            if (stub == null) return;
            stub.onPlantStarted.RemoveListener(OnPlantStarted);
            stub.onLaunchAccepted.RemoveListener(OnLaunchAccepted);
        }

        void Update() { Gate(); }

        bool Gate()
        {
            var boss = SlitherBoss.Instance;
            string r = "";
            if (MatchDirector.Instance == null || MatchDirector.Instance.State != MatchState.Fighting) r = "WAIT FOR THE BELL";
            else if (Busy) r = "…";
            else if (vixen == null || kailee == null || !kailee.IsAlive) r = "KAILEE IS DOWN";
            else if (_kailKb != null && _kailKb.Pinned) r = "KAILEE IS LOCKED";
            else if (_vixHp != null && !_vixHp.IsAlive) r = "VIXEN IS DOWN";
            else if (boss == null || boss.Phase == BossPhase.KO || boss.Phase == BossPhase.Intro) r = "NO TARGET";
            else if (boss.OnGantry) r = "SLITHER IS UP ON THE GANTRY";
            else if (boss.IsEnraging) r = "SLITHER IS ENRAGING";
            else if (CombatQuery.Flat(boss.transform.position - vixen.position).magnitude > maxRange) r = "GET CLOSER TO SLITHER";
            GateReason = r;
            return r.Length == 0;
        }

        // Plant (0.45 s): Vixen braces, Kailee skates onto the tether. The window pauses; you can't miss it mid-move.
        void OnPlantStarted()
        {
            Busy = true;
            var boss = SlitherBoss.Instance;
            if (boss != null) boss.PauseWindow(true);
            MatchDirector.Say("Vixen", "Kailee. Tether. NOW.");
            var vc = vixen != null ? vixen.GetComponent<VixenCombat>() : null;
            if (vc != null) vc.CombatLocked = true;
            if (vixen != null && boss != null)
            {
                Vector3 d = CombatQuery.Flat(boss.transform.position - vixen.position);
                if (d.sqrMagnitude > 0.01f) vixen.rotation = Quaternion.LookRotation(d.normalized);
            }
            var fa = vixen != null ? vixen.GetComponent<FighterAnimator>() : null;
            if (fa != null) fa.Play("Block", 0.6f);
            StartCoroutine(KaileeToTether());
        }

        IEnumerator KaileeToTether()
        {
            if (kailee == null || vixen == null) yield break;
            var ai = kailee.GetComponent<AllyAI>();
            if (ai != null) ai.Scripted = true;
            var agent = kailee.GetComponent<NavMeshAgent>();
            if (agent != null) agent.enabled = false;
            Vector3 from = kailee.transform.position;
            float t = 0f, dur = 0.4f;
            while (t < dur)
            {
                t += Time.deltaTime;
                Vector3 to = vixen.position + vixen.forward * 1.1f;
                kailee.transform.position = Vector3.Lerp(from, to, Mathf.SmoothStep(0f, 1f, t / dur));
                kailee.transform.rotation = vixen.rotation;
                yield return null;
            }
            // If the window closes with nobody accepting (shouldn't happen solo), give control back.
            yield return new WaitForSeconds(1.2f);
            if (Busy && !_flying) Finish();
        }

        bool _flying;

        void OnLaunchAccepted()
        {
            StopAllCoroutines();
            StartCoroutine(Flight());
        }

        IEnumerator Flight()
        {
            _flying = true;
            var boss = SlitherBoss.Instance;
            if (kailee == null || boss == null) { Finish(); yield break; }
            var ai = kailee.GetComponent<AllyAI>();
            if (ai != null) ai.Scripted = true;
            var agent = kailee.GetComponent<NavMeshAgent>();
            if (agent != null) agent.enabled = false;
            var kb = kailee.GetComponent<KnockbackBody>();
            var hp = kailee;
            bool wasInv = hp.invulnerable;
            hp.invulnerable = true;
            MatchDirector.Say("Kailee", boss.Health.Normalized <= 0.10f + 1e-4f ? "Say bye, Slither!" : "SHATTER-SLINGSHOT!");
            var trail = FxUtil.Line(kailee.transform, new Color(0.25f, 0.55f, 1f), 0.5f);
            Vector3 start = kailee.transform.position + Vector3.up * 0.5f;
            trail.SetPosition(0, start);
            float maxT = 1.5f, t = 0f;
            while (t < maxT)
            {
                t += Time.deltaTime;
                Vector3 target = boss.transform.position + Vector3.up * 1f;
                Vector3 p = Vector3.MoveTowards(kailee.transform.position, target, flightSpeed * Time.deltaTime);
                Vector3 d = CombatQuery.Flat(target - p);
                if (d.sqrMagnitude > 0.01f) kailee.transform.rotation = Quaternion.LookRotation(d.normalized);
                kailee.transform.position = p;
                trail.SetPosition(1, p);
                if ((target - p).sqrMagnitude < 1.4f * 1.4f) break;
                yield return null;
            }
            Destroy(trail.gameObject, 0.4f);
            Vector3 dir = CombatQuery.Flat(boss.transform.position - start).normalized;
            if (dir.sqrMagnitude < 0.01f) dir = vixen != null ? vixen.forward : Vector3.forward;
            FxUtil.Sphere(boss.transform.position + Vector3.up, 3.5f, new Color(0.3f, 0.6f, 1f, 0.6f), 0.35f, 3f, true);
            boss.ApplySlingshot(dir);
            // Splash damage on nearby Vipers.
            CombatQuery.Strike(Team.Family, boss.transform.position, impactDamageRadius,
                new DamageInfo { amount = 50f, source = kailee.gameObject, kind = "slingshot_splash", origin = boss.transform.position - dir, knockForce = 10f, knockUp = 2f, stun = 0.6f, shove = true },
                null, new System.Collections.Generic.HashSet<Health> { boss.Health }, false);
            // Kailee rebounds onto the deck.
            Vector3 land = kailee.transform.position - dir * 2.5f;
            if (NavMesh.SamplePosition(land, out NavMeshHit nh, 6f, NavMesh.AllAreas)) land = nh.position;
            Vector3 from = kailee.transform.position;
            float u = 0f;
            while (u < 0.45f)
            {
                u += Time.deltaTime;
                float k = u / 0.45f;
                Vector3 p = Vector3.Lerp(from, land, k); p.y += 2f * 4f * k * (1f - k);
                kailee.transform.position = p;
                yield return null;
            }
            kailee.transform.position = land;
            if (agent != null) { agent.enabled = true; if (agent.isOnNavMesh) agent.Warp(land); }
            hp.invulnerable = wasInv;
            if (kb != null) kb.Stun(0.2f);
            Finish();
        }

        void Finish()
        {
            _flying = false;
            Busy = false;
            var boss = SlitherBoss.Instance;
            if (boss != null) boss.PauseWindow(false);
            if (kailee != null)
            {
                var ai = kailee.GetComponent<AllyAI>();
                if (ai != null) ai.Scripted = false;
                var agent = kailee.GetComponent<NavMeshAgent>();
                if (agent != null && !agent.enabled)
                {
                    agent.enabled = true;
                    if (!agent.isOnNavMesh && NavMesh.SamplePosition(kailee.transform.position, out NavMeshHit h, 6f, NavMesh.AllAreas)) agent.Warp(h.position);
                }
            }
            var vc = vixen != null ? vixen.GetComponent<VixenCombat>() : null;
            if (vc != null) vc.CombatLocked = false;
        }
    }
}
