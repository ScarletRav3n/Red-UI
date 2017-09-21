function doNotify(){
    Notification.requestPermission().then(function (result){

        var notif = new Notification('Electron Shit', {
            'body': 'Pong to you too fucko',
            'icon': 'https://raw.githubusercontent.com/ScarletRav3n/Red-GUI/master/red.ico'
        });
    });
}