# Mosaic Academy Exercises

This is a repository of JavaScript exercises published on [Mosaic.academy](http://mosaic.academy). Pull requests are welcome. API is pretty much in progress. If you have any questions, write me via [Twitter](https://twitter.com/surganov).

## Methodology
1. Break into pieces
2. Google-driven Research
3. Define patterns
4. Write blueprint
5. Code & test

> What makes a good exercise? It should create an impression that every generated problem is unique.

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
### Context bound helpers
Every exercise have access to a collection of helpers, bound to their context `this`.

#### `this.rnd()`
Flip a coin. Random generation of `true` or `false`.

#### `this.rnd(a, b)`
Generate random integer in a range from `a` to `b`, inclusively.

#### `this.rnd(array)`
Pick random element of a given `array`.

#### `this.lodash`
Entire `lodash` library.

#### `this.list`
Access to a collection of lists. Most often you want to use it with `this.rnd`:

```js
let vegetable = this.rnd(this.list.vegetables);
```

List of [available lists](https://github.com/mosaic-academy/list).


#### Assorted widget creation helpers
- `this.radio(answer, options)`
- `this.radioCode([answer, ...options])`
- `this.check([answers], [options])`
- `this.input(answer)`

## License
MIT
