# JavaScript Exercises

This is a repository of JavaScript exercises published on [Mosaic.academy](http://mosaic.academy). We're gonna write exercises on _every feature_ of JavaScript.

Pull requests are welcome. API is pretty much in progress. If you have any questions, write me via [Twitter](https://twitter.com/surganov).

## API
### Context bound helpers
Every exercise have access to a collection of helpers, bound to their context `this`.

#### `this.rnd()`
Flip a coin. Random generation of `true` or `false`.

#### `this.rnd(a, b)`
Generate random integer in a range from `a` to `b`, inclusively.

#### `this.rnd(array)`
Pick random element of a given `array`.

#### `this.list`
Access to a collection of lists. Most often you want to use it with `this.rnd`:

```js
let vegetable = this.rnd(this.list.vegetables);
```

List of available lists:
- `magicNumbers`
- `names`
- `variableNames`
- `letters`
- `letterPairs`
- `letterTriples`
- `twoLetterWords`
- `threeLetterWords`
- `alphabetUppercase`
- `alphabetLowercase`
- `firstTenAsStrings`
- `animal`
- `animals`
- `buzzWordOne`
- `buzzWordTwo`
- `buzzWordMore`
- `vegetables`
- `lastNames`


#### Assorted widget creation helpers
- `this.radio(answer, options)`
- `this.radioCode([answer, ...options])`
- `this.check([answers], [options])`
- `this.input(answer)`

## License
MIT