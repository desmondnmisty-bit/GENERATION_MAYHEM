// Copyright Dark Logic Studios. Generation Mayhem.
// Menu: Generation Mayhem/Phase 0/Wire Upgrade Loop (Dockyard)
// Drops GM_GameFlow into Dockyard with the RefBot model assigned. Optional: GameFlow self-spawns at runtime anyway.

using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using GenerationMayhem.Flow;

namespace GenerationMayhem.EditorTools
{
    public static class Phase0UpgradeWiring
    {
        const string Dockyard = "Assets/Scenes/Dockyard.unity";
        const string RefModel = "Assets/Art/HeroPacks/RefBot/Characters/RefBot/FBX/REFBOT_Ref.fbx";

        [MenuItem("Generation Mayhem/Phase 0/Wire Upgrade Loop (Dockyard)")]
        public static void Wire()
        {
            var scene = EditorSceneManager.OpenScene(Dockyard, OpenSceneMode.Single);
            var flow = Object.FindFirstObjectByType<GameFlow>();
            if (flow == null) flow = new GameObject("GM_GameFlow").AddComponent<GameFlow>();
            flow.refBotModel = AssetDatabase.LoadAssetAtPath<GameObject>(RefModel);
            EditorUtility.SetDirty(flow);
            EditorSceneManager.MarkSceneDirty(scene);
            EditorSceneManager.SaveScene(scene);
            Debug.Log("[Phase0] GM_GameFlow wired in Dockyard. RefBot model: " + (flow.refBotModel != null ? RefModel : "placeholder"));
        }
    }
}
