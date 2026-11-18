// Copyright Dark Logic Studios. Generation Mayhem.
// Per-player controls remap overlay — Input System interactive rebinding over GMControls.
// Text-only uGUI (GMUIKit): NO new HUD button sprites (button art is still with Misty).
// Opened from StartMenuController (SETTINGS) and GMPauseMenu (CONTROLS). Binding overrides
// persist per player slot via GMControls.SaveOverrides (PlayerPrefs "GM_Bindings_P{index}").

using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.UI;
using GenerationMayhem.Controls;

namespace GenerationMayhem.UI
{
    public class ControlsRemapOverlay : MonoBehaviour
    {
        /// <summary>True while any remap overlay is open (GMPauseMenu ignores Pause presses then).</summary>
        public static bool AnyOpen { get; private set; }

        int _playerIndex;
        GMControls _controls;
        System.Action _onClose;
        Text _hint;
        InputActionRebindingExtensions.RebindingOperation _op;

        class Row { public InputAction action; public int bindingIndex; public Text value; }
        readonly List<Row> _rows = new List<Row>();

        /// <summary>Build the overlay under 'canvas' for one player slot (slot 0 = Player 1).</summary>
        public static ControlsRemapOverlay Open(Transform canvas, int playerIndex = 0, System.Action onClose = null)
        {
            var root = GMUIKit.Rect(canvas, "ControlsRemap", Vector2.zero, Vector2.one);
            var o = root.gameObject.AddComponent<ControlsRemapOverlay>();
            o._playerIndex = playerIndex;
            o._controls = GMControls.For(playerIndex);
            o._onClose = onClose;
            o.Build(root);
            AnyOpen = true;
            return o;
        }

        void OnDestroy()
        {
            _op?.Cancel();
            _op?.Dispose();
            _op = null;
            AnyOpen = false;
        }

        void Build(RectTransform root)
        {
            GMUIKit.Panel(root, "Dim", new Color(0f, 0f, 0f, 0.92f), Vector2.zero, Vector2.one);
            var box = GMUIKit.Rect(root, "Box", new Vector2(0.14f, 0.06f), new Vector2(0.86f, 0.94f));
            GMUIKit.Panel(box, "BoxBG", GMUIKit.Steel, Vector2.zero, Vector2.one);
            GMUIKit.Panel(box, "Bolt", GMUIKit.Pink, new Vector2(0.04f, 0.885f), new Vector2(0.96f, 0.892f));
            GMUIKit.Label(GMUIKit.Rect(box, "H", new Vector2(0f, 0.9f), new Vector2(1f, 0.99f)),
                "CONTROLS — PLAYER " + (_playerIndex + 1), 54, GMUIKit.Pink);
            _hint = GMUIKit.Label(GMUIKit.Rect(box, "Hint", new Vector2(0f, 0.845f), new Vector2(1f, 0.885f)),
                "Click a binding, then press the new key / button. Esc cancels a rebind (so Esc itself can't be rebound).",
                24, GMUIKit.Cyan, TextAnchor.MiddleCenter, FontStyle.Normal);

            // Scroll list of every rebindable binding.
            var scroll = GMUIKit.Rect(box, "Scroll", new Vector2(0.04f, 0.12f), new Vector2(0.96f, 0.84f));
            var sr = scroll.gameObject.AddComponent<ScrollRect>();
            sr.horizontal = false;
            sr.scrollSensitivity = 40f;
            var viewport = GMUIKit.Rect(scroll, "Viewport", Vector2.zero, Vector2.one);
            viewport.gameObject.AddComponent<Image>().color = new Color(0f, 0f, 0f, 0.35f);
            viewport.gameObject.AddComponent<RectMask2D>();
            var content = GMUIKit.Rect(viewport, "Content", new Vector2(0f, 1f), new Vector2(1f, 1f));
            content.pivot = new Vector2(0.5f, 1f);
            var vl = content.gameObject.AddComponent<VerticalLayoutGroup>();
            vl.spacing = 8f; vl.padding = new RectOffset(16, 16, 12, 12);
            vl.childControlWidth = true; vl.childControlHeight = true;
            vl.childForceExpandWidth = true; vl.childForceExpandHeight = false;
            var fit = content.gameObject.AddComponent<ContentSizeFitter>();
            fit.verticalFit = ContentSizeFitter.FitMode.PreferredSize;
            sr.viewport = viewport; sr.content = content;

            var map = _controls.Asset.FindActionMap("Gameplay", true);
            foreach (var action in map.actions)
            {
                var bindings = action.bindings;
                for (int i = 0; i < bindings.Count; i++)
                {
                    if (bindings[i].isComposite) continue; // header row of WASD composite — rebind the parts
                    AddRow(content, action, i);
                }
            }

            // Footer: RESET ALL / DONE.
            var footer = GMUIKit.Rect(box, "Footer", new Vector2(0f, 0.015f), new Vector2(1f, 0.11f));
            var h = footer.gameObject.AddComponent<HorizontalLayoutGroup>();
            h.spacing = 40f; h.childAlignment = TextAnchor.MiddleCenter;
            h.childControlWidth = false; h.childControlHeight = false;
            SmallButton(footer, "RESET ALL", GMUIKit.Toxic, 360, ResetAll);
            SmallButton(footer, "DONE", GMUIKit.Pink, 360, Close);
        }

        void AddRow(Transform content, InputAction action, int bindingIndex)
        {
            var binding = action.bindings[bindingIndex];
            var row = new GameObject("Row_" + action.name + "_" + bindingIndex, typeof(RectTransform)).GetComponent<RectTransform>();
            row.SetParent(content, false);
            var le = row.gameObject.AddComponent<LayoutElement>(); le.preferredHeight = 58f;
            var h = row.gameObject.AddComponent<HorizontalLayoutGroup>();
            h.spacing = 20f; h.childControlWidth = false; h.childControlHeight = true;
            h.childForceExpandWidth = false; h.childAlignment = TextAnchor.MiddleLeft;

            bool pad = !string.IsNullOrEmpty(binding.groups) && binding.groups.Contains("Gamepad");
            string part = binding.isPartOfComposite ? " " + binding.name.ToUpperInvariant() : "";
            var nameRect = GMUIKit.Rect(row, "Name", Vector2.zero, Vector2.one);
            nameRect.gameObject.AddComponent<LayoutElement>().preferredWidth = 760f;
            GMUIKit.Label(nameRect, Pretty(action.name) + part + (pad ? "   [PAD]" : "   [KB+M]"),
                28, pad ? GMUIKit.Cyan : Color.white, TextAnchor.MiddleLeft, FontStyle.Normal);

            var r = new Row { action = action, bindingIndex = bindingIndex };
            r.value = SmallButton(row, DisplayOf(action, bindingIndex), GMUIKit.Pink, 440, () => StartRebind(r));
            _rows.Add(r);
        }

        Text SmallButton(Transform parent, string text, Color neon, float width, System.Action onClick)
        {
            var rect = GMUIKit.Rect(parent, "Btn_" + text, Vector2.zero, Vector2.one);
            var le = rect.gameObject.AddComponent<LayoutElement>(); le.preferredWidth = width; le.preferredHeight = 54f;
            var img = rect.gameObject.AddComponent<Image>(); img.color = GMUIKit.Black;
            var ol = rect.gameObject.AddComponent<Outline>(); ol.effectColor = neon; ol.effectDistance = new Vector2(2f, -2f);
            var b = rect.gameObject.AddComponent<Button>(); b.targetGraphic = img;
            var label = GMUIKit.Label(rect, text, 26, neon, TextAnchor.MiddleCenter, FontStyle.Bold);
            b.onClick.AddListener(() => onClick?.Invoke());
            return label;
        }

        static string Pretty(string actionName)
        {
            var sb = new System.Text.StringBuilder();
            for (int i = 0; i < actionName.Length; i++)
            {
                if (i > 0 && char.IsUpper(actionName[i])) sb.Append(' ');
                sb.Append(char.ToUpperInvariant(actionName[i]));
            }
            return sb.ToString();
        }

        static string DisplayOf(InputAction action, int bindingIndex)
        {
            string s = action.GetBindingDisplayString(bindingIndex,
                InputBinding.DisplayStringOptions.DontIncludeInteractions);
            return string.IsNullOrEmpty(s) ? "—" : s.ToUpperInvariant();
        }

        void StartRebind(Row r)
        {
            if (_op != null) return; // one rebind at a time
            bool pad = !string.IsNullOrEmpty(r.action.bindings[r.bindingIndex].groups) &&
                       r.action.bindings[r.bindingIndex].groups.Contains("Gamepad");
            r.value.text = "PRESS…";
            _hint.text = pad ? "Press a gamepad control…  (Esc cancels)" : "Press a key or mouse button…  (Esc cancels)";

            r.action.Disable();
            var op = r.action.PerformInteractiveRebinding(r.bindingIndex)
                .WithCancelingThrough("<Keyboard>/escape")
                .WithControlsExcluding("<Mouse>/position")
                .WithControlsExcluding("<Mouse>/delta")
                .WithControlsExcluding("<Mouse>/scroll")
                .OnMatchWaitForAnother(0.1f);
            if (pad) op.WithControlsHavingToMatchPath("<Gamepad>");
            else op.WithControlsHavingToMatchPath("<Keyboard>").WithControlsHavingToMatchPath("<Mouse>");
            _op = op.OnComplete(_ => FinishRebind(r, true))
                    .OnCancel(_ => FinishRebind(r, false))
                    .Start();
        }

        void FinishRebind(Row r, bool applied)
        {
            _op?.Dispose(); _op = null;
            // While the pause menu holds gameplay actions disabled, keep them disabled — GMPauseMenu
            // re-enables everything on resume. Pause itself must always come back on.
            if (!GMPauseMenu.IsPaused || r.action == _controls.Pause) r.action.Enable();
            if (applied) _controls.SaveOverrides();
            RefreshAll();
            _hint.text = "Click a binding, then press the new key / button. Esc cancels a rebind (so Esc itself can't be rebound).";
        }

        void RefreshAll()
        {
            foreach (var r in _rows) r.value.text = DisplayOf(r.action, r.bindingIndex);
        }

        void ResetAll()
        {
            if (_op != null) return;
            _controls.ResetOverrides();
            RefreshAll();
        }

        void Close()
        {
            if (_op != null) return;
            _controls.SaveOverrides();
            var cb = _onClose; _onClose = null;
            Destroy(gameObject);
            cb?.Invoke();
        }
    }
}
