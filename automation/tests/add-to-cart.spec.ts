import { test, expect } from '@playwright/test';

test('User can add a product to the cart', async ({ page }) => {
  await page.goto('/');

  // Open the first product card
  await page.locator('#tbodyid .card a').first().click();

  // Capture product title
  const titleText = (await page.locator('#tbodyid h2').textContent())?.trim();
  expect(titleText).toBeTruthy();

  // Click Add to cart and wait for the confirmation dialog
  const dialogPromise = page.waitForEvent('dialog');
  await page.locator('a.btn.btn-success.btn-lg', { hasText: 'Add to cart' }).click();

  const dialog = await dialogPromise;
  expect(dialog.message()).toContain('Product added');
  await dialog.accept();

  // Navigate to cart via the UI (more realistic than direct goto)
  await page.locator('#cartur').click();

  // Wait for cart row containing the product title
  await expect(page.locator('#tbodyid')).toContainText(titleText!, { timeout: 15000 });
});
