const { getGitBranch, info, error, success } = require('./utils');
const chalk = require('chalk');

// 那些分支可以被 rebase 的分支
const branchMap = {
  production: 'staging',
  staging: 'dev',
  // study_git_hook_09_09: 'test'
}
const currentBranch = getGitBranch()
const rebaseBranch = process.argv[process.argv.length - 1];

// 切记切记 `不允许`
// 把非 staging 分支 rebase production 分支
// 把非 dev 分支 rebase 到了 staging 分支
// 如果非要这样，会导致打包流程错乱
if(
  Object.keys(branchMap).includes(currentBranch)
  && branchMap[currentBranch] !== rebaseBranch
){
  error(`你不能把 ${chalk.red(rebaseBranch)} 分支 rebase ${chalk.red(currentBranch)}`)
  process.exit(1)
}

info(`你将 ${chalk.blue(rebaseBranch)} 分支 rebase 到了 ${chalk.yellow(currentBranch)} 分支`)