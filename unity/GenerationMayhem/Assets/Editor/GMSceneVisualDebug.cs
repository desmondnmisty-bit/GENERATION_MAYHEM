#if UNITY_EDITOR
using System;
using System.IO;
using System.Linq;
using System.Text;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.Rendering;
using Unity.Cinemachine;
using GenerationMayhem.Art;
using GenerationMayhem.Traversal;
using GenerationMayhem.Player;
using Object=UnityEngine.Object;
public static class GMSceneVisualDebug
{
    static string Dir=>Path.Combine(Path.GetTempPath(),"GM-wire-debug");
    public static void Command(string cmd){
        if(cmd=="visual-audit")Audit();
        if(cmd=="visual-tune-dock"||cmd=="visual-tune-hd")Tune(cmd.EndsWith("-dock"));
        if(cmd=="visual-camera-probe")Probe();
        if(cmd=="visual-portal-proof")PortalProof();
    }
    static void Tune(bool dock){
        if(EditorApplication.isPlayingOrWillChangePlaymode)throw new Exception("Stop Play before saving camera and sky wiring.");
        if(SceneManager.GetActiveScene().isDirty)throw new Exception("Save current scene explicitly first.");
        var scene=EditorSceneManager.OpenScene("Assets/Scenes/"+(dock?"Dockyard":"Hyperdrive_L2")+".unity");
        var cam=Camera.main;var pawn=Object.FindFirstObjectByType<SkatePawnController>();var target=pawn.GetComponent<SkaterTraversal>();
        var director=Object.FindFirstObjectByType<CinemachineTraversalDirector>();
        var rig=cam.GetComponent<TraversalCameraRig>()??cam.gameObject.AddComponent<TraversalCameraRig>();
        rig.target=target;rig.groundDistance=4f;rig.groundHeight=1.15f;rig.groundPitch=12f;rig.airDistance=5f;rig.airPitch=16f;rig.combatMaxDistance=5.8f;rig.combatExtraDistancePerMeter=.12f;rig.enabled=director==null;
        if(director){director.target=target;director.groundDistance=4f;director.proxyHeight=1.15f;director.groundPitch=12f;director.airDistance=5f;director.airPitch=16f;director.combatMaxDistance=5.8f;director.combatExtraDistancePerMeter=.24f;
            foreach(var v in new[]{director.traversalCam,director.combatCam})if(v){var lens=v.Lens;lens.FieldOfView=50;lens.NearClipPlane=.15f;v.Lens=lens;var body=v.GetComponent<CinemachineThirdPersonFollow>();if(body){body.CameraDistance=4;body.ShoulderOffset=Vector3.zero;body.VerticalArmLength=0;}}
        }
        cam.fieldOfView=50;cam.nearClipPlane=.15f;cam.clearFlags=CameraClearFlags.Skybox;
        // Reuse the project's already approved sky images, not a newly generated sky.
        var texPath=dock?"Assets/Resources/Skies/DockNight/GM_Sky_DockNight_Equirect_PoleFade.png":"Assets/Resources/Skies/Hyperdrive/GM_Sky_Hyperdrive_Panorama_v001.jpg";
        var importer=AssetImporter.GetAtPath(texPath) as TextureImporter;if(importer==null)throw new Exception("Existing sky texture not imported: "+texPath);
        importer.wrapModeU=TextureWrapMode.Repeat;importer.wrapModeV=TextureWrapMode.Clamp;importer.mipmapEnabled=true;importer.maxTextureSize=4096;importer.SaveAndReimport();
        var matPath=dock?"Assets/Resources/Skies/DockNight/GM_DockNight_Panoramic.mat":"Assets/Resources/Skies/Hyperdrive/GM_Hyperdrive_Panoramic.mat";
        var mat=AssetDatabase.LoadAssetAtPath<Material>(matPath);if(!mat){mat=new Material(Shader.Find("Skybox/Panoramic"));AssetDatabase.CreateAsset(mat,matPath);}
        mat.SetTexture("_MainTex",AssetDatabase.LoadAssetAtPath<Texture2D>(texPath));mat.SetFloat("_Mapping",1);mat.SetFloat("_ImageType",0);mat.SetFloat("_Exposure",dock?1.1f:1f);mat.SetFloat("_Rotation",0);EditorUtility.SetDirty(mat);
        RenderSettings.skybox=mat;RenderSettings.ambientMode=AmbientMode.Skybox;
        var localSky=cam.GetComponent<Skybox>();if(localSky)localSky.material=mat;
        if(dock&&!GameObject.Find(WorldPropHang.PortalPurpleGate+"_Prop")){
            var root=GameObject.Find(DockyardWorldProps.RootName)??new GameObject(DockyardWorldProps.RootName);
            WorldPropHang.Hang(WorldPropHang.PortalPurpleGate,root.transform,new Vector3(28,0,27),0,5,WorldPropHang.Fit.Height);
        }
        if(rig.enabled)rig.SnapToTarget();else if(director){director.SnapToTarget();var q=Quaternion.Euler(12,pawn.transform.eulerAngles.y,0);cam.transform.SetPositionAndRotation(pawn.transform.position+Vector3.up*1.15f-q*Vector3.forward*4,q);}
        EditorSceneManager.MarkSceneDirty(scene);EditorSceneManager.SaveScene(scene);AssetDatabase.SaveAssets();Audit();
    }
    static void Audit(){
        var s=new StringBuilder();var scene=SceneManager.GetActiveScene();var cam=Camera.main;var pawn=Object.FindFirstObjectByType<SkatePawnController>();
        s.AppendLine(scene.name+" playing="+EditorApplication.isPlaying+" sky="+RenderSettings.skybox+" skyTexture="+RenderSettings.skybox?.GetTexture("_MainTex")+" ambient="+RenderSettings.ambientMode);
        if(cam){s.AppendLine("camera="+cam.transform.position+" clearFlags="+cam.clearFlags+" FOV="+cam.fieldOfView+" near="+cam.nearClipPlane+" components="+string.Join(",",cam.GetComponents<Component>().Where(c=>c).Select(c=>c.GetType().Name)));
            if(pawn)s.AppendLine("player="+pawn.transform.position+" offset="+(cam.transform.position-pawn.transform.position)+" distance="+Vector3.Distance(cam.transform.position,pawn.transform.position));}
        foreach(var r in Object.FindObjectsByType<TraversalCameraRig>(FindObjectsInactive.Include,FindObjectsSortMode.None))s.AppendLine("Fallback enabled="+r.enabled+" distance="+r.groundDistance+" height="+r.groundHeight+" pitch="+r.groundPitch+" air="+r.airDistance+" combatMax="+r.combatMaxDistance);
        foreach(var r in Object.FindObjectsByType<CinemachineTraversalDirector>(FindObjectsInactive.Include,FindObjectsSortMode.None))s.AppendLine("Cinemachine enabled="+r.enabled+" distance="+r.groundDistance+" proxyHeight="+r.proxyHeight+" air="+r.airDistance+" combatMax="+r.combatMaxDistance);
        var portal=GameObject.Find(WorldPropHang.PortalPurpleGate+"_Prop");if(portal){var rs=portal.GetComponentsInChildren<Renderer>(true);var b=rs[0].bounds;foreach(var r in rs)b.Encapsulate(r.bounds);s.AppendLine("portal="+portal.transform.position+" yaw="+portal.transform.eulerAngles.y+" height="+b.size.y+" renderers="+rs.Length+" activeVisible="+rs.Count(r=>r.enabled&&r.gameObject.activeInHierarchy));}else s.AppendLine("No existing portal slot in this scene.");
        File.WriteAllText(Path.Combine(Dir,scene.name+"-visual-"+(EditorApplication.isPlaying?"play":"saved")+"-audit.txt"),s.ToString());
    }
    static void Probe(){
        if(!EditorApplication.isPlaying)throw new Exception("Camera probe requires Play.");
        var pawn=Object.FindFirstObjectByType<SkatePawnController>();var cam=Camera.main;var start=pawn.transform.position;var cameraStart=cam.transform.position;bool external=pawn.ExternalControl;var tr=pawn.GetComponent<SkaterTraversal>();bool trEnabled=tr.enabled;tr.enabled=false;pawn.ExternalControl=true;
        pawn.MoveExternal(pawn.transform.forward*4f);double at=EditorApplication.timeSinceStartup+1.2;
        EditorApplication.CallbackFunction tick=null;tick=()=>{if(EditorApplication.timeSinceStartup<at)return;EditorApplication.update-=tick;
            var delta=pawn.transform.position-start;var cameraDelta=cam.transform.position-cameraStart;var offset=cam.transform.position-pawn.transform.position;float behind=Vector3.Dot((pawn.transform.position-cam.transform.position).normalized,pawn.transform.forward);
            File.WriteAllText(Path.Combine(Dir,SceneManager.GetActiveScene().name+"-camera-follow-probe.txt"),"playerDelta="+delta+" cameraDelta="+cameraDelta+" finalOffset="+offset+" distance="+offset.magnitude+" behindDot="+behind+" FOV="+cam.fieldOfView+" tracked="+(delta.magnitude>.5f&&cameraDelta.magnitude>.5f)+"\n");
            pawn.ExternalControl=external;tr.enabled=trEnabled;Audit();ScreenCapture.CaptureScreenshot(Path.Combine(Dir,SceneManager.GetActiveScene().name+"-close-camera-after.png"));
        };EditorApplication.update+=tick;
    }
    static void PortalProof(){
        if(!EditorApplication.isPlaying||SceneManager.GetActiveScene().name!="Dockyard")throw new Exception("Portal proof requires Dock Play.");
        var pawn=Object.FindFirstObjectByType<SkatePawnController>();var cc=pawn.Controller;cc.enabled=false;pawn.transform.SetPositionAndRotation(new Vector3(26,.05f,29),Quaternion.Euler(0,180,0));cc.enabled=true;pawn.SetVelocity(Vector3.zero);pawn.ExternalControl=true;var tr=pawn.GetComponent<SkaterTraversal>();if(tr)tr.enabled=false;var recovery=pawn.GetComponent<SharedFallRecovery>();if(recovery)recovery.enabled=false;
        foreach(var r in Object.FindObjectsByType<TraversalCameraRig>(FindObjectsSortMode.None))if(r.enabled)r.SnapToTarget();foreach(var r in Object.FindObjectsByType<CinemachineTraversalDirector>(FindObjectsSortMode.None))if(r.enabled)r.SnapToTarget();Physics.SyncTransforms();var camera=Camera.main;foreach(var r in Object.FindObjectsByType<TraversalCameraRig>(FindObjectsSortMode.None))r.enabled=false;foreach(var r in Object.FindObjectsByType<CinemachineTraversalDirector>(FindObjectsSortMode.None))r.enabled=false;var brain=camera.GetComponent<CinemachineBrain>();if(brain)brain.enabled=false;camera.fieldOfView=70;camera.transform.position=new Vector3(31.5f,3.2f,29);camera.transform.LookAt(new Vector3(28,2.5f,27));Audit();
    }
}
#endif