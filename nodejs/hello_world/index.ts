class Base {
  greet(){
    console.log('abc')
  }
}

class Derived extends Base {
  greet(name?: string) {
    console.log(name)
  }
}