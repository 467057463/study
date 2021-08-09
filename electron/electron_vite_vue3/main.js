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
    const url = require('url').format({
      protocol: 'file',
      slashes: true,
      pathname: require('path').join(__dirname, 'index.html')
    })
    
    win.loadURL(url)
    // win.loadURL('./index.html')
  }
}

app.whenReady().then(() => {
  createWindow()
})