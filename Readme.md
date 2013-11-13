
# cursor-change

  an event emitter for when the cursor position changes in a contenteditable document

## Installation

  Install with [component(1)](http://component.io):

    $ component install bmcmahen/cursor-change

## Usage

```javascript
var el = document.getElementsByTagName('div')[0];
var cursor = require('cursor-change')(el);
cursor.on('change', function(pos){
  console.log('changed to', pos);
});

setTimeout(function(){
  cursor.unbind();
}, 10000);
```

## Note

This specifically does not emit an event for selections. For that, use `bmcmahen/monitor-text-selection`.

## License

  MIT
