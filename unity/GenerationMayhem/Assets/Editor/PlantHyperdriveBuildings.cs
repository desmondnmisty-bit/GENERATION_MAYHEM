// One-shot: plant the two Hyperdrive Tripo buildings on the deck instead of floating in the void.
// Space station + sci-fi tower were hung at x=-28 / x=30 (off the floating runway) with center pivots
// and no bottom offset, so they hung in empty air. Do not touch ramp / split-deck / portal / war-rigs.
using UnityEngine;
using UnityEditor;
using UnityEditor.SceneManagement;

public static class PlantHyperdriveBuildings
{
    const float FloorY = 0f;
    const string ScenePath = "Assets/Scenes/Hyperdrive_L2.unity";

    [MenuItem("Generation Mayhem/Plant Hyperdrive Buildings On Deck")]
    public static void Plant()
    {
        if (EditorApplication.isPlayingOrWillChangePlaymode) { Debug.LogError("[GM] Stop Play before planting buildings."); return; }
        var scene = EditorSceneManager.OpenScene(ScenePath, OpenSceneMode.Single);
        PlantLoaded();
        EditorSceneManager.MarkSceneDirty(scene);
        EditorSceneManager.SaveScene(scene);
        Debug.Log("[GM] Planted Hyperdrive buildings on deck and saved Hyperdrive_L2.");
    }

    public static void PlantLoaded()
    {
        var root = GameObject.Find("HyperdriveBuildings");
        if (root == null)
        {
            Debug.LogError("[GM] HyperdriveBuildings missing");
            return;
        }

        PlantOne(root.transform, "GM_SpaceStation_raw_Prop", 22f, new Vector3(-24f, 0f, 62f), -13f);
        PlantOne(root.transform, "GM_SciFi_Tower_raw_Prop", 20f, new Vector3(22f, 0f, 155f), 11f);

    }

    static Bounds Combined(Transform t)
    {
        var rs = t.GetComponentsInChildren<Renderer>(true);
        if (rs.Length == 0) return new Bounds(t.position, Vector3.zero);
        var b = rs[0].bounds;
        for (int i = 1; i < rs.Length; i++) b.Encapsulate(rs[i].bounds);
        return b;
    }

    static void PlantOne(Transform buildings, string holderName, float targetHeight, Vector3 centerXZ, float connectToX)
    {
        var holder = buildings.Find(holderName);
        if (holder == null)
        {
            Debug.LogError("[GM] missing " + holderName);
            return;
        }

        var before = Combined(holder);
        Debug.Log($"[GM] BEFORE {holderName} pos={holder.position} holderScale={holder.localScale.ToString("F5")} childScale={(holder.childCount>0?holder.GetChild(0).localScale:Vector3.zero).ToString("F5")} bounds.min={before.min.ToString("F5")} size={before.size.ToString("F5")}");

        if (holder.childCount > 0 && before.size.y > 1e-4f)
        {
            var inst = holder.GetChild(0);
            inst.localScale = inst.localScale * (targetHeight / before.size.y);
        }

        var mid = Combined(holder);
        holder.position = new Vector3(centerXZ.x, holder.position.y + (FloorY - mid.min.y), centerXZ.z);

        var after = Combined(holder);
        // If the first plant used stale bounds, snap again now that renderers match the new scale/pos.
        holder.position += new Vector3(0f, FloorY - after.min.y, 0f);
        after = Combined(holder);

        EnsurePad(buildings, holderName + "_Pad", after, connectToX);

        var finalB = Combined(holder);
        Debug.Log($"[GM] AFTER {holderName} pos={holder.position} holderScale={holder.localScale.ToString("F5")} childScale={(holder.childCount>0?holder.GetChild(0).localScale:Vector3.zero).ToString("F5")} bounds.min={finalB.min.ToString("F5")} size={finalB.size.ToString("F5")} plantedY={finalB.min.y}");
    }

    static void EnsurePad(Transform buildings, string padName, Bounds building, float connectToX)
    {
        var existing = buildings.Find(padName);
        if (existing != null) Object.DestroyImmediate(existing.gameObject);

        float minX = Mathf.Min(building.min.x, connectToX) - 1f;
        float maxX = Mathf.Max(building.max.x, connectToX) + 1f;
        float minZ = building.min.z - 1f;
        float maxZ = building.max.z + 1f;
        var pad = GameObject.CreatePrimitive(PrimitiveType.Cube);
        pad.name = padName;
        pad.transform.SetParent(buildings, true);
        pad.transform.position = new Vector3((minX + maxX) * 0.5f, -0.5f, (minZ + maxZ) * 0.5f);
        pad.transform.localScale = new Vector3(maxX - minX, 1f, maxZ - minZ);
        var r = pad.GetComponent<Renderer>();
        var shader = Shader.Find("Universal Render Pipeline/Lit") ?? Shader.Find("Standard");
        r.sharedMaterial = new Material(shader) { name = padName + "_M", color = new Color(0.12f, 0.13f, 0.16f) };
        Debug.Log($"[GM] pad {padName} x={minX:0.0}..{maxX:0.0} z={minZ:0.0}..{maxZ:0.0}");
    }
}
