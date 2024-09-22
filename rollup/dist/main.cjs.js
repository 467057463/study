'use strict';

var lodash = require('lodash');

const version = '1.0.0';

console.log('hello rollup', lodash.repeat(version, 10));

const hello = 'hello';

exports.hello = hello;
