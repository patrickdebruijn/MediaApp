module.exports = function (io) {
    'use strict';
    io.on('connection', function (socket) {

    });

    setInterval(function () {
        io.sockets.emit('showNotification', {
            date: new Date(),
            notification: 'test notification',
            source: 'patrick'
        });
        console.log('send');
    }, 5000);
};