const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow();
  win.loadFile("index.html");
}

app.on("ready", () => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform === "darwin") {
    app.quit();
  }
});
