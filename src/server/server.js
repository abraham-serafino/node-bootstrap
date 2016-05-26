/* eslint new-cap: ["error", { "capIsNewExceptions": ["Server"] }] */

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
  console.log('a user connected');

  socket.on('chat message', message => io.emit('chat message', message));
  socket.on('disconnect', () => console.log('user disconnected'));
});

http.listen(9090, () => console.log('listening on localhost:9090'));

module.exports = { express, app, http };
