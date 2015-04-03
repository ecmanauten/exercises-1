import createExam from '../utils/createExam';
import rnd from '../utils/rnd';
import dedent from '../utils/dedent';


var numbers = [ "42", "3.14", "1.617", "140000000", "0.00000000000000000091093822", "13", "100500", ".155", "Infinity", "-Infinity", "10e23", "0101010001", "9.1093822e−31", "NaN", "0xCCFF", "1.4738223E-32" ];

var strings = [ "Hello, World!", "Lambda Calculus", "JavaScript", "Structure and Interpretation of Computer Programs", "jQuery", "Computer Science", "99 problems", "Nick Cave & The Bad Seeds: The Mercy Seat", "var", "true === 2 + 2", "", "Infinity", "__", "Kanye West: \\\"New Slaves\\\"", "The\\nLittle\\nJavaScripter", "false", "true", "undefined", "null" ];

var booleans = [ "true", "false" ];

var nullUndefined = [ "null", "undefined" ];

var question = "What's the type of this literal?";


function Strings() {

  var randomString = rnd(strings);

  return {
    problem: dedent`
    ${question}

        "${randomString}"

    - \`string\`
    - \`number\`
    - \`boolean\`
    - \`null\`
    - \`undefined\``,

  solution: dedent`
    __Answer: \`string\`.__

    String literal is an string of characters, enclosed in singular \`'\` or double \`\"\` quotes.`
  };
};


// $Numbers = ->
//   randomNumber = rnd numbers

//   problem:
//     """
//     #{question}

//         #{randomNumber}

//     - `number`
//     - `string`
//     - `boolean`
//     - `null`
//     - `undefined`
//     """

//   solution: """
//     __Answer: `number`.__

//     Number literal is either integer (like `42`), float (like `3.14`), exponential (like `10e23`), hex (like `0xCCFF`), `Infinity`, `-Infinity` or `NaN`.
//   """


// $Booleans = ->
//   randomBoolean = rnd booleans

//   problem:
//     """
//     #{question}

//         #{randomBoolean}

//     - `boolean`
//     - `number`
//     - `string`
//     - `null`
//     - `undefined`
//     """

//   solution: """
//     __Answer: `boolean`.__

//     Boolean literal is either `true` or `false`.
//   """


// $NullUndefined = ->
//   specialType = rnd nullUndefined
//   eitherType = if specialType is "null" then "undefined" else "null"

//   problem:
//     """
//     #{question}

//         #{specialType}

//     - `#{specialType}`
//     - `#{eitherType}`
//     - `boolean`
//     - `number`
//     - `string`
//     """

//   solution: """
//     __Answer: `#{specialType}`.__

//     Special type literal is either `null` or `undefined`.
//   """


var Reference = `
  # Datatypes
  - primitive: \`number\`, \`string\`, \`boolean\`
  - special: \`null\`, \`undefined\`
  - composite: \`array\`, \`object\`
  - functional: \`function\`, \`regexp\`

  # Numbers
  - \`0\`, \`-20\`, \`42\`, \`15000000\` (integer)
  - \`0xff\` (hex), \`0377\` (octal)
  - \`3.14\`, \`-2345.789\`, \`.333333\` (float)
  - \`6.02e23\`, \`1.4738223E-32\` (scientific)
  - \`NaN\`, \`Infinity\`, \`-Infinity\` (special types)

  # Strings
  - \`''\`, \`""\`, \`'name="myform"'\`, \`"3.14"\`
  - \`"π is the ratio of a circle's circumference to its diameter"\`
  - \`"This string\\nhas two lines"\`
  - \`'You\\'re right, it can\\'t be a quote'\`
  - \`\\n\`, \`\\t\`, \`\\"\`, \`\\'\`, \`\\\\\`, \`\\u\` (special characters)
`



module.exports = createExam("Primitive Datatypes", [
  // [Numbers, 5],
     [Strings, 3]
  // [Booleans, 2],
  // [NullUndefined, 1]
], Reference);