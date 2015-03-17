createExam = require 'utils/createExam'
List = require 'utils/List'
rnd = require 'utils/rnd'


add4Tabs = (code) -> "    " + code.split("\n").join("\n" + "    ")


$SimpleDeclaration = ->

  name = rnd List.names

  variation = if rnd()
    """
      var name;
      name = "#{name}";
    """
  else
    """
      var name = "#{name}";
    """

  problem: """
    #{add4Tabs variation}

    Which value stored in variable `name`?

    - `"#{name}"`
    - `name`
    - `var`
    - `undefined`
  """

  solution: """
    __Answer: `"#{name}"`.__
  """


$TheResultIs = ->

  a = rnd 1, 10
  b = rnd 1, 10

  variableName = rnd List.variableNames

  problem: """
        var answer = #{a} + #{b}
        result = "The result is: " + answer;

    Which value stored in variable `result`?

    - `"The result is: #{a + b}"`
    - `answer`
    - `result`
    - `#{a + b}`
  """

  solution: """
    __Answer: `"The result is: #{a + b}"`.__
  """



$StoreExpression = ->

  a = rnd 1, 10
  b = rnd 1, 10

  expression = "#{a} + #{b}"

  variableName = rnd List.variableNames

  variation = if rnd()
    """
      var #{variableName};
      #{variableName} = #{expression};
    """
  else
    """
      var #{variableName} = #{expression};
    """

  problem: """
    #{add4Tabs variation}

    Which value stored in variable `#{variableName}`?

    - `#{a + b}`
    - `#{variableName}`
    - `#{a}`
    - `undefined`
    - `var`
  """

  solution: """
    __Answer: `#{a + b}`.__
  """


$ReAssignment = ->

  randomNumber = rnd 0, 10
  randomWord = rnd List.threeLetterWords

  variableName = rnd List.variableNames

  variation = if rnd()
    """
      var #{variableName};
      #{variableName} = #{randomNumber};
      #{variableName} = "#{randomWord}";
    """
  else
    """
      var #{variableName} = #{randomNumber};
      #{variableName} = "#{randomWord}";
    """

  problem: """
    #{add4Tabs variation}

    Which value stored in variable `#{variableName}`?

    - `"#{randomWord}"`
    - `#{randomNumber}`
    - `#{variableName}`
    - `undefined`
    - `var`
  """

  solution: """
    __Answer: `"#{randomWord}"`.__
  """


$Undefined1 = ->

  variableName = rnd List.variableNames
  variation = "var #{variableName};"

  problem: """
    #{add4Tabs variation}

    Which value stored in variable `#{variableName}`?

    - `undefined`
    - `result`
    - `var`
    - `null`
    - `ReferenceError`
  """

  solution: """
    __Answer: `undefined`.__
  """

$Undefined2 = ->

  name = rnd List.names

  problem: """
        var firstName;
        var middleName = "#{name}";

    Which value stored in variable `firstName`?

    - `undefined`
    - `"#{name}"`
    - `firstName`
    - `middleName`
    - `null`
  """

  solution: """
    __Answer: `undefined`.__
  """

$Undefined3 = ->

  name = rnd List.names
  pair = rnd List.letterPairs
  i = pair[0]
  k = pair[1]

  variation = if rnd()
    """
      var #{i}, #{k};
      k = 0;
    """
  else
    """
      var #{i}, #{k} = 0;
    """


  problem: """
    #{add4Tabs variation}

    Which value stored in variable `#{i}`?

    - `undefined`
    - `null`
    - `0`
    - `"#{i}"`
    - `"#{k}`
  """

  solution: """
    __Answer: `undefined`.__
  """


$CombinedDeclaration = ->

  name = rnd List.names
  triple = rnd List.letterTriples
  i = triple[0]
  k = triple[1]
  j = triple[2]

  variation = rnd [
    """
      var #{i}, #{k}, #{j};
      #{i} = 0;
      #{k} = 0;
      #{j} = 0;
    """
    """
      var #{i} = #{k} = #{j} = 0;
    """
    """
      var #{i} = 0; #{k} = 0; #{j} = 0;
    """
    ]


  problem: """
    #{add4Tabs variation}

    Which value stored in variable `#{i}`?

    - `0`
    - `#{k}`
    - `#{j}`
    - `undefined`
    - `ReferenceError`
  """

  solution: """
    __Answer: `0`.__
  """


module.exports = createExam "Variable Declaration", [
  [$SimpleDeclaration, 1]
  [$StoreExpression, 1]
  [$ReAssignment, 1]
  # [[$Undefined1, $Undefined2, $Undefined3], 1]
  [$CombinedDeclaration, 1]

  # It's about string concatenation
  # [$TheResultIs, 1]
]