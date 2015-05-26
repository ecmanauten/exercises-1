Operator properties
===================

Operators:
- `.` `[]` (refinement)
- `()` `new` (invocation, create)
- `!` `-` `+` `++` `--` `typeof` `delete` (unary operators)
- `*` `/` `%` (Multiplication, division, remainder)
- `+` `-` (Addition/concatenation, subtraction)
- `<` `<=` `>` `>=` (inequality)
- `in` `instanceof` (objects and keys)
- `===` `!==` (strict equality)
- `&&` `||` (Logical and Logical or)
- `?:` (ternary)
- `=` `+=` `-=` `*=` `/=` `%=` (assignment)
- `,` (comma)

Terminology:
- unary
- binary
- ternary
- infix
- postfix
- prefix
- operand

Exam:
- name: e.g. `!==` → strict equality
- compute: e.g `2!` → `false`
- operator type: e.g. binary/infix

See also:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
- [MSDN JavaScript Operators](https://msdn.microsoft.com/library/ce57k8d5(v=vs.94).aspx)
- [MSDN Operator Precedence](https://msdn.microsoft.com/en-US/library/z3ks45k7(v=vs.94).aspx)


## Blueprint

### Unary, prefix
`-` `+` `!` `typeof` `++` `--`

### Unary, postfix
`++` `--`

### Binary, infix
`-` `+` `*` `/` `%`
`<` `<=` `>` `>=`
`===` `!==`
`&&` `||`
`=` `+=` `-=` `*=` `/=` `%=`

### Ternary
`?:`

### And also
`,` `()`
`delete` `new` `instanceof` `in`
`void`
bitwise operators
ES6 operators


---

- unary
- binary
- ternary

- infix
- prefix
- postfix

---

### Unary, prefix

#### Number sign operators
`-` `+`

    -12

#### Logic not operator
`!`

    !bar
    !false
    !''

#### Type Of
`typeof`

    typeof true
    typeof 'abc'
    typeof 42

#### Increment and decrement
`++` `--`

    ++x


### Unary, postfix

#### Increment and decrement

`++` `--`

    someVar--


### Binary, infix

#### Arithmetic operators

`-` `+` `*` `/` `%`

    40 / 3


#### Inequality operators

`<` `<=` `>` `>=`

    -3 < 25


#### Comparison Operators

`===` `!==`

    'abc' !== 'bcd'


#### Logic Operatos

`&&` `||`

    true && false


#### Assignment operators

`=` `+=` `-=` `*=` `/=` `%=`

    x += 1


### Ternary, infix
`?:`

    isTrue ? x : undefined

    false ? 1 : 0

    foo ? 'abc' : null

    x ? 'correct' : 'false'

