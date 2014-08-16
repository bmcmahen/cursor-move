var trigger = require('trigger-event');
var dom = require('dom');
var move = require('cursor-move');
var range = require('selection-range');

describe('cursor move', function () {
  var $el, el;

  beforeEach(function(){
    $el = dom('<div contenteditable="true">i would eat peanut butter ' +
    '<div id="one">off</div> the <div id="two">floor</div></div>');
    dom(document.body).append($el);
    el = $el[0];

  });

  afterEach(function () {
    $el.remove();
  });


  it('should detect mouse movement changes', function (done) {
    el.focus();
    move(el).on('change', function(pos){
      done();
    });
    range(el, { start: 5 });
    trigger(el, 'click');
  });

  it('should detect arrow key changes', function (done) {
    el.focus();
    move(el).on('change', function(pos){
      done();
    });
    trigger(el, 'keyup', { key: 'right' });
  });
})
