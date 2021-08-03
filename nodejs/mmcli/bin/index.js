#!/usr/bin/env node
const { cac } = require('cac');

const cli = cac('mmcli');

// cli.option('-t, --type <type>', 'choose a type to create', {
//   default: 'vue'
// })
// .option('--name <name>', 'you project name')

cli.command('create <name>', 'create a project')
.option('-t, --type <type>', 'proejct type: vue react', {
  default: 'vue'
})
.option('-d, --dir <dir>', 'dir for project', {
  default: '.'
})
.option('-c, --coverage [coverage]', 'coverage the old dir')
.option('--env <env>', 'set Envs')
.example('mmcli create my_blog -t vue -d .')
.action((name, options) => {
  console.log(name, options)
})

cli.help()
cli.version(require('../package.json').version)
cli.parse();