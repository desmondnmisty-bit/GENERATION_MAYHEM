// Copyright Dark Logic Studios. Generation Mayhem.
// Crane load drop (boss spec §5/§6): telegraphed shadow, then a container load drops on the zone.
// Hits everyone in the zone (both teams). Slither under it = crane stagger (5 s Shatter Window).

using System.Collections;
using UnityEngine;
using GenerationMayhem.Combat;

namespace GenerationMayhem.Match
{
    public class CraneHazard : MonoBehaviour
    {
        public string zoneName = "Zone 1";
        public float radius = 2.2f;
        public float telegraph = 2.2f;
        public float heroDamage = 45f;
        public float viperDamage = 70f;
        [Tooltip("Slither takes this fraction of max HP when the load lands on him.")]
        public float bossDamageFraction = 0.03f;
        public Renderer marker;
        public bool IsBusy { get; private set; }

        Color _markerBase = new Color(1f, 0.6f, 0.1f);

        public void Drop() { if (!IsBusy && isActiveAndEnabled) StartCoroutine(Cycle()); }

        IEnumerator Cycle()
        {
            IsBusy = true;
            var load = GameObject.CreatePrimitive(PrimitiveType.Cube);
            load.name = "CraneLoad";
            Destroy(load.GetComponent<Collider>());
            load.GetComponent<Renderer>().sharedMaterial = FxUtil.Mat(new Color(0.75f, 0.3f, 0.08f));
            load.transform.localScale = new Vector3(3f, 1.2f, 3f);
            Vector3 ground = transform.position;
            var shadow = FxUtil.Ring(ground, radius * 2f, Color.red, 0f);
            float t = 0f;
            while (t < telegraph)
            {
                t += Time.deltaTime;
                float u = t / telegraph;
                load.transform.position = ground + Vector3.up * Mathf.Lerp(14f, 6f, u);
                float pulse = 0.5f + 0.5f * Mathf.Sin(t * Mathf.Lerp(6f, 22f, u));
                if (marker != null) FxUtil.Tint(marker, Color.Lerp(_markerBase, Color.red, pulse), 1.5f);
                shadow.transform.localScale = new Vector3(radius * 2f * (0.6f + 0.4f * u), 0.01f, radius * 2f * (0.6f + 0.4f * u));
                yield return null;
            }
            float fall = 0f;
            while (fall < 0.3f)
            {
                fall += Time.deltaTime;
                load.transform.position = ground + Vector3.up * Mathf.Lerp(6f, 0.6f, fall / 0.3f);
                yield return null;
            }
            Impact(ground);
            Destroy(shadow);
            if (marker != null) FxUtil.Tint(marker, _markerBase, 0.5f);
            yield return new WaitForSeconds(1.2f);
            float up = 0f;
            while (up < 1f)
            {
                up += Time.deltaTime;
                load.transform.position = ground + Vector3.up * Mathf.Lerp(0.6f, 14f, up);
                yield return null;
            }
            Destroy(load);
            IsBusy = false;
        }

        void Impact(Vector3 at)
        {
            FxUtil.Ring(at, radius * 3f, new Color(0.9f, 0.8f, 0.6f), 0.6f);
            var boss = SlitherBoss.Instance;
            foreach (var h in Health.All.ToArray())
            {
                if (h == null || !h.IsAlive || h.Identity == null) continue;
                if (CombatQuery.Flat(h.transform.position - at).sqrMagnitude > radius * radius) continue;
                if (boss != null && h == boss.Health) { boss.CraneHit(bossDamageFraction); continue; }
                var d = new DamageInfo { amount = h.team == Team.Family ? heroDamage : viperDamage, kind = "crane_load", origin = at, knockForce = 7f, knockUp = 2f, stun = 0.8f, unblockable = true };
                h.TakeDamage(d);
            }
        }
    }
}
