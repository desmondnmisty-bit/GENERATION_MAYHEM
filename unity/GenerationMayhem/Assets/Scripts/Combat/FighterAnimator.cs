// Copyright Dark Logic Studios. Generation Mayhem.
// Optional animation layer: drives an Animator built by the greybox builder from the hero/boss packs.
// Every call is a no-op when there is no Animator or the state doesn't exist (capsule greybox).

using UnityEngine;

namespace GenerationMayhem.Combat
{
    public class FighterAnimator : MonoBehaviour
    {
        public Animator animator;
        [Tooltip("State names = clip file names without AS_Chaos_ / SLB_ and the hero suffix.")]
        public string idleState = "Idle_Skate";
        public string moveState = "Locomotion_Fwd";
        public string hitLight = "HitReact_Light";
        public string hitHeavy = "HitReact_Heavy";
        public string downState = "Death";
        public string recoverState = "Knockdown_Recover";
        public float moveThreshold = 1.2f;

        float _actionUntil;
        string _loco;
        bool _held;
        Vector3 _lastPos;
        float _speed;
        Health _hp;

        void Awake()
        {
            if (animator == null) animator = GetComponentInChildren<Animator>();
            _hp = GetComponent<Health>();
            _lastPos = transform.position;
        }

        void OnEnable()
        {
            if (_hp == null) return;
            _hp.onDamaged += OnDamaged; _hp.onDown += OnDown; _hp.onRevive += OnRevive; _hp.onDeath += OnDown;
        }

        void OnDisable()
        {
            if (_hp == null) return;
            _hp.onDamaged -= OnDamaged; _hp.onDown -= OnDown; _hp.onRevive -= OnRevive; _hp.onDeath -= OnDown;
        }

        public bool Has(string state) =>
            animator != null && animator.runtimeAnimatorController != null && !string.IsNullOrEmpty(state) &&
            animator.HasState(0, Animator.StringToHash(state));

        /// <summary>Play a one-shot; locomotion resumes after lockSeconds.</summary>
        public void Play(string state, float lockSeconds = 0.6f)
        {
            if (_held || !Has(state)) return;
            animator.CrossFadeInFixedTime(state, 0.08f);
            _loco = null;
            _actionUntil = Time.time + lockSeconds;
        }

        /// <summary>Play and hold (downed, KO, kneel) until Unhold().</summary>
        public void Hold(string state)
        {
            if (!Has(state)) return;
            animator.CrossFadeInFixedTime(state, 0.1f);
            _held = true; _loco = null;
        }

        public void Unhold() { _held = false; _actionUntil = 0f; }

        void OnDamaged(DamageInfo d, float applied)
        {
            if (applied <= 0f) return;
            Play(d.knockForce >= 6f || d.stun >= 0.5f ? hitHeavy : hitLight, 0.35f);
        }

        void OnDown() => Hold(downState);
        void OnRevive() { Unhold(); Play(recoverState, 0.8f); }

        void Update()
        {
            float dt = Mathf.Max(Time.deltaTime, 1e-4f);
            Vector3 p = transform.position;
            Vector3 d = p - _lastPos; d.y = 0f;
            _speed = Mathf.Lerp(_speed, d.magnitude / dt, 1f - Mathf.Exp(-10f * dt));
            _lastPos = p;
            if (animator == null || _held || Time.time < _actionUntil) return;
            string want = _speed > moveThreshold ? moveState : idleState;
            if (want != _loco && Has(want)) { animator.CrossFadeInFixedTime(want, 0.2f); _loco = want; }
        }
    }
}
