
# is-key

  Determine if a particular key was pressed in an event handler

## Installation

  Install with NPM, Component, or Duo:

    $ npm install bmcmahen/is-key


## Usage

```javascript
var key = require('is-key');
var isArrow = key('left', 'right', 'up', 'down');
el.onkeyup = function (e) {
  if (isArrow(e)) {
    // arrow key pressed
  }
};
```


## License

  MIT
