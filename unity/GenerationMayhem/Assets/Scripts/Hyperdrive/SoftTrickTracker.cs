// Tracks grind / air / funbox lands off SkaterTraversal-free signals (CharacterController grounded + nearest GrindRail).
using UnityEngine;
using GenerationMayhem.Traversal;
namespace GenerationMayhem.Hyperdrive
{
    public class SoftTrickTracker : MonoBehaviour
    {
        CharacterController _cc; float _air, _grind; bool _grinding; ParticleSystem _sparks;
        void Start()
        {
            _cc = GetComponent<CharacterController>();
            var g = new GameObject("GrindSparks"); g.transform.SetParent(transform, false); _sparks = g.AddComponent<ParticleSystem>();
            var m = _sparks.main; m.startColor = new Color(1f, 0.6f, 0.1f); m.startSize = 0.06f; m.startLifetime = 0.35f; m.startSpeed = 4f; m.gravityModifier = 1.5f;
            var e = _sparks.emission; e.rateOverTime = 0; _sparks.GetComponent<ParticleSystemRenderer>().material = new Material(Shader.Find("Sprites/Default"));
        }
        void Update()
        {
            bool onRail = false;
            foreach (var r in GrindRail.All) { var c = r.GetComponent<Collider>(); if (c && Vector3.Distance(c.ClosestPoint(transform.position), transform.position) < 0.6f && transform.position.y > 0.4f) { onRail = true; break; } }
            var em = _sparks.emission; em.rateOverTime = onRail ? 120 : 0;
            if (onRail) { _grind += Time.deltaTime; _grinding = true; }
            else if (_grinding) { HyperdriveHUD.Trick(_grind > 1.5f ? "LONG GRIND" : "GRIND", Mathf.RoundToInt(50 + _grind * 120)); _grinding = false; _grind = 0; }
            if (_cc && !_cc.isGrounded && !onRail) _air += Time.deltaTime;
            else if (_air > 0) { if (_air > 0.55f) { if (transform.position.y > 0.3f) HyperdriveHUD.Trick("FUNBOX LAND", 150); else HyperdriveHUD.Trick("KICKER AIR", Mathf.RoundToInt(_air * 160)); } _air = 0; }
        }
    }
}
