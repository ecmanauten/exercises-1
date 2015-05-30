/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

import list from 'list-of-lists';
import rnd from './utils/rnd';
import _ from 'lodash';
import { radio, radioCode, input } from './utils/widget-helpers';


// helper functions
function uRadio(...ops) {
  const [answer, ...options] = _.uniq(ops).slice(0, 5);
  return { radio: radio(answer, options) };
}

function uRadioCode(...options) {
  return { radio: radioCode(_.uniq(options).slice(0, 5)) };
}

function uInput(answer) {
  return { input: input(`${answer}`) };
}


// problems
function Pow() {
  const option = rnd([
    [2, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30]],
    [3, [1, 2, 3, 4, 5]],
    [4, [1, 2, 3]]
  ]);

  const base = rnd(option[1]);
  const exponent = option[0];

  const ans = Math.pow(base, exponent);

  return {
    problem: `

      What's the returning value of this expression?

          Math.pow(${base}, ${exponent})

      {{ input }}

    `,

    widgets: uInput(ans)
  }
}


function Sqrt() {
  const n = rnd([0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 10000]);
  const ans = Math.sqrt(n);

  return {
    problem: `

      What's the returning value of this expression?

          Math.sqrt(${n})

      {{ input }}

    `,

    widgets: uInput(ans)
  }
}


function Abs() {
  const n = rnd(1, 100) * rnd([-1, -1, -1, 1]);
  const ans = Math.abs(n);

  return {
    problem: `

      What's the returning value of this expression?

          Math.abs(${n})

      {{ input }}

    `,

    widgets: uInput(ans)
  }
}


function MinMax() {
  const a = rnd(0, 100) * rnd([-1, 1]);
  const b = rnd(0, 100) * rnd([-1, 1]);

  const $ = rnd();
  const ans = $ ? Math.min(a, b) : Math.max(a, b);

  return {
    problem: `

      What's the returning value of this expression?

          ${ $ ? `Math.min(${a}, ${b})` : `Math.max(${a}, ${b})` }

      {{ input }}

    `,

    widgets: uInput(ans)
  }
}


function Round() {
  const n = (rnd(0, 100) + rnd(0, 9) / 10) * rnd([-1, 1, 1]);

  const $ = rnd([
    `Math.round(${n})`,
    `Math.ceil(${n})`,
    `Math.floor(${n})`
  ]);

  const ans = eval($);

  return {
    problem: `

      What's the returning value of this expression?

          ${ $ }

      {{ input }}

    `,

    widgets: uInput(ans),

    solution: `

      __Answer: \`${ans}\`.__

    `
  }
}


function Other() {
  const n = list.letters();

  const variations = [
    ['log', 'natural logarithm (base _e_)'],
    ['exp', 'exponential function _eˣ_'],
    ['sin', 'sine'],
    ['cos', 'cosine'],
    ['tan', 'tangent'],
    ['asin', 'arcsine (in radians)'],
    ['acos', 'arccosine (in radians)'],
    ['atan', 'arctangent (in radians)']
  ];

  const $ = rnd(variations);

  return {
    problem: `

      What's the mathematical function represented by this expression?

          Math.${$[0]}(${n})

      {{ radio }}

    `,

    widgets: uRadio(...[$[1]].concat(...variations.map(item => item[1]))),

    solution: `

      __Answer: ${$[1]}.__

      The \`Math.${$[0]}(${n})\` returns the ${$[1]} of a number \`${n}\`.

    `
  }
}


function Constants() {
  const n = list.letters();

  const variations = [
    ['E', 'base of natural logarithms _e_', '2.718'],
    ['LN2', 'natural logarithm of 2', '0.693'],
    ['LN10', 'natural logarithm of 10', '2.302'],
    ['PI', 'ratio of the circumference of a circle to its diameter', '3.14159'],
    ['SQRT2', 'square root of 2', '1.414']
  ];

  const $ = rnd(variations);

  return {
    problem: `

      What's the mathematical constant represented by this expression?

          Math.${$[0]}

      {{ radio }}

    `,

    widgets: uRadio(...[$[1]].concat(...variations.map(item => item[1]))),

    solution: `

      __Answer: ${$[1]}.__

      The \`Math.${$[0]}\` property represents the ${$[1]}, approximately \`${$[2]}\`.

    `
  }
}


export default [
  'Math object',
  [Pow, 1],
  [Sqrt, 1],
  [Abs, 1],
  [MinMax, 1],
  [Round, 1],
  [Other, 1],
  [Constants, 1]
];
