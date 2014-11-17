var key = require('is-key');
var assert = require('assert');
var isKey = key('a', 'shift', 'left');
// 65, 16, 37

describe('is-key', function () {

  it('should recognize certain keys', function () {
    var e = { keyCode: 65 };
    assert(isKey(e));
    e = { keyCode: 16 };
    assert(isKey(e))
    e = { keyCode: 37 };
    assert(isKey(e));
  });

  it('should not trigger certain keys', function () {
    var e = { keyCode: 10 };
    assert(!isKey(e));
  });

});
