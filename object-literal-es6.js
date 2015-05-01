/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';


function ShorthandPropertyNames() {
  const name = this.rnd(this.list.names);
  const age = this.rnd(18, 35);

  return {
    problem: `
      Consider the following code:

          function createPerson(name, age) {
            return {
              name,
              age
            };
          }

          createPerson(${name}, ${age});

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


function ShorthandPropertyNames2() {
  const [ x, y ] = this.rnd(this.list.letterPairs);
  const v1 = this.rnd(1, 10);
  const v2 = this.rnd(1, 10);
  const q = this.rnd() ? [x, v1] : [y, v2];
  const decl = this.rnd(['var', 'let', 'const']);
  const obj = this.rnd(['result', 'sum', 'expression', 'abc', 'value', 'total', 'one', 'xyz']);

  return {
    problem: `

      Consider the following code:

          ${decl} ${x} = ${v1};
          ${decl} ${y} = ${v2};

          ${decl} ${obj} = { ${x}, ${y} };

      Which value is stored in property \`obj.${q[0]}\`?

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


function ShorthandMethodAndPropertyNames() {
  const name = this.rnd(this.list.names);

  return {
    problem: `
      Consider the following code:

          function createPerson(name) {
            return {
              greeting() {
                return \`Hello, \${this.name}\`;
              },
              name
            }
          }

          console.log(createPerson('${name}').greeting());

      Which value will print to the console?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
        `'Hello, ${name}'`,
        `{ name: '${name}' }`,
        `undefined`,
        `${name}`
      ) }
  }
}


function ComputedProperties() {
  const firstName = this.rnd(this.list.names);
  const lastName = this.rnd(this.list.lastNames);

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
      this.rnd([`person.firstName`, `person['firstName']`]),
      `person['lastName']`,
      `person['last']`,
      `person['${firstName}']`
      ) }
  }
}


function MagicShorthandMethodName() {
  const prop = this.rnd(this.list.variableNames);
  const magicNumber = this.rnd([ 42, 3.14, 128, 21, 7, 0 ]);

  return {
    problem: `

      What's the name of the singular property of this object?

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


export default [
  'Object Literal (ES6)',
  [ShorthandPropertyNames, ShorthandPropertyNames2, 1],
  [ShorthandMethodAndPropertyNames, 1],
  [ComputedProperties, 1],
  [MagicShorthandMethodName, 1]
];
