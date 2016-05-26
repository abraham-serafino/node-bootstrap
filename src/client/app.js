const io = require('socket.io-client');

document.addEventListener('DOMContentLoaded', () => {
  const socket = io.connect('http://localhost:9090');

  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const $m = document.querySelector('#m');
    socket.emit('chat message', $m.value);
    $m.value = '';
  });

  socket.on('chat message', message => {
    const liNode = document.createElement('li');
    liNode.appendChild(document.createTextNode(message));
    document.querySelector('#messages').appendChild(liNode);
  });
});
