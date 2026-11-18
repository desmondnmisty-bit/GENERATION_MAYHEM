// Structural Tripo scenery must collide with the pawn, not merely look solid.
// Per-part, non-convex static mesh collision preserves ramps, openings, stairs and decks.
// Never runs on war rigs, characters, portals or smashable clutter.
using UnityEngine;
using UnityEngine.SceneManagement;
using GenerationMayhem.Hyperdrive;
using GenerationMayhem.Traversal;
namespace GenerationMayhem.Art
{
    public static class WorldStructureCollision
    {
        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterSceneLoad)]
        static void Boot(){SceneManager.sceneLoaded-=Loaded;SceneManager.sceneLoaded+=Loaded;ApplyScene(SceneManager.GetActiveScene());}
        static void Loaded(Scene s,LoadSceneMode mode)=>ApplyScene(s);
        public static int ApplyScene(Scene scene)
        {
            int added=0;
            foreach(var root in scene.GetRootGameObjects())
                foreach(var t in root.GetComponentsInChildren<Transform>(true))
                    if(t.name=="SplitDeckKit" || t.name==WorldPropHang.RoadwayMagentaRamp+"_Prop" || t.name=="GM_SpaceStation_raw_Prop" || t.name=="GM_SciFi_Tower_raw_Prop")
                        added+=Ensure(t);
            return added;
        }
        public static int Ensure(Transform root)
        {
            int added=0;
            foreach(var mf in root.GetComponentsInChildren<MeshFilter>(true))
            {
                var r=mf.GetComponent<Renderer>();
                if(!mf.sharedMesh||!r||!r.enabled||mf.name.StartsWith("UCX_"))continue;
                if(mf.GetComponentInParent<HyperdriveSmashable>()||mf.GetComponentInParent<Breakable>()||mf.GetComponentInParent<Rigidbody>())continue;
                bool solid=false;foreach(var c in mf.GetComponents<Collider>())if(c.enabled&&!c.isTrigger){solid=true;break;}
                if(solid)continue;
                var mesh=mf.gameObject.AddComponent<MeshCollider>();
                mesh.sharedMesh=mf.sharedMesh;mesh.convex=false;mesh.isTrigger=false;added++;
            }
            return added;
        }
    }
}