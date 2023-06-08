import { readFileSync } from "fs";
import { transformSync } from "esbuild";
const content = readFileSync("./transform/index.ts", {encoding: 'utf-8'})

const res = transformSync(content, {
  loader: 'ts',
  define: {
    DEBUG: 'true',
    _path: '"_dirname"',
    _config: '{"name": "mm"}'
  }
})

console.log(res)