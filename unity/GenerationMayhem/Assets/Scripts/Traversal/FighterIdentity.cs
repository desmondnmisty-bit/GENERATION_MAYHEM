// Copyright Dark Logic Studios. Generation Mayhem.

using UnityEngine;

namespace GenerationMayhem.Traversal
{
    /// <summary>Tag component on every fighter root. Cheap role lookup for hazards and nav links.</summary>
    [DisallowMultipleComponent]
    public class FighterIdentity : MonoBehaviour
    {
        public FighterRole role = FighterRole.Grunt;
        [Tooltip("Kailee gets +2% Mom's Chaos per clean trick (§3.1).")]
        public bool isKailee;

        public static FighterIdentity Find(Component c) => c != null ? c.GetComponentInParent<FighterIdentity>() : null;
        public bool IsFamily => role == FighterRole.Hero || role == FighterRole.Ally;
    }
}
