// Generation Mayhem — Soft Hyperdrive L2 (mirrors web Soft). Mom's Frenzy meter + rise reasons + RAGE protect-mode.
// Canon: the girls are Misty's real kids/grandkids — "they are me". RAGE protects them even if it kills her.
using UnityEngine;
using UnityEngine.Events;
namespace GenerationMayhem.Hyperdrive
{
    public class MomsFrenzy : MonoBehaviour
    {
        public static MomsFrenzy Instance { get; private set; }
        [Range(0, 100)] public float frenzy;
        public string lastReason = "";
        public float rageSeconds = 8f, rageDrainHpPerSec = 4f, rageDamageMult = 2.2f;
        public bool Raging => _rageT > 0f;
        public float RageT => _rageT;
        public UnityEvent<string> onRise = new UnityEvent<string>();
        public UnityEvent onRage = new UnityEvent();
        float _rageT; SoftHP _vixenHp;
        void Awake() { Instance = this; }
        public void Bind(SoftHP vixenHp) { _vixenHp = vixenHp; }
        /// <summary>Why it rises (shown on HUD): girl hit, girl downed, Viper grabs a girl, Vixen hit, trick landed.</summary>
        public void Rise(float amt, string reason)
        {
            if (Raging) return;
            frenzy = Mathf.Min(100f, frenzy + amt); lastReason = reason; onRise.Invoke(reason);
            if (frenzy >= 100f) StartRage();
        }
        public void GirlHit(string girl) => Rise(8f, girl + " GOT HIT");
        public void GirlDowned(string girl) => Rise(35f, girl + " IS DOWN");
        public void GirlGrabbed(string girl) => Rise(20f, "VIPER ON " + girl);
        public void VixenHit() => Rise(4f, "MOM GOT HIT");
        public void Trick(string name) => Rise(3f, name);
        void StartRage() { _rageT = rageSeconds; frenzy = 100f; lastReason = "PROTECT MODE — EVEN IF IT KILLS HER"; onRage.Invoke(); HyperdriveVO.Say("VIXEN", "Get away from my babies!"); }
        void Update()
        {
            if (!Raging) return;
            _rageT -= Time.deltaTime; frenzy = Mathf.Max(0, 100f * _rageT / rageSeconds);
            // protect-mode costs her: drains her own HP, can take her to 0 (canon: even if it kills her)
            if (_vixenHp != null) _vixenHp.ApplyDamage(rageDrainHpPerSec * Time.deltaTime);
            if (_rageT <= 0) { _rageT = 0; frenzy = 0; }
        }
    }
}
