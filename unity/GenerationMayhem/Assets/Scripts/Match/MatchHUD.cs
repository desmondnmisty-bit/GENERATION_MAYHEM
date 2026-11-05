// Copyright Dark Logic Studios. Generation Mayhem.
// Minimal runtime UGUI HUD: boss bar + Shatter Window timer + phase label, player panel (HUD_v001 art when assigned),
// Mom's Chaos + Synergy, Slingshot ability frame, ally bars, subtitles, lock-on reticle, mist vignette,
// win / lose panels with Retry. Builds itself in Awake; the builder only assigns the optional sprites.

using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;
using GenerationMayhem.Combat;
using GenerationMayhem.Player;

namespace GenerationMayhem.Match
{
    public class MatchHUD : MonoBehaviour
    {
        [Header("Optional HUD_v001 sprites")]
        public Sprite healthFrame;      // HUD_HealthArmor_Frame_EmptyTrack
        public Sprite healthFill;       // HUD_Health_Fill
        public Sprite abilityFrameLit;  // HUD_Ability1_Frame_Lit
        public Sprite abilityFrameEmpty;// HUD_Ability1_Frame_Empty
        public Sprite abilityIcon;      // HUD_Ability1_Icon_Sunburst_Orange
        public Sprite bannerArt;        // HUD_Banner_Title_NoLabel

        [Header("Refs (auto-found)")]
        public MatchDirector director;
        public VixenCombat vixen;
        public ShatterSlingshotStub stub;
        public SlingshotFinisher finisher;

        public static readonly Color KaileeBlue = new Color(0.15f, 0.45f, 1f);
        public static readonly Color VixenRed = new Color(0.9f, 0.12f, 0.12f);
        public static readonly Color BriannaEmerald = new Color(0.02f, 0.45f, 0.25f);
        public static readonly Color PaytonYellow = new Color(1f, 0.85f, 0.1f);
        public static readonly Color PaytonPurple = new Color(0.55f, 0.2f, 0.85f);
        static readonly Color ChaosColor = new Color(1f, 0.35f, 0.75f);
        static readonly Color SynergyColor = new Color(0.2f, 0.9f, 1f);

        Font _font;
        RectTransform _root;

        class Bar
        {
            public RectTransform fillRt; public Image fill; public bool sprite;
            public void Set(float v)
            {
                v = Mathf.Clamp01(v);
                if (sprite) fill.fillAmount = v;
                else fillRt.anchorMax = new Vector2(v, 1f);
            }
        }

        Bar _boss, _window, _player, _chaos, _synergy;
        Text _bossName, _phase, _move, _windowLabel, _playerName, _playerState, _chaosLabel, _synLabel;
        Text _slingKey, _slingReason, _subtitle, _banner, _hint, _vipers;
        Image _slingFrame, _slingIcon, _vignette, _bannerBg;
        GameObject _windowGroup, _endPanel, _reticle;
        Text _endTitle, _endSub;
        readonly Bar[] _allyBars = new Bar[3];
        readonly Text[] _allyNames = new Text[3], _allyState = new Text[3];
        Health[] _allies = new Health[3];
        bool _endShown, _showHelp = true;

        void Awake()
        {
            _font = Resources.GetBuiltinResource<Font>("LegacyRuntime.ttf");
            Build();
        }

        void Start()
        {
            if (director == null) director = MatchDirector.Instance != null ? MatchDirector.Instance : FindFirstObjectByType<MatchDirector>();
            if (vixen == null) vixen = FindFirstObjectByType<VixenCombat>();
            if (stub == null) stub = FindFirstObjectByType<ShatterSlingshotStub>();
            if (finisher == null) finisher = FindFirstObjectByType<SlingshotFinisher>();
            if (director != null) { _allies[0] = director.kailee; _allies[1] = director.brianna; _allies[2] = director.payton; }
            if (FindFirstObjectByType<EventSystem>() == null)
            {
                var es = new GameObject("EventSystem");
                es.AddComponent<EventSystem>();
                es.AddComponent<StandaloneInputModule>();
            }
        }

        // =================================================================== build
        void Build()
        {
            var cgo = new GameObject("HUD_Canvas");
            cgo.transform.SetParent(transform, false);
            var canvas = cgo.AddComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceOverlay;
            canvas.sortingOrder = 50;
            var scaler = cgo.AddComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = new Vector2(1920, 1080);
            scaler.matchWidthOrHeight = 0.5f;
            cgo.AddComponent<GraphicRaycaster>();
            _root = cgo.GetComponent<RectTransform>();

            // Mist vignette (behind everything)
            _vignette = Img("MistVignette", _root, V(0, 0), V(1, 1), V(.5f, .5f), Vector2.zero, Vector2.zero, new Color(0.4f, 1f, 0.12f, 0f));
            _vignette.raycastTarget = false;

            // ---------------- boss (top centre) ----------------
            var boss = Rect("Boss", _root, V(.5f, 1), V(.5f, 1), V(.5f, 1), new Vector2(0, -24), new Vector2(940, 120));
            _bossName = Txt("Name", boss, V(0, 1), V(1, 1), V(.5f, 1), Vector2.zero, new Vector2(0, 30), "SLITHER  —  BOSS OF THE PINK VIPERS", 24, TextAnchor.MiddleCenter, Color.white);
            _boss = MakeBar("BossBar", boss, new Vector2(0, -34), new Vector2(900, 26), FxUtil.ToxicGreen, null);
            // 10% tick: below it the Slingshot sends him into the harbor
            Img("KO_Tick", _boss.fillRt.parent as RectTransform, V(.1f, 0), V(.1f, 1), V(.5f, .5f), Vector2.zero, new Vector2(3, 8), Color.white);
            _phase = Txt("Phase", boss, V(1, 1), V(1, 1), V(1, 1), new Vector2(-20, -62), new Vector2(300, 22), "", 16, TextAnchor.MiddleRight, new Color(1, 1, 1, .75f));
            _move = Txt("Move", boss, V(0, 1), V(0, 1), V(0, 1), new Vector2(20, -62), new Vector2(500, 22), "", 16, TextAnchor.MiddleLeft, new Color(.7f, 1f, .6f));
            _windowGroup = Rect("Window", boss, V(.5f, 1), V(.5f, 1), V(.5f, 1), new Vector2(0, -86), new Vector2(600, 30)).gameObject;
            _windowLabel = Txt("Label", _windowGroup.transform as RectTransform, V(0, 0), V(1, 1), V(.5f, .5f), new Vector2(0, 14), Vector2.zero, "SHATTER WINDOW", 18, TextAnchor.MiddleCenter, FxUtil.ShatterOrange);
            _window = MakeBar("WindowBar", _windowGroup.transform as RectTransform, new Vector2(0, -22), new Vector2(500, 10), FxUtil.ShatterOrange, null);

            // ---------------- player panel (bottom left) ----------------
            float s = 0.62f;
            var pp = Rect("Player", _root, V(0, 0), V(0, 0), V(0, 0), new Vector2(18, 18), new Vector2(819 * s, 332 * s));
            if (healthFrame != null) { var f = Img("Frame", pp, V(0, 0), V(1, 1), V(.5f, .5f), Vector2.zero, Vector2.zero, Color.white); f.sprite = healthFrame; f.preserveAspect = true; }
            else Img("Frame", pp, V(0, 0), V(1, 1), V(.5f, .5f), Vector2.zero, Vector2.zero, new Color(0, 0, 0, .45f));
            if (healthFill != null)
            {
                var track = Rect("HealthTrack", pp, V(0, 1), V(0, 1), V(0, 1), new Vector2(199 * s, -139 * s), new Vector2(313 * s, 40 * s));
                var fi = Img("Fill", track, V(0, 0), V(1, 1), V(0, .5f), Vector2.zero, Vector2.zero, VixenRed);
                fi.sprite = healthFill; fi.type = Image.Type.Filled; fi.fillMethod = Image.FillMethod.Horizontal; fi.fillOrigin = 0;
                _player = new Bar { fill = fi, fillRt = fi.rectTransform, sprite = true };
            }
            else _player = MakeBar("Health", pp, new Vector2(30, 40), new Vector2(330, 22), VixenRed, null, V(0, 1));
            _playerName = Txt("Name", pp, V(0, 1), V(0, 1), V(0, 1), new Vector2(199 * s, -92 * s), new Vector2(300, 28), "VIXEN", 22, TextAnchor.MiddleLeft, VixenRed);
            _playerState = Txt("State", pp, V(0, 1), V(0, 1), V(0, 1), new Vector2(199 * s, -190 * s), new Vector2(360, 24), "", 16, TextAnchor.MiddleLeft, Color.white);

            // ---------------- allies (left, above player) ----------------
            string[] names = { "KAILEE", "BRIANNA", "JESSICA" };
            Color[] cols = { KaileeBlue, BriannaEmerald, PaytonYellow };
            for (int i = 0; i < 3; i++)
            {
                var a = Rect("Ally_" + names[i], _root, V(0, 0), V(0, 0), V(0, 0), new Vector2(24, 250 + (2 - i) * 54), new Vector2(330, 48));
                Img("Bg", a, V(0, 0), V(1, 1), V(.5f, .5f), Vector2.zero, Vector2.zero, new Color(0, 0, 0, .35f));
                _allyNames[i] = Txt("Name", a, V(0, 1), V(0, 1), V(0, 1), new Vector2(8, -2), new Vector2(160, 22), names[i], 17, TextAnchor.MiddleLeft, Color.Lerp(cols[i], Color.white, i == 1 ? .35f : 0f));
                _allyState[i] = Txt("State", a, V(1, 1), V(1, 1), V(1, 1), new Vector2(-8, -2), new Vector2(170, 22), "", 14, TextAnchor.MiddleRight, Color.white);
                _allyBars[i] = MakeBar("Bar", a, new Vector2(8, -30), new Vector2(314, 12), cols[i], null, V(0, 1));
            }

            // ---------------- meters (bottom centre) ----------------
            var meters = Rect("Meters", _root, V(.5f, 0), V(.5f, 0), V(.5f, 0), new Vector2(0, 24), new Vector2(560, 90));
            _chaosLabel = Txt("ChaosLabel", meters, V(0, 1), V(0, 1), V(0, 1), new Vector2(20, 0), new Vector2(400, 24), "MOM'S CHAOS", 18, TextAnchor.MiddleLeft, ChaosColor);
            _chaos = MakeBar("Chaos", meters, new Vector2(0, -28), new Vector2(520, 22), ChaosColor, null);
            _synLabel = Txt("SynLabel", meters, V(0, 1), V(0, 1), V(0, 1), new Vector2(20, -54), new Vector2(400, 20), "SYNERGY", 14, TextAnchor.MiddleLeft, SynergyColor);
            _synergy = MakeBar("Synergy", meters, new Vector2(0, -74), new Vector2(520, 10), SynergyColor, null);

            // Slingshot ability frame (bottom centre-right)
            var sl = Rect("Slingshot", _root, V(.5f, 0), V(.5f, 0), V(0, 0), new Vector2(300, 14), new Vector2(110, 165));
            _slingFrame = Img("Frame", sl, V(0, 0), V(1, 1), V(.5f, .5f), Vector2.zero, Vector2.zero, abilityFrameEmpty != null ? Color.white : new Color(0, 0, 0, .5f));
            if (abilityFrameEmpty != null) { _slingFrame.sprite = abilityFrameEmpty; _slingFrame.preserveAspect = true; }
            _slingIcon = Img("Icon", sl, V(.5f, .5f), V(.5f, .5f), V(.5f, .5f), new Vector2(0, 8), new Vector2(70, 65), abilityIcon != null ? Color.white : FxUtil.ShatterOrange);
            if (abilityIcon != null) { _slingIcon.sprite = abilityIcon; _slingIcon.preserveAspect = true; }
            _slingKey = Txt("Key", sl, V(.5f, 0), V(.5f, 0), V(.5f, 0), new Vector2(0, 10), new Vector2(140, 22), "SLINGSHOT  F / Y", 14, TextAnchor.MiddleCenter, Color.white);
            _slingReason = Txt("Reason", sl, V(0, 1), V(0, 1), V(0, 0), new Vector2(0, 4), new Vector2(300, 22), "", 14, TextAnchor.MiddleLeft, new Color(1, .8f, .5f));

            // Subtitles, banner, help, viper count
            _subtitle = Txt("Subtitle", _root, V(.5f, 0), V(.5f, 0), V(.5f, 0), new Vector2(0, 130), new Vector2(1200, 60), "", 26, TextAnchor.MiddleCenter, Color.white);
            _subtitle.supportRichText = true;
            _bannerBg = Img("BannerBg", _root, V(.5f, .5f), V(.5f, .5f), V(.5f, .5f), new Vector2(0, 160), new Vector2(803 * .9f, 303 * .5f), new Color(0, 0, 0, .0f));
            if (bannerArt != null) { _bannerBg.sprite = bannerArt; }
            _banner = Txt("Banner", _root, V(.5f, .5f), V(.5f, .5f), V(.5f, .5f), new Vector2(0, 160), new Vector2(1400, 90), "", 52, TextAnchor.MiddleCenter, Color.white);
            _hint = Txt("Help", _root, V(0, 1), V(0, 1), V(0, 1), new Vector2(18, -18), new Vector2(560, 300), HelpText, 15, TextAnchor.UpperLeft, new Color(1, 1, 1, .85f));
            _vipers = Txt("Vipers", _root, V(1, 1), V(1, 1), V(1, 1), new Vector2(-24, -24), new Vector2(300, 26), "", 18, TextAnchor.MiddleRight, new Color(1f, .45f, .75f));

            // Lock-on reticle: 4 corner brackets
            _reticle = Rect("LockReticle", _root, V(0, 0), V(0, 0), V(.5f, .5f), Vector2.zero, new Vector2(70, 70)).gameObject;
            var rr = _reticle.transform as RectTransform;
            foreach (var c in new[] { V(0, 0), V(1, 0), V(0, 1), V(1, 1) })
            {
                Img("h", rr, c, c, c, Vector2.zero, new Vector2(18, 4), new Color(1, .3f, .3f));
                Img("v", rr, c, c, c, Vector2.zero, new Vector2(4, 18), new Color(1, .3f, .3f));
            }
            _reticle.SetActive(false);

            // End panel
            var end = Img("EndPanel", _root, V(0, 0), V(1, 1), V(.5f, .5f), Vector2.zero, Vector2.zero, new Color(0, 0, 0, .65f));
            _endPanel = end.gameObject;
            _endTitle = Txt("Title", end.rectTransform, V(.5f, .5f), V(.5f, .5f), V(.5f, .5f), new Vector2(0, 120), new Vector2(1400, 110), "", 84, TextAnchor.MiddleCenter, Color.white);
            _endSub = Txt("Sub", end.rectTransform, V(.5f, .5f), V(.5f, .5f), V(.5f, .5f), new Vector2(0, 30), new Vector2(1400, 60), "", 26, TextAnchor.MiddleCenter, Color.white);
            var btn = Img("Retry", end.rectTransform, V(.5f, .5f), V(.5f, .5f), V(.5f, .5f), new Vector2(0, -70), new Vector2(300, 70), new Color(.95f, .3f, .1f));
            btn.raycastTarget = true;
            var b = btn.gameObject.AddComponent<Button>();
            b.targetGraphic = btn;
            b.onClick.AddListener(() => { if (MatchDirector.Instance != null) MatchDirector.Instance.Retry(); });
            Txt("Label", btn.rectTransform, V(0, 0), V(1, 1), V(.5f, .5f), Vector2.zero, Vector2.zero, "RETRY  (R)", 30, TextAnchor.MiddleCenter, Color.white);
            _endPanel.SetActive(false);
        }

        const string HelpText =
            "<b>CONTROLS</b>  (H hides this)\n" +
            "WASD / left stick: skate     Left Shift: jump     Space: brake     J: air trick\n" +
            "K / LMB / X: light (Jab › Cross › Kick)\n" +
            "L / RMB / Y: heavy (Elbow › Heavy Kick)   in the air: Ramp Slam\n" +
            "E / B: Check (shove, revives family, breaks Viper-Lock)\n" +
            "Q / LB (hold): block     Tab / MMB / RB: lock-on\n" +
            "F or Y key (pad: hold LB + Y): SHATTER-SLINGSHOT when Mom's Chaos is FULL\n" +
            "Shove Slither into the oil, bait crane drops, then Slingshot him.\n" +
            "Under 10% HP the Slingshot knocks him into the harbor = WIN.";

        // =================================================================== update
        void Update()
        {
            if (Input.GetKeyDown(KeyCode.H)) _showHelp = !_showHelp;
            _hint.gameObject.SetActive(_showHelp);
            var d = director != null ? director : MatchDirector.Instance;
            var boss = SlitherBoss.Instance;

            // Boss
            if (boss != null && boss.Health != null)
            {
                _boss.Set(boss.Health.Normalized);
                _phase.text = PhaseName(boss.Phase);
                _move.text = boss.CurrentMove;
                bool w = boss.WindowOpen;
                _windowGroup.SetActive(w);
                if (w) { _window.Set(boss.WindowLeft / Mathf.Max(0.01f, boss.WindowTotal)); _windowLabel.text = boss.Kneeling ? "LAST STAND — SLINGSHOT HIM!" : "SHATTER WINDOW  " + boss.WindowLeft.ToString("0.0") + "s"; }
                _boss.fill.color = boss.Health.IsHeated ? Color.Lerp(FxUtil.ToxicGreen, new Color(1, .4f, 0), .6f) : FxUtil.ToxicGreen;
            }

            // Player
            var vh = vixen != null ? vixen.GetComponent<Health>() : null;
            if (vh != null)
            {
                _player.Set(vh.Normalized);
                _playerState.text = vh.IsDown ? "DOWN  " + vh.DownedTimeLeft.ToString("0") + "s (ally can Check you up)"
                                  : vixen.IsBlocking ? "BLOCKING" : vixen.LockTarget != null ? "LOCKED: " + vixen.LockTarget.displayName : "";
            }

            // Allies
            for (int i = 0; i < 3; i++)
            {
                var h = _allies[i];
                if (h == null) { _allyBars[i].Set(0); _allyState[i].text = "—"; continue; }
                _allyBars[i].Set(h.Normalized);
                var ai = h.GetComponent<AllyAI>();
                _allyState[i].text = h.IsDown ? "DOWN " + h.DownedTimeLeft.ToString("0") + "s" : ai != null ? ai.Status : "";
            }

            // Meters
            var chaos = MomsChaosMeter.Instance;
            float cv = chaos != null ? chaos.Normalized : 0f;
            _chaos.Set(cv);
            bool full = chaos != null && chaos.IsFull;
            _chaos.fill.color = full ? Color.Lerp(ChaosColor, Color.white, Mathf.PingPong(Time.time * 3f, 0.6f)) : ChaosColor;
            _chaosLabel.text = full ? "MOM'S CHAOS — FULL!" : "MOM'S CHAOS  " + Mathf.RoundToInt(cv * 100f) + "%";
            if (stub != null) { _synergy.Set(stub.SynergyNormalized); _synLabel.text = "SYNERGY  " + Mathf.RoundToInt(stub.SynergyNormalized * 100f) + "%  (pays ally finishers)"; }

            bool can = stub != null && stub.CanPlantNow;
            if (abilityFrameLit != null && abilityFrameEmpty != null) _slingFrame.sprite = can ? abilityFrameLit : abilityFrameEmpty;
            else _slingFrame.color = can ? new Color(1f, .45f, .05f, .8f) : new Color(0, 0, 0, .5f);
            _slingIcon.color = can ? Color.white : new Color(1, 1, 1, .35f);
            _slingReason.text = full && !can && finisher != null ? finisher.GateReason : (!full ? "Fills when Kailee takes hits" : "READY!");

            // Subtitles / banner / vipers
            if (d != null && d.HasLine) _subtitle.text = "<color=#" + ColorUtility.ToHtmlStringRGB(SpeakerColor(d.CurrentLine.speaker)) + "><b>" + d.CurrentLine.speaker + ":</b></color> " + d.CurrentLine.text;
            else _subtitle.text = "";
            bool showBanner = d != null && Time.time < d.BannerUntil;
            _banner.text = showBanner ? d.Banner : "";
            _bannerBg.color = showBanner && bannerArt != null ? Color.white : new Color(0, 0, 0, 0);
            int vc = MatchDirector.AliveVipers;
            _vipers.text = d != null && d.State == MatchState.PreMatch && !MatchDirector.IntroSeen ? "ENTER: SKIP INTRO" : vc > 0 ? "PINK VIPERS: " + vc : "";

            // Lock reticle
            var cam = Camera.main;
            if (vixen != null && vixen.LockTarget != null && vixen.LockTarget.IsAlive && cam != null)
            {
                Vector3 sp = cam.WorldToScreenPoint(vixen.LockTarget.transform.position + Vector3.up * 1.2f);
                _reticle.SetActive(sp.z > 0f);
                float k = _root.rect.width / Mathf.Max(1f, Screen.width);
                (_reticle.transform as RectTransform).anchoredPosition = new Vector2(sp.x * k, sp.y * k);
            }
            else _reticle.SetActive(false);

            // Mist vignette
            float slow = vixen != null ? MistCloud.SlowFactorAt(vixen.transform.position, true) : 1f;
            var vcCol = _vignette.color;
            vcCol.a = Mathf.MoveTowards(vcCol.a, slow < 0.99f ? 0.28f : 0f, Time.deltaTime * 1.5f);
            _vignette.color = vcCol;

            // End panels
            if (d != null && MatchDirector.IsOver && !_endShown)
            {
                _endShown = true;
                _endPanel.SetActive(true);
                bool won = d.State == MatchState.Won;
                _endTitle.text = won ? "KNOCKOUT!" : "THE FAMILY IS DOWN";
                _endTitle.color = won ? FxUtil.ShatterOrange : VixenRed;
                _endSub.text = won ? "Slither's in the harbor. The family takes the match.  Time " + FormatTime(d.MatchTime)
                                   : "Vixen, Kailee, Brianna and Payton all went down. Slither takes this one.";
            }
        }

        static string FormatTime(float t) => ((int)t / 60) + ":" + ((int)t % 60).ToString("00");

        static string PhaseName(BossPhase p)
        {
            switch (p)
            {
                case BossPhase.Intro: return "Pre-match";
                case BossPhase.Phase1: return "Phase 1";
                case BossPhase.Phase2: return "Phase 2";
                case BossPhase.Phase3: return "Phase 3 · Enraged";
                case BossPhase.LastStand: return "Last Stand";
                default: return "KO";
            }
        }

        static Color SpeakerColor(string s)
        {
            switch (s)
            {
                case "Vixen": return new Color(1f, .35f, .35f);
                case "Kailee": return new Color(.4f, .65f, 1f);
                case "Brianna": return new Color(.2f, .8f, .5f);
                case "Payton": return PaytonYellow;
                case "Payton": return PaytonPurple;
                case "Slither": return FxUtil.ToxicGreen;
                default: return new Color(.85f, .85f, .85f);
            }
        }

        // =================================================================== ui helpers
        static Vector2 V(float x, float y) => new Vector2(x, y);

        RectTransform Rect(string name, RectTransform parent, Vector2 aMin, Vector2 aMax, Vector2 pivot, Vector2 pos, Vector2 size)
        {
            var go = new GameObject(name, typeof(RectTransform));
            var rt = go.GetComponent<RectTransform>();
            rt.SetParent(parent, false);
            rt.anchorMin = aMin; rt.anchorMax = aMax; rt.pivot = pivot;
            rt.anchoredPosition = pos; rt.sizeDelta = size;
            return rt;
        }

        Image Img(string name, RectTransform parent, Vector2 aMin, Vector2 aMax, Vector2 pivot, Vector2 pos, Vector2 size, Color c)
        {
            var rt = Rect(name, parent, aMin, aMax, pivot, pos, size);
            var img = rt.gameObject.AddComponent<Image>();
            img.color = c;
            img.raycastTarget = false;
            return img;
        }

        Text Txt(string name, RectTransform parent, Vector2 aMin, Vector2 aMax, Vector2 pivot, Vector2 pos, Vector2 size, string text, int fontSize, TextAnchor align, Color c)
        {
            var rt = Rect(name, parent, aMin, aMax, pivot, pos, size);
            var t = rt.gameObject.AddComponent<Text>();
            t.font = _font; t.fontSize = fontSize; t.alignment = align; t.color = c; t.text = text;
            t.horizontalOverflow = HorizontalWrapMode.Wrap; t.verticalOverflow = VerticalWrapMode.Overflow;
            t.raycastTarget = false; t.supportRichText = true;
            var o = rt.gameObject.AddComponent<Outline>();
            o.effectColor = new Color(0, 0, 0, .85f); o.effectDistance = new Vector2(1.5f, -1.5f);
            return t;
        }

        Bar MakeBar(string name, RectTransform parent, Vector2 pos, Vector2 size, Color c, Sprite fillSprite, Vector2? anchor = null)
        {
            Vector2 a = anchor ?? V(.5f, 1);
            var bg = Img(name, parent, a, a, new Vector2(a.x, 1), pos, size, new Color(0, 0, 0, .6f));
            var fill = Img("Fill", bg.rectTransform, V(0, 0), V(1, 1), V(0, .5f), Vector2.zero, Vector2.zero, c);
            fill.rectTransform.offsetMin = new Vector2(2, 2); fill.rectTransform.offsetMax = new Vector2(-2, -2);
            var bar = new Bar { fill = fill, fillRt = fill.rectTransform, sprite = false };
            if (fillSprite != null) { fill.sprite = fillSprite; fill.type = Image.Type.Filled; fill.fillMethod = Image.FillMethod.Horizontal; bar.sprite = true; }
            return bar;
        }
    }
}
