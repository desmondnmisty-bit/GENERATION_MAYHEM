// Restores the existing project's synth score/SFX in Unity. Audio clips are offline renders of its
// existing audio.ts recipes (source hash + levels in Resources/Audio/Restored/manifest). No new score.
// Gameplay only: this never adds, dubs, or mixes a soundtrack into the silent cold-open movie.
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using GenerationMayhem.Combat;
using GenerationMayhem.Player;
using GenerationMayhem.Hyperdrive;
using GenerationMayhem.Controls;
namespace GenerationMayhem.Audio
{
    public class GMGameplayAudio : MonoBehaviour
    {
        public static GMGameplayAudio Instance;
        public AudioSource[] music = new AudioSource[3];
        public AudioSource effects, rolling;
        public int MusicState { get; private set; } = -1;
        readonly Dictionary<string,AudioClip> clips=new Dictionary<string,AudioClip>();
        string arena;SkatePawnController pawn;bool grounded;float nextBrake,nextHit,nextPoll;int wantedState;
        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterSceneLoad)]
        static void Boot(){SceneManager.sceneLoaded-=SceneLoaded;SceneManager.sceneLoaded+=SceneLoaded;Ensure().ConfigureScene(SceneManager.GetActiveScene());}
        static GMGameplayAudio Ensure(){if(!Instance)Instance=Object.FindFirstObjectByType<GMGameplayAudio>();if(!Instance)Instance=new GameObject("GM_GameplayAudio").AddComponent<GMGameplayAudio>();return Instance;}
        static void SceneLoaded(Scene s,LoadSceneMode mode)=>Ensure().ConfigureScene(s);
        void Awake(){if(Instance&&Instance!=this){Destroy(gameObject);return;}Instance=this;DontDestroyOnLoad(gameObject);
            for(int i=0;i<3;i++)music[i]=Source("Music_"+i,true);effects=Source("SFX",false);rolling=Source("Skate_Roll",true);
            AudioListener.pause=false;if(AudioListener.volume<=0)AudioListener.volume=1;
        }
        AudioSource Source(string name,bool loop){var g=new GameObject(name);g.transform.SetParent(transform,false);var s=g.AddComponent<AudioSource>();s.playOnAwake=false;s.loop=loop;s.spatialBlend=0;s.volume=0;s.priority=loop?128:64;return s;}
        AudioClip Clip(string name){if(!clips.TryGetValue(name,out var c)){c=Resources.Load<AudioClip>("Audio/Restored/"+name);clips[name]=c;if(!c)Debug.LogError("[GM audio] Missing restored clip "+name);}return c;}
        void ConfigureScene(Scene scene){
            arena=scene.name=="Dockyard"?"dock":scene.name=="Hyperdrive_L2"?"hyperdrive":null;
            foreach(var s in music)s.Stop();rolling.Stop();MusicState=-1;pawn=null;
            if(arena==null)return;
            pawn=Object.FindFirstObjectByType<SkatePawnController>();grounded=pawn&&pawn.IsGrounded;
            var cam=Camera.main;if(cam&&!Object.FindFirstObjectByType<AudioListener>())cam.gameObject.AddComponent<AudioListener>();
            AudioListener.pause=false;if(AudioListener.volume<=0)AudioListener.volume=1;
            for(int i=0;i<3;i++){music[i].clip=Clip(arena+"_"+new[]{"calm","combat","threat"}[i]);music[i].volume=0;if(music[i].clip)music[i].Play();}
            effects.volume=.9f;rolling.clip=Clip("sfx_skate");rolling.volume=0;if(rolling.clip)rolling.Play();nextPoll=0;
            Debug.Log("[GM audio] Restored existing synth beds + combat/skate SFX for "+scene.name+" listenerVolume="+AudioListener.volume+" paused="+AudioListener.pause);
        }
        void OnEnable(){CombatEvents.Damaged+=Damaged;}
        void OnDisable(){CombatEvents.Damaged-=Damaged;}
        void OnDestroy(){if(Instance==this)Instance=null;}
        void Damaged(Health h,DamageInfo info,float amount){if(amount>0&&Time.unscaledTime>=nextHit){nextHit=Time.unscaledTime+.04f;Play("hit");}}
        void Update(){
            if(arena==null)return;if(!pawn)pawn=Object.FindFirstObjectByType<SkatePawnController>();
            if(Time.unscaledTime>=nextPoll){nextPoll=Time.unscaledTime+.25f;wantedState=ChooseState();if(wantedState!=MusicState){MusicState=wantedState;Debug.Log("[GM audio] "+arena+" music="+new[]{"CALM","COMBAT","THREAT"}[MusicState]);}}
            for(int i=0;i<3;i++)music[i].volume=Mathf.MoveTowards(music[i].volume,i==wantedState?1f:0f,Time.unscaledDeltaTime/1.2f);
            if(!pawn)return;float speed=Mathf.Clamp01(pawn.PlanarSpeed/Mathf.Max(1,pawn.MaxSpeed));rolling.volume=Mathf.MoveTowards(rolling.volume,pawn.IsGrounded?speed*.8f:0,Time.deltaTime*3);rolling.pitch=.6f+speed*.6f;
            if(pawn.IsGrounded&&!grounded)Play("land");if(!pawn.IsGrounded&&grounded&&pawn.VerticalSpeed>0)Play("hop");grounded=pawn.IsGrounded;
            if(speed>.15f&&GMControls.For(0).Brake.IsPressed()&&Time.time>=nextBrake){nextBrake=Time.time+.5f;Play("brake");}
        }
        int ChooseState(){
            if(!pawn)return 0;var hp=pawn.GetComponent<Health>();var soft=pawn.GetComponent<SoftHP>();
            if(hp&&hp.Normalized<.35f||soft&&soft.hp/Mathf.Max(1,soft.maxHP)<.35f)return 2;
            if(arena=="dock"){foreach(var h in Health.All)if(h&&h.team==Team.Family&&(h.IsDown||h.Normalized<.25f))return 2;foreach(var h in Health.All)if(h&&h.team!=Team.Family&&h.IsAlive&&(h.transform.position-pawn.transform.position).sqrMagnitude<225)return 1;}
            else {foreach(var v in Object.FindObjectsByType<SoftViper>(FindObjectsSortMode.None))if((v.transform.position-pawn.transform.position).sqrMagnitude<225)return 1;}
            return 0;
        }
        public static void Play(string name,float volume=1f){var i=Instance;if(!i||i.arena==null)return;var c=i.Clip("sfx_"+name);if(c&&i.effects){i.effects.PlayOneShot(c,volume);Debug.Log("[GM audio SFX] "+name+" clip="+c.name+" samples="+c.samples);}}
    }
}