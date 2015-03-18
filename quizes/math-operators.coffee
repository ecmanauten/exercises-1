createExam = require 'utils/createExam'
List = require 'utils/List'
rnd = require 'utils/rnd'


question = "What's the result of an expression?"


$Add = ->
  a = rnd 1, 10
  b = rnd 1, 10

  problem: """
  #{question}

      #{a} + #{b}

  Write the answer:

  [[ #{a + b} ]]
  """

  solution: """
    __Answer: `#{a + b}`.__
  """



$Sub = ->
  a = rnd 1, 10
  b = rnd 1, 10

  problem: """
  #{question}

      #{a} - #{b}

  Write the answer:

  [[ #{a - b} ]]
  """

  solution: """
    __Answer: `#{a - b}`.__
  """



$Mult = ->
  a = rnd -10, 10
  b = if rnd() then 5 else 10

  problem: """
  #{question}

      #{a} * #{b}

  Write the answer:
  
  [[ #{a * b} ]]
  """

  solution: """
    __Answer: `#{a * b}`.__
  """



$Div = ->
  a = (rnd 1, 10) * 10
  b = rnd [1, 2, 5, 10]

  problem: """
  #{question}

      #{a} / #{b}

  Write the answer:

  [[ #{a / b} ]]
  """

  solution: """
    __Answer: `#{a / b}`.__
  """


$Precedence = ->
  a = rnd 1, 10
  b = rnd [1, 2, 5, 10]
  c = rnd 1, 10

  problem: """
  #{question}

      #{c} + #{a} * #{b}

  Write the answer:

  [[ #{c + a * b} ]]
  """

  solution: """
    __Answer: `#{c + a * b}`.__
  """


$Parenthesis = ->
  a = rnd 1, 10
  b = rnd 1, 10
  c = rnd [1, 2, 5, 10]

  problem: """
  #{question}

      (#{a} + #{b}) * #{c}

  Write the answer:

  [[ #{(a + b) * c} ]]
  """

  solution: """
    __Answer: `#{(a + b) * c}`.__
  """



$Mod = ->

  b = rnd 2, 6
  a = (b * (rnd 1, 5)) + (rnd 1, 5)

  problem: """
  #{question}

      #{a} % #{b}

  Write the answer:

  [[ #{a % b} ]]
  """

  solution: """
    __Answer: `#{a % b}`.__
  """


$Float = ->

  a = rnd 1, 10
  # b = rnd [3.14, 1.617, 7.62, 5.45, 2.71, 1.99, 6.6, 1.414]
  b = (rnd 1, 100) / 10

  problem: """
  #{question}

      #{a} + #{b}

  Write the answer:

  [[ #{a + b} ]]
  """

  solution: """
    __Answer: `#{a + b}`.__
  """


$Infinity = ->

  a = (rnd 1, 1000) / 10
  if rnd()
    b = 0
    B = 0
  else
    b1 = rnd 1, 10
    b2 = rnd 1, 10
    b = 0
    B = "((#{b1}*#{b2}) - #{b1*b2})"

  problem: """
  #{question}

      #{a} / #{B}

  Choose the answer:

  - `Infinity`
  - `NaN`
  - `RangeError`
  - `0`
  - `#{a}`
  """

  solution: """
    __Answer: `Infinity`.__
  """


$NaN = ->
  shortWord = rnd List.threeLetterWords
  n = rnd 2, 5
  hook = new Array(n + 1).join(shortWord)

  problem: """
  #{question}

      "#{shortWord}" * #{n}

  Choose the answer:

  - `NaN`
  - `"#{hook}`
  - `0`
  - `TypeError`
  - `Infinity`
  """

  solution: """
    __Answer: `NaN`.__
  """

$Reference =
  """
    [MDN: Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators)

    > The standard arithmetic operators are addition `+`, subtraction `-`, multiplication `*`, and division `/`. These operators work as they do in most other programming languages when used with floating point numbers (in particular, note that division by zero produces `Infinity`).

    [On modulus operator](http://stackoverflow.com/questions/16505559/how-can-i-use-modulo-operator-in-javascript)
  """

module.exports = createExam "Math Operators", [
  [$Add, 3]
  [$Sub, 1]
  [$Mult, 1]
  [$Div, 1]
  [$Precedence, 1]
  [$Parenthesis, 2]
  [$Mod, 2]
  [$Float, 1]
  [$Infinity, 2]
  [$NaN, 2]
], $Reference