// Copyright Dark Logic Studios. Generation Mayhem.
// Input System (com.unity.inputsystem) wrapper around Assets/Resources/Input/GMControls.inputactions.
// One instance per player slot; slot 0 = the human (Vixen). Each slot clones the asset so binding
// overrides are per player, and persists them in PlayerPrefs ("GM_Bindings_P{index}").
// Default mapping is documented in Assets/Resources/Input/CONTROLS.md.
// NOTE: namespace is "Controls", not "Input" — a GenerationMayhem.Input namespace would shadow
// UnityEngine.Input in every sibling namespace still on the legacy path (active handling = Both).

using UnityEngine;
using UnityEngine.InputSystem;

namespace GenerationMayhem.Controls
{
    public sealed class GMControls
    {
        public const string AssetResourcePath = "Input/GMControls";
        public const string PrefsKeyPrefix = "GM_Bindings_P";
        public const int MaxSlots = 4;

        static readonly GMControls[] _slots = new GMControls[MaxSlots];

        /// <summary>Controls for a player slot (lazy). Slot 0 = Player 1 (keyboard+mouse and/or any pad).</summary>
        public static GMControls For(int playerIndex = 0)
        {
            playerIndex = Mathf.Clamp(playerIndex, 0, MaxSlots - 1);
            return _slots[playerIndex] ?? (_slots[playerIndex] = new GMControls(playerIndex));
        }

        public int PlayerIndex { get; }
        public InputActionAsset Asset { get; }

        public readonly InputAction Move;        // Vector2 — WASD / left stick / d-pad
        public readonly InputAction Brake;       // hold — Space / A-Cross
        public readonly InputAction Jump;        // press = ollie, hold = fast gear — Shift / RT
        public readonly InputAction Trick;       // J / LT
        public readonly InputAction LightAttack; // K / LMB / X-Square
        public readonly InputAction HeavyAttack; // L / RMB / Y-Triangle
        public readonly InputAction Check;       // E / B-Circle
        public readonly InputAction Block;       // hold — Q / LB-L1
        public readonly InputAction LockOn;      // Tab / MMB / RB-R1
        public readonly InputAction Pause;       // Esc / Start

        string PrefsKey => PrefsKeyPrefix + PlayerIndex;

        GMControls(int playerIndex)
        {
            PlayerIndex = playerIndex;
            var source = Resources.Load<InputActionAsset>(AssetResourcePath);
            if (source == null)
            {
                Debug.LogError("GMControls: missing InputActionAsset at Resources/" + AssetResourcePath +
                               " — check that com.unity.inputsystem imported GMControls.inputactions.");
                Asset = ScriptableObject.CreateInstance<InputActionAsset>();
                Move = Brake = Jump = Trick = LightAttack = HeavyAttack = Check = Block = LockOn = Pause =
                    new InputAction("Missing");
                return;
            }

            // Clone so per-player overrides never dirty the imported asset.
            Asset = Object.Instantiate(source);
            Asset.name = source.name + "_P" + (playerIndex + 1);

            var map = Asset.FindActionMap("Gameplay", throwIfNotFound: true);
            Move = map.FindAction("Move", true);
            Brake = map.FindAction("Brake", true);
            Jump = map.FindAction("Jump", true);
            Trick = map.FindAction("Trick", true);
            LightAttack = map.FindAction("LightAttack", true);
            HeavyAttack = map.FindAction("HeavyAttack", true);
            Check = map.FindAction("Check", true);
            Block = map.FindAction("Block", true);
            LockOn = map.FindAction("LockOn", true);
            Pause = map.FindAction("Pause", true);

            LoadOverrides();
            Asset.Enable();
        }

        // ---------------- per-player rebinding persistence ----------------

        public void SaveOverrides()
        {
            PlayerPrefs.SetString(PrefsKey, Asset.SaveBindingOverridesAsJson());
            PlayerPrefs.Save();
        }

        public void LoadOverrides()
        {
            string json = PlayerPrefs.GetString(PrefsKey, null);
            if (string.IsNullOrEmpty(json)) return;
            try { Asset.LoadBindingOverridesFromJson(json); }
            catch (System.Exception e) { Debug.LogWarning("GMControls: could not apply saved binds for P" + (PlayerIndex + 1) + ": " + e.Message); }
        }

        public void ResetOverrides()
        {
            Asset.RemoveAllBindingOverrides();
            PlayerPrefs.DeleteKey(PrefsKey);
            PlayerPrefs.Save();
        }

        // ---------------- pause / menu support ----------------

        /// <summary>Disable gameplay actions (movement, combat) but keep Pause alive. Used by GMPauseMenu.</summary>
        public void SetGameplayEnabled(bool enabled)
        {
            foreach (var map in Asset.actionMaps)
                foreach (var action in map.actions)
                {
                    if (action == Pause) continue;
                    if (enabled) action.Enable(); else action.Disable();
                }
        }

        /// <summary>True while 'action' is held from a gamepad control (e.g. LB held for the slingshot combo).</summary>
        public static bool HeldOnGamepad(InputAction action)
        {
            return action.IsPressed() && action.activeControl != null && action.activeControl.device is Gamepad;
        }

        // ---------------- future local multiplayer hook ----------------

        /// <summary>
        /// Slot 0 listens to every connected device so Player 1 works with keyboard+mouse or any pad.
        /// When more humans join later, pair each extra slot with its own pad (or use InputUser +
        /// InputUser.PerformPairingWithDevice for full user management) — overrides already persist per slot.
        /// </summary>
        public void RestrictToDevices(params InputDevice[] devices)
        {
            Asset.devices = devices;
        }
    }
}
