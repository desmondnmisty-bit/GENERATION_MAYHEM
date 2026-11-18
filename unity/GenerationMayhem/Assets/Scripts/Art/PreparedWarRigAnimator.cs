// Prepared share-only REVIEW rig driver. Generic transform animation; no Humanoid retarget or hidden sockets.
using UnityEngine;
using GenerationMayhem.Combat;
namespace GenerationMayhem.Art
{
    public class PreparedWarRigAnimator : MonoBehaviour
    {
        public Animator animator;
        Vector3 last;string state;
        public void Configure(Animator value){animator=value;last=transform.position;state=null;var fighter=GetComponent<FighterAnimator>();if(fighter)fighter.animator=animator;}
        void OnEnable(){last=transform.position;}
        void Update(){
            float speed=(transform.position-last).magnitude/Mathf.Max(Time.deltaTime,.0001f);last=transform.position;
            if(!animator||!animator.runtimeAnimatorController)return;
            var fighter=GetComponent<FighterAnimator>();if(fighter&&fighter.enabled&&fighter.animator==animator)return;
            string want=speed>1.2f?"Locomotion_Fwd":"Idle_Skate";
            if(state!=want&&animator.HasState(0,Animator.StringToHash(want))){animator.CrossFadeInFixedTime(want,.15f);state=want;}
        }
    }
}