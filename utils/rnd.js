/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';


/**
 * Random utility library
 * 
 * rnd() -> true / false
 * rnd(array) -> "some" / "array"
 * rnd(min, max) -> int from range
 */
var rnd = function(...args) {

  switch(args.length) {

    // true or false
    case 0:
      return coin();
    break;

    // random array element
    case 1:
      return randomElement(...args);
      break;

    // random integer from range (inclusive)
    case 2:
      return getRandomInt(...args);
      break;

  };

};


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomElement(array) {
  return array[getRandomInt(0, array.length-1)];
}

function coin() {
  return !!getRandomInt(0, 1);
}


module.exports = rnd;
