const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request received');
  res.end('Request received');
});

const host = '127.0.0.1';
const port = 8000;

server.listen(port, host, () => {
  console.log(`Listening to requests on port ${port}`);
});
 