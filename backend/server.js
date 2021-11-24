const express = require('express');
const { setInterval } = require('timers/promises');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');
const lib = require('./modules/initialiser');

wss = new WebSocket.Server({ server:server }); // Global wss

wss.on('connection', function connection(ws) {
  ws.on('message', message => {
    console.log(`Received message => ${message}`);
    lib.init();
  })
});

wss.on('close', function close() {
  clearInterval(interval);
});

app.get('/', (req, res) => res.send('Hello World!'));

server.listen(3000, () => console.log("Listening on port: 3000"));