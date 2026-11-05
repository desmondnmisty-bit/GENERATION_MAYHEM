// Copyright Dark Logic Studios. Generation Mayhem.
// Phase 0 weapon upgrades. Catalog + PlayerLoadout (static runtime state that survives scene reloads)
// + UpgradeApplier (pushes the loadout into the numbers the fight already uses).

using System.Collections.Generic;
using UnityEngine;
using GenerationMayhem.Combat;
using GenerationMayhem.Match;
using GenerationMayhem.Player;

namespace GenerationMayhem.Upgrades
{
    public enum UpgradeId
    {
        KaileeBladeHeat,      // GM_WPN_KAILEE_BLADE_v01  — damage
        KaileeBladeQuick,     // GM_WPN_KAILEE_BLADE_v01  — swing speed
        BriannaCoilOvercharge,// GM_WPN_BRIANNA_GAUNTLETS_v01 — bolt damage + range
        BriannaCoilRapid,     // GM_WPN_BRIANNA_GAUNTLETS_v01 — fire rate
        VixenResonatorPunch,  // GM_WPN_SONIC_RESONATOR_v01 — Vixen hit damage
        VixenResonatorSnap,   // GM_WPN_SONIC_RESONATOR_v01 — Vixen attack speed
        VixenWheelsPace,      // Chaos Wheels — top speed
        PaytonDrumShells,    // GM_WPN_DRUM_100_v01 — cannon damage + fire rate
    }

    public class UpgradeDef
    {
        public UpgradeId id;
        public string weapon, title, line, owner;
        public Color color;
        public int maxLevel = 3;
        public System.Func<int, string> describe; // level → stat text
    }

    public static class UpgradeCatalog
    {
        public static readonly Color KaileeBlue = new Color(0.15f, 0.45f, 1f), VixenRed = new Color(0.9f, 0.12f, 0.12f),
                                     BriannaGreen = new Color(0.1f, 0.7f, 0.4f), PaytonYellow = new Color(1f, 0.85f, 0.1f);

        public static readonly UpgradeDef[] All =
        {
            new UpgradeDef { id = UpgradeId.KaileeBladeHeat, owner = "Kailee", weapon = "Thermal Blades", title = "WHITE-HOT EDGE", color = KaileeBlue,
                line = "Hotter. Stabbier.", describe = l => "Blade dmg 14 → " + (14f * PlayerLoadout.KaileeDamageMul(l)).ToString("0.#") },
            new UpgradeDef { id = UpgradeId.KaileeBladeQuick, owner = "Kailee", weapon = "Thermal Blades", title = "QUICK DRAW", color = KaileeBlue,
                line = "Faster than your mouth.", describe = l => "Swing every 0.75s → " + (0.75f * PlayerLoadout.KaileeCooldownMul(l)).ToString("0.00") + "s" },
            new UpgradeDef { id = UpgradeId.BriannaCoilOvercharge, owner = "Brianna", weapon = "Thermal Coil Gauntlets", title = "COIL OVERCHARGE", color = BriannaGreen,
                line = "Coils are cooking.", describe = l => "Bolt dmg 12 → " + (12f * (1f + 0.3f * l)).ToString("0.#") + ", range 11 → " + (11f + 2f * l) },
            new UpgradeDef { id = UpgradeId.BriannaCoilRapid, owner = "Brianna", weapon = "Thermal Coil Gauntlets", title = "RAPID COIL", color = BriannaGreen,
                line = "Click. Click. Boom.", describe = l => "Fire every 1.1s → " + (1.1f * Mathf.Pow(0.82f, l)).ToString("0.00") + "s" },
            new UpgradeDef { id = UpgradeId.VixenResonatorPunch, owner = "Vixen", weapon = "Sonic Resonator", title = "RESONANT HITS", color = VixenRed,
                line = "Feel that in your teeth.", describe = l => "All Vixen hits +" + (20 * l) + "% (Heavy Kick 45 → " + (45f * (1f + 0.2f * l)).ToString("0") + ")" },
            new UpgradeDef { id = UpgradeId.VixenResonatorSnap, owner = "Vixen", weapon = "Sonic Resonator", title = "SNAP COMBO", color = VixenRed,
                line = "Blink and you're down.", describe = l => "Windup/recovery -" + Mathf.RoundToInt((1f - Mathf.Pow(0.88f, l)) * 100f) + "%" },
            new UpgradeDef { id = UpgradeId.VixenWheelsPace, owner = "Vixen", weapon = "Chaos Wheels", title = "WHEELS PACE", color = VixenRed,
                line = "Catch me.", describe = l => "Top speed +" + (10 * l) + "%" },
            new UpgradeDef { id = UpgradeId.PaytonDrumShells, owner = "Payton", weapon = "DRUM-100", title = "BIG DRUM", color = PaytonYellow,
                line = "Loading the big ones.", describe = l => "Shell dmg 15 → " + (15f * (1f + 0.25f * l)).ToString("0.#") + ", fire 1.6s → " + (1.6f * Mathf.Pow(0.9f, l)).ToString("0.00") + "s" },
        };

        public static UpgradeDef Get(UpgradeId id) { foreach (var d in All) if (d.id == id) return d; return null; }

        /// <summary>Three random, non-maxed offers.</summary>
        public static List<UpgradeDef> RollOffers(int count = 3)
        {
            var pool = new List<UpgradeDef>();
            foreach (var d in All) if (PlayerLoadout.Level(d.id) < d.maxLevel) pool.Add(d);
            var outList = new List<UpgradeDef>();
            while (outList.Count < count && pool.Count > 0) { int i = Random.Range(0, pool.Count); outList.Add(pool[i]); pool.RemoveAt(i); }
            return outList;
        }
    }

    /// <summary>The player's chosen upgrades. Static so it survives Dockyard reloads between fights.</summary>
    public static class PlayerLoadout
    {
        static readonly Dictionary<UpgradeId, int> _levels = new Dictionary<UpgradeId, int>();
        public static int Level(UpgradeId id) => _levels.TryGetValue(id, out var l) ? l : 0;
        public static int TotalPicks { get; private set; }
        public static event System.Action Changed;

        public static void Add(UpgradeId id)
        {
            var d = UpgradeCatalog.Get(id);
            _levels[id] = Mathf.Min(Level(id) + 1, d != null ? d.maxLevel : 3);
            TotalPicks++;
            Changed?.Invoke();
        }

        public static void Reset() { _levels.Clear(); TotalPicks = 0; Changed?.Invoke(); }

        public static float KaileeDamageMul(int l) => 1f + 0.25f * l;
        public static float KaileeCooldownMul(int l) => Mathf.Pow(0.85f, l);

        public static string Summary()
        {
            var sb = new System.Text.StringBuilder();
            foreach (var d in UpgradeCatalog.All) { int l = Level(d.id); if (l > 0) sb.Append(d.title).Append(" ").Append(l).Append("  "); }
            return sb.Length == 0 ? "No upgrades yet" : sb.ToString();
        }
    }

    /// <summary>Caches each fighter's base numbers once, then re-applies base × upgrades whenever the loadout changes.</summary>
    public class UpgradeApplier : MonoBehaviour
    {
        VixenCombat _vixen; SkatePawnController _pawn;
        VixenCombat.AttackDef[] _baseLight, _baseHeavy; VixenCombat.AttackDef _baseCheck; float _baseSlam;
        readonly Dictionary<AllyAI, Vector3> _allyBase = new Dictionary<AllyAI, Vector3>(); // range, damage, cooldown
        bool _cached;

        System.Collections.IEnumerator Start()
        {
            yield return null; // AllyAI.Start writes its role defaults first
            Cache();
            Apply();
            PlayerLoadout.Changed += Apply;
        }

        void OnDestroy() { PlayerLoadout.Changed -= Apply; }

        void Cache()
        {
            _vixen = FindFirstObjectByType<VixenCombat>();
            if (_vixen != null)
            {
                _pawn = _vixen.GetComponent<SkatePawnController>();
                _baseLight = (VixenCombat.AttackDef[])_vixen.lightChain.Clone();
                _baseHeavy = (VixenCombat.AttackDef[])_vixen.heavyChain.Clone();
                _baseCheck = _vixen.check; _baseSlam = _vixen.rampSlamDamage;
            }
            foreach (var a in FindObjectsByType<AllyAI>(FindObjectsSortMode.None)) _allyBase[a] = new Vector3(a.range, a.damage, a.cooldown);
            _cached = true;
        }

        VixenCombat.AttackDef Scale(VixenCombat.AttackDef a, float dmg, float spd) { a.damage *= dmg; a.windup *= spd; a.recovery *= spd; return a; }

        public void Apply()
        {
            if (!_cached) return;
            if (_vixen != null)
            {
                float dmg = 1f + 0.2f * PlayerLoadout.Level(UpgradeId.VixenResonatorPunch);
                float spd = Mathf.Pow(0.88f, PlayerLoadout.Level(UpgradeId.VixenResonatorSnap));
                for (int i = 0; i < _baseLight.Length; i++) _vixen.lightChain[i] = Scale(_baseLight[i], dmg, spd);
                for (int i = 0; i < _baseHeavy.Length; i++) _vixen.heavyChain[i] = Scale(_baseHeavy[i], dmg, spd);
                _vixen.check = Scale(_baseCheck, dmg, spd);
                _vixen.rampSlamDamage = _baseSlam * dmg;
            }
            if (_pawn != null) _pawn.UpgradeSpeedScale = 1f + 0.1f * PlayerLoadout.Level(UpgradeId.VixenWheelsPace);

            foreach (var kv in _allyBase)
            {
                var a = kv.Key; if (a == null) continue;
                Vector3 b = kv.Value;
                switch (a.role)
                {
                    case AllyRole.Kailee:
                        a.damage = b.y * PlayerLoadout.KaileeDamageMul(PlayerLoadout.Level(UpgradeId.KaileeBladeHeat));
                        a.cooldown = b.z * PlayerLoadout.KaileeCooldownMul(PlayerLoadout.Level(UpgradeId.KaileeBladeQuick));
                        break;
                    case AllyRole.Brianna:
                        int o = PlayerLoadout.Level(UpgradeId.BriannaCoilOvercharge);
                        a.damage = b.y * (1f + 0.3f * o); a.range = b.x + 2f * o;
                        a.cooldown = b.z * Mathf.Pow(0.82f, PlayerLoadout.Level(UpgradeId.BriannaCoilRapid));
                        break;
                    case AllyRole.Payton:
                        int j = PlayerLoadout.Level(UpgradeId.PaytonDrumShells);
                        a.damage = b.y * (1f + 0.25f * j); a.cooldown = b.z * Mathf.Pow(0.9f, j);
                        break;
                }
            }
            Debug.Log("[Upgrades] Applied: " + PlayerLoadout.Summary());
        }
    }
}
