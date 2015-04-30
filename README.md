# JavaScript Exercises

This is a repository of JavaScript exercises published on [Mosaic.academy](http://mosaic.academy). We're gonna write exercises on _every feature_ of JavaScript. Also like [our page on facebook](https://www.facebook.com/mosaicjs).

Pull requests are welcome. API is pretty much in progress. If you have any questions, write me via [Twitter](https://twitter.com/surganov).

## Methodology
1. Break into pieces
2. Google-driven Research
3. Define patterns
4. Write blueprint
5. Code & test

## To-Do
- [ ] import `list` and `rnd`, no more `this.<something>`
- [ ] add `yes`/`no` radio helper
- [ ] change API of `radio` helper
- [ ] publish helpers' code
- [ ] add a more simple way of declaring single widgets
- [ ] write about how this system works
- [ ] write docs on markdown usage in exercises
- [ ] explain concept of widgets
- [ ] check grammar
- [ ] write missing solutions
- [ ] write planned `es6` exercises
- [ ] add exercises on unix command line, regular expressions and lambda calculus
- [ ] ~~publish `inline-md-to-react` as separate repository (?)~~
- [x] ~~remove copyrights from source code headers~~
- [x] publish `this.list` as [separate repository](https://github.com/mosaic-academy/list)
- [x] convert `old exercises` to new API

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
