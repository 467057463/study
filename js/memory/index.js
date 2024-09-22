class B {}

class A {
  constructor () {
    this.b = new B()
  }
}

class BList {
  constructor () {
    this.values = []
  }
  push (b) {
    this.values.push(b)
  }
}

const aArray = Array(1000000).fill('').map(() => new A())
const bList = new BList()
aArray.forEach(a => { bList.push(a.b) })