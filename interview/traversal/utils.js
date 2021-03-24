const VERSION = '1.0.0';
let say = {
  a: 1
}

// export VERSION;
export {
  f as default,
  say,
  VERSION
}

function f(){
  console.log('ffff')
}