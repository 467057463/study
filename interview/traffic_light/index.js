// function sleep(time){
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, time)
//   })
// }

function sleep(duration, twinkleDuration){
  return new Promise((resolve, reject) => {
    (function walk(){
      setTimeout(function(){
        duration--;
        console.log(duration)
        if(twinkleDuration && duration < twinkleDuration){
          console.log('闪灯')
        }
        if(duration > 0){
          walk()
        }else{
          resolve()
        }
      }, 1000)
    })()
  })
}

async function run(){
  while(true){
    console.log('绿灯')
    await sleep(20, 5);
    console.log('黄灯')
    await sleep(3);
    console.log('红灯')
    await sleep(10, 5);
  }
}

run()