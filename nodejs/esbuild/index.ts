import { spawn } from 'child_process';
import { build } from 'esbuild';
import { createReadStream, createWriteStream } from 'fs';
import { stdout } from 'process';

const rs = createReadStream('./package-lock.json', {
  start: 0,
  end: 1000,
  highWaterMark: 1 * 1024,
  emitClose: false,
  encoding: 'utf-8'
});

const ls = spawn('ls', ['-ls', './'])

ls.stdout.pipe(stdout)
// build({
//   entryPoints: ['react/app.jsx'],
//   bundle: true,
//   loader: {
//     '.png': 'dataurl'
//   },
//   outdir: 'dist',
//   // outfile: 'index.js',
//   // external: ['./react/utils/index.ts']
// })