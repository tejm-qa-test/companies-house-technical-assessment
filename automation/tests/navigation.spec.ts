import { test, expect } from '@playwright/test';

test('Homepage loads and shows product cards', async ({ page }) => {
  await page.goto('/');

  // Check navigation is present
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();

  // Product Grid Render
  const productCards = page.locator('#tbodyid .card');
  await expect(productCards.first()).toBeVisible();
});
