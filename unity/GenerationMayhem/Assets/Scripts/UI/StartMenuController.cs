// START SCREEN. PLAY / CONTINUE (if save) / SETTINGS (stub) / QUIT. No lore.
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

namespace GenerationMayhem.UI
{
    public class StartMenuController : MonoBehaviour
    {
        public string fightScene = GMFlow.FightScene;
        Image _bolt;

        void Start()
        {
            Time.timeScale = 1f;
            var c = GMUIKit.Canvas("StartMenuCanvas", 100).transform;
            GMUIKit.Panel(c, "BG", GMUIKit.Black, Vector2.zero, Vector2.one);
            // industrial stripes
            for (int i = 0; i < 6; i++) GMUIKit.Panel(c, "Stripe" + i, new Color(1, 1, 1, 0.025f), new Vector2(0, i / 6f), new Vector2(1, i / 6f + 0.004f));
            _bolt = GMUIKit.Panel(c, "PinkBolt", GMUIKit.Pink, new Vector2(0.08f, 0.62f), new Vector2(0.92f, 0.627f));

            var title = GMUIKit.Rect(c, "Title", new Vector2(0, 0.66f), new Vector2(1, 0.9f));
            GMUIKit.Label(title, "GENERATION MAYHEM", 120, GMUIKit.Pink);
            var tag = GMUIKit.Rect(c, "Tag", new Vector2(0, 0.57f), new Vector2(1, 0.62f));
            GMUIKit.Label(tag, "DARK LOGIC  //  SOPHISTICATED BRUTALITY", 30, GMUIKit.Cyan, TextAnchor.MiddleCenter, FontStyle.Normal);

            var col = GMUIKit.Rect(c, "Buttons", new Vector2(0.5f, 0.12f), new Vector2(0.5f, 0.54f), new Vector2(-260, 0), new Vector2(260, 0));
            var v = col.gameObject.AddComponent<VerticalLayoutGroup>(); v.spacing = 22; v.childAlignment = TextAnchor.UpperCenter; v.childForceExpandHeight = false; v.childControlHeight = true; v.childControlWidth = true;

            var play = GMUIKit.Button(col, "PLAY", GMUIKit.Pink, () => { GMSave.NewGame(); GMFlow.GoFight(); });
            if (GMSave.Exists && (GMSave.Round > 1 || GMSave.Scrap > 0))
                GMUIKit.Button(col, "CONTINUE  R" + GMSave.Round, GMUIKit.Cyan, GMFlow.GoFight);
            GMUIKit.Button(col, "HOW TO PLAY", GMUIKit.Cyan, () => ShowHowTo(c));
            // SETTINGS = controls remapping (Input System rebinding, per player slot; P1 = slot 0).
            GMUIKit.Button(col, "SETTINGS", new Color(0.7f, 0.7f, 0.75f), () =>
                ControlsRemapOverlay.Open(c, 0, onClose: () => EventSystem.current?.SetSelectedGameObject(play.gameObject)));
            GMUIKit.Button(col, "QUIT", GMUIKit.Toxic, Quit);
            EventSystem.current?.SetSelectedGameObject(play.gameObject);
            if (PlayerPrefs.GetInt(HowToSeenKey, 0) == 0) ShowHowTo(c);   // first launch
        }

        public const string HowToSeenKey = "GM_HowToSeen";
        GameObject _howTo;

        void ShowHowTo(Transform c)
        {
            if (_howTo) { _howTo.SetActive(true); return; }
            var root = GMUIKit.Rect(c, "HowToPlay", Vector2.zero, Vector2.one); _howTo = root.gameObject;
            GMUIKit.Panel(root, "Dim", new Color(0, 0, 0, 0.85f), Vector2.zero, Vector2.one);
            var box = GMUIKit.Rect(root, "Box", new Vector2(0.2f, 0.12f), new Vector2(0.8f, 0.88f));
            GMUIKit.Panel(box, "BoxBG", GMUIKit.Steel, Vector2.zero, Vector2.one);
            GMUIKit.Panel(box, "Bolt", GMUIKit.Pink, new Vector2(0.05f, 0.83f), new Vector2(0.95f, 0.837f));
            GMUIKit.Label(GMUIKit.Rect(box, "H", new Vector2(0, 0.85f), new Vector2(1, 0.98f)), "HOW TO PLAY", 64, GMUIKit.Pink);
            GMUIKit.Label(GMUIKit.Rect(box, "Body", new Vector2(0.08f, 0.22f), new Vector2(0.92f, 0.82f)),
                "MOVE  —  WASD / Left Stick      BRAKE  —  Space / A-Cross (hold)\n" +
                "LIGHT ATTACK  —  K / Left Click / X-Square\n" +
                "HEAVY ATTACK  —  L / Right Click / Y-Triangle\n" +
                "FINISHER / CHECK  —  E / B-Circle\n" +
                "BLOCK  —  Q / LB      LOCK-ON  —  Tab / Middle Click / RB\n" +
                "PAUSE  —  Esc / Start      REBIND IN SETTINGS OR PAUSE\n\n" +
                "WIN OR LOSE, YOU EARN SCRAP.\nBETWEEN ROUNDS: ARM UP — pick an upgrade, CONFIRM, fight stronger.",
                34, Color.white, TextAnchor.MiddleLeft, FontStyle.Normal);
            var btnR = GMUIKit.Rect(box, "OK", new Vector2(0.5f, 0.05f), new Vector2(0.5f, 0.05f), new Vector2(-260, 0), new Vector2(260, 92));
            var ok = GMUIKit.Button(btnR, "GOT IT", GMUIKit.Pink, () => { PlayerPrefs.SetInt(HowToSeenKey, 1); PlayerPrefs.Save(); _howTo.SetActive(false); });
            EventSystem.current?.SetSelectedGameObject(ok.gameObject);
        }

        void Update()
        {
            if (_bolt) { var k = 0.6f + 0.4f * Mathf.Abs(Mathf.Sin(Time.unscaledTime * 7f)) * (Random.value > 0.03f ? 1f : 0.2f); _bolt.color = GMUIKit.Pink * k; }
        }

        static void Quit()
        {
#if UNITY_EDITOR
            UnityEditor.EditorApplication.isPlaying = false;
#else
            Application.Quit();
#endif
        }
    }
}
