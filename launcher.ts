'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const nativeImage = electron.nativeImage;

const path = require('path');
const config = require(path.join(__dirname, 'package.json'));

var mainWindow = null;
var image = nativeImage.createFromPath(path.join(__dirname, '/images/logo.png'));

app.setName(config.publishName);


if (process.platform === 'darwin'){
    app.dock.setIcon(image);

}

function createWindow() {

    var size = electron.screen.getPrimaryDisplay().workAreaSize;

    mainWindow = new BrowserWindow({
        x: 0,
        y: 0,
        // backgroundColor: '#eff4ff',
        width: size.width,
        height: size.height,
        resizable: true,
        title: config.publishName,
        icon: image,
    });

    mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

try {
    app.on('ready', createWindow);

    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('activate', function () {
        if (mainWindow === null) {
            createWindow();
        }
    });
}
catch (e) {
    console.log(e);
}