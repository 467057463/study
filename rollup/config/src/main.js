import { version } from "./utils/index";
import _ from "lodash";
import './assets/index.css'

console.log('hello rollup', _.repeat(version, 10))

export const hello = 'hello';