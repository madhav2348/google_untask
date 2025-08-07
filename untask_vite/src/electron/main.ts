import { app, BrowserWindow, ipcMain, Menu, Tray } from "electron";
import { notify } from "./notification.js";

let tray = null;

app.whenReady().then(() => {
  tray = new Tray("../assets/untask.svg");
  const contextMenu = Menu.buildFromTemplate([
    { label: "Open App", type: "normal" },
  ]);
  tray.setToolTip("Application in Tray");
  tray.setContextMenu(contextMenu);
});
app.on("ready", () => {
  const mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile(app.getAppPath() + "/dist-react/index.html");
});


ipcMain.on('push_notification',(event,{title, body, subtitle})=>{
  notify({ title, subtitle, body }).show()
})