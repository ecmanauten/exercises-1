/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';


const question = 'What\'s the result of an expression?';


function Add() {
  const a = this.rnd(1, 10);
  const b = this.rnd(1, 10);

  return {
    problem: `

      ${question}

          ${a} + ${b}

      Write the answer:

      {{ input }}

    `,

    widgets: { input: this.input(`${a + b}`) },

    solution: `

      __Answer: \`${a + b}\`.__

    `
  };
}


function Sub() {
  const a = this.rnd(1, 10);
  const b = this.rnd(1, 10);

  return {
    problem: `

      ${question}

          ${a} - ${b}

      Write the answer:

      {{ input }}

    `,

    widgets: { input: this.input(`${a - b}`) },

    solution: `

      __Answer: \`${a - b}\`.__

    `
  };
}


function Mult() {
  const a = this.rnd(-10, 10);
  const b = this.rnd() ? 5 : 10;

  return {
    problem: `

      ${question}

          ${a} * ${b}

      Write the answer:

      {{ input }}

    `,

    widgets: { input: this.input(`${a * b}`) },

    solution: `

      __Answer: \`${a * b}\`.__

    `
  };
}


function Div() {
  const a = (this.rnd(1, 10)) * 10;
  const b = this.rnd([1, 2, 5, 10]);

  return {
    problem: `

      ${question}

          ${a} / ${b}

      Write the answer:

      {{ input }}

    `,

    widgets: { input: this.input(`${a / b}`) },

    solution: `

      __Answer: \`${a / b}\`.__

    `
  };
}


function Precedence() {
  const a = this.rnd(1, 10);
  const b = this.rnd([1, 2, 5, 10]);
  const c = this.rnd(1, 10);

  return {
    problem: `

      ${question}

          ${c} + ${a} * ${b}

      Write the answer:

      {{ input }}

    `,

    widgets: { input: this.input(`${c + a * b}`) },

    solution: `

      __Answer: \`${c + a * b}\`.__

    `
  };
}


function Parenthesis() {
  const a = this.rnd(1, 10);
  const b = this.rnd(1, 10);
  const c = this.rnd([1, 2, 5, 10]);

  return {
    problem: `

      ${question}

          (${a} + ${b}) * ${c}

      Write the answer:

      {{ input }}

    `,

    widgets: { input: this.input(`${(a + b) * c}`) },

    solution: `

      __Answer: \`${(a + b) * c}\`.__

    `
  };
}


function Mod() {
  const b = this.rnd(2, 6);
  const a = (b * (this.rnd(1, 5))) + (this.rnd(1, 5));

  return {
    problem: `

      ${question}

          ${a} % ${b}

      Write the answer:

      {{ input }}

    `,

    widgets: { input: this.input(`${a % b}`) },

    solution: `
      __Answer: \`${a % b}\`.__
    `
  };
}


function Float() {
  const a = this.rnd(1, 10);
  const b = (this.rnd(1, 100)) / 10;

  return {
    problem: `

      ${question}

          ${a} + ${b}

      Write the answer:

      {{ input }}

    `,

    widgets: { input: this.input(`${a + b}`) },

    solution: `

      __Answer: \`${a + b}\`.__

    `
  };
}


function InfinityResult() {
  const a = (this.rnd(1, 1000)) / 10;
  let zeroSomething = '0';

  if (this.rnd()) {
    let b1 = this.rnd(1, 10);
    let b2 = this.rnd(1, 10);
    zeroSomething = `((${b1}*${b2}) - ${b1*b2})`;
  }

  return {
    problem: `

      ${question}

          ${a} / ${zeroSomething}

      Choose the answer:

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `Infinity`,
      `NaN`,
      `RangeError`,
      `0`,
      `${a}`
    ) },

    solution: `

      __Answer: \`Infinity\`.__

    `
  };
}


function NaNResult() {
  const shortWord = this.rnd(this.list.threeLetterWords);
  const n = this.rnd(2, 5);
  // repeat
  const trap = new Array(n + 1).join(shortWord);

  return {
    problem: `

      ${question}

          "${shortWord}" * ${n}

      Choose the answer:

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `NaN`,
      `${trap}`,
      `0`,
      `TypeError`,
      `Infinity`
    ) },

    solution: `

      __Answer: \`NaN\`.__

    `
  };
}


export default [
  'Math Operators',
  [Add, 3],
  [Sub, 1],
  [Mult, 1],
  [Div, 1],
  [Precedence, 1],
  [Parenthesis, 2],
  [Mod, 2],
  [Float, 1],
  [InfinityResult, 2],
  [NaNResult, 2]
];
