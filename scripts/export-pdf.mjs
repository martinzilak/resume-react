// Renders the built resume (dist/) to an A4 PDF.
// Runs as part of `npm run build`, saving the PDF next to the site under the name its download link uses.

import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { preview } from 'vite';
import { renderPdf } from './render-pdf.mjs';

const server = await preview({ preview: { port: 4173, open: false } });

let pdf;
try {
  pdf = await renderPdf(server.resolvedUrls.local[0]);
} finally {
  await server.close();
}

const outputPath = join('dist', pdf.fileName);
await writeFile(outputPath, pdf.bytes);
console.log(`Saved ${outputPath}`);
