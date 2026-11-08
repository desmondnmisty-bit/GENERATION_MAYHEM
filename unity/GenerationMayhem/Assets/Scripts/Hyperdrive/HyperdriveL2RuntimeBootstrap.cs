// Lives in Assets/Scenes/Hyperdrive_L2.unity. Builds the Soft L2 lane at runtime so the scene works without running the Editor menu.
// If the scene was baked via "Generation Mayhem/Build Hyperdrive L2 (Soft)", the existing root is detected and nothing is rebuilt.
using UnityEngine;
using GenerationMayhem.Art;
using GenerationMayhem.Traversal;
namespace GenerationMayhem.Hyperdrive
{
    public class HyperdriveL2RuntimeBootstrap : MonoBehaviour
    {
        static void EnsureFollowCamera()
        {
            var cam = Camera.main;
            var pawn = Object.FindFirstObjectByType<GenerationMayhem.Player.SkatePawnController>();
            if (!cam || !pawn) return;
            var director = Object.FindFirstObjectByType<CinemachineTraversalDirector>();
            if (!director)
            {
                var rig = cam.GetComponent<TraversalCameraRig>() ?? cam.gameObject.AddComponent<TraversalCameraRig>();
                rig.target = pawn.GetComponent<SkaterTraversal>();
                rig.enabled = true;
                rig.SnapToTarget();
            }
            cam.fieldOfView = 50f;
            cam.clearFlags = CameraClearFlags.Skybox;
        }
        void OnEnable()
        {
            if (GameObject.Find("Hyperdrive_L2") != null)
            {
                LootChestHang.PlaceAll(GameObject.Find("Hyperdrive_L2").transform, true);
                EnsureFollowCamera();
                return; // baked layout still needs its gameplay follow camera
            }
            RenderSettings.ambientLight = new Color(0.25f, 0.2f, 0.35f);
            HyperdriveL2Layout.Build();
            EnsureFollowCamera();
            Debug.Log("[Hyperdrive L2] Soft lane built at runtime.");
        }
    }
}
