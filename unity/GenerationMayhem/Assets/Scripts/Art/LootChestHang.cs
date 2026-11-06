// Gold wooden loot chest (Misty 2026-11-06). One GLB: ROOT plus 85 tripo_part_N meshes.
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
        public const string ResourcePath = "Props/Loot/GM_Chest_WoodGold/GM_Chest_WoodGold_raw";
        public const string ObjectName = "LootChest_WoodGold";

        // Web cover-pass duck crate in Ring Hall (world.ts smashPiece crate at x 5, z 42, yaw 0.2).
        public static readonly Vector3 HyperdriveFloor = new Vector3(5f, 0f, 42f);
        public const float HyperdriveYawDeg = 0.2f * Mathf.Rad2Deg;

        // Beside the south-lane breakable crates in the Dock greybox.
        public static readonly Vector3 DockFloor = new Vector3(-15.5f, 0f, 3.5f);

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterSceneLoad)]
        static void Boot()
        {
            SceneManager.sceneLoaded += (s, _) => PlaceIfDock(s);
            PlaceIfDock(SceneManager.GetActiveScene());
        }

        static void PlaceIfDock(Scene scene)
        {
            if (scene.name != "Dockyard" && scene.name != "CityBlock_Slice") return;
            if (GameObject.Find(ObjectName) != null) return;
            var crates = GameObject.Find("Breakables_Crates");
            Hang(crates != null ? crates.transform : null, DockFloor, 0f, 1.2f, hyperdriveSmash: false);
        }

        /// <summary>Hang the chest on the floor. Returns null if the GLB cannot load.</summary>
        public static Transform Hang(Transform parent, Vector3 floorPos, float yawDeg, float targetHeight, bool hyperdriveSmash)
        {
            var prefab = Resources.Load<GameObject>(ResourcePath);
            if (prefab == null)
            {
                Debug.LogError("[GM] LOOT CHEST FAILED to load Resources/" + ResourcePath + " (glTFast installed?) — no chest placed");
                return null;
            }

            var root = new GameObject(ObjectName);
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

            Debug.Log("[GM] loot chest hung: " + ObjectName + " at " + floorPos);
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
