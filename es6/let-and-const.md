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
### `let` is a new `var`

    let x = 'zebra';

If we substitute `let` with `var` will the statement be equivalent?
- yes
- no


### `let` vs `var` && `let` vs `const`

    let x = 'zebra';
    var y = 'zebra';