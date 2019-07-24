const http = require('http');
const enableDestroy = require('server-destroy');
const Koa = require('koa');
const cors = require('@koa/cors');
const respond = require('koa-respond');
const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');

const logger = require('Logger');
const notFoundHandler = require('Middleware/not-found');
const errorHandler = require('Middleware/error-handler');
const requestLogger = require('Middleware/request-logger');

const mongo = require('Lib/mongo');
const mongoose = require('mongoose');

/**
 * Creates and returns a new Koa application.
 * Does *NOT* call `listen`!
 *
 * @return {Promise<http.Server>} The configured app.
 */
module.exports.createServer = async function createServer() {
  logger.info('Creating server...');

  const db = await mongo();

  const app = new Koa();

  app
    .use(errorHandler)
    // Adds ctx.ok(), ctx.notFound(), etc..
    .use(respond())
    .use(cors())
    .use(bodyParser())
    .use(requestLogger())
    // Load routes
    .use(require('Routes/').routes())
    .use(require('Routes/').allowedMethods())
    // Default handler when nothing stopped the chain.
    .use(notFoundHandler);

  const server = http.createServer(app.callback());

  enableDestroy(server);

  server.on('close', () => {
    mongoose.connection.close();
    server.destroy();
    logger.info('Server closing, bye!');
  });

  logger.info('Server created, ready to listen');
  return server;
};
