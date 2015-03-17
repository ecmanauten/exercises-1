createExam = require 'utils/createExam'
List = require 'utils/List'
rnd = require 'utils/rnd'


$SimpleIncrement = ->

  i = rnd List.letters
  n = rnd 0, 10

  increment = rnd [
    "#{i} = #{i} + 1;"
    "#{i} += 1;"
    "#{i}++;"
    "++#{i};"
  ]

  problem: """
        var #{i} = #{n};
        #{increment}

    Which value stored in variable `#{i}`?

    [[ #{n + 1} ]]
  """

  solution: """
    __Answer: `#{n + 1}`.__
  """


$SimpleDecrement = ->

  i = rnd List.letters
  n = rnd -10, 10

  decrement = rnd [
    "#{i} = #{i} - 1;"
    "#{i} -= 1;"
    "#{i}--;"
    "--#{i};"
  ]

  problem: """
        var #{i} = #{n};
        #{decrement}

    Which value stored in variable `#{i}`?

    [[ #{n - 1} ]]
  """

  solution: """
    __Answer: `#{n - 1}`.__    
  """


$DoubleIncrement = ->

  i = rnd List.letters
  n = rnd 0, 10

  increments = [
    "#{i} = #{i} + 1;"
    "#{i} += 1;"
    "#{i}++;"
    "++#{i};"
  ]

  increment1 = rnd increments
  increment2 = rnd increments

  problem: """
        var #{i} = #{n};
        #{increment1}
        #{increment2}

    Which value stored in variable `#{i}`?

    [[ #{n + 2} ]]
  """

  solution: """
    __Answer: `#{n + 2}`.__
  """


$PlusMinus = ->

  i = rnd List.letters
  n = rnd 0, 10

  increments = [
    "#{i} = #{i} + 1;"
    "#{i} += 1;"
    "#{i}++;"
    "++#{i};"
  ]
  decrements = [
    "#{i} = #{i} - 1;"
    "#{i} -= 1;"
    "#{i}--;"
    "--#{i};"
  ]

  increment = rnd increments
  decrement = rnd decrements

  problem: """
        var #{i} = #{n};
        #{increment}
        #{decrement}

    Which value stored in variable `#{i}`?

    [[ #{n} ]]
  """

  solution: """
    __Answer: `#{n}`.__
  """

$Reference =
  """
    [Assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators)

    - `x += y` meaning `x = x + y`
    - `x -= y` meaning `x = x - y`
    - `x +=1` is the same as `x++`
  """

module.exports = createExam "Increment and Decrement", [
  [$SimpleIncrement, 1]
  [$SimpleDecrement, 1]
  [$DoubleIncrement, 1]
  [$PlusMinus, 1]
], $Reference