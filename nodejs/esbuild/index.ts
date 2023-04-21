import { build } from 'esbuild';

build({
  entryPoints: ['react/app.jsx'],
  bundle: true,
  outfile: 'out.js'
})