// PN PM filter — secret-pattern scan over markdown (the dump's filter, as a script).
import { readdirSync, statSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
const skip = new Set(['.git', 'node_modules']);
const pats = [/BEGIN [A-Z ]*PRIVATE KEY/, /ghp_[A-Za-z0-9]{20,}/, /github_pat_[A-Za-z0-9_]{20,}/, /sk-[A-Za-z0-9]{20,}/, /AKIA[0-9A-Z]{16}/, /xox[baprs]-[A-Za-z0-9-]{10,}/];
let files = 0, hits = 0;
(function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(e.name)) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.toLowerCase().endsWith('.md')) {
      files++;
      const t = readFileSync(p, 'utf8');
      if (pats.some(rx => rx.test(t))) { hits++; console.log('FILTER HIT:', p); }
    }
  }
})(process.cwd());
console.log(`filter: scanned ${files} md files, ${hits} hard-secret hits`);
if (hits) process.exitCode = 1;
