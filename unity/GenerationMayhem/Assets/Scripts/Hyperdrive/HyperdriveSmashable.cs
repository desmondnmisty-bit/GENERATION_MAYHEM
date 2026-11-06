// Hyperdrive floor clutter only. Ramps, rideable platforms, shops and characters never receive this component.
using UnityEngine;
namespace GenerationMayhem.Hyperdrive
{
    public class HyperdriveSmashable : MonoBehaviour
    {
        bool broken;
        public void Smash()
        {
            if (broken) return;
            broken = true; // one reward per object, even for multiple contact callbacks
            var source = GetComponent<Renderer>();
            var material = source ? source.sharedMaterial : null;
            var center = source ? source.bounds.center : transform.position;
            foreach (var c in GetComponentsInChildren<Collider>()) c.enabled = false;
            foreach (var r in GetComponentsInChildren<Renderer>()) r.enabled = false;
            HyperdriveHUD.Trick("CLUTTER SMASH", 500); // same 1x..5x trick chain as web
            for (int i = 0; i < 8; i++)
            {
                var chip = GameObject.CreatePrimitive(PrimitiveType.Cube);
                chip.name = "SmashChunk";
                chip.transform.position = center + Random.insideUnitSphere * 0.35f;
                chip.transform.localScale = Vector3.one * Random.Range(0.12f, 0.3f);
                var solid = chip.GetComponent<Collider>(); solid.enabled = false; Destroy(solid);
                if (material) chip.GetComponent<Renderer>().sharedMaterial = material;
                var rb = chip.AddComponent<Rigidbody>();
                rb.AddForce((Random.insideUnitSphere + Vector3.up) * 4f, ForceMode.Impulse);
                rb.AddTorque(Random.insideUnitSphere * 5f, ForceMode.Impulse);
                Destroy(chip, 0.8f); // purely visual, never leaves invisible obstacles
            }
        }
    }
}
