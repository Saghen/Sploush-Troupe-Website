'use strict';

let logger = require('Logger');
let config = require('Config');

let chalk = require('chalk');
let mongoose = require('mongoose');

const ConnectionString = require('Helpers/connection-string-builder');

module.exports = async function() {
  let db;
  let dbConfig = config.get('db');

  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }
  logger.info('Connecting to Mongo ' + dbConfig.host + '...');

  try {
    const connectionString = new ConnectionString({
      database: dbConfig.name,
      username: dbConfig.auth.enabled ? dbConfig.auth.username : undefined,
      password: dbConfig.auth.enabled ? dbConfig.auth.password : undefined,
      hosts: [{ host: dbConfig.host, port: dbConfig.port }]
    });

    db = await mongoose.connect(connectionString.toString(), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true
    });
  } catch (err) {
    logger.error('Could not connect to MongoDB!');
    return logger.error(err);
  }

  mongoose.set('debug', config.get('env') === 'development');

  mongoose.connection.on('error', function mongoConnectionError(err) {
    if (err.message.code === 'ETIMEDOUT') {
      logger.warn('Mongo connection timeout!', err);
      setTimeout(() => {
        mongoose.connect(config.db.uri, config.db.options);
      }, 1000);
      return;
    }

    logger.error('Could not connect to MongoDB!');
    return logger.error(err);
  });

  mongoose.connection.once('open', function mongoAfterOpen() {
    logger.info(chalk.yellow.bold('Mongo DB connected.'));
    logger.info('');
    if (config.env !== 'production') {
      // TODO: Implement seeding database
      // require('./seed-db')();
    }
  });

  return db;
};
