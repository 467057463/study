<<<<<<< HEAD

class Sonar {  
  public ping(s) {
    console.log(s)
  }
  protected pong(){
    return 'hi'
  }
}

const c = new Sonar();
c.ping

class Song extends Sonar {
  public howdy(){
    console.log(this.pong)
  }
  pong(): string {
    return 'sss'
  }
}
=======
type BuildLength = {
  length: number
}

const buildProps = <O extends {
  [K in keyof O]: O[K] extends BuildLength ? O[K] : [O[K]]
}>(props: O) => props;

buildProps({length: '1'})
>>>>>>> 92ff83c7e1cd5a1faf10041dad9afc06701bbe39
