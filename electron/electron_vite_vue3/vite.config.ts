import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteElectron from 'vite-plugin-electron-builder';
// import viteElectron from './vite-plugin-electron';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    viteElectron({
      mainProcessFile: 'src/background.js',
      preloadDir: 'src/preload',
    })
  ]
})

// {
//   mainProcessFile: 'src/background.js',
//   preloadDir: 'src/preload',
//   builderOptions: {
//     appId: '',
//     productName: '',
//     copyright: 'Copyright © 2021',
//     directories: {
//       output: 'dist_application',
//       buildResources: 'build',
//       app: 'dist'
//     },
//     asar: true,
//     win: {
//       target: [
//         {
//           target: 'nsis',
//           arch: ['x64'],
//         },
//       ],
//       artifactName: '${productName} Setup ${version}.${ext}',
//     },
//     nsis: {
//       oneClick: false,
//       language: '2052',
//       perMachine: true,
//       allowToChangeInstallationDirectory: true,
//       include: "build/installer.nsh"
//     },
//   }
// }