/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';


function wrapToCodeBlock(option) {
  return `\`\`\`${ option }\`\`\``;
}

export default {

  radio(answer, options = []) {
    return {
      type: 'Radio',
      props: {
        answer: answer,
        options: options
      }
    };
  },

  radioCode(answer, ...options) {
    return {
      type: 'Radio',
      props: {
        answer: `\`\`\`${answer}\`\`\``,
        options: options.map(wrapToCodeBlock)
      }
    };
  },

  yesNo(bool) {
    const [correct, nonCorrect] = bool
      ? ['yes', 'no'] : ['no', 'yes'];

    return {
      type: 'Radio',
      props: {
        answer: correct,
        options: [ nonCorrect ]
      }
    };
  },

  check(answers, options) {
    return {
      type: 'Check',
      props: {
        answers: answers,
        options: options
      }
    };
  },

  checkCode(answers, options) {
    return {
      type: 'Check',
      props: {
        answers: answers.map(wrapToCodeBlock),
        options: options.map(wrapToCodeBlock)
      }
    };
  },

  input(answer) {
    return {
      type: 'Input',
      props: { answer }
    };
  }

};
