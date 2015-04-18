Block-scoped binding constructs. `let` is the new `var`. `const` is single-assignment. Static restrictions prevent use before assignment.

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

- [Getting to know ES6: Variable declaration](http://codepen.io/bradleyboy/posts/getting-to-know-es6-variables)
- MDN on [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) and [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)