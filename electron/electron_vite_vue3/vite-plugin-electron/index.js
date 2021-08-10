import start from './dev';
import build from './build'
import path from 'path'

let config;
export default function viteElectron (pluginConfig) {
  return {
    name: 'vite-plugin-electron', 
    // 开发模式
    configureServer({httpServer}){
      httpServer.on('listening', (err, app) => {
        const address = httpServer.address();
        config.env.DEV_SERVER_URL = `http://${address.address}:${address.port}`;
        start(config)
      })
    },
    
    // 存储 config 变量
    configResolved(resolvedConfig) {
      config = {
        ...resolvedConfig,
        pluginConfig
      }
    },
    
    // 生成模式
    closeBundle(){ 
      build(config)
    }
  };
}