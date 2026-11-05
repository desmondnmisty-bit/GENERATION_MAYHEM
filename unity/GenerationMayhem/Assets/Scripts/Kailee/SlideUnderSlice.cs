// STUB — Kailee "Slide Under Slice" finisher (Misty stamped 2026-11-02). Blue palette only.
// Plates: concepts/moves/GM_Kailee_SlideUnder_Slice_v003.jpg, GM_Kailee_ThermalBlades_Callout_v002.jpg, KAILEE_SLIDE_UNDER.md
// VFX reuse: Assets/Art/HeroPacks/SliceFinishers/SliceFinishers_v001/BlueBlazeBlitz/VFX/Textures/T_FX_KaileeBladeFlame_*
// Gauntlet mesh: pending Soft Tripo. Mirrors web Dock numbers.
using UnityEngine;
public class SlideUnderSlice : MonoBehaviour {
    public enum Phase { Approach, Under, Slice, Recover }
    public float cooldown = 7f, cooldownJitter = 2f, duration = 0.6f, slideSpeed = 15f;
    public float hit1Damage = 22f, hit2Damage = 18f, hit1At = 0.2f, hit2At = 0.36f, triggerRange = 2.4f;
    public float duckHeight = -0.55f, hitstop = 0.07f;
    public Color bladeCore = new Color(0.16f, 0.48f, 1f), bladeEdge = new Color(0.5f, 0.88f, 1f);
    public ParticleSystem blueBladeTrail, blueSliceBurst;
    public Phase phase = Phase.Approach;
    // TODO: root-motion slide clip, duck capsule, hit events at hit1At/hit2At, hitstop + cam shake, "SLIDE UNDER" banner.
}
