import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import penthouse from 'penthouse';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const criticalCssDir = path.join(__dirname, 'dist', 'critical-css');

const pages = [
  { url: 'http://localhost:8080', file: 'index.html' },
  // Add more pages if needed
];

if (!fs.existsSync(criticalCssDir)) {
  fs.mkdirSync(criticalCssDir);
}
const extractCriticalCss = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: puppeteer.executablePath(),
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    timeout: 60000 // Increase the timeout to 60 seconds
  });

  for (const page of pages) {
    const criticalCss = await penthouse({
      url: page.url,
      css: path.join(__dirname, 'dist', 'assets', 'css', 'main.css'),
      puppeteer: {
        getBrowser: () => browser
      },
      timeout: 60000 // Increase the Penthouse timeout to 60 seconds
    });

    fs.writeFileSync(path.join(criticalCssDir, `${page.file}.css`), criticalCss);
  }

  await browser.close();
};

extractCriticalCss().catch(err => {
  console.error(err);
  process.exit(1);
});
