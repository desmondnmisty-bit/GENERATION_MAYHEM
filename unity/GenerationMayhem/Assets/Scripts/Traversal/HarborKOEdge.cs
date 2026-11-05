// Copyright Dark Logic Studios. Generation Mayhem.
// §3.4 / §4 Harbor edge — the only lethal edge.

using System.Collections;
using UnityEngine;
using UnityEngine.AI;

namespace GenerationMayhem.Traversal
{
    /// <summary>
    /// Water trigger below the quay.
    ///  Boss → during an active Slingshot KO: boss_knocked_out. Otherwise: pushed to the nearest quay point + short stun (BossHarborBounce).
    ///  Hero/Ally → respawn on the quay after 2 s, lose 10% max HP (HeroFellInHarbor event). No match loss.
    ///  Grunt → out of the match.
    /// This component never decides victory on its own.
    /// </summary>
    [RequireComponent(typeof(Collider))]
    public class HarborKOEdge : MonoBehaviour
    {
        public Transform quayRespawn;
        public float heroRespawnDelay = 2f;
        [Tooltip("Points along the quay edge (on the deck). Boss without an active KO is pushed to the nearest one.")]
        public Transform[] quayPoints;
        public float bossBounceStun = 1.5f;

        void Awake() => GetComponent<Collider>().isTrigger = true;

        void OnTriggerEnter(Collider other)
        {
            var id = other.GetComponentInParent<FighterIdentity>();
            if (id == null) return;
            switch (id.role)
            {
                case FighterRole.Boss:
                    var ko = id.GetComponent<BossKOSequence>();
                    if (ko != null && ko.KOInProgress) ko.OnWaterContact();
                    else BounceBoss(id.gameObject); // design answer: nearest quay + short stun, never a win
                    break;
                case FighterRole.Hero:
                case FighterRole.Ally:
                    StartCoroutine(RespawnHero(id.gameObject));
                    break;
                default:
                    TraversalEvents.RaiseGruntOutOfMatch(id.gameObject);
                    id.gameObject.SetActive(false);
                    break;
            }
        }

        void BounceBoss(GameObject boss)
        {
            Transform best = quayRespawn; float bestD = float.MaxValue;
            if (quayPoints != null)
                foreach (var q in quayPoints)
                {
                    if (q == null) continue;
                    float d = (q.position - boss.transform.position).sqrMagnitude;
                    if (d < bestD) { bestD = d; best = q; }
                }
            if (best != null) Teleport(boss, best);
            TraversalEvents.RaiseBossHarborBounce(boss, bossBounceStun);
        }

        static void Teleport(GameObject go, Transform to)
        {
            var cc = go.GetComponent<CharacterController>();
            var agent = go.GetComponent<NavMeshAgent>();
            if (cc != null) cc.enabled = false;
            if (agent != null && agent.enabled) agent.Warp(to.position);
            else go.transform.position = to.position;
            go.transform.rotation = to.rotation;
            if (cc != null) cc.enabled = true;
        }

        IEnumerator RespawnHero(GameObject hero)
        {
            TraversalEvents.RaiseHeroFellInHarbor(hero);
            yield return new WaitForSeconds(heroRespawnDelay);
            if (hero == null || quayRespawn == null) yield break;
            Teleport(hero, quayRespawn);
            var t = hero.GetComponent<SkaterTraversal>();
            if (t != null) { t.ResetTraversal(); t.Pawn.SetVelocity(Vector3.zero); }
        }
    }
}
