/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';


function SimpleDeclaration() {
  const name = this.rnd(this.list.names);

  return {
    problem: `

          ${ this.rnd() ?
          `var name;
          name = "${name}";` :
          `var name = "${name}";` }

      Which value stored in variable \`name\`?

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

    `
  };
}


function TheResultIs() {
  const a = this.rnd(1, 10);
  const b = this.rnd(1, 10);
  const variableName = this.rnd(this.list.variableNames);

  return {
    problem: `

          var answer = ${a} + ${b}
          result = "The result is: " + answer;

      Which value stored in variable \`result\`?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `"The result is: ${a + b}"`,
      `answer`,
      `result`,
      `${a + b}`
    ) },

    solution: `

      __Answer: \`"The result is: ${a + b}"\`.__

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

      Which value stored in variable \`${variableName}\`?

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

      Which value stored in variable \`${variableName}\`?

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

    `
  };
}


function Undefined1() {
  const variableName = this.rnd(this.list.variableNames);
  const variation = `var ${variableName};`;

  return {
    problem: `

          ${variation}

      Which value stored in variable \`${variableName}\`?

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

    `
  };
}


function Undefined2() {
  const name = this.rnd(this.list.names);

  return {
    problem: `

          var firstName;
          var middleName = "${name}";

      Which value stored in variable \`firstName\`?

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

      Which value stored in variable \`${i}\`?

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

      Which value stored in variable \`${variable}\`?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `${values[variable]}`,
      ...restTwo.map(v => values[v]),
      `undefined`
    ) },

    solution: `
      __Answer: \`${values[variable]}\`.__
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

      Which value stored in variable \`${variable}\`?

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `${value}`,
      ...restTwo,
      `undefined`
    ) },

    solution: `
      __Answer: \`${value}\`.__
    `
  };
}


export default [
  'Variable Declaration',
  [SimpleDeclaration, 3],
  [StoreExpression, 3],
  [ReAssignment, 3],
  [[Undefined1, Undefined2, Undefined3], 1],
  [CombinedDeclaration, CombinedDeclaration2, 2]
];
