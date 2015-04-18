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

- [Variables and scoping in ECMAScript 6](http://www.2ality.com/2015/02/es6-scoping.html)
- MDN on [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) and [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)