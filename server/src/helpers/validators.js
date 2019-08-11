const { format } = require('url');

module.exports = {
  isObjectId(str) {
    return /^[a-f\d]{24}$/i.test(str);
  },

  urlIsValid(url) {
    return format(url) === url && typeof url === 'string';
  }
};
