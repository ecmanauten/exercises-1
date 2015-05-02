/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

import list from 'utils/list/index';
import rnd from 'utils/rnd';
import { radioCode as radio } from './utils/widget-helpers';


function ShorthandProperty_S() {
  const [ x, y ] = list.letterPairs();
  const v1 = rnd(1, 10);
  const v2 = rnd(1, 10);
  const q = rnd() ? [x, v1] : [y, v2];
  const decl = rnd(['var', 'let', 'const']);
  const obj = rnd(['result', 'sum', 'expression', 'abc', 'value', 'total', 'one', 'xyz']);

  return {
    problem: `

      Consider the following code:

          ${decl} ${x} = ${v1};
          ${decl} ${y} = ${v2};

          ${decl} ${obj} = { ${x}, ${y} };

      Which value is stored in property \`${obj}.${q[0]}\`?

      {{ input }}

    `,

    widgets: {
      input: {
        type: 'Input',
        props: {
          answer: `${q[1]}`
        }
      }
    },

    solution: `
      __Answer: \`${q[1]}\`.__

      In ES6 property keys can be initialized by variables of the same name. This is called _“property name shorthand”_. This is an equivalent of writing the following ES5 code:

          var ${obj} = { ${x}: ${x}, ${y}: ${y} };
    `
  }
}


function ShorthandProperty_S2() {
  const name = list.names();
  const lastname = list.lastNames();

  return {
    problem: `

      Consider the following code:

          let name = '${name}';
          let lastname = '${lastname}';
          
          let person = {
            name,
            lastname
          };

      What kind of object was created?

      {{ radio }}

    `,

    widgets: {
      radio: radio(
        `{ name: '${name}', lastname: '${lastname}' }`,
        `{ '${name}', '${lastname}' }`,
        `'${name} ${lastname}'`,
        `{ name, lastname }`,
        `SyntaxError`
      )
    }

  }
}


function ShorthandProperty_M() {
  const name = list.names();
  const age = rnd(18, 35);

  return {
    problem: `
      Consider the following code:

          function createPerson(name, age) {
            return {
              name,
              age
            };
          }

          createPerson('${name}', ${age});

      What's the returning value of function call?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
        `{ name: '${name}', age: '${age}' }`,
        `{ '${name}', '${age}' }`,
        `{ name, age }`,
        `SyntaxError`
      ) },

    solution: `

      __Answer: \`{ name: '${name}', age: '${age}' }\`.__

      In ES6 property keys can be initialized by variables of the same name. This is called _“property name shorthand”_. Function \`createPerson\` can be rewritten in ES5 syntax as follows:

          function createPerson(name, age) {
            return {
              name: name
              age: age
            };
          }

    `
  }
}


function ComputedProperty_L() {
  const animal = list.animal();
  const type = rnd([ 'type', 'specie', 'name', 'value' ]);

  return {
    problem: `
      Consider the following code:

          let animal = '${animal}';

          let obj = {
            [animal]: '${type}'
          };

      What's the name of the only property of \`obj\`?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `'${animal}'`,
      `'animal'`,
      `animal`,
      `'${type}'`,
      `undefined`
      ) }
  }
}


function ComputedProperty_M() {
  const firstName = list.names();
  const lastName = list.lastNames();

  return {
    problem: `
      Consider the following code:

          let suffix = 'Name';

          let person = {
            ['first' + suffix]: '${firstName}',
            ['last' + suffix]: '${lastName}'
          };

      How to get value \`'${firstName}'\` from object \`person\`?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      rnd([`person.firstName`, `person['firstName']`]),
      `person['lastName']`,
      `person['last']`,
      `person['${firstName}']`
      ) }
  }
}


function ComputedProperty_XL() {
  const prop = list.variableNames();
  const magicNumber = rnd([ 42, 3.14, 128, 21, 7, 0 ]);

  return {
    problem: `

      What's the name of the only property of this object?

          { [ '${prop}_' + (() => ${magicNumber})() ]: ${magicNumber} }

      {{ radio }}
    `,

    widgets: { radio: this.radioCode(
      `'${prop}_${magicNumber}'`,
      `'${magicNumber}_${prop}'`,
      `undefined`,
      `'${magicNumber}'`,
      `'${prop}'`
      ) }
  }
}


function ShorthandMethodAndProperty_XL() {
  const name = list.names();

  return {
    problem: `
      Consider the following code:

          function createPerson(name) {
            return {
              greeting() {
                return \`Hello, \${this.name}\`;
              }, name
            }
          }

          console.log(createPerson('${name}').greeting());

      Which value will print to the console?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
        `'Hello, ${name}'`,
        `'Hello, undefined'`,
        `{ name: '${name}' }`,
        `undefined`,
        `${name}`
      ) }
  }
}


export default [
  'Object Literal (ES6)',

  [ShorthandProperty_S, 2],
  [ShorthandProperty_S2, 2],
  [ShorthandProperty_M, 1],

  [ComputedProperty_L, 1],
  [ComputedProperty_M, 1],
  [ComputedProperty_XL, 1],

  [ShorthandMethodAndProperty_XL, 1]
];
