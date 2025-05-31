import { test, expect } from '@playwright/test';
test('正しい情報でログインしてダッシュボードに遷移する', async ({ page }) => {
  await page.goto('http://localhost:3000/login.html');
  await page.fill('input[name="username"]', 'testuser');
  await page.fill('input[name="password"]', 'secret');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL('http://localhost:3000/dashboard.html');
});