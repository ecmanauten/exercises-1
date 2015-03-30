/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';


function strings() {

  var strings = [ "Hello, World!", "Lambda Calculus", "JavaScript", "Structure and Interpretation of Computer Programs", "jQuery", "Computer Science", "99 problems", "Nick Cave & The Bad Seeds: The Mercy Seat", "var", "true === 2 + 2", "", "Infinity", "__", "Kanye West: \\\"New Slaves\\\"", "The\\nLittle\\nJavaScripter", "false", "true", "undefined", "null" ];

  var randomString = this.rnd(strings);

  return {
    problem: [
      'What\'s the type of this literal?',
      '    "${randomString}"',
      '[[ radio ]]'
    ],

    widgets: {
      radio: {
        type: 'radio',
        props: {
          options: [`string`, `number`, `boolean`, `null`, `undefined`]
        }
      }
    },

    solution: [
      '__Answer: \`string\`.__',
      'String literal is an string of characters, enclosed in singular `\'` or double `\"` quotes.'
    ]
  };
};


function numbers() {

  var numbers = [ "42", "3.14", "1.617", "140000000", "0.00000000000000000091093822", "13", "100500", ".155", "Infinity", "-Infinity", "10e23", "0101010001", "9.1093822e−31", "NaN", "0xCCFF", "1.4738223E-32" ];

  var randomNumber = this.rnd(numbers);

  return {
    problem: [
      'What\'s the type of this literal?',
      '    "${randomString}"',
      '[[ radio ]]'
    ],

    widgets: this.widgets.radio(`number`, `string`, `boolean`, `null`, `undefined`),

    solution: [
      '__Answer: \`number\`.__',
      'Number literal is either integer (like `42`), float (like `3.14`), exponential (like `10e23`), hex (like `0xCCFF`), `Infinity`, `-Infinity` or `NaN`.'
    ]
  };
}


export default {
  url: 'primitive-datatypes',
  name: 'Primitive Datatypes',
  problems: [
    {
      name: 'Strings',
      problem: strings,
      ratio: 5
    },
    {
      name: 'Numbers',
      problem: numbers,
      ratio: 3
    }
  ]
}
