interface Animal {
  name: string
}

interface Dog extends Animal {
  age: number
}

let a: Animal;
let b: Dog;

a = b;
b = a;