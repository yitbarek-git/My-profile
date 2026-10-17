import { test, expect } from "@playwright/test";

const routes = ["/", "/projects", "/gear"];

const viewports = [
	{ name: "desktop", size: { width: 1280, height: 720 } },
	{ name: "mobile", size: { width: 390, height: 844 } },
];

for (const path of routes) {
	for (const { name, size } of viewports) {
		test(`no horizontal scroll on ${path} (${name})`, async ({ page }) => {
			await page.setViewportSize(size);
			await page.goto(path);
			await expect(page.locator("main")).toBeVisible();
			// Let mount animations/fonts settle before measuring.
			await page.waitForTimeout(300);

			const { overflow, scrollWidth, clientWidth } = await page.evaluate(() => {
				const root = document.documentElement;
				const before = root.scrollLeft;
				window.scrollTo(10_000, 0);
				const after = root.scrollLeft;
				return {
					overflow: after - before,
					scrollWidth: root.scrollWidth,
					clientWidth: root.clientWidth,
				};
			});

			expect(
				overflow,
				`page can scroll horizontally (scrollWidth ${scrollWidth} > clientWidth ${clientWidth})`,
			).toBe(0);
		});
	}
}