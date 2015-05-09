/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

import list from 'list-of-lists';
import rnd from './utils/rnd';
import { radio, radioCode, check, input } from './utils/widget-helpers';
import { mdCodeBlock as block, capitalCase as cap } from 'cooked';


function InterpolationSingle1() {
  const name = list.names();
  const username = rnd([ 'username', 'user', 'firstName', 'login' ]);
  const greeting = rnd([ 'greeting', 'hello', 'message', 'output' ]);
  const _ = rnd() ? ' ' : '';

  return {
    problem: `
      What will this code output?

          let ${username} = '${name}';
          let ${greeting} = \`Hello, \${${_}${username}${_}}\`;
          console.log(${greeting});

      {{ radio }}
    `,

    widgets: { radio: radioCode(
      `'Hello, ${name}'`,
      `'Hello, \${${_}${username}${_}}'`,
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
  const _ = rnd() ? ' ' : '';
  const $ = rnd() ? '#' : '';

  return {
    problem: `
      What will this code output?

          let ${username} = '${name}';
          let ${greeting} = \`Hello, ${$}{${_}${username}${_}}\`;
          console.log(${greeting});

      {{ radio }}
    `,

    widgets: { radio: radioCode(
      `'Hello, ${$}{${_}${username}${_}}'`,
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
  const _ = rnd() ? ' ' : '';

  return {
    problem: `
      What will this code output?

          let ${username1} = '${name}';
          let ${greeting} = \`Hello, \${${_}${username2}${_}}\`;
          console.log(${greeting});

      {{ radio }}
    `,

    widgets: { radio: radioCode(
      `'Hello, undefined'`,
      `'Hello, \${${_}${username2}${_}}'`,
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
  const _ = rnd() ? ' ' : '';

  return {
    problem: `
      What will this code output?

          let ${i} = ${k};
          console.log(\`\${${_}${i}${_}} ${animals}\`);

      {{ radio }}
    `,

    widgets: { radio: radioCode(
      `'${k} ${animals}'`,
      `'\${${_}${i}${_}} ${animals}'`,
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
  const _ = rnd() ? ' ' : '';
  const $ = rnd() ? '#' : '';

  return {
    problem: `
      What will this code output?

          let ${i} = ${k};
          console.log(\`${$}{${_}${i}${_}} ${animals}\`);

      {{ radio }}
    `,

    widgets: { radio: radioCode(
      `'${$}{${_}${i}${_}} ${animals}'`,
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
  const _ = rnd() ? ' ' : '';

  return {
    problem: `
      What will this code output?

          let ${i} = ${n};
          console.log(\`\${${_}${k}${_}} ${animals}\`);

      {{ radio }}
    `,

    widgets: { radio: radioCode(
      `'undefined ${animals}'`,
      `'\${${_}${k}${_}} ${animals}'`,
      `'${n} ${animals}'`,
      `'${i} ${animals}'`,
      `SyntaxError`
    ) }
  }
}


function InterpolationDouble() {
  const varName = list.variableNames();
  const [ item1, item2 ] = list.nouns(2);
  const _ = rnd() ? ' ' : '';

  return {
    problem: `
      What will this code output?

          let ${varName}1 = '${item1}';
          let ${varName}2 = '${item2}';
          console.log(\`I need your \${${_}${varName}1${_}} and your \${${_}${varName}2${_}}\`);

      {{ radio }}
    `,

    widgets: { radio: radioCode(
      `'I need your ${item1} and your ${item2}'`,
      `'I need your \${${_}${varName}1${_}} and your \${${_}${varName}2${_}}'`,
      `'I need your ${varName}1 and your ${varName}2'`,
      `'I need your undefined and your undefined'`,
      `SyntaxError`
    ) }
  }
}


function InterpolationDouble_Shadow() {
  const varName = list.variableNames();
  const [ item1, item2 ] = list.nouns(2);
  const _ = rnd() ? ' ' : '';
  const $ = rnd() ? '#' : '';

  return {
    problem: `
      What will this code output?

          let ${varName}1 = '${item1}';
          let ${varName}2 = '${item2}';
          console.log(\`I need your ${$}{${_}${varName}1${_}} and your ${$}{${_}${varName}2${_}}\`);

      {{ radio }}
    `,

    widgets: { radio: radioCode(
      `'I need your ${$}{${_}${varName}1${_}} and your ${$}{${_}${varName}2${_}}'`,
      `'I need your ${item1} and your ${item2}'`,
      `'I need your ${varName}1 and your ${varName}2'`,
      `'I need your undefined and your undefined'`,
      `SyntaxError`
    ) }
  }
}


function InterpolationDouble_Undefined() {
  const [ varName, trickName ] = list.variableNames(2);
  const [ item1, item2 ] = list.nouns(2);
  const _ = rnd() ? ' ' : '';

  return {
    problem: `
      What will this code output?

          let ${varName}1 = '${item1}';
          let ${varName}2 = '${item2}';
          console.log(\`I need your \${${_}${trickName}1${_}} and your \${${_}${trickName}2${_}}\`);

      {{ radio }}
    `,

    widgets: { radio: radioCode(
      `'I need your undefined and your undefined'`,
      `'I need your \${${_}${trickName}1${_}} and your \${${_}${trickName}2${_}}'`,
      `'I need your ${item1} and your ${item2}'`,
      `'I need your ${trickName}1 and your ${trickName}2'`,
      `SyntaxError`
    ) }
  }
}


function MathExpressionsInterpolation() {
  const [x, y] = list.letterPairs();
  const n = rnd(1, 10);
  const m = rnd(1, 10);
  const _ = rnd() ? ' ' : '';
  const op = rnd(['+', '-', '*']);
  const result = eval(`${n}${op}${m}`);

  return {
    problem: `
      What will this code output?

          let ${x} = ${n}, ${y} = ${m};
          console.log(\`\${${_}${x}${_}} ${op} \${${_}${y}${_}} = \${${_}${x} ${op} ${y}${_}}\`);

      Enter the resulting string (without quotes):

      {{ input }}
    `,

    widgets: { input: input(`${n} ${op} ${m} = ${result}`) }
  }
}


function MathExpressionsDesugar() {
  const [x, y, z] = list.letterTriples();
  const n = rnd(1, 10);
  const m = rnd(1, 10);
  const k = rnd(1, 10);
  const _ = rnd() ? ' ' : '';

  return {
    problem: `
      Consider the code below:

          let ${x} = ${n}, ${y} = ${m}, ${z} = ${k};
          let str = \`\${${_}${x}${_}}, \${${_}${y}${_}} and \${${_}${z}${_}}\`;

      How can we _compute_ the same result as in \`str\` without template strings?

      {{ radio }}
    `,

    widgets: { radio: radioCode(
      `${x} + ', ' + ${y} + ' and ' + ${z}`,
      `'${x}' + ', ' + '${y}' + ' and ' + '${z}'`,
      `'\${${_}${x}${_}}, \${${_}${y}${_}} and \${${_}${z}${_}}'`,
      `'${n}, ${m} and ${k}'`
    ) }
  }
}


function TemplateStringInsideTemplateString() {
  const verb = cap`${list.verbs()}`;
  const _ = rnd() ? ' ' : '';

  console.log(cap`hello`);

  return {
    problem: `
      What will this code output?

          let verb = '${verb}';
          console.log(\`So You \${ \`Can \${ verb }\` } While You \${ verb }\`);

      {{ radio }}
    `,

    widgets: { radio: radioCode(
      `'So You Can ${ verb } While You ${ verb }'`,
      `'So You \${ \`Can \${ verb }\` } While You \${ verb }'`,
      `'So You Can \${ verb } While You ${ verb }'`,
      `'So You Can undefined While You ${ verb }'`,
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
      `'"song", artist'`,
      `SyntaxError`,
      `'"undefined", undefined'`
    ) }
  }
}


function BackticksEscaping() {
  const varName = list.reserved();

  return {
    problem: `
      What's the value of resulting string?

          let markdown = \`The variable \\\`${varName}\\\` bound to the context.\`;

      {{ radio }}

    `,

    widgets: { radio: radioCode(
      `'The variable \`${varName}\` bound to the context.'`,
      `'The variable \\\`${varName}\\\` bound to the context.'`,
      `'The variable ${varName} bound to the context.'`,
      `'The variable \\'`,
      `SyntaxError`
    ) }
  }
}


function BackticksSyntaxError() {
  const varName = list.reserved();

  return {
    problem: `
      What's the value of resulting string?

          let markdown = \`The variable \`${varName}\` bound to the context.\`;

      {{ radio }}

    `,

    widgets: { radio: radioCode(
      `SyntaxError`,
      `'The variable \`${varName}\` bound to the context.'`,
      `'The variable \\\`${varName}\\\` bound to the context.'`,
      `'The variable ${varName} bound to the context.'`,
      `'The variable \\'`
    ) }
  }
}


function MultilineSimple() {
  const [ word1, word2 ] = list.buzzWordTwo().split(' ');

  return {
    problem: `
      What's the value of resulting string?

          let str = \`${word1}
          ${word2}\`;

      {{ radio }}

    `,

    widgets: { radio: radioCode(
      `'${word1}\\n${word2}'`,
      `'${word1} ${word2}'`,
      `'${word1}${word2}'`,
      `'${word1}'`,
      `SyntaxError`
    ) }
  }
}


function MultilineIndents() {
  const [ a, b, c ] = list.letterTriples();

  return {
    problem: `
      What's the value of resulting string?

          let str = \`${a}
              ${b}
              ${c}\`;

      {{ radio }}

    `,

    widgets: { radio: radioCode(
      `'${a}\\n    ${b}\\n    ${c}'`,
      `'${a}    \\n${b}    \\n${c}'`,
      `'${a}${b}${c}'`,
      `'${a}\\n${b}\\n${c}'`,
      `SyntaxError`
    ) }
  }
}


function StringRaw() {
  const name = list.names();


  return {
    problem: `
      What will this code output?

          let name = '${name}';
          console.log(String.raw\`Hi\\n\${name}!\`);

      {{ radio }}

    `,

    widgets: { radio: radioCode(
      `'Hi\\\\n${name}!'`,
      `'Hi\\n${name}!'`,
      `'Hi${name}!'`,
      `'Hi\\nname!'`,
      `SyntaxError`
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
   InterpolationSingle2_Undefined, 1],

  [InterpolationDouble,
   InterpolationDouble_Shadow, 2],
  [InterpolationDouble_Undefined, 1],

  [MathExpressionsInterpolation, 2],
  [MathExpressionsDesugar, 2]

  [TemplateStringInsideTemplateString, 1],
  [QuotesInsideQuotes, 2],

  [BackticksEscaping, 1],
  [BackticksSyntaxError, 1],

  [MultilineSimple, 2],
  [MultilineIndents, 1],

  [StringRaw, 1]

];
