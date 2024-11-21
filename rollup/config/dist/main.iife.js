var elecxt = (function (exports, _) {
  'use strict';

  const version = '1.0.0';

  console.log('hello rollup', _.repeat(version, 10));

  const hello = 'hello';

  exports.hello = hello;

  return exports;

})({}, _);
