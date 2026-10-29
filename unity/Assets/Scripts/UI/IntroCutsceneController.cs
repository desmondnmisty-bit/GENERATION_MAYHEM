// COLD OPEN. Plays before StartMenu. Short captions only (1 line/beat). Click/Space/Enter = next, auto-advance on timer.
// Real art: drop sprites into Assets/Resources/Intro/<slot>.png (Texture Type = Sprite) OR assign in the Inspector 'art' array.
using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

namespace GenerationMayhem.UI
{
    public class IntroCutsceneController : MonoBehaviour
    {
        public enum Fx { None, Warm, Pressure, Shake, Dust, BlurBlack }
        [System.Serializable] public struct Beat { public string slot, title, caption; public float seconds; public Fx fx; }

        public Beat[] beats =
        {
            new Beat{ slot="pregnant_hubby", title="01 // PREGNANT",         caption="Us. Him. Growing.",                          seconds=2.8f, fx=Fx.Warm },
            new Beat{ slot="birth_brianna",  title="02 // BRIANNA",          caption="First girl.",                                seconds=2.2f, fx=Fx.Warm },
            new Beat{ slot="birth_kailee",   title="03 // KAILEE",           caption="Second.",                                    seconds=2.2f, fx=Fx.Warm },
            new Beat{ slot="birth_payton",   title="04 // PAYTON",           caption="Third. The family was whole.",               seconds=2.4f, fx=Fx.Warm },
            new Beat{ slot="life_flash",     title="05 // LIFE",             caption="Years. Good years.",                         seconds=2.5f, fx=Fx.Warm },
            new Beat{ slot="husband_dies",   title="06 // HE'S GONE",        caption="Gone.",                                      seconds=3f,   fx=Fx.Pressure },
            new Beat{ slot="devastated",     title="07 // DEVASTATED",       caption="Broke me.",                                  seconds=2.8f, fx=Fx.Pressure },
            new Beat{ slot="moving_on",      title="08 // MOVING ON",        caption="Got back up. Had to.",                       seconds=2.8f, fx=Fx.Warm },
            new Beat{ slot="kids_happy",     title="09 // GRANDKIDS",        caption="Payton's girls. Kamyrn. Lili. Worth every fight.", seconds=3.2f, fx=Fx.Warm },
            new Beat{ slot="irs_contracts",  title="10 // BLOOD CONTRACTS",  caption="They contracted my kids.",                   seconds=3.5f, fx=Fx.Pressure },
            new Beat{ slot="phone_call",     title="11 // THE CALL",         caption="One call.",                                  seconds=3f,   fx=Fx.None },
            new Beat{ slot="kitchen_rage",   title="12 // KITCHEN RAGE",     caption="RAGE.",                                      seconds=2.8f, fx=Fx.Shake },
            new Beat{ slot="garage_cabinet", title="13 // GARAGE",           caption="The cabinet. Years closed.",                 seconds=3.2f, fx=Fx.Dust },
            new Beat{ slot="war_rig_dusty",  title="14 // WAR RIG",          caption="Still here. Still mine.",                    seconds=3.5f, fx=Fx.Dust },
            new Beat{ slot="strapping_in",   title="15 // STRAP IN",         caption="Mama Bear's back.",                          seconds=3.2f, fx=Fx.BlurBlack },
        };
        public Sprite[] art;                       // optional, index-matched to beats
        public string nextScene = GMFlow.StartScene;
        public const string Tagline = "CAN YOU SURVIVE THE CIRCUIT";

        Image _art, _fade, _bolt, _tint; Text _title, _caption, _ph; RectTransform _stage; GameObject _skip;
        bool _next, _done;

        void Start()
        {
            Time.timeScale = 1f;
            var c = GMUIKit.Canvas("IntroCanvas", 200).transform;
            GMUIKit.Panel(c, "BG", new Color(0.02f, 0.02f, 0.03f, 1f), Vector2.zero, Vector2.one);
            _stage = GMUIKit.Rect(c, "Stage", new Vector2(0.08f, 0.16f), new Vector2(0.92f, 0.88f));
            GMUIKit.Panel(_stage, "Frame", GMUIKit.Steel, Vector2.zero, Vector2.one);
            _art = GMUIKit.Panel(_stage, "Art", Color.white, new Vector2(0.005f, 0.008f), new Vector2(0.995f, 0.992f));
            _art.preserveAspect = true;
            _tint = GMUIKit.Panel(_stage, "Tint", Color.clear, Vector2.zero, Vector2.one); _tint.raycastTarget = false;
            _ph = GMUIKit.Label(GMUIKit.Rect(_stage, "Placeholder", Vector2.zero, Vector2.one), "", 64, new Color(1, 1, 1, 0.18f));
            _bolt = GMUIKit.Panel(c, "PinkBolt", GMUIKit.Pink, new Vector2(0.08f, 0.885f), new Vector2(0.92f, 0.892f));
            _title = GMUIKit.Label(GMUIKit.Rect(c, "BeatTitle", new Vector2(0.08f, 0.9f), new Vector2(0.92f, 0.97f)), "", 30, GMUIKit.Cyan, TextAnchor.MiddleLeft, FontStyle.Normal);
            _caption = GMUIKit.Label(GMUIKit.Rect(c, "Caption", new Vector2(0.05f, 0.03f), new Vector2(0.95f, 0.14f)), "", 54, Color.white);

            var skipR = GMUIKit.Rect(c, "Skip", new Vector2(1, 0), new Vector2(1, 0), new Vector2(-300, 30), new Vector2(-30, 110));
            GMUIKit.Button(skipR, "SKIP >>", GMUIKit.Pink, Skip); _skip = skipR.gameObject; _skip.SetActive(false);

            _fade = GMUIKit.Panel(c, "Fade", Color.black, Vector2.zero, Vector2.one); _fade.raycastTarget = false;
            StartCoroutine(Run());
        }

        void Update()
        {
            if (Input.GetMouseButtonDown(0) || Input.GetKeyDown(KeyCode.Space) || Input.GetKeyDown(KeyCode.Return) || Input.GetKeyDown(KeyCode.JoystickButton0)) _next = true;
            if (Input.GetKeyDown(KeyCode.Escape) && _skip && _skip.activeSelf) Skip();
            if (_bolt) { var k = 0.55f + 0.45f * Mathf.Abs(Mathf.Sin(Time.unscaledTime * 9f)) * (Random.value > 0.04f ? 1f : 0.15f); _bolt.color = GMUIKit.Pink * k; }
        }

        IEnumerator Run()
        {
            for (int i = 0; i < beats.Length; i++)
            {
                var b = beats[i];
                Show(i, b);
                yield return Fade(1, 0, b.fx == Fx.BlurBlack ? 1.2f : 0.5f);
                if (i == 1) _skip.SetActive(true);
                _next = false; float t = 0;
                while (t < b.seconds && !_next) { t += Time.unscaledDeltaTime; Animate(b.fx, t); yield return null; }
                _stage.anchoredPosition = Vector2.zero; _stage.localScale = Vector3.one;
                yield return Fade(0, 1, b.fx == Fx.BlurBlack ? 1.2f : 0.4f);
            }
            yield return Tag();
        }

        void Show(int i, Beat b)
        {
            Sprite s = (art != null && i < art.Length) ? art[i] : null;
            if (!s) s = Resources.Load<Sprite>("Intro/" + b.slot);
            _art.sprite = s; _art.color = s ? Color.white : new Color(0.08f, 0.08f, 0.1f, 1f);
            _ph.text = s ? "" : "[ " + b.slot + " ]";
            _title.text = b.title; _caption.text = b.caption;
            _tint.color = b.fx == Fx.Warm ? new Color(1f, 0.6f, 0.3f, 0.12f) : b.fx == Fx.Pressure ? new Color(0.6f, 0f, 0f, 0.18f) : b.fx == Fx.Dust ? new Color(0.6f, 0.5f, 0.35f, 0.22f) : Color.clear;
            _caption.color = b.fx == Fx.Shake ? GMUIKit.Pink : Color.white;
        }

        void Animate(Fx fx, float t)
        {
            switch (fx)
            {
                case Fx.Shake: _stage.anchoredPosition = Random.insideUnitCircle * 22f; _tint.color = new Color(1f, 0.1f, 0.5f, Random.value > 0.85f ? 0.35f : 0.05f); break;
                case Fx.Pressure: _stage.localScale = Vector3.one * (1f + t * 0.02f); break;               // slow push-in
                case Fx.Dust: _stage.localScale = Vector3.one * (1.04f - t * 0.01f); break;               // slow reveal
                case Fx.BlurBlack: _stage.localScale = Vector3.one * (1f + Mathf.Sin(t * 1.5f) * 0.015f); _tint.color = new Color(0, 0, 0, 0.25f + 0.2f * Mathf.Sin(t * 3f)); break; // fake blur/dim pulse
                case Fx.Warm: _stage.localScale = Vector3.one * (1f + t * 0.01f); break;
            }
        }

        IEnumerator Tag()
        {
            _skip.SetActive(false); _done = true;
            _stage.gameObject.SetActive(false); _title.text = ""; _caption.text = "";
            var tag = GMUIKit.Label(GMUIKit.Rect(_fade.transform.parent, "Tagline", new Vector2(0, 0.4f), new Vector2(1, 0.6f)), Tagline, 96, GMUIKit.Pink);
            tag.color = new Color(1, 0.12f, 0.6f, 0);
            _fade.transform.SetAsLastSibling(); _fade.color = Color.clear; tag.transform.parent.SetAsLastSibling();
            for (float t = 0; t < 1.2f; t += Time.unscaledDeltaTime) { tag.color = new Color(1, 0.12f, 0.6f, t / 1.2f); yield return null; }
            _next = false; for (float t = 0; t < 2.5f && !_next; t += Time.unscaledDeltaTime) yield return null;
            _fade.transform.SetAsLastSibling(); yield return Fade(0, 1, 1f);
            SceneManager.LoadScene(nextScene);
        }

        IEnumerator Fade(float a, float b, float d)
        {
            for (float t = 0; t < d; t += Time.unscaledDeltaTime) { _fade.color = new Color(0, 0, 0, Mathf.Lerp(a, b, t / d)); yield return null; }
            _fade.color = new Color(0, 0, 0, b);
        }

        void Skip() { if (_done) return; StopAllCoroutines(); StartCoroutine(Tag()); }
    }
}
