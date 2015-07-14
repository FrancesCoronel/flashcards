var http = require('http');
var server = http.createServer();
var app = require('./app');

server.on('request', app)

module.exports = server;