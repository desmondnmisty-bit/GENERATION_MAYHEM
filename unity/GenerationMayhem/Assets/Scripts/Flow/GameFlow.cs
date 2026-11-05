// Copyright Dark Logic Studios. Generation Mayhem.
// Phase 0 loop: START SCREEN → Dockyard fight (rounds = Slither phases) → WEAPON UPGRADE between rounds → next round.
// After a KO win: pick an upgrade → NEXT FIGHT (Dockyard reloads, loadout carries over).
// Self-bootstraps into any scene with a MatchDirector, so no scene edit is required.

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using GenerationMayhem.Combat;
using GenerationMayhem.Match;
using GenerationMayhem.Upgrades;

namespace GenerationMayhem.Flow
{
    public class GameFlow : MonoBehaviour
    {
        public enum Screen { None, Start, Upgrade }

        public static GameFlow Instance { get; private set; }
        /// <summary>MatchDirector.PreMatch waits on this (start screen).</summary>
        public static bool HoldPreMatch => !_startDone;
        /// <summary>True while a menu owns input / reload.</summary>
        public static bool Busy => Instance != null && (Instance._screen != Screen.None || Instance._pendingOpen);
        public static int FightNumber { get; private set; } = 1;
        public static int Round { get; private set; } = 1;
        static bool _startDone; // start screen once per session (StartScreen scene also sets it)
        public static void MarkStartDone() { _startDone = true; }

        [Header("Optional models (builder assigns RefBot FBX; MedBot = placeholder until Soft rebuild lands)")]
        public GameObject refBotModel;
        public GameObject medBotModel;
        public float medPickupEvery = 30f;
        public float medPickupHeal = 35f;

        Screen _screen = Screen.None;
        List<UpgradeDef> _offers = new List<UpgradeDef>();
        int _sel; bool _confirming; bool _afterWin;
        float _prevScale = 1f;
        MatchDirector _md;
        RefBot _ref; MedBot _med;
        bool _wonHandled; bool _pendingOpen;

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterSceneLoad)]
        static void Boot()
        {
            UnityEngine.SceneManagement.SceneManager.sceneLoaded += (s, m) => Ensure();
            Ensure();
        }

        static void Ensure()
        {
            if (Instance != null) return;
            var md = FindFirstObjectByType<MatchDirector>();
            if (md == null) return;
            var existing = FindFirstObjectByType<GameFlow>();
            if (existing == null) new GameObject("GM_GameFlow").AddComponent<GameFlow>();
        }

        void Awake()
        {
            Instance = this;
            if (HoldPreMatch) _screen = Screen.Start;
            if (GetComponent<UpgradeApplier>() == null) gameObject.AddComponent<UpgradeApplier>();
        }

        void OnDestroy() { if (Instance == this) { Instance = null; Time.timeScale = 1f; } }

        void Start()
        {
            _md = MatchDirector.Instance != null ? MatchDirector.Instance : FindFirstObjectByType<MatchDirector>();
            Round = 1; _wonHandled = false;
            var boss = _md != null ? _md.boss : null;
            if (boss == null) boss = FindFirstObjectByType<SlitherBoss>();
            if (boss != null) boss.onPhaseChanged += OnBossPhase;
            SpawnBots(boss);
            StartCoroutine(MedPickups());
        }

        // ---------------- bots ----------------
        void SpawnBots(SlitherBoss boss)
        {
            Vector3 center = boss != null ? boss.transform.position : Vector3.zero;
            Vector3 vix = _md != null && _md.vixen != null ? _md.vixen.transform.position : center + Vector3.back * 10f;
            Vector3 mid = Vector3.Lerp(vix, center, 0.5f);
            Vector3 side = Vector3.Cross(Vector3.up, (center - vix).normalized); if (side.sqrMagnitude < 0.01f) side = Vector3.right;
            _ref = RefBot.Spawn(mid + side * 9f, center, refBotModel);
            _med = MedBot.Spawn(vix - side * 4f + Vector3.back * 2f, vix, medBotModel);
        }

        IEnumerator MedPickups()
        {
            while (true)
            {
                yield return new WaitForSeconds(medPickupEvery);
                if (_md == null || _md.State != MatchState.Fighting || _md.vixen == null) continue;
                Vector3 p = _md.vixen.transform.position + Random.insideUnitSphere.normalized * 6f; p.y = _md.vixen.transform.position.y;
                MedPickup.Spawn(p, medPickupHeal);
                MatchDirector.Say("Med Bot", "Patch kit down!");
            }
        }

        // ---------------- rounds ----------------
        void OnBossPhase(BossPhase p)
        {
            if (p == BossPhase.Phase2 || p == BossPhase.Phase3)
            {
                MatchDirector.Say("Ref Bot", "End of round " + Round + "!");
                if (_ref != null) _ref.Callout();
                Round++;
                StartCoroutine(OpenUpgradeAfter(1.0f, false));
            }
        }

        void Update()
        {
            if (_md != null && _md.State == MatchState.Won && !_wonHandled)
            {
                _wonHandled = true;
                if (_ref != null) _ref.Callout();
                StartCoroutine(OpenUpgradeAfter(3.5f, true));
            }
            if (_screen == Screen.Start) TickStart();
            else if (_screen == Screen.Upgrade) TickUpgrade();
        }

        IEnumerator OpenUpgradeAfter(float delay, bool afterWin)
        {
            _pendingOpen = true;
            yield return new WaitForSecondsRealtime(delay);
            _pendingOpen = false;
            _offers = UpgradeCatalog.RollOffers(3);
            if (_offers.Count == 0) { if (_med != null) _med.RoundHeal(_md); if (afterWin) NextFight(); yield break; }
            _afterWin = afterWin; _sel = 0; _confirming = false;
            _prevScale = Time.timeScale > 0f ? Time.timeScale : 1f;
            Time.timeScale = 0f;
            _screen = Screen.Upgrade;
            if (_med != null) _med.RoundHeal(_md);
        }

        // ---------------- input ----------------
        static bool Up() => Input.GetKeyDown(KeyCode.W) || Input.GetKeyDown(KeyCode.UpArrow) || Input.GetKeyDown(KeyCode.A) || Input.GetKeyDown(KeyCode.LeftArrow);
        static bool Dn() => Input.GetKeyDown(KeyCode.S) || Input.GetKeyDown(KeyCode.DownArrow) || Input.GetKeyDown(KeyCode.D) || Input.GetKeyDown(KeyCode.RightArrow);
        static bool Ok() => Input.GetKeyDown(KeyCode.Return) || Input.GetKeyDown(KeyCode.Space) || Input.GetKeyDown(KeyCode.JoystickButton0);
        static bool Back() => Input.GetKeyDown(KeyCode.Escape) || Input.GetKeyDown(KeyCode.Backspace) || Input.GetKeyDown(KeyCode.JoystickButton1);

        float _padAxisLatch;
        int PadNav()
        {
            float v = Input.GetAxisRaw("Vertical") - Input.GetAxisRaw("Horizontal") * 0f;
            if (Mathf.Abs(v) < 0.5f) { _padAxisLatch = 0f; return 0; }
            if (_padAxisLatch != 0f) return 0;
            _padAxisLatch = Mathf.Sign(v); return v > 0 ? -1 : 1;
        }

        int _startSel;
        void TickStart()
        {
            int n = PadNav();
            if (Up() || n < 0) _startSel = 0;
            if (Dn() || n > 0) _startSel = 1;
            if (Ok()) { if (_startSel == 0) Play(); else Quit(); }
        }

        void TickUpgrade()
        {
            if (_confirming)
            {
                if (Ok()) Confirm();
                else if (Back()) _confirming = false;
                return;
            }
            int n = PadNav();
            if (Up() || n < 0) _sel = (_sel + _offers.Count - 1) % _offers.Count;
            if (Dn() || n > 0) _sel = (_sel + 1) % _offers.Count;
            if (Input.GetKeyDown(KeyCode.Alpha1)) _sel = 0;
            if (Input.GetKeyDown(KeyCode.Alpha2) && _offers.Count > 1) _sel = 1;
            if (Input.GetKeyDown(KeyCode.Alpha3) && _offers.Count > 2) _sel = 2;
            if (Ok()) _confirming = true;
        }

        public void Play()
        {
            _startDone = true; _screen = Screen.None;
        }

        public void Quit()
        {
#if UNITY_EDITOR
            UnityEditor.EditorApplication.isPlaying = false;
#else
            Application.Quit();
#endif
        }

        void Confirm()
        {
            var d = _offers[_sel];
            PlayerLoadout.Add(d.id); // UpgradeApplier re-applies immediately
            MatchDirector.Say(d.owner, d.line);
            _screen = Screen.None; _confirming = false;
            Time.timeScale = _prevScale;
            if (_afterWin) NextFight();
            else { MatchDirector.Say("Ref Bot", "Round " + Round + "! FIGHT!"); if (_ref != null) _ref.Callout(); }
        }

        void NextFight()
        {
            FightNumber++;
            Time.timeScale = 1f;
            _screen = Screen.None;
            if (_md != null) _md.Retry();
        }

        // ---------------- drawing (IMGUI: works at timeScale 0, no prefab wiring) ----------------
        GUIStyle _title, _body, _small, _btn;
        Texture2D _white;

        void Styles()
        {
            if (_title != null) return;
            _white = Texture2D.whiteTexture;
            _title = new GUIStyle(GUI.skin.label) { fontSize = 64, fontStyle = FontStyle.Bold, alignment = TextAnchor.MiddleCenter };
            _title.normal.textColor = new Color(1f, 0.35f, 0.1f);
            _body = new GUIStyle(GUI.skin.label) { fontSize = 26, fontStyle = FontStyle.Bold, alignment = TextAnchor.MiddleLeft, wordWrap = true };
            _body.normal.textColor = Color.white;
            _small = new GUIStyle(_body) { fontSize = 20, fontStyle = FontStyle.Normal };
            _btn = new GUIStyle(GUI.skin.button) { fontSize = 34, fontStyle = FontStyle.Bold };
        }

        void Fill(Rect r, Color c) { var o = GUI.color; GUI.color = c; GUI.DrawTexture(r, _white); GUI.color = o; }

        void OnGUI()
        {
            if (_screen == Screen.None) { DrawLoadoutChip(); return; }
            Styles();
            GUI.depth = -100;
            float s = Mathf.Min(UnityEngine.Screen.width / 1920f, UnityEngine.Screen.height / 1080f);
            var m = GUI.matrix; GUI.matrix = Matrix4x4.Scale(new Vector3(s, s, 1f));
            float W = UnityEngine.Screen.width / s, H = UnityEngine.Screen.height / s;
            Fill(new Rect(0, 0, W, H), new Color(0, 0, 0, _screen == Screen.Start ? 0.85f : 0.75f));
            if (_screen == Screen.Start) DrawStart(W, H); else DrawUpgrade(W, H);
            GUI.matrix = m;
        }

        void DrawStart(float W, float H)
        {
            GUI.Label(new Rect(0, H * 0.18f, W, 120), "GENERATION MAYHEM", _title);
            var sub = new GUIStyle(_body) { alignment = TextAnchor.MiddleCenter, fontSize = 30 };
            GUI.Label(new Rect(0, H * 0.18f + 110, W, 50), "DOCKYARD", sub);
            string[] items = { "PLAY", "QUIT" };
            for (int i = 0; i < 2; i++)
            {
                var r = new Rect(W * 0.5f - 200, H * 0.5f + i * 110, 400, 90);
                if (i == _startSel) Fill(new Rect(r.x - 6, r.y - 6, r.width + 12, r.height + 12), new Color(1f, 0.35f, 0.1f));
                if (GUI.Button(r, items[i], _btn)) { _startSel = i; if (i == 0) Play(); else Quit(); }
                if (r.Contains(Event.current.mousePosition)) _startSel = i;
            }
            var hint = new GUIStyle(_small) { alignment = TextAnchor.MiddleCenter };
            GUI.Label(new Rect(0, H - 90, W, 40), "W/S or D-pad to pick  •  Enter / Space / (A) to select", hint);
        }

        void DrawUpgrade(float W, float H)
        {
            string head = _afterWin ? "KNOCKOUT! UPGRADE BEFORE FIGHT " + (FightNumber + 1) : "ROUND " + (Round - 1) + " DONE — UPGRADE";
            GUI.Label(new Rect(0, 50, W, 100), head, _title);
            float cw = 520, ch = 420, gap = 40, total = _offers.Count * cw + (_offers.Count - 1) * gap, x0 = (W - total) * 0.5f, y = 200;
            for (int i = 0; i < _offers.Count; i++)
            {
                var d = _offers[i]; int lv = PlayerLoadout.Level(d.id);
                var r = new Rect(x0 + i * (cw + gap), y, cw, ch);
                bool sel = i == _sel;
                Fill(new Rect(r.x - 8, r.y - 8, r.width + 16, r.height + 16), sel ? Color.white : new Color(1, 1, 1, 0.15f));
                Fill(r, new Color(0.08f, 0.08f, 0.1f, 0.97f));
                Fill(new Rect(r.x, r.y, r.width, 14), d.color);
                GUI.Label(new Rect(r.x + 24, r.y + 30, cw - 48, 34), (i + 1) + "  " + d.owner.ToUpper() + " · " + d.weapon, _small);
                GUI.Label(new Rect(r.x + 24, r.y + 70, cw - 48, 60), d.title, new GUIStyle(_body) { fontSize = 38 });
                GUI.Label(new Rect(r.x + 24, r.y + 140, cw - 48, 34), "LV " + lv + " → " + (lv + 1) + " / " + d.maxLevel, _small);
                GUI.Label(new Rect(r.x + 24, r.y + 185, cw - 48, 120), d.describe(lv + 1), _body);
                GUI.Label(new Rect(r.x + 24, r.y + ch - 80, cw - 48, 50), "\"" + d.line + "\"", new GUIStyle(_small) { fontStyle = FontStyle.Italic });
                if (!_confirming && GUI.Button(r, GUIContent.none, GUIStyle.none)) { if (_sel == i) _confirming = true; else _sel = i; }
            }
            var foot = new GUIStyle(_small) { alignment = TextAnchor.MiddleCenter };
            GUI.Label(new Rect(0, y + ch + 40, W, 40), "Current: " + PlayerLoadout.Summary(), foot);
            if (_confirming)
            {
                var b = new Rect(W * 0.5f - 420, y + ch + 100, 840, 150);
                Fill(b, new Color(1f, 0.35f, 0.1f, 0.95f));
                GUI.Label(new Rect(b.x, b.y + 10, b.width, 60), "TAKE " + _offers[_sel].title + "?", new GUIStyle(_body) { alignment = TextAnchor.MiddleCenter, fontSize = 36 });
                if (GUI.Button(new Rect(b.x + 120, b.y + 80, 280, 56), "CONFIRM", _btn)) Confirm();
                if (GUI.Button(new Rect(b.x + 440, b.y + 80, 280, 56), "BACK", _btn)) _confirming = false;
            }
            else GUI.Label(new Rect(0, H - 90, W, 40), "A/D or 1-2-3 to pick  •  Enter / (A) to select, then CONFIRM  •  Esc / (B) back", foot);
        }

        void DrawLoadoutChip()
        {
            if (PlayerLoadout.TotalPicks == 0) return;
            Styles();
            var r = new Rect(12, UnityEngine.Screen.height - 40, 900, 30);
            GUI.Label(r, "UPGRADES: " + PlayerLoadout.Summary(), _small);
        }
    }
}
