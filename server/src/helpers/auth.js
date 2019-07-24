const config = require('Config');
const koaJWT = require('koa-jwt');
const jwt = require('jsonwebtoken');

module.exports = {
  userToToken(user) {
    return jwt.sign({
      email: user.email,
      admin: user.admin
    }, config.get('auth').JWTSecret)
  },

  jwtMiddleware(passthrough = false) {
    return koaJWT({
      cookie: 'token',
      secret: config.get('auth').JWTSecret,
      passthrough
    });
  }
};
