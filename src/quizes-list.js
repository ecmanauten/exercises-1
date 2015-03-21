/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';


var skillsList = [

  ['Primite Datatypes', 'primitive-datatypes'],

  '<Script> tag',

  'Math Object',

  ['Math Operators', 'math-operators', true],
  ['Inequality Operators', 'inequality-operators'],
  'Equality Operators',
  ['String Concatenation', 'string-concatenation'],

  'String Methods',

  ['Variable Declaration', 'variable-declaration'],
  'Reference vs Value',

  'Operators Properties',
  'Function Invocation',
  'Boolean Expressions',
  'Arrays and Objects',
  'Null or Undefined',

  ['Increment and Decrement', 'increment-and-decrement'],
  ['While Loop', 'while-1'],

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
      url: item[1],
      // if there's an image with url's address
      imageName: item[2] ? item[1] : undefined,
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
