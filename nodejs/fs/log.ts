// import { createWriteStream } from "fs";
// import path = require("path");

// const stream = createWriteStream('./log/net.log', { flags: "a"})
// export function log(text: string){
//   stream.write(`${Date.now()} ${text}\n`)
//   // stream.end();
// }
// console.log(stream)


import { Readable } from "stream";

export class logStream extends Readable {
  constructor(options?: any){
    super(options)
  }

  _read(size: number): void {
    this.push(`${Date.now()} hello stream\n`)
    this.push(null)
  }
}