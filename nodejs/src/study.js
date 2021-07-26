const fs = require('fs/promises');
const path = require('path');
const { constants } = require('fs');

// fs.writeFile("2.text", "我是2", {flag: 'a'}).then(res => {
//   console.log('success')
// })
// .catch(err => {
//   console.log(err)
// })

// fs.appendFile('2.text', "append").then(res => {
//   console.log("append success")
// })

// writeFileSync('3.text', 'hahaha')

// fs.readFile('ansi.txt').then(res => {
//   console.log(res.toString())
// })

// fs.rename(path.join('static', '2.text'), path.join('static', '2.txt')).then(res => {
//   console.log(res)
// })

// fs.unlink(path.join('static', '2.txt')).then()

// async function copy(path1, path2){
//   try {
//     const res = await fs.readFile(path1)
//     console.log(res)
//     const data = res.toString();
//     await fs.writeFile(path2, data);
//     console.log('复制成功')
//   } catch (error) {
//     throw(error)
//   }
// }

// copy(path.join('static', 'ansi.txt'), path.join('static', '1.txt'))

// fs.readFile('package.json').then(res => {
//   console.log(JSON.parse(res.toString()))
// })

// fs.mkdir('public', 0777).then()
// fs.chmod('public', 0147).then()
// fs.rename('public', 'publics').then()
// fs.readdir('src').then(res => {
//   console.log(res)
// })

// fs.access('public', constants.F_OK).then(res => {
//   console.log(res)
// }).catch(error => {
//   console.log(error)
// })

// fs.stat('src').then(res => {
//   console.log(res.isDirectory())
// })

// fs.chmod('public', 0777).then()
fs.rmdir('publics').then().catch(err => console.log(err))