# my-playwright-test

## 🚀 with AIエンジニアの実践環境
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white)](https://playwright.dev)
[![CI](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF?style=flat&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

## 📋 プロジェクト概要

### ✅ 目的
このプロジェクトは、Expressで構築した簡易ログインサーバと、PlaywrightによるE2Eテストのサンプルです。  
`public`フォルダにある`login.html`からログインし、認証に成功すると`dashboard.html`に遷移します。

### ✅ 技術スタック
- **バックエンド**: Express.js
- **フロントエンド**: HTML
- **テスト**: Playwright
- **CI/CD**: GitHub Actions
- **言語**: TypeScript, JavaScript

### ✅ 学んだこと
- Playwrightを使用したE2Eテストの実装方法
- Express.jsでの認証処理の実装
- GitHub ActionsでのCI/CD設定
- テスト自動化のベストプラクティス

## 🛠️ 構成

- `server.js` … Expressサーバ本体。`/login`で認証、静的ファイル配信。
- `public/login.html` … ログイン画面。
- `public/dashboard.html` … ログイン成功後のダッシュボード画面。
- `tests/` … PlaywrightによるE2Eテスト。
- `playwright.config.js` … Playwrightの設定ファイル。

## 🚀 セットアップ

1. 依存パッケージのインストール

   ```bash
   npm install
   ```

2. サーバの起動

   ```bash
   node server.js
   ```

   - サーバは http://localhost:3000 で起動します。

3. ログイン画面にアクセス

   ```
   http://localhost:3000/login.html
   ```

   - ユーザー名: `testuser`
   - パスワード: `secret`

   でログインできます。

## 🧪 テストの実行

PlaywrightによるE2Eテストを実行するには、以下のコマンドを使用します。

```bash
npm run test:e2e
```

- サーバを自動で起動し、テスト後に終了します。
- テスト結果は`playwright-report/`にHTMLレポートとして出力されます。

## 📝 テスト内容

- `login-success.spec.ts`  
  正しい情報でログインし、ダッシュボードに遷移できることを確認します。
- `login-failure.spec.ts`  
  間違った情報でログインに失敗し、エラーメッセージが表示されることを確認します。

## 📸 スクリーンショット

![テスト実行画面](https://github.com/MoriEiichi/my-playwright-test/raw/main/test-results/screenshot.png)

## 📄 ライセンス

MIT

テスト用変更
テスト用変更
