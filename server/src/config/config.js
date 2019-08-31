const convict = require('convict');
const path = require('path');

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  ssl: {
    doc: 'Toggle to enable/disable HTTPS encryption',
    type: Boolean,
    default: false
  },
  domain: {
    doc:
      'The domain that the node or nginx server is hosted on <-- not the port of the node server',
    type: String,
    default: 'localhost:8080'
  },
  ip: {
    doc: 'The IP address to bind.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT',
    arg: 'port'
  },
  server: {
    stackTrace: {
      doc:
        'Emit a stack trace to the browser when an error is thrown on a request',
      format: Boolean,
      default: false
    }
  },
  db: {
    host: {
      doc: 'Database host name/IP',
      format: '*',
      default: 'localhost'
    },
    name: {
      doc: 'Database name',
      format: String,
      default: 'sploush-troupe'
    },
    port: {
      doc: 'Database port',
      format: Number,
      default: 27017
    },
    auth: {
      enabled: {
        doc:
          'Whether to perform authentication or not when connecting to the database',
        format: Boolean,
        default: false
      },
      username: {
        doc: 'Username for database authentication',
        format: String,
        default: 'admin'
      },
      password: {
        doc: 'Password for database authentication',
        format: String,
        default: 'admin'
      }
    }
  },
  logger: {
    handleExceptions: {
      doc: 'Enable the handling of exceptions',
      format: Boolean,
      default: false
    },
    console: {
      enabled: {
        doc: 'Whether console logging is enabled or not',
        format: Boolean,
        default: true
      },
      level: {
        doc: 'Log only if level less than or equal to this level',
        format: ['error', 'warn', 'info', 'verbose', 'debug', 'silly'],
        default: 'debug'
      }
    },
    file: {
      enabled: {
        doc: 'Whether file logging is enabled or not',
        format: Boolean,
        default: true
      },
      level: {
        doc: 'Log only if level less than or equal to this level',
        format: ['error', 'warn', 'info', 'verbose', 'debug', 'silly'],
        default: 'debug'
      },
      path: {
        doc:
          'Relative path from the root of the server folder to the log folder',
        format: String,
        default: 'log'
      },
      filename: {
        doc: 'Name of log file including extension',
        format: String,
        default: 'server.log'
      }
    }
  },
  auth: {
    enabled: {
      doc:
        'Toggle for enabling or disabling authentication for testing/development',
      format: Boolean,
      default: true
    },
    username: {
      doc: 'Username for authentication',
      format: String,
      default: 'admin'
    },
    password: {
      doc: 'Password for authentication',
      format: String,
      default: 'admin'
    }
  },
  images: {
    path: {
      doc: 'The path to the optimized image folders',
      format: String,
      default: path.join(global.__rootdir, '../gulp-images/images')
    }
  },
  twitch: {
    clientId: {
      doc: 'Client Id for Twitch API',
      format: String,
      default: ''
    },
    clientSecret: {
      doc: 'Client Secret for Twitch API',
      format: String,
      default: ''
    },
    cacheTTL: {
      doc: 'Timeout for cached items',
      format: Number,
      default: 60 * 15 // Timeout for cached twitch info
    }
  }
});

const activeConfigs = require('./activeConfigs.json');

for (const configName of activeConfigs) {
  config.loadFile(path.join(__dirname, `./configs/${configName}.json`));
}

config.validate({ allowed: 'strict' });

module.exports = config;
