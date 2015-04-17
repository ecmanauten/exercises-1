Destructuring
=============

# Patterns
- Array destructuring
    + assignment without declaration
    + swapping variables
    + multiple-value returns
    + ignoring some returned values
    + pulling values from a regular expression match
- Object destructuring
    + Simple example
    + Assignment without declaration
    + Function argument defaults
    + Nested object and array destructuring
    + Computed object property names and destructuring
- ...rest?
- `undefined` by default, `foo["bar"]` producing undefined values when not found


# Reference
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
- http://www.2ality.com/2015/01/es6-destructuring.html


# Rags and Bones
- http://ariya.ofilabs.com/2013/02/es6-and-destructuring-assignment.html
- http://raganwald.com/2015/02/02/destructuring.html
- http://odetocode.com/blogs/scott/archive/2014/09/11/features-of-es6-part-6-destructuring.aspx
- http://wiki.ecmascript.org/doku.php?id=harmony:destructuring
- https://leanpub.com/understandinges6/read/#leanpub-auto-destructuring-assignment


# Code Samples

    // list matching
    var [a, , b] = [1,2,3];

    // object matching
    var { op: a, lhs: { op: b }, rhs: c }
           = getASTNode()

    // object matching shorthand
    // binds `op`, `lhs` and `rhs` in scope
    var {op, lhs, rhs} = getASTNode()

    // Can be used in parameter position
    function g({name: x}) {
      console.log(x);
    }
    g({name: 5})

    // Fail-soft destructuring
    var [a] = [];
    a === undefined;

    // Fail-soft destructuring with defaults
    var [a = 1] = [];
    a === 1;
