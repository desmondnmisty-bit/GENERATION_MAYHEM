#if UNITY_EDITOR
using System;
using System.IO;
using System.Linq;
using System.Text;
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;
using GenerationMayhem.Art;
using GenerationMayhem.Player;
using GenerationMayhem.Traversal;
using GenerationMayhem.Hyperdrive;
using Object=UnityEngine.Object;
public static class GMWallDebug
{
    static string Dir=>Path.Combine(Path.GetTempPath(),"GM-wire-debug");
    static readonly string[] StructureNames={"SplitDeckKit","GM_Roadway_MagentaRamp_raw_Prop","GM_SpaceStation_raw_Prop","GM_SciFi_Tower_raw_Prop"};
    public static void Command(string cmd){
        if(cmd=="wall-audit")Audit();
        if(cmd=="wall-fix-dock"||cmd=="wall-fix-hd"){
            if(EditorApplication.isPlayingOrWillChangePlaymode)throw new Exception("Stop Play before saving structural collision.");
            if(SceneManager.GetActiveScene().isDirty)throw new Exception("Save explicitly before changing scenes.");
            var name=cmd=="wall-fix-dock"?"Dockyard":"Hyperdrive_L2";
            var scene=EditorSceneManager.OpenScene("Assets/Scenes/"+name+".unity");
            int added=WorldStructureCollision.ApplyScene(scene);
            EditorSceneManager.MarkSceneDirty(scene);EditorSceneManager.SaveScene(scene);
            File.AppendAllText(Path.Combine(Dir,"wall-fixes.txt"),name+" added static mesh colliders="+added+"\n");Audit();
        }
        if(cmd=="wall-probe")Probe();
    }
    static void Audit(){
        var scene=SceneManager.GetActiveScene();var s=new StringBuilder();s.AppendLine(scene.name+" playing="+EditorApplication.isPlaying);
        var p=Object.FindFirstObjectByType<SkatePawnController>();if(p){var cc=p.Controller;s.AppendLine("player CC enabled="+cc.enabled+" detectCollisions="+cc.detectCollisions+" layer="+p.gameObject.layer+" radius="+cc.radius+" step="+cc.stepOffset+" slope="+cc.slopeLimit+" ignoreDefault="+Physics.GetIgnoreLayerCollision(p.gameObject.layer,0));}
        foreach(var n in StructureNames){var g=GameObject.Find(n);if(!g)continue;var cols=g.GetComponentsInChildren<Collider>(true);s.AppendLine(n+" meshes="+g.GetComponentsInChildren<MeshFilter>(true).Length+" colliders="+cols.Length+" solid="+cols.Count(c=>c.enabled&&!c.isTrigger)+" convex="+cols.OfType<MeshCollider>().Count(c=>c.convex));}
        var smash=Object.FindObjectsByType<HyperdriveSmashable>(FindObjectsInactive.Include,FindObjectsSortMode.None);s.AppendLine("HyperdriveSmashables="+smash.Length+" structuralMeshesOnSmashables="+smash.Sum(g=>g.GetComponentsInChildren<MeshCollider>(true).Length));
        s.AppendLine("Rails="+Object.FindObjectsByType<GrindRail>(FindObjectsSortMode.None).Length+" kickers="+Object.FindObjectsByType<KickerRamp>(FindObjectsSortMode.None).Length);
        File.WriteAllText(Path.Combine(Dir,scene.name+"-wall-"+(EditorApplication.isPlaying?"play":"saved")+"-audit.txt"),s.ToString());
    }
    static bool Surface(Transform root,float y,out RaycastHit best){
        best=default;var rs=root.GetComponentsInChildren<Renderer>().Where(r=>r.enabled).ToArray();if(rs.Length==0)return false;var b=rs[0].bounds;foreach(var r in rs)b.Encapsulate(r.bounds);
        var colliders=root.GetComponentsInChildren<Collider>().Where(c=>c.enabled&&!c.isTrigger).ToArray();
        foreach(float frac in new[]{.5f,.25f,.75f,.1f,.9f})foreach(var d in new[]{Vector3.right,Vector3.left,Vector3.forward,Vector3.back}){
            var cross=b.center;cross.y=y;
            if(Mathf.Abs(d.x)>.5f)cross.z=Mathf.Lerp(b.min.z,b.max.z,frac);else cross.x=Mathf.Lerp(b.min.x,b.max.x,frac);
            var origin=cross-d*(Mathf.Max(b.size.x,b.size.z)+3f);var ray=new Ray(origin,d);bool found=false;float distance=float.MaxValue;
            foreach(var c in colliders)if((root.name!="SplitDeckKit"||(c.bounds.max.y>1.8f&&c.bounds.size.y>1.5f))&&c.Raycast(ray,out var hit,100f)&&Mathf.Abs(hit.normal.y)<.25f&&hit.distance<distance){best=hit;distance=hit.distance;found=true;}
            if(!found)continue;
            var normal=new Vector3(best.normal.x,0,best.normal.z).normalized;var start=best.point+normal*1.4f;start.y=.08f;
            // A real floor/pad must support the approach; never add test-only walls or floors.
            if(!Physics.Raycast(start+Vector3.up*.5f,Vector3.down,out var ground,2f,~0,QueryTriggerInteraction.Ignore)||Mathf.Abs(ground.point.y)>.25f)continue;
            return true;
        }return false;
    }
    static void Place(SkatePawnController p,Vector3 at){var cc=p.Controller;cc.enabled=false;p.transform.position=at;p.SetVelocity(Vector3.zero);cc.enabled=true;Physics.SyncTransforms();}
    static void Probe(){
        if(!EditorApplication.isPlaying)throw new Exception("wall-probe requires Play.");
        var scene=SceneManager.GetActiveScene();var pawn=Object.FindFirstObjectByType<SkatePawnController>();if(!pawn)throw new Exception("No player.");
        Audit();var lines=new StringBuilder();var cc=pawn.Controller;
        var original=pawn.transform.position;var facing=pawn.transform.rotation;bool external=pawn.ExternalControl;
        var traversal=pawn.GetComponent<SkaterTraversal>();bool traversalOn=traversal&&traversal.enabled;if(traversal)traversal.enabled=false;
        var recovery=pawn.GetComponent<SharedFallRecovery>();bool recoveryOn=recovery&&recovery.enabled;if(recovery)recovery.enabled=false;
        pawn.ExternalControl=true;
        try{
            var names=scene.name=="Dockyard"?new[]{"SplitDeckKit","CityBlock_Slice/ZoneB_ContainerStreet/Stacks_North_WallRide"}:new[]{"Hyperdrive_L2/Approach/WallW","Hyperdrive_L2/Corridor/WallE","GM_SpaceStation_raw_Prop","GM_SciFi_Tower_raw_Prop"};
            foreach(var name in names){
                var g=GameObject.Find(name);if(!g){lines.AppendLine("SKIP missing target="+name);continue;}
                if(!Surface(g.transform,.95f,out var hit)){lines.AppendLine("FAIL no approachable vertical wall="+name);continue;}
                var normal=new Vector3(hit.normal.x,0,hit.normal.z).normalized;var start=hit.point+normal*1.4f;start.y=.08f;Place(pawn,start);pawn.transform.rotation=Quaternion.LookRotation(-normal);
                CollisionFlags flags=0;for(int i=0;i<20;i++)flags|=pawn.MoveExternal(-normal*(11.76f/60f)+Vector3.down*.025f);
                var end=pawn.transform.position;float signed=Vector3.Dot(end-hit.point,normal);bool pass=signed>.1f&&(flags&CollisionFlags.Sides)!=0;
                lines.AppendLine((pass?"PASS":"FAIL")+" wall="+name+" hit="+hit.collider.name+" start="+start+" end="+end+" outwardDistance="+signed.ToString("F3")+" flags="+flags+" normal="+normal+" wallBounds="+hit.collider.bounds+" requestedTravel=3.92m at 11.76m/s via actual pawn MoveExternal");
            }
            if(scene.name=="Dockyard"){
                var ramp=GameObject.Find("GM_Roadway_MagentaRamp_raw_Prop");if(ramp)Rideable(pawn,ramp.transform,lines);
            }else{
                foreach(var path in new[]{"Hyperdrive_L2/Approach/Floor","Hyperdrive_L2/Rideables/Kicker_0_10","Hyperdrive_L2/Apex/SilverStair_3","Hyperdrive_L2/Rideables/GrindRail_-3_18"}){var g=GameObject.Find(path);if(g)Rideable(pawn,g.transform,lines);}
                foreach(var n in new[]{"LootChest_WoodGold","LootChest_LavaGlyph"}){
                    var g=GameObject.Find(n);if(!g)continue;var smash=g.GetComponent<HyperdriveSmashable>();var col=g.GetComponent<Collider>();if(!smash||!col)continue;var b=col.bounds;Place(pawn,new Vector3(b.center.x,.08f,b.min.z-1.4f));
                    for(int i=0;i<40;i++)pawn.MoveExternal(Vector3.forward*(11.76f/60f)+Vector3.down*.02f);
                    bool pass=!g.GetComponentsInChildren<Collider>().Any(c=>c.enabled)&&!g.GetComponentsInChildren<Renderer>().Any(r=>r.enabled);
                    lines.AppendLine((pass?"PASS":"FAIL")+" smashable="+n+" broke on actual player side impact; end="+pawn.transform.position);
                }
            }
        }finally{
            Place(pawn,original);pawn.transform.rotation=facing;pawn.ExternalControl=external;if(traversal)traversal.enabled=traversalOn;if(recovery)recovery.enabled=recoveryOn;
        }
        File.WriteAllText(Path.Combine(Dir,scene.name+"-wall-probes.txt"),lines.ToString());Debug.Log("[GM wall tests]\n"+lines);
    }
    static void Rideable(SkatePawnController p,Transform root,StringBuilder lines){
        RaycastHit best=default;bool found=false;float high=float.MinValue;
        foreach(var col in root.GetComponentsInChildren<Collider>()){
            if(!col.enabled||col.isTrigger)continue;var b=col.bounds;
            foreach(var frac in new[]{.5f,.25f,.75f}){
                var ray=new Ray(new Vector3(Mathf.Lerp(b.min.x,b.max.x,frac),b.max.y+2,b.center.z),Vector3.down);
                if(col.Raycast(ray,out var h,b.size.y+4)&&h.normal.y>.65f&&h.point.y>high){best=h;high=h.point.y;found=true;}
            }
        }
        if(!found){lines.AppendLine("FAIL no rideable surface="+root.name);return;}
        Place(p,best.point+Vector3.up*1.2f);var flags=p.MoveExternal(Vector3.down*2f);float gap=p.transform.position.y-best.point.y;// The capsule spans adjacent 0.6m stair treads; accept the next tread plus skin width, not a fall-through.
        float allowedGap=root.name.StartsWith("SilverStair_") ? .75f : .5f;bool pass=(flags&CollisionFlags.Below)!=0&&gap>-.2f&&gap<allowedGap;
        lines.AppendLine((pass?"PASS":"FAIL")+" rideable="+root.name+" collider="+best.collider.name+" normal="+best.normal+" gap="+gap.ToString("F3")+" flags="+flags);
    }
}
#endif