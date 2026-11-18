#if UNITY_EDITOR
using System;
using System.IO;
using System.Linq;
using System.Text;
using UnityEditor;
using UnityEditor.Animations;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.AI;
using GenerationMayhem.Art;
using GenerationMayhem.Player;
using GenerationMayhem.Match;
using GenerationMayhem.Hyperdrive;
using GenerationMayhem.Traversal;
using Object=UnityEngine.Object;
public static class GMWarRigReview
{
    const string Folder="Assets/Resources/WarRigs/Prepared";
    static string Dir=>Path.Combine(Path.GetTempPath(),"GM-wire-debug");
    static string Model(string who)=>Folder+"/GM_"+who+"_WarRig_Prepared.glb";
    static string[] Girls=>new[]{"Vixen","Payton","Brianna","Kailee"};
    public static void Command(string cmd){
        if(cmd=="rig-audit")ImportAudit();
        if(cmd=="rig-controllers")Controllers();
        if(cmd=="rig-hang-dock"||cmd=="rig-hang-hd"){
            if(EditorApplication.isPlayingOrWillChangePlaymode)throw new Exception("Stop Play before baking prepared rigs.");
            if(SceneManager.GetActiveScene().isDirty)throw new Exception("Save current scene explicitly before changing scenes.");
            var scene=EditorSceneManager.OpenScene("Assets/Scenes/"+(cmd=="rig-hang-dock"?"Dockyard":"Hyperdrive_L2")+".unity");
            foreach(var pair in Roots())WarRigTireStandIn.Apply(pair.root,pair.who);
            EditorSceneManager.MarkSceneDirty(scene);EditorSceneManager.SaveScene(scene);AssetDatabase.SaveAssets();LiveAudit();
        }
        if(cmd=="rig-live-audit")LiveAudit();
        if(cmd.StartsWith("rig-lineup"))Lineup(cmd.EndsWith("-back"));
    }
    static System.Collections.Generic.IEnumerable<(Transform root,WarRigWho who)> Roots(){
        foreach(var p in Object.FindObjectsByType<SkatePawnController>(FindObjectsSortMode.None))yield return(p.transform,WarRigWho.Vixen);
        foreach(var p in Object.FindObjectsByType<AllyAI>(FindObjectsSortMode.None))yield return(p.transform,(WarRigWho)Enum.Parse(typeof(WarRigWho),p.role.ToString()));
        foreach(var p in Object.FindObjectsByType<HyperdriveAllyKit>(FindObjectsSortMode.None))yield return(p.transform,(WarRigWho)Enum.Parse(typeof(WarRigWho),p.who.ToString()));
    }
    static void Controllers(){
        if(EditorApplication.isPlaying)throw new Exception("Stop Play before creating review controllers.");
        Directory.CreateDirectory(Folder+"/Controllers");Directory.CreateDirectory(Folder+"/Clips");AssetDatabase.Refresh();
        foreach(var who in Girls){
            var clips=AssetDatabase.LoadAllAssetsAtPath(Model(who)).OfType<AnimationClip>().Where(c=>!c.name.StartsWith("__preview__")).ToArray();
            if(clips.Length<27)throw new Exception(who+" did not import all prepared clips.");
            var cp=Folder+"/Controllers/AC_"+who+"_Prepared.controller";
            var controller=AssetDatabase.LoadAssetAtPath<AnimatorController>(cp);
            if(!controller)controller=AnimatorController.CreateAnimatorControllerAtPath(cp);
            var machine=controller.layers[0].stateMachine;
            foreach(var source in clips){
                var ap=Folder+"/Clips/"+who+"_"+source.name+".anim";
                var clip=AssetDatabase.LoadAssetAtPath<AnimationClip>(ap);
                if(!clip){clip=Object.Instantiate(source);clip.name=source.name;var settings=AnimationUtility.GetAnimationClipSettings(clip);settings.loopTime=source.name=="Idle_Skate"||source.name.StartsWith("Locomotion_")||source.name.StartsWith("Strafe_");AnimationUtility.SetAnimationClipSettings(clip,settings);AssetDatabase.CreateAsset(clip,ap);}
                var state=machine.states.Select(x=>x.state).FirstOrDefault(x=>x.name==source.name)??machine.AddState(source.name);
                state.motion=clip;if(source.name=="Idle_Skate")machine.defaultState=state;
            }
            EditorUtility.SetDirty(controller);
        }
        AssetDatabase.SaveAssets();ImportAudit();
    }
    static void ImportAudit(){var s=new StringBuilder();foreach(var who in Girls){
        var path=Model(who);var p=AssetDatabase.LoadAssetAtPath<GameObject>(path);
        s.AppendLine(who+" prefab="+(p?p.name:"MISSING")+" importer="+AssetImporter.GetAtPath(path)?.GetType());if(!p)continue;
        s.AppendLine("renderers="+p.GetComponentsInChildren<Renderer>(true).Length+" skinned="+p.GetComponentsInChildren<SkinnedMeshRenderer>(true).Length+" animators="+p.GetComponentsInChildren<Animator>(true).Length);
        foreach(var c in AssetDatabase.LoadAllAssetsAtPath(path).OfType<AnimationClip>())s.AppendLine("clip="+c.name+" legacy="+c.legacy+" duration="+c.length);
        s.AppendLine("sockets="+string.Join(",",p.GetComponentsInChildren<Transform>(true).Where(t=>t.name.StartsWith("Socket_")).Select(t=>t.name)));
    }File.WriteAllText(Path.Combine(Dir,"prepared-import-audit.txt"),s.ToString());}
    static void LiveAudit(){
        var s=new StringBuilder();var scene=SceneManager.GetActiveScene();s.AppendLine(scene.name+" playing="+EditorApplication.isPlaying+" paused="+EditorApplication.isPaused+" time="+Time.time+" timeScale="+Time.timeScale+" delta="+Time.deltaTime);
        foreach(var pair in Roots()){
            var h=pair.root.Find("WarRigMesh");var rs=h?h.GetComponentsInChildren<SkinnedMeshRenderer>(true):new SkinnedMeshRenderer[0];var a=h?h.GetComponentInChildren<Animator>(true):null;
            s.AppendLine(pair.who+" root="+pair.root.name+" model="+(h&&h.childCount>0?h.GetChild(0).name:"MISSING")+" skinned="+rs.Length+" bones="+rs.SelectMany(r=>r.bones).Where(b=>b).Distinct().Count()+" sockets="+(h?h.GetComponentsInChildren<Transform>(true).Count(t=>t.name.StartsWith("Socket_")):0)+" controller="+(a?a.runtimeAnimatorController:null)+" rootMotion="+(a&&a.applyRootMotion));
            if(a&&EditorApplication.isPlaying)s.AppendLine(" animator enabled="+a.enabled+" active="+a.gameObject.activeInHierarchy+" state="+a.GetCurrentAnimatorStateInfo(0).shortNameHash+" normalizedTime="+a.GetCurrentAnimatorStateInfo(0).normalizedTime);
            s.AppendLine(" visibleSoft="+pair.root.GetComponentsInChildren<Renderer>(true).Count(r=>r.enabled&&r.gameObject.activeInHierarchy&&r.transform.GetComponentsInParent<Transform>(true).Any(t=>t.name.Contains("_Soft")))+" rootPhysics="+string.Join(",",pair.root.GetComponents<Collider>().Select(c=>c.GetType().Name+":"+c.enabled)));
        }
        File.WriteAllText(Path.Combine(Dir,scene.name+"-prepared-"+(EditorApplication.isPlaying?"play":"saved")+"-audit.txt"),s.ToString());
    }
    static void Lineup(bool back){
        if(!EditorApplication.isPlaying||SceneManager.GetActiveScene().name!="Dockyard")throw new Exception("Review lineup requires Dock Play; no saved scene repositioning.");
        foreach(var b in Object.FindObjectsByType<IronRoseBrute>(FindObjectsSortMode.None))b.enabled=false;
        var roots=Roots().OrderBy(p=>Array.IndexOf(Girls,p.who.ToString())).ToArray();
        for(int i=0;i<roots.Length;i++){
            var t=roots[i].root;foreach(var agent in t.GetComponents<NavMeshAgent>())agent.enabled=false;
            var ai=t.GetComponent<AllyAI>();if(ai)ai.enabled=false;var hd=t.GetComponent<HyperdriveAllyKit>();if(hd)hd.enabled=false;
            var pawn=t.GetComponent<SkatePawnController>();if(pawn){pawn.ExternalControl=true;pawn.SetVelocity(Vector3.zero);}
            var tr=t.GetComponent<SkaterTraversal>();if(tr)tr.enabled=false;var recovery=t.GetComponent<SharedFallRecovery>();if(recovery)recovery.enabled=false;
            var kb=t.GetComponent<GenerationMayhem.Combat.KnockbackBody>();if(kb)kb.enabled=false;
            var cc=t.GetComponent<CharacterController>();if(cc)cc.enabled=false;t.SetPositionAndRotation(new Vector3(15.5f+i*3f,.05f,3),Quaternion.Euler(0,180,0));if(cc)cc.enabled=true;
            var a=t.Find("WarRigMesh")?.GetComponentInChildren<Animator>(true);if(a){a.Play("Idle_Skate");a.Update(.1f);}
        }
        var cam=Camera.main;foreach(var b in Object.FindObjectsByType<MonoBehaviour>(FindObjectsSortMode.None))if(b is TraversalCameraRig||b is CinemachineTraversalDirector||b.GetType().Name=="CinemachineBrain")b.enabled=false;
        var cameraPosition=new Vector3(20,2.3f,back?14:-8);cam.transform.SetPositionAndRotation(cameraPosition,Quaternion.LookRotation(new Vector3(20,1,3)-cameraPosition));cam.fieldOfView=54;
        Physics.SyncTransforms();LiveAudit();
    }
}
#endif