# Soft VO drop folder
Drop mp3s in `art/vo/<name>/` — names: vixen, kailee, brianna, payton, kamyrn, lili, fang, cobra.
File name = first 6 words of the line, lowercase, underscores (punctuation dropped), or add `lines.json` {"file.mp3":"exact line"}.
Then `cd web && node tools/build_vo_manifest.mjs && npm run build`. Matched lines play the real clip; everything else stays TTS.
Unity: same files copy to `Assets/Resources/VO/<name>/` (SoftVOPlayer loads by same key).
