const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

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