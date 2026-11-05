// WEAPON UPGRADE SCREEN — between rounds. Pick 1 card, CONFIRM, back to the fight.
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.UI;

namespace GenerationMayhem.UI
{
    public class WeaponUpgradeController : MonoBehaviour
    {
        [Range(3, 6)] public int cardCount = 4;
        [Tooltip("Phase 0 MVP fighters. Add Brianna / Payton to surface their kit.")]
        public string[] fighters = { "Vixen", "Kailee" };

        WeaponUpgradeDef _picked; Button _confirm; Text _scrapTxt, _confirmTxt;
        readonly List<(WeaponUpgradeDef def, Image img)> _cards = new List<(WeaponUpgradeDef, Image)>();

        void Start()
        {
            Time.timeScale = 1f;
            var c = GMUIKit.Canvas("WeaponUpgradeCanvas", 200).transform;
            GMUIKit.Panel(c, "BG", GMUIKit.Black, Vector2.zero, Vector2.one);
            GMUIKit.Panel(c, "PinkBolt", GMUIKit.Pink, new Vector2(0.05f, 0.835f), new Vector2(0.95f, 0.84f));
            GMUIKit.Label(GMUIKit.Rect(c, "Title", new Vector2(0.05f, 0.85f), new Vector2(0.7f, 0.97f)), "ARM UP  //  ROUND " + GMSave.Round, 72, GMUIKit.Pink, TextAnchor.MiddleLeft);
            _scrapTxt = GMUIKit.Label(GMUIKit.Rect(c, "Scrap", new Vector2(0.6f, 0.85f), new Vector2(0.95f, 0.97f)), "", 54, GMUIKit.Toxic, TextAnchor.MiddleRight);

            // loadout strip
            var lo = GMUIKit.Rect(c, "Loadout", new Vector2(0.05f, 0.72f), new Vector2(0.95f, 0.82f));
            GMUIKit.Label(lo, Loadout(), 30, GMUIKit.Cyan, TextAnchor.MiddleLeft, FontStyle.Normal);

            var row = GMUIKit.Rect(c, "Cards", new Vector2(0.05f, 0.2f), new Vector2(0.95f, 0.7f));
            var h = row.gameObject.AddComponent<HorizontalLayoutGroup>(); h.spacing = 28; h.childForceExpandWidth = true; h.childForceExpandHeight = true; h.childControlWidth = true; h.childControlHeight = true;
            foreach (var d in Roll()) MakeCard(row, d);

            var bar = GMUIKit.Rect(c, "Bar", new Vector2(0.3f, 0.05f), new Vector2(0.7f, 0.15f));
            var hb = bar.gameObject.AddComponent<HorizontalLayoutGroup>(); hb.spacing = 30; hb.childControlWidth = true; hb.childControlHeight = true; hb.childForceExpandWidth = true;
            GMUIKit.Button(bar, "SKIP", new Color(0.7f, 0.7f, 0.75f), () => Finish(null));
            _confirm = GMUIKit.Button(bar, "CONFIRM", GMUIKit.Pink, () => Finish(_picked));
            _confirmTxt = _confirm.GetComponentInChildren<Text>();
            Refresh();
        }

        string Loadout()
        {
            var parts = new List<string>();
            foreach (var f in fighters)
            {
                var weps = UpgradeCatalog.All.Where(u => u.fighter == f).Select(u => u.weapon).Distinct();
                parts.Add(f.ToUpper() + ": " + string.Join(" + ", weps));
            }
            return string.Join("     |     ", parts);
        }

        List<WeaponUpgradeDef> Roll()
        {
            var pool = UpgradeCatalog.All.Where(u => fighters.Contains(u.fighter) && GMSave.Level(u.id) < u.maxLevel).ToList();
            var rng = new System.Random(GMSave.Round * 7919);
            return pool.OrderBy(_ => rng.Next()).Take(Mathf.Clamp(cardCount, 3, 6)).ToList();
        }

        void MakeCard(Transform row, WeaponUpgradeDef d)
        {
            var r = GMUIKit.Rect(row, "Card_" + d.id, Vector2.zero, Vector2.one);
            var img = r.gameObject.AddComponent<Image>(); img.color = GMUIKit.Steel;
            var ol = r.gameObject.AddComponent<Outline>(); ol.effectColor = d.fighter == "Kailee" ? new Color(0.15f, 0.45f, 1f) : new Color(0.9f, 0.12f, 0.12f); ol.effectDistance = new Vector2(4, -4);
            var b = r.gameObject.AddComponent<Button>(); b.onClick.AddListener(() => { _picked = d; Refresh(); });
            GMUIKit.Label(GMUIKit.Rect(r, "Who", new Vector2(0, 0.82f), new Vector2(1, 0.96f)), d.fighter.ToUpper(), 30, ol.effectColor);
            GMUIKit.Label(GMUIKit.Rect(r, "Wep", new Vector2(0.05f, 0.68f), new Vector2(0.95f, 0.82f)), d.weapon, 28, Color.white, TextAnchor.MiddleCenter, FontStyle.Normal);
            GMUIKit.Label(GMUIKit.Rect(r, "Title", new Vector2(0.05f, 0.42f), new Vector2(0.95f, 0.64f)), d.title, 42, GMUIKit.Pink);
            GMUIKit.Label(GMUIKit.Rect(r, "Punch", new Vector2(0.05f, 0.28f), new Vector2(0.95f, 0.42f)), d.punch, 30, GMUIKit.Cyan, TextAnchor.MiddleCenter, FontStyle.Normal);
            GMUIKit.Label(GMUIKit.Rect(r, "Lv", new Vector2(0, 0.16f), new Vector2(1, 0.28f)), "LV " + GMSave.Level(d.id) + " / " + d.maxLevel, 24, new Color(0.7f, 0.7f, 0.75f));
            GMUIKit.Label(GMUIKit.Rect(r, "Cost", new Vector2(0, 0.02f), new Vector2(1, 0.16f)), d.cost + " SCRAP", 36, GMUIKit.Toxic);
            _cards.Add((d, img));
        }

        void Refresh()
        {
            _scrapTxt.text = GMSave.Scrap + " SCRAP";
            foreach (var (def, img) in _cards)
            {
                bool afford = GMSave.Scrap >= def.cost;
                img.color = def == _picked ? new Color(0.35f, 0.05f, 0.22f) : afford ? GMUIKit.Steel : new Color(0.07f, 0.07f, 0.08f);
            }
            bool ok = _picked != null && GMSave.Scrap >= _picked.cost;
            _confirm.interactable = ok;
            _confirmTxt.text = _picked == null ? "PICK ONE" : ok ? "CONFIRM" : "NEED SCRAP";
        }

        void Finish(WeaponUpgradeDef d)
        {
            if (d != null && GMSave.Scrap >= d.cost)
            {
                GMSave.Scrap -= d.cost;
                GMSave.SetLevel(d.id, GMSave.Level(d.id) + 1);
                GMFlowEvents.Picked(d);
            }
            GMFlow.GoFight();
        }
    }
}
