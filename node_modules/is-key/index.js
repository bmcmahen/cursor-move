/**
 * Module dependencies
 */

var keycode;

try {
  keycode = require('keycode');
} catch(err) {
  keycode = require('yields-keycode');
}

/**
 * is key
 *
 * @param  {Array} keys
 * @return {Function}
 */

module.exports = function () {
  var keys = {};
  for (var i = 0; i < arguments.length; i++) {
    keys[keycode(arguments[i])] = true;
  }
  return function (e) {
    return keys[e.keyCode || e.charCode];
  };
};
