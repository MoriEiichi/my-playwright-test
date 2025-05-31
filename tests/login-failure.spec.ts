import { test, expect } from '@playwright/test';

test('間違った情報でログインに失敗する', async ({ page }) => {
  await page.goto('http://localhost:3000/login.html');
  await page.fill('input[name="username"]', 'wronguser');
  await page.fill('input[name="password"]', 'wrongpass');
  await page.click('button[type="submit"]');

  await expect(page.locator('body')).toContainText('Login Failed');
});