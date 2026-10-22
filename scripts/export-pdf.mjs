// Renders the built resume (dist/) to an A4 PDF using headless Chrome.
// Runs as part of `npm run build`, saving the PDF next to the site under the name its download link uses.

import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { preview } from 'vite';
import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';

// A4 in PDF points
const A4_WIDTH = 595.28;
const A4_HEIGHT = 841.89;

const server = await preview({ preview: { port: 4173, open: false } });
const browser = await puppeteer.launch();

let pdf;
let metadata;
let fileName;
try {
  const page = await browser.newPage();
  await page.emulateMediaFeatures([
    { name: 'prefers-color-scheme', value: 'light' },
  ]);
  await page.goto(server.resolvedUrls.local[0], { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);

  metadata = await page.evaluate(() => ({
    title: document.title,
    author: document.querySelector('meta[name="author"]')?.content,
    subject: document.querySelector('meta[name="description"]')?.content,
    language: document.documentElement.lang,
  }));
  fileName = await page.$eval('a[download]', (link) => link.download);

  pdf = await page.pdf({
    preferCSSPageSize: true,
    printBackground: true,
    tagged: true,
  });
} finally {
  await browser.close();
  await server.close();
}

const document = await PDFDocument.load(pdf);

const pageCount = document.getPageCount();
if (pageCount !== 1) {
  throw new Error(`Expected the resume to fit on 1 page, got ${pageCount}.`);
}

const { width, height } = document.getPage(0).getSize();
if (Math.abs(width - A4_WIDTH) > 1 || Math.abs(height - A4_HEIGHT) > 1) {
  throw new Error(`Expected an A4 page, got ${width}×${height}pt.`);
}

document.setTitle(metadata.title, { showInWindowTitleBar: true });
document.setAuthor(metadata.author);
document.setSubject(metadata.subject);
document.setLanguage(metadata.language);
document.setCreator('resume-react');

const outputPath = join('dist', fileName);
await writeFile(outputPath, await document.save());
console.log(`Saved ${outputPath}`);
