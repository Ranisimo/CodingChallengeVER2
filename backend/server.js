const express = require('express');
const { setInterval } = require('timers/promises');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');
const lib = require('./modules/initialiser');

function heartbeat() {
  this.isAlive = true;
}

const wss = new WebSocket.Server({ server:server });


wss.on('connection', function connection(ws) {
  ws.on('message', message => {
    console.log(`Received message => ${message}`);
    lib.init();
    ws.send(JSON.stringify(lib.machines));
    setInterval(() => {
      ws.send(JSON.stringify(lib.machines));
    }, 10000);
  })
  ws.isAlive = true;
  ws.on('pong', heartbeat);
});

const interval = setInterval(function ping() {
  wss.clients.forEach(function each(ws) {
    if (ws.isAlive === false) return ws.terminate();

    ws.isAlive = false;
    ws.ping();
  });
}, 30000);

wss.on('close', function close() {
  clearInterval(interval);
});

app.get('/', (req, res) => res.send('Hello World!'));

server.listen(3000, () => console.log("Listening on port: 3000"));