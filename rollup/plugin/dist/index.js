const version = '1.0.0';

// import _ from "lodash";
// import './assets/index.css'
// import virtual from 'virtual-module'

// console.log('hello rollup', _.repeat(version, 10))

const hello = 'hello';

var index = () => {
  return version
};

export { index as default, hello };
