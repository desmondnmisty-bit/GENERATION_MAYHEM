#if UNITY_EDITOR
using System;
using System.IO;
using System.Linq;
using System.Text;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.AI;
using GenerationMayhem.Match;
using GenerationMayhem.Hyperdrive;
using GenerationMayhem.Traversal;
using GenerationMayhem.Player;
using Object=UnityEngine.Object;
// Local file-command harness: never rebuilds a scene or changes game progression.
[InitializeOnLoad]
public static class GMWireDebug
{
    static string Dir => Path.Combine(Path.GetTempPath(),"GM-wire-debug");
    static string Cmd => Path.Combine(Path.GetTempPath(),"GM-wire-command.txt");
    static double openingAuditAt, captureAt;
    static GMWireDebug(){Directory.CreateDirectory(Dir); EditorApplication.update+=Tick; Application.logMessageReceived+=Log; EditorApplication.playModeStateChanged+=state=>{if(state==PlayModeStateChange.EnteredPlayMode)openingAuditAt=EditorApplication.timeSinceStartup+1.0;};}
    static void Log(string s,string stack,LogType type){if(type==LogType.Error||type==LogType.Exception||type==LogType.Assert)File.AppendAllText(Path.Combine(Dir,"errors.txt"),type+": "+s+"\n"+stack+"\n");}
    static string Full(Transform t)=>t.parent?Full(t.parent)+"/"+t.name:t.name;
    static void Tick(){
        if(captureAt>0 && EditorApplication.timeSinceStartup>captureAt && EditorApplication.isPlaying){captureAt=0;ScreenCapture.CaptureScreenshot(Path.Combine(Dir,SceneManager.GetActiveScene().name+"-game.png"));}
        if(openingAuditAt>0 && EditorApplication.timeSinceStartup>openingAuditAt && EditorApplication.isPlaying){openingAuditAt=0;Audit();ScreenCapture.CaptureScreenshot(Path.Combine(Dir,SceneManager.GetActiveScene().name+"-opening-game.png"));}
        if(!File.Exists(Cmd)||EditorApplication.isCompiling||EditorApplication.isUpdating)return;
        string cmd;try {cmd=File.ReadAllText(Cmd).Trim();File.Delete(Cmd);}catch(IOException){return;}
        try {
            if(cmd.StartsWith("audio-")) GMGameplayAudioDebug.Command(cmd);
            if(cmd.StartsWith("visual-")) GMSceneVisualDebug.Command(cmd);
            if(cmd.StartsWith("rig-")) GMWarRigReview.Command(cmd);
            if(cmd.StartsWith("wall-")) GMWallDebug.Command(cmd);
            if(cmd=="audit") Audit();
            if(cmd=="stop") EditorApplication.isPlaying=false;
            if(cmd=="capture" && EditorApplication.isPlaying) { EditorWindow.GetWindow(typeof(EditorWindow).Assembly.GetType("UnityEditor.GameView")).Repaint();captureAt=EditorApplication.timeSinceStartup+.8;EditorApplication.QueuePlayerLoopUpdate(); }
            if(cmd=="save") {if(!EditorApplication.isPlaying)EditorSceneManager.SaveOpenScenes();}
            if(cmd=="play-dock"||cmd=="play-hd"||cmd=="play-intro"){
                if(EditorApplication.isPlayingOrWillChangePlaymode)throw new Exception("Stop Play before changing scenes.");
                if(Enumerable.Range(0,SceneManager.sceneCount).Any(i=>SceneManager.GetSceneAt(i).isDirty))throw new Exception("Unsaved scene: save explicitly before switching.");
                var name=cmd=="play-dock"?"Dockyard":cmd=="play-hd"?"Hyperdrive_L2":"IntroCutscene";
                EditorSceneManager.OpenScene("Assets/Scenes/"+name+".unity");EditorApplication.isPlaying=true;
            }
            if(cmd=="fix-hd"){
                if(EditorApplication.isPlayingOrWillChangePlaymode)throw new Exception("Stop Play before fix-hd.");
                if(SceneManager.GetActiveScene().isDirty)throw new Exception("Save current scene explicitly before fix-hd.");
                var scene=EditorSceneManager.OpenScene("Assets/Scenes/Hyperdrive_L2.unity");
                var boss=Object.FindFirstObjectByType<SlitherBoss>(FindObjectsInactive.Include);
                if(boss && !boss.enabled){var agent=boss.GetComponent<NavMeshAgent>();if(agent)agent.enabled=false;}
                GenerationMayhem.Art.LootChestHang.PlaceAll(GameObject.Find("Hyperdrive_L2").transform,true);
                EditorSceneManager.MarkSceneDirty(scene);EditorSceneManager.SaveScene(scene);Audit();
            }
            if(cmd=="fix-dock-chests"){
                if(EditorApplication.isPlayingOrWillChangePlaymode)throw new Exception("Stop Play before fixing Dock chests.");
                if(SceneManager.GetActiveScene().isDirty)throw new Exception("Save current scene explicitly first.");
                var scene=EditorSceneManager.OpenScene("Assets/Scenes/Dockyard.unity");
                GenerationMayhem.Art.LootChestHang.PlaceAll(GameObject.Find("Breakables_Crates")?.transform,false);
                EditorSceneManager.MarkSceneDirty(scene);EditorSceneManager.SaveScene(scene);Audit();
            }
            if(cmd=="test-chests"&&EditorApplication.isPlaying){
                foreach(var n in new[]{"LootChest_WoodGold","LootChest_LavaGlyph"}){
                    var g=GameObject.Find(n);var b=g?g.GetComponent<Breakable>():null;
                    if(b){b.Hit();b.Hit();File.AppendAllText(Path.Combine(Dir,"chest-test.txt"),n+" state="+b.State+" visible="+g.GetComponentsInChildren<Renderer>().Count(r=>r.enabled&&r.gameObject.activeInHierarchy)+" solid="+g.GetComponents<Collider>().Count(c=>c.enabled)+"\n");}
                }
            }
            if(cmd=="probe-recovery"&&EditorApplication.isPlaying){
                var p=Object.FindFirstObjectByType<SkatePawnController>();var cc=p.GetComponent<CharacterController>();cc.enabled=false;p.transform.position=new Vector3(20,-12,7);cc.enabled=true;p.SetVelocity(new Vector3(30,-90,30));
            }
            if(cmd=="view-station"||cmd=="view-tower"){
                if(!EditorApplication.isPlaying||SceneManager.GetActiveScene().name!="Hyperdrive_L2")throw new Exception("Building proof requires HD Play.");
                var cam=Camera.main;foreach(var b in Object.FindObjectsByType<MonoBehaviour>(FindObjectsSortMode.None))if(b is TraversalCameraRig || b is GenerationMayhem.Traversal.CinemachineTraversalDirector || b.GetType().Name=="CinemachineBrain")b.enabled=false;
                var target=GameObject.Find(cmd=="view-station"?"GM_SpaceStation_raw_Prop":"GM_SciFi_Tower_raw_Prop").transform;
                var rs=target.GetComponentsInChildren<Renderer>();var bounds=rs[0].bounds;foreach(var r in rs)bounds.Encapsulate(r.bounds);
                var focus=bounds.center;cam.transform.SetPositionAndRotation(focus+new Vector3(cmd=="view-station"?35:-35,16,-32),Quaternion.LookRotation(focus-(focus+new Vector3(cmd=="view-station"?35:-35,16,-32))));cam.fieldOfView=58;
                // Runtime-only camera framing. No scene camera changes are saved.
            }
            File.WriteAllText(Path.Combine(Dir,"last-command.txt"),cmd+" OK playing="+EditorApplication.isPlaying+" scene="+SceneManager.GetActiveScene().name);
        }catch(Exception e){File.WriteAllText(Path.Combine(Dir,"last-command.txt"),cmd+" FAILED "+e);Debug.LogException(e);}
    }
    static void Audit(){
        var scene=SceneManager.GetActiveScene();var s=new StringBuilder();
        s.AppendLine("scene="+scene.name+" playing="+EditorApplication.isPlaying+" dirty="+scene.isDirty);
        s.AppendLine("Brutes="+Object.FindObjectsByType<IronRoseBrute>(FindObjectsSortMode.None).Length+" Slither="+Object.FindObjectsByType<SlitherBoss>(FindObjectsInactive.Include,FindObjectsSortMode.None).Length+" ViperGrunts="+Object.FindObjectsByType<ViperGrunt>(FindObjectsSortMode.None).Length+" SoftVipers="+Object.FindObjectsByType<SoftViper>(FindObjectsSortMode.None).Length+" RefBots="+Object.FindObjectsByType<GenerationMayhem.Flow.RefBot>(FindObjectsSortMode.None).Length+" MedBots="+Object.FindObjectsByType<GenerationMayhem.Flow.MedBot>(FindObjectsSortMode.None).Length);
        foreach(var t in scene.GetRootGameObjects().SelectMany(g=>g.GetComponentsInChildren<Transform>(true))){
            int missing=GameObjectUtility.GetMonoBehavioursWithMissingScriptCount(t.gameObject);if(missing>0)s.AppendLine("MISSING_SCRIPT "+Full(t)+" count="+missing);
            var mf=t.GetComponent<MeshFilter>();var rr=t.GetComponent<Renderer>();if(rr&&rr.enabled&&rr.gameObject.activeInHierarchy&&mf&&mf.sharedMesh&&mf.sharedMesh.name=="Capsule")s.AppendLine("VISIBLE_CAPSULE "+Full(t));
            if(t.name.EndsWith("_Prop")||t.name.EndsWith("_Pad")||t.name.StartsWith("Viper_")||t.name.StartsWith("LootChest_")||t.name=="Slither"||t.GetComponent<SkatePawnController>()){
                var rs=t.GetComponentsInChildren<Renderer>(true);s.AppendLine(Full(t)+" position="+t.position+" yaw="+t.eulerAngles.y+" renderers="+rs.Length+" visible="+rs.Count(r=>r.enabled&&r.gameObject.activeInHierarchy));
                if(rs.Length>0){var b=rs[0].bounds;foreach(var r in rs)b.Encapsulate(r.bounds);s.AppendLine(" bounds min="+b.min+" max="+b.max+" size="+b.size);}
                if(t.GetComponent<Breakable>()){var so=new SerializedObject(t.GetComponent<Breakable>());s.AppendLine(" Breakable intactRoot="+so.FindProperty("intactRoot").objectReferenceValue);}
                if(t.GetComponent<HyperdriveSmashable>())s.AppendLine(" HyperdriveSmashable=true");
            }
            var a=t.GetComponent<NavMeshAgent>();if(a)s.AppendLine("AGENT "+Full(t)+" enabled="+a.enabled+" onNavMesh="+(EditorApplication.isPlaying&&a.enabled?a.isOnNavMesh:false));
        }
        var path=Path.Combine(Dir,scene.name+(EditorApplication.isPlaying?"-play":"-saved")+"-audit.txt");File.WriteAllText(path,s.ToString());Debug.Log("[GM wire debug] "+path);
    }
}
#endif