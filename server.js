const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// フォームデータの解析
app.use(express.urlencoded({ extended: true }));

// 静的ファイルの提供（publicフォルダに login.html や dashboard.html など）
app.use(express.static(path.join(__dirname, 'public')));

// テスト用にトップにHTTP 200を返す（start-server-and-test が必要とする）
app.get('/', (req, res) => {
  res.send('OK');
});

// ログイン処理
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'testuser' && password === 'secret') {
    res.redirect('/dashboard.html');
  } else {
    res.send('<h1>Login Failed</h1><p>Invalid credentials.</p>');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
