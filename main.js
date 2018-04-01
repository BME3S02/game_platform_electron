const express = require('express');
const electron = require('electron');
const path = require('path');
const url = require('url');

// SET ENV
//process.env.NODE_ENV = 'development';

const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;
let addWindow;

// Listen for app to be ready
app.on('ready', function(){
  let webHost = express();
  webHost.use(express.static(__dirname + '/static'));
  webHost.listen(5000);

  // Create new window
  mainWindow = new BrowserWindow({frame: true, width: 1170, height: 570, minWidth: 1170, minHeight: 570, resizable: true});
  // Load html in window
  mainWindow.loadURL("http://localhost:5000/index.html");
  // Quit app when closed
  mainWindow.on('closed', function(){
    app.quit();
  });

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);
});

  const mainMenuTemplate = []
// // If OSX, add empty object to menu
// if(process.platform == 'darwin'){
//   mainMenuTemplate.unshift({});
// }
// // Add developer tools option if in dev
// if(process.env.NODE_ENV !== 'production'){
//   mainMenuTemplate.push({
//     label: 'Developer Tools',
//     submenu:[
//       {
//         role: 'reload'
//       },
//       {
//         label: 'Toggle DevTools',
//         accelerator:process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
//         click(item, focusedWindow){
//           focusedWindow.toggleDevTools();
//         }
//       }
//     ]
//   });
// }
