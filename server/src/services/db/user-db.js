const User = require('Root/models/user');

module.exports = class UserDB {
  /**
   * Gets a user via their email
   * @param {String} email 
   */
  async get({ email }) {
    return User.findOne({ email }).exec();
  }

  /**
   * Creates and stores a new user
   * @param {Object} param0 Email and Password for new account
   */
  async create({ email, password }) {
    const user = new User({ email, password });
    await user.save();

    return user;
  }
};
