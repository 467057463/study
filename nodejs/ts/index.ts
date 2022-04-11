
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