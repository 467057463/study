type BuildLength = {
  length: number
}

const buildProps = <O extends {
  [K in keyof O]: O[K] extends BuildLength ? O[K] : [O[K]]
}>(props: O) => props;

buildProps({length: '1'})