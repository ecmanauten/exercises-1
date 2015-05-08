/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

import list from 'list-of-lists';
import rnd from './utils/rnd';
import { radio, check, radioCode } from './utils/widget-helpers';
import { mdCodeBlock as block } from 'cooked';


function InterpolationSingle1() {
  const name = list.names();
  const username = rnd([ 'username', 'user', 'firstName', 'login' ]);
  const greeting = rnd([ 'greeting', 'hello', 'message', 'output' ]);
  const s = rnd() ? ' ' : '';

  return {
    problem: `
      What will this code output?

          let ${username} = '${name}';
          let ${greeting} = \`Hello, \${${s}${username}${s}}\`;
          console.log(${greeting});

      {{ radio }}
    `,

    widgets: { radio: radioCode(
      `'Hello, ${name}'`,
      `'Hello, \${${s}${username}${s}}'`,
      `'Hello, ${username}'`,
      `'Hello, undefined'`,
      `SyntaxError`
    ) }
  }
}


function InterpolationSingle1_Shadow() {
  const name = list.names();
  const username = rnd([ 'username', 'user', 'firstName', 'login' ]);
  const greeting = rnd([ 'greeting', 'hello', 'message', 'output' ]);
  const s = rnd() ? ' ' : '';

  return {
    problem: `
      What will this code output?

          let ${username} = '${name}';
          let ${greeting} = \`Hello, #{${s}${username}${s}}\`;
          console.log(${greeting});

      {{ radio }}
    `,

    widgets: { radio: radioCode(
      `'Hello, #{${s}${username}${s}}'`,
      `'Hello, ${name}'`,
      `'Hello, ${username}'`,
      `'Hello, undefined'`,
      `SyntaxError`
    ) }
  }
}


function InterpolationSingle1_Undefined() {
  const name = list.names();
  const names = [ 'username', 'user', 'firstName', 'login' ];
  const [username1, username2] = rnd(names, 2);
  const greeting = rnd([ 'greeting', 'hello', 'message', 'output' ]);
  const s = rnd() ? ' ' : '';

  return {
    problem: `
      What will this code output?

          let ${username1} = '${name}';
          let ${greeting} = \`Hello, \${${s}${username2}${s}}\`;
          console.log(${greeting});

      {{ radio }}
    `,

    widgets: { radio: radioCode(
      `'Hello, undefined'`,
      `'Hello, \${${s}${username2}${s}}'`,
      `'Hello, ${name}'`,
      `'Hello, ${username2}'`,
      `SyntaxError`
    ) }
  }
}


function InterpolationSingle2() {
  const i = list.letters();
  const k = rnd(1, 100);
  const animals = list.animals();
  const s = rnd() ? ' ' : '';

  return {
    problem: `
      What will this code output?

          let ${i} = ${k};
          console.log(\`\${${s}${i}${s}} ${animals}\`);

      {{ radio }}
    `,

    widgets: { radio: radioCode(
      `'${k} ${animals}'`,
      `'\${${s}${i}${s}} ${animals}'`,
      `'${i} ${animals}'`,
      `SyntaxError`,
      `'NaN ${animals}'`
    ) }
  }
}


function InterpolationSingle2_Shadow() {
  const i = list.letters();
  const k = rnd(1, 100);
  const animals = list.animals();
  const s = rnd() ? ' ' : '';

  return {
    problem: `
      What will this code output?

          let ${i} = ${k};
          console.log(\`#{${s}${i}${s}} ${animals}\`);

      {{ radio }}
    `,

    widgets: { radio: radioCode(
      `'#{${s}${i}${s}} ${animals}'`,
      `'${k} ${animals}'`,
      `'${i} ${animals}'`,
      `SyntaxError`,
      `'NaN ${animals}'`
    ) }
  }
}


function InterpolationSingle2_Undefined() {
  const [i, k] = list.letters(2);
  const n = rnd(1, 100);
  const animals = list.animals();
  const s = rnd() ? ' ' : '';

  return {
    problem: `
      What will this code output?

          let ${i} = ${n};
          console.log(\`\${${s}${k}${s}} ${animals}\`);

      {{ radio }}
    `,

    widgets: { radio: radioCode(
      `'undefined ${animals}'`,
      `'\${${s}${k}${s}} ${animals}'`,
      `'${n} ${animals}'`,
      `'${i} ${animals}'`,
      `SyntaxError`
    ) }
  }
}


function QuotesInsideQuotes() {
  const { song, artist } = list.pitchforkBestSongs2014();

  return {
    problem: `
      What will this code output?

          let song = '${ song }';
          let artist = '${ artist }';
          console.log(\`"\${song}", \${artist}\`);

      {{ radio }}

    `,

    widgets: { radio: radioCode(
      `'"${ song }", ${ artist }'`,
      `'"\${song}", \${artist}'`,
      `SyntaxError`,
      `'"undefined", undefined'`
    ) }
  }
}



export default [
  'Template Strings',

  [InterpolationSingle1, 2],
  [InterpolationSingle1_Shadow,
   InterpolationSingle1_Undefined, 1],

  [InterpolationSingle2, 2],
  [InterpolationSingle2_Shadow,
   InterpolationSingle2_Undefined, 1]

  // InterpolationSingle2
  // InterpolationDouble

  // InterpolationMathExpressions
  // TemplateStringInsideTemplateString

  // [QuotesInsideQuotes, 1],

  // BackticksEscaping
  // BackticksSyntaxError

  // MultilineSimple
  // MultilineIndents

  // StringRaw

];
