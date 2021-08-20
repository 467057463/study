import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteElectron from 'vite-plugin-electron-builder';
// import viteElectron from './vite-plugin-electron';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    viteElectron({
      mainProcessFile: 'src/background.ts',
      preloadDir: 'src/preload',
      builderOptions: {
        appId: 'com.example.Vite_electron_vue3',
        productName: 'Vite_electron_vue3',
        copyright: 'Copyright © 2021',
        directories: {
          output: 'dist_application',
          buildResources: 'build',
          app: 'dist'
        },
        asar: true,
        win: {
          target: [
            {
              target: 'nsis',
              arch: ['x64'],
            },
          ],
          artifactName: '${productName} Setup ${version}.${ext}',
        },
        nsis: {
          oneClick: false,
          language: '2052',
          perMachine: true,
          allowToChangeInstallationDirectory: true,
          include: "build/installer.nsh"
        },
      }
    })
  ]
})