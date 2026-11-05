// Copyright Dark Logic Studios. Generation Mayhem.
// §3.1 traversal meter gain: clean tricks + grind seconds → Kinetic Synergy and Mom's Chaos, capped +15% / 10 s.

using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using GenerationMayhem.Combat;

namespace GenerationMayhem.Traversal
{
    [System.Serializable] public class FloatEvent : UnityEvent<float> { }

    /// <summary>
    /// One per match. Values come from TraversalChaosConfig. Synergy → ShatterSlingshotStub (shared meter);
    /// Mom's Chaos → MomsChaosMeter (single team meter). Each meter has its own sliding-window cap.
    /// </summary>
    public class TrickChaosGain : MonoBehaviour
    {
        [SerializeField] TraversalChaosConfig config;
        [SerializeField] ShatterSlingshotStub synergyMeter;
        [SerializeField] MomsChaosMeter momsChaos;

        public FloatEvent onSynergyGain = new FloatEvent();
        public FloatEvent onMomsChaosGain = new FloatEvent();

        readonly Queue<KeyValuePair<float, float>> _synergyLog = new Queue<KeyValuePair<float, float>>();
        readonly Queue<KeyValuePair<float, float>> _chaosLog = new Queue<KeyValuePair<float, float>>();

        void Awake()
        {
            if (config == null)
            {
                config = ScriptableObject.CreateInstance<TraversalChaosConfig>();
                Debug.LogWarning("[TrickChaosGain] No TraversalChaosConfig assigned; using defaults.");
            }
        }

        void OnEnable() { TraversalEvents.TrickLanded += OnTrick; TraversalEvents.GrindTick += OnGrind; }
        void OnDisable() { TraversalEvents.TrickLanded -= OnTrick; TraversalEvents.GrindTick -= OnGrind; }

        MomsChaosMeter Chaos => momsChaos != null ? momsChaos : MomsChaosMeter.Instance;

        void OnTrick(GameObject fighter, int trick)
        {
            var id = fighter != null ? fighter.GetComponentInParent<FighterIdentity>() : null;
            if (id != null && !id.IsFamily) return;
            float chaos = config.momsChaosPerTrick + (id != null && id.isKailee ? config.kaileeMomsChaosBonusPerTrick : 0f);
            Pay(config.synergyPerTrick, chaos);
        }

        void OnGrind(GameObject fighter, float dt)
        {
            var id = fighter != null ? fighter.GetComponentInParent<FighterIdentity>() : null;
            if (id != null && !id.IsFamily) return;
            Pay(config.synergyPerGrindSecond * dt, config.momsChaosPerGrindSecond * dt);
        }

        void Pay(float synergy, float chaos)
        {
            float syn = Grant(_synergyLog, synergy);
            if (syn > 0f)
            {
                if (synergyMeter != null) synergyMeter.ContributeSynergy(syn * synergyMeter.SynergyMax);
                onSynergyGain.Invoke(syn);
            }
            float ch = Grant(_chaosLog, chaos);
            if (ch > 0f)
            {
                if (Chaos != null) Chaos.Add(ch);
                onMomsChaosGain.Invoke(ch);
            }
        }

        float Grant(Queue<KeyValuePair<float, float>> log, float want)
        {
            if (want <= 0f) return 0f;
            float now = Time.time;
            while (log.Count > 0 && now - log.Peek().Key > config.capWindowSeconds) log.Dequeue();
            float used = 0f;
            foreach (var e in log) used += e.Value;
            float grant = Mathf.Clamp(want, 0f, Mathf.Max(0f, config.capPerWindow - used));
            if (grant > 0f) log.Enqueue(new KeyValuePair<float, float>(now, grant));
            return grant;
        }
    }
}
