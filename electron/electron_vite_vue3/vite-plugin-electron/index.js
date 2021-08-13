import dev from './dev';
import build from './build'


export default function viteElectron (pluginConfig) {
  let config;
  return {
    name: 'vite-plugin-electron', 
    // 存储 config 变量
    configResolved(resolvedConfig) {
      config = {
        ...resolvedConfig,
        pluginConfig
      }
    },
    // 开发模式
    configureServer({httpServer}){
      httpServer.on('listening', (err, app) => {
        const address = httpServer.address();
        config.env.DEV_SERVER_URL = `http://${address.address}:${address.port}`;
        dev(config)
      })
    },   
    // 生成模式
    closeBundle(){ 
      build(config)
    }
  };
}