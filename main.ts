// news-image-20261119 — the program that hands this entry in.
//
// Beside this file sits entry.png, the finished front page for
// Thursday 19 November 2026. All this program does is carry that
// image into the folder the grader collects, after checking it is
// a real PNG and small enough for the competition's size gate.
// It runs on Node 22 and uses nothing but the standard library.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The competition refuses any image bigger than one mebibyte.
const MAX_IMAGE_BYTES = 1048576;

// The eight bytes that open every PNG file.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const folderHere = fileURLToPath(new URL('.', import.meta.url));
const imagePath = join(folderHere, 'entry.png');
const outputFolder = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const imageTarget = join(outputFolder, 'entry.png');

if (!existsSync(imagePath)) {
  throw new Error(`front page image not found: ${imagePath}`);
}

const imageBytes = readFileSync(imagePath);

if (imageBytes.length > MAX_IMAGE_BYTES) {
  throw new Error(
    `front page image is ${imageBytes.length} bytes, over the ${MAX_IMAGE_BYTES}-byte limit`,
  );
}

if (!imageBytes.subarray(0, PNG_MAGIC.length).equals(PNG_MAGIC)) {
  throw new Error('front page image does not begin with the PNG signature');
}

mkdirSync(outputFolder, { recursive: true });
copyFileSync(imagePath, imageTarget);

console.log(`wrote ${imageTarget} (${imageBytes.length} bytes)`);
