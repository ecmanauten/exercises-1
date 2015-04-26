Let and Const
===============

> The `let` is a new `var`.


## Patterns
- block scope (not function scope)
    + functions
    + loops
    + ifs
- `let` does not hoist the variable to the top of the block
- you can't call `let` variable before creating (as in case with `var`)
- redeclaration of the same variable in the same block scope raises a `TypeError`
- `const` is like one-time `let`, read-only

## Reference
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
- http://www.2ality.com/2015/02/es6-scoping.html
- http://codepen.io/bradleyboy/posts/getting-to-know-es6-variables
- https://medium.com/@mrzepinski/let-const-35bca3b4a3c6

## Rags and Bones
- https://strongloop.com/strongblog/es6-variable-declarations/

## Code Samples
    function f() {
      {
        let x;
        {
          // okay, block scoped name
          const x = "sneaky";
          // error, const
          x = "foo";
        }
        // error, already declared in block
        let x = "inner";
      }
    }

---

## Problems
### If Statement Abstract Inner Scope (DONE)
    if (true) {
      let x = 0;
    }
    x // ReferenceError

### If Statement Abstract Outer Scope (DONE)
    let x = 0;
    if (true) {
      x += 1;
    }
    x // 1

### Loop (DONE)
    for (let x = 0; x < 5; x++) {
      // <...>
    }
    console.log(x);

### Loop 2 (DONE)
    let x = 0;
    while (x < 5) {
      // <...>
      x++;
    }
    console.log(x);

### If Statement `x` and `y` Abstract
    let x = 0;
    if (true) {
      let y = x;
    }
    console.log(y); // 0

### Function scope vs Block scope
    function foo() {
      let x = 0;
      if (true) {
        var y = x + 1;
      }
      return y; // 1
    }

### Shadowing
    function func() {
      let foo = 0;
      if (true) {
         let foo = 10; // shadows outer `foo`
      }
      console.log(foo); // 5
    }

### Parameter Shadowing
    function foo(x) {
      if (true) {
        let x = 42;
      }
    }


https://strongloop.com/strongblog/es6-variable-declarations/
### Constant reference, not value 1
    const x = {};
    x.name = 'Sergey';
    console.log(x);

### Constant reference, not value 2
    const x = [];
    x.push('Sergey');
    console.log(x);


### Block Statements
- function
- if/else
- switch
- for/while
- try/catch
* var
* 