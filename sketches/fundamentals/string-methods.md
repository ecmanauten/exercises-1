String methods
==============

    var s = "hello, world"      // Start with some text.
    s.charAt(0)                 // => "h": the first character.
    s.charAt(s.length-1)        // => "d": the last character.
    s.substring(1,4)            // => "ell": the 2nd, 3rd and 4th characters.
    s.slice(1,4)                // => "ell": same thing
    s.slice(-3)                 // => "rld": last 3 characters
    s.indexOf("l")              // => 2: position of first letter l.
    s.lastIndexOf("l")          // => 10: position of last letter l.
    s.indexOf("l", 3)           // => 3: position of first "l" at or after 3
    s.split(", ")               // => ["hello", "world"] split into substrings
    s.replace("h", "H")         // => "Hello, world": replaces all instances
    s.toUpperCase()             // => "HELLO, WORLD"

- manipulations
  - `.replace()`
  - `.slice()`
  - `.substr()`
  - `.trim()`
  - `.concat()`
- char manipulation
  - `.toLowerCase()`
  - `.toUpperCase()`
  - `.charAt()`
  - `.charCodeAt()`
- property
  - `.length`
- search
  - `.indexOf()`
  - `.lastIndexOf()`
- regexp patterns
  - `.test()`
  - `.search()`
  - `.exec()`

See also:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype


## Blueprint

- manipulations
  - `.replace()`
  - `.slice()`
  - `.substr()`
  - `.trim()`
  - `.concat()`
- char manipulation
  - `.toLowerCase()`
  - `.toUpperCase()`
  - `.charAt()`


### Two form of questions

What's the returning value of this expression?

    'boing'.length

Which value will print to the console?

    var vehicle = 'boing';
    console.log(vehicle.length);


### .length property
    'boing'.length

{{ 5 }}

> short words from 6 and under


### charAt

    'market'.charAt(3)

- k
- r
- e
- t
- a

> word with 5 and more chars

+ char out of range
+ zero char
+ last char (length-1)


### toLowerCase / toUpperCase

    'Capital Case'.toLowerCase()

- 'capital case'
- 'CAPITAL CASE'
- 'Capital case'
- 'Capital Case'

> two words

+ all caps `'ABC'.toUpperCase()`, lowercase `'abc'.toLowerCase()`


### trim

    '  trim it'.trim()

- 'trim it'
- 'trimit'
- ' trim'
- 'trim'

> left, right, or both


### replace
. -> ,
1 -> one
! -> ?
a -> b
__ -> _

    '16,000,000'.replace(',', '.')

- '16.000,000'
- '16.000.000'
- '16,000,000'
- '16,000.000'

tricky

    'ABBA'.replace('a', 'b')


### split
- by space ` `
- comma `,`
- nothing `''`
- end of line `\n`


### concat
    'abc'.concat('def')
    // 'abcdef'

    'Hello, '.concat('Kevin')


### slice
    'abc'.slice(1) // 'bc'

    'abcd'.slice(0, 2) // 'abc'

    var str1 = 'The morning is upon us.';
    var str2 = str1.slice(4, -1);
    // 'The morning is upon us'

