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