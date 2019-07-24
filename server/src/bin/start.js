require('module-alias/register');

// Store root directory in global
const path = require('path');
global.__rootdir = path.join(__dirname, '../..');

const { createServer } = require('Lib/server');
const config = require('Config');
const logger = require('Logger');

createServer().then(
  app =>
    app.listen(config.get('port'), () => {
      logger.info(
        `Server listening on ${config.get('port')} in ${config.get('env')} mode`
      );
    }),
  err => {
    logger.error('Error while starting up server');
    logger.error(err.stack);
    process.exit(1);
  }
);
