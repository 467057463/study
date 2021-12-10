import glob from 'fast-glob'

export async function build(){
  const res = await glob('**/*.{js,ts,vue}');
  console.log(res)
  return Promise.resolve('abc')
}