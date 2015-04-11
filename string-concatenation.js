/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';


// function Glue() {

//   randomWord = rnd List.buzzWordOne
//   randomWord = if rnd() then randomWord else randomWord.toLowerCase()
//   randomWordCenter = Math.ceil randomWord.length / 2

//   a = randomWord.slice 0, randomWordCenter
//   b = randomWord.slice randomWordCenter, randomWord.length
  
//   quote1 = if rnd() then '\'' else '"'
//   quote2 = if rnd() then '\'' else '"'

//   problem:
//     """
//     What's the result of string concatenation?

//         #{quote1}#{a}#{quote1} + #{quote2}#{b}#{quote2}

//     Write the answer (without quotes):

//     [[ #{randomWord} ]]
//     """

//   solution: """
//     __Answer: `\"#{randomWord}\"`.__

//     Concatenation operator `+` simply joins the two strings into one.
//     """
// }


// function SingleSpace() {

//   randomPhrase = rnd List.buzzWordTwo
//   randomPhraseSplitted = randomPhrase.split ' '
//   a = randomPhraseSplitted[0]
//   b = randomPhraseSplitted[1]

//   quote1 = if rnd() then '\'' else '"'
//   quote2 = if rnd() then '\'' else '"'

//   problem:
//     """
//     What's the result of string concatenation?

//         #{quote1}#{a}#{quote1} + " " + #{quote2}#{b}#{quote2}

//     Write the answer (without quotes):

//     [[ #{randomPhrase} ]]
//     """

//   solution: """
//     __Answer: `\"#{randomPhrase}\"`.__

//     Concatenation operator `+` simply joins all the strings. Mind the empty space `\" \"`.
//     """
// }


// function MultipleSpace() {

//   randomPhrase = rnd List.buzzWordMore
//   randomPhraseSplitted = randomPhrase.split ' '
//   code = randomPhraseSplitted.map((elem) -> "\"#{elem}\"").join(" + \" \" + ")

//   problem:
//     """
//     What's the result of string concatenation?

//         #{code}

//     Write the answer (without quotes):

//     [[ #{randomPhrase} ]]
//     """

//   solution: """
//       __Answer: `\"#{randomPhrase}\"`.__

//       Concatenation operator `+` simply joins all the strings. Mind the empty space `\" \"`.
//     """
// }


// function NumberAndStringWithSpace() {

//   randomAnimal = rnd List.animals
//   randomNumber = rnd(2,99)

//   problem:
//     """
//     What's the result of string concatenation?

//         #{randomNumber} + \" #{randomAnimal}\"

//     Choose the answer:

//     - `\"#{randomNumber} #{randomAnimal}\"`
//     - `\"#{randomNumber}#{randomAnimal}\"`
//     - `\" #{randomAnimal}\"`
//     - `NaN`
//     - `TypeError`
//     """

//   solution: """
//     __Answer: `\"#{randomNumber + ' ' + randomAnimal}\"`.__

//     Operator `+` favors strings: it performs concatenation if either operand is a string. Also pay attention that there's a space character before the word.
//     """
// }


// function NumberAndStringNoSpace() {

//   randomAnimal = rnd List.animals
//   randomNumber = rnd(2,99)

//   problem:
//     """
//     What's the result of string concatenation?

//         #{randomNumber} + \"#{randomAnimal}\"

//     Choose the answer:

//     - `\"#{randomNumber}#{randomAnimal}\"`
//     - `\"#{randomNumber} #{randomAnimal}\"`
//     - `\" #{randomAnimal}\"`
//     - `NaN`
//     - `TypeError`
//     """

//   solution: """
//     __Answer: `\"#{randomNumber + randomAnimal}\"`.__

//     Operator `+` favors strings: it performs concatenation if either operand is a string. Also pay attention that there's no space character between the number and the word.
//     """
// }


// function PlaceholderName() {

//   randomName = rnd List.names
//   answer = "Hello, #{randomName}!"

//   problem: """
//     What's the result of string concatenation goes into console?

//         var name = "#{randomName}";
//         console.log("Hello, " + name + "!");

//     Choose the answer:

//     - `"Hello, #{randomName}!"`
//     - `"Hello, #{randomName}"`
//     - `"Hello,#{randomName}!"`
//     - `"Hello, name!"`
//     - `"Hello, " + name + "!"`
//     """

//   solution: """
//     __Answer: `"Hello, #{randomName}!"`.__

//     Variable `name` store the value of "#{randomName}". We can rewrite the resulting expression as `"Hello, " + "#{randomName}" + "!"` and then simply join all the strings. Mind the empty space after word "Hello".
//     """
// }


function PlaceholderResult() {

  let a = this.rnd(1,10)
  let b = this.rnd(1,10)

  return {
    problem: `
      What's the result of string concatenation goes into console?

          var result = ${a} + ${b};
          console.log("The result is: " + result);

      Choose the answer:

      {{ radio }}

      `,

    widgets: {
      radio: {
        type: 'Radio',
        props: {
          answer:
            `\`"The result is: ${a + b}"\``,
          options: [
            `\`"The result is: ${a} + ${b}"\``,
            `\`"The result is:${a + b}"\``,
            `\`"The result is:${a}${b}"\``]
        }
      }
    },

    solution: `
      __Answer: \`"The result is: ${a + b}"\`.__

      Variable \`result\` store the value of result of an expression \`${a} + ${b}\` that computes to \`${a + b}\`. We can rewrite the resulting expression as \`"The result is: " + result\` and then simply join both strings into one. Mind the empty space after word "is".
    `
  }
}


export default [
  'String Concatenation',
  // [Glue, 2],
  // [SingleSpace, 2],
  // [MultipleSpace, 1],
  // [NumberAndStringWithSpace, 1],
  // [NumberAndStringNoSpace, 1],
  // [PlaceholderName, 1],
  [PlaceholderResult, 1]
];
