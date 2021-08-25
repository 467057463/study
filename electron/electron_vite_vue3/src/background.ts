import { app, BrowserWindow, protocol, Notification, session } from "electron";
import dayjs from "dayjs";
import path from 'path';
import log from 'electron-log';
// @ts-ignore
import createProtocol from './createProtocol';

// log.error(__dirname, process.cwd())

protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true } }]);

async function createWindow () {
  const win = new BrowserWindow({
    width: 700,
    height: 1000,
    title: import.meta.env.VITE_NAME + dayjs(),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      webSecurity: false,
      preload: path.join(__preload, 'test.js'),
      partition: 'persist:test_session',
      webviewTag: true,
    }
  })
  const ses = session.fromPartition('persist:test_webview_session');
  ses.setProxy({
    proxyRules:"socks5://127.0.0.1:1080"
  })
  createProtocol('app', 'persist:test_session');  
  if(import.meta.env.DEV_SERVER_URL){
    win.loadURL(import.meta.env.DEV_SERVER_URL)
    // win.loadURL('http://www.google.com')
  } else {
    win.loadURL('app://./index.html')
    // win.loadURL('http://www.baidu.com')
  }
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

