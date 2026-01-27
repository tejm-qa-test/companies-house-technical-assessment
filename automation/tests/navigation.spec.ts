import { test, expect } from '@playwright/test';

test('Homepage loads and shows product cards', async ({ page }) => {
  await page.goto('/');

  // Basic sanity check: navigation is present
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();

  // Product grid should render at least one product card
  const productCards = page.locator('#tbodyid .card');
  await expect(productCards.first()).toBeVisible();
});
