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

Radio (+Multiline), Input

### Hello, %username
    let username = 'root';
    let greeting = `Hello, ${ username }`;

- 'Hello, ${ username }'
- 'Hello, root'
- 'Hello, username'
- 'Hello, '

### Single Literal Substitution
    let n = 15;
    console.log(`Oh, ${ n } alligators!`);

- 'Oh, 15 alligators'
- '${ n } alligators'
- 'Oh, n alligators'
- 'Oh, undefined alligators'
- SyntaxError

### Triple Substitution
    let item1 = 'voice';
    let item2 = 'volcano';
    let item3 = 'ornament';
    
    let demand = `I need your ${ item1 }, your ${ item2 }, and your ${ item3 }`;

- 'I need your voice, your volcano and your ornament'
- 'I need your ${ item1 }, your ${ item2 }, and your ${ item3 }'
- 'I need your item1, your item2, and your item3'
- 'I need your undefined, your undefined, and your undefined'
- SyntaxError

### Three Types of Quotes
    `... '...' .., ... "..."`

    `He said: 'We're going to ${ city } to find "🐢" there.'`

### Two Types of Quotes
    let artist = 'Lil B';
    let song = 'No Black Person Is Ugly';
    console.log(`"${song}", ${artist}`)

- '"No Black Person Is Ugly", Lil B'
- '"${song}", ${artist}'
- SyntaxError
- '"undefined", undefined'

### Escaping Backticks
    let markdown = `The variable \`result\` bound to context.`;

### Multiline Strings Simple
### Multiline Strings Surprise Indents
    var s = `a
        b
        c`;
    assert(s === 'a\n    b\n    c');

### Math Expressions
    var x = 1;
    var y = 2;
    `${ x } + ${ y } = ${ x + y }`  // "1 + 2 = 3"

### String.raw
    String.raw`a\n${ 42 }b`  // "a\\n42b"


### Template String Inside Template String
### Any Expression Inside Interpolation


### Error: Wrong Interpolation Symbol
### Error: Interpolation variable is undefined
### Error: SyntaxError because of quotes