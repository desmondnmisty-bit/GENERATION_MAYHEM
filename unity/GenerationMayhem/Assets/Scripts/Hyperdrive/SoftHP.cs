// Minimal L2 Soft HP (Vipers + Vixen + girls). Girls report hits/downs to Mom's Frenzy.
using UnityEngine;
namespace GenerationMayhem.Hyperdrive
{
    public class SoftHP : MonoBehaviour
    {
        public float maxHP = 100f, hp = 100f; public bool isGirl; public string girlName;
        public void ApplyDamage(float d)
        {
            if (hp <= 0) return; hp -= d;
            if (isGirl && MomsFrenzy.Instance) { if (hp <= 0) MomsFrenzy.Instance.GirlDowned(girlName); else MomsFrenzy.Instance.GirlHit(girlName); }
            else if (name == "SkatePawn" && MomsFrenzy.Instance && !MomsFrenzy.Instance.Raging) MomsFrenzy.Instance.VixenHit();
            if (hp <= 0 && CompareTag("Enemy")) { HyperdriveHUD.Callout("PINK VIPER DOWN"); Destroy(gameObject, 0.1f); }
        }
    }
}
