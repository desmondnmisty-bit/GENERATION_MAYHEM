// Boot → StartMenu → Dockyard → round end → WeaponUpgrade → Dockyard …
// Watches MatchDirector without editing it: on Won/Lost, awards scrap, fires OnRoundEnd, then opens WeaponUpgrade.
using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;
using GenerationMayhem.Match;
using GenerationMayhem.Player;

namespace GenerationMayhem.UI
{
    public class GMFlow : MonoBehaviour
    {
        public const string StartScene = "StartMenu";
        public const string FightScene = "Dockyard";
        public const string UpgradeScene = "WeaponUpgrade";
        public static int ScrapPerWin = 250, ScrapPerLoss = 100;
        public static float DelayAfterRound = 5f; // let the Ref Bot KO call play

        static GMFlow _inst;

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterSceneLoad)]
        static void Boot()
        {
            if (_inst) return;
            var go = new GameObject("GMFlow"); DontDestroyOnLoad(go); _inst = go.AddComponent<GMFlow>();
            SceneManager.sceneLoaded += (s, _) => _inst.OnScene(s);
            _inst.OnScene(SceneManager.GetActiveScene());
        }

        public static void GoFight() => SceneManager.LoadScene(FightScene);
        public static void GoUpgrade() => SceneManager.LoadScene(UpgradeScene);
        public static void GoStart() => SceneManager.LoadScene(StartScene);

        void OnScene(Scene s)
        {
            StopAllCoroutines();
            if (s.name == FightScene) StartCoroutine(WatchFight());
        }

        IEnumerator WatchFight()
        {
            yield return null;
            ApplyUpgrades();
            while (MatchDirector.Instance == null) yield return null;
            while (MatchDirector.Instance.State == MatchState.PreMatch) yield return null;
            GMFlowEvents.MatchStart(GMSave.Round);          // RefBot "FIGHT!" hook
            while (!MatchDirector.IsOver) { if (Input.GetKeyDown(KeyCode.Escape)) { GoStart(); yield break; } yield return null; }
            bool won = MatchDirector.Instance.State == MatchState.Won;
            GMSave.Scrap += won ? ScrapPerWin : ScrapPerLoss;
            GMFlowEvents.RoundEnd(GMSave.Round, won);       // RefBot KO / MedBot revive hook
            if (won) GMSave.Round += 1;
            yield return new WaitForSecondsRealtime(DelayAfterRound);
            GoUpgrade();
        }

        /// Phase 0: Vixen damage bonus pushed into VixenCombat. Other stats readable via GMSave.Bonus(fighter, stat).
        static void ApplyUpgrades()
        {
            float mul = 1f + GMSave.Bonus("Vixen", UpgradeStat.Damage);
            if (Mathf.Approximately(mul, 1f)) return;
            foreach (var v in FindObjectsByType<VixenCombat>(FindObjectsSortMode.None))
            {
                for (int i = 0; i < v.lightChain.Length; i++) v.lightChain[i].damage *= mul;
                for (int i = 0; i < v.heavyChain.Length; i++) v.heavyChain[i].damage *= mul;
                var c = v.check; c.damage *= mul; v.check = c;
            }
        }
    }
}
