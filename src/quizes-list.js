/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';


var skillsList = [

  ['Primitive Datatypes', 'primitive-datatypes', true],

  '<Script> tag',

  'Math Object',

  ['Math Operators', 'math-operators', false],
  ['Inequality Operators', 'inequality-operators', false],
  'Equality Operators',
  ['String Concatenation', 'string-concatenation', false],

  'String Methods',

  ['Variable Declaration', 'variable-declaration', false],
  'Reference vs Value',

  'Operators Properties',
  'Function Invocation',
  'Boolean Expressions',
  'Arrays and Objects',
  'Null or Undefined',

  ['Increment and Decrement', 'increment-and-decrement', false],
  ['While Loop', 'while-1', false],

  'For Loop',
  'Array Methods',
  'JSON literal',
  'Window object',
  'Timers',

  'Event Loop'

];

module.exports = skillsList.map(function(item, i) {
  if (typeof item !== 'string') {
    return {
      title: item[0],
      url: item[2] ? item[1] : undefined,
      // if there's an image with url's address
      imageName: item[1],
      tags: ['while loop lesson'],
      key: i
    };
  } else {
    return {
      title: item,
      key: i
    };
  };
});
