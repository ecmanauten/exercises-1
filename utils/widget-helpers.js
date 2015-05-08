/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';


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
        answer: `\`${answer}\``,
        options: options.map(option => `\`${ option }\``)
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

  input(answer) {
    return {
      type: 'Input',
      props: { answer }
    };
  }

};
