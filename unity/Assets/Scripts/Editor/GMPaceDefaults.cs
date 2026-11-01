// Copyright Dark Logic Studios. Generation Mayhem.
// PACE LOCK 1101 — Idea Guy finals, web v7 (PR #4, gh-pages 1e54bb2).
// Inspector overrides win over script defaults, so this menu stamps the locked values onto
// every SkatePawnController / MatchDirector in the OPEN scenes and in ALL prefabs under Assets.
// Run it with CityBlock_Slice / Dockyard open (and once with the player prefab in the project)
// so the Dock Contracts player path actually uses the locked pace.

using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using GenerationMayhem.Match;
using GenerationMayhem.Player;

namespace GenerationMayhem.EditorTools
{
    public static class GMPaceDefaults
    {
        // Keep in sync with SkatePawnController / MatchDirector defaults.
        public const float MaxSpeed = 6.8f;
        public const float Accel = 11f;
        public const float SprintMultiplier = 1f;   // web v7 has no sprint gear (Shift brakes there)
        public const float TurnRadSlow = 5.2f;      // rad/s at standstill
        public const float TurnRadAtMax = 2.4f;     // rad/s at MAX speed
        public const float OverspeedBurst = 3.2f;   // hard cap = MAX + 3.2
        public const float OverspeedDecay = 12f;    // bleed per second above MAX
        public const float ViperChaseSpeed = 4.8f;
        public const float ViperChaseAccel = 9.5f;

        // LOCKED but laptop-only (scripts not in this repo drop) — set these in the full project:
        //   enforcers 3.6 (accel 7) · boss 4.7 (accel 9.5) · boss dash 24
        //   melee lunges 8 / 6.5 · enemy bolts 13 · Kailee combat follow 9

        [MenuItem("Generation Mayhem/Pace/Audit 1101 Pace (log only)")]
        public static void Audit() => Run(apply: false);

        [MenuItem("Generation Mayhem/Pace/Apply 1101 Pace Defaults (open scenes + prefabs)")]
        public static void Apply() => Run(apply: true);

        static void Run(bool apply)
        {
            int scanned = 0, fixedCount = 0;

            // Open scenes (CityBlock_Slice / Dockyard — whatever is loaded).
            foreach (var pawn in Object.FindObjectsByType<SkatePawnController>(FindObjectsInactive.Include, FindObjectsSortMode.None))
            {
                scanned++;
                if (FixPawn(pawn, apply)) { fixedCount++; if (apply) EditorSceneManager.MarkSceneDirty(pawn.gameObject.scene); }
            }
            foreach (var md in Object.FindObjectsByType<MatchDirector>(FindObjectsInactive.Include, FindObjectsSortMode.None))
            {
                scanned++;
                if (FixDirector(md, apply)) { fixedCount++; if (apply) EditorSceneManager.MarkSceneDirty(md.gameObject.scene); }
            }

            // All prefabs (player prefab lives here; saved values there override script defaults).
            foreach (var guid in AssetDatabase.FindAssets("t:Prefab"))
            {
                var path = AssetDatabase.GUIDToAssetPath(guid);
                var prefab = AssetDatabase.LoadAssetAtPath<GameObject>(path);
                if (prefab == null) continue;
                bool dirty = false;
                foreach (var pawn in prefab.GetComponentsInChildren<SkatePawnController>(true))
                { scanned++; if (FixPawn(pawn, apply)) { fixedCount++; dirty = true; } }
                foreach (var md in prefab.GetComponentsInChildren<MatchDirector>(true))
                { scanned++; if (FixDirector(md, apply)) { fixedCount++; dirty = true; } }
                if (apply && dirty) PrefabUtility.SavePrefabAsset(prefab);
            }

            if (apply) AssetDatabase.SaveAssets();
            Debug.Log("[GMPaceDefaults] " + (apply ? "Applied" : "Audited") + " 1101 LOCKED pace on " + scanned
                + " component(s); " + fixedCount + " " + (apply ? "updated" : "off-default")
                + ". Player: MAX " + MaxSpeed + ", ACC " + Accel + ", turn " + TurnRadSlow + "->" + TurnRadAtMax
                + " rad/s, overspeed +" + OverspeedBurst + " (decay " + OverspeedDecay + "/s). Vipers: "
                + ViperChaseSpeed + " (accel " + ViperChaseAccel + ")."
                + " Laptop-only (set in full project): enforcers 3.6/7, boss 4.7/9.5, boss dash 24, melee 8/6.5, bolts 13, Kailee follow 9."
                + " (LOCKED: web v7, PR #4, gh-pages 1e54bb2.)");
        }

        static bool FixPawn(SkatePawnController pawn, bool apply)
        {
            var so = new SerializedObject(pawn);
            bool changed = false;
            changed |= SetFloat(so, "maxSpeed", MaxSpeed, apply, pawn);
            changed |= SetFloat(so, "accel", Accel, apply, pawn);
            changed |= SetFloat(so, "sprintMultiplier", SprintMultiplier, apply, pawn);
            changed |= SetFloat(so, "turnRadSlow", TurnRadSlow, apply, pawn);
            changed |= SetFloat(so, "turnRadAtMax", TurnRadAtMax, apply, pawn);
            changed |= SetFloat(so, "overspeedBurst", OverspeedBurst, apply, pawn);
            changed |= SetFloat(so, "overspeedDecay", OverspeedDecay, apply, pawn);
            if (apply && changed) so.ApplyModifiedPropertiesWithoutUndo();
            return changed;
        }

        static bool FixDirector(MatchDirector md, bool apply)
        {
            var so = new SerializedObject(md);
            bool changed = false;
            changed |= SetFloat(so, "viperChaseSpeed", ViperChaseSpeed, apply, md);
            changed |= SetFloat(so, "viperChaseAccel", ViperChaseAccel, apply, md);
            if (apply && changed) so.ApplyModifiedPropertiesWithoutUndo();
            return changed;
        }

        static bool SetFloat(SerializedObject so, string prop, float value, bool apply, Object ctx)
        {
            var p = so.FindProperty(prop);
            if (p == null || Mathf.Approximately(p.floatValue, value)) return false;
            if (!apply)
            {
                Debug.LogWarning("[GMPaceDefaults] OFF-DEFAULT " + Path(ctx) + "." + prop + " = " + p.floatValue + " (want " + value + ")", ctx);
                return true;
            }
            p.floatValue = value;
            return true;
        }

        static string Path(Object ctx)
        {
            var c = ctx as Component;
            if (c == null) return ctx.name;
            string path = c.gameObject.name;
            for (var t = c.transform.parent; t != null; t = t.parent) path = t.name + "/" + path;
            string scene = c.gameObject.scene.IsValid() ? c.gameObject.scene.name : AssetDatabase.GetAssetPath(c);
            return scene + ":" + path;
        }
    }
}
