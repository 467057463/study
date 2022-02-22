import HelloWrold from './components/HelloWorld'


export default function App(){
  return (
    <>
      <input v-model={foo.value}/>
      <HelloWrold foo={foo.value}/>
      <loading/>
    </>
  )
}