'use strict';

angular.module('clientApp')
    .value('messageFormatter', function (date, nick, message) {
        return date.toLocaleTimeString() + ' - ' +
            nick + ' - ' +
            message + '\n';

    });