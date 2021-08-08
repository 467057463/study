import { app, BrowserWindow } from "electron";

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 100
  })

  win.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
  createWindow()
})