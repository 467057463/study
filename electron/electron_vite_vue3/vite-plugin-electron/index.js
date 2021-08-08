import start from './lib/dev';

export default function viteElectron () {
  return {
    name: 'vite-plugin-electron', 
    configureServer(server){
      // console.log(server.config);
      server.httpServer.on('listening', (err, app) => {
        const address = server.httpServer.address();
        start(server.config, address)
      })
    },
    // resolveId ( source ) {
    //   if (source === 'virtual-module') {
    //     return source; 
    //   }
    //   return null;
    // },
    // load ( id ) {
    //   if (id === 'virtual-module') {
    //     return 'export default "This is virtual!"';
    //   }
    //   return null;
    // }
  };
}