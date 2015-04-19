/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';


function ComputedProperties() {
  return {
    problem: `
      Computed Properties

          // right here

          super.toString('hello');
    `
  }
}



export default [
  'Object Literal ES6',
  [ComputedProperties, 1]
];
