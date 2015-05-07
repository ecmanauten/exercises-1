/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

import list from 'utils/list/index';
import { radio, check } from './utils/widget-helpers';
import { mdCodeBlock as block } from 'cooked';


function Variable() {
  const n = 42;
  const animal = list.animals();
  console.log(list.movieQuotes());

  return {
    problem: `
      What's the result of string concatenation goes into console?

          \`\#{${n}} ${ animal }\`

      Choose the answer:

      {{ radio }}

      `,

    widgets: { radio: this.radioCode(
      `'${n} ${animal}'`
    ) }
  }
}


function QuotesInsideQuotes() {
  const { quote, character } = list.movieQuotes();

  return {
    problem: `
          let quote = '${ quote }';
          let character = '${ character }';
          console.log(\`\${ quote }\, said \${ character }\`);

      Choose the answer:

      {{ radio }}

    `,

    widgets: { radio: radio(
      block`'"${ quote }", said ${ character }'\n123`,
      [ 'false' ]
    ) }
  }
}


function Multiline_S() {
  return {
    problem: `
      Choose the answer:

      {{ radio }}

      `,

    widgets: {
      radio: check(
        [block`
          let some = 'variable';
          console.log('hi');
          console.log('hi');
        `],
        // 'ok',
        ['_\`no\`_', '\`yes\`']
      )
    }

  }
}


export default [
  'Template Strings',
  // [Variable, 1],
  [QuotesInsideQuotes, 1]
  // [Multiline_S, 1]
];
