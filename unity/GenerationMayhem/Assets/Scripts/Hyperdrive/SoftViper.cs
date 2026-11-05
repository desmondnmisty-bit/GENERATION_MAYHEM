// Pink Viper stub for L2: kind = Swarm/Cobra/Fang/Hive. Chases nearest girl, grabs → Frenzy rises.
using UnityEngine;
namespace GenerationMayhem.Hyperdrive
{
    public enum ViperKindL2 { Swarm, Cobra, Fang, Hive }
    public class SoftViper : MonoBehaviour
    {
        public ViperKindL2 kind; float _cd;
        void Update()
        {
            SoftHP best = null; float bd = 30f;
            foreach (var h in FindObjectsByType<SoftHP>(FindObjectsSortMode.None)) if (h.isGirl && h.hp > 0) { float d = Vector3.Distance(h.transform.position, transform.position); if (d < bd) { bd = d; best = h; } }
            if (!best) return;
            transform.position = Vector3.MoveTowards(transform.position, best.transform.position, (kind == ViperKindL2.Fang ? 5f : 3f) * Time.deltaTime);
            if (bd < 1.4f && (_cd -= Time.deltaTime) <= 0) { _cd = 1.2f; best.ApplyDamage(kind == ViperKindL2.Cobra ? 10f : 5f); if (kind == ViperKindL2.Fang && MomsFrenzy.Instance) MomsFrenzy.Instance.GirlGrabbed(best.girlName); }
        }
    }
}
