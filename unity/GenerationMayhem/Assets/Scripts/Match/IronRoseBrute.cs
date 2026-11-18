// Dockyard Iron Rose Syndicate fodder. Uses existing IRS_02 Iron Rose soldier asset, not any Viper mesh/type.
using System.Collections;
using UnityEngine;
using UnityEngine.AI;
using GenerationMayhem.Combat;
using GenerationMayhem.Traversal;
namespace GenerationMayhem.Match
{
    [RequireComponent(typeof(Health), typeof(NavMeshAgent))]
    public class IronRoseBrute : MonoBehaviour
    {
        public static int AliveCount { get { int n=0; foreach(var b in Object.FindObjectsByType<IronRoseBrute>(FindObjectsSortMode.None)) if(b.hp && b.hp.IsAlive) n++; return n; } }
        Health hp; NavMeshAgent agent; KnockbackBody kb; bool attacking; float nextAttack,nextPath;
        void Awake(){ hp=GetComponent<Health>(); agent=GetComponent<NavMeshAgent>(); kb=GetComponent<KnockbackBody>(); }
        void OnEnable(){ TraversalEvents.GruntOutOfMatch+=Out; hp.onDeath+=Died; }
        void OnDisable(){ TraversalEvents.GruntOutOfMatch-=Out; hp.onDeath-=Died; }
        void Out(GameObject g){if(g==gameObject) hp.RemoveFromMatch();}
        void Died(){ StopAllCoroutines(); attacking=false; Stop(); }
        void Stop(){if(agent && agent.enabled && agent.isOnNavMesh){agent.isStopped=true; agent.ResetPath();}}
        void Update(){
            if(!hp.IsAlive || MatchDirector.IsOver){Stop();return;}
            if(attacking || !agent.enabled || !agent.isOnNavMesh || kb && (kb.InKnockback || kb.IsStunned))return;
            Health target=null; float best=float.MaxValue;
            foreach(var h in Health.All) if(h && h.team==Team.Family && h.IsAlive){float d=(h.transform.position-transform.position).sqrMagnitude;if(d<best){best=d;target=h;}}
            if(!target){Stop();return;}
            var dir=target.transform.position-transform.position;dir.y=0;
            if(dir.magnitude>1.8f){agent.isStopped=false;if(Time.time>=nextPath){agent.SetDestination(target.transform.position);nextPath=Time.time+.2f;}return;}
            Stop();if(dir.sqrMagnitude>.01f)transform.rotation=Quaternion.LookRotation(dir);
            if(Time.time>=nextAttack)StartCoroutine(Melee());
        }
        IEnumerator Melee(){
            attacking=true;nextAttack=Time.time+1.55f;yield return new WaitForSeconds(.35f);
            if(hp.IsAlive && !(kb && kb.IsStunned)){
                var d=DamageInfo.Make(12f,gameObject,"iron_rose_hit");d.knockDir=transform.forward;d.knockForce=4;d.knockUp=.5f;d.stun=.25f;
                // Team.Vipers is the existing generic hostile combat-team enum, not a Viper character/component.
                CombatQuery.Strike(Team.Vipers,transform.position+Vector3.up+transform.forward*1.08f,1.2f,d);
            }
            attacking=false;
        }
        public static IronRoseBrute Spawn(Vector3 at,int index){
            var prefab=Resources.Load<GameObject>("Enemies/IronRose/IRS_02_LOD0");
            if(!prefab || prefab.GetComponentsInChildren<Renderer>(true).Length==0){Debug.LogError("[Dockyard] Iron Rose Syndicate IRS_02 mesh unavailable; no pill substitute spawned.");return null;}
            if(NavMesh.SamplePosition(at,out NavMeshHit hit,6,NavMesh.AllAreas))at=hit.position;
            var go=new GameObject("IronRoseBrute_"+index);go.transform.position=at;
            go.AddComponent<FighterIdentity>().role=FighterRole.Grunt;
            var c=go.AddComponent<CapsuleCollider>();c.height=1.8f;c.radius=.38f;c.center=Vector3.up*.9f;
            var rb=go.AddComponent<Rigidbody>();rb.isKinematic=true;rb.useGravity=false;
            go.AddComponent<ShoveState>();
            var nav=go.AddComponent<NavMeshAgent>();nav.height=c.height;nav.radius=c.radius;nav.speed=9.5f;nav.acceleration=30;nav.angularSpeed=540;nav.stoppingDistance=.2f;
            CityBlockNavBootstrap.ConfigureAgent(nav);if(!nav.isOnNavMesh)nav.Warp(at);
            go.AddComponent<KnockbackBody>();
            var health=go.AddComponent<Health>();health.team=Team.Vipers;health.displayName="Iron Rose Syndicate Brute";health.SetMax(70);
            var visual=new GameObject("MeshRoot").transform;visual.SetParent(go.transform,false);
            var inst=Object.Instantiate(prefab,visual,false);
            foreach(var col in inst.GetComponentsInChildren<Collider>(true))Object.Destroy(col);
            var rs=inst.GetComponentsInChildren<Renderer>(true);var b=rs[0].bounds;foreach(var r in rs)b.Encapsulate(r.bounds);
            float scale=b.size.y>1e-4f?1.8f/b.size.y:1;var center=visual.InverseTransformPoint(b.center);var min=visual.InverseTransformPoint(b.min);
            inst.transform.localScale*=scale;inst.transform.localPosition=new Vector3(-center.x*scale,-min.y*scale,-center.z*scale);
            var brute=go.AddComponent<IronRoseBrute>();Debug.Log("[Dockyard] Iron Rose Syndicate Brute spawned: IRS_02 mesh, invisible capsule collider.");return brute;
        }
    }
}
