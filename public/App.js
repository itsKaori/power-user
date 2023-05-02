const express = require("express");
const path = require('path');
const mime = require('mime');
const fs = require('fs');
const { MIMEType } = require("MIMEType");
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('public'));

app.get('*', (req, res) => {
  const filePath = path.join(__dirname, 'public', req.url);
  const ext = path.extname(filePath);
  const contentType = MIMEType(ext);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200, {'Content-Type': contentType});
    res.write(data);
    res.end();
  });
});

console.log(__dirname);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});