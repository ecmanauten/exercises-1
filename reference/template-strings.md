Template strings provide syntactic sugar for constructing strings. This is similar to string interpolation features in Perl, Python and more. Optionally, a tag can be added to allow the string construction to be customized, avoiding injection attacks or constructing higher level data structures from string contents.

    // Basic literal string creation
    `In JavaScript '\n' is a line-feed.`

    // Multiline strings
    `In JavaScript this is
     not legal.`

    // String interpolation
    let name = "Bob", time = "today";
    `Hello ${name}, how are you ${time}?`

    // Construct an HTTP request prefix is used to interpret the replacements and construction
    GET`http://foo.org/bar?a=${a}&b=${b}
        Content-Type: application/json
        X-Credentials: ${credentials}
        { "foo": ${foo},
          "bar": ${bar}}`(myOnReadyStateChangeHandler);

# Extra Materials
- [MDN: Template Strings](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings)
- [Understanding ES6 book](https://leanpub.com/understandinges6/read/#leanpub-auto-template-strings)
- [A critical review of ECMAScript 6 quasi-literals](http://www.nczonline.net/blog/2012/08/01/a-critical-review-of-ecmascript-6-quasi-literals/)
- [ES Wiki Harmony: EcmaScript Quasi-Literals](http://wiki.ecmascript.org/doku.php?id=harmony:quasis)
- [Template strings: embedded DSLs in ECMAScript 6](http://www.2ality.com/2011/09/quasi-literals.html)