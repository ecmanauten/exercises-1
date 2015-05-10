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

      Addition operator \`+\` works the same way as in math.

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

      Subtraction operator \`-\` works the same way as in math.

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

      Multiplication operator \`*\` works the same way as in math.

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

      Division operator \`/\` works the same way as in math.

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

      The multiplication operator \`*\` has higher precedence than the addition operator \`+\` and thus will be evaluated first.

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

      The expression in parenthesis \`(${a} + ${b})\` has higher precedence than the multiplication operator \`*\` and thus will be evaluated first.

    `
  };
}


function Remainder() {
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

      The \`%\` returns the remainder after whole-number division of the first operand by the second operand.

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

      Addition operator \`+\` works the same way as in math, including floating point numbers (e.g. ${b}).

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

      In JavaScript division by zero yields positive or negative \`Infinity\`.

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

      Non-numeric operands that cannot convert to numbers convert to the \`NaN\` value. If either operand is (or converts to) \`NaN\`, the result of the operation is also \`NaN\`.

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
  [Remainder, 2],
  [Float, 1],
  [InfinityResult, 2],
  [NaNResult, 2]
];
