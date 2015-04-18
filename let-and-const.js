/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';


function SingleAssignment() {
  const animal = `'${ this.rnd(this.list.animal) }'`;

  return {
    problem: `

      Determine which value goes into console.

          let animal = ${ animal };

          console.log(animal);

      {{ radio }}

    `,

    widgets: { radio: this.radio(`\`${animal}\``, [
        `\`${animal.slice(1, -1)}\``,
        '`animal`',
        '`\'animal\'`',
        '`undefined`'
      ]) }
  }
}


export default [
  'Let and Const',
  [SingleAssignment, 1]
];
