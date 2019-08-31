const config = require('Config');
const koaJWT = require('koa-jwt');
const jwt = require('jsonwebtoken');

module.exports = {
  userToToken(user) {
    return jwt.sign({
      username: user.username,
      admin: user.admin
    }, config.get('auth').JWTSecret)
  },

  jwtMiddleware(passthrough = false) {
    return koaJWT({
      secret: config.get('auth').JWTSecret,
      passthrough
    });
  }
};
