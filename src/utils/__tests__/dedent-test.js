/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

import dedent, {cook} from '../dedent';


describe('removing extra indents', function() {

  it('detects lines of code', function() {
    expect(dedent`
      Some code:

          console.log('hi')
    `)
    .toBe('Some code:\n\n    console.log(\'hi\')');
  });

  it('keeps code on top', function() {
    expect(dedent`
          console.log('hi')

      What's next?
    `)
    .toBe(
`    console.log('hi')

What's next?`);
  });

  it('deals with complex code blocks too', function() {
    expect(dedent`
          <body>
            <div id="example"></div>
            <script type="text/jsx">
              React.render(
                <h1>Hello, world!</h1>,
                document.getElementById('example')
              );
            </script>
          </body>

      The XML syntax inside of JavaScript is called JSX; check out the JSX syntax to learn more about it.
    `)
.toBe(
`    <body>
      <div id="example"></div>
      <script type="text/jsx">
        React.render(
          <h1>Hello, world!</h1>,
          document.getElementById('example')
        );
      </script>
    </body>

The XML syntax inside of JavaScript is called JSX; check out the JSX syntax to learn more about it.`);
  });

  it('removes extra blank lines', function() {
    expect(dedent`
        first string ↑ is empty
    `)
    .toBe(`first string ↑ is empty`);
  });

  it('removes even more extra blank lines', function() {
    expect(dedent`


        first string ↑ is empty


    `)
    .toBe(`first string ↑ is empty`);
  });

  it('is okay with escape sequences', function() {
    expect(dedent`
      __Answer: \`string\`.__
      
      String literal is an string of characters.
    `)
    .toBe(
`__Answer: \`string\`.__

String literal is an string of characters.`);
  });

  it('just work normally single line strings', function() {
    expect(dedent`air pollution`).toBe(`air pollution`);
  });

  it('doesn\'t care for looooong indents', function() {
    expect(dedent`
                                  looooong indent
    `).toBe(`looooong indent`);
  });

});


describe('dedent API', function() {

  it('works as template tag and returns regular string', function() {
    expect(dedent`Stale By Noon`).toBe('Stale By Noon');
  });

  it('works as regular strings function', function() {
    expect(dedent('If You\'re Reading This It\'s Too Late'))
      .toBe('If You\'re Reading This It\'s Too Late');
  });

  it('works fine with empty template strings', function() {
    expect(dedent``).toBe(``);
  });

  it('works fine with empty strings', function() {
    expect(dedent('')).toBe('');
  });

});


describe('enter the `cook`, extra helper function', function() {

  it('cooks template strings for you', function() {
    expect(cook`2 + 2 equals ${2 + 2}`).toBe('2 + 2 equals 4');
  });

  it('can serve as extra help at kitchen of your functions', function() {
    let name = 'Sergey';

    let bangBang = function(...raw) {
      let baked = cook(...raw);

      return baked + '!';
    };

    expect(bangBang`Hello, ${name}`).toBe('Hello, Sergey!');
  });

});
