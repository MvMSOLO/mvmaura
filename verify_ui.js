import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 1080 });

  try {
    await page.goto('http://localhost:8088/', { waitUntil: 'networkidle' });

    // Wait for the intro cutscene to finish or skip it
    await page.waitForTimeout(5000);

    // Check if we are on the main grid
    const title = await page.title();
    console.log('Page title:', title);

    await page.screenshot({ path: 'grid_view_v5.png', fullPage: false });

    // Scroll down to see more animations
    await page.mouse.wheel(0, 2000);
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'scrolled_view_v5.png', fullPage: false });

  } catch (err) {
    console.error('Error during verification:', err);
  } finally {
    await browser.close();
  }
})();
