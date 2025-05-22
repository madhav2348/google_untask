import { app, BrowserWindow } from "electron";
app.on('ready',()=>{
    const mainWindow = new BrowserWindow({width:800,height:600})
    mainWindow.loadFile(app.getAppPath()+'/dist-react/index.html')
})