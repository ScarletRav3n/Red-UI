const {app, Tray, Menu, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

const iconPath = path.join(__dirname, 'resources/red-0.png');
let appIcon;
let win;

function createWindow () {

  win = new BrowserWindow({
      frame: false,
	  height: 450,
	  width: 325,
	  minHeight: 400,
	  minWidth: 300,
	  backgroundColor: '#333333',
      icon:'resources/red.png'
  });

  appIcon = new Tray(iconPath);

  appIcon.on('click', function(){
	  win.show()
  });
  var contextMenu = Menu.buildFromTemplate([
	  {label: 'Open',
		  click: function(){win.show()}
	  },
	  {label: 'Quit',
		  click: function(){
	  		app.isQuitting = true;
	  		app.quit();}
	  }
  ]);
  appIcon.setToolTip("No peeking");
  appIcon.setContextMenu(contextMenu);



  win.loadURL(url.format({
    pathname: path.join(__dirname, 'src/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // win.on('minimize', function(event){
	//  event.preventDefault()
	//  	win.hide();
  // });

  win.on('closed', () => {
    win = null
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});