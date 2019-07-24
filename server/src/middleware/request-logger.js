const config = require('Config');

const path = require('path');
const loggerConfig = config.get('logger');
const fs = require('fs');

const volleyball = require('volleyball');
const stripAnsi = require('strip-ansi');

const accessLogStream = fs.createWriteStream(
  path.join(__rootdir, loggerConfig.file.path, loggerConfig.file.filename),
  { flags: 'a' }
);

module.exports = function() {
  const loggers = [volleyball];
  if (loggerConfig.file.enabled)
    loggers.push(
      volleyball.custom({
        debug: logLine => accessLogStream.write(`${stripAnsi(logLine)}\n`)
      })
    );

  return async (ctx, next) => {
    for (const logger of loggers) {
      logger(ctx.req, ctx.res, () => {});
    }
    return next();
  };
};
