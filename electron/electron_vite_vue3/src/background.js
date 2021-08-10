import { app, BrowserWindow, protocol, Notification  } from "electron";
import dayjs from "dayjs";
import createProtocol from '../vite-plugin-electron/createProtocol';
const fs = require('fs')
const path = require('path')
const fileLocation = path.join(__dirname, 'test.txt')
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

function createWindow () {
  const win = new BrowserWindow({
    width: 600,
    height: 1000,
    title: process.env.VITE_NAME + dayjs()
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