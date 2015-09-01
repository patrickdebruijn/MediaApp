'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('HeaderCtrl', function ($log, $scope, notificationSocket, showNotification, Notification) {
        $scope.$on('socket:showNotification', function (event, data) {
            showNotification(data, Notification);
        });
    });