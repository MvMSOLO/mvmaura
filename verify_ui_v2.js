import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport to a common desktop size
  await page.setViewportSize({ width: 1920, height: 1080 });

  page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));
  page.on("pageerror", (err) => console.log("PAGE ERROR:", err.message));

  try {
    await page.goto("http://localhost:8089", { waitUntil: "networkidle" });

    // Wait for the hero animation
    await page.waitForTimeout(2000);
    await page.screenshot({ path: "/home/jules/verification/hero_v4.png" });
    console.log("Hero screenshot taken");

    // Scroll down to trigger animations
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        let distance = 100;
        let timer = setInterval(() => {
          let scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 50);
      });
    });

    await page.waitForTimeout(2000);
    await page.screenshot({
      path: "/home/jules/verification/full_collection_v4.png",
      fullPage: true,
    });
    console.log("Full page screenshot taken");
  } catch (error) {
    console.error("Error during verification:", error);
  } finally {
    await browser.close();
  }
})();
