// OnGUI HUD for Soft L2: Frenzy bar + rise reason, RAGE banner, trick score/callouts, coms line.
using UnityEngine;
namespace GenerationMayhem.Hyperdrive
{
    public class HyperdriveHUD : MonoBehaviour
    {
        static string _callout, _coms; static float _calloutT, _comsT;
        public static int TrickScore; static int _chain; static float _chainT;
        public static void Callout(string s) { _callout = s; _calloutT = 1.6f; }
        public static void Coms(string s) { _coms = s; _comsT = 4f; }
        public static void Trick(string name, int pts) { _chain++; _chainT = 3f; int m = Mathf.Min(5, _chain); TrickScore += pts * m; Callout(name + " +" + pts * m + (m > 1 ? " x" + m : "")); if (MomsFrenzy.Instance) MomsFrenzy.Instance.Trick(name); }
        void Update() { _calloutT -= Time.deltaTime; _comsT -= Time.deltaTime; if ((_chainT -= Time.deltaTime) <= 0) _chain = 0; }
        void OnGUI()
        {
            var f = MomsFrenzy.Instance; var big = new GUIStyle(GUI.skin.label) { fontSize = 28, fontStyle = FontStyle.Bold, alignment = TextAnchor.MiddleCenter };
            GUI.Label(new Rect(20, 10, 600, 30), "LEVEL 2 · HYPERDRIVE   ·   TRICKS " + TrickScore);
            if (f)
            {
                GUI.Box(new Rect(20, 40, 300, 22), ""); GUI.color = f.Raging ? Color.red : new Color(1f, 0.2f, 0.6f);
                GUI.DrawTexture(new Rect(22, 42, 296 * f.frenzy / 100f, 18), Texture2D.whiteTexture); GUI.color = Color.white;
                GUI.Label(new Rect(24, 42, 600, 20), "MOM'S FRENZY — " + f.lastReason);
                if (f.Raging) GUI.Label(new Rect(0, 80, Screen.width, 40), "RAGE · PROTECT MODE — EVEN IF IT KILLS HER", big);
            }
            if (_calloutT > 0) GUI.Label(new Rect(0, Screen.height * 0.35f, Screen.width, 40), _callout, big);
            if (_comsT > 0) GUI.Label(new Rect(20, Screen.height - 50, Screen.width - 40, 30), "📻 " + _coms);
        }
    }
}
