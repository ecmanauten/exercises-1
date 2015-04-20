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
      `person.firstName`,
      `person['lastName']`,
      `person['last']`,
      `person['${firstName}']`
      ) }
  }
}



export default [
  'Object Literal ES6',
  [ShorthandPropertyNames, 1],
  [ComputedProperties, 1]
];
