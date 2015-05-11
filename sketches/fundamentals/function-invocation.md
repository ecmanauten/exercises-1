Function Invocation
===================

Calling function without arguments:

    getTime()


Calling function with one argument:

    square(5)
    alert('Hello, World!')
    console.log(42)


Calling function with two arguments:

    max(3, 4)


Calling function with the result of calling of another function:

    square(square(2))
    console.log(square(4))
    max(square(2), square(3))
    a(b(c()))
    c(b(a()))


Calling functions one after another:

    a()
    b()
    c()


Function's arguments can be any type:

    reduce([1,2,3], function(acc, elem) { return acc * elem }, 1)


See also:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
- http://eloquentjavascript.net/03_functions.html