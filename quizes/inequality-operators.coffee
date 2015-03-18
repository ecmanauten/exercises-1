createExam = require '../utils/createExam'
List = require '../utils/List'
rnd = require '../utils/rnd'


ops = [ "<", ">", "<=", ">=" ]


$Numbers = ->

  a = rnd -10, 10
  b = rnd -10, 10

  op = rnd ops

  answer = eval "#{a} #{op} #{b}"

  problem: """
        #{a} #{op} #{b}

    What's the result of this expression?

    - `#{answer}`
    - `#{!answer}`
  """

  solution: """
    __Answer: `#{answer}`.__
  """


$NumberExpressions = ->

  a = rnd 0, 10
  b = rnd 0, 10
  c = rnd 0, 10

  op = rnd ops

  answer = eval "#{a} #{op} #{b} + #{c}"

  problem: """
        #{a} #{op} #{b} + #{c}

    What's the result of this expression?

    - `#{answer}`
    - `#{!answer}`
    - `#{b + c}`
    - `#{c}`
  """

  solution: """
    __Answer: `#{answer}`.__
  """


$ToxicNaN = ->

  if rnd()
    a = NaN
    b = rnd 0, 10
  else
    a = rnd 0, 10
    b = NaN

  op = rnd ops

  problem: """
        #{a} #{op} #{b}

    What's the result of this expression?

    - `false`
    - `true`
    - `NaN`
    - `TypeError`
  """

  solution: """
    __Answer: `false`.__

    `NaN` is toxic, so if either operand is (or converts to) `NaN`, then the comparison operator always returns `false`.
  """


$PlusMinusZero = ->

  optionalPlus = if rnd() then "+" else ""

  if rnd()
    a = optionalPlus + "0"
    b = "-0"
  else
    a = "-0"
    b = optionalPlus + "0"

  op = rnd ops

  answer = eval "#{a} #{op} #{b}"

  problem: """
        #{a} #{op} #{b}

    What's the result of this expression?

    - `#{answer}`
    - `#{!answer}`
    - `0`
    - `Infinity`
    - `NaN`
  """

  solution: """
    __Answer: `#{answer}`.__

    `#{a}` and `#{b}` are considered equal.
  """


$Infinity = ->

  optionalPlus = if rnd() then "+" else ""

  if rnd()
    inf = optionalPlus + "Infinity"
  else
    inf = "-Infinity"

  if rnd()
    a = inf
    b = rnd -100000, 100000
  else
    a = rnd -100000, 100000
    b = inf

  op = rnd ops

  answer = eval "#{a} #{op} #{b}"

  problem: """
        #{a} #{op} #{b}

    What's the result of this expression?

    - `#{answer}`
    - `#{!answer}`
    - `Infinity`
    - `TypeError`
    - `NaN`
  """

  solution: """
    __Answer: `#{answer}`.__

    `#{optionalPlus}Infinity` is larger than any number other than itself, and `-Infinity` is smaller than any number other than itself.
  """


$NumbersAndStringNumbers = ->

  a = rnd -10, 10
  b = rnd -10, 10

  op = rnd ops

  q = if rnd() then "'" else "\""

  variation = if rnd()
    expression = "#{q}#{a}#{q} #{op} #{b}"
  else
    expression = "#{a} #{op} #{q}#{b}#{q}"

  answer = eval expression

  problem: """
        #{expression}

    What's the result of this expression?

    - `#{answer}`
    - `#{!answer}`
    - `Infinity`
    - `TypeError`
    - `NaN`
  """

  solution: """
    __Answer: `#{answer}`.__

    The comparison operators favor numbers and try to convert strings to numbers if this necessary. So, we can interpret this expression as `#{a} #{op} #{b}`.
  """


$NumbersAndStrings = ->

  n = rnd -10, 10
  op = rnd ops

  q = if rnd() then "'" else "\""
  str = q + (rnd List.firstTenAsStrings) + q

  variation = if rnd()
    expression = "#{n} #{op} #{str}"
  else
    expression = "#{str} #{op} #{n}"

  problem: """
        #{expression}

    What's the result of this expression?

    - `false`
    - `true`
    - `NaN`
    - `Infinity`
    - `TypeError`
  """

  solution: """
    __Answer: `false`.__

    The comparison operators favor numbers and try to convert strings to numbers if this necessary. Non-numerical strings as `#{str}` converts to `NaN`. If either operand is (or converts to) `NaN`, then the comparison operator always returns `false`.
    
  """


$Strings = ->

  if rnd()
    # compare same letter in uppercase and lowercase
    if rnd()
      a = rnd List.alphabetLowercase
      b = a.toUpperCase()
    else
      a = rnd List.alphabetLowercase
      b = a.toUpperCase()

  else
    # compare lowercase letters
    if rnd()
      a = rnd List.alphabetLowercase
      b = rnd List.alphabetLowercase
    else
      a = rnd List.alphabetLowercase
      b = rnd List.alphabetLowercase


  op = rnd [ '>', '<' ]
  q = if rnd() then "'" else "\""

  answer = eval "#{q}#{a}#{q} #{op} #{q}#{b}#{q}"

  problem: """
        '#{a}' #{op} '#{b}'

    What's the result of this expression?

    - `#{answer}`
    - `#{!answer}`
    - `Infinity`
    - `TypeError`
    - `NaN`
  """

  solution: """
    __Answer: `#{answer}`.__

    The comparison operators favor numbers and only perform string comparison if both operands are strings. Strings are compared using alphabetical order, where “alphabetical order” is defined by the numerical order of the Unicode values (e. g. capital `"A"` is “smaller” than lowercase `"a"`).
  """

$Reference =
  """
    [MDN: Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators)

    - Greater than `>`. Returns true if the left operand is greater than the right operand.
    - Greater than or equal `>=`. Returns true if the left operand is greater than or equal to the right operand.
    - Less than `<`. Returns true if the left operand is less than the right operand.
    - Less than or equal `<=`. Returns true if the left operand is less than or equal to the right operand.
  """


module.exports = createExam "Inequality Operators", [
  [$Numbers, 1]
  [$NumberExpressions, 1]
  [$ToxicNaN, 1]
  [$PlusMinusZero, 1]
  [$Infinity, 1]
  [$NumbersAndStringNumbers, 1]
  [$NumbersAndStrings, 1]
  [$Strings, 1]
], $Reference