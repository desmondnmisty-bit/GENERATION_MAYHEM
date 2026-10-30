// Dark Logic Studios. Generation Mayhem — upgrade card data.
using UnityEngine;

namespace GenerationMayhem.UI
{
    [CreateAssetMenu(menuName = "Generation Mayhem/Weapon Upgrade", fileName = "UPG_New")]
    public class WeaponUpgradeDef : ScriptableObject
    {
        public string id = "upg";
        public string fighter = "Vixen";
        public string weapon = "Sonic Resonator";
        public string title = "DAMAGE+";
        public string punch = "+15% hit";
        public UpgradeStat stat = UpgradeStat.Damage;
        public float amountPerLevel = 0.15f;
        public int cost = 100;
        public int maxLevel = 5;

        public static WeaponUpgradeDef Make(string id, string fighter, string weapon, string title, string punch, UpgradeStat stat, float amt, int cost)
        {
            var d = CreateInstance<WeaponUpgradeDef>();
            d.id = id; d.fighter = fighter; d.weapon = weapon; d.title = title; d.punch = punch; d.stat = stat; d.amountPerLevel = amt; d.cost = cost;
            d.name = id; return d;
        }
    }

}
