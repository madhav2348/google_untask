const { app, BrowserWindow , Tray , Menu} = require("electron");

function createWindow() {
  const win = new BrowserWindow();
  win.loadFile("index.html");
}
let tray = null;
app.on('ready',()=>{
 tray = new Tray('./assets/untask.png')
  const contextMenu = Menu.buildFromTemplate([ 
    {label:'Open App' ,  type:'normal'}
   ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
  createWindow()
})
app.whenReady().then(() => {
 
})

app.on("window-all-closed", () => {
  if (!process.platform === "darwin") {
    app.quit();
  }
});
