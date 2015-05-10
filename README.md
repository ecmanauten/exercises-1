# Mosaic Academy Exercises

[![Join the chat at https://gitter.im/mosaic-academy/exercises](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mosaic-academy/exercises?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

_We are going to build a platform for creating and distributing online courses on programming based on reusable blocks of knowledge._

This is a repository of JavaScript exercises published on [Mosaic.academy](http://mosaic.academy). Pull requests are welcome. API is pretty much in progress. If you have any questions, write me via [Twitter](https://twitter.com/surganov). Also, take look at [exercises' wiki](https://github.com/mosaic-academy/exercises/wiki/Home.md).

## Methodology
1. [Break into pieces](https://github.com/mosaic-academy/exercises/wiki/Home.md)
2. [Research](https://github.com/mosaic-academy/exercises/wiki/let-and-const#reference)
3. [Define patterns](https://github.com/mosaic-academy/exercises/wiki/arrow-functions.md)
4. [Write blueprint](https://github.com/mosaic-academy/exercises/wiki/template-strings.md#blueprint)
5. [Code & test](https://github.com/mosaic-academy/exercises/blob/master/object-literal-es6.js)

> What makes a good exercise? It should create an impression that every generated problem is unique.

## Roadmap
- 20+ exercises
- Exam mode
- Assignments in the browser
- Switch to server-side
- Touch version
- Embedd exercises
- User accounts
- Exercise editor

## API

### Random
Importing `rnd` helper:
```js
import rnd from `./utils/rnd`
```

#### `rnd()`
Flip a coin. Random generation of `true` or `false`.

#### `rnd(<Int>a, <Int>b)`
Generate random integer in a range from `a` to `b`, inclusively.

#### `rnd(<Array>list)`
Pick random element of a given `list`.

#### `rnd(<Array>list, <Int>n)`
Pick `n` random elements of a given `list`.


### List of lists
Pick random elements from collection of lists.
```js
import list, { lists } from 'list-of-lists';

let vegetable = list.vegetables();
let [ foo, bar ] = list.reserved(2);
```

List of [available lists](https://github.com/mosaic-academy/list).


### Widget creation helpers
Importing helpers:
```js
import { radio, radioCode, yesNo, check, input } from './utils/widget-helpers'
```

#### `radio(<String>answer, <Array>options)`
Creates a list of options with only one correct answer.

#### `radioCode(<String>answer, ...options)`
Creates a list of options with only one correct answer and wraps every option into `<code>` tag.

#### `yesNo(<Boolean>answer)`
Creates yes/no radio group.

#### `check(<Array>answers, <Array>options)`
Creates a list of options with multiple choice.

#### `input(answer)`
Creates an input of fixed width and hight. Could be inlined.

## License
MIT
