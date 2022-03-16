function example(x: string | number | null, y: string | boolean | number){
  if(x === y){
    console.log(x)
  } else {
    console.log(x)
  }
}

interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  // 在类型中排除 'null' 和 'undefined' 
  if (container.value != null) {
    console.log(container.value);                           
    // Container.value 的类型为 number
 
    // 现在可以放心的执行乘法了
    container.value *= factor;
  }
}

let x: string | number = Math.random() < 0.5 ? 10 : "hello world!";

x = 'a'

x

x = true

x

interface Fish {
  swim: () => void
}
interface Brid {
  fly: () => void
}
function isFish(pet: Fish | Brid) {
  return (pet as Fish).swim !== undefined
}

function getSmallPet(val: number): Fish | Brid{
  if(val > 5){
    return {
      swim(){}
    }
  }
  return {
    fly(){}
  }
}

let pet = getSmallPet(10)

if(isFish(pet)){
  pet.swim()
} else {
  console.log(pet)
}