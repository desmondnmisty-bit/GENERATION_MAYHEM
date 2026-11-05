// Copyright Dark Logic Studios. Generation Mayhem.
// §5.2 Plays off-mesh link traversal: ramp (Air_Launch → arc → Air_Land), gap (0.8 s arc), rail (ride spline).

using System.Collections;
using UnityEngine;
using UnityEngine.AI;

namespace GenerationMayhem.Traversal
{
    [RequireComponent(typeof(NavMeshAgent))]
    public class AgentLinkTraverser : MonoBehaviour
    {
        NavMeshAgent _agent;
        Animator _anim;
        FighterIdentity _id;
        bool _busy;

        void Awake()
        {
            _agent = GetComponent<NavMeshAgent>();
            _anim = GetComponentInChildren<Animator>();
            _id = GetComponent<FighterIdentity>();
            _agent.autoTraverseOffMeshLink = false;
        }

        void Update()
        {
            if (_busy || !_agent.enabled || !_agent.isOnNavMesh || !_agent.isOnOffMeshLink) return;
            StartCoroutine(Traverse());
        }

        IEnumerator Traverse()
        {
            _busy = true;
            OffMeshLinkData data = _agent.currentOffMeshLinkData;
            Vector3 start = transform.position;
            Vector3 end = data.endPos + Vector3.up * _agent.baseOffset;
            var link = TraversalNavLink.FindFor(data.startPos, data.endPos);

            if (link != null && _id != null && !link.Allows(_id.role))
            {
                // Area masks should have prevented this; bail out of the path rather than cheat across.
                Debug.LogWarning("[CityBlockNav] " + name + " (" + _id.role + ") not allowed on link " + link.linkId + ". Check nav areas.");
                _agent.Warp(start);
                _agent.ResetPath();
                _busy = false;
                yield break;
            }

            Vector3 flat = end - start; flat.y = 0f;
            if (flat.sqrMagnitude > 1e-4f) transform.rotation = Quaternion.LookRotation(flat);

            if (link != null && link.kind == TraversalNavLink.LinkKind.Rail && link.rail != null)
            {
                GrindRail rail = link.rail;
                float a = rail.ClosestDistance(start, out _), b = rail.ClosestDistance(end, out _);
                float speed = Mathf.Max(_agent.speed, rail.minGrindSpeed);
                float t = 0f, dur = Mathf.Abs(b - a) / speed;
                while (t < dur)
                {
                    t += Time.deltaTime;
                    transform.position = rail.PointAt(Mathf.Lerp(a, b, t / dur)) + Vector3.up * rail.rideHeight;
                    yield return null;
                }
            }
            else
            {
                float dur = link != null ? link.duration : 0.6f;
                float apex = link != null ? link.arcHeight : 1f;
                if (_anim != null && link != null && !string.IsNullOrEmpty(link.launchTrigger)) _anim.SetTrigger(link.launchTrigger);
                float t = 0f;
                float top = Mathf.Max(start.y, end.y) + apex;
                while (t < dur)
                {
                    t += Time.deltaTime;
                    float u = Mathf.Clamp01(t / dur);
                    Vector3 p = Vector3.Lerp(start, end, u);
                    // Quadratic arc through start → top → end.
                    float y0 = start.y, y2 = end.y, y1 = 2f * top - 0.5f * (y0 + y2);
                    p.y = (1 - u) * (1 - u) * y0 + 2 * (1 - u) * u * y1 + u * u * y2;
                    transform.position = p;
                    yield return null;
                }
                if (_anim != null && link != null && !string.IsNullOrEmpty(link.landTrigger)) _anim.SetTrigger(link.landTrigger);
            }

            transform.position = end;
            if (_agent.enabled && _agent.isOnOffMeshLink) _agent.CompleteOffMeshLink();
            _busy = false;
        }
    }
}
