import { test, expect } from '@playwright/test';

test('ログイン成功でダッシュボードに遷移する', async ({ page }) => {
  await page.goto('http://localhost:3000/login.html');

  await page.fill('#username', 'testuser');
  await page.fill('#password', 'secret');
  await page.click('#login-button');

  expect(page.url()).toContain('/dashboard.html');
  await expect(page.locator('h1')).toHaveText('Welcome to the Dashboard!');
});