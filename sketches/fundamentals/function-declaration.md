Function declaration
====================

Prerequisites:
- increment and decrement
- function invocation
- variable declaration

- function declaration and expression
- parameters
- return keyword
- no `return` -> `undefined`
- function local scope

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
http://stackoverflow.com/questions/1013385/what-is-the-difference-between-a-function-expression-vs-declaration-in-javascrip


## Blueprint

### Sum

(1)

    function sum(a, b) {
      return a + b;
    }
    var result = sum(2, 3);

- 5
- 2
- 3
- 6 // mult
- undefined

> sum -> foo

(2) Shorthand

    function foo(a, b) { return a + b }


### Self invoke

    (function foo(a, b) { return a + b })(2, 3)

- 4
- 2
- 3
- undefined
- ReferenceError


### Undefined

    function sum(a, b) {
      console.log(a + b);
    }
    var result = sum(2, 3);

    function sum(a, b) {
      a + b;
    }
    var result = sum(2, 3);

    function foo(a, b) { a + b }
    console.log(foo(2, 3))

    function foo() { return x }
    foo(3)

- unfined
- 5
- 2
- 3
- 6


### After Return

    function foo() {
      var x = 0;
      return x;
      x = x + 1;
    }
    var result = foo();

- 0
- 1
- undefined
- ReferenceError


### Local Scope

(1)

    var bar = 0;
    function foo(a, b) {
      var bar = a + b;
      return bar;
    }
    var result = foo(2, 3);

- 5
- 0
- undefined
- 2
- 3

(2)

    var a = 2, b = 3;
    function foo(a, b) {
      return a + b;
    }
    var result = foo(a, b);

- 5
- ReferenceError
- undefined
- 2
- 3

(3)

    var x = 42;
    function foo() {
      return x;
    }
    console.log(foo());

- 42
- x
- undefined
- ReferenceError
