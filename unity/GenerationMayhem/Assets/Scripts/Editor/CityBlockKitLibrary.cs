// Copyright Dark Logic Studios. Generation Mayhem.
// Editor-only access to CityBlockKit_Unity_v001 (Assets/Environment/CityBlockKit): kit.json, FBX, markers, atlas material.
#if UNITY_EDITOR
using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEngine;

namespace GenerationMayhem.EditorTools
{
    /// <summary>
    /// Loads kit.json and instantiates kit FBX as prefab instances.
    /// v002 contract: Forward Z export, pivot = bottom min-X/min-Z corner, piece extends +X/+Z, footprint "AxB" = X × Z.
    /// Every spawn verifies that contract (render-bounds min must sit on the pivot); if it doesn't, the piece is
    /// flagged and Place() falls back to mesh-bounds alignment. Size mismatches vs kit.json are logged.
    /// </summary>
    public static class CityBlockKitLibrary
    {
        public const string KitRoot = "Assets/Environment/CityBlockKit/";
        public const string AtlasMaterialPath = KitRoot + "M_CB_Atlas.mat";

        [System.Serializable] public class Piece
        {
            public string name, fbx, footprint, layer, nav_area, pivot, use;
            public float height_m, snap_m, grid_m;
            public string[] tags, markers, collider_meshes;
        }
        [System.Serializable] class KitFile { public string kit, version; public float grid_m, snap_m, wall_tier_m; public Piece[] pieces; }

        static KitFile _kit;
        static readonly Dictionary<GameObject, bool> _pivotOk = new Dictionary<GameObject, bool>();
        static Material _atlas;
        public static readonly List<string> Report = new List<string>();

        public static bool Available
        {
            get { Load(); return _kit != null && _kit.pieces != null && _kit.pieces.Length > 0; }
        }

        public static void Reset() { _kit = null; _atlas = null; Report.Clear(); _pivotOk.Clear(); }

        static void Load()
        {
            if (_kit != null) return;
            string path = KitRoot + "kit.json";
            if (!File.Exists(path)) return;
            try { _kit = JsonUtility.FromJson<KitFile>(File.ReadAllText(path)); }
            catch (System.Exception e) { Debug.LogWarning("[CityBlockKit] kit.json parse failed: " + e.Message); _kit = null; }
        }

        public static Piece Get(string pieceName)
        {
            Load();
            if (_kit?.pieces == null) return null;
            foreach (var p in _kit.pieces) if (p.name == pieceName) return p;
            return null;
        }

        /// <summary>Instantiate a kit piece (null if kit or FBX missing). Not yet positioned.</summary>
        public static GameObject Spawn(string pieceName, Transform parent)
        {
            var p = Get(pieceName);
            if (p == null) return null;
            var asset = AssetDatabase.LoadAssetAtPath<GameObject>(KitRoot + p.fbx);
            if (asset == null) { Note(pieceName + ": FBX not found at " + KitRoot + p.fbx); return null; }
            var go = (GameObject)PrefabUtility.InstantiatePrefab(asset, parent);
            go.name = pieceName;
            PrepareColliders(go);
            ApplyAtlas(go);
            int layer = LayerMask.NameToLayer(p.layer ?? "");
            if (layer >= 0) SetLayer(go, layer);
            _pivotOk[go] = VerifyPivot(go, p);
            return go;
        }

        /// <summary>Footprint "AxB m" → (X, Z).</summary>
        public static Vector2 Footprint(string pieceName)
        {
            var p = Get(pieceName);
            if (p == null || string.IsNullOrEmpty(p.footprint)) return Vector2.zero;
            var parts = p.footprint.Replace(" m", "").Split('x');
            var inv = System.Globalization.CultureInfo.InvariantCulture;
            if (parts.Length == 2 && float.TryParse(parts[0], System.Globalization.NumberStyles.Float, inv, out float x)
                && float.TryParse(parts[1], System.Globalization.NumberStyles.Float, inv, out float z)) return new Vector2(x, z);
            return Vector2.zero;
        }

        /// <summary>Check pivot = bounds min corner and size = footprint (X×Z) × height, at identity rotation.</summary>
        static bool VerifyPivot(GameObject go, Piece p)
        {
            Quaternion saved = go.transform.rotation;
            go.transform.rotation = Quaternion.identity;
            var b = RenderBounds(go);
            go.transform.rotation = saved;
            Vector3 off = b.min - go.transform.position;
            Vector2 fp = Footprint(p.name);
            Vector3 size = b.size;
            bool pivotOk = off.magnitude <= 0.03f;
            bool sizeOk = fp == Vector2.zero || (Mathf.Abs(size.x - fp.x) <= 0.06f && Mathf.Abs(size.z - fp.y) <= 0.06f && Mathf.Abs(size.y - p.height_m) <= 0.06f);
            if (!pivotOk)
                Note(string.Format("{0}: pivot is not the bottom min-X/min-Z corner (bounds.min − pivot = {1:0.000},{2:0.000},{3:0.000}); using mesh-bounds placement.", p.name, off.x, off.y, off.z));
            if (!sizeOk)
                Note(string.Format("{0}: bounds {1:0.00}×{2:0.00}×{3:0.00} (X×Y×Z) vs kit.json {4} h{5}.", p.name, size.x, size.y, size.z, p.footprint, p.height_m));
            return pivotOk && sizeOk;
        }

        public static bool PivotOk(GameObject go) => go != null && _pivotOk.TryGetValue(go, out bool ok) && ok;

        /// <summary>
        /// Place a spawned piece so its footprint bottom-centre lands on frame.TransformPoint(localBottomCenter) with
        /// rotation frame.rotation * localRot. Uses the v002 pivot contract; falls back to bounds alignment.
        /// </summary>
        public static void Place(GameObject go, Transform frame, Vector3 localBottomCenter, Quaternion localRot, string pieceName)
        {
            Quaternion rot = (frame != null ? frame.rotation : Quaternion.identity) * localRot;
            Vector3 target = frame != null ? frame.TransformPoint(localBottomCenter) : localBottomCenter;
            go.transform.rotation = rot;
            Vector2 fp = Footprint(pieceName);
            if (PivotOk(go) && fp != Vector2.zero)
                go.transform.position = target - rot * new Vector3(fp.x * 0.5f, 0f, fp.y * 0.5f);
            else
                AlignBottomCenter(go, target);
        }

        /// <summary>Postprocessor missing/not run: turn UCX_ renderers into convex colliders here.</summary>
        static void PrepareColliders(GameObject go)
        {
            foreach (var mf in go.GetComponentsInChildren<MeshFilter>(true))
            {
                if (!mf.name.StartsWith("UCX_")) continue;
                var mr = mf.GetComponent<MeshRenderer>();
                if (mr != null) mr.enabled = false; // can't destroy components on a prefab instance; disable
                if (mf.GetComponent<MeshCollider>() == null)
                {
                    var mc = mf.gameObject.AddComponent<MeshCollider>();
                    mc.sharedMesh = mf.sharedMesh; mc.convex = true;
                }
            }
        }

        public static void StripColliders(GameObject go)
        {
            foreach (var c in go.GetComponentsInChildren<Collider>(true)) c.enabled = false;
        }

        static void ApplyAtlas(GameObject go)
        {
            var m = Atlas();
            if (m == null) return;
            foreach (var r in go.GetComponentsInChildren<Renderer>(true))
            {
                if (!r.enabled) continue;
                var mats = r.sharedMaterials;
                for (int i = 0; i < mats.Length; i++) mats[i] = m;
                r.sharedMaterials = mats;
            }
        }

        /// <summary>Creates M_CB_Atlas (URP Lit) per kit README step 4–5 if missing.</summary>
        public static Material Atlas()
        {
            if (_atlas != null) return _atlas;
            _atlas = AssetDatabase.LoadAssetAtPath<Material>(AtlasMaterialPath);
            if (_atlas != null) return _atlas;
            // URP Lit only when a URP asset is active; otherwise Built-in Standard so nothing renders pink.
            Shader sh = UnityEngine.Rendering.GraphicsSettings.currentRenderPipeline != null ? Shader.Find("Universal Render Pipeline/Lit") : null;
            if (sh == null) sh = Shader.Find("Standard");
            if (sh == null) return null;
            FixTexture("Textures/CB_Atlas_Normal_2K.png", normal: true, srgb: false);
            FixTexture("Textures/CB_Atlas_MetallicSmoothness_2K.png", normal: false, srgb: false);
            FixTexture("Textures/CB_Atlas_Albedo_2K.png", normal: false, srgb: true);
            FixTexture("Textures/CB_Atlas_Emission_2K.png", normal: false, srgb: true);
            _atlas = new Material(sh) { name = "M_CB_Atlas" };
            SetTex(_atlas, "_BaseMap", "Textures/CB_Atlas_Albedo_2K.png");
            SetTex(_atlas, "_MainTex", "Textures/CB_Atlas_Albedo_2K.png"); // Built-in Standard fallback
            SetTex(_atlas, "_MetallicGlossMap", "Textures/CB_Atlas_MetallicSmoothness_2K.png");
            SetTex(_atlas, "_BumpMap", "Textures/CB_Atlas_Normal_2K.png");
            SetTex(_atlas, "_EmissionMap", "Textures/CB_Atlas_Emission_2K.png");
            _atlas.EnableKeyword("_NORMALMAP");
            _atlas.EnableKeyword("_METALLICSPECGLOSSMAP");
            _atlas.EnableKeyword("_EMISSION");
            if (_atlas.HasProperty("_EmissionColor")) _atlas.SetColor("_EmissionColor", Color.white * 2f);
            if (_atlas.HasProperty("_SmoothnessTextureChannel")) _atlas.SetFloat("_SmoothnessTextureChannel", 0f); // Metallic Alpha
            AssetDatabase.CreateAsset(_atlas, AtlasMaterialPath);
            return _atlas;
        }

        static void SetTex(Material m, string prop, string rel)
        {
            var t = AssetDatabase.LoadAssetAtPath<Texture2D>(KitRoot + rel);
            if (t != null && m.HasProperty(prop)) m.SetTexture(prop, t);
        }

        static void FixTexture(string rel, bool normal, bool srgb)
        {
            var ti = AssetImporter.GetAtPath(KitRoot + rel) as TextureImporter;
            if (ti == null) return;
            bool dirty = false;
            if (normal && ti.textureType != TextureImporterType.NormalMap) { ti.textureType = TextureImporterType.NormalMap; dirty = true; }
            if (ti.sRGBTexture != srgb) { ti.sRGBTexture = srgb; dirty = true; }
            if (ti.maxTextureSize != 2048) { ti.maxTextureSize = 2048; dirty = true; }
            if (dirty) ti.SaveAndReimport();
        }

        public static void SetLayer(GameObject go, int layer)
        {
            foreach (var t in go.GetComponentsInChildren<Transform>(true)) t.gameObject.layer = layer;
        }

        public static void SetTag(GameObject go, string tag, bool children)
        {
            try
            {
                go.tag = tag;
                if (children) foreach (var t in go.GetComponentsInChildren<Transform>(true)) t.gameObject.tag = tag;
            }
            catch (UnityException) { Debug.LogWarning("[CityBlockKit] Tag '" + tag + "' not defined."); }
        }

        /// <summary>Marker name == baseName, optionally with a Blender ".00x" suffix (v001 had them, v002 doesn't).
        /// Exact match, so "WallRide_Normal" never matches "WallRide_NormalTip".</summary>
        public static bool NameMatches(string name, string baseName)
        {
            if (name == baseName) return true;
            if (!name.StartsWith(baseName + ".")) return false;
            for (int i = baseName.Length + 1; i < name.Length; i++) if (!char.IsDigit(name[i])) return false;
            return name.Length > baseName.Length + 1;
        }

        public static Transform Marker(GameObject go, string baseName)
        {
            foreach (var t in go.GetComponentsInChildren<Transform>(true))
                if (t != go.transform && NameMatches(t.name, baseName)) return t;
            return null;
        }

        /// <summary>Rail_P0, Rail_P1, ... (with or without suffix), ordered by index.</summary>
        public static List<Transform> IndexedMarkers(GameObject go, string stem)
        {
            var found = new SortedDictionary<int, Transform>();
            foreach (var t in go.GetComponentsInChildren<Transform>(true))
            {
                if (t == go.transform || !t.name.StartsWith(stem)) continue;
                string rest = t.name.Substring(stem.Length);
                int dot = rest.IndexOf('.');
                string idx = dot >= 0 ? rest.Substring(0, dot) : rest;
                if (int.TryParse(idx, out int i) && NameMatches(t.name, stem + idx) && !found.ContainsKey(i)) found[i] = t;
            }
            return new List<Transform>(found.Values);
        }

        /// <summary>World bounds of enabled renderers.</summary>
        public static Bounds RenderBounds(GameObject go)
        {
            var rs = go.GetComponentsInChildren<Renderer>();
            bool any = false; var b = new Bounds(go.transform.position, Vector3.zero);
            foreach (var r in rs)
            {
                if (!r.enabled) continue;
                if (r is MeshRenderer mr && mr.name.StartsWith("UCX_")) continue;
                if (!any) { b = r.bounds; any = true; } else b.Encapsulate(r.bounds);
            }
            return b;
        }

        /// <summary>Move go so its render-bounds bottom-center sits at worldBottomCenter.</summary>
        public static void AlignBottomCenter(GameObject go, Vector3 worldBottomCenter)
        {
            var b = RenderBounds(go);
            Vector3 bc = new Vector3(b.center.x, b.min.y, b.center.z);
            go.transform.position += worldBottomCenter - bc;
        }

        /// <summary>Compare measured size with kit.json footprint/height (axis-agnostic), log mismatch.</summary>
        public static void CheckSize(GameObject go, string pieceName)
        {
            var p = Get(pieceName);
            if (p == null || string.IsNullOrEmpty(p.footprint)) return;
            var parts = p.footprint.Replace(" m", "").Split('x');
            if (parts.Length != 2) return;
            float a, c;
            if (!float.TryParse(parts[0], System.Globalization.NumberStyles.Float, System.Globalization.CultureInfo.InvariantCulture, out a) ||
                !float.TryParse(parts[1], System.Globalization.NumberStyles.Float, System.Globalization.CultureInfo.InvariantCulture, out c)) return;
            var b = RenderBounds(go);
            float big = Mathf.Max(b.size.x, b.size.z), small = Mathf.Min(b.size.x, b.size.z);
            float wantBig = Mathf.Max(a, c), wantSmall = Mathf.Min(a, c);
            if (Mathf.Abs(big - wantBig) > 0.06f || Mathf.Abs(small - wantSmall) > 0.06f || Mathf.Abs(b.size.y - p.height_m) > 0.06f)
                Note(string.Format("{0}: measured {1:0.00}x{2:0.00} h{3:0.00} vs kit.json {4} h{5}", pieceName, big, small, b.size.y, p.footprint, p.height_m));
        }

        public static void Note(string s)
        {
            if (Report.Contains(s)) return;
            Report.Add(s);
            Debug.LogWarning("[CityBlockKit] " + s);
        }
    }
}
#endif
