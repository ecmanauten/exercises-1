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
    ) },

    solution: `

      __Answer: \`'Hello, ${name}'\`.__

      Substitution \`\${${_}${username}${_}}\` is replaced by the value of variable \`${username}\`.

    `
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
    ) },

    solution: `

      __Answer: \`'Hello, ${$}{${_}${username}${_}}'\`.__

      \`${$}{${_}${username}${_}}\` is not a valid substitution. Correct form is \`\${${_}${username}${_}}\`.

    `
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
    ) },

    solution: `

      __Answer: \`'Hello, undefined'\`.__

      Substitution \`\${${_}${username2}${_}}\` is replaced by the value of variable \`${username2}\`, which is \`undefined\` in this case. Don't be fooled by usage of different variables \`${username1}\` and \`${username2}\`.

    `
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
    ) },

    solution: `

      __Answer: \`'${k} ${animals}'\`.__

      Substitution \`\${${_}${i}${_}}\` is replaced by the value of variable \`${i}\`.

    `
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
    ) },

    solution: `

      __Answer: \`'${$}{${_}${i}${_}} ${animals}'\`.__

      \`${$}{${_}${i}${_}}\` is not a valid substitution. Correct form is \`\${${_}${i}${_}}\`.

    `
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
    ) },

    solution: `

      __Answer: \`'undefined ${animals}'\`.__

      Substitution \`\${${_}${k}${_}}\` is replaced by the value of variable \`${k}\`, which is \`undefined\` in this case. Don't be fooled by usage of different variables \`${i}\` and \`${k}\`.

    `
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
    ) },

    solution: `

      __Answer: \`'I need your ${item1} and your ${item2}'\`.__

      Substitutions \`\${${_}${varName}1${_}}\` and \`\${${_}${varName}2${_}}\` are replaced by the values of variables \`${varName}1\` and \`${varName}2\`, respectively.

    `
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
    ) },

    solution: `

      __Answer: \`'I need your ${$}{${_}${varName}1${_}} and your ${$}{${_}${varName}2${_}}'\`.__

      \`${$}{${_}${varName}1${_}}\` is not a valid substitution. Correct form is \`\${${_}${varName}1${_}}\`.

    `
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
    ) },

    solution: `

      __Answer: \`'I need your undefined and your undefined'\`.__

      Substitutions \`\${${_}${varName}1${_}}\` and \`\${${_}${varName}2${_}}\` are replaced by the values of variables \`${varName}1\` and \`${varName}2\`, which is both \`undefined\` in this case. Don't be fooled by usage of different variables \`${varName}1\`/\`${trickName}1\` and \`${varName}2\`/\`${trickName}2\`.

    `
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

    widgets: { input: input(`${n} ${op} ${m} = ${result}`) },

    solution: `

      __Answer: \`'${n} ${op} ${m} = ${result}'\`.__

      Substitutions \`\${${_}${x}${_}}\` and \`\${${_}${y}${_}}\` are replaced by the values of the corresponding variables. The substitution \`\${${_}${x} ${op} ${y}${_}}\` are replaced by the value of the expression \`${x} ${op} ${y}\`, which computes to \`${n} ${op} ${m}\` or, in the end, to \`${result}\`.

    `
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
    ) },

    solution: `

      __Answer: \`${x} + ', ' + ${y} + ' and ' + ${z}\`.__

      We can desugar interpolated template strings into concatenation of consecutive list of string literals and arbitrary expressions (which implicitly converted to a string type).

    `
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
    ) },

    solution: `

      __Answer: \`'So You Can ${ verb } While You ${ verb }'\`.__

      It is possible to use another template string as part of substitution.

    `
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
    ) },

    solution: `

      __Answer: \`'"${ song }", ${ artist }'\`.__

      This is an usual template string substitution, despite of using regular string quotes \`"\` inside, which are processed as a plain string characters.

    `
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
    ) },

    solution: `

      __Answer: \`\`\`'The variable \`${varName}\` bound to the context.'\`\`\`.__

      It is possible to use backtick symbol inside template string literal by using escape character \`\\\`.

    `
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
    ) },

    solution: `

      __Answer: \`SyntaxError\`.__

      It's an error because of forgotten escape character \`\\\` before each backtick inside template string literal.

    `
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
    ) },

    solution: `

      __Answer: \`'${word1}\\n${word2}'\`.__

      Any new line characters inserted in the source code are part of the template string.

    `
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
    ) },

    solution: `

      __Answer: \`'${a}\\n    ${b}\\n    ${c}'\`.__

      Any new line characters inserted in the source code are part of the template string. Including indents, unfortunately.

    `
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
    ) },

    solution: `

      __Answer: \`'Hi\\\\n${name}!'\`.__

      Special method \`String.raw\` is being used in the form of tagged template and allows to access the raw strings as they were entered.

    `
  }
}


export default [
  'Template strings',

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
  [MathExpressionsDesugar, 2],

  [TemplateStringInsideTemplateString, 2],
  [QuotesInsideQuotes, 2],

  [BackticksEscaping, 1],
  [BackticksSyntaxError, 1],

  [MultilineSimple, 2],
  [MultilineIndents, 1],

  [StringRaw, 1]

];
