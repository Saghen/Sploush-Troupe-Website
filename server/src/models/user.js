const bcrypt = require('bcrypt');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let validateLocalStrategyProperty = function(property) {
  return property.length;
};

let validatePassword = function(password) {
  return (
    password &&
    password.length >= 8 &&
    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+/.test(password)
  );
};

let UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: true,
    index: true,
    validate: [validateLocalStrategyProperty, 'Please fill in your email'],
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: true,
    validate: [
      validatePassword,
      'Password must contain an uppercase, lowercase, and a digit and be atleast 8 characters.'
    ]
  },
  admin: {
    type: Boolean,
    required: true,
    default: true
  }
});

/**
 * Password hashing
 */
UserSchema.pre('save', async function(next) {
  let user = this;
  if (!user.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt, null);
  user.password = hash;
  next();
});

/**
 * Password compare
 */
UserSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password)
};

let User = mongoose.model('User', UserSchema);

module.exports = User;
