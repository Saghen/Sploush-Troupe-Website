const User = require('Models/user');
const config = require('Config');

module.exports = async () => {
  const { username, password } = config.get('auth');
  console.log(config.get('auth'));
  if (await User.findOne({ username }).exec()) return;

  const user = new User({ username, password });
  await user.save();
}
