// Soft VO drop: put mp3s in art/vo/<name>/ (e.g. art/vo/kailee/). Name each file with the first
// words of the line, e.g. "were_not_leaving_without_her.mp3" (first 6 words, lowercase, _ joined),
// OR add art/vo/<name>/lines.json {"file.mp3": "Exact line text"}. Run: node tools/build_vo_manifest.mjs
import fs from 'fs'; import path from 'path';
const src = path.resolve('../art/vo'), out = path.resolve('public/vo'); fs.mkdirSync(out, { recursive: true });
const key = (l) => l.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim().split(/\s+/).slice(0, 6).join('_');
const man = {};
for (const who of fs.existsSync(src) ? fs.readdirSync(src) : []) {
  const d = path.join(src, who); if (!fs.statSync(d).isDirectory()) continue;
  const lines = fs.existsSync(path.join(d, 'lines.json')) ? JSON.parse(fs.readFileSync(path.join(d, 'lines.json'), 'utf8')) : {};
  for (const f of fs.readdirSync(d).filter((f) => f.endsWith('.mp3'))) {
    fs.mkdirSync(path.join(out, who), { recursive: true }); fs.copyFileSync(path.join(d, f), path.join(out, who, f));
    const k = lines[f] ? key(lines[f]) : f.replace(/\.mp3$/, '').toLowerCase();
    (man[who.toUpperCase()] ??= {})[k] = `${who}/${f}`;
  }
}
fs.writeFileSync(path.join(out, 'manifest.json'), JSON.stringify(man, null, 1)); console.log(man);
