// Dark Logic look kit: neon on industrial black. Builds uGUI in code so scenes stay tiny.
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

namespace GenerationMayhem.UI
{
    public static class GMUIKit
    {
        public static readonly Color Black = new Color(0.03f, 0.03f, 0.05f, 0.97f);
        public static readonly Color Steel = new Color(0.12f, 0.12f, 0.15f, 1f);
        public static readonly Color Pink = new Color(1f, 0.12f, 0.6f);
        public static readonly Color Cyan = new Color(0.1f, 0.95f, 1f);
        public static readonly Color Toxic = new Color(0.4f, 1f, 0.12f);
        static Font _font;
        public static Font Font => _font ? _font : (_font = Resources.GetBuiltinResource<Font>("LegacyRuntime.ttf"));

        public static Canvas Canvas(string name, int order)
        {
            var go = new GameObject(name, typeof(Canvas), typeof(CanvasScaler), typeof(GraphicRaycaster));
            var c = go.GetComponent<Canvas>(); c.renderMode = RenderMode.ScreenSpaceOverlay; c.sortingOrder = order;
            var s = go.GetComponent<CanvasScaler>(); s.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize; s.referenceResolution = new Vector2(1920, 1080); s.matchWidthOrHeight = 0.5f;
            if (Object.FindFirstObjectByType<EventSystem>() == null)
            {
                var es = new GameObject("EventSystem", typeof(EventSystem));
#if ENABLE_INPUT_SYSTEM
                es.AddComponent<UnityEngine.InputSystem.UI.InputSystemUIInputModule>();
#else
                es.AddComponent<StandaloneInputModule>();
#endif
            }
            return c;
        }

        public static RectTransform Rect(Transform parent, string name, Vector2 aMin, Vector2 aMax, Vector2 offMin = default, Vector2 offMax = default)
        {
            var go = new GameObject(name, typeof(RectTransform)); var r = (RectTransform)go.transform;
            r.SetParent(parent, false); r.anchorMin = aMin; r.anchorMax = aMax; r.offsetMin = offMin; r.offsetMax = offMax; return r;
        }

        public static Image Panel(Transform parent, string name, Color c, Vector2 aMin, Vector2 aMax)
        {
            var img = Rect(parent, name, aMin, aMax).gameObject.AddComponent<Image>(); img.color = c; return img;
        }

        public static Text Label(Transform parent, string text, int size, Color c, TextAnchor a = TextAnchor.MiddleCenter, FontStyle st = FontStyle.Bold)
        {
            var t = Rect(parent, "Txt_" + text, Vector2.zero, Vector2.one).gameObject.AddComponent<Text>();
            t.font = Font; t.text = text; t.fontSize = size; t.color = c; t.alignment = a; t.fontStyle = st; t.raycastTarget = false;
            t.horizontalOverflow = HorizontalWrapMode.Wrap; t.verticalOverflow = VerticalWrapMode.Overflow;
            var o = t.gameObject.AddComponent<Outline>(); o.effectColor = new Color(c.r, c.g, c.b, 0.35f); o.effectDistance = new Vector2(2, -2);
            return t;
        }

        public static Button Button(Transform parent, string text, Color neon, System.Action onClick)
        {
            var r = Rect(parent, "Btn_" + text, Vector2.zero, Vector2.one);
            var le = r.gameObject.AddComponent<LayoutElement>(); le.preferredHeight = 92; le.preferredWidth = 520;
            var img = r.gameObject.AddComponent<Image>(); img.color = Steel;
            var ol = r.gameObject.AddComponent<Outline>(); ol.effectColor = neon; ol.effectDistance = new Vector2(3, -3);
            var b = r.gameObject.AddComponent<Button>();
            var cb = b.colors; cb.normalColor = Color.white; cb.highlightedColor = new Color(1.6f, 1.2f, 1.5f); cb.selectedColor = cb.highlightedColor; cb.pressedColor = neon; cb.disabledColor = new Color(0.4f, 0.4f, 0.4f, 0.5f); b.colors = cb;
            Label(r, text, 44, neon);
            b.onClick.AddListener(() => onClick?.Invoke());
            return b;
        }
    }
}
