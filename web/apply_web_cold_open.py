# Usage (repo root): python3 apply_web_cold_open.py web/index.html web_index_cold_open_snippet.html
import sys; p,sn=sys.argv[1],sys.argv[2]; s=open(p,encoding='utf-8').read()
if 'gmColdOpen' in s: print('already applied'); sys.exit()
i=s.index('<body'); j=s.index('>',i)+1
open(p,'w',encoding='utf-8').write(s[:j]+'\n'+open(sn,encoding='utf-8').read()+s[j:]); print('patched',p)
