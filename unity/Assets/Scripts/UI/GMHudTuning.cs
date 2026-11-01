// Copyright Dark Logic Studios. Generation Mayhem.
// 1101 phone ask (Misty): Sonic scream UI + the entire match HUD must be MUCH smaller —
// phone-readable, but not dominating the screen.

using UnityEngine;
using UnityEngine.UI;

namespace GenerationMayhem.UI
{
    /// <summary>
    /// One place for HUD sizing so the next tune is a two-constant change.
    /// Menus (StartMenu / WeaponUpgrade) stay full size — only the in-match HUD shrinks.
    /// </summary>
    public static class GMHudTuning
    {
        /// <summary>Whole match HUD (health, meters, banner, subtitles): 60% of former size.</summary>
        public const float HudScale = 0.6f;
        /// <summary>Sonic scream UI gets an extra cut on top of HudScale (0.6 * 0.75 = 45% of former size).</summary>
        public const float SonicScreamExtraScale = 0.75f;

        /// <summary>
        /// IMGUI HUDs: call at the top of OnGUI instead of hand-rolling the 1920x1080 matrix.
        /// Restores with GUI.matrix = returned value at the end.
        ///   var prev = GMHudTuning.BeginHudMatrix(out float W, out float H);
        ///   ... lay out against W x H as before ...
        ///   GUI.matrix = prev;
        /// </summary>
        public static Matrix4x4 BeginHudMatrix(out float virtualWidth, out float virtualHeight, float extraScale = 1f)
        {
            var prev = GUI.matrix;
            float s = Mathf.Min(Screen.width / 1920f, Screen.height / 1080f) * HudScale * extraScale;
            GUI.matrix = Matrix4x4.Scale(new Vector3(s, s, 1f));
            virtualWidth = Screen.width / s;
            virtualHeight = Screen.height / s;
            return prev;
        }

        /// <summary>uGUI HUDs (GMUIKit.Canvas): shrink a whole canvas. Safe to call once per canvas.</summary>
        public static void Compact(Canvas canvas, float scale)
        {
            if (canvas == null || scale <= 0f || canvas.GetComponent<GMHudCompacted>() != null) return;
            canvas.gameObject.AddComponent<GMHudCompacted>();
            var scaler = canvas.GetComponent<CanvasScaler>();
            if (scaler != null && scaler.uiScaleMode == CanvasScaler.ScaleMode.ScaleWithScreenSize)
                scaler.referenceResolution /= scale;       // bigger reference = smaller UI
            else if (scaler != null)
                scaler.scaleFactor *= scale;
            else
                canvas.transform.localScale *= scale;
        }
    }

    /// <summary>Marker so Compact() never double-applies. Added at runtime by Compact().</summary>
    public class GMHudCompacted : MonoBehaviour { }
}
