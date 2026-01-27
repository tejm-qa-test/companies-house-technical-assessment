import { test, expect } from '@playwright/test';

test('Sign up + Log in validation: user can register and authenticate', async ({ page }) => {
  await page.goto('/');

  // Use a unique username each run to avoid "User already exists"
  const username = `qa_${Date.now()}`;
  const password = 'TestPassword123!';

  // --- Sign up ---
  await page.getByRole('link', { name: 'Sign up' }).click();
  await expect(page.locator('#signInModal')).toBeVisible();

  await page.locator('#sign-username').fill(username);
  await page.locator('#sign-password').fill(password);

  // Sign up triggers an alert dialog (success or user exists)
  const signupDialogPromise = page.waitForEvent('dialog');
  await page.getByRole('button', { name: 'Sign up' }).click();

  const signupDialog = await signupDialogPromise;
  const signupMsg = signupDialog.message();
  await signupDialog.accept();

  // Expect a success-ish message. (Keep it tolerant; demo sites vary slightly)
  expect(signupMsg.length).toBeGreaterThan(0);

 // Dismiss the sign up modal (Escape is more reliable than clicking Close due to animations)
await page.keyboard.press('Escape');
await expect(page.locator('#signInModal')).toBeHidden({ timeout: 10000 });
expect(signupMsg).toMatch(/Sign up successful|This user already exist/i);


  // --- Log in ---
  await page.getByRole('link', { name: 'Log in' }).click();
  await expect(page.locator('#logInModal')).toBeVisible();

  await page.locator('#loginusername').fill(username);
  await page.locator('#loginpassword').fill(password);

  await page.getByRole('button', { name: 'Log in' }).click();

  // Assert logged-in UI
  const welcome = page.locator('#nameofuser');
  await expect(welcome).toBeVisible({ timeout: 10000 });
  await expect(welcome).toContainText(username);

  // Clean up
  await page.getByRole('link', { name: 'Log out' }).click();
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
});
