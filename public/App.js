var http = require('http');

const express = require("express")
const path = require('path');
const mime = require('mime');
const fs = require('fs');
const app = express();
const hostname = '127.0.0.1';
const port = 4000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('public'));

const server = http.createServer((req, res) => {
  const filePath = './public' + req.url;
  const contentType = mime.getType(path.extname(filePath));

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.write(data);
    res.end();
  });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
