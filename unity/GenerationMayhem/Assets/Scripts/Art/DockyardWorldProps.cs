// GM world props hang — Dockyard (2026-11-06). The Dockyard scene lives in build settings but is not committed
// to the repo, so (same pattern as GMFlow.Boot) a scene-load hook hangs the props when the Dockyard loads.
// Slots are web lockstep (web/src/world.ts): extraction gate GATE_Z 172, berth ZONES z0 −8/42/88/134,
// raised side decks at x −14.5 (z0+16), sky-railway ramp feet at x 8 (z0+9), lane x ∈ [−18, 18].
// Visual-only props (no colliders): war rigs, tire ladder, smashable clutter, shops, civilians, edge guns,
// the extraction gate logic and Dock-clear unlock are all untouched.
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace GenerationMayhem.Art
{
    public static class DockyardWorldProps
    {
        public const string RootName = "GM_WorldProps_Dockyard";
        public const float GateZ = 172f; // web world.ts GATE_Z — extraction gate slot
        static readonly float[] BerthZ0 = { -8f, 42f, 88f, 134f }; // web world.ts ZONES

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterSceneLoad)]
        static void Boot()
        {
            SceneManager.sceneLoaded += (s, _) => OnScene(s);
            OnScene(SceneManager.GetActiveScene());
        }

        static void OnScene(Scene s)
        {
            if (s.name != GenerationMayhem.UI.GMFlow.FightScene) return;
            Hang();
        }

        /// <summary>Hang the Dockyard world props once (idempotent). Also callable from an Editor bake.</summary>
        public static Transform Hang()
        {
            var existing = GameObject.Find(RootName);
            if (existing != null) return existing.transform;
            var root = new GameObject(RootName).transform;
            // Portal slot — extraction gate at the end of the berth lane (visible on top of the greybox gate stand-in).
            WorldPropHang.Hang(WorldPropHang.PortalPurpleGate, root, new Vector3(0, 0, GateZ), 0f, 9f, WorldPropHang.Fit.Height);
            // Roadway slot — magenta elevated highway ramp on the Berth 2 crane-yard west roadway band.
            WorldPropHang.Hang(WorldPropHang.RoadwayMagentaRamp, root, new Vector3(-9.5f, 0, 72), 180f, 11f);
            // Roadway kit — split-deck pieces, one per berth raised-deck slot and sky-railway ramp foot (never one solid block).
            var slots = new List<WorldPropHang.KitSlot>();
            foreach (var z0 in BerthZ0)
            {
                slots.Add(new WorldPropHang.KitSlot(new Vector3(-14.5f, 0, z0 + 16f), 0f, 6f)); // raised west side deck
                slots.Add(new WorldPropHang.KitSlot(new Vector3(8f, 0, z0 + 9f), 0f, 5f));      // sky-railway ramp foot
            }
            WorldPropHang.HangSplitDeckKit(root, "SplitDeckKit", slots);
            return root;
        }
    }
}
