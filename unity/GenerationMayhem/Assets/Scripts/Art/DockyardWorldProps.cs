// Dockyard saved-plaza dressing. The Unity Dock is x[-60,40], z[0,30], not the web berth lane.
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
namespace GenerationMayhem.Art
{
 public static class DockyardWorldProps
 {
  public const string RootName="GM_WorldProps_Dockyard";
  public const float GateZ=27f;
  [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterSceneLoad)]
  static void Boot(){SceneManager.sceneLoaded+=(s,_)=>OnScene(s);OnScene(SceneManager.GetActiveScene());}
  static void OnScene(Scene s){if(s.name==GenerationMayhem.UI.GMFlow.FightScene)Hang();}
  public static List<WorldPropHang.KitSlot> DeckSlots(){
   var slots=new List<WorldPropHang.KitSlot>();
   float[] xs={2,5,8,11,14,17,23,26,29,32,35,38};
   for(int row=0;row<10;row++) foreach(float x in xs){
    float z=9+row*2;
    if(x>=4 && x<=14 && z>=10 && z<=20)continue; // keep the magenta ramp footprint clear
    if(x>=24 && x<=32 && z>=24)continue; // portal approach
    slots.Add(new WorldPropHang.KitSlot(new Vector3(x,0,z),(row%2)*180,2.2f));
   }
   for(int row=0;slots.Count<176;row++)for(int col=0;col<17 && slots.Count<176;col++)
    slots.Add(new WorldPropHang.KitSlot(new Vector3(-57+col*3.25f,0,8.5f+row*1.5f),(col%2)*90,2.5f));
   return slots;
  }
  public static Transform Hang(){
   var old=GameObject.Find(RootName);if(old)return old.transform;
   var root=new GameObject(RootName).transform;
   WorldPropHang.Hang(WorldPropHang.RoadwayMagentaRamp,root,new Vector3(9,0,15),180,8);
   WorldPropHang.Hang(WorldPropHang.PortalPurpleGate,root,new Vector3(28,0,GateZ),0,5,WorldPropHang.Fit.Height);
   WorldPropHang.HangSplitDeckKit(root,"SplitDeckKit",DeckSlots());
   return root;
  }
 }
}
