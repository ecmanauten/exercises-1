Template Strings
================

## Patterns
- interpolation
    + placeholder variable or property
    + math expressions
    + function invocation
    + another template strings
    + HTML
- multiline
    + compare with es5
    + indents
- it's just strings
    + concatenation
    + methods
    + escape backticks
- String.raw
    + escape sequences
    + regexp
- errors
    + `${} -> #{}`
    + indents
    + plain quotes
- unicode (???)


## Reference
- https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings
- https://leanpub.com/understandinges6/read/#leanpub-auto-template-strings
- http://www.nczonline.net/blog/2012/08/01/a-critical-review-of-ecmascript-6-quasi-literals/
- http://wiki.ecmascript.org/doku.php?id=harmony:quasis
- http://www.2ality.com/2011/09/quasi-literals.html
- [String.raw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw)
- [RegExp](http://www.2ality.com/2012/12/template-strings-xregexp.html)


## Rags and Bones
- http://stackoverflow.com/search?q=%5Bjavascript%5D+template+strings+es6
- http://codepen.io/bradleyboy/posts/getting-to-know-es6-template-strings
- http://jaysoo.ca/2014/03/20/i18n-with-es6-template-strings/
- http://davidwalsh.name/javascript-template-strings
- http://updates.html5rocks.com/2015/01/ES6-Template-Strings


## Code Samples

    // Basic literal string creation
    `In JavaScript '\n' is a line-feed.`

    // Multiline strings
    `In JavaScript this is
     not legal.`

    // String interpolation
    var name = "Bob", time = "today";
    `Hello ${name}, how are you ${time}?`

    // Construct an HTTP request prefix is used to interpret the replacements and construction
    GET`http://foo.org/bar?a=${a}&b=${b}
        Content-Type: application/json
        X-Credentials: ${credentials}
        { "foo": ${foo},
          "bar": ${bar}}`(myOnReadyStateChangeHandler);

---

    `My name is ${ person }`

    // Wrong interpolation
    ${} -> #{}

    // Basic literal string creation
    `In JavaScript '\n' is a line-feed.`

    // Multiline strings
    `In JavaScript this is
     not legal.`

    // String interpolation
    var name = "Bob", time = "today";
    `Hello ${name}, how are you ${time}?`

    // Construct an HTTP request prefix is used to interpret the replacements and construction
    GET`http://foo.org/bar?a=${a}&b=${b}
        Content-Type: application/json
        X-Credentials: ${credentials}
        { "foo": ${foo},
          "bar": ${bar}}`(myOnReadyStateChangeHandler);

    var s = `a
        b
        c`;
    assert(s === 'a\n    b\n    c');

    console.log(`23`);

    var x = 1;
    var y = 2;
    `${ x } + ${ y } = ${ x + y }`  // "1 + 2 = 3"

    String.raw`a\n${ 42 }b`  // "a\\n42b"


---

## Blueprint

### Interpolation: Single Variable 1
    let username = 'root';
    let greeting = `Hello, ${ username }`;

- 'Hello, ${ username }'
- 'Hello, root'
- 'Hello, username'
- 'Hello, '

+ Shadow `#`/`` Error
+ Desugaring
+ Undefined

> Unlike CoffeeScript, ES6...


### Interpolation: Single Variable 2
    let n = 15;
    console.log(`Oh, ${ n } alligators!`);

- 'Oh, 15 alligators'
- '${ n } alligators'
- 'Oh, n alligators'
- 'Oh, undefined alligators'
- SyntaxError

+ Shadow `#`/`` Error
+ Desugaring
+ Undefined


### Interpolation: Double Substitution
    let item1 = 'voice';
    let item2 = 'volcano';
    
    let demand = `I need your ${ item1 } and your ${ item2 }`;

- 'I need your voice and your ornament'
- 'I need your ${ item1 } and your ${ item2 }'
- 'I need your item1 and your item2'
- 'I need your undefined and your undefined'
- SyntaxError

+ Shadow `#`/`` Error
+ Desugaring
+ Undefined


### Expressions: Math Expressions 1
    let x = 1, y = 2;
    `${ x } + ${ y } = ${ x + y }`

Enter the resulting string (without quotes)
> Input [[ 1 + 2 = 3 ]]


### Expressions: Template String Inside Template String
    let lang = 'React';
    let str = `So You ${ `Can ${ lang }` } While You ${ lang }`;

> React, LISP, Recurse, Code, Sleep, Eat...

- 'So You Can React While You React'
- 'So You ${ `Can ${ lang }` } While You ${ lang }'
- 'So You Can ${ lang } While You React'
- 'SyntaxError'
- 'So You Can undefined While You React'

+ Shadow `#`/`` Error


### Quotes: Two Types of Quotes
    let artist = 'Lil B';
    let song = 'No Black Person Is Ugly';
    console.log(`"${song}", ${artist}`);

- '"No Black Person Is Ugly", Lil B'
- '"${song}", ${artist}'
- SyntaxError
- '"undefined", undefined'


### Quotes: Escaping Backticks
    let markdown = `The variable \`result\` bound to the context.`;

- 'The variable `result` bound to the context.'
- 'The variable \`result\` bound to the context.'
- 'The variable undefined bound to the context.'
- 'The variable \'
- SyntaxErorr


### Error: SyntaxError because of quotes
    let markdown = `The variable `result` bound to the context.`;

- SyntaxErorr
- 'The variable `result` bound to the context.'
- 'The variable \`result\` bound to the context.'
- 'The variable undefined bound to the context.'
- 'The variable \'


### Multiline: Strings Simple
    console.log(`Disruptive
    innovation`);

- 'Disruptive\ninnovation'
- 'Disruptive innovation'
- 'Disruptiveinnovation'
- SyntaxError


### Multiline: Strings Surprise Indents
    var s = `a
        b
        c`;
    assert(s === 'a\n    b\n    c');

- 'a\n    b\n    c'
- 'a    \nb    \nc'
- 'abc'
- 'a\nb\nc'
- SyntaxError


### String.Raw
    let name = 'Bob';
    String.raw`Hi\n${name}!`;
    // 'Hi\\nBob!', substitutions are processed.

- 'Hi\\nBob!'
-
    'Hi
    Bob!'
- SyntaxError


### Error: Wrong Interpolation Symbol
### Error: Interpolation variable is undefined
### Error: Actual Syntax Error
