const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, 'dist');
const PORT = 4322;

const MIME = {
  html: 'text/html; charset=utf-8',
  css:  'text/css',
  js:   'text/javascript',
  png:  'image/png',
  svg:  'image/svg+xml',
  ico:  'image/x-icon',
};

http.createServer(function(req, res) {
  let url = req.url.split('?')[0];
  let filePath = path.join(ROOT, url === '/' ? 'index.html' : url);

  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    return res.end('Not found: ' + url);
  }

  const ext = path.extname(filePath).slice(1);
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);

}).listen(PORT, '127.0.0.1', function() {
  console.log('InfoIA server running at http://localhost:' + PORT);
});
