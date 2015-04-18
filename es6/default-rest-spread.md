Default parameters, rest and spread
===================================

## Main Theme
`function ( /* EVERYTHING INSIDE */ ) { ... }`

## Patterns
- default value
    + literals
    + even functions
- `...rest` as `arguments`
- default values of destructured components
    + `function ({x, y = 5}) { ... }`
    + `function ([x, y=1, z=2]) { ... }`


## Reference
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

## Rags and Bones
- http://dmitrysoshnikov.com/ecmascript/es6-notes-default-values-of-parameters/

## Code Samples

    function f(x, y=12) {
      // y is 12 if not passed (or passed as undefined)
      return x + y;
    }
    f(3) == 15
    function f(x, ...y) {
      // y is an Array
      return x * y.length;
    }
    f(3, "hello", true) == 6
    function f(x, y, z) {
      return x + y + z;
    }
    // Pass each elem of array as argument
    f(...[1,2,3]) == 6
