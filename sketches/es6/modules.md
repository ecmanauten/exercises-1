Modules
=======

## Patterns
- named exports `import {a, b} from 'foo';`
- default exports `import $ from 'jQuery';`
- named + default exports `import _, { xor, contains } from 'Lodash';`
- export from import `export { foo } from 'Foo';`
- star-notation `import * as lib from 'lib';`
- `export *;`
- import and export aliases (`as`)
- The default export is just another named export `import { default as foo } from 'lib';`
- revealing module pattern
- there's no global scope anymore
- implicitly async model
- system.import('my-polyfill').then(...)


## Reference
- https://babeljs.io/docs/usage/modules/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
- http://www.2ality.com/2014/09/es6-modules-final.html
- https://github.com/leebyron/ecmascript-more-export-from


## Code Samples
    // lib/math.js
    export function sum(x, y) {
      return x + y;
    }
    export var pi = 3.141593;

    // app.js
    import * as math from "lib/math";
    alert("2π = " + math.sum(math.pi, math.pi));

    // otherApp.js
    import {sum, pi} from "lib/math";
    alert("2π = " + sum(pi, pi));
    Some additional features include export default and export *:

    // lib/mathplusplus.js
    export * from "lib/math";
    export var e = 2.71828182846;
    export default function(x) {
        return Math.log(x);
    }
    // app.js
    import ln, {pi, e} from "lib/mathplusplus";
    alert("2π = " + ln(e)*pi*2);
