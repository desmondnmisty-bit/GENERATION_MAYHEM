// Copyright Dark Logic Studios. Generation Mayhem.
// §4 Breakables (crates, barrels): Intact → Cracked (1 hit) → Broken (debris 6 s) → Gone.

using UnityEngine;
using UnityEngine.Events;

namespace GenerationMayhem.Traversal
{
    public class Breakable : MonoBehaviour
    {
        public enum BreakState { Intact, Cracked, Broken, Gone }
        public enum Kind { Crate, Barrel }

        public Kind kind = Kind.Crate;
        [Tooltip("+10% damage to a fighter checked into this (§4).")]
        public float checkedIntoDamageMultiplier = 1.10f;
        public float debrisSeconds = 6f;
        [Tooltip("Skating into it at or above this speed smashes straight through (shortcut).")]
        public float smashSpeed = 9f;
        [Tooltip("Rigidbody impact speed that counts as a fighter being checked into it.")]
        public float checkImpactSpeed = 5f;
        [SerializeField] Renderer intactRenderer;
        [Tooltip("Kit swap (CityBlockKit CB_*_Intact). If set, toggled off on crack/break instead of tinting intactRenderer.")]
        [SerializeField] GameObject intactRoot;
        [Tooltip("Kit swap (CB_Crate_Breakable_Cracked). Optional — barrels have no cracked state.")]
        [SerializeField] GameObject crackedRoot;
        [SerializeField] GameObject debrisRoot;
        [SerializeField] Color crackedTint = new Color(0.65f, 0.55f, 0.45f);

        public UnityEvent onCracked = new UnityEvent();
        public UnityEvent onBroken = new UnityEvent();
        [Tooltip("Hook the brief debris-cloud blind here (VFX / screen effect).")]
        public UnityEvent onDebrisCloud = new UnityEvent();

        public BreakState State { get; private set; } = BreakState.Intact;
        Collider[] _solid;
        float _goneAt;
        MaterialPropertyBlock _mpb;

        // Serialized visual root survives scene baking; runtime UnityEvent lambdas do not.
        public void ConfigureVisual(GameObject visual)
        {
            if (intactRoot != null && intactRoot != visual) intactRoot.SetActive(false);
            if (crackedRoot != null) crackedRoot.SetActive(false);
            if (debrisRoot != null) debrisRoot.SetActive(false);
            crackedRoot = null; debrisRoot = null;
            intactRoot = visual;
            intactRenderer = null;
        }

        void Awake()
        {
            if (intactRenderer == null && intactRoot == null) intactRenderer = GetComponentInChildren<Renderer>();
            _solid = GetComponents<Collider>();
            if (intactRoot != null) intactRoot.SetActive(true);
            if (crackedRoot != null) crackedRoot.SetActive(false);
            if (debrisRoot != null) debrisRoot.SetActive(false);
        }

        /// <summary>Generic hit (attack, projectile). Intact→Cracked, Cracked→Broken.</summary>
        public void Hit()
        {
            if (State == BreakState.Intact) SetCracked();
            else if (State == BreakState.Cracked) Break();
        }

        /// <summary>
        /// A fighter was checked/knocked into this. Breaks it and returns the damage multiplier (1.10) the
        /// combat system should apply to that check. Also raises TraversalEvents.CheckedIntoBreakable.
        /// </summary>
        public float ReceiveCheckedFighter(GameObject fighter)
        {
            if (State == BreakState.Broken || State == BreakState.Gone) return 1f;
            Break();
            onDebrisCloud.Invoke();
            TraversalEvents.RaiseCheckedIntoBreakable(fighter, checkedIntoDamageMultiplier);
            return checkedIntoDamageMultiplier;
        }

        /// <summary>Skater contact (called from SkaterTraversal.OnControllerColliderHit).</summary>
        public void OnSkaterContact(GameObject skater, float speed)
        {
            if (ShoveState.IsShovedNow(skater.transform, out _)) { ReceiveCheckedFighter(skater); return; }
            if (speed >= smashSpeed) Break();
        }

        void OnCollisionEnter(Collision c)
        {
            // Rigidbody-driven fighters (ragdolls, knocked-back grunts).
            var id = c.collider.GetComponentInParent<FighterIdentity>();
            if (id == null || c.relativeVelocity.magnitude < checkImpactSpeed) return;
            if (ShoveState.IsShovedNow(id, out _)) ReceiveCheckedFighter(id.gameObject);
            else Hit();
        }

        void SetCracked()
        {
            State = BreakState.Cracked;
            if (intactRoot != null && crackedRoot != null)
            {
                intactRoot.SetActive(false);
                crackedRoot.SetActive(true);
            }
            else if (intactRenderer != null)
            {
                if (_mpb == null) _mpb = new MaterialPropertyBlock();
                intactRenderer.GetPropertyBlock(_mpb);
                _mpb.SetColor("_BaseColor", crackedTint); // URP Lit
                intactRenderer.SetPropertyBlock(_mpb);
            }
            onCracked.Invoke();
        }

        void Break()
        {
            if (State == BreakState.Broken || State == BreakState.Gone) return;
            GenerationMayhem.Audio.GMGameplayAudio.Play("bang", .8f);
            State = BreakState.Broken;
            foreach (var c in _solid) if (c != null) c.enabled = false;
            if (intactRenderer != null) intactRenderer.enabled = false;
            if (intactRoot != null) intactRoot.SetActive(false);
            if (crackedRoot != null) crackedRoot.SetActive(false);
            if (debrisRoot != null) debrisRoot.SetActive(true); // debris has no colliders / no nav obstacle (§5.1)
            _goneAt = Time.time + debrisSeconds;
            onBroken.Invoke();
            // ALPHA: oil barrels spill a new slick here. Not at slice.
        }

        void Update()
        {
            if (State == BreakState.Broken && Time.time >= _goneAt)
            {
                State = BreakState.Gone;
                gameObject.SetActive(false);
            }
        }
    }
}
