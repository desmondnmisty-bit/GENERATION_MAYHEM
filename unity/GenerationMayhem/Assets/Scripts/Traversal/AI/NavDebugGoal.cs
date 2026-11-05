// Copyright Dark Logic Studios. Generation Mayhem.
// Greybox test helper: sends an agent back and forth between two goals so links can be eyeballed in Play mode.

using UnityEngine;
using UnityEngine.AI;

namespace GenerationMayhem.Traversal
{
    [RequireComponent(typeof(NavMeshAgent))]
    public class NavDebugGoal : MonoBehaviour
    {
        public Transform goalA;
        public Transform goalB;
        bool _toB = true;
        NavMeshAgent _agent;

        void Start() { _agent = GetComponent<NavMeshAgent>(); Next(); }

        void Update()
        {
            if (_agent == null || !_agent.isOnNavMesh || _agent.isOnOffMeshLink) return;
            if (!_agent.pathPending && _agent.remainingDistance < 0.6f) { _toB = !_toB; Next(); }
        }

        void Next()
        {
            Transform g = _toB ? goalB : goalA;
            if (g != null && _agent.isOnNavMesh) _agent.SetDestination(g.position);
        }
    }
}
