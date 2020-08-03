const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow;
function createWindow() {
    let display = electron.screen.getPrimaryDisplay();
    let screen_width = display.bounds.width;
  let screen_height = display.bounds.height;
  
   // run backend script api executable 
    var executablepath = 'specs.exe';
    var child = require('child_process').exec;

    child(executablepath, function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data.toString());
    });

  
    mainWindow = new BrowserWindow({
      width: 700,
      height: 700,
      icon: "",
    //   transparent: true,
    //   frame: false,
    //   x: screen_width - 470,
    //   y: screen_height - 700,
    });
     

    mainWindow.loadURL(
        isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
    app.quit();
    }
    
    // kill backend script api 
    var child = require("child_process").exec;
     child("taskkill /F /IM specs.exe", function (err, data) {
       if (err) {
         console.error(err);
         return;
       }
       console.log('backend script ended');
     });
});

app.on("activate", () => {
    if (mainWindow === null) {
    createWindow();
    }
});
