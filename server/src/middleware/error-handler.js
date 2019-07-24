const logger = require('Logger');
const config = require('Config');

/**
 * Error handler middleware.
 * Uses status code from error if present.
 */
module.exports = async function errorHandler(ctx, next) {
  try {
    await next()
  } catch (err) {
    /* istanbul ignore next */
    ctx.status = err.statusCode || 500
    /* istanbul ignore next */
    ctx.body = err.toJSON ? err.toJSON() : { message: err.message, ...err }
    /* istanbul ignore next */
    if (!config.get('server').stackTrace) {
      delete ctx.body.stack
    }
    logger.error('Error in request')
    logger.error(err.stack)
  }
}
