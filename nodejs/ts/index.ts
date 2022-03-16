function combine<T>(arr1: T[], arr2: T[]): T[]{
  return arr1.concat(arr2)
}

const arr = combine<string | number>([1], ['1'])

type types = 'all' | 'pined' | 'unread';
type PropType<O> = {
  [K in types]?: O
}

type InforItem = {
  name: string;
  age: number
}

const props: PropType<InforItem> = {
  all: {
    name: '11',
    age: 11
  }
}

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}
 
function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}

filter1([1], (i) => !!i)
filter2([1], (i)=> i> 0)

function firstElement<T>(arr: T[]): T | undefined{
  return arr[0]
}

const s = firstElement([1, 2])

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

const parsed = map(['1'], (n) => parseInt(n))

function longest<Type extends {length: number}>(a: Type, b: Type){
  if(a.length > b.length){
    return a;
  }
  return b
}

longest('a', 'bbb')
longest("111111", [1111])
longest(2, 1)


function minimumLength<Type extends {length: number}>(obj: Type, minimum: number): Type{
  if(obj.length >= minimum){
    return obj;
  }
  return {
    length: minimum
  }
}