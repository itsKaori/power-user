var http = require('http');
const http = require('http');

const express = require("express")
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.use(express.static('public'));

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('./public');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
