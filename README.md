# my-playwright-test

## 概要

このプロジェクトは、Expressで構築した簡易ログインサーバと、PlaywrightによるE2Eテストのサンプルです。  
`public`フォルダにある`login.html`からログインし、認証に成功すると`dashboard.html`に遷移します。

## 構成

- `server.js` … Expressサーバ本体。`/login`で認証、静的ファイル配信。
- `public/login.html` … ログイン画面。
- `public/dashboard.html` … ログイン成功後のダッシュボード画面。
- `tests/` … PlaywrightによるE2Eテスト。
- `playwright.config.js` … Playwrightの設定ファイル。

## セットアップ

1. 依存パッケージのインストール

   ```
   npm install
   ```

2. サーバの起動

   ```
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

## テストの実行

PlaywrightによるE2Eテストを実行するには、以下のコマンドを使用します。

```
npm run test:e2e
```

- サーバを自動で起動し、テスト後に終了します。
- テスト結果は`playwright-report/`にHTMLレポートとして出力されます。

## テスト内容

- `login-success.spec.ts`  
  正しい情報でログインし、ダッシュボードに遷移できることを確認します。
- `login-failure.spec.ts`  
  間違った情報でログインに失敗し、エラーメッセージが表示されることを確認します。

## ライセンス

MIT 