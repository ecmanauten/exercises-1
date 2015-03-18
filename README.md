# Quizes and Exercises

## Installation

Clone this repo, install dependencies and run server:

    $ git clone https://github.com/mosaic-academy/quizes-and-exercises.git
    $ sudo npm install
    $ npm start

Open `http://localhost:3000` in browser. Enjoy!

Beware: we're using webpack, react, ES6 and CoffeeScript.

## Commercial usage
You can use these quizes and exercises freely in commercial projects as long as you keep your modifications in open source too.

## API
Every quiz is essentially an array of functions that return a problem and solution in _MFM_ (Mosaic Flavored Markdown) strings.

### Text Input

    [[ right answer ]]

### Radio Buttons

    - right answer
    - false option
    - false option
    - false option

### Checkboxes

    [x] right answer
    [x] right answer
    [ ] false option
    [ ] false option

## Contribute
There's a plenty of work to do!

## TODO
- [ ] Add quiz boilerplate
- [ ] Describe `utils` APIs

## Future
We're planning to develop special _DSL_ (domain specific language) for writing quizes based on markdown and inline JS interpolation. That requires us to develop new AST parser and reactifier.

## License
[GNU GPL v2](https://github.com/mosaic-academy/quizes-and-exercises/blob/master/LICENSE)