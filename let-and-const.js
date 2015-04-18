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

    `,

    widgets: { radio: this.radioCode(
        `'${ value }'`,
        `${ variableName }`,
        'undefined'
      ) },

    solution: `

      __Answer: \`${ value }\`.__

      Assignment using \`let\` and \`const\` works the same as using \`var\`.

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

      Multiple assignment using \`let\` and \`const\` works the same as using \`var\`.

    `

  }
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

      Multiple assignment using \`let\` and \`const\` works the same as using \`var\`.

    `
  }
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

      Multiple assignment of \`let\` and \`const\` works the same as \`var\`.

    `
  }
}


function MutateConst() {
  const variableName = this.rnd(this.list.variableNames);
  const integer = this.rnd(1,100);
  const magicNumber = this.rnd(this.list.magicNumbers);

  return {
    problem: `

      Determine which value goes into console.

          const ${ variableName } = ${ magicNumber };

          ${ variableName } = ${ integer };

          console.log(${ variableName });

      {{ radio }}

      _Consider that we're using Chrome or Firefox._

    `,

    widgets: { radio: this.radioCode(
        `${ magicNumber }`,
        'SyntaxError',
        `${ integer }`,
        'undefined',
        `${ variableName }`
      )},

    solution: `

      __Answer: \`${ magicNumber }\`.__

      Trying to re-assignment a constant should throws an error, but this will fail silently in Firefox and Chrome. Constant value remains the same.

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

      _Consider that we're using [Babel](http://babeljs.io)._

    `,

    widgets: { radio: this.radioCode(
        'SyntaxError',
        'undefined',
        'a'
      ) },

    solution: `

      __Answer: \`SyntaxError\`.__

      Constant statement \`const\` requires an initializer, e.g. initial assignment using \`=\` or other assignment operators. But Chrome and Firefox behave differently: they silently assign \`undefined\` value to empty constant.

    `
  };
}


/**
 * TODO
 * 
 * - double declaration
 * - call before declare
 * - scoping
 *   - let vs var
 *   - let vs const
 *   - if/else
 *   - loops
 */


export default [
  'Let and Const',
  [SingleAssignment, 2],
  [MutateConst, ConstWithoutAssignment, 1],
  [MultipleAssignment1, MultipleAssignment2, MultipleAssignment3, 1]
];
