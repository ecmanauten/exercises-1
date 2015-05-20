While loop
==========

## Examples from [Khan Academy quiz](https://www.khanacademy.org/computing/computer-programming/programming/looping/e/review-loops)

What will this code output?

    var i = 3;
    while (i < 6) {
      println(i);
      i += 1;
    }

- 3, 4, 5
- 1, 2, 3
- 3, 4, 5, 6


What will this code output?

    var i = 0;
    while(i < 3) {
        println("hi");
        i++;
    }

- hi hi hi
- hi hi
- hi


What will this code output?

    var i = 0;
    while (i < 3) {
       println("hi");
       i++;
    }
    println("bye");

- hi, hi, hi, bye
- hi, bye, hi, bye, hi, bye
- hi, bye


What will this code output?

    var i = 0;
    while (i < 0) {
      println("hi");
    }

- It will output this line: `hi`
- It will output an error!
- It won't output anything.


What will this code output?

    var x = 3;
    var i = 0;
    while (i < 3) {
      x += 1;
      i += 1;
    }
    println(x);

