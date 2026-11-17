// PN PM lint — markdown hygiene: no stale lco-nsn.gov links, no empty files.
import { readdirSync, statSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
const skip = new Set(['.git', 'node_modules']);
let files = 0, stale = 0, empty = 0;
(function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(e.name)) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.toLowerCase().endsWith('.md')) {
      files++;
      const s = statSync(p);
      if (s.size === 0) empty++;
      else if (readFileSync(p, 'utf8').includes('lco-nsn.gov')) stale++;
    }
  }
})(process.cwd());
console.log(`lint: ${files} md files, ${stale} with stale tribal links, ${empty} empty`);
if (stale || empty) process.exitCode = 1;
