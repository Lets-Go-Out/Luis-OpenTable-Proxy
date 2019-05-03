require('newrelic');
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 80;

const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET':
      if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(path.join(__dirname, "./public/index.html")).pipe(res);
      } else if (req.url === '/loaderio-ceec7b2c7ebe66dce715ecc7ded63627/') {
	res.writeHead(200, {
          "Content-Type": "text/plain",
          "Content-Disposition": "attachment;"
        });
        fs.createReadStream(path.join(__dirname, './loaderio-ceec7b2c7ebe66dce715ecc7ded63627.txt')).pipe(res);
      }
      break;
   default:
      res.end();
  }
});
server.listen(80);

