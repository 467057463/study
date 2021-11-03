const execa = require('execa');
const chalk = require('chalk');
const log = console.log;

// 延时
exports.delay = function delay(ms, message = '') {
  return new Promise((resolve) => {
    setTimeout(() => resolve(message), ms);
  });
}


// 获取当前分支
exports.getGitBranch = function getGitBranch() {
  const res = execa.commandSync('git rev-parse --abbrev-ref HEAD');
  return res.stdout;
}
// 提示信息
exports.info = function info(msg){
  log('\n' + chalk.white.bgGreen(' INFO ') + ' ' + msg)
}
// 错误信息
exports.error = function error(msg){
  log('\n' + chalk.white.bgRed(' ERROR ') + ' ' + chalk.red(msg))
}
// 成功信息
exports.success = function success(msg){
  log('\n' + chalk.black.bgYellow(' SUCCESS ') + ' ' + msg)
}
