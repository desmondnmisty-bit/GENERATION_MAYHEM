// Copyright Dark Logic Studios. Generation Mayhem.
// Shatter-Slingshot signature combo stub — Vixen plants / Kailee launches.

using UnityEngine;
using UnityEngine.Events;

namespace GenerationMayhem.Combat
{
    /// <summary>
    /// Stub for signature combo: Vixen plants → Kailee accelerates through shatter window.
    /// Fires on a FULL team Mom's Chaos meter only (Oct 14, 2026). Kinetic Synergy is tracked here but is a separate meter (team finishers). Wire real VFX/anim later.
    /// </summary>
    public class ShatterSlingshotStub : MonoBehaviour
    {
        [Header("Synergy")]
        [SerializeField] float synergyMax = 100f;
        [SerializeField] float synergyOnHit = 5f;
        [SerializeField] float currentSynergy;

        [Header("Plant / Launch")]
        [SerializeField] float plantDuration = 0.45f;
        [SerializeField] float launchSpeed = 22f;
        [SerializeField] float launchUpSpeed = 3.5f;
        [SerializeField] float shatterWindowSeconds = 0.8f;

        [Header("Refs")]
        [Tooltip("Vixen / planter pawn (optional — defaults to this transform).")]
        [SerializeField] Transform planter;
        [Tooltip("Kailee acceptor (optional).")]
        [SerializeField] Transform acceptor;

        [Header("Events")]
        public UnityEvent onPlantStarted;
        public UnityEvent onShatterWindowOpen;
        public UnityEvent onLaunchAccepted;
        public UnityEvent onSynergySpent;

        public float SynergyMax => synergyMax;
        public float SynergyNormalized => synergyMax > 0f ? currentSynergy / synergyMax : 0f;
        public bool IsSynergyFull => currentSynergy >= synergyMax;
        /// <summary>
        /// Design decision (Oct 14, 2026): the Slingshot fires on a FULL Mom's Chaos meter ONLY.
        /// Synergy is a separate meter and does not gate or get spent by the Slingshot.
        /// No MomsChaosMeter in the scene = never ready.
        /// </summary>
        public bool IsSlingshotReady => MomsChaosMeter.Instance != null && MomsChaosMeter.Instance.IsFull;
        /// <summary>Extra plant condition set by SlingshotFinisher (Slither in range, Kailee standing). Null = always.</summary>
        public System.Func<bool> PlantGate;
        public bool CanPlantNow => IsSlingshotReady && (PlantGate == null || PlantGate());
        public Transform Planter { get => planter; set => planter = value; }
        public bool IsPlanting { get; private set; }
        public bool IsShatterWindowOpen { get; private set; }

        float _plantTimer;
        float _windowTimer;

        void Awake()
        {
            if (planter == null)
                planter = transform;
        }

        void Update()
        {
            // Stub input: Y / F when synergy full (matches §7 control notes).
            if (!IsPlanting && !IsShatterWindowOpen && CanPlantNow &&
                (Input.GetKeyDown(KeyCode.Y) || Input.GetKeyDown(KeyCode.F) || Input.GetKeyDown(KeyCode.JoystickButton3) && Input.GetKey(KeyCode.JoystickButton4)))
            {
                BeginPlant();
            }

            if (IsPlanting)
            {
                _plantTimer -= Time.deltaTime;
                if (_plantTimer <= 0f)
                    OpenShatterWindow();
            }

            if (IsShatterWindowOpen)
            {
                _windowTimer -= Time.deltaTime;
                // Auto-accept if acceptor present (Solo AI path stub).
                if (acceptor != null)
                    TryAcceptLaunch(acceptor.gameObject);

                if (_windowTimer <= 0f)
                    CloseWindow();
            }
        }

        public void ContributeSynergy(float amount)
        {
            currentSynergy = Mathf.Clamp(currentSynergy + amount, 0f, synergyMax);
        }

        public void ContributeSynergyOnHitOrAssist()
        {
            ContributeSynergy(synergyOnHit);
        }

        public void BeginPlant()
        {
            if (!CanPlantNow || IsPlanting)
                return;

            IsPlanting = true;
            _plantTimer = plantDuration;
            onPlantStarted?.Invoke();
        }

        void OpenShatterWindow()
        {
            IsPlanting = false;
            IsShatterWindowOpen = true;
            _windowTimer = shatterWindowSeconds;
            onShatterWindowOpen?.Invoke();
        }

        /// <summary>
        /// Kailee (or P2) accepts launch when Vixen has planted and meter is full.
        /// </summary>
        public bool TryAcceptLaunch(GameObject launcher)
        {
            if (!IsShatterWindowOpen || launcher == null)
                return false;

            CharacterController cc = launcher.GetComponent<CharacterController>();
            Rigidbody rb = launcher.GetComponent<Rigidbody>();
            Vector3 dir = planter != null ? planter.forward : launcher.transform.forward;
            Vector3 impulse = dir.normalized * launchSpeed + Vector3.up * launchUpSpeed;

            if (cc != null)
            {
                // CharacterController: nudge via simple Move impulse stub.
                cc.Move(impulse * Time.deltaTime);
            }
            else if (rb != null)
            {
                rb.AddForce(impulse, ForceMode.VelocityChange);
            }
            else
            {
                launcher.transform.position += dir.normalized * 2f;
            }

            if (MomsChaosMeter.Instance != null) MomsChaosMeter.Instance.Spend(); // Synergy is NOT spent
            onLaunchAccepted?.Invoke();
            CloseWindow();
            return true;
        }

        /// <summary>Team finishers (AI Blitz / Overwatch Lock / Afterburn Volley) pay Synergy here.</summary>
        public bool TrySpendSynergy(float amount)
        {
            if (currentSynergy < amount) return false;
            currentSynergy -= amount;
            onSynergySpent?.Invoke();
            return true;
        }

        /// <summary>Match start / retry: Synergy resets to this fraction (boss spec §8: 50%).</summary>
        public void SetSynergyNormalized(float f) => currentSynergy = Mathf.Clamp01(f) * synergyMax;

        /// <summary>Synergy spend hook for team finishers (no longer called by the Slingshot).</summary>
        public void SpendSynergy()
        {
            currentSynergy = 0f;
            onSynergySpent?.Invoke();
        }

        void CloseWindow()
        {
            IsShatterWindowOpen = false;
            IsPlanting = false;
            _windowTimer = 0f;
        }
    }
}
