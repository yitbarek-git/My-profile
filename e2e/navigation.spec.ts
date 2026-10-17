import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders identity and main sections", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /Yitbarek/i }).first(),
    ).toBeVisible();

    for (const section of [
      "about",
      "projects",
      "experience",
      "contact",
    ]) {
      await expect(page.locator(`#${section}`)).toBeVisible();
    }
  });

  test("renders customized project cards", async ({ page }) => {
    const projects = page.locator("#projects");

    for (const name of [
      "Ethiomarket",
      "Anchor Solution",
      "Restaurant System",
    ]) {
      await expect(
        projects.getByText(name, { exact: false }).first(),
      ).toBeVisible();
    }
  });

  test("renders the marquee section", async ({ page }) => {
    await expect(
      page.getByText("full-stack developer", { exact: true }).first(),
    ).toBeVisible();

    await expect(
      page.getByText("Python developer", { exact: true }).first(),
    ).toBeVisible();
  });

  test("does not display the original template identity", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Yitbarek.K" }),
    ).toHaveCount(0);
  });
});