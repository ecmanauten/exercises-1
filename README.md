# Mosaic Academy Exercises

> What makes a good exercise? It should create an impression that every generated problem is unique.

This is a repository of JavaScript exercises published on [Mosaic.academy](http://mosaic.academy). Pull requests are welcome. API is pretty much in progress. If you have any questions, write me via [Twitter](https://twitter.com/surganov).

## Methodology
1. [Break into pieces](https://github.com/mosaic-academy/exercises/tree/master/es6)
2. [Google-driven Research](https://github.com/mosaic-academy/exercises/blob/master/es6/README.md)
3. [Define patterns](https://github.com/mosaic-academy/exercises/blob/master/es6/arrow-functions.md)
4. [Write blueprint](https://github.com/mosaic-academy/exercises/blob/master/es6/template-strings.md#blueprint)
5. [Code & test](https://github.com/mosaic-academy/exercises/blob/master/object-literal-es6.js)

## Roadmap
- [ ] ES6 exercises
- [ ] JS basics exercises
- [ ] Non-JS exercises
- [ ] Exam mode
- [ ] Add support for assignments
- [ ] Add support for workshops/courses
- [ ] Add more widgets
- [ ] Write elaborate docs
- [ ] Online editor
- [ ] User profiles
- [ ] Guides for writing exercises

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
