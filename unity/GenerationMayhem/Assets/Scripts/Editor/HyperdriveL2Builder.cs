// Menu: Generation Mayhem/Build Hyperdrive L2 (Soft) → Assets/Scenes/Hyperdrive_L2.unity
// Mirrors web Soft L2 lane (same coords, +Z north): Approach 0–35 · Ring Hall 35–90 · Corridor 90–130 · Cockpit Core 130–180.
// Kickers / funboxes / orange grind rails at web positions; Vixen skate pawn; Brianna/Payton/Kailee ally kits; Pink Vipers;
// Geometry/logic lives in runtime HyperdriveL2Layout (shared with HyperdriveL2RuntimeBootstrap).
// Mom's Frenzy + RAGE; trick tracker + grind sparks; Soft VO (Resources/VO). Hyperdrive = Level 2 of the same game.
#if UNITY_EDITOR
using UnityEditor; using UnityEditor.SceneManagement; using UnityEngine; using UnityEngine.SceneManagement;
using GenerationMayhem.Player; using GenerationMayhem.Traversal; using GenerationMayhem.Hyperdrive; using GenerationMayhem.Art;
namespace GenerationMayhem.EditorTools
{
    public static class HyperdriveL2Builder
    {
        const string ScenePath = "Assets/Scenes/Hyperdrive_L2.unity";
        static void EnsureTag(string tag) { var a = AssetDatabase.LoadAllAssetsAtPath("ProjectSettings/TagManager.asset"); if (a.Length == 0) return; var so = new SerializedObject(a[0]); var t = so.FindProperty("tags"); for (int i = 0; i < t.arraySize; i++) if (t.GetArrayElementAtIndex(i).stringValue == tag) return; t.InsertArrayElementAtIndex(t.arraySize); t.GetArrayElementAtIndex(t.arraySize - 1).stringValue = tag; so.ApplyModifiedPropertiesWithoutUndo(); }

        [MenuItem("Generation Mayhem/Build Hyperdrive L2 (Soft)")]
        public static void Build()
        {
            foreach (var t in new[] { "Enemy", "SkatePawn", "Rail" }) EnsureTag(t);
            var scene = EditorSceneManager.NewScene(NewSceneSetup.DefaultGameObjects, NewSceneMode.Single);
            HyperdriveL2Layout.Build();
            EditorSceneManager.SaveScene(scene, ScenePath);
            var list = new System.Collections.Generic.List<EditorBuildSettingsScene>(EditorBuildSettings.scenes); if (!list.Exists(s => s.path == ScenePath)) { int i = list.FindIndex(x => x.path.EndsWith("/Dockyard.unity")); list.Insert(i >= 0 ? i + 1 : list.Count, new EditorBuildSettingsScene(ScenePath, true)); EditorBuildSettings.scenes = list.ToArray(); }
            Debug.Log("Hyperdrive L2 Soft built → " + ScenePath);
        }
    }
}
#endif
