Function invocation
===================

## Patterns
- function call operator `()`
- number of arguments, `,` operator
- types of arguments
- function is expression, returns result
- nested function calls

Calling function without arguments:

    getTime()

Forgot invocation operator `()`:

    getTime

Calling function with one argument:

    square(5)
    alert('Hello, World!')
    console.log(42)


Calling function with two arguments:

    max(3, 4) // 3
    add(3, 4) // 7


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

    [1,2,3].reduce(function(acc, elem) { return acc * elem }, 1)


See also:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
- http://eloquentjavascript.net/03_functions.html


## Blueprint

### ZeroArguments

How many arguments?

    alert('Hello, World!')

- 1
- 0
- 2
- 3

### OneArgument

How many arguments?

    getTime()

- 0
- 1
- 2
- 3

### TwoArguments

How many arguments?

    max(3, 4)
    console.log('The result is: ', x);

- 2
- 0
- 1
- 3


### NestedCallsCount

How many function calls?

    a(b(c()))

- 3
- 2
- 1
- 0

...

    a(b(c()))

    a() b() c()

    a()

    console.log(square(4))    


### NestedCallsArgument

What argument function `a` called with?

    a(b(c()))

- b(c())
- c()
- b()
- b

What argument function `a` called with?

    square(square(2))

- square(2)
- square
- 2
- square(square(2))


### ReturningValue

What’s the returning value of this function call?

    max(3, 4)

_Assume that function `max` returns greatest number from list of arguments._

- 3
- 4
- 0
- 1
- 2

> add, sub, min
> add1, square, abs
