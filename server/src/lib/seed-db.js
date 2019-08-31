const User = require('Models/User');
const config = require('Config');

module.exports = async () => {
  const { username, password } = config.get('auth');
  if (await User.find({ username })) return;

  const user = new User({ username, password });
  await user.save();
}
