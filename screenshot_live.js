const puppeteer = require('/home/jules/verification/node_modules/puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://bruiser.tech/', { waitUntil: 'networkidle0' });
  await page.waitForTimeout(8000);
  await page.screenshot({ path: 'live_site.png', fullPage: true });
  await browser.close();
})();
