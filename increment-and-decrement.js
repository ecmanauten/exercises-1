/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

import list from 'list-of-lists';
import rnd from './utils/rnd';


// helper functions
function increments(i) {
  return [
    `${i} = ${i} + 1`,
    `${i} += 1`,
    `${i}++`,
    `++${i}`
  ];
}

function decrements(i) {
  return [
    `${i} = ${i} - 1`,
    `${i} -= 1`,
    `${i}--`,
    `--${i}`
  ];
}


function SimpleIncrement() {
  const i = list.letters();
  const n = rnd(0, 10);
  const increment = rnd(increments(i));

  return {
    problem: `

          var ${i} = ${n};
          ${increment};

      Which value is stored in variable \`${i}\`?

      {{ input }}

    `,

    widgets: { input: this.input(`${n + 1}`) },

    solution: `

      __Answer: \`${n + 1}\`.__

      This is an example of incrementing (\`${increment}\`) the value of the variable \`${i}\`.

    `
  };
}


function SimpleDecrement() {
  const i = list.letters();
  const n = rnd(-10, 10);
  const decrement = rnd(decrements(i));

  return {
    problem: `

          var ${i} = ${n};
          ${decrement};

      Which value is stored in variable \`${i}\`?

      {{ input }}

    `,

    widgets: { input: this.input(`${n - 1}`) },

    solution: `

      __Answer: \`${n - 1}\`.__

      This is an example of decrementing (\`${decrement}\`) the value of the variable \`${i}\`.

    `
  };
}


function DoubleIncrement() {
  const i = list.letters();
  const n = rnd(0, 10);
  const inc1 = rnd(increments(i));
  const inc2 = rnd(increments(i));

  return {
    problem: `

          var ${i} = ${n};
          ${inc1};
          ${inc2};

      Which value is stored in variable \`${i}\`?

      {{ input }}

    `,

    widgets: { input: this.input(`${n + 2}`) },

    solution: `

      __Answer: \`${n + 2}\`.__

      This is an example of double incrementing (\`${inc1}\` and \`${inc2}\`) the value of the variable \`${i}\`.

    `
  };
}


function PlusMinus() {
  const i = list.letters();
  const n = rnd(0, 10);
  const inc = rnd(increments(i));
  const dec = rnd(decrements(i));

  return {
    problem: `

          var ${i} = ${n};
          ${inc};
          ${dec};

      Which value is stored in variable \`${i}\`?

      {{ input }}

    `,

    widgets: { input: this.input(`${n}`) },

    solution: `

      __Answer: \`${n}\`.__

      This is an example of both incrementing (\`${inc}\`) and decrementing (\`${dec}\`) the value of the variable \`${i}\`. The resulting value remains the same.

    `
  };
}


export default [
  'Increment and decrement',
  [SimpleIncrement, 1],
  [SimpleDecrement, 1],
  [DoubleIncrement, 1],
  [PlusMinus, 1]
];
