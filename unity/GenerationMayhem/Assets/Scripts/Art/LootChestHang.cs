// Loot chests (Misty 2026-11-06): gold wood (85 tripo_part_N) and lava glyph (one mesh).
// Not a character and not a Viper. Unskinned, no animations. Display the imported hierarchy as-is.
// Same glTFast Resources.Load path as the war rigs. Imported colliders are stripped.
// The root keeps one box, then uses the existing breakable:
//   Hyperdrive cover clutter → HyperdriveSmashable (drive into it, CLUTTER SMASH points)
//   Dock crates → Breakable (skate or hit, same Intact → Cracked → Broken path)
using UnityEngine;
using UnityEngine.SceneManagement;
using GenerationMayhem.Hyperdrive;
using GenerationMayhem.Traversal;

namespace GenerationMayhem.Art
{
    public static class LootChestHang
    {
        public const string WoodPath = "Props/Loot/GM_Chest_WoodGold/GM_Chest_WoodGold_raw";
        public const string WoodName = "LootChest_WoodGold";
        public const string LavaPath = "Props/Loot/GM_Chest_LavaGlyph/GM_Chest_LavaGlyph_raw";
        public const string LavaName = "LootChest_LavaGlyph";

        // Kept so existing call sites still name the gold chest.
        public const string ResourcePath = WoodPath;
        public const string ObjectName = WoodName;

        // Web cover-pass duck crates (world.ts). Gold at (5, 42), lava at the next crate (−4.5, 56).
        public static readonly Vector3 HyperdriveFloor = new Vector3(5f, 0f, 42f);
        public const float HyperdriveYawDeg = 0.2f * Mathf.Rad2Deg;
        public static readonly Vector3 LavaHyperdriveFloor = new Vector3(-4.5f, 0f, 56f);
        public const float LavaHyperdriveYawDeg = -0.3f * Mathf.Rad2Deg;

        // Beside the south-lane breakable crates in the Dock greybox. Lava continues the stagger.
        public static readonly Vector3 DockFloor = new Vector3(-15.5f, 0f, 3.5f);
        public static readonly Vector3 LavaDockFloor = new Vector3(-14.5f, 0f, 4.5f);

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterSceneLoad)]
        static void Boot()
        {
            SceneManager.sceneLoaded += (s, _) => PlaceIfDock(s);
            PlaceIfDock(SceneManager.GetActiveScene());
        }

        static void PlaceIfDock(Scene scene)
        {
            if (scene.name != "Dockyard" && scene.name != "CityBlock_Slice") return;
            var crates = GameObject.Find("Breakables_Crates");
            PlaceAll(crates != null ? crates.transform : null, hyperdriveSmash: false);
        }

        /// <summary>Gold wooden chest and lava-glyph chest. Skips either one already in the scene.</summary>
        public static void PlaceAll(Transform parent, bool hyperdriveSmash)
        {
            var yaw = hyperdriveSmash ? HyperdriveYawDeg : 0f;
            var lavaYaw = hyperdriveSmash ? LavaHyperdriveYawDeg : 0f;
            Hang(WoodPath, WoodName, parent, hyperdriveSmash ? HyperdriveFloor : DockFloor, yaw, 1.2f, hyperdriveSmash);
            Hang(LavaPath, LavaName, parent, hyperdriveSmash ? LavaHyperdriveFloor : LavaDockFloor, lavaYaw, 1.2f, hyperdriveSmash);
        }

        /// <summary>Hang one chest on the floor. Returns null if that chest is already present or the GLB cannot load.</summary>
        public static Transform Hang(string resourcePath, string objectName, Transform parent, Vector3 floorPos, float yawDeg, float targetHeight, bool hyperdriveSmash)
        {
            if (GameObject.Find(objectName) != null) return GameObject.Find(objectName).transform;
            var prefab = Resources.Load<GameObject>(resourcePath);
            if (prefab == null)
            {
                Debug.LogError("[GM] LOOT CHEST FAILED to load Resources/" + resourcePath + " (glTFast installed?) — no chest placed");
                return null;
            }

            var root = new GameObject(objectName);
            if (parent != null) root.transform.SetParent(parent, false);
            root.transform.position = floorPos;
            root.transform.rotation = Quaternion.Euler(0f, yawDeg, 0f);

            var inst = Object.Instantiate(prefab, root.transform, false);
            StripColliders(inst);
            FitHeightBottom(root.transform, inst.transform, targetHeight);
            AddBodyBox(root);

            if (hyperdriveSmash)
            {
                root.AddComponent<HyperdriveSmashable>();
            }
            else
            {
                var breakable = root.AddComponent<Breakable>();
                breakable.kind = Breakable.Kind.Crate;
                var visual = inst;
                breakable.onBroken.AddListener(() => { if (visual != null) visual.SetActive(false); });
            }

            Debug.Log("[GM] loot chest hung: " + objectName + " at " + floorPos);
            return root.transform;
        }

        static void FitHeightBottom(Transform holder, Transform inst, float targetHeight)
        {
            var rs = inst.GetComponentsInChildren<Renderer>();
            if (rs.Length == 0 || targetHeight <= 0f) return;
            var b = rs[0].bounds;
            foreach (var r in rs) b.Encapsulate(r.bounds);
            float cur = b.size.y;
            float s = cur > 1e-4f ? targetHeight / cur : 1f;
            Vector3 p0 = inst.localPosition;
            Vector3 lc = holder.InverseTransformPoint(b.center);
            Vector3 lmin = holder.InverseTransformPoint(b.min);
            inst.localScale = inst.localScale * s;
            inst.localPosition = new Vector3(-s * (lc.x - p0.x), -s * (lmin.y - p0.y), -s * (lc.z - p0.z));
        }

        static void AddBodyBox(GameObject root)
        {
            var rs = root.GetComponentsInChildren<Renderer>();
            if (rs.Length == 0) return;
            var b = rs[0].bounds;
            foreach (var r in rs) b.Encapsulate(r.bounds);
            var box = root.AddComponent<BoxCollider>();
            box.center = root.transform.InverseTransformPoint(b.center);
            var scale = root.transform.lossyScale;
            box.size = new Vector3(
                scale.x > 1e-4f ? b.size.x / scale.x : b.size.x,
                scale.y > 1e-4f ? b.size.y / scale.y : b.size.y,
                scale.z > 1e-4f ? b.size.z / scale.z : b.size.z);
        }

        static void StripColliders(GameObject go)
        {
            var cols = go.GetComponentsInChildren<Collider>(true);
            for (var i = 0; i < cols.Length; i++) Object.DestroyImmediate(cols[i]);
        }
    }
}
