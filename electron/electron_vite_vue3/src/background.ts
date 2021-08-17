// @ts-nocheck
import { app, BrowserWindow, protocol, Notification  } from "electron";
import dayjs from "dayjs";
import createProtocol from './createProtocol';
const fs = require('fs')
const path = require('path')
const fileLocation = path.join(__static, 'static', 'test.txt')
// const fileLocation = path.join(process.cwd(), 'public', 'test.txt')
const fileContents = fs.readFileSync(fileLocation, 'utf8')
console.log(fileContents)

function showNotification (title: string):void {
  new Notification({ 
    title, 
    body: fileContents 
  }).show()
}

protocol.registerSchemesAsPrivileged(
  [
    { 
      scheme: 'app', 
      privileges: { 
        secure: true, 
        standard: true 
      } 
    }
  ]
);
console.log(__dirname, process.cwd())
function createWindow () {
  const win = new BrowserWindow({
    width: 700,
    height: 1000,
    title: process.env.VITE_NAME + dayjs() + fileContents,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload', 'test.js')
    }
  })
  createProtocol('app');  
  if(process.env.DEV_SERVER_URL){
    win.loadURL(process.env.DEV_SERVER_URL)
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
.then(() => {
  showNotification('bbs')
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})