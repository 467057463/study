const execa = require('execa');
const { spawnSync } = require('child_process')
const { removeSync } = require('fs-extra')
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const FormData =require('form-data');
const { getGitBranch, info, error, success, delay } = require('./utils');
const chalk = require('chalk');
const Table = require('cli-table');
const log = console.log;

// 打包目录
const dist_application = path.join(process.cwd(), 'dist_application')
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';

// 对应打包命令
const buildMap = {
  production: 'production',
  staging: 'staging',
  // study_git_hook_09_09: 'staging'
}
// 各个环境对应的上传位置
const uploadMap = {
  production: 'http://user.erp.idealhere.com',
  staging: 'http://172.168.20.12',
  // study_git_hook_09_09: 'http://172.168.20.12'
}
const currentBranch = getGitBranch()


// 非 main/staging 分支不用打包
if(!buildMap[currentBranch]){
  return;
}

info(`即将开始执行自动构建任务，敌军还有30s到达战场`)

// if(currentBranch === 'staging' || currentBranch === 'study_git_hook_09_09'){
// staging 分支自动增加版本号
if(currentBranch === 'staging'){
  info('自动增加版本号')
  try {
    execa.commandSync(`${npm} version patch`);    
    // execa.commandSync(`${npm} --no-git-tag-version version patch`);    
    // execa.commandSync(`git commit -am'发布新版'`);
  } catch (err) {
    error(err.stderr)  
    process.exit(1)  
  }
}


// 删除dist_application目录
info('删除 dist_application 目录')
removeSync(dist_application)


info(`开始打包`)    
const timeStart = Date.now()
spawnSync(npm, ['run', `build:${buildMap[currentBranch]}`], {
  stdio: 'inherit' 
})
success(`打包完成，共用时${Date.now() - timeStart}ms`)    

// 上传文件
const installReg = /\.(dmg|exe)$/;
const latestReg = /latest(-mac)?\.yml$/;
const api = '/api/v2/chatShop/uploadUpdateFile';
const url = uploadMap[currentBranch] + api;
const files = fs.readdirSync(dist_application).filter(res => {
  return installReg.test(res) || latestReg.test(res)
})
info(`将要上传${files.length}个文件`) 
const table = new Table({
  chars: { 'top': '' , 'top-mid': '' , 'top-left': '' , 'top-right': ''
  , 'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': ''
  , 'left': '' , 'left-mid': '' , 'mid': '' , 'mid-mid': ''
  , 'right': '' , 'right-mid': '' , 'middle': ' ' },
  head: [chalk.cyan.bold('name'), chalk.cyan.bold('size')],
})
files.forEach(res => {
  const size = Math.round(fs.statSync(path.join(dist_application, res)).size / 1024 * 100) / 100
  table.push([res, size + 'kb'])
})
log('\n' + table.toString());

;(async () => {
  async function uploadFile(){
    for(let i = 0; i < files.length; i++){
      const res = files[i];
      const localFile = fs.createReadStream(path.join(dist_application, res));
      var formData = new FormData();
      formData.append('file',localFile);
  
      info(`即将上传${res}`)    
      try {
        await axios({
          method: 'post',
          url: url,
          data: formData,
          'maxContentLength': Infinity,
          'maxBodyLength': Infinity,
          headers: {
            version: 'v2',
            ...formData.getHeaders()
          }
        })
        success(`${res}上传成功`)
      } catch (err) {
        error(`上传成功发生了错误`)
        console.log(err)
        process.exit(1)
      }
    }
  }
  await uploadFile();
  // delay(1000)
  execa.commandSync('git push --no-verify')
  info('自动构建流程完成')
})()