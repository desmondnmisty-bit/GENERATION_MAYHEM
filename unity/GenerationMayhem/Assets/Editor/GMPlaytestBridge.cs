#if UNITY_EDITOR
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;
using System.IO;
[InitializeOnLoad]
public static class GMPlaytestBridge
{
    static string Command => Path.Combine(Path.GetTempPath(), "GM-playtest-command.txt");
    static GMPlaytestBridge() { EditorApplication.update += Tick; Debug.Log("[GM playtest] Editor ready; playing=" + EditorApplication.isPlaying); }
    static double verifyAt;
    static void Tick()
    {
        if (verifyAt > 0 && EditorApplication.timeSinceStartup > verifyAt) {
            verifyAt=0;
            var p=Object.FindFirstObjectByType<GenerationMayhem.Player.SkatePawnController>();
            if(p) Debug.Log("[GM playtest] Recovery probe result: position="+p.transform.position+" velocity="+p.PlanarVelocity+" vertical="+p.VerticalSpeed+" camera="+Camera.main?.transform.position);
        }

        if (!File.Exists(Command) || EditorApplication.isCompiling || EditorApplication.isUpdating) return;
        string cmd; try { cmd = File.ReadAllText(Command).Trim(); File.Delete(Command); } catch (IOException) { return; }
        if (cmd == "stop") { EditorApplication.isPlaying = false; Debug.Log("[GM playtest] Stop requested; playing=" + EditorApplication.isPlaying); return; }
        if (cmd == "cold-open") {
            if (EditorApplication.isPlaying) { Debug.LogError("[GM playtest] Refusing scene change during Play"); return; }
            EditorSceneManager.OpenScene("Assets/Scenes/IntroCutscene.unity");
            EditorApplication.delayCall += () => { Debug.Log("[GM playtest] Starting IntroCutscene movie -> Dockyard"); EditorApplication.isPlaying = true; }; return;
        }
        if (cmd == "build-dock") {
            if (EditorApplication.isPlaying) return;
            typeof(GenerationMayhem.EditorTools.CityBlockGreyboxBuilder).GetMethod("BuildDockyard").Invoke(null, null);
            Debug.Log("[GM playtest] Dockyard built from existing CityBlock Dock builder"); return;
        }
        if (cmd == "skip-movie") { var intro=Object.FindFirstObjectByType<GenerationMayhem.UI.IntroCutsceneController>(); if(intro) intro.SendMessage("Skip"); return; }
        if (cmd == "probe-dock") {
            if(!EditorApplication.isPlaying || SceneManager.GetActiveScene().name!="Dockyard") { Debug.LogError("[GM playtest] Probe requires Dockyard after movie"); return; }
            var p=Object.FindFirstObjectByType<GenerationMayhem.Player.SkatePawnController>();
            if(p) { var cc=p.GetComponent<CharacterController>(); cc.enabled=false; p.transform.position=new Vector3(20,-12,7); cc.enabled=true; p.SetVelocity(new Vector3(30,-90,30)); verifyAt=EditorApplication.timeSinceStartup+1; }
            var brute=GenerationMayhem.Match.IronRoseBrute.Spawn(new Vector3(38,0,8),999);
            Debug.Log("[GM playtest] Probe: Brute mesh renderers="+(brute?brute.GetComponentsInChildren<Renderer>().Length:-1)+" Viper components="+Object.FindObjectsByType<GenerationMayhem.Match.ViperGrunt>(FindObjectsSortMode.None).Length);
            return;
        }
        if (cmd == "plant-hd") { if(!EditorApplication.isPlayingOrWillChangePlaymode) PlantHyperdriveBuildings.Plant(); return; }
        if (cmd == "hd-view") { if(EditorApplication.isPlaying) return; EditorSceneManager.OpenScene("Assets/Scenes/Hyperdrive_L2.unity"); var cam=Camera.main; if(cam){cam.transform.SetPositionAndRotation(new Vector3(0,10,-10),Quaternion.LookRotation(new Vector3(0,4,110)));cam.fieldOfView=70;} var type=typeof(EditorWindow).Assembly.GetType("UnityEditor.GameView"); if(type!=null)EditorWindow.GetWindow(type).Focus(); return; }
        if (cmd == "capture") { ScreenCapture.CaptureScreenshot(Path.Combine(Path.GetTempPath(),"GM-Dock-after.png")); return; }
        if (cmd == "audit") {
            Debug.Log("[GM live] Brutes="+Object.FindObjectsByType<GenerationMayhem.Match.IronRoseBrute>(FindObjectsSortMode.None).Length+" Slither="+Object.FindObjectsByType<GenerationMayhem.Match.SlitherBoss>(FindObjectsSortMode.None).Length+" ViperGrunts="+Object.FindObjectsByType<GenerationMayhem.Match.ViperGrunt>(FindObjectsSortMode.None).Length+" SoftVipers="+Object.FindObjectsByType<GenerationMayhem.Hyperdrive.SoftViper>(FindObjectsSortMode.None).Length+" RefBots="+Object.FindObjectsByType<GenerationMayhem.Flow.RefBot>(FindObjectsSortMode.None).Length+" MedBots="+Object.FindObjectsByType<GenerationMayhem.Flow.MedBot>(FindObjectsSortMode.None).Length);
            foreach(var rr in Object.FindObjectsByType<MeshRenderer>(FindObjectsSortMode.None)) { var mf=rr.GetComponent<MeshFilter>(); if(rr.enabled && mf && mf.sharedMesh && mf.sharedMesh.name=="Capsule")Debug.LogError("[GM live] Visible capsule "+rr.name+" parent="+rr.transform.parent?.name); }
            foreach(var name in new[]{"Enemies/IronRose/IRS_02_LOD0","Enemies/Vipers/GM_Viper_Swarm/GM_Viper_Swarm_Parts","Enemies/Vipers/GM_Viper_Cobra/GM_Viper_Cobra_Parts","Enemies/Vipers/GM_Viper_Fang/GM_Viper_Fang_Parts","Enemies/Vipers/GM_Viper_Hive_redsuit/GM_Viper_Hive_redsuit_Parts"}) {
                var g=Resources.Load<GameObject>(name); Debug.Log("[GM playtest] Resource "+name+" renderers="+(g?g.GetComponentsInChildren<Renderer>(true).Length:-1));
            }

            Debug.Log("[GM playtest] playing=" + EditorApplication.isPlaying + " scene=" + SceneManager.GetActiveScene().name);
            foreach (var p in Object.FindObjectsByType<GenerationMayhem.Player.SkatePawnController>(FindObjectsSortMode.None)) Debug.Log("[GM playtest] player " + p.transform.position);
            foreach (var r in Object.FindObjectsByType<Renderer>(FindObjectsSortMode.None)) {
                if (r.enabled && (r.name == "MeshRoot" || r.name == "Body" || r.name.Contains("Capsule"))) Debug.Log("[GM playtest] Visible body: " + r.name + " parent=" + r.transform.parent?.name);
            }
            foreach (var name in new[]{"GM_Vixen_WarRig_v010_Soft", "GM_Payton_WarRig_v006_Soft", "GM_Brianna_WarRig_v005_Soft", "GM_Kailee_WarRig_v006_Soft"}) {
                var g=Resources.Load<GameObject>("WarRigs/"+name); Debug.Log("[GM playtest] Resource "+name+" renderers="+(g?g.GetComponentsInChildren<Renderer>(true).Length:-1));
            }
        }
    }
}
#endif
