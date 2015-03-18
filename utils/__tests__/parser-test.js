/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

// jest.autoMockOff();

var assert = require('assert');
var parser = require('../parser');


var numberFour = [
  "    var x = 7;",
  "    x += 1;",
  "    --x;",
  "",
  "Which value stored in variable `x`",
  "",
  "[[ 7 ]]",
  ""
].join('\n');


// describe('parser', function() {

//   it('testing for extra \\n at the end', function() {
//     assert(parser(numberFour).length, 3);
//   });

// });

console.log(parser(numberFour));