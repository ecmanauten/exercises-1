Object Literal ES6
==================

## Patterns
- shorthand property names `{ a, b, c }`
- shorthand method names `{ toString () {...} }`
- computed property names
- _not included_
    + object assign
    + prototypes
    + super calls
    + methods
    + symbols


## Reference
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer


## Code Samples

    var obj = {
        // __proto__
        __proto__: theProtoObj,
        // Shorthand for ‘handler: handler’
        handler,
        // Methods
        toString() {
         // Super calls
         return "d " + super.toString();
        },
        // Computed (dynamic) property names
        [ 'prop_' + (() => 42)() ]: 42
    };


## Blueprint

### ShorthandProperty_S (DONE)
    let x = 1;
    let y = 10;
    
    let expression = { x, y };

Which value is stored in property obj.x?
[[ 1 ]]

### ShorthandProperty_S2 (DONE)
    let name = 'Andrey';
    let lastname = 'Petrov';
    
    let person = {
        name,
        lastname
    };
- { name: 'Andrey', lastname: 'Petrov' }
- { 'Andrey', 'Petrov' }
- 'Andrey Petrov'
- { name, lastname }
- SyntaxError

### ShorthandProperty_M (DONE)
    function createPerson(name, age) {
      return {
        name,
        age
      };
    }
    
    createPerson(Regenia, 26);

- { name: 'Regenia', age: '26' }
- { name, age }
- SyntaxError
- { 'Regenia', '26' }

### ComputedProperty_S ( )
    let obj = { ['name']: 'http' };
- { 'name': 'http' }
- { 'http': 'name' }
- { ['http']: 'name' }
- SyntaxError

### ComputedProperty_M (DONE)
    let suffix = 'Name';
    
    let person = {
      ['first' + suffix]: 'Kandace',
      ['last' + suffix]: 'Andrade'
    };

How to get value 'Kandace' from object person?
- person['lastName']
- person['Kandace']
- person['last']
- person.firstName

### ComputedProperty_L (DONE)
    let animal = 'kiwi';
    
    let obj = {
      [animal]: 'value'
    };

What's the name of the only property of obj?
- animal
- undefined
- 'kiwi'
- 'animal'
- 'value'

### ComputedProperty_XL (DONE)
    What's the name of the only property of this object?
    { [ 'one_' + (() => 7)() ]: 7 }

- 'one_7'
- '7_one'
- undefined
- 'one'
- '7'

### ShorthandMethodAndProperty_XL (DONE)
    function createPerson(name) {
      return {
        greeting() {
          return `Hello, ${this.name}`;
        }, name
      }
    }
    
    console.log(createPerson('Elliott').greeting());

- 'Hello, Elliott'
- { name: 'Elliott' }
- 'Hello, undefined'
- undefined
- Elliott

