/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

var marked = require('marked');


/**
 * first we're splitting markdown
 * into blocks by `\n\n`,
 * then parse them one by one
 */
function parser(md) {
  return md.replace(/\n*$/, '').split(/\n{2}/).map(parseBlock);
}

/**
 * we're using reduce as forEach with memory (`prev`)
 * first match is true by default,
 * then find any match for custom tokens
 * if there's match, convert block into primitive AST
 */
function parseBlock(str) {
  return tagMatchers.reduce(function(prev, matcher) {
    return matcher.match(str) ? matcher : prev;
  }).parse(str);
}

// create collection of matchers
var tagMatchers = [];

/**
 * default matcher, do nothing
 * later it should be parsed
 * as regular markdown string
 */
tagMatchers.push({
  match(str) {
    return true;
  },
  parse(str) {
    return marked.lexer(str)[0];
  }
});

/**
 * Radio component, unordered list
 * first option is the answer
 * (supports multiline code blocks)
 * 
 * regexp:
 * - dash symbol
 * - either literal space or newline
 */
tagMatchers.push({
  match(str) {
    return /^-[ \n]/.test(str);
  },
  parse(str) {
    var options = str.slice(2).split(/\n-[ \n]/);
    return {
      type: 'Radio',
      options: options.slice(1),
      answer: options[0]
    };
  }
});

/**
 * Drag component, ordered list
 * order themself is the answer
 * (supports multiline code blocks)
 * 
 * regexp:
 * - any digit from 0 to 9
 * - literal dot
 * - either literal space or newline
 */
tagMatchers.push({
  match(str) {
    return /^[0-9]\.[ \n]/.test(str);
  },
  parse(str) {
    var options = str.slice(3).split(/\n[0-9]\.[ \n]/);
    return {
      type: 'Drag',
      options: options
    };
  }
});

/**
 * Input component, [[ ... ]]
 * symbols inside parens is the answer
 * 
 * regexp:
 * - literal `[[` at the start
 * - any symbols
 * - literal `]]` at the end
 *
 * we didn't forget to trim whitespaces
 * [[ ... ]], [[ ...]], [[... ]], [[...]]
 */
tagMatchers.push({
  match(str) {
    return /\[\[.+\]\]$/.test(str);
  },
  parse(str) {
    var answer = str.slice(2, -2).trim();
    return {
      type: 'Input',
      answer: answer
    };
  }
});

/**
 * Check component, [x]'s and [ ]'s
 * [x]'s are the answers
 * (that's kinda GFM's to-do list)
 * 
 * regexp:
 * - `[` symbol
 * - either `x` or literal space
 * - `]` symbol
 * - either literal space or newline
 */
tagMatchers.push({
  match(str) {
    return /^\[[x ]\] /.test(str);
  },
  parse(str) {
    var options = [];
    var answers = [];
    
    str.split('\n').forEach(function(item) {
      if (/^\[x\] /.test(item)) {
        answers.push(item.slice(4));
      } else {
        options.push(item.slice(4));
      };
    });

    return {
      type: 'Check',
      options: options,
      answers: answers
    };
  }
});

module.exports = parser;
