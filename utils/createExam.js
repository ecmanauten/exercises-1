/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

var _ = require('lodash');
var rnd = require('../utils/rnd');


var createExam = function(title, arr, reference) {
  var problems;

  problems = _.flatten(arr.map(function(problem) {
    return _.times(problem[1], function() {
      return problem[0];
    });
  }));

  return {
    "new": function() {
      return (rnd(problems))();
    },
    title: title,
    reference: reference || ''
  };
};


module.exports = createExam;
