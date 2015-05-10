/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';


function SingleAssignment() {
  const variableName = this.rnd(this.list.variableNames);
  const randomList = this.rnd([ 'names', 'threeLetterWords', 'animal', 'vegetables' ]);
  const value = this.rnd(this.list[randomList]);
  const letOrConst = this.rnd(['let', 'const']);

  return {
    problem: `

      Determine which value goes into console.

          ${ letOrConst } ${ variableName } = '${ value }';

          console.log(${ variableName });

      {{ radio }}

      ${ this.rnd() ? this.dedent`If we substitute \`${ letOrConst }\` with \`var\` will the result be the same?

      {{ radio2 }}` : '' }

    `,

    widgets: {
        radio: this.radioCode(
          `'${ value }'`,
          `${ variableName }`,
          'undefined'
        ),
        radio2: this.radio('yes', ['no'])
      },

    solution: `

      __Answers: \`'${ value }'\` and “yes”.__

      When \`let\` and \`const\` are used for single variable assignment, it works the same way as when \`var\` is used.

    `
  };
}


function MultipleAssignment1() {
  const [ a, b, c ] = this.rnd(this.list.letterTriples);
  const trap = this.rnd([a, b, c]);

  return {
    problem: `

      Determine which value goes into console.

          let ${a}, ${b}, ${c};

          console.log(${ trap });

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      'undefined',
      `${ trap }`,
      'SyntaxError'
    ) },

    solution: `

      __Answer: \`undefined\`.__

      When \`let\` and \`const\` are used for multiple variable assignment assignment, it works the same way as when \`var\` is used.

    `

  };
}


function MultipleAssignment2() {
  const [ a, b, c ] = this.rnd(this.list.letterTriples);
  const value = this.rnd(this.list.magicNumbers);
  const letOrConst = this.rnd(['let', 'const']);

  return {
    problem: `

      Determine which value goes into console.

          ${letOrConst} ${a}, ${b}, ${c} = ${ value };

          console.log(${ c });

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `${ value }`,
      'undefined',
      'SyntaxError'
    ) },

    solution: `

      __Answer: \`${ value }\`.__

      When \`let\` and \`const\` are used for multiple variable assignment assignment, it works the same way as when \`var\` is used.

    `
  };
}


function MultipleAssignment3() {
  const [ a, b, c ] = this.rnd(this.list.letterTriples);
  const value = this.rnd(this.list.magicNumbers);
  const letOrConst = this.rnd(['let', 'const']);
  const letter = this.rnd([a, c]);

  return {
    problem: `

      Determine which value goes into console.

          ${letOrConst} ${a}, ${b} = ${ value }, ${c};

          console.log(${ letter });

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      'undefined',
      `${ value }`,
      'SyntaxError'
    ) },

    solution: `

      __Answer: \`undefined\`.__

      When \`let\` and \`const\` are used for multiple variable assignment assignment, it works the same way as when \`var\` is used. Variable \`letter\` doesn't have any assigned value, so it equals \`undefined\` given by default.

    `
  };
}


function MutateConst() {
  const variableName = this.rnd(this.list.variableNames);
  const integer = this.rnd(1, 100);
  const magicNumber = this.rnd(this.list.magicNumbers);

  return {
    problem: `

      Determine which value goes into console.

          const ${ variableName } = ${ magicNumber };

          ${ variableName } = ${ integer };

          console.log(${ variableName });

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
        'SyntaxError',
        `${ magicNumber }`,
        `${ integer }`,
        'undefined',
        `${ variableName }`
      )},

    solution: `

      __Answer: \`SyntaxError\`.__

      According to ES6 specs, trying to re-assign a constant throws a \`SyntaxError\`. _(But this will fail silently in Firefox and Chrome)_.

    `
  };
}


function ConstWithoutAssignment() {
  const animal = `'${ this.rnd(this.list.animal) }'`;
  const animal2 = `'${ this.rnd(this.list.animal) }'`;

  return {
    problem: `

      Determine which value goes into console.

          const a;

          console.log(a);

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
        'SyntaxError',
        'undefined',
        'a'
      ) },

    solution: `

      __Answer: \`SyntaxError\`.__

      Constant statement \`const\` requires an initializer, e.g. initial assignment using \`=\` or other assignment operators. _(But Chrome and Firefox behave differently: they silently assign \`undefined\` value to empty constant)_.

    `
  };
}


function TemporalDeadZone1() {
  const [a, b] = this.rnd(this.list.letterPairs);
  const value1 = this.rnd(this.list.buzzWordOne);
  const value2 = this.rnd(this.list.buzzWordOne);

  return {
    problem: `

      Determine which value goes into console.

          if (true) {
            ${a} = '${value1}';
            ${b} = '${value2}';

            let ${a};
            var ${b};

            console.log(${a}, ${b});
          }

      {{ radio }}

    `,

    widgets: { radio: this.radio(
        '`ReferenceError`', [
        `\`undefined\`, \`'${value2}'\``,
        '`undefined`, `undefined`',
        `\`'${value1}'\`, \`'${value2}'\``,
        `\`'${value1}'\`, \`undefined\``
      ]) },

    solution: `

      __Answer: \`ReferenceError\`.__ (Because of [_temporal dead zone_](http://jsrocks.org/2015/01/temporal-dead-zone-tdz-demystified/)).

      Regular \`var\` declaration “hoists” to the top of its current scope. That allows to use variable before declaring it. This doesn't work for \`let\` that uses a concept of [_temporal dead zone_](http://jsrocks.org/2015/01/temporal-dead-zone-tdz-demystified/).

    `
  };
}


function TemporalDeadZone2() {
  const [a, b] = this.rnd(this.list.letterPairs);
  const value1 = this.rnd(this.list.buzzWordOne);
  const value2 = this.rnd(this.list.buzzWordOne);

  return {
    problem: `

      Determine which value goes into console.

          if (true) {
            let ${a};

            ${a} = '${value1}';
            ${b} = '${value2}';

            var ${b};

            console.log(${a}, ${b});
          }

      {{ radio }}

    `,

    widgets: { radio: this.radio(
        `\`'${value1}'\`, \`'${value2}'\``, [
        '`ReferenceError`',
        '`undefined`, `undefined`',
        `\`'${value1}'\`, \`undefined\``,
        `\`undefined\`, \`'${value2}'\``
      ]) },

    solution: `

      __Answer: \`'${value1}'\`, \`'${value2}'\`.__

      Regular \`var\` declaration “hoists” to the top of its current scope. That allows to use variable before declaring it. This doesn't work for \`let\` that uses a concept of [_temporal dead zone_](http://jsrocks.org/2015/01/temporal-dead-zone-tdz-demystified/).

    `
  };
}


function DoubleDeclaration() {
  const name = this.rnd(this.list.variableNames);
  const value1 = this.rnd(this.list.animal);
  const value2 = this.rnd(this.list.animal);
  const letOrConst = this.rnd(['let', 'const']);

  return {
    problem: `

      Determine which value goes into console.

          ${letOrConst} ${name} = '${value1}';
          ${letOrConst} ${name} = '${value2}';

          console.log(${name});

      {{ radio }}

      ${ this.rnd() ? this.dedent`If we substitute \`${ letOrConst }\` with \`var\` will the result be the same?

      {{ radio2 }}` : '' }

    `,

    widgets: {
      radio: this.radioCode(
        `SyntaxError`,
        `'${value1}'`,
        `'${value2}'`
      ),
      radio2: this.radio('no', ['yes'])
    },

    solution: `

      __Answer: \`SyntaxError\` and “no”.__

      Identifier \`${name}\` has already been declared. Using \`let\` or \`const\` is an illegal operation.

    `
  };
}


function NoHoistingForLetAndConst() {
  const name = this.rnd(this.list.variableNames);
  const value = this.rnd(this.list.animal);
  const letOrConst = this.rnd(['let', 'const']);

  return {
    problem: `

      Consider the following code:

          ${name} = '${value}';
          ${letOrConst} ${name};

      Which value is stored in variable \`${name}\`?

      {{ radio }}

    `,

    widgets: {
      radio: this.radioCode(
        `SyntaxError`,
        `undefined`,
        `'${value}'`,
        `${name}`
      ) },

    solution: `

      __Answer: \`SyntaxError\`.__

      There is no _hoisting_ for \`let\` and \`const\` because of [_temporal dead zone_](http://jsrocks.org/2015/01/temporal-dead-zone-tdz-demystified/).

    `
  };
}


function BlockScopeSimple() {
  const name = this.rnd(this.list.variableNames);
  const value = this.rnd(this.list.animal);
  const letOrConst = this.rnd(['let', 'const']);

  return {
    problem: `

      Determine which value goes into console.

          if (true) {
            ${letOrConst} ${name} = '${value}';
          }
          console.log(${name});

      {{ radio }}

    `,

    widgets: {
      radio: this.radioCode(
        `ReferenceError`,
        `'${value}'`,
        `undefined`,
        `${name}`
      ) },

    solution: `

      __Answer: \`ReferenceError\`.__

      Keywords \`let\` and \`const\` create new variables scoped to the nearest block of code that is denoted by curly braces \`{\` and \`}\`. There is no such identifier \`${name}\` outside that block scope, therefore calling unknown identifier throws \`ReferenceError\`.

    `
  };
}


function DeclareOutsideOfBlock() {
  const name = this.rnd(this.list.variableNames);
  const value = this.rnd(this.list.animal);

  return {
    problem: `

      Determine which value goes into console.

          if (true) {
            let ${name};
  
            if (true) {
              ${name} = '${value}';
            }
  
            console.log(${name});
          }

      {{ radio }}

    `,

    widgets: {
      radio: this.radioCode(
        `'${value}'`,
        `undefined`,
        `${name}`,
        `ReferenceError`
      ) },

    solution: `

      __Answer: \`'${value}'\`.__

      It's possible to change the value of the variable declared in outer block scope.

    `
  };
}


function ForLoop() {
  const i = this.rnd(this.list.letters);
  const n = this.rnd(5, 10);

  return {
    problem: `

      Consider this \`for\` loop:

          for (let ${i} = 0; ${i} < ${n}; ${i}++) {
            // ...
          }

      Is counter \`${i}\` available outside the loop?

      {{ radio }}

    `,

    widgets: { radio: this.radio('no', ['yes']) },

    solution: `

      __Answer: no.__

      Counter initialization by \`let\` keyword in \`for\` loop keeps that counter inside loop’s block scope.

    `
  };
}


function WhileLoop() {
  const i = this.rnd(this.list.letters);
  const n = this.rnd(5, 10);

  return {
    problem: `

      Consider this \`while\` loop:

          let ${i} = 0;

          while (${i} < ${n}) {
            // ...
            ${i}++;
          }

      Is counter \`${i}\` available outside the loop?

      {{ radio }}

    `,

    widgets: { radio: this.radio('yes', ['no']) },

    solution: `

      __Answer: yes.__

      Variable is declared outside of \`while\` loop, therefore it’s accessible outside of the block scope of the loop.

    `
  };
}


function ConstantReference1() {
  const obj = 'person';
  const prop = 'firstName';
  const val = this.rnd(this.list.names);

  return {
    problem: `

      Determine which value goes into console.

          const ${obj} = {};
          ${obj}.${prop} = '${val}';
          console.log(${obj});

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `{ ${prop}: '${val}' }`,
      `'${val}'`,
      `{}`,
      `undefined`,
      `ReferenceError`
    ) },

    solution: `

      __Answer: \`{ ${prop}: '${val}' }\`.__

      Keyword \`const\` creates constant _reference_, not constant _value_. The pointer that the variable name is using cannot change in memory, but the thing the variable points to might change.

    `
  }
}


function ConstantReference2() {
  const arr = 'animals';
  const val1 = this.rnd(this.list.animal);
  const val2 = this.rnd(this.list.animal);

  return {
    problem: `

      Determine which value goes into console.

          const ${arr} = [ '${val1}' ];
          ${arr}.push('${val2}');
          console.log(${arr});

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `[ '${val1}', '${val2}' ]`,
      `[ '${val1}' ]`,
      `[ '${val2}' ]`,
      `undefined`,
      `ReferenceError`
    ) },

    solution: `

      __Answer: \`[ '${val1}', '${val2}' ]\`.__

      Keyword \`const\` creates constant _reference_, not constant _value_. The pointer that the variable name is using cannot change in memory, but the thing the variable points to might change.

    `
  }
}


export default [
  'Let and const',
  [SingleAssignment, 2],
  [MultipleAssignment1, MultipleAssignment2, 1],
  [TemporalDeadZone1, TemporalDeadZone2, 1],
  [DoubleDeclaration, 1],
  [NoHoistingForLetAndConst, 1],
  [BlockScopeSimple, 2],
  [MutateConst, ConstWithoutAssignment, 1],
  [ConstantReference1, ConstantReference2, 1],
  [DeclareOutsideOfBlock, 2],
  [ForLoop, WhileLoop, 2]
];
