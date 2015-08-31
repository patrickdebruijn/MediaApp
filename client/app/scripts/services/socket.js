'use strict';
angular.module('clientApp')
    .factory('chatSocket', function (socketFactory) {
        var socket = socketFactory();
        socket.forward('broadcast');
        return socket;
    });