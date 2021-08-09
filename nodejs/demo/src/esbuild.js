import { build } from 'esbuild';
import path from 'path';

build({
  entryPoints: [path.join(process.cwd(), 'src/esbuild', 'app.jsx')],
  bundle: true,
  outfile: 'out.js',
  minify: true,
  sourcemap: true,
}).catch(() => process.exit(1))