import { app, BrowserWindow, protocol, Notification  } from "electron";
import dayjs from "dayjs";
import createProtocol from '../vite-plugin-electron/createProtocol';
const fs = require('fs')
const path = require('path')
const fileLocation = path.join(__static, 'static', 'test.txt')
// const fileLocation = path.join(process.cwd(), 'public', 'test.txt')
const fileContents = fs.readFileSync(fileLocation, 'utf8')
console.log(fileContents)

function showNotification () {
  new Notification({ 
    title: 'test', body: fileContents 
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
console.log(__dirname)
function createWindow () {
  const win = new BrowserWindow({
    width: 600,
    height: 1000,
    title: process.env.VITE_NAME + dayjs() + fileContents,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload', 'test.js')
    }
  })
  createProtocol('app');  
  if(process.env.DEV_SERVER_URL){
    win.loadURL(process.env.DEV_SERVER_URL)
  } else {
    win.loadURL('app://./index.html')
  }
}

app.whenReady().then(() => {
  createWindow()
})
.then(() => {
  showNotification()
})