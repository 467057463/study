import { version } from "./utils/index";
// import _ from "lodash";
// import './assets/index.css'
// import virtual from 'virtual-module'

// console.log('hello rollup', _.repeat(version, 10))

export const hello = 'hello';

export default () => {
  return version
}