// Copyright Dark Logic Studios. Generation Mayhem.
// §5.2 Off-mesh link metadata (sits next to a Unity.AI.Navigation.NavMeshLink).

using UnityEngine;
using Unity.AI.Navigation;

namespace GenerationMayhem.Traversal
{
    [RequireComponent(typeof(NavMeshLink))]
    public class TraversalNavLink : MonoBehaviour
    {
        public enum LinkKind { Ramp, Gap, Rail }

        public LinkKind kind = LinkKind.Ramp;
        public string linkId = "K1";
        [Tooltip("Arc duration (s). Gap = 0.8 s per §5.2.")]
        public float duration = 0.8f;
        [Tooltip("Apex height above the higher end (m). Rail links use 0 (ride the spline).")]
        public float arcHeight = 1.6f;
        public string launchTrigger = "Air_Launch";
        public string landTrigger = "Air_Land";
        [Tooltip("Rail links: the rail to ride.")]
        public GrindRail rail;

        NavMeshLink _link;
        public NavMeshLink Link => _link != null ? _link : (_link = GetComponent<NavMeshLink>());

        public Vector3 WorldStart => transform.TransformPoint(Link.startPoint);
        public Vector3 WorldEnd => transform.TransformPoint(Link.endPoint);

        /// <summary>Role gate (redundant with area masks — guards against missing nav areas).</summary>
        public bool Allows(FighterRole role)
        {
            switch (kind)
            {
                case LinkKind.Ramp: return role == FighterRole.Fang || role == FighterRole.TailStrike || role == FighterRole.Boss || role == FighterRole.Ally;
                case LinkKind.Gap: return role == FighterRole.Fang || role == FighterRole.Ally;
                case LinkKind.Rail: return role == FighterRole.Ally;
            }
            return false;
        }

        /// <summary>Find the link whose endpoints match the agent's current OffMeshLinkData.</summary>
        public static TraversalNavLink FindFor(Vector3 start, Vector3 end, float tolerance = 1.0f)
        {
            TraversalNavLink best = null; float bestD = tolerance * 2f;
            foreach (var l in FindObjectsByType<TraversalNavLink>(FindObjectsSortMode.None))
            {
                float d = Vector3.Distance(l.WorldStart, start) + Vector3.Distance(l.WorldEnd, end);
                if (d < bestD) { bestD = d; best = l; }
            }
            return best;
        }
    }
}
