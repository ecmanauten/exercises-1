/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

var React = require('react');


var reactify = function(str) {
  // test for code block
  if (/^ {4}/.test(str)) {
    return <pre>{str.slice(4).split(/\n {4}/).join('\n')}</pre>;
  } else {
    return inlineParse(str);
  };
}

function inlineParse(str) {
  return str.split(/(`.+?`)/).map(function(item, i) {
    return !/^`(.+)`$/.test(item) ? item :
      React.createElement('code', {key: i}, item.slice(1, -1));
  });
}


module.exports = reactify;
