const { createLogger, format, transports } = require('winston');
const { combine, colorize, simple } = format;
const config = require('Config');
const path = require('path');
const fs = require('fs');

const activeTransports = [];

const loggerConfig = config.get('logger');

/**
 * Console Transporter
 */
if (loggerConfig.console.enabled) {
  activeTransports.push(
    new transports.Console({
      level: loggerConfig.console.level,
      format: combine(colorize(), simple()),
      handleExceptions: loggerConfig.handleExceptions
    })
  );
}

/**
 * File Transporter
 */
if (loggerConfig.file.enabled) {
  const logDir = path.join(__rootdir, loggerConfig.file.path);

  try {
    fs.mkdirSync(logDir);
  } catch(err) {}
  

  activeTransports.push(
    new transports.File({
      level: loggerConfig.file.level,
      filename: path.join(logDir, loggerConfig.file.filename),
      timestamp: true,
      prettyPrint: true,
      humanReadableUnhandledException: true
    })
  );
}

module.exports = createLogger({
  transports: activeTransports
});
