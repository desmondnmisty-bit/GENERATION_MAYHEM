// Copyright Dark Logic Studios. Generation Mayhem.
// §6 Occlusion: containers between camera and player dither-fade instead of the camera pushing in.

using UnityEngine;

namespace GenerationMayhem.Traversal
{
    /// <summary>
    /// Hook for the URP dither shader. Writes float "_DitherFade" (0 = solid, 1 = fully faded) via
    /// MaterialPropertyBlock. Until the shader exists (art task), fallback hides the renderers but keeps shadows.
    /// </summary>
    public class ContainerDitherFade : MonoBehaviour
    {
        public static readonly int DitherFadeId = Shader.PropertyToID("_DitherFade");
        [Range(0f, 1f)] public float fadedAmount = 0.7f;
        public float fadeSpeed = 6f;
        [Tooltip("True until the URP dither shader is assigned: toggles ShadowsOnly instead.")]
        public bool useShadowsOnlyFallback = true;

        Renderer[] _renderers;
        MaterialPropertyBlock _mpb;
        float _current, _target;

        void Awake()
        {
            _renderers = GetComponentsInChildren<Renderer>();
            _mpb = new MaterialPropertyBlock();
        }

        public void SetOccluding(bool occluding) { _target = occluding ? fadedAmount : 0f; enabled = true; }

        void Update()
        {
            _current = Mathf.MoveTowards(_current, _target, fadeSpeed * Time.deltaTime);
            foreach (var r in _renderers)
            {
                if (r == null) continue;
                r.GetPropertyBlock(_mpb);
                _mpb.SetFloat(DitherFadeId, _current);
                r.SetPropertyBlock(_mpb);
                if (useShadowsOnlyFallback)
                    r.shadowCastingMode = _current > 0.35f
                        ? UnityEngine.Rendering.ShadowCastingMode.ShadowsOnly
                        : UnityEngine.Rendering.ShadowCastingMode.On;
            }
            if (Mathf.Approximately(_current, _target)) enabled = false;
        }
    }
}
