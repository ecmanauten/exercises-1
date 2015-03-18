/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';


var add4Tabs = function(code) {
  return "    " + code.split("\n").join("\n" + "    ");
};


module.exports = add4Tabs;
