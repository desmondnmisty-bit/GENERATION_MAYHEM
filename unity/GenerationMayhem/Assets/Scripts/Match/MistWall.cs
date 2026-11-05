// Copyright Dark Logic Studios. Generation Mayhem.
// Venom-Mist wall (Phases 1 and 3): a solid toxic barrier that seals a lane. Walls have HP: heavy hits,
// Payton's Afterburn Volley and Swarm grenades burst them.

using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;
using GenerationMayhem.Combat;

namespace GenerationMayhem.Match
{
    public class MistWall : MonoBehaviour
    {
        public static readonly List<MistWall> All = new List<MistWall>();
        public static int AliveCount { get { int n = 0; foreach (var w in All) if (w != null && w.Hp != null && w.Hp.IsAlive) n++; return n; } }
        public float lifetime = 15f;
        public Health Hp { get; private set; }
        float _dieAt;

        public static MistWall Spawn(Vector3 center, Vector3 facing, float width = 8f)
        {
            var go = GameObject.CreatePrimitive(PrimitiveType.Cube);
            go.name = "VenomMist_Wall";
            go.GetComponent<Renderer>().sharedMaterial = FxUtil.Mat(new Color(FxUtil.ToxicGreen.r, FxUtil.ToxicGreen.g, FxUtil.ToxicGreen.b, 0.45f), 0.8f, true);
            facing.y = 0f;
            if (facing.sqrMagnitude < 1e-4f) facing = Vector3.forward;
            go.transform.rotation = Quaternion.LookRotation(facing.normalized); // wall spans local X, across the boss→target line
            go.transform.position = center + Vector3.up * 1.5f;
            go.transform.localScale = new Vector3(width, 3f, 0.8f);
            var obs = go.AddComponent<NavMeshObstacle>();
            obs.carving = true; obs.shape = NavMeshObstacleShape.Box; obs.size = Vector3.one;
            var h = go.AddComponent<Health>();
            h.team = Team.Vipers; h.SetMax(80f); h.displayName = "Mist Wall"; h.deactivateAfterDeath = 0f;
            var w = go.AddComponent<MistWall>();
            return w;
        }

        void Awake() { Hp = GetComponent<Health>(); }
        void OnEnable() { All.Add(this); _dieAt = Time.time + lifetime; }
        void OnDisable() => All.Remove(this);

        void Update()
        {
            if (Time.time >= _dieAt || (Hp != null && Hp.IsDead)) Destroy(gameObject);
        }
    }
}
