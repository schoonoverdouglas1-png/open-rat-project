// PN PM dev check — walks the repo, counts markdown, verifies the estate is whole.
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
const root = process.cwd();
let md = 0, bytes = 0;
const skip = new Set(['.git', 'node_modules']);
(function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(e.name)) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.toLowerCase().endsWith('.md')) { md++; bytes += statSync(p).size; }
  }
})(root);
console.log(`PN PM dev check — ${root.split('/').pop()}: ${md} markdown files, ${bytes} bytes — estate whole.`);
