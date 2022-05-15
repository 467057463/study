export type APIRespon<dataList = any, dataMeta = any> = {
  dataList: dataList,
  dataMeta: dataMeta
}

type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

type T = Flatten<number[]>;

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return 
  ? Return
  : never

type T2 = GetReturnType<() => number>


