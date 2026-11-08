// Copyright Dark Logic Studios. Generation Mayhem.
// Pause menu for gameplay scenes (Dockyard fight + Hyperdrive_L2). Esc / Start (Input System
// "Pause" action) toggles: RESUME / CONTROLS (per-player remap overlay) / QUIT TO MENU.
// Replaces GMFlow's old instant Esc-to-start-menu exit. Text-only uGUI — no new sprites.

using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.SceneManagement;
using GenerationMayhem.Controls;

namespace GenerationMayhem.UI
{
    public class GMPauseMenu : MonoBehaviour
    {
        public static GMPauseMenu Instance { get; private set; }
        public static bool IsPaused => Instance != null && Instance._paused;

        bool _paused;
        float _prevScale = 1f;
        GameObject _overlay;

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterSceneLoad)]
        static void Boot()
        {
            if (Instance != null) return;
            var go = new GameObject("GMPauseMenu");
            DontDestroyOnLoad(go);
            Instance = go.AddComponent<GMPauseMenu>();
            SceneManager.sceneLoaded += (_, __) => { if (Instance != null) Instance.OnSceneSwap(); };
        }

        static bool InGameplayScene()
        {
            string s = SceneManager.GetActiveScene().name;
            return s == GMFlow.FightScene || s == GMFlow.HyperdriveScene;
        }

        void OnSceneSwap()
        {
            // Scene-local canvas is gone; make sure we never carry a frozen timescale across scenes.
            _overlay = null;
            if (_paused)
            {
                _paused = false;
                Time.timeScale = _prevScale;
                GMControls.For(0).SetGameplayEnabled(true);
            }
        }

        void Update()
        {
            if (!InGameplayScene()) return;
            if (ControlsRemapOverlay.AnyOpen) return;           // Esc is the rebind-cancel key while remapping
            if (Flow.GameFlow.Busy) return;                      // IMGUI upgrade / start screen owns input
            if (GMControls.For(0).Pause.WasPressedThisFrame())
            {
                if (_paused) Resume();
                else Pause();
            }
        }

        void Pause()
        {
            _paused = true;
            _prevScale = Time.timeScale > 0f ? Time.timeScale : 1f;
            Time.timeScale = 0f;
            GMControls.For(0).SetGameplayEnabled(false);
            BuildOverlay();
        }

        void Resume()
        {
            _paused = false;
            Time.timeScale = _prevScale;
            GMControls.For(0).SetGameplayEnabled(true);
            if (_overlay != null) Destroy(_overlay);
            _overlay = null;
        }

        void QuitToMenu()
        {
            Resume();
            GMFlow.GoStart();
        }

        void BuildOverlay()
        {
            var canvas = GMUIKit.Canvas("PauseCanvas", 300); // scene-local: destroyed on scene load
            _overlay = canvas.gameObject;
            var c = canvas.transform;
            GMUIKit.Panel(c, "Dim", new Color(0f, 0f, 0f, 0.8f), Vector2.zero, Vector2.one);
            GMUIKit.Panel(c, "Bolt", GMUIKit.Pink, new Vector2(0.3f, 0.72f), new Vector2(0.7f, 0.727f));
            GMUIKit.Label(GMUIKit.Rect(c, "Title", new Vector2(0f, 0.74f), new Vector2(1f, 0.86f)), "PAUSED", 84, GMUIKit.Pink);

            var col = GMUIKit.Rect(c, "Buttons", new Vector2(0.5f, 0.2f), new Vector2(0.5f, 0.68f), new Vector2(-260f, 0f), new Vector2(260f, 0f));
            var v = col.gameObject.AddComponent<UnityEngine.UI.VerticalLayoutGroup>();
            v.spacing = 22f; v.childAlignment = TextAnchor.UpperCenter;
            v.childForceExpandHeight = false; v.childControlHeight = true; v.childControlWidth = true;

            var resume = GMUIKit.Button(col, "RESUME", GMUIKit.Cyan, Resume);
            GMUIKit.Button(col, "CONTROLS", GMUIKit.Pink, () =>
                ControlsRemapOverlay.Open(c, 0, onClose: () =>
                    EventSystem.current?.SetSelectedGameObject(resume.gameObject)));
            GMUIKit.Button(col, "QUIT TO MENU", GMUIKit.Toxic, QuitToMenu);
            EventSystem.current?.SetSelectedGameObject(resume.gameObject);
        }
    }
}
