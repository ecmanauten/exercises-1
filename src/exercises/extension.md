What's the extension?
=====================

```
  ,--.   ,--.,--.               ,--.  ,--.            ,--.  ,--.              
  |  |   |  ||  ,---.  ,--,--.,-'  '-.|  |,---.     ,-'  '-.|  ,---.  ,---.   
  |  |.'.|  ||  .-.  |' ,-.  |'-.  .-'`-'(  .-'     '-.  .-'|  .-.  || .-. :  
  |   ,'.   ||  | |  |\ '-'  |  |  |     .-'  `)      |  |  |  | |  |\   --.  
  '--'   '--'`--' `--' `--`--'  `--'     `----'       `--'  `--' `--' `----'  
                                                                    ,------.  
                     ,--.                        ,--.              '  .--.  ' 
   ,---. ,--.  ,--.,-'  '-. ,---. ,--,--,  ,---. `--' ,---. ,--,--,'--' _|  | 
  | .-. : \  `'  / '-.  .-'| .-. :|      \(  .-' ,--.| .-. ||      \.--' __'  
  \   --. /  /.  \   |  |  \   --.|  ||  |.-'  `)|  |' '-' '|  ||  |`---'     
   `----''--'  '--'  `--'   `----'`--''--'`----' `--' `---' `--''--'.---.     
                                                                    '---'     
```

## Problem
Write a function that receives text string with filename and returns file's extension.

## Hints
You may use `String.prototype.split`, array's `length` property.

## Template
    function getExtension (fileName) {
        // your solution here...
    }

## Expected Result
    console.log(getExtension('underscore.js'));   // -> 'js'
    console.log(getExtension('some.class.js'));   // -> 'js'
    console.log(getExtension('txt.tar.gz.js'));   // -> 'js'
    console.log(getExtension('.htaccess'));       // -> 'htaccess'
    console.log(getExtension('somefile'));        // -> undefined