// L2 entry: plays FINAL v003 Vixen VO (real clip) then the ladies' radio lines (stub until clips drop in Resources/VO/<name>/).
using System.Collections; using UnityEngine;
namespace GenerationMayhem.Hyperdrive
{
    public class HyperdriveIntro : MonoBehaviour
    {
        IEnumerator Start()
        {
            HyperdriveHUD.Callout("LEVEL 2 · HYPERDRIVE");
            if (HyperdriveVO.PlayClip("vixen", "GM_Vixen_ColdOpen_FINAL_v003")) yield return new WaitForSeconds(6f);
            HyperdriveVO.Say("BRIANNA", "Gauntlets hot. Point me at 'em, Mama."); yield return new WaitForSeconds(3f);
            HyperdriveVO.Say("PAYTON", "Gatling's spun up. Nobody touches my babies."); yield return new WaitForSeconds(3f);
            HyperdriveVO.Say("KAILEE", "Point-four-oh ready. I'll slide under the big one.");
        }
    }
}
