'use strict';
angular.module('clientApp')
    .factory('notificationSocket', function (socketFactory) {
        var socket = socketFactory();
        socket.forward('showNotification');
        return socket;
    });