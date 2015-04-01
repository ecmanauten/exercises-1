Primitive Datatypes
===================

```js
// declare some globals
import List from 'List';
var numbers = [ "42", "3.14", "1.617", "140000000", "0.00000000000000000091093822", "13", "100500", ".155", "Infinity", "-Infinity", "10e23", "0101010001", "9.1093822e−31", "NaN", "0xCCFF", "1.4738223E-32" ];
```

# Datatypes
- primitive: `number`, `string`, `boolean`
- special: `null`, `undefined`
- composite: `array`, `object`
- functional: `function`, `regexp`

# Numbers
- `0`, `-20`, `42`, `15000000` (integer)
- `0xff` (hex), `0377` (octal)
- `3.14`, `-2345.789`, `.333333` (float)
- `6.02e23`, `1.4738223E-32` (scientific)
- `NaN`, `Infinity`, `-Infinity` (special types)

# Strings
- `''`, `""`, `'name="myform"'`, `"3.14"`
- `"π is the ratio of a circle's circumference to its diameter"`
- `"This string\\nhas two lines"`
- `'You\\'re right, it can\\'t be a quote'`
- `\\n`, `\\t`, `\\"`, `\\'`, `\\\\`, `\\u` (special characters)

---

## Booleans (3)

```js
var booleans = [ "true", "false" ];
var randomBoolean = rnd(booleans);
```

What's the type of this literal?

  { randomBoolean }

- `boolean`
- `number`
- `string`
- `null`
- `undefined`

> __Answer: `boolean`.__
>
> Boolean literal is either `true` or `false`.


---

Write anything you like.

Choose some word [ okay | some words | another words | this is input ] and answer [ Yes | No ].