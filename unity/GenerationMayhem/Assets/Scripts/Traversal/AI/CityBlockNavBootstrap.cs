// Copyright Dark Logic Studios. Generation Mayhem.

using UnityEngine;
using UnityEngine.AI;

namespace GenerationMayhem.Traversal
{
    /// <summary>Scene-level: applies nav area costs and assigns per-role area masks to every agent.</summary>
    public class CityBlockNavBootstrap : MonoBehaviour
    {
        void Start()
        {
            CityBlockNavAreas.ApplyCosts();
            foreach (var agent in FindObjectsByType<NavMeshAgent>(FindObjectsSortMode.None))
                ConfigureAgent(agent);
        }

        public static void ConfigureAgent(NavMeshAgent agent)
        {
            var id = agent.GetComponent<FighterIdentity>();
            if (id == null) return;
            agent.areaMask = CityBlockNavAreas.MaskFor(id.role);
            agent.autoTraverseOffMeshLink = false; // AgentLinkTraverser plays the air/rail motion
            if (agent.GetComponent<AgentLinkTraverser>() == null) agent.gameObject.AddComponent<AgentLinkTraverser>();
        }
    }
}
