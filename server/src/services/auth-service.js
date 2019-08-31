const { NotFound, Forbidden, BadRequest } = require('fejl');

const UserDB = require('./db/user-db');
const userClient = new UserDB();

module.exports = class AuthService {
  /**
   * Verifies the code from the OpenID exchange is valid. Creates an account if one does not already exist.
   * @param {String} url Raw Request URL
   */
  async login({ username, password }) {
    BadRequest.assert(
      username && password,
      'An username and password must be provided'
    );

    const user = await userClient.get({ username });
    NotFound.assert(user, 'User not found');

    const isValid = await user.comparePassword(password);
    Forbidden.assert(isValid, 'Password is incorrect');

    return user;
  }
};
