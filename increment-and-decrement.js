/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';


// helper functions
function increments(i) {
  return [
    `${i} = ${i} + 1;`,
    `${i} += 1;`,
    `${i}++;`,
    `++${i};`
  ];
}

function decrements(i) {
  return [
    `${i} = ${i} - 1;`,
    `${i} -= 1;`,
    `${i}--;`,
    `--${i};`
  ];
}


function SimpleIncrement() {
  const i = this.rnd(this.list.letters);
  const n = this.rnd(0, 10);
  const increment = this.rnd(increments(i));

  return {
    problem: `

          var ${i} = ${n};
          ${increment}

      Which value stored in variable \`${i}\`?

      {{ input }}

    `,

    widgets: { input: this.input(`${n + 1}`) },

    solution: `

      __Answer: \`${n + 1}\`.__

    `
  };
}


function SimpleDecrement() {
  const i = this.rnd(this.list.letters);
  const n = this.rnd(-10, 10);
  const decrement = this.rnd(decrements(i));

  return {
    problem: `

          var ${i} = ${n};
          ${decrement}

      Which value stored in variable \`${i}\`?

      {{ input }}

    `,

    widgets: { input: this.input(`${n - 1}`) },

    solution: `

      __Answer: \`${n - 1}\`.__

    `
  };
}


function DoubleIncrement() {
  const i = this.rnd(this.list.letters);
  const n = this.rnd(0, 10);
  const inc1 = this.rnd(increments(i));
  const inc2 = this.rnd(increments(i));

  return {
    problem: `

          var ${i} = ${n};
          ${inc1}
          ${inc2}

      Which value stored in variable \`${i}\`?

      {{ input }}

    `,

    widgets: { input: this.input(`${n + 2}`) },

    solution: `

      __Answer: \`${n + 2}\`.__

    `
  };
}


function PlusMinus() {
  const i = this.rnd(this.list.letters);
  const n = this.rnd(0, 10);
  const inc = this.rnd(increments(i));
  const dec = this.rnd(decrements(i));

  return {
    problem: `

          var ${i} = ${n};
          ${inc}
          ${dec}

      Which value stored in variable \`${i}\`?

      {{ input }}

    `,

    widgets: { input: this.input(`${n}`) },

    solution: `

      __Answer: \`${n}\`.__

    `
  };
}


export default [
  'Increment and Decrement',
  [SimpleIncrement, 1],
  [SimpleDecrement, 1],
  [DoubleIncrement, 1],
  [PlusMinus, 1]
];
