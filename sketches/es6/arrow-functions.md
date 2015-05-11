Arrow Functions
===============

## Patterns
- lambdas, shorter to write
    + one-liners in map/reduce/etc
    + implicit return
    + omitting `()` and `{}`
    + zero arguments with `()`
    + empty function return `undefined`
- lexical `this` binding
    + it's like regular function with `.bind(this)`
- misconcepts
    - object literal in body `x => ({y: x})`
    - don't work with `new`
- geeky
    + The typeof operator returns `function` for arrow functions
    + can't change `this`
    + `call()`, `apply()`, and `bind()` are OK except for `this`


## Reference
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- http://www.2ality.com/2012/04/arrow-functions.html
- http://people.mozilla.org/~jorendorff/es6-draft.html#sec-arrow-function-definitions
- http://www.nczonline.net/blog/2013/09/10/understanding-ecmascript-6-arrow-functions/
- https://medium.com/@mrzepinski/arrow-functions-bb08eeb11667
- https://leanpub.com/understandinges6/read/#leanpub-auto-arrow-functions


## Rags and Bones
- http://es6rocks.com/2014/10/arrow-functions-and-their-scope/
- http://tc39wiki.calculist.org/es6/arrow-functions/
- http://javascriptplayground.com/blog/2014/04/real-life-es6-arrow-fn/
- http://codepen.io/bradleyboy/posts/getting-to-know-es6-arrow-functions


## Code Samples
    // Expression bodies
    var odds = evens.map(v => v + 1);
    var nums = evens.map((v, i) => v + i);
    var pairs = evens.map(v => ({even: v, odd: v + 1}));

    // Statement bodies
    nums.forEach(v => {
      if (v % 5 === 0)
        fives.push(v);
    });

    // Lexical this
    var bob = {
      _name: "Bob",
      _friends: [],
      printFriends() {
        this._friends.forEach(f =>
          console.log(this._name + " knows " + f));
      }
    }

---

    var test = {
      firstname: 'David',
      fn: function() {
        return ['one', 'two', 'tree'].map(() => this.firstname)
      }
    }
    console.log(test.fn())

    // single param, single statement
    param => expression;

    // multiple params, single statement
    (param [, param]) => expression;

    // single param, multiple statements
    param => {
        statements;
    }

    // multiple params, multiple statements
    ([param] [, param]) => {
       statements
    }

    // with no params, single statement
    () => expression;

    // with no params, multiple statements
    () => {
        statements;
    }

    // one statement, returning an object
    ([param]) => ({ key: value });