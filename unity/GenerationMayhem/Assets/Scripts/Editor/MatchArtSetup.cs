// Copyright Dark Logic Studios. Generation Mayhem.
// Import rules + Animator Controllers for the match characters.
//  • Hero / boss / Ref / Viper FBX → Rig Generic, Create From This Model (pack READMEs: the 31-bone ChaosWheelSkate
//    rig is NOT Humanoid-safe; one Generic hierarchy drives every hero). Loop flags on idle / locomotion / holds.
//  • HUD_v001 PNGs → Sprite (2D and UI), no mips.
//  • GMAnimatorFactory builds one simple controller per character: every clip is a state named after the clip file
//    (AS_Chaos_Attack_Punch_R_Vixen → "Attack_Punch_R", SLB_Slither_VenomLash → "Slither_VenomLash").
//    FighterAnimator cross-fades to those states by name; no transitions needed.
#if UNITY_EDITOR
using System.Collections.Generic;
using System.IO;
using System.Linq;
using UnityEditor;
using UnityEditor.Animations;
using UnityEngine;

namespace GenerationMayhem.EditorTools
{
    public class GMMatchArtPostprocessor : AssetPostprocessor
    {
        const uint Version = 2;
        public override uint GetVersion() => Version;

        internal static bool IsCharacterModel(string path)
        {
            path = path.Replace('\\', '/');
            if (!path.EndsWith(".fbx", System.StringComparison.OrdinalIgnoreCase)) return false;
            if (path.Contains("/VFX/") || path.Contains("/Props/")) return false;
            return path.StartsWith("Assets/Art/HeroPacks/") || path.StartsWith("Assets/Art/Characters/Vipers/") || path.StartsWith("Assets/Art/Characters/Slither/");
        }

        static readonly string[] LoopTokens = { "Idle", "Locomotion_", "Strafe_", "Stagger_Loop", "ViperLock_Hold", "Skate_Fwd", "Locked_Struggle" };

        void OnPreprocessModel()
        {
            if (!IsCharacterModel(assetPath)) return;
            var mi = assetImporter as ModelImporter;
            if (mi == null) return;
            mi.animationType = ModelImporterAnimationType.Generic;
            mi.avatarSetup = ModelImporterAvatarSetup.CreateFromThisModel;
            mi.globalScale = 1f;
            mi.useFileScale = true;
            mi.bakeAxisConversion = false;   // pack README: leave it OFF for model AND clips, or the paths won't match
            mi.importCameras = false;
            mi.importLights = false;
            mi.importAnimation = true;
        }

        void OnPreprocessAnimation()
        {
            if (!IsCharacterModel(assetPath)) return;
            var mi = assetImporter as ModelImporter;
            if (mi == null) return;
            string file = Path.GetFileNameWithoutExtension(assetPath);
            bool loop = LoopTokens.Any(t => file.Contains(t));
            var clips = mi.clipAnimations != null && mi.clipAnimations.Length > 0 ? mi.clipAnimations : mi.defaultClipAnimations;
            if (clips == null || clips.Length == 0) return;
            foreach (var c in clips) { c.loopTime = loop; c.loopPose = false; }
            mi.clipAnimations = clips;
        }

        void OnPreprocessTexture()
        {
            string p = assetPath.Replace('\\', '/');
            if (!p.Contains("/HeroPacks/HUD/") || !p.Contains("/Sprites/")) return;
            var ti = assetImporter as TextureImporter;
            if (ti == null) return;
            ti.textureType = TextureImporterType.Sprite;
            ti.spriteImportMode = SpriteImportMode.Single;
            ti.mipmapEnabled = false;
            ti.alphaIsTransparency = true;
        }
    }

    public static class GMAnimatorFactory
    {
        public const string OutDir = "Assets/Greybox/CityBlock/Animators";
        public static readonly string[] ExtraTriggers = { "Trick_Up", "Trick_Right", "Trick_Down", "Trick_Left", "Bail", "Grind_Start", "Grind_End", "Knockdown" };

        public static RuntimeAnimatorController Hero(string hero)
        {
            string dir = "Assets/Art/HeroPacks/" + hero + "/" + hero + "/Animations";
            var states = new List<KeyValuePair<string, string>>();
            foreach (var f in Fbx(dir, "AS_Chaos_*_" + hero + ".fbx"))
            {
                string n = Path.GetFileNameWithoutExtension(f);
                n = n.Substring("AS_Chaos_".Length);
                n = n.Substring(0, n.Length - ("_" + hero).Length);
                states.Add(new KeyValuePair<string, string>(n, f));
            }
            return Build("AC_" + hero, states, "Idle_Skate");
        }

        /// <summary>The shared ChaosFightSkate set (same hierarchy as every hero and Viper).</summary>
        public static RuntimeAnimatorController Shared()
        {
            var states = new List<KeyValuePair<string, string>>();
            foreach (var f in Fbx("Assets/Art/HeroPacks/ChaosFightSkate/ChaosFightSkate/FBX", "AS_Chaos_*.fbx"))
                states.Add(new KeyValuePair<string, string>(Path.GetFileNameWithoutExtension(f).Substring("AS_Chaos_".Length), f));
            return Build("AC_ChaosFightSkate_Shared", states, "Idle_Skate");
        }

        public static RuntimeAnimatorController Slither()
        {
            var states = new List<KeyValuePair<string, string>>();
            foreach (var f in Fbx("Assets/Art/HeroPacks/SliceBoss_Slither/SliceBoss_Slither_v001/FBX", "SLB_Slither_*.fbx"))
            {
                string n = Path.GetFileNameWithoutExtension(f);
                if (n.Contains("EyesTease")) continue; // VFX shot, not a skeletal clip
                states.Add(new KeyValuePair<string, string>(n.Substring("SLB_".Length), f));
            }
            return Build("AC_Slither", states, "Slither_Idle_Skate");
        }

        public static RuntimeAnimatorController RefBot()
        {
            var states = new List<KeyValuePair<string, string>>();
            foreach (var f in Fbx("Assets/Art/HeroPacks/RefBot/Animations/RefBot_v001/FBX", "RefBot_*.fbx"))
                states.Add(new KeyValuePair<string, string>(Path.GetFileNameWithoutExtension(f), f));
            return Build("AC_RefBot", states, "RefBot_Idle");
        }

        static IEnumerable<string> Fbx(string dir, string pattern)
        {
            if (!Directory.Exists(dir)) return new string[0];
            return Directory.GetFiles(dir, pattern).Select(p => p.Replace('\\', '/')).OrderBy(p => p);
        }

        static AnimationClip FirstClip(string fbx)
        {
            foreach (var o in AssetDatabase.LoadAllAssetsAtPath(fbx))
                if (o is AnimationClip c && !c.name.StartsWith("__preview__")) return c;
            return null;
        }

        static RuntimeAnimatorController Build(string name, List<KeyValuePair<string, string>> states, string defaultState)
        {
            if (states.Count == 0) return null;
            EnsureFolder(OutDir);
            string path = OutDir + "/" + name + ".controller";
            AssetDatabase.DeleteAsset(path);
            var ac = AnimatorController.CreateAnimatorControllerAtPath(path);
            foreach (var t in ExtraTriggers) ac.AddParameter(t, AnimatorControllerParameterType.Trigger);
            var sm = ac.layers[0].stateMachine;
            AnimatorState def = null;
            int added = 0, i = 0;
            foreach (var kv in states)
            {
                var clip = FirstClip(kv.Value);
                if (clip == null) continue;
                var st = sm.AddState(kv.Key, new Vector3(300 + (i % 4) * 220, (i / 4) * 60, 0));
                st.motion = clip;
                i++; added++;
                if (kv.Key == defaultState) def = st;
            }
            if (added == 0) { AssetDatabase.DeleteAsset(path); return null; }
            if (def != null) sm.defaultState = def;
            EditorUtility.SetDirty(ac);
            AssetDatabase.SaveAssets();
            return ac;
        }

        static void EnsureFolder(string path)
        {
            if (AssetDatabase.IsValidFolder(path)) return;
            string parent = Path.GetDirectoryName(path).Replace('\\', '/');
            EnsureFolder(parent);
            AssetDatabase.CreateFolder(parent, Path.GetFileName(path));
        }

        [MenuItem("Generation Mayhem/Import/Reimport Hero + Viper Rigs (Generic)")]
        static void ReimportRigs()
        {
            int n = 0;
            foreach (var guid in AssetDatabase.FindAssets("t:Model", new[] { "Assets/Art/HeroPacks", "Assets/Art/Characters/Vipers", "Assets/Art/Characters/Slither" }))
            {
                string p = AssetDatabase.GUIDToAssetPath(guid);
                if (!GMMatchArtPostprocessor.IsCharacterModel(p)) continue;
                AssetDatabase.ImportAsset(p, ImportAssetOptions.ForceUpdate); n++;
            }
            Debug.Log("[GM] Reimported " + n + " character FBX as Generic. Re-run Build CityBlock Greybox to rebuild the Animator Controllers.");
        }
    }
}
#endif
