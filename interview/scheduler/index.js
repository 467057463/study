class Scheduler{
  queue = [];
  running = 0;

  run(){
    if(this.queue.length === 0 || this.running === 2){
      return;
    }

    const p = this.queue.shift();
    this.running++;
    p().then(()=>{
      this.running --;
      this.run()
    })
  }
  add(promise){
    this.queue.push(promise);
    this.run();
  }
}


const timout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})

var scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() => timout(time).then(() => {
    console.log(order);
  }))
}

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
