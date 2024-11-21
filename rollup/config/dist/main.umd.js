(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash')) :
  typeof define === 'function' && define.amd ? define('elecxt', ['exports', 'lodash'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.elecxt = {}, global._));
})(this, (function (exports, _) { 'use strict';

  const version = '1.0.0';

  console.log('hello rollup', _.repeat(version, 10));

  const hello = 'hello';

  exports.hello = hello;

}));
