// Copyright Dark Logic Studios. Generation Mayhem.
// Runtime greybox visuals: materials (Built-in Standard or URP Lit, whichever is active), rings, strips, markers.

using UnityEngine;
using UnityEngine.Rendering;

namespace GenerationMayhem.Match
{
    public static class FxUtil
    {
        public static readonly Color ToxicGreen = new Color(0.4f, 1f, 0.12f);   // #66FF1F
        public static readonly Color ShatterOrange = new Color(1f, 0.45f, 0.05f);

        static Shader _lit;
        static Shader Lit
        {
            get
            {
                if (_lit != null) return _lit;
                if (GraphicsSettings.currentRenderPipeline != null) _lit = Shader.Find("Universal Render Pipeline/Lit");
                if (_lit == null) _lit = Shader.Find("Standard");
                return _lit;
            }
        }

        public static Material Mat(Color c, float emission = 0f, bool transparent = false)
        {
            var m = new Material(Lit);
            if (m.HasProperty("_BaseColor")) m.SetColor("_BaseColor", c);
            if (m.HasProperty("_Color")) m.SetColor("_Color", c);
            if (emission > 0f)
            {
                m.EnableKeyword("_EMISSION");
                if (m.HasProperty("_EmissionColor")) m.SetColor("_EmissionColor", c * emission);
            }
            if (transparent)
            {
                if (m.HasProperty("_Surface"))
                {   // URP Lit
                    m.SetFloat("_Surface", 1f); m.SetFloat("_Blend", 0f);
                    m.SetInt("_SrcBlend", (int)BlendMode.SrcAlpha); m.SetInt("_DstBlend", (int)BlendMode.OneMinusSrcAlpha);
                    m.SetInt("_ZWrite", 0); m.EnableKeyword("_SURFACE_TYPE_TRANSPARENT");
                }
                else
                {   // Built-in Standard, Fade mode
                    m.SetFloat("_Mode", 2f);
                    m.SetInt("_SrcBlend", (int)BlendMode.SrcAlpha); m.SetInt("_DstBlend", (int)BlendMode.OneMinusSrcAlpha);
                    m.SetInt("_ZWrite", 0);
                    m.DisableKeyword("_ALPHATEST_ON"); m.EnableKeyword("_ALPHABLEND_ON"); m.DisableKeyword("_ALPHAPREMULTIPLY_ON");
                }
                m.renderQueue = (int)RenderQueue.Transparent;
            }
            return m;
        }

        public static void Tint(Renderer r, Color c, float emission = 0f)
        {
            if (r == null) return;
            var m = r.material;
            if (m.HasProperty("_BaseColor")) m.SetColor("_BaseColor", c);
            if (m.HasProperty("_Color")) m.SetColor("_Color", c);
            if (m.HasProperty("_EmissionColor"))
            {
                if (emission > 0f) m.EnableKeyword("_EMISSION");
                m.SetColor("_EmissionColor", c * emission);
            }
        }

        static GameObject Primitive(PrimitiveType t, string name, Color c, float emission, bool transparent)
        {
            var go = GameObject.CreatePrimitive(t);
            go.name = name;
            Object.Destroy(go.GetComponent<Collider>());
            go.GetComponent<Renderer>().sharedMaterial = Mat(c, emission, transparent);
            go.layer = 2; // Ignore Raycast
            return go;
        }

        /// <summary>Flat ground ring/disc (telegraph, landing spot, Shatter Window crack ring).</summary>
        public static GameObject Ring(Vector3 at, float diameter, Color c, float seconds, Transform parent = null)
        {
            var go = Primitive(PrimitiveType.Cylinder, "FX_Ring", new Color(c.r, c.g, c.b, 0.55f), 1.5f, true);
            if (parent != null) go.transform.SetParent(parent, false);
            go.transform.position = at + Vector3.up * 0.03f;
            go.transform.localScale = new Vector3(diameter, 0.01f, diameter);
            if (seconds > 0f) Object.Destroy(go, seconds);
            return go;
        }

        public static GameObject Sphere(Vector3 at, float diameter, Color c, float seconds, float emission = 1.5f, bool transparent = false)
        {
            var go = Primitive(PrimitiveType.Sphere, "FX_Sphere", c, emission, transparent);
            go.transform.position = at;
            go.transform.localScale = Vector3.one * diameter;
            if (seconds > 0f) Object.Destroy(go, seconds);
            return go;
        }

        /// <summary>Flat strip on the ground from a to b (venom trail).</summary>
        public static GameObject Strip(Vector3 a, Vector3 b, float width, Color c, float seconds)
        {
            var go = Primitive(PrimitiveType.Cube, "FX_Strip", new Color(c.r, c.g, c.b, 0.6f), 1.2f, true);
            Vector3 d = b - a; d.y = 0f;
            go.transform.position = (a + b) * 0.5f + Vector3.up * 0.04f;
            go.transform.rotation = d.sqrMagnitude > 1e-4f ? Quaternion.LookRotation(d) : Quaternion.identity;
            go.transform.localScale = new Vector3(width, 0.02f, Mathf.Max(0.1f, d.magnitude));
            if (seconds > 0f) Object.Destroy(go, seconds);
            return go;
        }

        public static LineRenderer Line(Transform parent, Color c, float width)
        {
            var go = new GameObject("FX_Line");
            go.transform.SetParent(parent, false);
            var lr = go.AddComponent<LineRenderer>();
            lr.positionCount = 2;
            lr.startWidth = lr.endWidth = width;
            lr.useWorldSpace = true;
            lr.sharedMaterial = Mat(c, 2f);
            lr.startColor = lr.endColor = c;
            lr.enabled = false;
            return lr;
        }
    }
}
