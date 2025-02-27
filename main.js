const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

function createWindow() {
  const win = new BrowserWindow({
    width: 300,
    height: 550,
    minWidth: 300,
    minHeight: 550,
    maxWidth: 300,
    maxHeight: 550,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      enableRemoteModule: false,
      contextIsolation: true,
      hardwareAcceleration: false,
      nodeIntegration: true
    }
  })

  win.loadFile('./src/index.html')


  // Remove the menu
  win.setMenu(null);

  // Load the icon
  const iconPath = path.join(__dirname, './src/images/ICON.png');
  win.setIcon(iconPath); // Updated to use iconPath
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
