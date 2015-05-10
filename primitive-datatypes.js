/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

import list from 'list-of-lists';
import rnd from './utils/rnd';
import { radioCode as radio } from './utils/widget-helpers';


function Strings() {
  const strings = [ 'Hello, World!', 'Lambda Calculus', 'JavaScript', 'Structure and Interpretation of Computer Programs', 'jQuery', 'Computer Science', '99 problems', 'Nick Cave & The Bad Seeds: The Mercy Seat', 'var', 'let', 'true === 2 + 2', '', 'Infinity', '__', 'Kanye West: \"New Slaves\"', 'The\\nLittle\\nJavaScripter', 'false', 'true', 'undefined', 'null' ];

  const randomString = rnd(strings);

  return {
    problem: `

        What\'s the type of this literal?

            "${randomString}"

        {{ radio }}

    `,

    widgets: { radio: radio(
      `string`,
      `number`,
      `boolean`,
      `null`,
      `undefined`
    ) },

    solution: `

      __Answer: \`string\`.__

      String literal is a string of characters enclosed in singular \`'\` or double \`\"\` quotes.

    `
  };
};


function Numbers() {
  const randomNumber = list.magicNumbers();

  return {
    problem: `

      What\'s the type of this literal?

          ${randomNumber}

      {{ radio }}

    `,

    widgets: { radio: radio(
      `number`,
      `string`,
      `boolean`,
      `null`,
      `undefined`
    ) },

    solution: `

      __Answer: \`number\`.__

      Number literal can be _integer_ (e.g. \`42\`) or _float_ (e.g. \`3.14\`) or _exponential_ (e.g. \`10e23\`) or _hex_ (e.g. \`0xCCFF\`) or \`Infinity\`/\`-Infinity\` or \`NaN\`.

    `
  };
}


function Booleans() {
  let randomBoolean = rnd([ 'true', 'false' ]);

  return {
    problem: `

      What\'s the type of this literal?

          ${randomBoolean}

      {{ radio }}

    `,

    widgets: { radio: radio(
      `boolean`,
      `number`,
      `string`,
      `null`,
      `undefined`
    ) },

    solution: `

      __Answer: \`boolean\`.__

      Boolean literal can be either \`true\` or \`false\`.

    `
  };
}


function NullOrUndefined() {
  let specialType = rnd([ 'null', 'undefined' ]);
  let eitherType = specialType === 'null' ? 'undefined' : 'null';

  return {
    problem: `

      What\'s the type of this literal?

          ${specialType}

      {{ radio }}

    `,

    widgets: { radio: radio(
      `${specialType}`,
      `${eitherType}`,
      `number`,
      `string`,
      `boolean`
    ) },

    solution: `

      __Answer: \`${specialType}\`.__

      Special type literal can be either \`null\` or \`undefined\`.

    `
  };
}


export default [
  'Primitive datatypes',
  [Strings, 4],
  [Numbers, 3],
  [Booleans, 2],
  [NullOrUndefined, 1]
];
