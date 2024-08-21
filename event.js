const EventEmmiter = require('events');
const http = require('http');

class Sales extends EventEmmiter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => console.log('There was a new sale'));

myEmitter.on('newSale', () => console.log('Customer name: Jonas'));

myEmitter.on('newSale', (stock) =>
  console.log(`There are now ${stock} items left in stock`)
);

myEmitter.emit('newSale', 9);

//
const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request received');
  res.end('Request received');
});

server.on('request', (req, res) => {
  console.log(req.url);
  res.end('Another request');
});

server.on('close', () => {
  console.log('Server closed');
});

const host = '127.0.0.1';
const port = 8000;

server.listen(port, host, () => {
  console.log(`Waiting for requests ...`);
});
