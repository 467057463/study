import start from './dev';
let config;

export default function viteElectron () {
  return {
    name: 'vite-plugin-electron', 
    configureServer(server){
      console.log(server.config);
      server.httpServer.on('listening', (err, app) => {
        const address = server.httpServer.address();
        start(server.config, address)
      })
    },
    
    configResolved(resolvedConfig) {
      // 存储最终解析的配置
      config = resolvedConfig
    },

    closeBundle(){
      console.log('closeBundle', config)
    }
  };
}