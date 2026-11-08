using UnityEngine;
using UnityEngine.SceneManagement;
using GenerationMayhem.Traversal;
namespace GenerationMayhem.Player
{
    // Scene-specific recovery envelopes sit OUTSIDE the existing floors, not inside the playable lane.
    [DefaultExecutionOrder(1000)]
    public class SharedFallRecovery : MonoBehaviour
    {
        public const float KillY = -8f;
        Vector3 spawn; Quaternion facing; SkatePawnController pawn;
        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterSceneLoad)]
        static void Boot() { SceneManager.sceneLoaded -= Attach; SceneManager.sceneLoaded += Attach; Attach(SceneManager.GetActiveScene(), LoadSceneMode.Single); }
        static void Attach(Scene s, LoadSceneMode m) {
            foreach (var p in Object.FindObjectsByType<SkatePawnController>(FindObjectsSortMode.None))
                if (!p.GetComponent<SharedFallRecovery>()) p.gameObject.AddComponent<SharedFallRecovery>();
        }
        void Start() { pawn=GetComponent<SkatePawnController>(); spawn=transform.position; facing=transform.rotation; Debug.Log("[Fall recovery] Armed " + gameObject.scene.name + " Y < -8; spawn="+spawn); }
        void LateUpdate() {
            var p=transform.position; string scene=gameObject.scene.name;
            bool outside=scene=="Hyperdrive_L2" ? Mathf.Abs(p.x)>16f || p.z < -2f || p.z>219f
                : scene=="Dockyard" || scene=="CityBlock_Slice" ? p.x < -64f || p.x>44f || p.z < -8f || p.z>34f : false;
            if (p.y<KillY || outside) Respawn();
        }
        public void Respawn() {
            var cc=GetComponent<CharacterController>(); bool wasEnabled=cc && cc.enabled;
            if(cc) cc.enabled=false;
            var tr=GetComponent<SkaterTraversal>(); if(tr) tr.ResetTraversal();
            pawn.SetVelocity(Vector3.zero);
            transform.SetPositionAndRotation(spawn, facing);
            var rb=GetComponent<Rigidbody>(); if(rb && !rb.isKinematic) { rb.linearVelocity=Vector3.zero; rb.angularVelocity=Vector3.zero; }
            if(cc) cc.enabled=wasEnabled;
            Physics.SyncTransforms();
            foreach(var rig in Object.FindObjectsByType<TraversalCameraRig>(FindObjectsSortMode.None)) if(rig.target==tr) rig.SnapToTarget();
            foreach(var rig in Object.FindObjectsByType<CinemachineTraversalDirector>(FindObjectsSortMode.None)) if(rig.target==tr) rig.SnapToTarget();
            foreach(var ally in Object.FindObjectsByType<GenerationMayhem.Hyperdrive.HyperdriveAllyKit>(FindObjectsSortMode.None)) {
                if(ally.follow!=transform) continue;
                var at=spawn+facing*ally.offset; at.z=Mathf.Max(1f,at.z); ally.transform.position=at;
            }
            Debug.Log("["+(gameObject.scene.name=="Hyperdrive_L2"?"Hyperdrive L2":gameObject.scene.name)+"] Fell off the lane — respawned. spawn="+spawn);
        }
    }
}
