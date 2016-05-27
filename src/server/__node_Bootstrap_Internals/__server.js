/* eslint new-cap: ["error", { "capIsNewExceptions": ["Server"] }] */

const http = require('http');
const express = require('express');
const mainApp = require('../main');

module.exports = function createServer(port) {
  const socketPort = port || 9090;
  const server = http.Server(express());

  mainApp(server);

  server.listen(socketPort, () =>
      console.log(`listening on localhost:${socketPort}`));

  return server;
};
