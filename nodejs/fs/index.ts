// import { resolve } from "path";
// import { log } from "./log";

// // 延时
// export const delay = (ms = 1000, message = '') =>
//   new Promise((resolve) => setTimeout(resolve, ms, message));



// (async function(){
//   for(let i = 0; i < 100000; i++){
//     log(String(i))
//     await delay()
//   }
// }())

import { createWriteStream } from "fs";
import { logStream } from "./log";

const logReadStream = new logStream();

logReadStream.pipe(createWriteStream('./log/net.log', { flags: "a"}))