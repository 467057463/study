// function sleep(time){
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, time)
//   })
// }

function sleep(duration, twinkleDuration){
  return new Promise((resolve, reject) => {
    while(duration > 0){
      console.log(duration)
      duration--;
    }
    console.log('ssssss')
  })
}

async function run(){
  while(true){
    console.log('绿灯')
    await sleep(7 * 1000);
    console.log('黄灯')
    await sleep(3 * 1000);
    console.log('红灯')
    await sleep(10 * 1000);
  }
}

run()