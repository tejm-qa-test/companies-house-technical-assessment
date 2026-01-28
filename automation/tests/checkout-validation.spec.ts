import { test, expect } from '@playwright/test';

test('Checkout validation: user can place an order with valid details', async ({ page }) => {
  // 1) Go to homepage
  await page.goto('/');

  // 2) Open first product
  await page.locator('#tbodyid .card a').first().click();

  // Capture product title
  const titleText = (await page.locator('#tbodyid h2').textContent())?.trim();
  expect(titleText).toBeTruthy();

  // 3) Add to cart and accept confirmation dialog
  const dialogPromise = page.waitForEvent('dialog');
  await page.locator('a.btn.btn-success.btn-lg', { hasText: 'Add to cart' }).click();

  const dialog = await dialogPromise;
  expect(dialog.message()).toContain('Product added');
  await dialog.accept();

  // 4) Go to Cart
  await page.locator('#cartur').click();

  // Wait for cart to show the product title
  await expect(page.locator('#tbodyid')).toContainText(titleText!, { timeout: 15000 });

  // 5) Place Order
  await page.getByRole('button', { name: 'Place Order' }).click();

  // Ensure modal is visible
  const orderModal = page.locator('#orderModal');
  await expect(orderModal).toBeVisible();

  // 6) Fill in order form
  await page.locator('#name').fill('Thomas Mellon');
  await page.locator('#country').fill('United Kingdom');
  await page.locator('#city').fill('London');
  await page.locator('#card').fill('4111111111111111');
  await page.locator('#month').fill('01');
  await page.locator('#year').fill('2030');

  // 7) Purchase
  await page.getByRole('button', { name: 'Purchase' }).click();

  // 8) Assert success confirmation
  const success = page.locator('.sweet-alert.showSweetAlert.visible');
  await expect(success).toBeVisible();

  await expect(success).toContainText('Thank you for your purchase!');

  // Confirm an Order ID exists
  await expect(success).toContainText('Id:', { timeout: 10000 });

  // Close success dialog
  await page.getByRole('button', { name: 'OK' }).click();

  // Ensure success modal disappears
  await expect(success).toBeHidden();
});
