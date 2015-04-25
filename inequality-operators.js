/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';


let ops = [ '<', '>', '<=', '>=' ];


function Numbers() {
  const a = this.rnd(-10, 10);
  const b = this.rnd(-10, 10);
  const op = this.rnd(ops);

  const answer = eval(`${a} ${op} ${b}`);

  return {
    problem: `

          ${a} ${op} ${b}

      What's the result of this expression?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `${answer}`,
      `${!answer}`
    ) },

    solution: `

      __Answer: \`${answer}\`.__

    `
  };
}


function NumberExpressions() {
  const a = this.rnd(0, 10);
  const b = this.rnd(0, 10);
  const c = this.rnd(0, 10);
  const op = this.rnd(ops);

  const answer = eval(`${a} ${op} ${b} + ${c}`);

  return {
    problem: `

          ${a} ${op} ${b} + ${c}

      What's the result of this expression?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `${answer}`,
      `${!answer}`,
      `${b + c}`,
      `${c}`
    ) },

    solution: `

      __Answer: \`${answer}\`.__

    `
  };
}


function ToxicNaN() {
  let a, b;

  if (this.rnd()) {
    a = NaN;
    b = this.rnd(0, 10);
  } else {
    a = this.rnd(0, 10);
    b = NaN;
  }

  const op = this.rnd(ops);

  return {
    problem: `

          ${a} ${op} ${b}

      What's the result of this expression?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `false`,
      `true`,
      `NaN`,
      `TypeError`
    ) },

    solution: `

      __Answer: \`false\`.__

      \`NaN\` is toxic, so if either operand is (or converts to) \`NaN\`, then the comparison operator always returns \`false\`.

    `
  };
}


function PlusMinusZero() {
  const optionalPlus = this.rnd() ? '+' : '';
  let a, b;

  if (this.rnd()) {
    a = optionalPlus + '0';
    b = '-0';
  } else {
    a = '-0';
    b = optionalPlus + '0';
  }

  const op = this.rnd(ops);
  const answer = eval(`${a} ${op} ${b}`);

  return {
    problem: `

          ${a} ${op} ${b}

      What's the result of this expression?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `${answer}`,
      `${!answer}`,
      `0`,
      `Infinity`,
      `NaN`
    ) },

    solution: `
      __Answer: \`${answer}\`.__

      \`${a}\` and \`${b}\` are considered equal.
    `
  };
}


function PlusMinusInfinity() {
  const optionalPlus = this.rnd() ? '+' : '';
  let inf, a, b;

  if (this.rnd()) {
    inf = optionalPlus + 'Infinity';
  } else {
    inf = '-Infinity';
  }

  if (this.rnd()) {
    a = inf;
    b = this.rnd(-100000, 100000);
  } else {
    a = this.rnd(-100000, 100000);
    b = inf;
  }

  const op = this.rnd(ops);
  const answer = eval(`${a} ${op} ${b}`);

  return {
    problem: `

          ${a} ${op} ${b}

      What's the result of this expression?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `${answer}`,
      `${!answer}`,
      `Infinity`,
      `TypeError`,
      `NaN`
    ) },

    solution: `

      __Answer: \`${answer}\`.__

      \`${optionalPlus}Infinity\` is larger than any number other than itself, and \`-Infinity\` is smaller than any number other than itself.

    `
  };
}


function NumbersAndStringNumbers() {
  const a = this.rnd(-10, 10);
  const b = this.rnd(-10, 10);
  const op = this.rnd(ops);
  const q = this.rnd() ? `'` : `"`;

  const expression = this.rnd() ?
    `${q}${a}${q} ${op} ${b}` :
    `${a} ${op} ${q}${b}${q}`;

  const answer = eval(expression);

  return {
    problem: `
          ${expression}

      What's the result of this expression?

      {{ radio }}
    `,

    widgets: { radio: this.radioCode(
      `${answer}`,
      `${!answer}`,
      `Infinity`,
      `TypeError`,
      `NaN`
    ) },

    solution: `
      __Answer: \`${answer}\`.__

      The comparison operators favor numbers and try to convert strings to numbers if this necessary. So, we can interpret this expression as \`${a} ${op} ${b}\`.
    `
  };
}


function NumbersAndStrings() {
  const n = this.rnd(-10, 10);
  const op = this.rnd(ops);
  const q = this.rnd() ? `'` : `"`;
  const str = q + (this.rnd(this.list.firstTenAsStrings)) + q;

  const expression = this.rnd() ?
    `${n} ${op} ${str}` :
    `${str} ${op} ${n}`;

  return {
    problem: `

          ${expression}

      What's the result of this expression?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `false`,
      `true`,
      `NaN`,
      `Infinity`,
      `TypeError`
    ) },

    solution: `

      __Answer: \`false\`.__

      The comparison operators favor numbers and try to convert strings to numbers if this necessary. Non-numerical strings as \`${str}\` converts to \`NaN\`. If either operand is (or converts to) \`NaN\`, then the comparison operator always returns \`false\`.

    `
  };
}


function Strings() {
  let a, b;

  if (this.rnd()) {
    // compare same letter in uppercase and lowercase
    if (this.rnd()) {
      a = this.rnd(this.list.alphabetLowercase);
      b = a.toUpperCase();
    } else {
      a = this.rnd(this.list.alphabetLowercase);
      b = a.toUpperCase();
    }
  } else {
    // compare lowercase letters
    if (this.rnd()) {
      a = this.rnd(this.list.alphabetLowercase);
      b = this.rnd(this.list.alphabetLowercase);
    } else {
      a = this.rnd(this.list.alphabetLowercase);
      b = this.rnd(this.list.alphabetLowercase);
    }
  }

  const op = this.rnd([ '>', '<' ]);
  const q = this.rnd() ? `'` : `"`;
  const answer = eval(`${q}${a}${q} ${op} ${q}${b}${q}`);

  return {
    problem: `

          '${a}' ${op} '${b}'

      What's the result of this expression?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `${answer}`,
      `${!answer}`,
      `Infinity`,
      `TypeError`,
      `NaN`
    ) },

    solution: `

      __Answer: \`${answer}\`.__

      The comparison operators favor numbers and only perform string comparison if both operands are strings. Strings are compared using alphabetical order, where “alphabetical order” is defined by the numerical order of the Unicode values (e. g. capital \`"A"\` is “smaller” than lowercase \`"a"\`).

    `
  };
}


export default [
  'Inequality Operators',
  [Numbers, 1],
  [NumberExpressions, 1],
  [ToxicNaN, 1],
  [PlusMinusZero, 1],
  [PlusMinusInfinity, 1],
  [NumbersAndStringNumbers, 1],
  [NumbersAndStrings, 1],
  [Strings, 1]
];
