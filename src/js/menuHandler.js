const $ = require('jquery');
const {remote} = require('electron');
var win = remote.getCurrentWindow();

$('#minimize').click(function(){
	win.minimize();
});

$('#maximize').click(function() {
	if(win.isMaximized()){
		win.unmaximize();
	}else{
		win.maximize();
	}
	console.log(win.isMaximized());
});

$('#close').click(function(){
	win.close();
});
