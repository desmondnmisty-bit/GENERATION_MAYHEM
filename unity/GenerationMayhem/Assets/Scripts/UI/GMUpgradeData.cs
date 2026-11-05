// Dark Logic Studios. Generation Mayhem — Phase 0 UI. Upgrade data + save.
using System;
using System.Collections.Generic;
using UnityEngine;

namespace GenerationMayhem.UI
{
    public enum UpgradeStat { Damage, FireRate, ClipHeat, SpecialCooldown, FinisherCharge, ArmorPierce }

    /// Built-in Phase 0 catalog (also drop WeaponUpgradeDef assets into Resources/Upgrades to extend/override).
    public static class UpgradeCatalog
    {
        static List<WeaponUpgradeDef> _all;
        public static List<WeaponUpgradeDef> All
        {
            get
            {
                if (_all != null) return _all;
                _all = new List<WeaponUpgradeDef>(Resources.LoadAll<WeaponUpgradeDef>("Upgrades"));
                if (_all.Count == 0)
                {
                    _all.Add(WeaponUpgradeDef.Make("vix_res_dmg",  "Vixen",  "Sonic Resonator", "DAMAGE+",       "+15% hit",        UpgradeStat.Damage, 0.15f, 120));
                    _all.Add(WeaponUpgradeDef.Make("vix_res_cd",   "Vixen",  "Sonic Resonator", "PULSE COOLDOWN-", "-12% cooldown",  UpgradeStat.SpecialCooldown, 0.12f, 140));
                    _all.Add(WeaponUpgradeDef.Make("vix_fin",      "Vixen",  "Slingshot",       "FINISHER CHARGE+", "+20% charge",   UpgradeStat.FinisherCharge, 0.20f, 160));
                    _all.Add(WeaponUpgradeDef.Make("kai_blade_dmg","Kailee", "Thermal Blades",  "BLADE HEAT+",   "+15% burn dmg",   UpgradeStat.Damage, 0.15f, 120));
                    _all.Add(WeaponUpgradeDef.Make("kai_blade_ap", "Kailee", "Thermal Blades",  "ARMOR PIERCE",  "cuts IRS plate",  UpgradeStat.ArmorPierce, 0.10f, 180));
                    _all.Add(WeaponUpgradeDef.Make("kai_1911_rof", "Kailee", "K-1911",          "FIRE RATE+",    "+12% RPM",        UpgradeStat.FireRate, 0.12f, 110));
                    _all.Add(WeaponUpgradeDef.Make("kai_1911_clip","Kailee", "K-1911",          "CLIP+",         "+2 rounds",       UpgradeStat.ClipHeat, 2f, 90));
                    _all.Add(WeaponUpgradeDef.Make("bri_coil_dmg", "Brianna","Thermal Coil Gauntlets", "COIL DAMAGE+", "+15% punch", UpgradeStat.Damage, 0.15f, 130));
                    _all.Add(WeaponUpgradeDef.Make("pay_gat_heat", "Payton", "Gatling Drum",    "HEAT SINK+",    "+20% spin time",  UpgradeStat.ClipHeat, 0.20f, 130));
                }
                return _all;
            }
        }
        public static WeaponUpgradeDef Get(string id) => All.Find(u => u.id == id);
    }

    /// Tiny PlayerPrefs save: round, scrap, upgrade levels. Powers CONTINUE.
    public static class GMSave
    {
        const string K = "GM_P0_";
        public static bool Exists => PlayerPrefs.GetInt(K + "exists", 0) == 1;
        public static int Round { get => PlayerPrefs.GetInt(K + "round", 1); set { PlayerPrefs.SetInt(K + "round", value); Touch(); } }
        public static int Scrap { get => PlayerPrefs.GetInt(K + "scrap", 0); set { PlayerPrefs.SetInt(K + "scrap", Mathf.Max(0, value)); Touch(); } }
        public static int Level(string id) => PlayerPrefs.GetInt(K + "lv_" + id, 0);
        public static void SetLevel(string id, int lv) { PlayerPrefs.SetInt(K + "lv_" + id, lv); Touch(); }
        static void Touch() { PlayerPrefs.SetInt(K + "exists", 1); PlayerPrefs.Save(); }

        public static void NewGame()
        {
            foreach (var u in UpgradeCatalog.All) PlayerPrefs.DeleteKey(K + "lv_" + u.id);
            PlayerPrefs.SetInt(K + "round", 1); PlayerPrefs.SetInt(K + "scrap", 0); Touch();
        }

        /// Total bonus for fighter+stat (e.g. Damage 0.30 = +30%). Combat code reads this.
        public static float Bonus(string fighter, UpgradeStat stat)
        {
            float t = 0f;
            foreach (var u in UpgradeCatalog.All)
                if (u.fighter == fighter && u.stat == stat) t += u.amountPerLevel * Level(u.id);
            return t;
        }
    }

    /// Hooks for RefBot / MedBot / audio. Fire-and-forget; nothing blocks on listeners.
    public static class GMFlowEvents
    {
        public static event Action<int> OnMatchStart;        // round number
        public static event Action<int, bool> OnRoundEnd;    // round, won
        public static event Action<WeaponUpgradeDef> OnUpgradePicked;
        internal static void MatchStart(int r) => OnMatchStart?.Invoke(r);
        internal static void RoundEnd(int r, bool won) => OnRoundEnd?.Invoke(r, won);
        internal static void Picked(WeaponUpgradeDef d) => OnUpgradePicked?.Invoke(d);
    }
}
