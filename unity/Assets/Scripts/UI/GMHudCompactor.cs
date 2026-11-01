// Copyright Dark Logic Studios. Generation Mayhem.
// 1101 phone ask (Misty): shrink the in-match HUD + Sonic scream UI. See GMHudTuning.cs.

using System.Collections.Generic;
using UnityEngine;

namespace GenerationMayhem.UI
{
    /// <summary>
    /// Drop into CityBlock_Slice / Dockyard: shrinks every root HUD canvas it can find by
    /// name (GMHudTuning.HudScale). Sonic scream canvases get the extra cut. Menus are
    /// untouched (excluded by name). Rescans periodically so HUDs built lazily in code are
    /// still caught. If the match HUD is IMGUI instead of uGUI, use
    /// GMHudTuning.BeginHudMatrix in its OnGUI instead.
    /// </summary>
    public class GMHudCompactor : MonoBehaviour
    {
        [Tooltip("Canvas name fragments treated as match HUD (case-insensitive).")]
        [SerializeField] string[] hudNames = { "HUD", "Match", "Meter", "Chaos" };
        [Tooltip("Canvas name fragments treated as Sonic scream UI — get the extra cut.")]
        [SerializeField] string[] screamNames = { "Scream", "Sonic" };
        [Tooltip("Never touch canvases containing these (menus stay full size).")]
        [SerializeField] string[] excludeNames = { "StartMenu", "Upgrade", "Intro" };
        [SerializeField] float rescanSeconds = 1f;

        float _nextScan;

        void Update()
        {
            if (Time.unscaledTime < _nextScan) return;
            _nextScan = Time.unscaledTime + rescanSeconds;
            foreach (var canvas in FindObjectsByType<Canvas>(FindObjectsInactive.Include, FindObjectsSortMode.None))
            {
                if (canvas.transform.parent != null) continue; // nested canvases follow their root
                string n = canvas.name.ToLowerInvariant();
                if (Matches(n, excludeNames)) continue;
                if (Matches(n, screamNames))
                    GMHudTuning.Compact(canvas, GMHudTuning.HudScale * GMHudTuning.SonicScreamExtraScale);
                else if (Matches(n, hudNames))
                    GMHudTuning.Compact(canvas, GMHudTuning.HudScale);
            }
        }

        static bool Matches(string lowerName, IEnumerable<string> fragments)
        {
            foreach (var f in fragments)
                if (!string.IsNullOrEmpty(f) && lowerName.Contains(f.ToLowerInvariant()))
                    return true;
            return false;
        }
    }
}
