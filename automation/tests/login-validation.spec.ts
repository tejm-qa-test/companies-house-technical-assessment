import { test, expect } from '@playwright/test';

test('Login validation: common credentials (admin/admin) authenticate successfully (known risk)', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Log in' }).click();
  await expect(page.locator('#logInModal')).toBeVisible();

  await page.locator('#loginusername').fill('admin');
  await page.locator('#loginpassword').fill('admin');

  await page.getByRole('button', { name: 'Log in' }).click();

  const welcome = page.locator('#nameofuser');
  await expect(welcome).toBeVisible({ timeout: 10000 });
  await expect(welcome).toContainText('admin');

  await page.getByRole('link', { name: 'Log out' }).click();
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
});
