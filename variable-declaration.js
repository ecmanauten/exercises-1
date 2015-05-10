/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

import list from 'list-of-lists';
import rnd from './utils/rnd';


function SimpleDeclaration1() {
  const name = list.names();
  const varName = list.variableNames();

  return {
    problem: `

          var ${varName};
          name = "${name}";

      What value is stored in variable \`${varName}\`?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `"${name}"`,
      `name`,
      `var`,
      `undefined`
    ) },

    solution: `

      __Answer: \`"${name}"\`.__

      This is an example of using variable declaration and assignment statements separately.

    `
  };
}


function SimpleDeclaration2() {
  const name = list.names();
  const varName = list.variableNames();

  return {
    problem: `

          var ${varName} = "${name}";

      What value is stored in variable \`${varName}\`?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `"${name}"`,
      `${varName}`,
      `var`,
      `undefined`
    ) },

    solution: `

      __Answer: \`"${name}"\`.__

      This is an example of combination of variable declaration with variable initialization.

    `
  };
}


function StoreExpression() {
  const a = this.rnd(1, 10);
  const b = this.rnd(1, 10);

  const expression = `${a} + ${b}`;
  const variableName = this.rnd(this.list.variableNames);

  return {
    problem: `

          ${ this.rnd() ?
          `var ${variableName};
          ${variableName} = ${expression};` :
          `var ${variableName} = ${expression};` }

      What value is stored in variable \`${variableName}\`?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `${a + b}`,
      `${variableName}`,
      `${a}`,
      `undefined`,
      `var`
    ) },

    solution: `

      __Answer: \`${a + b}\`.__

      It is legal to assign not only literal values (e.g. \`${a}\`) but also expressions (e.g. \`${a} + ${b}\`) to variables.

    `
  };
}


function ReAssignment() {
  const randomNumber = this.rnd(0, 10);
  const randomWord = this.rnd(this.list.threeLetterWords);
  const variableName = this.rnd(this.list.variableNames);


  return {
    problem: `

          ${ this.rnd() ?
          `var ${variableName};
          ${variableName} = ${randomNumber};
          ${variableName} = "${randomWord}";` :

          `var ${variableName} = ${randomNumber};
          ${variableName} = "${randomWord}";` }

      What value is stored in variable \`${variableName}\`?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `"${randomWord}"`,
      `${randomNumber}`,
      `${variableName}`,
      `undefined`,
      `var`
    ) },

    solution: `

      __Answer: \`"${randomWord}"\`.__

      Repeated use of assignment operator \`=\` to the same variable re-writes its value to the later one.

    `
  };
}


function Undefined1() {
  const variableName = this.rnd(this.list.variableNames);

  return {
    problem: `

          var ${variableName};

      What value is stored in variable \`${variableName}\`?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `undefined`,
      `result`,
      `var`,
      `null`,
      `ReferenceError`
    ) },

    solution: `

      __Answer: \`undefined\`.__

      If an initial value for a variable is not specified with the \`var\` statement, the variable is declared, but its value is \`undefined\`.

    `
  };
}


function Undefined2() {
  const name = this.rnd(this.list.names);

  return {
    problem: `

          var firstName;
          var middleName = "${name}";

      What value is stored in variable \`firstName\`?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `undefined`,
      `"${name}"`,
      `firstName`,
      `middleName`,
      `null`
    ) },

    solution: `

      __Answer: \`undefined\`.__

      If an initial value for a variable is not specified with the \`var\` statement, the variable is declared, but its value is \`undefined\`.

    `
  };
}


function Undefined3() {
  const name = this.rnd(this.list.names);
  const pair = this.rnd(this.list.letterPairs);
  const i = pair[0];
  const k = pair[1];

  return {
    problem: `

          ${this.rnd() ?

          `var ${i}, ${k};
          k = 0;` :

          `var ${i}, ${k} = 0;` }

      What value is stored in variable \`${i}\`?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `undefined`,
      `null`,
      `0`,
      `"${i}"`,
      `"${k}`
    ) },

    solution: `

      __Answer: \`undefined\`.__

      If an initial value for a variable is not specified with the \`var\` statement, the variable is declared, but its value is \`undefined\`.

    `
  };
}


function CombinedDeclaration() {
  const name = this.rnd(this.list.names);
  const [i, k, j] = this.rnd(this.list.letterTriples);

  const values = [i, k, j].reduce((acc, curr) => {
    const value = this.rnd([
      ...this.list.magicNumbers,
      ...this.list.variableNames.map(v => `'${v}'`)]);
    acc[curr] = value;

    return acc;
  }, {});

  // pick one randomly, save the rest
  const [variable, ...restTwo] = this.lodash.shuffle([i, k, j]);

  return {
    problem: `

          ${ this.rnd() ?

          `var ${i}, ${k}, ${j};
          ${i} = ${values[i]};
          ${k} = ${values[k]};
          ${j} = ${values[j]};` :

          `var ${i} = ${values[i]}, ${k} = ${values[k]}, ${j} = ${values[j]};` }

      What value is stored in variable \`${variable}\`?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `${values[variable]}`,
      ...restTwo.map(v => values[v]),
      `undefined`
    ) },

    solution: `

      __Answer: \`${values[variable]}\`.__

      It's legal to declare more than one variable with single \`var\` statement.

    `
  };
}


function CombinedDeclaration2() {
  const name = this.rnd(this.list.names);
  const [i, k, j] = this.rnd(this.list.letterTriples);
  const value = this.rnd([
    ...this.list.magicNumbers,
    ...this.list.variableNames.map(v => `'${v}'`)]);

  // pick one randomly, save the rest
  const [variable, ...restTwo] = this.lodash.shuffle([i, k, j]);

  return {
    problem: `

          var ${i} = ${k} = ${j} = ${value};

      What value is stored in variable \`${variable}\`?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `${value}`,
      ...restTwo,
      `undefined`
    ) },

    solution: `

      __Answer: \`${value}\`.__

      It's legal to declare more than one variable with single \`var\` statement.

    `
  };
}


export default [
  'Variable Declaration',
  [SimpleDeclaration1, SimpleDeclaration2, 3],
  [StoreExpression, 3],
  [ReAssignment, 3],
  [Undefined1, Undefined2, Undefined3, 1],
  [CombinedDeclaration, CombinedDeclaration2, 2]
];
