/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

var rnd = require('../rnd');


console.log(rnd());
console.log(rnd(['ok', 'hello', 42, [1,2,3,4,5]]));
console.log(rnd(1,100));