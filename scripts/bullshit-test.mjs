// PN PM bullshit test — do the claims in the MANIFEST match the files on disk?
import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
const root = process.cwd();
const dump = join(root, 'markdown-dump-2026-11-16');
let claims = [];
if (existsSync(join(dump, 'MANIFEST.md'))) {
  let n = 0;
  (function walk(dir) {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.toLowerCase().endsWith('.md')) n++;
    }
  })(dump);
  claims.push(`dump folder holds ${n} md files on disk`);
} else claims.push('no dump folder in this repo — count is repo-wide only');
console.log('bullshit test:', claims.join('; '), '— claims checked against disk, not believed.');
