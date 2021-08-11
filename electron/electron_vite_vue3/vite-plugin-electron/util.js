const { build } = require('esbuild');
const path = require('path');
const chalk = require('chalk');
import fs from 'fs/promises';

export async function mainProcessBuild(viteConfig, mode, onRebuild){
  const define = {};
  for (const k in viteConfig.env) {
    define[`process.env.${k}`] = JSON.stringify(viteConfig.env[k])
  }  
  
  
  const dependenciesSet = new Set()
  let buildConfig = {
    entryPoints: [
      path.join(viteConfig.root, 'src', './background.js')
    ],
    outfile: 'dist/main.js',
    platform: 'node',
    bundle: true,
    format: 'cjs',
    define,
    plugins: [
      {
        name: 'externalize-deps',
        setup(build) {
          build.onResolve({ filter: /.*/ }, (args) => {
            const id = args.path
            if (id[0] !== '.' && !path.isAbsolute(id)) {
              // console.log(id)
              dependenciesSet.add(id);
              return {
                external: true
              }
            }
          })
        }
      },
    ],
  }
  if(mode === 'dev'){
    buildConfig = {
      ...buildConfig,
      sourcemap: 'inline',
      inject: [path.join(__dirname, 'inject', 'devInject.js')],
      watch: {
        onRebuild
      }
    }
  } else {
    buildConfig = {
      ...buildConfig,
      inject: [path.join(__dirname, 'inject', 'buildInject.js')],
      // minify: true,
    }
  }
  await build(buildConfig);
  // console.log([...dependenciesSet])
  return {
    dependencies: [...dependenciesSet]
  }
}

const logLevelMap = {
  info: 'blue',
  warning: 'yellow',
  error: 'red'
}
export function log(logLevel, message){
  const color = logLevelMap[logLevel]
  console.log(
    `${chalk[color].bold(logLevel)}: ${message}`
  )
}

export async function preloadBuild(viteConfig){
  const entryPoints = [];
  const preloadPath = path.join(viteConfig.root, 'src', 'preload');
  const res = await fs.readdir(preloadPath);
  for(const i of res){
    const file = await fs.stat(path.join(preloadPath, i));
    if(file.isFile() && ['.js', '.ts'].includes(path.extname('i'))){
      entryPoints.push(path.join(preloadPath, i))
    }
  }
  await build({
    entryPoints,
    outdir: 'dist/preload',
    platform: 'node',
    bundle: true,
    watch: true,
    plugins: [
      {
        name: 'externalize-deps',
        setup(build) {
          build.onResolve({ filter: /.*/ }, (args) => {
            const id = args.path
            if (id[0] !== '.' && !path.isAbsolute(id)) {
              // dependenciesSet.add(id);
              return {
                external: true
              }
            }
          })
        }
      },
    ],
  })
}