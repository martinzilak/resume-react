// Renders the resume served at a URL to an A4 PDF using headless Chrome.
// Shared by the build (scripts/export-pdf.mjs) and the dev server (vite.config.ts).

import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';

// A4 in PDF points
const A4_WIDTH = 595.28;
const A4_HEIGHT = 841.89;

export const renderPdf = async (url) => {
  const browser = await puppeteer.launch();

  let pdf;
  let metadata;
  let fileName;
  try {
    const page = await browser.newPage();
    await page.emulateMediaFeatures([
      { name: 'prefers-color-scheme', value: 'light' },
    ]);
    await page.goto(url, { waitUntil: 'networkidle0' });
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

  return { fileName, bytes: await document.save() };
};
