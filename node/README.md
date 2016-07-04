## module.exports for both Node.js and the browser

File: `addTwoNumbers.js`
```javascript
(function () {
    'use strict';
    var root = this;

    var addTwoNumbers = function (a, b) {
        return a + b;
    };

    // make addTwoNumbers available to both Node.js and the browser
    // this is what underscore.js does

    // check for the existence of 'module.exports'
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            // if in a Node.js context, export the normal way
            exports = module.exports = addTwoNumbers;
        }
        exports.addTwoNumbers = addTwoNumbers;
    } else {
        // if in a browser context, set addTwoNumbers as a property
        // on the window object
        root.addTwoNumbers = addTwoNumbers;
    }
}).call(this); // in the browser, 'this' is the window object
```
File: `addTwoNumbers.spec.js`
```javascript
var addTwoNumbers = require('./addTwoNumbers.js');
var expect = require('chai').expect;

describe('addTwoNumbers', function () {
    it('should add two numbers', function () {
        expect(addTwoNumbers(40, 2)).to.equal(42);
    });
});
```

http://www.richardrodger.com/2013/09/27/how-to-make-simple-node-js-modules-work-in-the-browser/

http://stackoverflow.com/questions/12571737/module-exports-client-side
