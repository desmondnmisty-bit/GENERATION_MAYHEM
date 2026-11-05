// Lives in Assets/Scenes/Hyperdrive_L2.unity. Builds the Soft L2 lane at runtime so the scene works without running the Editor menu.
// If the scene was baked via "Generation Mayhem/Build Hyperdrive L2 (Soft)", the existing root is detected and nothing is rebuilt.
using UnityEngine;
namespace GenerationMayhem.Hyperdrive
{
    public class HyperdriveL2RuntimeBootstrap : MonoBehaviour
    {
        void OnEnable()
        {
            if (GameObject.Find("Hyperdrive_L2") != null) return; // baked scene already present
            RenderSettings.ambientLight = new Color(0.25f, 0.2f, 0.35f);
            HyperdriveL2Layout.Build();
            Debug.Log("[Hyperdrive L2] Soft lane built at runtime.");
        }
    }
}
