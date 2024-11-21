System.register(['lodash'], (function (exports) {
  'use strict';
  var _;
  return {
    setters: [function (module) {
      _ = module.default;
    }],
    execute: (function () {

      const version = '1.0.0';

      console.log('hello rollup', _.repeat(version, 10));

      const hello = exports('hello', 'hello');

    })
  };
}));
