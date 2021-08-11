const { build } = require('esbuild');
const path = require('path')
const { build: electronBuilder } = require('electron-builder');
const { stat, remove, writeFile } = require('fs-extra')

import { mainProcessBuild, log, preloadBuild } from './util';

async function generatePackageJson(config, dependencies) {
  const original = require(path.join(config.root, './package.json'))
  const result = {
    name: original.name,
    author: original.author,
    version: original.version,
    license: original.license,
    description: original.description,
    main: './main.js',
    dependencies: 
      Object.entries(original.dependencies)
      .filter(item => dependencies.includes(item[0]))
      .reduce((object, entry) => ({ ...object, [entry[0]]: entry[1] }), {})
  }
  await writeFile('dist/package.json', JSON.stringify(result))
}



export default async function(config){
  const startTime = Date.now();
  log('info', `正在打包electron...`)
  await preloadBuild(config, 'build');
  const { dependencies } = await mainProcessBuild(config, 'build')
  // console.log(dependencies)
  await generatePackageJson(config, dependencies)
  await electronBuilder({
    publish: 'never',
    config: {
      productName: '',
      appId: '',
      directories: {
        output: 'dist_application',
        buildResources: 'build',
        app: 'dist'
      },
    }
  })
  log('info', `electron 打包完毕, 用时${(Date.now() - startTime) / 1000}s`)
}