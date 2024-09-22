System.register(['lodash'], (function (exports) {
  'use strict';
  var repeat;
  return {
    setters: [function (module) {
      repeat = module.repeat;
    }],
    execute: (function () {

      const version = '1.0.0';

      console.log('hello rollup', repeat(version, 10));

      const hello = exports('hello', 'hello');

    })
  };
}));
