import { app, BrowserWindow } from "electron";

console.log(process.env)

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 1000
  })

  if(process.env.DEV_SERVER_URL){
    win.loadURL(process.env.DEV_SERVER_URL)
  } else {

  }
}

app.whenReady().then(() => {
  createWindow()
})