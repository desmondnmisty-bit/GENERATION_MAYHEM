// Copyright Dark Logic Studios. Generation Mayhem.
// Slither_Boss_Fight_v002 §7: the Slingshot finisher plays SLB_Slither_KO_HarborSplash; boss_knocked_out at water contact.

using UnityEngine;

namespace GenerationMayhem.Traversal
{
    /// <summary>
    /// On Slither. The finisher calls BeginKO(). Water contact (HarborKOEdge) or the clip's animation event
    /// (AE_BossKnockedOut) then fires boss_knocked_out exactly once. Falling in the water WITHOUT an active KO
    /// does not end the match (only the Slingshot can finish him) — see README open question.
    /// </summary>
    public class BossKOSequence : MonoBehaviour
    {
        public const string KOClipName = "SLB_Slither_KO_HarborSplash";
        public bool KOInProgress { get; private set; }
        bool _fired;

        public void BeginKO() { KOInProgress = true; }

        public void OnWaterContact()
        {
            if (!KOInProgress || _fired) return;
            _fired = true;
            TraversalEvents.RaiseBossKnockedOut();
        }

        /// <summary>Animation event on the KO clip at water contact.</summary>
        public void AE_BossKnockedOut() => OnWaterContact();
    }
}
