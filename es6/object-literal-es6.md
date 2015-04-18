Object Literal ES6
==================

## Patterns
- shorthand property names `{ a, b, c }`
- shorthand method names `{ toString () {...} }`
- computed property names
- _not included_
    + object assign
    + prototypes
    + super calls
    + methods
    + symbols


## Reference
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer


## Code Samples

    var obj = {
        // __proto__
        __proto__: theProtoObj,
        // Shorthand for ‘handler: handler’
        handler,
        // Methods
        toString() {
         // Super calls
         return "d " + super.toString();
        },
        // Computed (dynamic) property names
        [ 'prop_' + (() => 42)() ]: 42
    };
