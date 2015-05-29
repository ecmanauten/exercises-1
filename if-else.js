/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

import list from 'list-of-lists';
import rnd from './utils/rnd';
import { radio } from './utils/widget-helpers';


// helper functions
function getTruthy() {
  const str = list.threeLetterWords();
  const a = rnd(1, 100) * -1;
  const b = rnd(1, 100);

  return rnd([
    `true`,
    `typeof '${str}' === 'String'`,
    `${a} < ${b}`
  ]);
}

function getFalsy() {
  const str = list.threeLetterWords();
  const a = rnd(1, 100) * -1;
  const b = rnd(1, 100);

  return rnd([
    `false`, `null`, `undefined`,
    `typeof '${str}' !== 'String'`,
    `${a} > ${b}`
  ]);
}

function printMe() {
  return rnd([
    'Hello, World!',
    'Print me!',
    'True',
    'False',
    'Message',
    'Result',
    'Hi',
    'Ok',
    'I’m here',
    'Hello'
  ]);
}

function getCode(problem) {
  const msg = printMe();
  let l = '(', r = ')';
  let cond = '';

  switch (problem) {
    case true:
      cond = getTruthy();
      break;
    case false:
      cond = getFalsy();
      break;
    case null:
      cond = rnd([getTruthy(), getFalsy()]);
      l = r = '';
      break;
  }


  return rnd([
  // keep the size of indent!
  // ---->
         `if ${l}${cond}${r} {
            console.log('${msg}');
          }
         `,

         `if ${l}${cond}${r}
            console.log('${msg}');
         `,

         `if ${l}${cond}${r} console.log('${msg}');`,

         `if ${l}${cond}${r} { console.log('${msg}') }`
  ])
}


// problems
function SingleIfTrue() {
  const truthy = getTruthy();
  const code = getCode(true);

  return {
    problem: `

      Will the statement be printed to the console?

          ${code}

      {{ radio }}

    `,

    widgets: { radio: radio(

      `yes`,
      [ `no`,
        `\`SyntaxError\`` ]

    ) }
  }
}


function SingleIfFalse() {
  const falsy = getFalsy();
  const code = getCode(false);

  return {
    problem: `

      Will the statement be printed to the console?

          ${code}

      {{ radio }}

    `,

    widgets: { radio: radio(

      `no`,
      [ `yes`,
        `\`SyntaxError\`` ]

    ) }
  }
}


function SingleIfError() {
  const falsy = getFalsy();
  const code = getCode(null);

  return {
    problem: `

      Will the statement be printed to the console?

          ${code}

      {{ radio }}

    `,

    widgets: { radio: radio(

      `\`SyntaxError\``,
      [ `yes`,
        `no` ]

    ) }
  }
}


export default [
  'If else',
  [SingleIfTrue, 1],
  [SingleIfFalse, 1],
  [SingleIfError, 1]
]
