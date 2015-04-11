/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';


function Strings() {

  let strings = [ 'Hello, World!', 'Lambda Calculus', 'JavaScript', 'Structure and Interpretation of Computer Programs', 'jQuery', 'Computer Science', '99 problems', 'Nick Cave & The Bad Seeds: The Mercy Seat', 'var', 'let', 'true === 2 + 2', '', 'Infinity', '__', 'Kanye West: "New Slaves"', 'The\\nLittle\\nJavaScripter', 'false', 'true', 'undefined', 'null' ];

  let randomString = this.rnd(strings);

  return {
    problem: `

        What\'s the type of this literal?

            "${randomString}"

        {{ radio }}

    `,

    widgets: { radio: this.radio('`string`', ['`number`', '`boolean`', '`null`', '`undefined`']) },

    solution: `

      __Answer: \`string\`.__

      String literal is an string of characters, enclosed in singular \`'\` or double \`\"\` quotes.

    `
  };
};


//` annoying syntax hightlighting!


function Numbers() {

  let numbers = [ '42', '3.14', '1.617', '140000000', '0.00000000000000000091093822', '13', '100500', '.155', 'Infinity', '-Infinity', '10e23', '0101010001', '9.1093822e−31', 'NaN', '0xCCFF', '1.4738223E-32' ];

  let randomNumber = this.rnd(numbers);

  return {
    problem: `

      What\'s the type of this literal?

          ${randomNumber}

      {{ radio }}

    `,

    widgets: { radio: this.radio('`number`', ['`string`', '`boolean`', '`null`', '`undefined`']) },

    solution: `

      __Answer: \`number\`.__

      Number literal is either integer (like \`42\`), float (like \`3.14\`), exponential (like \`10e23\`), hex (like \`0xCCFF\`), \`Infinity\`, \`-Infinity\` or \`NaN\`.

    `
  };
}


function Booleans() {

  let randomBoolean = this.rnd([ 'true', 'false' ]);

  return {
    problem: `

      What\'s the type of this literal?

          ${randomBoolean}

      {{ radio }}

    `,

    widgets: { radio: this.radio('`boolean`', ['`number`', '`string`', '`null`', '`undefined`']) },

    solution: `

      __Answer: \`boolean\`.__

      Boolean literal is either \`true\` or \`false\`.

    `
  };
}


function NullOrUndefined() {

  let specialType = this.rnd([ 'null', 'undefined' ]);
  let eitherType = specialType === 'null' ? 'undefined' : 'null';

  return {
    problem: `

      What\'s the type of this literal?

          ${specialType}

      {{ radio }}

    `,

    widgets: { radio: this.radio(`\`${specialType}\``, [`\`${eitherType}\``, '`number`', '`string`', '`boolean`']) },

    solution: `

      __Answer: \`${specialType}\`.__

      Special type literal is either \`true\` or \`false\`.

    `
  };
}


export default [
  'Primitive Datatypes',
  [Strings, 5],
  [Numbers, 3],
  [Booleans, 2],
  [NullOrUndefined, 1]
];
