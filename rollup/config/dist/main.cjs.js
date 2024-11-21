'use strict';

var _ = require('lodash');

const version = '1.0.0';

console.log('hello rollup', _.repeat(version, 10));

const hello = 'hello';

exports.hello = hello;
