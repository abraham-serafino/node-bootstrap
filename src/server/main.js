/* eslint no-restricted-syntax: "off", no-debugger: "off" */
const socketIo = require('socket.io');

module.exports = function main(server) {
  const io = socketIo(server);

  io.on('connection', socket => {
    console.log('a user connected');

    socket.on('chat message', message => io.emit('chat message', message));
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
};
