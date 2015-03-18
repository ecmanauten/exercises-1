createExam = require 'utils/createExam'
rnd = require 'utils/rnd'


letters = ['i', 'k', 'j', 'm', 'p', 'o', 'x']


$MissingCondition = ->

  i = rnd letters
  k = rnd 3, 10

  steps = for j in [1..k+1]
    if j < k+1
      "#{j}. #{i} is equal to `#{j}`, condition is `true`, print & increment #{i}"
    else
      "#{j}. #{i} is equal to `#{j}`, condition is `false`, break the loop"

  increment = rnd [
    "#{i} = #{i} + 1;"
    "#{i} += 1;"
    "#{i}++;"
    "++#{i};"
  ]

  problem: """
    This loop should print numbers from 1 to #{k} into console.

        var #{i} = 1;
        while (⟨???⟩) {
          console.log(#{i});
          #{increment}
        }

    Which condition should be there? Choose all possible options.

    [x] `#{i} <= #{k}`
    [x] `#{i} < #{k+1}`
    [ ] `#{i} == #{k}`
    [ ] `#{i} < #{k}`
    [ ] `#{i} < #{k-1}`
  """

  solution: """
    Let's calculate all iterations for this loop:

    #{steps.join '\n'}

    We don't want print `#{k+1}`, so condition should be falsy on 6th step. __That's either `#{i} < #{k+1}` or `#{i} <= #{k}`__.
  """

$DescribeStatements = ->

  i = rnd letters
  n = (rnd 1, 10) * 10

  increment = rnd [
    "#{i} = #{i} + 1;"
    "#{i} += 1;"
    "#{i}++;"
    "++#{i};"
  ]

  problem: """
    This loop prints numbers from 1 to #{n}

        var #{i} = 1;
        while (i <= #{n}) {
          console.log(#{i});
          #{increment}
        }

    Put the staments in right order.

    1. Declare variable `#{i}` and assign value `0`
    2. Start `while` loop with condition "`#{i}` less than or equal `#{n}`"
    3. Print `#{i}` to console
    4. Increment `#{i}` by `1`
    5. Close statement block of `while` loop
  """

  solution: """
  Right order is this:

  1. Declare variable `#{i}` and assign value `0`
  2. Start `while` loop with condition "`#{i}` less than or equal `#{n}`"
  3. Print `#{i}` to console
  4. Increment `#{i}` by `1`
  5. Close statement block of `while` loop
  """


  # Ranges:
  # [0 3) <
  # 0, 1, 2

  # [0 3] <=
  # 0, 1, 2, 3

  # [1 3) <
  # 1, 2

  # [1 3] <=
  # 1, 2, 3

$HowManyIterations = ->

  i = rnd letters
  n = (rnd 1, 10) * 10
  start = if rnd() then 0 else 1
  ineq = if rnd()
    op: "<"
    txt: "less than"
    strict: true
    math: "<"
  else
    op: "<="
    txt: "less than or equal"
    strict: false
    math: "≤"

  if ineq.strict
    upperBound = n - 1
    answer = n - start
  else
    upperBound = n
    answer = n+1 - start

  zeroComment =
    if start == 0
      " " + "(pay attention to zero-based numbering)"
    else
      ""

  increment = rnd [
    "#{i} = #{i} + 1;"
    "#{i} += 1;"
    "#{i}++;"
    "++#{i};"
  ]

  problem: """
    Consider this loop:

        var #{i} = #{start};
        while (#{i} #{ineq.op} #{n}) {
          console.log(#{i});
          #{increment}
        }

    How many iterations it's gonna make?

    [[ #{answer} ]]
  """

  solution: """
    __Answer: #{answer} iterations.__

    This loop will print numbers in range _#{start} ≤ #{i} #{ineq.math} #{n}_. That should look like #{answer} lines of numbers from #{start} to #{upperBound}#{zeroComment}.
  """


$LoopAbstraction = ->

  n = rnd 3, 5
  start = if rnd() then 0 else 1
  iterations = n+1 - start

  codetab = "    "

  repeats = for k in [start..n]
    codetab + "console.log(#{k});"

  conditions = if rnd()
    [ "< #{n+1}", "<= #{n+1}", "= #{n+1}" ]
  else
    [ "<= #{n}", "< #{n}", "= #{n}" ]

  options = for condition in conditions
    i = rnd letters
    increment = rnd [
      "#{i} = #{i} + 1;"
      "#{i} += 1;"
      "#{i}++;"
      "++#{i};"
    ]

    """
    -
        var #{i} = #{start};
        while (#{i} #{condition}) {
          console.log(#{i});
          #{increment}
        }
    """

  problem: """
    Consider these repeatable statements:

    #{repeats.join('\n')}

    Choose the right implementation of `while` loop that is doin' the same job:

    #{options.join('\n')}
  """

  solution: """
    This loop should print #{iterations} rows of numbers from #{start} to #{n}:

    #{options[0].slice(2)}
  """

$Reference =
  """
    Eloquent JavaScript, [Chapter 2. Program Structure](http://eloquentjavascript.net/02_program_structure.html)

    Example of while loop:

        var n = 0;
        var x = 0;
        
        while (n < 3) {
          n++;
          x += n;
        }
  """


module.exports = createExam "While Loop", [
  [$MissingCondition, 1]
  # [$DescribeStatements, 1]
  [$HowManyIterations, 1]
  [$LoopAbstraction, 1]
], $Reference