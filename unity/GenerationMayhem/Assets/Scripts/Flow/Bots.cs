// Copyright Dark Logic Studios. Generation Mayhem.
// Ref Bot (callouts: match start / KO / rounds) and Med Bot (between-round heal + in-fight patch kits).
// Both use placeholder meshes unless a model is assigned on GameFlow.

using UnityEngine;
using GenerationMayhem.Combat;
using GenerationMayhem.Match;

namespace GenerationMayhem.Flow
{
    static class BotMesh
    {
        public static Transform Build(string name, Vector3 at, Vector3 lookAt, GameObject model, Color body, Color accent)
        {
            var go = new GameObject(name);
            go.transform.position = at;
            var d = lookAt - at; d.y = 0f; if (d.sqrMagnitude > 0.01f) go.transform.rotation = Quaternion.LookRotation(d.normalized);
            if (model != null)
            {
                var m = Object.Instantiate(model, go.transform);
                m.transform.localPosition = Vector3.zero; m.transform.localRotation = Quaternion.identity;
                foreach (var c in m.GetComponentsInChildren<Collider>()) Object.Destroy(c);
                return go.transform;
            }
            var b = GameObject.CreatePrimitive(PrimitiveType.Capsule); Object.Destroy(b.GetComponent<Collider>());
            b.transform.SetParent(go.transform, false); b.transform.localPosition = Vector3.up * 1f; b.transform.localScale = new Vector3(0.8f, 1f, 0.8f);
            b.GetComponent<Renderer>().sharedMaterial = FxUtil.Mat(body);
            var h = GameObject.CreatePrimitive(PrimitiveType.Cube); Object.Destroy(h.GetComponent<Collider>());
            h.transform.SetParent(go.transform, false); h.transform.localPosition = new Vector3(0, 1.55f, 0.38f); h.transform.localScale = new Vector3(0.6f, 0.18f, 0.1f);
            h.GetComponent<Renderer>().sharedMaterial = FxUtil.Mat(accent, 2f);
            return go.transform;
        }
    }

    public class RefBot : MonoBehaviour
    {
        float _pulseUntil; Vector3 _base;
        public static RefBot Spawn(Vector3 at, Vector3 faceTo, GameObject model)
        {
            var t = BotMesh.Build("RefBot", at, faceTo, model, new Color(0.15f, 0.15f, 0.15f), Color.white);
            var r = t.gameObject.AddComponent<RefBot>(); r._base = t.position; return r;
        }
        void OnEnable() { CombatEvents.Died += OnDowned; }
        void OnDisable() { CombatEvents.Died -= OnDowned; }
        void Start() { Callout(); }
        void OnDowned(Health h) { if (h != null && h.team == Team.Vipers && Random.value < 0.35f) { MatchDirector.Say("Ref Bot", Pick("Down goes the Viper!", "That's a KO!", "Clean hit!")); Callout(); } }
        static string Pick(params string[] s) => s[Random.Range(0, s.Length)];
        public void Callout() { _pulseUntil = Time.unscaledTime + 1.2f; var a = GetComponentInChildren<Animator>(); if (a != null) a.Play(0, 0, 0f); }
        void Update()
        {
            float k = Time.unscaledTime < _pulseUntil ? Mathf.Abs(Mathf.Sin(Time.unscaledTime * 12f)) * 0.35f : 0f;
            transform.position = _base + Vector3.up * k;
        }
    }

    public class MedBot : MonoBehaviour
    {
        [Range(0f, 1f)] public float roundHealFraction = 1f;
        public static MedBot Spawn(Vector3 at, Vector3 faceTo, GameObject model)
        {
            var t = BotMesh.Build("MedBot_PLACEHOLDER", at, faceTo, model, Color.white, new Color(0.1f, 1f, 0.3f));
            return t.gameObject.AddComponent<MedBot>();
        }
        /// <summary>Between rounds: revive anyone down, top everyone up.</summary>
        public void RoundHeal(MatchDirector md)
        {
            if (md == null) return;
            foreach (var h in md.Family)
            {
                if (h == null) continue;
                if (h.IsDown) h.Revive(roundHealFraction); else h.Heal(h.maxHP * roundHealFraction);
            }
            MatchDirector.Say("Med Bot", "Patched. Go.");
        }
    }

    public class MedPickup : MonoBehaviour
    {
        public float heal = 35f; float _dieAt;
        public static MedPickup Spawn(Vector3 at, float heal)
        {
            var go = GameObject.CreatePrimitive(PrimitiveType.Cube); Object.Destroy(go.GetComponent<Collider>());
            go.name = "MedBot_PatchKit"; go.transform.position = at + Vector3.up * 0.6f; go.transform.localScale = Vector3.one * 0.6f;
            go.GetComponent<Renderer>().sharedMaterial = FxUtil.Mat(new Color(0.1f, 1f, 0.3f), 2f);
            var p = go.AddComponent<MedPickup>(); p.heal = heal; p._dieAt = Time.time + 20f; return p;
        }
        void Update()
        {
            transform.Rotate(0f, 120f * Time.deltaTime, 0f);
            if (Time.time > _dieAt) { Destroy(gameObject); return; }
            foreach (var h in Health.All)
            {
                if (h == null || h.team != Team.Family || !h.IsAlive) continue;
                if ((h.transform.position - transform.position).sqrMagnitude > 2.2f * 2.2f) continue;
                h.Heal(heal);
                MatchDirector.Say(h.displayName, "Better.");
                Destroy(gameObject); return;
            }
        }
    }
}
