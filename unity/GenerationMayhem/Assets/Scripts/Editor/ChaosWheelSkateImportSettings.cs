// Copyright Dark Logic Studios. Generation Mayhem.
#if UNITY_EDITOR
using UnityEditor;
using UnityEngine;

namespace GenerationMayhem.EditorTools
{
    /// <summary>
    /// Menu helpers for ChaosWheelSkate Humanoid FBX import (meters, Y-up).
    /// Bone names: root, pelvis, spine_01..03, neck_01, head, limbs, skate_l/r, wheel_l/r_01..03.
    /// </summary>
    public static class ChaosWheelSkateImportSettings
    {
        const string MenuRoot = "Generation Mayhem/Import/";

        [MenuItem(MenuRoot + "Apply Humanoid Preset To Selection")]
        static void ApplyHumanoidToSelection()
        {
            foreach (Object obj in Selection.objects)
            {
                string path = AssetDatabase.GetAssetPath(obj);
                if (string.IsNullOrEmpty(path) || !path.EndsWith(".fbx", System.StringComparison.OrdinalIgnoreCase))
                    continue;

                var importer = AssetImporter.GetAtPath(path) as ModelImporter;
                if (importer == null)
                    continue;

                importer.animationType = ModelImporterAnimationType.Human;
                importer.avatarSetup = ModelImporterAvatarSetup.CreateFromThisModel;
                importer.globalScale = 1f; // meters
                importer.useFileScale = true;
                importer.importBlendShapes = true;
                importer.importVisibility = false;
                importer.importCameras = false;
                importer.importLights = false;
                importer.meshCompression = ModelImporterMeshCompression.Off;
                importer.isReadable = false;
                importer.SaveAndReimport();
                Debug.Log($"[GM] Humanoid import applied: {path}");
            }
        }

        [MenuItem(MenuRoot + "Log ChaosWheelSkate Bone Checklist")]
        static void LogBoneChecklist()
        {
            Debug.Log(
                "ChaosWheelSkate v0.1 bones:\n" +
                "root, pelvis, spine_01, spine_02, spine_03, neck_01, head\n" +
                "clavicle_l/r, upperarm_l/r, lowerarm_l/r, hand_l/r\n" +
                "thigh_l/r, calf_l/r, foot_l/r, ball_l/r\n" +
                "skate_l → foot_l, skate_r → foot_r (optional skate_brake_l/r)\n" +
                "wheel_l_01..03 → skate_l, wheel_r_01..03 → skate_r\n" +
                "Sockets: SOCKET_WheelContact_L/R_01..03, SOCKET_Check_*, SOCKET_Slingshot_*, SOCKET_VFX_Feet_*, SOCKET_Camera_Follow, SOCKET_Head_UI");
        }
    }
}
#endif
