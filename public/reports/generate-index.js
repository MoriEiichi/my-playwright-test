const fs = require('fs');
const path = require('path');

const reportsDir = __dirname;
const files = fs.readdirSync(reportsDir, { withFileTypes: true });

const reportLinks = files
  .filter(dirent => dirent.isDirectory() && /^\d+$/.test(dirent.name))
  .sort((a, b) => b.name.localeCompare(a.name)) // 新しい順
  .map(dirent => {
    const runId = dirent.name;
    return `<li><a href="./${runId}/index.html">Run #${runId}</a></li>`;
  })
  .join('\n');

const html = `
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Playwright Test Reports</title>
</head>
<body>
  <h1>Playwright Test Reports 一覧</h1>
  <ul>
    ${reportLinks}
  </ul>
</body>
</html>
`;

fs.writeFileSync(path.join(reportsDir, 'index.html'), html, 'utf8'); 