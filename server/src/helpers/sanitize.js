/**
 * Takes in an object or string and removes $ characters. Also removes undefined values from object.
 * @param {Object || string} toSanitize
 */
function sanitizeAny(toSanitize) {
  if (toSanitize instanceof Object) {
    for (const [key, value] of Object.entries(toSanitize)) {
      if (value === undefined) delete toSanitize[key];
      else toSanitize[key] = sanitizeString(value);
    }
  } else if (toSanitize === undefined || toSanitize === null) return;
  else toSanitize = sanitizeString(toSanitize);
  return toSanitize;
}

function sanitizeString(val) {
  if (typeof val !== 'string') return val;
  return val.split('$').join('');
}

module.exports = sanitizeAny;
