/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';


/**
 * non-raw cooking template strings
 * (copied from internets)
 */
export function cook(literals, ...substitutions) {
  let result = "";

  // run the loop only for the substitution count
  for (let i = 0; i < substitutions.length; i++) {
    result += literals[i];
    result += substitutions[i];
  }

  // add the last literal
  result += literals[literals.length - 1];

  return result;
}


export default function dedent(...raw) {
  let halfbaked;

  /**
   * we can use dedent as template tag
   * or as usual string function
   */
  if (arguments.length > 1) {
    halfbaked = cook(...raw);
  } else {
    halfbaked = arguments[0];
  };

  /**
   * cleverly trim insignificant whitespaces
   * but not the actual indents
   */
  let shaved = /^(?:\s*\n)?([\s\S]*?)\s*$/.exec(halfbaked)[1];

  /**
   * take first indent or find even smaller
   * use it to dedent all the strings
   * and ignore only whitespace strings
   */
  let indents = shaved.split('\n').reduce(function(acc, curr) {
    // return indents only for non-empty strings
    if (!/^\s*$/.test(curr)) {
      acc.push(curr.match(/^\s*/)[0]);
    };
    return acc;
  }, []);

  // find the smallest indent
  let smallestIndent = indents.reduce(function(acc, curr) {
    return curr.length < acc ? curr.length : acc;
  }, Infinity);

  // trim by size of the smallest indent
  let dedented = shaved.split('\n').map(function(item) {
    return item.slice(smallestIndent);
  });

  // let result = dedented;
  let result = dedented.join('\n');

  return result;
}
