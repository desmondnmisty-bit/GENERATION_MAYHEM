// Ally Soft kits for L2 (stubs that fire placeholder FX/projectiles): Brianna thermal gauntlets + chest-buster,
// Payton Gatling, Kailee .40 + Slide Under Slice (see Kailee/SlideUnderSlice.cs).
using UnityEngine;
namespace GenerationMayhem.Hyperdrive
{
    public enum HyperdriveAlly { Brianna, Payton, Kailee }
    public class HyperdriveAllyKit : MonoBehaviour
    {
        public HyperdriveAlly who; public Transform follow; public Vector3 offset = new Vector3(2.5f, 0, -2.5f);
        public float range = 14f; float _cd, _special;
        void Update()
        {
            if (follow) transform.position = Vector3.Lerp(transform.position, follow.position + follow.rotation * offset, Time.deltaTime * 4f);
            _cd -= Time.deltaTime; _special -= Time.deltaTime;
            var t = Nearest(); if (t == null) return; transform.LookAt(new Vector3(t.position.x, transform.position.y, t.position.z));
            float d = Vector3.Distance(t.position, transform.position);
            switch (who)
            {
                case HyperdriveAlly.Brianna:
                    if (_special <= 0 && d < 4f) { _special = 6f; Hit(t, 40f, "CHEST-BUSTER"); }
                    else if (_cd <= 0 && d < 3f) { _cd = 0.6f; Hit(t, 12f, "THERMAL GAUNTLETS"); } break;
                case HyperdriveAlly.Payton:
                    if (_cd <= 0 && d < range) { _cd = 0.09f; Hit(t, 2.2f, null); } break; // Gatling
                case HyperdriveAlly.Kailee:
                    if (_special <= 0 && d < 5f) { _special = 5f; Hit(t, 30f, "SLIDE UNDER SLICE"); }
                    else if (_cd <= 0 && d < range) { _cd = 0.45f; Hit(t, 9f, null); } break; // .40
            }
        }
        Transform Nearest()
        {
            Transform best = null; float bd = range;
            foreach (var v in GameObject.FindGameObjectsWithTag("Enemy")) { float d = Vector3.Distance(v.transform.position, transform.position); if (d < bd) { bd = d; best = v.transform; } }
            return best;
        }
        void Hit(Transform t, float dmg, string callout)
        {
            var hp = t.GetComponent<SoftHP>(); if (hp) hp.ApplyDamage(dmg * (MomsFrenzy.Instance && MomsFrenzy.Instance.Raging ? 1.3f : 1f));
            Debug.DrawLine(transform.position + Vector3.up, t.position + Vector3.up, Color.yellow, 0.1f);
            if (callout != null) HyperdriveHUD.Callout(who.ToString().ToUpper() + " · " + callout);
        }
    }
}
