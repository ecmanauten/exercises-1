While loop
==========

Three questions:
1. What do I want to repeat? 
2. What do I want to change each time? 
3. How long should we repeat?


## Patterns
- statement: keyword, condition, block
- block is one step of the loop
- initialize counter before
- condition
  - increment at each step
  - zero-step loop
  - infinite loop
- increment two variables simultaneously
- statements outside the loop


## Blueprint

My old problems:
- how many iterations
- missing condition

Examples from [Khan Academy quiz](https://www.khanacademy.org/computing/computer-programming/programming/looping/e/review-loops)

### LoopNumbers
What will this code output?

    var i = 3;
    while (i < 6) {
      console.log(i);
      i += 1;
    }

- 3, 4, 5
- 1, 2, 3
- 3, 4, 5, 6


### LoopStrings
What will this code output?

    var i = 0;
    while(i < 3) {
        console.log('hi');
        i++;
    }

- hi hi hi
- hi hi
- hi


### InsideAndOutside
What will this code output?

    var i = 0;
    while (i < 3) {
       console.log('hi');
       i++;
    }
    console.log('bye');

- hi, hi, hi, bye
- hi, bye, hi, bye, hi, bye
- hi, bye


### FalseCondition
What will this code output?

    var i = 0;
    while (i < 0) {
      console.log('hi');
    }

- Nothing
- Infinite loop
- `RangeError`
- `hi`

> `<`, `>` and other false conditions


### DoubleCounter
What will this code output?

    var x = 3;
    var i = 0;
    while (i < 3) {
      x += 1;
      i += 1;
    }
    console.log(x);

- 6
- 7
- 3
- 4


---


### InfiniteLoop1

What will this code output?

    var i = 0;
    while (i < 5) {
      console.log('hi');
    }

- Infinite loop
- Nothing
- `'hi'`
- `RangeError`


### InfiniteLoop2

What will this code output?

    while (true) {
      console.log('hi');
    }

- Infinite loop
- Nothing
- `'hi'`
- `RangeError`
