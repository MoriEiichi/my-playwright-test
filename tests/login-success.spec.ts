import { test, expect } from '@playwright/test';

test('正しい情報でログインしてダッシュボードに遷移する', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: {
      dir: 'videos/',
      size: { width: 1920, height: 1080 }
    }
  });

  const page = await context.newPage();

  await page.goto('http://localhost:3000/login.html');

  // 最初のページでズーム
  await page.evaluate(() => {
    document.body.style.zoom = '1.5';
    document.documentElement.style.zoom = '1.5';
  });

  await page.fill('input[name="username"]', 'testuser');
  await page.fill('input[name="password"]', 'secret');
  await page.click('button[type="submit"]');

  // ページ遷移を待つ
  await page.waitForURL('http://localhost:3000/dashboard.html');

  // 遷移後にもズーム再適用！
  await page.evaluate(() => {
    document.body.style.zoom = '1.5';
    document.documentElement.style.zoom = '1.5';
  });

  await expect(page).toHaveURL('http://localhost:3000/dashboard.html');

  await context.close();
});
