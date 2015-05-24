/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

import list from 'list-of-lists';
import rnd from './utils/rnd';
import {
  radioCode as radio,
  checkCode as check,
  input
} from './utils/widget-helpers';


const letters = ['i', 'k', 'j', 'm', 'p', 'o', 'x'];


function MissingCondition() {
  const i = rnd(letters);
  const k = rnd(3, 10);

  const increment = rnd([
    `${i} = ${i} + 1;`,
    `${i} += 1;`,
    `${i}++;`,
    `++${i};`
  ]);

  return {
    problem: `
      This loop should print numbers from \`1\` to \`${k}\` to console.

          var ${i} = 1;
          while ( ??? ) {
            console.log(${i});
            #{increment}
          }

      Which condition should be there? Choose all possible options.

      {{ check }}

    `,

    widgets: { check: check(
      [
        `${i} <= ${k}`,
        `${i} < ${k+1}`
      ],
      [
        `${i} == ${k}`,
        `${i} < ${k}`,
        `${i} < ${k-1}`
      ]
    ) }
  };
}


// Ranges:
// [0 3) <
// 0, 1, 2

// [0 3] <=
// 0, 1, 2, 3

// [1 3) <
// 1, 2

// [1 3] <=
// 1, 2, 3

function HowManyIterations() {
  const i = rnd(letters);
  const n = rnd(1, 10) * 10;
  const start = rnd() ? 0 : 1;

  const ineq = rnd() ?
    {
      op: '<',
      txt: 'less than',
      strict: true,
      math: '<'
    } :
    {
      op: '<=',
      txt: 'less than or equal',
      strict: false,
      math: '≤'
    };

  let upperBound, answer;

  if (ineq.strict) {
    upperBound = n - 1;
    answer = n - start;
  } else {
    upperBound = n;
    answer = n+1 - start;
  };

  const zeroComment = start ? '' : ' (pay attention to zero-based numbering)';

  const increment = rnd([
    `${i} = ${i} + 1;`,
    `${i} += 1;`,
    `${i}++;`,
    `++${i};`
  ]);

  return {
    problem: `
      Consider this loop:

          var ${i} = ${start};
          while (${i} ${ineq.op} ${n}) {
            console.log(${i});
            ${increment}
          }

      How many iterations it's gonna make?

      {{ input }}
    `,

    widgets: { input: input(`${answer}`) },

    solution: `
      __Answer: ${answer} iterations.__

      This loop will print numbers in range _${start} ≤ ${i} ${ineq.math} ${n}_. That should look like ${answer} lines of numbers from ${start} to ${upperBound}${zeroComment}.
    `
  };
}



export default [
  'While Loop',
  [MissingCondition, 1],
  [HowManyIterations, 1]
];
