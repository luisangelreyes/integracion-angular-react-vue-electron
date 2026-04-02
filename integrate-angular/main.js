const { app, BrowserWindow } = require ('electron');
const { create } = require('node:domain');
const path = require('node:path');

let win; 

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    if (process.env.DEBUG){

    win.loadURL(`http://localhost:4200`);
    
    }else{
        win.loadURL(`file://${__dirname}/dist/integrate-angular/index.html`)
    }

    win.on ('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on ('activate', () => {
    if (win === null) {
        createWindow();
    }
});