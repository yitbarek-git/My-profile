import { test, expect } from "@playwright/test";

test.describe("Sound toggle", () => {
	test("starts unmuted and toggles the muted state", async ({ page }) => {
		await page.goto("/");

		const toggle = page.getByRole("button", {
			name: "Turn sound off",
		});
		await expect(toggle).toBeVisible();

		await toggle.click();
		await expect(
			page.getByRole("button", { name: "Turn sound on" }),
		).toBeVisible();

		await page.getByRole("button", { name: "Turn sound on" }).click();
		await expect(
			page.getByRole("button", { name: "Turn sound off" }),
		).toBeVisible();
	});
});