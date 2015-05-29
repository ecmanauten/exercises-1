/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

import list from 'list-of-lists';
import _ from 'lodash';
import rnd from './utils/rnd';
import {
  radio, radioCode,
  checkCode as check,
  input
} from './utils/widget-helpers';


// helper functions
function increment(i) {
  return rnd([
    `${i} = ${i} + 1`,
    `${i} += 1`,
    `${i}++`,
    `++${i}`
  ]);
}


function MissingCondition() {
  const i = list.letters();
  const k = rnd(3, 10);
  const inc = increment(i);

  return {
    problem: `
      This loop should print numbers from \`1\` to \`${k}\` to console.

          var ${i} = 1;
          while ( ??? ) {
            console.log(${i});
            #{inc};
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
  const i = list.letters();
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

  const inc = increment(i);

  return {
    problem: `
      Consider this loop:

          var ${i} = ${start};
          while (${i} ${ineq.op} ${n}) {
            console.log(${i});
            ${inc};
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


function LoopNumbers1() {
  const i = list.letters();
  const inc = increment(i);

  function range(i, k) {
    return _.range(i, k+1).map(item => `\`${item}\``).join(' ');
  }

  const [ z, op ] = rnd() ?
    [ 1, '<' ] : [ 0, '<=' ];

  const n = rnd(0, 5);
  const _m = n + rnd(2, 5);
  const m = _m - z; 

  return {
    problem: `

      What will this code output?

          var ${i} = ${n};
          while (${i} ${op} ${_m}) {
            console.log(${i});
            ${inc};
          }

      {{ radio }}

    `,

    widgets: { radio: radio(

      range(n, m),
      [ range(n, m + 1), range(n + 1, m), range(n + 1, m + 1) ]

    ) }
  }
}


function LoopNumbers2() {
  const i = list.letters();
  const n = rnd(0, 5);
  const m = n + rnd(1, 5);
  const inc = increment(i);

  function range(i, k) {
    return _.range(i, k+1).map(item => `\`${item}\``).join(' ');
  }

  return {
    problem: `

      What will this code output?

          var ${i} = ${n};
          while (${i} < ${m}) {
            ${inc};
            console.log(${i});
          }

      {{ radio }}

    `,

    widgets: { radio: radio(

      range(n + 1, m),
      [ range(n, m), range(n + 1, m + 1), range(n, m + 1) ]

    ) }
  }
}


function LoopStrings() {
  const i = list.letters();
  const n = rnd(3, 5);
  const inc = increment(i);
  const msg = rnd([list.threeLetterWords(), list.twoLetterWords()]);

  function range(n) {
    return _.range(n).map(() => `\`'${msg}'\``).join(' ');
  }

  return {
    problem: `

      What will this code output?

          var ${i} = 0;
          while (${i} < ${n}) {
              console.log('${msg}');
              ${inc};
          }

      {{ radio }}

    `,

    widgets: { radio: radio(

        range(n),
        [ range(1), range(2), range(n - 1), range(n + 1) ]

    ) }
  }
}


function InsideAndOutside() {
  const i = list.letters();
  const n = rnd(2, 4);
  const msg1 = list.twoLetterWords();
  const msg2 = list.threeLetterWords();
  const inc = increment(i);

  function range(n, msg) {
    return _.range(n).map(() => msg);
  }

  function wrap(arr) {
    return arr.map((msg) => `\`'${msg}'\``).join(' ');
  }

  return {
    problem: `

      What will this code output?

          var ${i} = 0;
          while (${i} < ${n}) {
             console.log('${msg1}');
             ${inc};
          }
          console.log('${msg2}');

      {{ radio }}

    `,

    widgets: { radio: radio(

      `${wrap(range(n, msg1))} \`'${msg2}'\``,
      [ `${wrap(range(n - 1, msg1))} \`'${msg2}'\``,
      wrap(_.flatten(_.zip(range(n, msg1), range(n, msg2)))),
      wrap(range(n, msg1)),
      wrap([msg1, msg2]) ]

    ) }
  }
}


function DoubleCounter() {
  const i = rnd(['i', 'k', 'j']);
  const x = rnd(['x', 'y', 'z']);
  const n = rnd(1, 10);
  const m = rnd(5, 10);
  const [ start, op ] = rnd() ?
    [ 0, '<' ] : [ 1, '<=' ];

  return {
    problem: `

      What will this code output?

          var ${x} = ${n};
          var ${i} = ${start};
          while (${i} ${op} ${m}) {
            ${x} += 1;
            ${i} += 1;
          }
          console.log(${x});

      {{ radio }}

    `,

    widgets: { radio: radioCode(
      ...(_.uniq([`${n + m}`,
      `${n + m + 1}`,
      `${n + m - 1}`,
      `${n}`,
      `${m}`]))
    ) }
  }
}


function InfiniteLoop1() {
  const i = list.letters();
  const msg = list.printMe();
  const n = rnd(1, 10);

  return {
    problem: `

      What will this code output?

          var ${i} = 0;
          while (${i} < ${n}) {
            console.log('${msg}');
          }

      {{ radio }}

    `,

    widgets: { radio: radio(

      'Infinite loop',
      [ 'Nothing',
      `\`'${msg}'\``,
      `\`RangeError\`` ]

    ) }
  }
}


function InfiniteLoop2() {
  const i = list.letters();
  const inc = increment(i);
  const msg = list.printMe();

  return {
    problem: `

      What will this code output?

          var ${i} = 0;
          while (true) {
            console.log('${msg}');
            ${inc};
          }

      {{ radio }}

    `,

    widgets: { radio: radio(

      'Infinite loop',
      [ 'Nothing',
      `\`'${msg}'\``,
      `\`RangeError\`` ]

    ) }
  }
}


function FalseCondition() {
  const i = list.letters();
  const inc = increment(i);
  const msg = list.printMe();
  const n = rnd(1, 10);

  return {
    problem: `

      What will this code output?

          var ${i} = 0;
          while (${i} > ${n}) {
            console.log('${msg}');
            ${inc};
          }

      {{ radio }}

    `,

    widgets: { radio: radio(

      'Nothing',
      [ 'Infinite loop',
      `\`'${msg}'\``,
      `\`RangeError\`` ]

    ) }
  }
}




export default [
  'While loop',
  [MissingCondition, 1],
  [HowManyIterations, 1],

  [LoopNumbers1, LoopNumbers2, 1],
  [LoopStrings, 1],
  [InsideAndOutside, 1],
  [DoubleCounter, 1],

  [InfiniteLoop1, InfiniteLoop2, 1],
  [FalseCondition, 1]
];
