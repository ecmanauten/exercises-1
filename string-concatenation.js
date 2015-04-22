/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';


function Glue() {
  const randomWord = this.rnd() ?
    this.rnd(this.list.buzzWordOne) :
    this.rnd(this.list.buzzWordOne).toLowerCase();
  const randomWordCenter = Math.ceil(randomWord.length / 2);

  const a = randomWord.slice(0, randomWordCenter);
  const b = randomWord.slice(randomWordCenter, randomWord.length);

  const quote1 = this.rnd() ? `'` : `"`;
  const quote2 = this.rnd() ? `'` : `"`;

  return {
    problem: `

      What's the result of string concatenation?

          ${quote1}${a}${quote1} + ${quote2}${b}${quote2}

      Write the answer (without quotes):

      {{ input }}

    `,

    widgets: {
      input: {
        type: 'Input',
        props: {
          answer: `${randomWord}`
        }
      }
    },

    solution: `

      __Answer: \`"${randomWord}"\`.__

      Concatenation operator \`+\` simply joins the two strings into one.

    `
  };
}


function SingleSpace() {
  const randomPhrase = this.rnd(this.list.buzzWordTwo);
  const randomPhraseSplitted = randomPhrase.split(' ');
  const a = randomPhraseSplitted[0];
  const b = randomPhraseSplitted[1];

  const quote1 = this.rnd() ? `'` : `"`;
  const quote2 = this.rnd() ? `'` : `"`;

  return {
    problem: `

      What's the result of string concatenation?

          ${quote1}${a}${quote1} + " " + ${quote2}${b}${quote2}

      Write the answer (without quotes):

      {{ input }}

    `,

    widgets: {
      input: {
        type: 'Input',
        props: {
          answer: `${randomPhrase}`
        }
      }
    },

    solution: `

      __Answer: \`"${randomPhrase}"\`.__

      Concatenation operator \`+\` simply joins all the strings. Mind the empty space \`" "\`.

    `
  };
}


function MultipleSpace() {
  const randomPhrase = this.rnd(this.list.buzzWordMore);
  const randomPhraseSplitted = randomPhrase.split(' ');
  const code = randomPhraseSplitted.map(elem => `"${elem}"`).join(` + " " + `);
  const input = this.input(`${randomPhrase}`);

  return {
    problem: `

      What's the result of string concatenation?

          ${code}

      Write the answer (without quotes):

      {{ input }}

    `,

    widgets: { input },

    solution: `

        __Answer: \`"${randomPhrase}"\`.__

        Concatenation operator \`+\` simply joins all the strings. Mind the empty space \`" "\`.

    `
  };
}


function NumberAndString() {
  const randomAnimal = this.rnd(this.list.animals);
  const randomNumber = this.rnd(2, 99);
  const space = this.rnd() ? ' ' : '';
  const isSpace = !!space;

  const ans1 = `"${randomNumber} ${randomAnimal}"`;
  const ans2 = `"${randomNumber}${randomAnimal}"`;
  const answers = isSpace ? [ ans1, ans2 ] : [ ans2, ans1 ];
  const beware = isSpace ?
    'Also pay attention that there\'s a space character before the word' :
    'Also pay attention that there is no space character before the word';

  return {
    problem: `

      What's the result of string concatenation?

          ${randomNumber} + "${space}${randomAnimal}"

      Choose the answer:

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      ...answers,
      `" ${randomAnimal}"`,
      `NaN`,
      `TypeError`
    ) },

    solution: `

      __Answer: \`"${randomNumber + space + randomAnimal}"\`.__

      Operator \`+\` favors strings: it performs concatenation if either operand is a string. ${beware}.

    `
  };
}


function PlaceholderName() {
  const randomName = this.rnd(this.list.names);
  const answer = `Hello, ${randomName}!`;

  return {
    problem: `

      What's the result of string concatenation goes into console?

          var name = "${randomName}";
          console.log("Hello, " + name + "!");

      Choose the answer:

      {{ radioCode }}

    `,

    widgets: { radioCode: this.radioCode(
      `"Hello, ${randomName}!"`,
      `"Hello, ${randomName}"`,
      `"Hello,${randomName}!"`,
      `"Hello, name!"`,
      `"Hello, " + name + "!"`
    ) },

    solution: `

      __Answer: \`"Hello, ${randomName}!"\`.__

      Variable \`name\` store the value of \`"${randomName}"\`. We can rewrite the resulting expression as \`"Hello, " + "${randomName}" + "!"\` and then simply join all the strings. Mind the empty space after word \`"Hello"\`.

    `
  };
}


function PlaceholderResult() {
  const a = this.rnd(1, 10);
  const b = this.rnd(1, 10);

  return {
    problem: `

      What's the result of string concatenation goes into console?

          var result = ${a} + ${b};
          console.log("The result is: " + result);

      Choose the answer:

      {{ radio }}

    `,

    widgets: { radio: this.radioCode(
      `\`"The result is: ${a + b}"\``,
      `\`"The result is: ${a} + ${b}"\``,
      `\`"The result is:${a + b}"\``,
      `\`"The result is:${a}${b}"\``
    ) },

    solution: `

      __Answer: \`"The result is: ${a + b}"\`.__

      Variable \`result\` store the value of result of an expression \`${a} + ${b}\` that computes to \`${a + b}\`. We can rewrite the resulting expression as \`"The result is: " + result\` and then simply join both strings into one. Mind the empty space after word "is".

    `
  };
}


export default [
  'String Concatenation',
  [Glue, 2],
  [SingleSpace, 2],
  [MultipleSpace, 1],
  [NumberAndString, 1],
  [PlaceholderName, 1],
  [PlaceholderResult, 1]
];
