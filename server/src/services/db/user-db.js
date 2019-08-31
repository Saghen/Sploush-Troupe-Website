const User = require('Root/models/user');

module.exports = class UserDB {
  /**
   * Gets a user via their email
   * @param {String} email
   */
  async get({ username }) {
    return User.findOne({ username }).exec();
  }

  /**
   * Creates and stores a new user
   * @param {Object} param0 Email and Password for new account
   */
  async create({ username, password }) {
    const user = new User({ username, password });
    await user.save();

    return user;
  }
};
