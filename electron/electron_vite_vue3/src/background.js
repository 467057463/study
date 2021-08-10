import { app, BrowserWindow, protocol } from "electron";
import dayjs from "dayjs";
import createProtocol from '../vite-plugin-electron/createProtocol'

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