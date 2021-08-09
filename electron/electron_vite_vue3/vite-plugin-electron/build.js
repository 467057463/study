const { build } = require('esbuild');
const path = require('path')
const { build: electronBuilder } = require('electron-builder');
const { stat, remove, writeFile } = require('fs-extra')

async function generatePackageJson(config) {
  const original = require(path.join(config.root, './package.json'))
  const result = {
    name: original.name,
    author: original.author,
    version: original.version,
    license: original.license,
    description: original.description,
    main: './main.js',
    dependencies: Object.entries(original.dependencies).reduce((object, entry) => ({ ...object, [entry[0]]: entry[1] }), {})
  }
  await writeFile('dist/package.json', JSON.stringify(result))
}

async function buildMain(config){
  await build({
    entryPoints: [path.join(config.root, './main.js')],
    outdir: 'dist',
    platform: 'node',
    bundle: true,
    format: 'cjs',
    sourcemap: 'inline',
    metafile: true,
    plugins: [
      {
        name: 'externalize-deps',
        setup(build) {
          build.onResolve({ filter: /.*/ }, (args) => {
            const id = args.path
            if (id[0] !== '.' && !path.isAbsolute(id)) {
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

export default async function(config){
  await buildMain(config)
  await generatePackageJson(config)
  electronBuilder({
    publish: 'never',
    config: {
      productName: '',
      appId: '',
      directories: {
        output: 'build',
        buildResources: 'build',
        app: 'dist'
      },
    }
  })
}