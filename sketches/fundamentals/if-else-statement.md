If/else statement
=================


General form:

    if (expression)
      statement


    if (condition1)
       statement1
    else if (condition2)
       statement2
    else if (condition3)
       statement3
    ...
    else
       statementN


- constructs
  - if
  - if/else
  - if/else if/else
- optional braces `{ }`
- nested if/else



Single `if` statetement:

    // Form : Single If
    if (condition) {
      // code that runs if the condition is true
    }


`if`/`else` statement:

    // If the condition is true, statement1 will be executed.
    // Otherwise, statement2 will be executed.
    if (condition) {
      // statement1: code that runs if condition is true
    } else {
      // statement2: code that runs if condition is false
    }


`if`/`else if`/`else` statement:

    // Form : else if . If the condition is true, statement1 will be executed. Otherwise, condition2 is checked . if it is true , then statement2 is executed. Else , if nothing is true , statement3 is executed.
    if (condition1) {
      statement1;
    } else if (condition2) {
      statement2;
    } else {
      statement3;
    }

http://www.codecademy.com/glossary/javascript/if-statement


## Blueprint

_No side-effects and outside dependencies._

### SingleIfTrue
Will the statement be printed to the console?

    if (true) {
      console.log('True!');
    }

    if (true)
      console.log('True!');

    if (true) console.log('True!');

- yes
- no
- SyntaxError

true, typeof 'foo' === 'String', 12 < 55, 42, "abc"

### SingleIfFalse
    if (false) {
      console.log('True!');
    }

- yes
- no
- SyntaxError

null, undefined, '', 0, -0, NaN

### SingleIfError
    if true {
      console.log('True!');
    }

- yes
- no
- SyntaxError

### SingleIfMultipleStatements

What value is stored in variable `x` after running this code?

    x = 0;
    if (x > 0)
      x = x + 1;
      x = x + 1;

- 0
- 1
- 2
- SyntaxError


### IfElse
    if (true) {
      123
    } else {
      123
    }
