const express = require('express');
const router = require('./users/users-router')
const server = express();
const middlewares = require('./middleware/middleware')
server.use(middlewares.logger)
server.use(express.json())

server.use(router)

server.use(middlewares.errorHandler)
module.exports = server;
