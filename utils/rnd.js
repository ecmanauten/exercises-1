/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

import Random from 'random-js';

/**
 * Random utility library
 * 
 * rnd() -> true / false
 * rnd(array) -> "some" / "array"
 * rnd(min, max) -> int from range
 */
export default function rnd(...args) {
  if (args.length === 0) {
    // true or false
    return coin();
  } else if (args.length === 1 && Array.isArray(args[0])) {
    // random array element
    return randomElement(...args);
  } else if (args.length === 2 && Array.isArray(args[0])) {
    // random multiple array elements
    return randomElements(...args);
  } else if (args.length === 2) {
    // random integer from range (inclusive)
    return getRandomInt(...args);
  } else {
    throw new Error('rnd arguments mismatch');
  }
};

const engine = Random.engines.nativeMath;

function getRandomInt(min, max) {
  // the only dependency
  return Random.integer(min, max)(engine);
}

function randomElement(array) {
  return array[getRandomInt(0, array.length-1)];
}

function randomElements(array, n) {
  return (function iter(acc, arr, m) {
    if (m) {
      const k = getRandomInt(0, arr.length-1);
      acc.push(arr[k]);
      // recurse
      return iter(acc, arr.filter((el, i) => i !== k), m-1);
    } else {
      return acc;
    }
  })([], array, n);
}

function take(list, n) {
  if (n === undefined) {
    // return one random element
    return randomElement(list);
  } else {
    // return multiple random elements
    return randomElements(list, n);
  }
}

function coin() {
  return !!getRandomInt(0, 1);
}
