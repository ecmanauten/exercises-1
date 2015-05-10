/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

import list from 'list-of-lists';
import rnd from './utils/rnd';
import { radioCode as radio, yesNo } from './utils/widget-helpers';


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

          ${ rnd() ? 

          `${decl} ${x} = ${v1};
          ${decl} ${y} = ${v2};` :

          `${decl} ${x} = ${v1}, ${y} = ${v2};` }

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
    },

    solution: `

      __Answer: \`{ name: '${name}', lastname: '${lastname}' }\`.__

      In ES6 property keys can be initialized by variables of the same name. This is called _“property name shorthand”_. This is an equivalent of writing the following ES5 code:

          let person = {
            name: name,
            lastname: lastname
          };

    `

  }
}


function ShorthandProperty_S2_Error() {
  const name = list.names();
  const lastname = list.lastNames();

  return {
    problem: `

      Consider the following code:

          let name = '${name}';
          let lastname = '${lastname}';
          
          let person = {
            name
            lastname
          };

      What kind of object was created?

      {{ radio }}

    `,

    widgets: {
      radio: radio(
        `SyntaxError`,
        `{ name: '${name}', lastname: '${lastname}' }`,
        `{ '${name}', '${lastname}' }`,
        `'${name} ${lastname}'`,
        `{ name, lastname }`
      )
    },

    solution: `

      __Answer: \`SyntaxError\`.__

      It looks like object literal initialization using _“property name shorthand”_, but there's a missing comma between key/value pairs.

    `
  }
}


function ShorthandProperty_M() {
  const name = list.names();
  const city = list.citiesOfUSAtop20();
  const age = rnd(18, 35);

  return {
    problem: `
      Consider the following code:

          function createPerson(firstname, age, city) {
            return {
              name: firstname, age, city
            };
          }

          createPerson('${name}', ${age}, ${city});

      What's the returning value of function call?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
        `{ name: '${name}', age: '${age}', city: '${city}' }`,
        `{ firstname: '${name}', age: '${age}', city: '${city}' }`,
        `{ '${name}', '${age}', '${city}' }`,
        `{ name, age, city }`,
        `SyntaxError`
      ) },

    solution: `

      __Answer: \`{ name: '${name}', age: '${age}', city: '${city}' }\`.__

      In ES6 property keys can be initialized by variables of the same name. This is called _“property name shorthand”_. Function \`createPerson\` can be rewritten in ES5 syntax as follows:

          function createPerson(firstname, age) {
            return {
              name: firstname, age: age, city: city
            };
          }

    `
  }
}


function ComputedProperty_S() {
  const obj = list.variableNames();
  const [username, reservedWord] = list.reserved(2);

  return {
    problem: `
      What kind of object was created?

          let obj = { ['${username}']: '${reservedWord}' };

      {{ radio }}
    `,

    widgets: { radio: radio(
      `{ '${username}': '${reservedWord}' }`,
      `{ '${reservedWord}': '${username}' }`,
      `{ ['${reservedWord}']: '${username}' }`,
      `SyntaxError`
    ) },

    solution: `

      __Answer: \`{ '${username}': '${reservedWord}' }\`.__

      Computed property names syntax allows you to put an expression in brackets \`[]\`, that will be computed as the property name.

    `
  }
}


function ComputedProperty_L_Reverse() {
  const animal = list.animal();
  const type = rnd([ 'type', 'specie', 'name', 'value' ]);

  return {
    problem: `
      Consider the following code:

          let animal = '${animal}';

          let obj = {
            [animal]: '${type}'
          };

      What's the name of the _only property_ of \`obj\`?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `'${animal}'`,
      `'animal'`,
      `animal`,
      `'${type}'`,
      `undefined`
      ) },

    solution: `

      __Answer: \`'${animal}'\`.__

      Computed property names syntax allows you to put an expression in brackets \`[]\`, that will be computed as the property name.

      Also, don't be confused by reversed key/value pair in this example.

    `
  }
}


function ComputedProperty_M() {
  const firstName = list.names();
  const lastName = list.lastNames();
  const answer = rnd([`person.firstName`, `person['firstName']`]);

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
      answer,
      `person['lastName']`,
      `person['last']`,
      `person['${firstName}']`
      ) },

    solution: `

      __Answer: \`${answer}\`.__

      Computed property names syntax allows you to put an expression in brackets \`[]\`, that will be computed as the property name.

      Expression \`['first' + suffix]\` computes to object key \`firstName\`, which allows to retrieve property \`'${firstName}'\` from object \`person\`.

    `
  }
}


function ComputedProperty_XL() {
  const prop = list.variableNames();
  const magicNumber = rnd([ 42, 3.14, 128, 21, 7, 0 ]);
  const _ = rnd() ? '_' : '';
  const expression = rnd([
    `(() => ${magicNumber})()`,
    `${magicNumber}`,
    `(${magicNumber}).toString()`
  ]);

  return {
    problem: `

      What's the name of the _only property_ of this object?

          { [ '${prop}${_}' + ${expression} ]: ${magicNumber} }

      {{ radio }}
    `,

    widgets: { radio: this.radioCode(
      `'${prop}${_}${magicNumber}'`,
      `'${magicNumber}${_}${prop}'`,
      `undefined`,
      `'${magicNumber}'`,
      `'${prop}'`
      ) },

    solution: `

      __Answer: \`'${prop}${_}${magicNumber}'\`.__

      Computed property names syntax allows you to put an expression in brackets \`[]\`, that will be computed as the property name.

      It's perfectly fine to use any kind of expressions as computed object key. So, expression \`[ '${prop}${_}' + ${expression} ]\` computes to object key \`'${prop}${_}${magicNumber}'\`.

    `
  }
}


function ShorthandMethod_S_Right() {
  const name = list.names();
  const variation = rnd() ? '()' : ':';
  const [obj, foo] = list.variableNames(2);
  const bar = list.reserved();

  return {
    problem: `
      Consider the following code:

          let ${obj} = {
            ${foo}() { return '${bar}'; }
          };

      Is this a valid way to create object \`${obj}\` with method \`${foo}\`?

      {{ yesNo }}

    `,

    widgets: { yesNo: yesNo(true) },

    solution: `

      __Answer: 'yes'.__

      Method name shorthand notation allows to omit the keyword \`function\` and colon \`:\`.

    `
  }
}


function ShorthandMethod_S_Wrong() {
  const name = list.names();
  const [obj, foo] = list.variableNames(2);
  const bar = list.reserved();

  return {
    problem: `
      Consider the following code:

          let ${obj} = {
            ${foo}: { return '${bar}'; }
          };

      Is this a valid way to create object \`${obj}\` with method \`${foo}\`?

      {{ yesNo }}

    `,

    widgets: { yesNo: yesNo(false) },

    solution: `

      __Answer: 'no'.__

      This isn't a correct use of method name shorthand notation. The correct one looks like this (mind the \`()\` instead of \`:\`):

          let ${obj} = {
            ${foo}() { return '${bar}'; }
          };

    `
  }
}


function ShorthandMethodAndProperty_L() {
  const name = list.names();
  const [obj, foo] = list.variableNames(2);
  const bar = list.reserved();

  return {
    problem: `
      Consider the following code:

          function ${foo}() { return '${bar}'; };
          let ${obj} = { ${foo} };

      Is this a valid way to create object \`${obj}\` with method \`${foo}\`?

      {{ yesNo }}

    `,

    widgets: { yesNo: yesNo(true) },

    solution: `

      __Answer: yes.__

      In ES6 property keys can be initialized by variables of the same name. This is called _“property name shorthand”_. But in this case property also holds a reference to a function which makes that property a method.

    `
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
            };
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
        `'${name}'`
      ) },

    solution: `

      __Answer: \`'Hello, ${name}'\`.__

      This is an example of using shorthand notation for both property and methods names.

    `
  }
}


export default [
  'Object literal (ES6)',

  [ShorthandProperty_S, 2],
  [ShorthandProperty_S2, 2],
  [ShorthandProperty_S2_Error, 2],
  [ShorthandProperty_M, 1],

  [ComputedProperty_S, 1],
  [ComputedProperty_M, 1],
  [ComputedProperty_L_Reverse, 1],
  [ComputedProperty_XL, 1],

  [ShorthandMethod_S_Right, ShorthandMethod_S_Wrong, 1],
  [ShorthandMethodAndProperty_L, 1],
  [ShorthandMethodAndProperty_XL, 1]
];
