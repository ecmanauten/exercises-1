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


## Reference
- https://leanpub.com/understandinges6/read/#leanpub-auto-template-strings
- http://wiki.ecmascript.org/doku.php?id=harmony:quasis
- http://www.nczonline.net/blog/2012/08/01/a-critical-review-of-ecmascript-6-quasi-literals/
- [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings)
- [String.raw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw)
- http://www.2ality.com/2011/09/quasi-literals.html
- [RegExp](http://www.2ality.com/2012/12/template-strings-xregexp.html)


## Rags and Bones
- http://stackoverflow.com/search?q=%5Bjavascript%5D+template+strings+es6
- http://codepen.io/bradleyboy/posts/getting-to-know-es6-template-strings
- http://jaysoo.ca/2014/03/20/i18n-with-es6-template-strings/
- http://davidwalsh.name/javascript-template-strings
- http://updates.html5rocks.com/2015/01/ES6-Template-Strings


## Code Samples
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
    `${ x } + ${ y } = ${ x + y}`  // "1 + 2 = 3"

    String.raw `a\n${ 42 }b`  // "a\\n42b"