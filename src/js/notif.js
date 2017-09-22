function notif(title, body){
    Notification.requestPermission().then(function (result){

        var myNotif = new Notification(title, {
            'body': body,
            'icon': './resources/red.png'
        });
    });
}