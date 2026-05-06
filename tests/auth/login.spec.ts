import { test, expect } from "@playwright/test";

test("should have correct labels for form", async ({ page }) => {
  await page.goto("/auth/login");
  await expect(page.getByLabel("Email")).toBeVisible();
  await expect(page.getByLabel("Password")).toBeVisible();
});
