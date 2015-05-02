/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

import list from 'utils/list/index';


function Variable() {
  const n = 42;
  const animal = list.animals();

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


export default [
  'Template Strings',
  [Variable, 1]
];
