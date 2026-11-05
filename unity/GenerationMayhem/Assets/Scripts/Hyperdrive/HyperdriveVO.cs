// Soft VO wire (gm-vo-wire): real clips in Resources/VO/<name>/ play by line key; else subtitle-only fallback.
// Key = first 6 words of the line, lowercase, punctuation stripped, '_' joined (same as web tools/build_vo_manifest.mjs).
// FINAL v003: Resources/VO/vixen/GM_Vixen_ColdOpen_FINAL_v003.mp3 → HyperdriveVO.PlayClip("vixen","GM_Vixen_ColdOpen_FINAL_v003").
using System.Linq; using System.Text.RegularExpressions; using UnityEngine;
namespace GenerationMayhem.Hyperdrive
{
    public static class HyperdriveVO
    {
        static AudioSource _src;
        static AudioSource Src { get { if (_src == null) { var g = new GameObject("HyperdriveVO"); Object.DontDestroyOnLoad(g); _src = g.AddComponent<AudioSource>(); _src.spatialBlend = 0; } return _src; } }
        public static string Key(string line) => string.Join("_", Regex.Replace(line.ToLowerInvariant(), "[^a-z0-9 ]", "").Split(new[] { ' ' }, System.StringSplitOptions.RemoveEmptyEntries).Take(6));
        public static bool PlayClip(string who, string file) { var c = Resources.Load<AudioClip>("VO/" + who.ToLowerInvariant() + "/" + file); if (!c) return false; Src.Stop(); Src.PlayOneShot(c); return true; }
        public static void Say(string who, string line)
        {
            HyperdriveHUD.Coms(who + ": " + line);
            if (!PlayClip(who, Key(line))) Debug.Log("[VO stub/TTS-less] " + who + ": " + line + "  (drop Resources/VO/" + who.ToLowerInvariant() + "/" + Key(line) + ".mp3)");
        }
    }
}
