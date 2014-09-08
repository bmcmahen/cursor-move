/**
 * Module dependencies
 */

var getPosition = require('selection-range');
var event = require('event');
var emitter = require('emitter');
var raf = require('raf');
var arrowKey = require('is-key')('left', 'right', 'up', 'down');

/**
 * Listen for cursor movements
 * @param  {Element} el
 * @return {observeCursor}
 */

module.exports = function(el){
  var observer = {};
  var position;

  /**
   * Verify cursor position has changed
   */

  function hasChanged() {
    var pos = getPosition(el);
    if (!pos || (pos.start !== pos.end)) return false;
    if (pos.start === position) return false;
    position = pos.start;
    return true;
  }

  /**
   * Emit change event
   */

  function onChange() {
    var id = raf(function () {
      if (hasChanged()) observer.emit('change', position);
      raf.cancel(id);
    });
  }

  /**
   * Determine if 'movement' keys are pressed
   *
   * @param {Event} e
   */

  function isMovementKey(e) {
    if (!arrowKey(e)) return;
    onChange();
  }

  // Bind events
  event.bind(el, 'mouseup', onChange);
  event.bind(el, 'keyup', isMovementKey);

  emitter(observer);

  /**
   * Unbind helper
   */

  observer.unbind = function(){
    event.unbind(el, 'mouseup', onChange);
    event.unbind(el, 'keyup', isMovementKey);
  };

  return observer;
};
