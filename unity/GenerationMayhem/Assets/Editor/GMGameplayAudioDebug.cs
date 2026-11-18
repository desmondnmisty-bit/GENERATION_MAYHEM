#if UNITY_EDITOR
using System;
using System.IO;
using System.Linq;
using System.Text;
using System.Reflection;
using UnityEditor;
using UnityEngine;
using UnityEngine.SceneManagement;
using GenerationMayhem.Audio;
using Object=UnityEngine.Object;
public static class GMGameplayAudioDebug
{
    static string Dir=>Path.Combine(Path.GetTempPath(),"GM-wire-debug");
    public static void Command(string cmd){
        if(cmd=="audio-unmute-editor"){
            foreach(var t in new[]{typeof(EditorUtility),typeof(UnityEditorInternal.InternalEditorUtility)}){
                var p=t.GetProperty("audioMasterMute",BindingFlags.Public|BindingFlags.NonPublic|BindingFlags.Static);if(p!=null&&p.CanWrite)p.SetValue(null,false);
            }
            AudioListener.pause=false;if(AudioListener.volume<=0)AudioListener.volume=1;Audit("audio-unmute");
        }
        if(cmd=="audio-audit")Audit("audio");
        if(cmd=="audio-test"){
            GMGameplayAudio.Play("pistol");double at=EditorApplication.timeSinceStartup+.06;EditorApplication.CallbackFunction tick=null;
            tick=()=>{if(EditorApplication.timeSinceStartup<at)return;EditorApplication.update-=tick;if(EditorApplication.isPlaying)Audit("audio-sfx-test");};EditorApplication.update+=tick;
        }
    }
    static float Rms(AudioSource s){var a=new float[1024];s.GetOutputData(a,0);return Mathf.Sqrt(a.Sum(v=>v*v)/a.Length);}
    static void Audit(string label){
        var s=new StringBuilder();s.AppendLine("Scene="+SceneManager.GetActiveScene().name+" playing="+EditorApplication.isPlaying+" paused="+EditorApplication.isPaused+" timeScale="+Time.timeScale+" listenerVolume="+AudioListener.volume+" listenerPaused="+AudioListener.pause+" sampleRate="+AudioSettings.outputSampleRate);
        foreach(var l in Object.FindObjectsByType<AudioListener>(FindObjectsSortMode.None))s.AppendLine("listener="+l.name+" enabled="+l.enabled);
        var m=GMGameplayAudio.Instance;s.AppendLine("manager="+m+" musicState="+(m?m.MusicState:-1));
        foreach(var a in Object.FindObjectsByType<AudioSource>(FindObjectsSortMode.None))s.AppendLine("source="+a.name+" clip="+a.clip+" isPlaying="+a.isPlaying+" time="+(a.clip?a.time:0)+" volume="+a.volume+" mute="+a.mute+" spatial="+a.spatialBlend+" outputRms="+Rms(a));
        var output=new float[1024];AudioListener.GetOutputData(output,0);s.AppendLine("listenerMixRms="+Mathf.Sqrt(output.Sum(v=>v*v)/output.Length));
        File.WriteAllText(Path.Combine(Dir,SceneManager.GetActiveScene().name+"-"+label+"-proof.txt"),s.ToString());Debug.Log("[GM audio proof]\n"+s);
    }
}
#endif