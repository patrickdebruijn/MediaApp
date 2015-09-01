'use strict';
angular.module('clientApp')
    .value('showNotification', function (data, Notification) {
        Notification.info(data.notification + ' - ' + data.source);
    });