import { version } from "./utils/index";
import { repeat } from "lodash";

console.log('hello rollup', repeat(version, 10))

export const hello = 'hello';