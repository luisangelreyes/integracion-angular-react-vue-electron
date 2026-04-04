const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  if (process.env.DEBUG){
    win.loadURL('http://localhost:3000');
  }else{ 
    const startUrl = path.join(__dirname, 'build', 'index.html'); 
      win.loadFile(startUrl); 
  }

  win.on('closed', () =>{
    win = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});