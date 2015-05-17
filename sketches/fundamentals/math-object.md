Math object
===========

- `Math.pow()`
- `Math.sqrt()`
- `Math.round()`
- `Math.ceil()`
- `Math.floor()`
- `Math.abs()`
- `Math.max()`
- `Math.min()`

Examples:

    Math.pow(2) // 4
    Math.sqrt(27) // 3
    Math.round(42.4) // 42
    Math.ceil(7.004) // 8
    Math.floor(45.95) // 45
    Math.abs(-2) // 2
    Math.max(-10, -20) // -10
    Math.max(-10, -20) // -20


## Blueprint

_What's the value of this expression?_

### Algebra
> 1, 2, 3, 4, 5, 10

    Math.pow(2, 2)
[[ 4 ]]

    Math.pow(2, 3)
[[ 8 ]]

    Math.pow(2, 1)
[[ 2 ]]

---

    Math.sqrt(27)
[[ 3 ]]

> 1, 8, 27, 64, 125

    Math.abs(-2)
[[ 2 ]]

> -100...100

### Rounding

> from -99.99 to 99.99
> -90..90 + 0. + 00..99

    Math.round(20.49);
[[ 20 ]]

    Math.round(20.5);
[[ 21 ]]

    Math.round(-20.5);
[[ -20 ]]

    Math.round(-20.51);
[[ -21 ]]

    Math.ceil(7.004)
[[ 8 ]]

    Math.floor(45.95) // 45
[[ 45 ]]

### Min/Max
> from -100 to 100

    Math.max(-10, -20)
[[ -10 ]]

    Math.max(-10, -20)
[[ -20 ]]

---

### Other methods
- log, natural logarithm
- exp, exponential function _eˣ_
- sin, cos, tan
- asin, acos, atan

> The `Math.log()` function returns the natural logarithm (base _e_) of a number.

### Constants
> What's the value of this property of `Math` object?

- E, base of natural logarithms, e, 2.718
- LN2, natural logarithm of 2, 0.693
- LN10, natural logarithm of 10, 2.302
- PI, ratio of the circumference of a circle to its diameter, 3.14159
- SQRT2, square root of 2, 1.414

> The Math.SQRT2 property represents the square root of 2, approximately 1.414.