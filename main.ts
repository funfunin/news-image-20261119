// A news-image-daily entry (Node 22, standard library only): its image is
// the entry.png beside this file, and the program copies it to
// /output/entry.png. The gate takes a whole PNG or JPEG of at most 1 MiB
// and 1024 by 1024 pixels, and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

// The gate refuses anything over 1 MiB, so fail loudly instead of
// submitting an image the grader would reject.
if (!existsSync(source)) throw new Error('entry.png is missing beside main.ts');
if (statSync(source).size > 1024 * 1024) throw new Error('entry.png is over the 1 MiB gate');
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
