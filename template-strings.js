function Variable() {

  return {
    problem: `
      What's the result of string concatenation goes into console?

          \`\${2} + \${2}\`

      Choose the answer:

      {{ radio }}

      `,

    widgets: {
      radio: {
        type: 'Radio',
        props: {
          answer:
            `a`,
          options: [
            `b`
          ]
        }
      }
    },

    solution: `
      __Answer: 123__

    `
  }
}


export default [
  'Template Strings',
  [Variable, 1]
];
