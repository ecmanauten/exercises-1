/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

import dedent from 'utils/dedent';


function test() {

  return {
    problem: `

        What\'s the type of this literal?

            console.log('ha ha');
            okay let's go

        {{ check }}

        Also _write_ \`123\` to this input: {{ input }}.

    `,

    widgets: {
      check: {
        type: 'Check',
        props: {
          answers: ['`true`', '`wisdom`'],
          options: ['`lie`', '`shit`', '`crap`']
        }
      },
      input:
        { type: 'Input', props: { answer: '123' } }
    },

    solution: `

      __Answer: \`string\`.__

      String literal is an string of characters, enclosed in singular \`'\` or double \`\"\` quotes.

    `
  };
};

export default [
  'Test Exercise',
  [test, 1],
];
