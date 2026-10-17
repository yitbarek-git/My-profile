import { test, expect } from "@playwright/test";

test.describe("Theme toggle", () => {
	test("defaults to dark and toggles to light", async ({ page }) => {
		await page.goto("/");

		await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
		await expect(
			page.getByRole("button", { name: "Use light mode" }),
		).toBeVisible();

		await page.getByRole("button", { name: "Use light mode" }).click();

		await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
		await expect(
			page.getByRole("button", { name: "Use dark mode" }),
		).toBeVisible();
		await expect
			.poll(() => page.evaluate(() => localStorage.getItem("theme")))
			.toBe("light");

		await page.getByRole("button", { name: "Use dark mode" }).click();
		await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
		await expect
			.poll(() => page.evaluate(() => localStorage.getItem("theme")))
			.toBe("dark");
	});

	test("persists the chosen theme across reloads", async ({ page }) => {
		await page.goto("/");
		await page.getByRole("button", { name: "Use light mode" }).click();
		await expect(page.locator("html")).toHaveAttribute("data-theme", "light");

		await page.reload();
		await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
		await expect(
			page.getByRole("button", { name: "Use dark mode" }),
		).toBeVisible();
	});
});