
export default function myExample(){
  return {
    name: 'my-example',
    // options(options){
    //   console.log('options', options, this)
    // },
    // buildStart(options){
    //   console.log('buildStart', options)
    // },
    resolveId(source, importer, options){
      console.log('resolveId', source, importer, options)
      if (source === 'virtual-module') {
        return source;
      }
      return null;
    },
    load( id ){
      if (id === 'virtual-module') {
        return 'export default "This is virtual!"';
      }
      return null; 
    }
  }
}