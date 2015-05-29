/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

import list from 'list-of-lists';
import rnd from './utils/rnd';
import _ from 'lodash';
import {
  radioCode as radio, input
} from './utils/widget-helpers';


// helper functions
function getProblem(str, prop, varName, widget='radio') {
  return rnd([
    `
      What's the returning value of this expression?

          '${str}'.${prop}

      {{ ${widget} }}
    `,

    `
      Which value will print to the console?

          var ${varName} = '${str}';
          console.log(${varName}.${prop});

      {{ ${widget} }}
    `
  ]);
}

function getRadio(...options) {
  return { radio: radio(...options) }
}

function getRadioString(...options) {
  return { radio: radio(...(options.map(item => `'${item}'`))) }
}


// problems
function Length() {
  const str = list.nouns();
  const prop = 'length';
  const varName = list.variableNames();
  const ans = str.length;

  return {
    problem: getProblem(str, prop, varName),

    widgets: getRadio(
      `${ans}`,
      `${ans-1}`,
      `${ans+1}`,
      `0`
    )
  }
}


function CharAt() {
  const str = list.nouns();
  const n = rnd(0, str.length - 1);
  const prop = `charAt(${n})`;
  const varName = list.variableNames();
  const ans = str.charAt(n);

  return {
    problem: getProblem(str, prop, varName, 'input'),

    widgets: { input: input(ans) }
  }
}


function Case() {
  const str = rnd([list.buzzWordTwo(), list.buzzWordMore()]);
  const varName = list.variableNames();
  const variation = rnd();
  const prop = variation ? `toLowerCase()` : `toUpperCase()`;

  return {
    problem: getProblem(str, prop, varName),

    widgets: getRadioString(
      ...(_.uniq([

        variation ? str.toLowerCase() : str.toUpperCase(),

        str.toLowerCase(),
        str.toUpperCase(),
        _.capitalize(str.toLowerCase()),
        _.startCase(str)

      ]))
    )
  }
}


function Trim() {
  function sp() {
    return _.range(0, rnd(1, 5)).map(() => ' ').join('');
  }

  const _str = list.buzzWordTwo();

  const str = rnd([
    `${sp()}${_str}${sp()}`,
    `${sp()}${_str}`,
    `${_str}${sp()}`
  ]);
  const varName = list.variableNames();
  const prop = `trim()`;

  return {
    problem: getProblem(str, prop, varName),

    widgets: getRadioString(
      ...(_.uniq([

        str.trim(),
        _.trimLeft(str),
        _.trimRight(str),
        _.words(str)[0],
        _.words(str)[1],
        str

      ]).slice(0, 5))
    )
  }
}


function Slice() {
  const str = list.buzzWordOne().toLowerCase();
  const varName = list.variableNames();
  const n = rnd(1, str.length - 1);
  const variation = rnd();
  const prop = variation ?
    `slice(0, ${n})` : `slice(${n})`;

  return {
    problem: getProblem(str, prop, varName),

    widgets: getRadioString(
      ...(_.uniq([

        variation ? str.slice(0, n) : str.slice(n),
        str.slice(0, n),
        str.slice(n),
        str.slice(0, n-1),
        str.slice(0, n+1),
        str.slice(0, n-2),
        str

      ]).slice(0, 5))
    )
  }
}


function Concat() {
  const str1 = list.names();
  const str2 = list.lastNames();
  const varName = 'name';
  const prop = `concat('${str2}')`;

  return {
    problem: getProblem(str1, prop, varName),

    widgets: getRadioString(
      ...(_.uniq([

        str1.concat(str2),
        str1.concat(' ', str2),
        str2.concat(str1),
        str2,
        str1

      ]).slice(0, 5))
    )
  }
}


function Replace1() {
  const str = list.buzzWordMore();
  const a = ' ';
  const b = rnd(['_', '__', '-', '  ']);
  const varName = list.reserved();
  const prop = `replace('${a}', '${b}')`;

  return {
    problem: getProblem(str, prop, varName),

    widgets: getRadioString(
      ...(_.uniq([

        str.replace(a, b),
        str.replace(/\s/g, b),
        str.replace(/\s/g, ''),
        str.replace(/(\s)([a-zA-Z]+?)$/, `${b}$2`),
        str

      ]).slice(0, 5))
    ),

    solution: `

      __Answer: \`'${str.replace(a, b)}'\`.__

      The first argument of \`String.prototype.replace\` can be a string or a regular expression object. Unfortunately, if it is a string, only the _first occurrence_ of the search value is replaced. Use [regular expressions instead](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

    `
  }
}


function Replace2() {
  const n = rnd(1, 100);
  const str = `${n},000,000,000`;
  const varName = list.reserved();
  const prop = `replace(',', '.')`;

  return {
    problem: getProblem(str, prop, varName),

    widgets: getRadioString(
      ...(_.uniq([

        str.replace(',', '.'),
        str.replace(/,/g, '.'),
        str.replace(/,/g, ''),
        str.replace(/(,)(000)$/, '.$2'),
        str

      ]).slice(0, 5))
    ),

    solution: `

      __Answer: \`'${str.replace(',', '.')}'\`.__

      The first argument of \`String.prototype.replace\` can be a string or a regular expression object. Unfortunately, if it is a string, only the _first occurrence_ of the search value is replaced. Use [regular expressions instead](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

    `
  }
}





export default [
  'String methods',
  [Length, 1],
  [CharAt, 1],
  [Case, 1],
  [Trim, 1],
  [Slice, 1],
  [Concat, 1],
  [Replace1, Replace2, 1]
  // [SplitBySpace, SplitByComma, SplitByNothing, 1]
];
