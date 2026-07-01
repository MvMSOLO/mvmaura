const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 1600 });
  try {
    await page.goto("http://localhost:8080/");
    await page.waitForTimeout(3000); // Wait for animations to load
    await page.screenshot({ path: "final_verification.png", fullPage: true });
    console.log("Screenshot saved to final_verification.png");
  } catch (e) {
    console.error("Failed to take screenshot:", e);
  }
  await browser.close();
})();
